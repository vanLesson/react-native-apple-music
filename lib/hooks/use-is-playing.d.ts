/**
 * Custom React hook to track music playback status.
 * It interacts with the native music player via the MusicKit to determine
 * whether music is currently playing and provides a reactive `isPlaying` state.
 * @returns {{ isPlaying: boolean; error?: Error }} The `isPlaying` state indicating whether music is currently playing.
 */
declare const useIsPlaying: () => {
    isPlaying: boolean;
    error?: Error | undefined;
};
export { useIsPlaying as default };
