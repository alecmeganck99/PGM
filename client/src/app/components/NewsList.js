import { BAAS } from '../services';
import { routes } from '../router';

class NewsList {
  constructor (n = null) {
    this.n = n;
  }

  async getNews () {
    let news = await BAAS.getNews();
    if (this.n !== null) {
      news = news.slice(0, this.n);
    }
    return news.map(newsName => `
    <div class="news_case">
      <h4>${newsName.title}</h4>
      <a href="#!${routes.NEWS_DETAIL.replace(':id', newsName.id)}">
        <div class="news_case__img">
          <img src="${newsName.thumbnailUrl}">
        </div>
      </a>
    </div>`).join('');
  }

  async render () {
    return `
      ${await this.getNews()}     
    `;
  }

  async afterRender () {
    // Connect the listeners
    const slaElements = document.querySelectorAll('.btn-sla');
    slaElements.forEach(elem => elem.addEventListener('click', ev => console.log(ev)));
    return this;
  }
}

export default NewsList;
