import { IAlbum } from "./album.js";
import { ISong } from "./song.js";
declare enum CatalogSearchType {
    SONGS = "songs",
    ALBUMS = "albums"
}
interface ICatalogSearch {
    songs: ISong[];
    albums: IAlbum[];
}
export { CatalogSearchType, ICatalogSearch };
