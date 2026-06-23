class Player {
    #score = 0;

    constructor(name) {
        this.name = name;
    }

    addScore(points) {
        this.#score += points;
        return `${this.name}: ${this.#score} ball`;
    }

    resetScore() {
        this.#score = 0;
        return `${this.name} balli tozalandi`;
    }

    getScore() {
        return this.#score;
    }

    static leaderboard(players) {
        return players
            .slice()
            .sort((a, b) => b.getScore() - a.getScore())
            .map((p, i) => `${i + 1}. ${p.name} - ${p.getScore()}`);
    }
}

const p1 = new Player("Ali");
const p2 = new Player("Vali");
p1.addScore(50);
p2.addScore(80);
console.log(Player.leaderboard([p1, p2]));