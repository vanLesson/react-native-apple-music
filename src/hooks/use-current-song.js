import { useState, useEffect } from 'react';
import Player from '../modules/player.js';

/**
 * A hook to track the currently playing song from Apple Music.
 * It listens for changes from the native music player and updates the `currentSong` state accordingly.
 *
 * @returns {{ song?: ISong; error?: Error }} The `song` state indicating the current song details or null if no song is playing.
 */
const useCurrentSong = () => {
    const [currentSong, setCurrentSong] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        Player.getCurrentState()
            .then((state) => setCurrentSong(state.currentSong))
            .catch(setError);
        const listener = Player.addListener('onCurrentSongChange', (state) => {
            setError(undefined);
            setCurrentSong(state?.currentSong);
        });
        return () => listener.remove();
    }, []);
    return { song: currentSong, error };
};

export { useCurrentSong as default };
//# sourceMappingURL=use-current-song.js.map
