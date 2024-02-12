export default class RandomWordService {
  public async getRandomWordAsync(
    defaultWords: string[] = []
  ): Promise<string> {
    const words = defaultWords;
    if (!words.length) {
      const response = await fetch("/words.txt");
      const file = await response.text();

      for await (const word of file.split("\n")) {
        words.push(word);
      }
    }

    const idx = Math.floor(Math.random() * words.length);
    return words[idx];
  }
}
