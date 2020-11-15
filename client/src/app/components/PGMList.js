import { BAAS } from '../services';
import { routes } from '../router';

class PGMList {
  constructor (n = null) {
    this.n = n;
  }

  async getStudents () {
    let students = await BAAS.getStudents();
    if (this.n !== null) {
      students = students.slice(0, this.n);
    }
    return students.map(studentsName => `
    <a href="#!${routes.ABOUT_DETAIL.replace(':id', studentsName.id)}">
      <div class="information_block">
        <img src="${studentsName.image}">
        <p class="information_block__title">${studentsName.name}</p>
      </div>
    </a>`).join('');
  }

  async render () {
    return `
      ${await this.getStudents()}     
    `;
  }

  async afterRender () {
    // Connect the listeners
    const slaElements = document.querySelectorAll('.btn-sla');
    slaElements.forEach(elem => elem.addEventListener('click', ev => console.log(ev)));
    return this;
  }
}

export default PGMList;
