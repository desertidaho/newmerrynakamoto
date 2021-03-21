import Crypto from "../../models/crypto.js";
import Network from "../../models/network.js";
import Glossary from "../../models/glossary.js";
import GlossaryData from "../../../glossary-data.js";

const _gd = new GlossaryData()

// @ts-ignore
const _cryptoApi = axios.create({
  baseURL: 'https://api.coincap.io/v2/assets',
  timeout: 15000
});

// @ts-ignore
const _networkApi = axios.create({
  baseURL: 'https://chain.so/api/v2/get_info/BTC',
  timeout: 15000
});


let _state = {
  crypto: {},
  network: {},
  glossary: {}
}

let _subscribers = {
  crypto: [],
  network: [],
  glossary: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}


//Public
export default class CryptoService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Crypto() {
    return _state.crypto
  }

  get Network() {
    return _state.network
  }

  get Glossary() {
    return _state.glossary
  }

  getCrypto() {
    _cryptoApi.get()
      .then(res => {
        _setState('crypto', new Crypto(res.data.data))
      })
  }

  refresh() {
    setInterval(this.getCrypto, 20000)
    setInterval(this.getBlockCypher, 300000)
  }

  getNetwork() {
    _networkApi.get()
      .then(res => {
        _setState('network', new Network(res.data.data))
      })
  }

  getGlossary() {
    let data = _gd.getGlossaryData()
    _setState('glossary', new Glossary(data))
  }

}