import { PlaybackStatus } from "./playback-status.js";
import { ISong } from "./song.js";
interface IPlaybackState {
    currentSong: ISong;
    playbackRate: number;
    playbackStatus: PlaybackStatus;
    playbackTime: number;
}
export { IPlaybackState };
