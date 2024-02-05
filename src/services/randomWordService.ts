export default class RandomWordService {
  public async getRandomWordAsync(): Promise<string> {
    const response = await fetch("/words.txt");
    const file = await response.text();

    const words = [];

    for await (const word of file.split("\n")) {
      words.push(word);
    }

    const idx = Math.floor(Math.random() * words.length);
    return words[idx];
  }
}
