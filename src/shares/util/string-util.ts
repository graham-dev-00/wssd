export class StringUtil {
  public static isBlank(str: string): boolean {
    return !str || str.trim().length == 0;
  }
}
