"use client"
import speech, { useSpeechRecognition } from 'react-speech-recognition'
import react, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import 'regenerator-runtime/runtime';



function App () {
    const {listening, transcript, resetTranscript} = useSpeechRecognition();
    return (
        <div className="mt-8 flex flex-wrap justify-center gap-4">
        {listening ? (
            <p> Habla, estoy escuchando 🦻 </p>
        ) : ( 
            <p> Dale click al boton y dime que hacer</p>
         )}
            
          <button className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring"
          onClick={()=>{
            speech.startListening({ language: 'es-CO' });
          }}>
          🎤 ¿En que te puedo ayudar?
          </button>
          {
            transcript &&<div>{transcript}</div>
          }
        </div>
    );
}

export default App;