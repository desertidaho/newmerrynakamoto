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

function drawGlossary() {
  let template = _cs.Glossary.glossaryTemplate()
  document.querySelector('#glossary').innerHTML = template
}

export default class CryptoController {
  constructor() {
    let page = window.location.href
    if (page.includes("/index") | page.includes("/prices")) {
      _cs.addSubscriber('crypto', drawCrypto)
    }
    if (page.includes("/index")) {
      _cs.addSubscriber('network', drawNetwork)
      _cs.addSubscriber('glossary', drawGlossary)
    }
    _cs.getNetwork()
    _cs.getCrypto()
    _cs.refresh()
    _cs.getGlossary()
  }

}