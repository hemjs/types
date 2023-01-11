export type PathArgument = string | RegExp | (string | RegExp)[];

export type NextFunction = (error?: Error | any) => void;

export type ErrorHandler = <TRequest = any, TResponse = any>(
  error: any,
  req: TRequest,
  res: TResponse,
  next?: NextFunction,
) => any;

export type RequestHandler = <TRequest = any, TResponse = any>(
  req: TRequest,
  res: TResponse,
  next?: NextFunction,
) => any;

export type Handler = RequestHandler | ErrorHandler;

export type HandlerArgument = Handler | Handler[];

export interface HttpAdapter {
  use(handler: HandlerArgument): any;
  use(mountPoint: PathArgument, handler: HandlerArgument): any;
  get(handler: HandlerArgument): any;
  get(path: PathArgument, handler: HandlerArgument): any;
  post(handler: HandlerArgument): any;
  post(path: PathArgument, handler: HandlerArgument): any;
  head(handler: HandlerArgument): any;
  head(path: PathArgument, handler: HandlerArgument): any;
  delete(handler: HandlerArgument): any;
  delete(path: PathArgument, handler: HandlerArgument): any;
  put(handler: HandlerArgument): any;
  put(path: PathArgument, handler: HandlerArgument): any;
  patch(handler: HandlerArgument): any;
  patch(path: PathArgument, handler: HandlerArgument): any;
  all(path: PathArgument, handler: HandlerArgument): any;
  all(handler: HandlerArgument): any;
  options(handler: HandlerArgument): any;
  options(path: PathArgument, handler: HandlerArgument): any;
  listen(port: number | string, callback?: () => void): any;
  listen(port: number | string, hostname: string, callback?: () => void): any;
  status(response: any, statusCode: number): any;
  end(response: any, message?: string): any;
  render(response: any, view: string, options: any): any;
  redirect(response: any, statusCode: number, url: string): any;
  isHeadersSent(response: any): boolean;
  setHeader(response: any, name: string, value: string): any;
  getInstance(): any;
  getHttpServer(): any;
  initHttpServer(options: any): void;
  getType(): string;
  close(): any;
  useStaticAssets?(...args: any[]): this;
  setBaseViewsDir?(path: string | string[]): this;
  setViewEngine?(engineOrOptions: any): this;
  getRequestHostname?(request: any): string;
  getRequestMethod?(request: any): string;
  getRequestUrl?(request: any): string;
  init?(): Promise<void>;
}
