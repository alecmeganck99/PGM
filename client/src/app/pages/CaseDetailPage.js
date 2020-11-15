import { BAAS } from '../services';

class CaseDetailPage {
  async getCase (id) {
    const caseName = await BAAS.getCase(id);
    return `
      <div class="cases-page">
        <div class="cases-page__case">
          <div class="cases_header__image">
            <img src="${caseName.thumbnailUrl}" alt="cases header image">
          </div>
          <div class="cases-page__case--detail">
            <h2>${caseName.name}</h2>
            <div class="cases-page__case--detail__richting">
              <p>Richting:</p>
              <span>${caseName.richting}</span>
            </div>
            <div class="cases-page__case--detail__tags">
              <p>Student:</p>
              <span>${caseName.student}</span>
            </div>
            <div class="cases-page__case--detail__tags">
              <p>Technologieën:</p>
              <span>${caseName.tags}</span>
            </div>
          </div>
        </div>
        <div class="cases-page__txt">
          <p>${caseName.description}</p>
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
        <div class="cases-page__images">
          <div class="cases-page__images--case">
            <img src="${caseName.image01}">
          </div>
          <div class="cases-page__images--case">
            <img src="${caseName.image02}">
          </div>
          <div class="cases-page__images--case">
            <img src="${caseName.image03}">
          </div>
          <div class="cases-page__images--case">
            <img src="${caseName.image04}">
          </div>
        </div>
      </div>
    `;
  }

  async render (params) {
    return `
      <div class="container">
        ${await this.getCase(params.id)}
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

export default CaseDetailPage;
