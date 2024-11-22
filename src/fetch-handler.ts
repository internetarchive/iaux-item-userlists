/* eslint-disable no-undef */
export class FetchHandler {
  async fetchApiResponse<T>(
    url: string,
    options?: {
      includeCredentials?: boolean;
      method?: string;
      body?: BodyInit;
      headers?: HeadersInit;
    }
  ): Promise<T> {
    const requestInit: RequestInit = {};
    if (options?.includeCredentials) requestInit.credentials = 'include';
    if (options?.method) requestInit.method = options.method;
    if (options?.body) requestInit.body = options.body;
    if (options?.headers) requestInit.headers = options.headers;
    const response = await fetch(url, requestInit);
    const json = await response.json();
    return json as T;
  }
}
