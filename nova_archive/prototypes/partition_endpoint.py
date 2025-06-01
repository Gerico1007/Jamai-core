from fastapi import FastAPI, HTTPException
from music21 import stream, note, chord, converter
import subprocess
import os
from pydantic import BaseModel
import logging

app = FastAPI()

# Configure logging for session tracking (Aureon)
logging.basicConfig(filename='session.log', level=logging.INFO)

# Request model for user commands
class CommandRequest(BaseModel):
    command: str
    measure: int = 1  # Default to first measure
    musician_id: str = "default"  # Virtual musician identifier

# Parse simple commands to music21 objects
def parse_command_to_music21(command: str, measure: int) -> stream.Stream:
    s = stream.Stream()
    try:
        command = command.lower().strip()
        if "add c major chord" in command:
            c = chord.Chord(["C4", "E4", "G4"], quarterLength=1)
            s.append(c)
        elif "play softly" in command:
            n = note.Note("C4", quarterLength=1)
            n.dynamic = "p"
            s.append(n)
        else:
            raise ValueError(f"Unsupported command: {command}")
        logging.info(f"Parsed command '{command}' for measure {measure}")
        return s
    except Exception as e:
        logging.error(f"Error parsing command: {str(e)}")
        raise

@app.post("/partition")
async def get_partition(request: CommandRequest):
    try:
        # Generate score with music21
        score = parse_command_to_music21(request.command, request.measure)
        score.write('musicxml', fp='score.xml')

        # Refine with MuseScoreCLI
        if not os.path.exists('score.xml'):
            raise FileNotFoundError("MusicXML file not generated")
        subprocess.run(['musescore', 'score.xml', '-o', 'score.abc'], check=True)

        # Read ABC output
        if not os.path.exists('score.abc'):
            raise FileNotFoundError("ABC file not generated")
        with open('score.abc', 'r') as f:
            abc_content = f.read()

        # Log session action (Aureon)
        logging.info(f"Generated ABC for command '{request.command}' by musician {request.musician_id}")

        return {"abc": abc_content, "musician_id": request.musician_id}
    except Exception as e:
        logging.error(f"Error processing partition: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/docs")
async def get_docs():
    docs = {
        "ComposerChat": {
            "title": "Using ComposerChat",
            "content": "<h2>ComposerChat Guide</h2><p>Type commands like <code>\"add C major chord\"</code> or <code>\"play softly\"</code>.</p>"
        },
        "MusicianSelector": {
            "title": "Selecting Musicians",
            "content": "<h2>MusicianSelector Guide</h2><p>Choose virtual musicians to customize your ensemble.</p>"
        }
    }
    return docs
