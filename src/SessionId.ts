import { ValueObject } from "./ddd/ValueObject";

export class SessionId extends ValueObject<SessionId> {
  private _value: string;
  private constructor(value: string) {
    super();
    this._value = value;
  }

  public getValue(): string {
    return this._value;
  }

  public static create(value: string): SessionId {
    if (!value.trim()) {
      throw new Error("Value must be set.");
    }

    return new SessionId(value);
  }
}
