export abstract class ValueObject<T extends ValueObject<T>> {
  public equals(other: any): boolean {
    const areKeysEqual = Object.keys(this).length === Object.keys(other).length;
    if (!areKeysEqual) {
      return false;
    }

    const keys = Object.keys(this) as Array<keyof typeof this>;
    return keys.every(
      (key) =>
        Object.prototype.hasOwnProperty.call(other, key) &&
        this[key] === other[key]
    );
  }

  public notEquals(value: any) {
    return !this.equals(value);
  }
}
