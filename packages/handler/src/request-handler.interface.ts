/**
 * Handles a server request and produces a response.
 *
 * An HTTP request handler process an HTTP request in order to produce an
 * HTTP response.
 */
export interface RequestHandler<TRequest = any, TResponse = any> {
  /**
   * Handles a request and produces a response.
   * @param req the HTTP request argument to the request handler function
   * @param res the HTTP response argument to the request handler function
   */
  handle(req: TRequest, res: TResponse): any;
}
