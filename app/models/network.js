export default class Network {
  constructor(data) {
    this.hashrate = data.hashrate,
    this.blockHeight = data.blocks,
    this.mining = data.mining_difficulty,
    this.unconfirmed = data.unconfirmed_txs,
    this.price = Number(data.price).toFixed(2),
    this.symbol = data.symbol_htmlcode,
    this.timeSinceUpdate = data.price_update_time/1000
  }

  networkTemplate() {
    this.hashrate = this.hashrate.slice(0, 3) + '.' + this.hashrate.slice(4, 6) + ' EH/s'
    return `
            <a href="https://www.sochain.com" target="_blank" class="blockData"><p>Bitcoin Price $${this.price}</p></a>
            <a href="https://www.sochain.com" target="_blank" class="blockData"><p>Block Height ${this.blockHeight}</p></a>
            <a href="https://www.sochain.com" target="_blank" class="blockData"><p>Hashrate ${this.hashrate}</p></a>
            <a href="https://www.sochain.com" target="_blank" class="blockData"><p>Mining Difficulty ${this.mining}</p></a>
            <a href="https://www.sochain.com" target="_blank" class="blockData"><p>Unconfirmed Transactions ${this.unconfirmed}</p></a>
            <a href="https://www.bitcoin.org" target="_blank" class="blockData"><p>Bitcoin Website</p></a>
            <a href="https://www.blockchain.com/explorer" target="_blank" class="blockData"><p>Blockchain Explorer</p></a>
            <a href="https://cryptowat.ch/charts/BINANCE:BTC-BUSD" target="_blank" class="blockData"><p>Cryptowatch</p></a>
            `
  }


}