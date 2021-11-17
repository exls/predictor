export default class extends Error {
  __proto__: Error
  constructor(
    message: string,
    public readonly params: {
      [code: string]: any
    } = {}
  ) {
    super(message)
    const trueProto = new.target.prototype
    this.__proto__ = trueProto
  }
}
