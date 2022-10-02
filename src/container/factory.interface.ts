import { IContainer } from './container.interface';

/**
 * Represents type for a factory. A factory is a function that is able to create an object.
 * It is provided with an instance of the container in order to access required dependencies.
 */
export type Factory<T = any> = (container: IContainer) => T;
