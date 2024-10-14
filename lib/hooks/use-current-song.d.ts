import { ISong } from "../types/song.js";
/**
 * A hook to track the currently playing song from Apple Music.
 * It listens for changes from the native music player and updates the `currentSong` state accordingly.
 *
 * @returns {{ song?: ISong; error?: Error }} The `song` state indicating the current song details or null if no song is playing.
 */
declare const useCurrentSong: () => {
    song?: ISong | undefined;
    error?: Error | undefined;
};
export { useCurrentSong as default };
