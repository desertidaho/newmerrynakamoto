import NewsService from "./newsService.js";

const _ns = new NewsService()

async function drawNews() {
  let template = await _ns.News.newsTemplate()
  document.querySelector('#news-cards').innerHTML = template
}

//Public
export default class NewsController {
  constructor() {
    let page = window.location.href
    if (page.includes("/index") | page.includes("/news") | page == "https://merrynakamoto.com/") {
      _ns.addSubscriber('news', drawNews)
    }
    _ns.getNews()
    _ns.refreshNews()
  }

}