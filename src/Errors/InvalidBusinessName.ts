export class InvalidBusinessName extends Error {
  public static buildMessage(businessName: string) {
    return `Razón social inválida ${businessName}`;
  }

  constructor(businessName: string) {
    super(InvalidBusinessName.buildMessage(businessName));
  }
}
