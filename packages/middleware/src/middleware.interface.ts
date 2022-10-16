/**
 * Participant in processing a server request and response.
 *
 * An HTTP middleware component participates in processing an HTTP message:
 * by acting on the request, generating the response, or forwarding the
 * request to a subsequent middleware and possibly acting on its response.
 */
export interface Middleware<TRequest = any, TResponse = any> {
  /**
   * Process an incoming server request.
   * @param req the HTTP request argument to the middleware function
   * @param res the HTTP response argument to the middleware function
   * @param next the callback argument to the middleware function
   */
  process(
    req: TRequest,
    res: TResponse,
    next: (error?: Error | any) => void,
  ): any;
}
