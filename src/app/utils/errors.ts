export class BadRequestException extends Error {
    protected statusCode: number;

    constructor(message: string) {
        super(message);
        this.statusCode = 400;
    }
}

export class ServerException extends Error {
    public statusCode: number;

    constructor(message: string) {
        super(message);
        this.statusCode = 500;
     }
}

export class UnauthorizedException extends Error {
    public statusCode: number;

    constructor(message: string) {
        super(message);
        this.statusCode = 401;
     }
}

export class ValidationException extends Error {
    public statusCode: number;
    public errors: object;

    constructor(message: string, errors: object) {
        super(message);
        this.statusCode = 422;
        this.errors = errors;
     }
}