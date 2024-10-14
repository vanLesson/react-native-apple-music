import { NativeModules } from 'react-native';

const { MusicModule } = NativeModules;
class Auth {
    /**
     * Requests authorization to access the user's Apple Music account.
     * This function returns a promise that resolves to the authorization status.
     * @returns {Promise<AuthStatus>} A promise that resolves to the authorization status of the user's Apple Music account.
     */
    static authorize() {
        return new Promise((res, rej) => {
            try {
                MusicModule.authorization(res);
            }
            catch (error) {
                console.error('Apple Music Kit: Authorize failed.', error);
                rej(error);
            }
        });
    }
    /**
     * Checks the user's subscription status for Apple Music.
     * @returns {Promise<ICheckSubscription>} A promise that resolves to the subscription status.
     */
    static async checkSubscription() {
        try {
            const result = await MusicModule.checkSubscription();
            return result;
        }
        catch (error) {
            console.error('Apple Music Kit: Check subscription failed.', error);
            return {
                canPlayCatalogContent: false,
                hasCloudLibraryEnabled: false,
                isMusicCatalogSubscriptionEligible: false,
            };
        }
    }
}

export { Auth as default };
//# sourceMappingURL=auth.js.map
