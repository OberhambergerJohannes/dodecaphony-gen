import React, {useEffect, useState} from 'react';
import useAbcNotation from './useAbcNotation.jsx';
import {Box, CircularProgress, Button} from '@mui/material';
import * as ABCJS from "abcjs";
import 'abcjs/abcjs-audio.css';

/**
 * show music notes in a "picture"
 * abcString: ABC notation string
 * loading: state of loading music notes as a boolean
 * @returns {Element}
 * @constructor
 */
function PieceDisplay({abcString, loading, zoom = 1.0}) {
    const notationRef = useAbcNotation(abcString, loading);

    const [synthControl, setSynthControl] = useState(null);

    useEffect(() => {
        if (!loading && notationRef.current) {
            const visualObj = ABCJS.renderAbc(notationRef.current, abcString)[0];
            const synth = new ABCJS.synth.CreateSynth();
            synth.init({
                visualObj: visualObj,
            }).then(() => {
                const control = new ABCJS.synth.SynthController();
                control.load('#audio', synth, {
                    displayPlay: true,
                    displayLoop: true,
                    displayRestart: true,
                    displayProgress: true
                });
                control.setTune(visualObj, true, {
                    displayLoop: true,
                    displayProgress: true
                });
                setSynthControl(control);
            });
        }
    }, [loading, abcString]);

    return (
        <Box display="flex"
             justifyContent="center"
             my={4}
             style={{width: "100%"}}>
            <Box
                sx={{
                    width: "100%",
                    minWidth: 600,
                    maxWidth: 800,
                    minHeight: 200,
                    maxHeight: 200,
                    overflowX: "auto", //optional scroll bar
                    bgcolor: "#ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {loading ? (
                    <CircularProgress color="secondary"/>
                ) : (
                    <div ref={notationRef} style={{
                        width: "100%",
                        transform: `scale(${zoom})`,
                        transformOrigin: "center left",
                        height: "auto",
                    }}/>
                )}
                <div id="audio"></div>
                <Button onClick={() => synthControl?.download('music.wav', 'audio/wav')}
                        disabled={!synthControl}>
                    Download
                </Button>
            </Box>
        </Box>
    );
}

export default PieceDisplay;
