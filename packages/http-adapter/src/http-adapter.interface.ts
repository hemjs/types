export type ErrorHandler = <TRequest, TResponse>(
  error: any,
  req: TRequest,
  res: TResponse,
  next?: Function,
) => any;

export type RequestHandler = <TRequest, TResponse>(
  req: TRequest,
  res: TResponse,
  next?: Function,
) => any;

export interface HttpAdapter {
  use(handler: RequestHandler | ErrorHandler): any;
  use(path: string, handler: RequestHandler | ErrorHandler): any;
  get(handler: RequestHandler): any;
  get(path: string, handler: RequestHandler | RequestHandler[]): any;
  post(handler: RequestHandler | RequestHandler[]): any;
  post(path: string, handler: RequestHandler | RequestHandler[]): any;
  head(handler: RequestHandler | RequestHandler[]): any;
  head(path: string, handler: RequestHandler | RequestHandler[]): any;
  delete(handler: RequestHandler | RequestHandler[]): any;
  delete(path: string, handler: RequestHandler | RequestHandler[]): any;
  put(handler: RequestHandler | RequestHandler[]): any;
  put(path: string, handler: RequestHandler | RequestHandler[]): any;
  patch(handler: RequestHandler | RequestHandler[]): any;
  patch(path: string, handler: RequestHandler | RequestHandler[]): any;
  all(path: string, handler: RequestHandler | RequestHandler[]): any;
  all(handler: RequestHandler | RequestHandler[]): any;
  options(handler: RequestHandler | RequestHandler[]): any;
  options(path: string, handler: RequestHandler | RequestHandler[]): any;
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
