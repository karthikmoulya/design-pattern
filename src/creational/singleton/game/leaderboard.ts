//A Leaderboard Singleton Class

export default class Leaderboard {
  static instance: Leaderboard;
  #table: { [id: number]: string } = {};

  constructor() {
    if (Leaderboard.instance) {
      return Leaderboard.instance;
    }

    Leaderboard.instance = this;
  }

  addWinner(position: number, name: string): void {
    this.#table[position] = name;
  }

  print(): void {
    console.log('-----------Leaderboard-----------');
    for (const key in this.#table) {
      console.log(`|\t${key}\t|\t${this.#table[key]}\t|`);
    }
    console.log();
  }
}
