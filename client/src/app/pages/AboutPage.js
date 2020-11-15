import { BAAS } from '../services';
import { AboutsList, PGMList } from '../components';

class AboutPage {
  constructor () {
    this.compAboutsList = new AboutsList();
    this.compPGMList = new PGMList();
  }

  async getAPPostHeaderOne (id) {
    const aboutPost = await BAAS.getAPPostHeader(id);
    return `
      <div class="about_header__image">
        <img src="${aboutPost.headerImage}" alt="about header image">
      </div>
      <h2>${aboutPost.headerTitle}</h2>
    `;
  }

  async getAPPostHeaderTwo (id) {
    const aboutPost = await BAAS.getAPPostHeader(id);
    return `
      <div class="about_curriculum__txt">
        <h3>${aboutPost.curriculumTitle}</h3>
        <a href="https://www.pgm.gent/info/" target="_new" class="glitch-btn">Meer info</a>
      </div>
      <div class="about_curriculum__image">
        <img src="${aboutPost.curriculumImage}" alt="curriculum">
      </div>
    `;
  }

  async getTeamsImage (id) {
    const staffImg = await BAAS.getTeamsStaff(id);
    return `
      <div class="about_teams__teachers">
        <img src="${staffImg.image}" alt="staff">
      </div>
    `;
  }

  async render () {
    return `
      <div class="container">
        <div class="about_header">
          ${await this.getAPPostHeaderOne('over-ons')}
        </div>
      </div>
      <div class="divided divided-down">
        <div class="divided__big"></div>
        <div class="divided__small"></div>
      </div>
      <div class="container">
        <div class="about_curriculum">
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
          ${await this.getAPPostHeaderTwo('curriculum')}
        </div>
      </div>
      <div class="divided">
        <div class="divided__big"></div>
        <div class="divided__small"></div>
        <div class="divided__big"></div>
      </div>
      <div class="container">
        <div class="about_workteaching">
          <h3>Werkplekleren</h3>
          <div class="about_information__blocks">
            ${await this.compAboutsList.render()}
          </div>
        </div>
      </div>
      <div class="divided">
        <div class="divided__small"></div>
        <div class="divided__big"></div>
        <div class="divided__small"></div>
      </div>
      <div class="container">
        <div class="about_teams">
          <h3>PGM-Team</h3>
          ${await this.getTeamsImage('teams-staff')}
          <h3>PGM-First generation students</h3>
          <div class="about_teams__students">
          ${await this.compPGMList.render()}
          </div>
        </div>
      </div>
      <div class="divided divided-down">
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

export default AboutPage;
