//обработка ошибок (планируется, что будет только универсальная ошибка 404)

class SiteError extends Error {
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    static badRequest(message) {
        return new SiteError(404, message)
    }
}