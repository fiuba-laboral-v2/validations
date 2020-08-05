export class InvalidDniError  extends Error {
  public static buildMessage(dni: number) {
    return `El dni: ${dni} tiene un formato inválido`;
  }

  constructor(dni: number) {
    super(InvalidDniError.buildMessage(dni));
  }
}
