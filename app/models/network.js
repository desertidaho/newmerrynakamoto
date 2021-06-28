export default class Network {
  constructor(data) {
    this.hashrate = formatHashrate(data.hashrate),
    this.blockHeight = data.blocks,
    this.mining = formatNumber(data.mining_difficulty),
    this.unconfirmed = data.unconfirmed_txs,
    this.price = Number(data.price).toFixed(2),
    this.symbol = data.symbol_htmlcode,
    this.timeSinceUpdate = data.price_update_time/1000

    function formatHashrate(num) {
      if (num.length > 22) {
        num = num.slice(0, 3) + '.' + num.slice(4, 6) + ' EH/s'
      }
      else {
        num = num.slice(0, 2) + '.' + num.slice(3, 5) + ' EH/s'
      }
      return num
    }

    function formatNumber(num) {
      num = num.toString()
      if (num.length == 18) {
        num = '$' + num.slice(0, 3) + '.' + num.slice(3, 5) + ' T' //$100.00T
      }
      else if (num.length == 17) {
        num = num.slice(0, 2) + '.' + num.slice(2, 4) + ' T' //$10.00T
      }
      else if (num.length == 16) {
        num = num.slice(0, 1) + '.' + num.slice(1, 3) + ' T' //$1.00T
      }
      else if (num.length == 15) {
        num = '$' + num.slice(0, 3) + '.' + num.slice(3, 5) + ' B' //$100.00B
      }
      else {}
    return num
    }

  }

  networkTemplate() {
    return `
            <a href="https://chain.so/" target="_blank" class="blockData"><p id="tx_update"></p></a>
            <a href="https://chain.so/" target="_blank" class="blockData"><p id="value_update"></p></a>
            <a href="https://chain.so/" target="_blank" class="blockData"><p>Block Height ${this.blockHeight}</p></a>
            <a href="https://www.sofi.com/learn/content/bitcoin-hash-rate/" target="_blank" class="blockData"><p>Hashrate ${this.hashrate}</p></a>
            <a href="https://www.blockchain.com/charts/difficulty" target="_blank" class="blockData"><p>Mining Difficulty ${this.mining}</p></a>
            <a href="https://chain.so/" target="_blank" class="blockData"><p>Unconfirmed Transactions ${this.unconfirmed}</p></a>
            <a href="https://www.bitcoin.org" target="_blank" class="blockData"><p>Bitcoin Website</p></a>
            <a href="https://www.blockchain.com/explorer" target="_blank" class="blockData"><p>Bitcoin Explorer</p></a>
            `
  }
 

}