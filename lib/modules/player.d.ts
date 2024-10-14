import { EmitterSubscription } from 'react-native';
import { IPlaybackState } from "../types/playback-state.js";
import { ISong } from "../types/song.js";
interface IPlayerEvents {
    onPlaybackStateChange: IPlaybackState;
    onCurrentSongChange: ISong;
}
declare class Player {
    /**
     * Skips to the next entry in the playback queue.
     */
    /**
     * Skips to the next entry in the playback queue.
     */
    static skipToNextEntry(): void;
    /**
     * Toggles the playback state between play and pause.
     */
    /**
     * Toggles the playback state between play and pause.
     */
    static togglePlayerState(): void;
    /**
     * Starts playback of the current song.
     */
    /**
     * Starts playback of the current song.
     */
    static play(): void;
    /**
     * Pauses playback of the current song.
     */
    /**
     * Pauses playback of the current song.
     */
    static pause(): void;
    /**
     * Retrieves the current playback state from the native music player.
     * This function returns a promise that resolves to the current playback state.
     * @returns {Promise<IPlaybackState>} A promise that resolves to the current playback state of the music player.
     */
    /**
     * Retrieves the current playback state from the native music player.
     * This function returns a promise that resolves to the current playback state.
     * @returns {Promise<IPlaybackState>} A promise that resolves to the current playback state of the music player.
     */
    static getCurrentState(): Promise<IPlaybackState>;
    /**
     * Method to add a listener for an event.
     * @param eventType - Type of the event to listen for.
     * @param listener - Function to execute when the event is emitted.
     * @returns An EmitterSubscription which can be used to remove the listener.
     */
    /**
     * Method to add a listener for an event.
     * @param eventType - Type of the event to listen for.
     * @param listener - Function to execute when the event is emitted.
     * @returns An EmitterSubscription which can be used to remove the listener.
     */
    static addListener(eventType: keyof IPlayerEvents, listener: (eventData: any) => void): EmitterSubscription;
    /**
     * Method to remove all listeners of event
     * @param eventType - Type of the event to remove listener for.
     */
    /**
     * Method to remove all listeners of event
     * @param eventType - Type of the event to remove listener for.
     */
    static removeAllListeners(eventType: keyof IPlayerEvents): void;
}
export { Player as default };
