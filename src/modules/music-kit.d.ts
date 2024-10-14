import { CatalogSearchType, ICatalogSearch } from "../types/catalog-search.js";
import { MusicItem } from "../types/music-item.js";
import { ITracksFromLibrary } from "../types/tracks-from-library.js";
interface IEndlessListOptions {
    offset?: number;
    limit?: number;
}
declare class MusicKit {
    /**
     * Searches the Apple Music catalog using the specified search terms, types, and options.
     * @param {string} search - The search query string.
     * @param {CatalogSearchType[]} types - The types of catalog items to search for.
     * @param {IEndlessListOptions} [options] - Additional options for the search.
     * @returns {Promise<ISong[]>} A promise that resolves to the search results.
     */
    /**
     * Searches the Apple Music catalog using the specified search terms, types, and options.
     * @param {string} search - The search query string.
     * @param {CatalogSearchType[]} types - The types of catalog items to search for.
     * @param {IEndlessListOptions} [options] - Additional options for the search.
     * @returns {Promise<ISong[]>} A promise that resolves to the search results.
     */
    static catalogSearch(search: string, types: CatalogSearchType[], options?: IEndlessListOptions): Promise<ICatalogSearch | undefined>;
    /**
     * @param itemId - ID of collection to be set in a player's queue
     * @param {MusicItem} type - Type of collection to be found and set
     * @returns {Promise<boolean>} A promise is resolved when tracks successfully added to a queue
     */
    /**
     * @param itemId - ID of collection to be set in a player's queue
     * @param {MusicItem} type - Type of collection to be found and set
     * @returns {Promise<boolean>} A promise is resolved when tracks successfully added to a queue
     */
    static setPlaybackQueue(itemId: string, type: MusicItem): Promise<void>;
    /**
     * Get a list of recently played items in user's library
     * @return {Promise<ITracksFromLibrary[]>} A promise returns a list of recently played items including tracks, playlists, stations, albums
     */
    /**
     * Get a list of recently played items in user's library
     * @return {Promise<ITracksFromLibrary[]>} A promise returns a list of recently played items including tracks, playlists, stations, albums
     */
    static getTracksFromLibrary(): Promise<ITracksFromLibrary>;
}
export { MusicKit as default };
