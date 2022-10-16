/**
 * Represents an instantiable class `T` with constructor parameters.
 */
export interface Type<T = any> extends Function {
  new (...args: any[]): T;
}
