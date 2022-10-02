import { NoArgument } from '../core/no-argument.interface';
import { ProviderToken } from './provider-token.interface';

/**
 * Configures the `Container` to return an instance of `useClass` for a token.
 */
export interface ClassProvider<T = any> {
  /**
   * Provider token.
   */
  provide: ProviderToken;

  /**
   * Class to instantiate for the `token`.
   */
  useClass: NoArgument<T>;
}
