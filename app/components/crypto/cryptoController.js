import CryptoService from "./cryptoService.js";

const _cs = new CryptoService()

function drawCrypto() {
  let template = _cs.Crypto.cryptoTemplate()
  document.querySelector('#prices-tables').innerHTML = template
}

function drawNetwork() {
  let template = _cs.Network.networkTemplate()
  document.querySelector('#network').innerHTML = template
}

export default class CryptoController {
  constructor() {
    _cs.addSubscriber('crypto', drawCrypto)
    _cs.addSubscriber('network', drawNetwork)
    _cs.getNetwork()
    _cs.getCrypto()
    _cs.refresh()
  }

}