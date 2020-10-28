import MSF from "messageformat"

export default class CustomFormatter {
  private _locale: any
  private _formatter: any
  private _caches: any

  constructor(options: any = {}) {
    this._locale = options.locale || "en-US"
    this._formatter = new MSF(this._locale)
    this._caches = Object.create(null)
  }

  interpolate(msg, val) {
    let fn = this._caches[msg]
    if (!fn) {
      fn = this._formatter.compile(msg, this._locale)
    }
    return [fn[val]]
  }
}
