export default class News {
  constructor(data) {
    this.newsArray = []
    for (let i = 0; i < data.length; i++) {
      this.newsArray.push({
        url: data[i].url,
        source: data[i].source_info.name,
        title: data[i].title,
        sourceUrl: data[i].source,
        img: data[i].imageurl
      })

      this.sources = ''
      if (this.sources.includes(data[i].source_info.name)) {
        continue
      }
      else {
        this.sources += (data[i].source_info.name) + ' | '
      }
    }

  }

  newsTemplate() {
    let x = 4
    let page = window.location.href
    if (page.includes("/news")) {
      x = 48
    }
    let template = ""
    for (let i = 0; i < x; i++) {
      template += `
      <div class="col-xl-3 col-md-6 mb-4">
        <a href="${[this.newsArray[i].url]}" target="">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body align-bottom">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="h6 font-weight-bold text-gray-700 mb-3">${this.newsArray[i].title}</div>
                  <div class="p mb-0 font-weight-bold text-blue-800">[${this.newsArray[i].source}]</div>
                </div>
              </div>
            </div>
          </div>
        </a>  
      </div>     
      `
    }
    return template
  }

  sourcesTemplate() {
    let template = ""
    for (let i = 0; i <= this.newsArray.length - 1; i++) {
      if (template.includes(this.newsArray[i].source)) {
        continue
      }
      else if (this.newsArray[i].source == "Decrypt") {
        template +=
          `
        <a href="https://${[this.newsArray[i].sourceUrl]}.co" target="" style="text-decoration:none;">
          <span class="mr-3">${this.newsArray[i].source}</span>
        </a>
      `
      }
      else if (this.newsArray[i].source == "TheBlock") {
        template +=
          `
        <a href="https://${[this.newsArray[i].sourceUrl]}crypto.com" target="" style="text-decoration:none;">
          <span class="mr-3">${this.newsArray[i].source}</span>
        </a>
      `
      }
      else if (this.newsArray[i].source == "Bitcoin.com") {
        template +=
          `
        <a href="https://news.${[this.newsArray[i].sourceUrl]}" target="" style="text-decoration:none;">
          <span class="mr-3">${this.newsArray[i].source}</span>
        </a>
      `
      }
      else if (this.newsArray[i].source == "Chaindd") {
        template +=
          `
        <a href="https://english.${[this.newsArray[i].sourceUrl]}.com" target="" style="text-decoration:none;">
          <span class="mr-3">${this.newsArray[i].source}</span>
        </a>
      `
      }
      else {
        template +=
          `
        <a href="https://${[this.newsArray[i].sourceUrl]}.com" target="" style="text-decoration:none;">
          <span class="mr-3">${this.newsArray[i].source}</span>
        </a>
      `
      }
    }
    return template
  }

}