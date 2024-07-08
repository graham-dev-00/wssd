import { NUMBER_ONLY, TEXT_ONLY, TEXT_WITH_NUMBER } from '../constants';

export enum GeneratorType {
  TEXT_WITH_NUMBER,
  TEXT_ONLY,
  NUMBER_ONLY,
}
export class CodeGeneratorUtil {
  public static generateRandomString(type: GeneratorType, maxLength: number): string {
    let chars;
    switch (type) {
      case GeneratorType.NUMBER_ONLY:
        chars = NUMBER_ONLY;
        break;
      case GeneratorType.TEXT_ONLY:
        chars = TEXT_ONLY;
        break;
      case GeneratorType.TEXT_WITH_NUMBER:
        chars = TEXT_WITH_NUMBER;
        break;
      default:
        throw new Error('Invalid arguments!');
    }

    let result = '';
    for (let i = 0; i < maxLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars.charAt(randomIndex);
    }
    return result;
  }
}
