import { MusicItem } from "./music-item.js";
interface IUserTrack {
    id: number;
    title: string;
    subtitle: string;
    type: MusicItem;
}
interface ITracksFromLibrary {
    recentlyPlayedItems: IUserTrack[];
}
export { IUserTrack, ITracksFromLibrary };
