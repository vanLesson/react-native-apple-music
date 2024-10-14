import { NativeEventEmitter, NativeModules } from 'react-native';

// eslint-disable-next-line import/named
const { MusicModule } = NativeModules;
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const nativeEventEmitter = new NativeEventEmitter(MusicModule);
class Player {
    /**
     * Skips to the next entry in the playback queue.
     */
    static skipToNextEntry() {
        MusicModule.skipToNextEntry();
    }
    /**
     * Toggles the playback state between play and pause.
     */
    static togglePlayerState() {
        MusicModule.togglePlayerState();
    }
    /**
     * Starts playback of the current song.
     */
    static play() {
        MusicModule.play();
    }
    /**
     * Pauses playback of the current song.
     */
    static pause() {
        MusicModule.pause();
    }
    /**
     * Retrieves the current playback state from the native music player.
     * This function returns a promise that resolves to the current playback state.
     * @returns {Promise<IPlaybackState>} A promise that resolves to the current playback state of the music player.
     */
    static getCurrentState() {
        return new Promise((res, rej) => {
            try {
                MusicModule.getCurrentState(res);
            }
            catch (error) {
                console.error('Apple Music Kit: getCurrentState failed.', error);
                rej(error);
            }
        });
    }
    /**
     * Method to add a listener for an event.
     * @param eventType - Type of the event to listen for.
     * @param listener - Function to execute when the event is emitted.
     * @returns An EmitterSubscription which can be used to remove the listener.
     */
    static addListener(eventType, listener) {
        return nativeEventEmitter.addListener(eventType, listener);
    }
    /**
     * Method to remove all listeners of event
     * @param eventType - Type of the event to remove listener for.
     */
    static removeAllListeners(eventType) {
        return nativeEventEmitter.removeAllListeners(eventType);
    }
}

export { Player as default };
//# sourceMappingURL=player.js.map
