
import { createContext, useContext, useState } from 'react';
import audio from '../assets/apt.mp3'

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {

    const [audio, setAudio] = useState(null);
    const [audioList, setAudioList] = useState([]);
    const [audioName, setAudioName] = useState('');

    return (
        <AudioContext.Provider value={{ audio,audioName,setAudioName, setAudio }}>
            {children}
        </AudioContext.Provider>
    );

};

export const useAudio = () => {


    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};
