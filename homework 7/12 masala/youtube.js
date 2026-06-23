class YouTubeChannel {
    #subscribers = 0;

    static totalChannels = 0;

    constructor(name) {
        this.name = name;
        YouTubeChannel.totalChannels++;
    }

    subscribe(count) {
        this.#subscribers += count;
        return `${this.name}: ${this.#subscribers} obunachi`;
    }

    unsubscribe(count) {
        this.#subscribers = Math.max(this.#subscribers - count, 0);
        return `${this.name}: ${this.#subscribers} obunachi`;
    }
}

const channel = new YouTubeChannel("CodeUz");
console.log(channel.subscribe(1000));
console.log(channel.unsubscribe(200));
console.log(YouTubeChannel.totalChannels);