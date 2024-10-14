import { NativeModules } from 'react-native';

const { MusicModule } = NativeModules;
class MusicKit {
    /**
     * Searches the Apple Music catalog using the specified search terms, types, and options.
     * @param {string} search - The search query string.
     * @param {CatalogSearchType[]} types - The types of catalog items to search for.
     * @param {IEndlessListOptions} [options] - Additional options for the search.
     * @returns {Promise<ISong[]>} A promise that resolves to the search results.
     */
    static async catalogSearch(search, types, options) {
        try {
            return (await MusicModule.catalogSearch(search, types, options));
        }
        catch (error) {
            console.error('Apple Music Kit: Catalog Search failed.', error);
            return {
                songs: [],
                albums: [],
            };
        }
    }
    /**
     * @param itemId - ID of collection to be set in a player's queue
     * @param {MusicItem} type - Type of collection to be found and set
     * @returns {Promise<boolean>} A promise is resolved when tracks successfully added to a queue
     */
    static async setPlaybackQueue(itemId, type) {
        try {
            await MusicModule.setPlaybackQueue(itemId, type);
        }
        catch (error) {
            console.error('Apple Music Kit: Setting Playback Failed.', error);
        }
    }
    /**
     * Get a list of recently played items in user's library
     * @return {Promise<ITracksFromLibrary[]>} A promise returns a list of recently played items including tracks, playlists, stations, albums
     */
    static async getTracksFromLibrary() {
        try {
            const result = await MusicModule.getTracksFromLibrary();
            return result;
        }
        catch (error) {
            console.error('Apple Music Kit: Getting tracks from user library failed.', error);
            return {
                recentlyPlayedItems: [],
            };
        }
    }
}

export { MusicKit as default };
//# sourceMappingURL=music-kit.js.map
