import { routes } from '../router';
import { BAAS } from '../services';

class Header {
  async getHeaderImage (id) {
    const headerImg = await BAAS.getHeaderImg(id);
    return `
      <img src="${headerImg.img}" alt="Header">
    `;
  }

  async render () {
    return `
      <div class="container">
        <header class="header">
          <div class="header__title">
            <a href="${routes.HOME}" data-navigo>${await this.getHeaderImage('header-image')}</a>
          </div>
          <div class="btn-hamburger glitch-btn">MENU</div>
        </header>
      </div>
      <div class="menu menuIsOpen">
        <div class="menu__block">
          <a href="${routes.HOME}" data-navigo>Home</a>
        </div>
        <div class="menu__block">
          <a href="${routes.CASES}" data-navigo>Cases</a>
        </div>
        <div class="menu__block">
          <a href="${routes.ABOUT}" data-navigo>Over ons</a>
        </div>
        <div class="menu__block">
          <a href="${routes.NEWS}" data-navigo>Nieuws</a>
        </div>
        <div class="menu__block">
          <a href="${routes.CONTACT}" data-navigo>Contact</a>
        </div>
      </div>
    `;
  }

  menuToggle () {
    const menu = document.querySelector('.menu');
    const body = document.querySelector('#body');
    menu.classList.toggle('menuIsOpen');
    body.classList.toggle('body');
    window.scrollTo(0, 0);
  }

  async afterRender () {
    // Connect the listeners
    const btnHamburger = document.querySelector('.btn-hamburger');
    const menu = document.querySelector('.menu');
    menu.addEventListener('click', (ev) => {
      if (ev.target.closest('.menu__block [data-navigo]') != null) this.menuToggle();
    });
    btnHamburger.addEventListener('click', (ev) => {
      this.menuToggle();
    });
    return this;
  }
}

export default Header;
