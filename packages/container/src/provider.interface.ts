import { ClassProvider } from './class-provider.interface';
import { ExistingProvider } from './existing-provider.interface';
import { FactoryProvider } from './factory-provider.interface';
import { ValueProvider } from './value-provider.interface';

export type Provider<T = any> =
  | ValueProvider<T>
  | ClassProvider<T>
  | FactoryProvider<T>
  | ExistingProvider<T>;
