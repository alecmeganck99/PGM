import { BAAS } from '../services';

class NewsDetailPage {
  async getNew (id) {
    const newsName = await BAAS.getNew(id);
    return `
    <div class="news-page">
      <div class="news-page__case">
        <div class="news_header__image">
          <img src="${newsName.thumbnailUrl}" alt="news header image">
        </div>
        <div class="news-page__case--detail">
          <h2>${newsName.title}</h2>
        </div>
      </div>
      <div class="news-page__txt">
        <p>${newsName.synopsis}</p>
        <div class="bars">
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
          <div class="bars__small"></div>
        </div>
      </div>
      <div class="news-page__description">
        <p>${newsName.description}</p>
      </div>
    </div>
    `;
  }

  async render (params) {
    return `
      <div class="container">
        ${await this.getNew(params.id)}
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }

  async mount () {
    // Before the rendering of the page
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

export default NewsDetailPage;
