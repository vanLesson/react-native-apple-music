import { AuthStatus } from "../types/auth-status.js";
import { ICheckSubscription } from "../types/check-subscription.js";
declare class Auth {
    /**
     * Requests authorization to access the user's Apple Music account.
     * This function returns a promise that resolves to the authorization status.
     * @returns {Promise<AuthStatus>} A promise that resolves to the authorization status of the user's Apple Music account.
     */
    /**
     * Requests authorization to access the user's Apple Music account.
     * This function returns a promise that resolves to the authorization status.
     * @returns {Promise<AuthStatus>} A promise that resolves to the authorization status of the user's Apple Music account.
     */
    static authorize(): Promise<AuthStatus>;
    /**
     * Checks the user's subscription status for Apple Music.
     * @returns {Promise<ICheckSubscription>} A promise that resolves to the subscription status.
     */
    /**
     * Checks the user's subscription status for Apple Music.
     * @returns {Promise<ICheckSubscription>} A promise that resolves to the subscription status.
     */
    static checkSubscription(): Promise<ICheckSubscription>;
}
export { Auth as default };
