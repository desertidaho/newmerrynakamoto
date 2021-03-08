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

}