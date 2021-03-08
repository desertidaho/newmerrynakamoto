export default class Crypto {
  constructor(data) {
    this.pricesArray = []
    for (let i = 0; i < data.length; i++) {
      this.pricesArray.push({
        rank: data[i].rank,
        name: data[i].name,
        price: '$' + Number(data[i].priceUsd).toFixed(2),
        marketCap: formatNumber(Number(data[i].marketCapUsd).toFixed(2)),
        volume: formatNumber(Number(data[i].volumeUsd24Hr).toFixed(2)),
        percent: Number(data[i].changePercent24Hr).toFixed(2) + '%',
        explorerUrl: data[i].explorer
      })
    }

    function formatNumber(num) {
      num = num.toString()
      // console.log('num:' + num, num.length)
      if (num.length == 17) {
        num = num.slice(0, 2) + '.' + num.slice(2, 4) + 'T' //$10.00T
      }
      else if (num.length == 16) {
        num = num.slice(0, 1) + '.' + num.slice(1, 3) + 'T' //$1.00T
      }
      else if (num.length == 15) {
        num = '$' + num.slice(0, 3) + '.' + num.slice(3, 5) + 'B' //$999.99B
      }
      else if (num.length == 14) {
        num = '$' + num.slice(0, 2) + '.' + num.slice(2, 5) + 'B' //$99.99B
      }
      else if (num.length == 13) {
        num = '$' + num.slice(0, 1) + '.' + num.slice(1, 3) + 'B' //$9.99B
      }
      else if (num.length == 12) {
        num = '$' + num.slice(0, 3) + '.' + num.slice(3, 5) + 'M' //$999.99M
      }
      else if (num.length == 11) {
        num = '$' + num.slice(0, 2) + '.' + num.slice(2, 5) + 'M' //$99.99M
      }
      else if (num.length == 10) {
        num = '$' + num.slice(0, 1) + '.' + num.slice(1, 3) + 'M' //$9.99M
      }
      else {}

    return num

    }

  }


  cryptoTemplate() {
    let x = 10
    let page = window.location.href
    if (page.includes("/prices")) {
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

}