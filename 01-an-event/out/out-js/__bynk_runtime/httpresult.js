// v0.9: HttpResult — the built-in HTTP-result sum.
export const HttpResult = {
    // 2xx success.
    Ok: (value) => ({ tag: "Ok", value }),
    // 2xx streamed body — the argument is a stream of SSE event payloads.
    Streaming: (stream) => ({ tag: "Streaming", stream }),
    // 2xx raw body — the arguments are the octets and their content-type.
    Raw: (body, contentType) => ({ tag: "Raw", body, contentType }),
    // 2xx raw body with its validator — the octets, their content-type, and the
    // entity tag the handler supplies (quoted, optionally `W/`-prefixed).
    RawTagged: (body, contentType, etag) => ({
        tag: "RawTagged",
        body,
        contentType,
        etag,
    }),
    // 2xx raw body streamed — the chunks and their content-type.
    RawStreamed: (body, contentType) => ({
        tag: "RawStreamed",
        body,
        contentType,
    }),
    // 201 raw body — the octets and their content-type, as for `Raw`.
    RawCreated: (body, contentType) => ({
        tag: "RawCreated",
        body,
        contentType,
    }),
    Created: (value) => ({ tag: "Created", value }),
    Accepted: (value) => ({ tag: "Accepted", value }),
    NoContent: { tag: "NoContent" },
    // 3xx redirection — the argument is the target URL (Location header).
    MovedPermanently: (location) => ({ tag: "MovedPermanently", location }),
    Found: (location) => ({ tag: "Found", location }),
    SeeOther: (location) => ({ tag: "SeeOther", location }),
    TemporaryRedirect: (location) => ({ tag: "TemporaryRedirect", location }),
    PermanentRedirect: (location) => ({ tag: "PermanentRedirect", location }),
    // 4xx client error.
    BadRequest: (message) => ({ tag: "BadRequest", message }),
    Unauthorized: { tag: "Unauthorized" },
    Forbidden: { tag: "Forbidden" },
    NotFound: { tag: "NotFound" },
    MethodNotAllowed: { tag: "MethodNotAllowed" },
    NotAcceptable: { tag: "NotAcceptable" },
    RequestTimeout: { tag: "RequestTimeout" },
    Conflict: (message) => ({ tag: "Conflict", message }),
    Gone: { tag: "Gone" },
    LengthRequired: { tag: "LengthRequired" },
    PayloadTooLarge: (message) => ({ tag: "PayloadTooLarge", message }),
    UnsupportedMediaType: (message) => ({
        tag: "UnsupportedMediaType",
        message,
    }),
    UnprocessableEntity: (message) => ({
        tag: "UnprocessableEntity",
        message,
    }),
    TooManyRequests: (message) => ({ tag: "TooManyRequests", message }),
    UnavailableForLegalReasons: (message) => ({
        tag: "UnavailableForLegalReasons",
        message,
    }),
    // 5xx server error.
    ServerError: (message) => ({ tag: "ServerError", message }),
    NotImplemented: (message) => ({ tag: "NotImplemented", message }),
    BadGateway: (message) => ({ tag: "BadGateway", message }),
    ServiceUnavailable: (message) => ({ tag: "ServiceUnavailable", message }),
    GatewayTimeout: (message) => ({ tag: "GatewayTimeout", message }),
    // 4xx/5xx with an author-owned body — the compiler resolves the status name.
    RawError: (status, body, contentType) => ({
        tag: "RawError",
        status,
        body,
        contentType,
    }),
};
