import { useState, useEffect } from 'react';
import Player from '../modules/player.js';
import { PlaybackStatus } from '../types/playback-status.js';

/**
 * Custom React hook to track music playback status.
 * It interacts with the native music player via the MusicKit to determine
 * whether music is currently playing and provides a reactive `isPlaying` state.
 * @returns {{ isPlaying: boolean; error?: Error }} The `isPlaying` state indicating whether music is currently playing.
 */
const useIsPlaying = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        Player.getCurrentState()
            .then((state) => setIsPlaying(state?.playbackStatus === PlaybackStatus.PLAYING))
            .catch(setError);
        const listener = Player.addListener('onPlaybackStateChange', (state) => {
            setError(undefined);
            setIsPlaying(state.playbackStatus === PlaybackStatus.PLAYING);
        });
        return () => listener.remove();
    }, []);
    return { isPlaying, error };
};

export { useIsPlaying as default };
//# sourceMappingURL=use-is-playing.js.map
