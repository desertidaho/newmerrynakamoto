export default class Crypto {
  constructor(data) {
    this.pricesArray = []
    for (let i = 0; i < data.length; i++) {
      this.pricesArray.push({
        rank: data[i].rank,
        name: data[i].name,
        price: '$' + Number(data[i].priceUsd).toFixed(2),
        marketCap: '$' + Number(data[i].marketCapUsd).toFixed(2),
        volume: '$' + Number(data[i].volumeUsd24Hr).toFixed(2),
        percent: Number(data[i].changePercent24Hr).toFixed(2) + '%',
        explorerUrl: data[i].explorer
      })
    }
  }


  cryptoTemplate() {
    let x = 10
    let page = window.location.href
    if (page.includes("/prices")) {
      console.log('Bingo prices')
      x = 100
    }
    let template = ""
    for (let i = 0; i < x; i++) {
    template += 
    `
      <tr class="font-weight-bold text-gray-700">
        <td>${this.pricesArray[i].rank}</td>
        <td>${this.pricesArray[i].name}</td>
        <td>${this.pricesArray[i].price}</td>
        <td>${this.pricesArray[i].marketCap}</td>
        <td>${this.pricesArray[i].volume}</td>
        <td>${this.pricesArray[i].percent}</td>
        <td><a href="${this.pricesArray[i].explorerUrl}" target="_blank">Explorer</a></td>
      </tr>
     `
    }
    return template
  }

  btcTemplate() {
    return `
      Crypto News  (BTC ${this.price0})
          `
  }

}