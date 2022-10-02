import { Factory } from './factory.interface';
import { ProviderToken } from './provider-token.interface';

/**
 * Configures the `Container` to return a value by invoking a `useFactory` function.
 */
export interface FactoryProvider<T = any> {
  /**
   * Provider token.
   */
  provide: ProviderToken;

  /**
   * A function to invoke to create an instance for this `token`. The function is
   * invoked with resolved values of token`s from an instance of the container.
   */
  useFactory: Factory<T>;
}
