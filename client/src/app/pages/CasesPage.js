import { BAAS } from '../services';
import { CasesList } from '../components';

class CasesPage {
  constructor () {
    this.compCasesList = new CasesList();
  }

  async getCasesImage (id) {
    const casesImg = await BAAS.getCasesImg(id);
    return `
      <div class="cases_header__image">
        <img src="${casesImg.thumbnailUrl}" alt="cases header image">
      </div>
      <h2>${casesImg.name}</h2>
    `;
  }

  async render () {
    return `
      <div class="container">
        <div class="cases_header">
          ${await this.getCasesImage('cases-header')}
        </div>
      </div>
      <div class="divided divided-down">
        <div class="divided__small"></div>
        <div class="divided__big"></div>
        <div class="divided__small"></div>
      </div>
      <div class="container">
        <div class="hp_cases__cases">
          ${await this.compCasesList.render()}
        </div>
      </div>
      <div class="divided">
        <div class="divided__small"></div>
        <div class="divided__big"></div>
        <div class="divided__small"></div>
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

export default CasesPage;
