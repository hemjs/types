import { ProviderToken } from './provider-token.interface';

/**
 * Describes the interface of a container that exposes methods to read its entries.
 */
export interface IContainer {
  /**
   * Find an entry of the container based on the provided token.
   * @param token the provider token of the entry to look for
   * @returns an entry from the container if defined
   * @throws Error if no entry was found for the token
   * @throws Error if error while retrieving the entry
   */
  get<T>(token: ProviderToken): T;

  /**
   * Check if an entry for the given provider token exists.
   * @param token the provider token of the entry to look for
   * @returns whether an entry for the given provider exists
   */
  has(token: ProviderToken): boolean;
}
