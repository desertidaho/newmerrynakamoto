export default class Glossary {
    constructor(data) {
      this.glossaryArray = data;
    }
  
    glossaryTemplate() {
      let template = ""
      for (let i = 0; i < this.glossaryArray.length; i++) {
        template += `
        <div class="col-lg-4 mb-4">
            <div class="card bg-dark text-white shadow">
                <div class="card-body pl-2 pr-2">
                    <h6>${this.glossaryArray[i].title}:</h6>
                    <p>${this.glossaryArray[i].definition}</p>
                </div>
            </div>
        </div>
        `
      }
      return template
    }
}