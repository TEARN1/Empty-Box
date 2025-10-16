export interface Request {
    body: Record<string, any>;
    params: Record<string, string>;
    query: Record<string, string>;
}

export interface Response {
    status: (code: number) => Response;
    json: (data: Record<string, any>) => void;
    send: (data: string) => void;
}