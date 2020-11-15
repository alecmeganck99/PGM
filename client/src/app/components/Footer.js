import { routes } from '../router';

class Footer {
  async render () {
    return `
      <div class="container">
        <footer class="footer">
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
          <p>Copyright Alec Meganck - 2020</p>
          <div class="footer__links">
            <ul>
              <li><a href="${routes.HOME}" data-navigo>Home</a></li>
              <li><a href="${routes.CASES}" data-navigo>Cases</a></li>
              <li><a href="${routes.ABOUT}" data-navigo>Over ons</a></li>
              <li><a href="${routes.NEWS}" data-navigo>Nieuws</a></li>
              <li><a href="${routes.CONTACT}" data-navigo>Contact</a></li>
            </ul>
          </div>
        </footer>
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }

  updateActiveLink (route) {
    const prevActiveMenuItemElement = document.querySelector(`.footer-section__item > a[class*="active"]`);
    if (prevActiveMenuItemElement) {
      prevActiveMenuItemElement.classList.remove('active');
    }
    const link = route.replace('#!', '');
    const menuItemElement = document.querySelector(`.footer-section__item > a[href*="${link}"]`);
    if (menuItemElement) {
      menuItemElement.classList.add('active');
    }
  }
}

export default Footer;
