import { BAAS } from '../services';
import { NewsList } from '../components';

class NewsPage {
  constructor () {
    this.compNewsList = new NewsList();
  }

  async getAPPostHeaderOne (id) {
    const aboutPost = await BAAS.getAPPostHeader(id);
    return `
      <div class="news_header__image">
        <img src="${aboutPost.headerImage}" alt="news header image">
      </div>
      <h2>News</h2>
    `;
  }

  async render () {
    return `
      <div class="container">
        <div class="news_header">
          ${await this.getAPPostHeaderOne('over-ons')}
        </div>
      </div>
      <div class="divided">
        <div class="divided__big"></div>
        <div class="divided__small"></div>
        <div class="divided__big"></div>
      </div>
      <div class="container">
        <div class="news_cases">
          ${await this.compNewsList.render()}
        </div>
      </div>
      <div class="divided divided-up">
        <div class="divided__big"></div>
        <div class="divided__small"></div>
        <div class="divided__big"></div>
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

export default NewsPage;
