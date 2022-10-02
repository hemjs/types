/**
 * Represents an instantiable class `T` that doesn't require arguments to the constructor.
 */
export interface NoArgument<T = any> extends Function {
  new (): T;
}
