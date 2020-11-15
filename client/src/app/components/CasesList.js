import { BAAS } from '../services';
import { routes } from '../router';

class CasesList {
  constructor (n = null) {
    this.n = n;
  }

  async getCases () {
    let cases = await BAAS.getCases();
    if (this.n !== null) {
      cases = cases.slice(0, this.n);
    }
    return cases.map(caseName => `
    <div class="cases_case">
      <h4>${caseName.name}</h4>
      <a href="#!${routes.CASE_DETAIL.replace(':id', caseName.id)}">
        <div class="cases_case__img">
          <img src="${caseName.thumbnailUrl}">
        </div>
      </a>
    </div>`).join('');
  }

  async render () {
    return `
      ${await this.getCases()}     
    `;
  }

  async afterRender () {
    // Connect the listeners
    const slaElements = document.querySelectorAll('.btn-sla');
    slaElements.forEach(elem => elem.addEventListener('click', ev => console.log(ev)));
    return this;
  }
}

export default CasesList;
