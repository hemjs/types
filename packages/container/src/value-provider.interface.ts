import { ProviderToken } from './provider-token.interface';

/**
 * Configures the `Container` to return a value for a token.
 */
export interface ValueProvider<T = any> {
  /**
   * Provider token.
   */
  provide: ProviderToken;

  /**
   * The value to inject.
   */
  useValue: T;
}
