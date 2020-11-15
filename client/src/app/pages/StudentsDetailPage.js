import { BAAS } from '../services';

class StudentsDetailPage {
  async getStudent (id) {
    const newsName = await BAAS.getStudent(id);
    return `
      <div class="students_header">
        <div class="students_header__image">
          <img src="${newsName.image}" alt="${newsName.name}">
        </div>
        <div class="students_header__name">
          <h2>${newsName.name}</h2>
        </div>
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
      <div class="students_main">
        <div class="students_main__quote">
          <h4>"${newsName.quote}"</h4>
        </div>
        <div class="students_main__about">
         <p>${newsName.about}</p>
        </div>
      </div>
    `;
  }

  async render (params) {
    return `
      <div class="container">
        ${await this.getStudent(params.id)}
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

export default StudentsDetailPage;
