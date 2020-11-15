import { BAAS } from '../services';
// import { routes } from '../router';

class AboutsList {
  constructor (n = null) {
    this.n = n;
  }

  async getAbouts () {
    let abouts = await BAAS.getAbouts();
    if (this.n !== null) {
      abouts = abouts.slice(0, this.n);
    }
    return abouts.map(aboutsName => `
    <a href="${aboutsName.linkto}" target="_new">
      <div class="information_block">
        <p class="information_block__title">${aboutsName.title}</p>
        <p class="information_block__txt">More info</p>
      </div>
    </a>`).join('');
  }

  async render () {
    return `
      ${await this.getAbouts()}     
    `;
  }

  async afterRender () {
    // Connect the listeners
    const slaElements = document.querySelectorAll('.btn-sla');
    slaElements.forEach(elem => elem.addEventListener('click', ev => console.log(ev)));
    return this;
  }
}

export default AboutsList;
