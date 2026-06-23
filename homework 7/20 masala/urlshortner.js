class UrlShortener {
    #originalUrl;

    constructor(originalUrl) {
        this.#originalUrl = originalUrl;
    }

    getShortUrl() {
        return `short.ly/${UrlShortener.generateCode()}`;
    }

    static generateCode() {
        return Math.random().toString(36).substring(2, 8);
    }
}

const url = new UrlShortener("https://example.com/very/long/path");
console.log(url.getShortUrl());