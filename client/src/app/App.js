import { Router, routes } from './router';
import {
  HomePage, CasesPage, CaseDetailPage, AboutPage, ContactPage, NewsPage, NotFoundPage,
  NewsDetailPage, StudentsDetailPage,
} from './pages';
import { Footer, Header } from './components';

class App {
  constructor (container) {
    // Root container
    this.container = container;

    // Pages
    this.pageHome = new HomePage();
    this.pageCases = new CasesPage();
    this.pageNotFound = new NotFoundPage();
    this.pageCaseDetail = new CaseDetailPage();
    this.pageNewsDetail = new NewsDetailPage();
    this.pageAbout = new AboutPage();
    this.pageStudentDetail = new StudentsDetailPage();
    this.pageContact = new ContactPage();
    this.pageNews = new NewsPage();

    // Components
    this.compHeader = new Header();
    this.compFooter = new Footer();
  }

  async render () {
    return `
    ${await this.compHeader.render()}
    <div class="main">
      <div id="children"></div>
    </div> 
    ${await this.compFooter.render()}   
    `;
  }

  async afterRender () {
    this.childrenContainer = document.getElementById('children');

    // Router
    this.router = new Router(this.childrenContainer);
    this.router.addRoute(routes.LANDING, this.pageHome);
    this.router.addRoute(routes.HOME, this.pageHome);
    this.router.addRoute(routes.CASES, this.pageCases);
    this.router.addRoute(routes.CASE_DETAIL, this.pageCaseDetail);
    this.router.addRoute(routes.NEWS_DETAIL, this.pageNewsDetail);
    this.router.addRoute(routes.ABOUT, this.pageAbout);
    this.router.addRoute(routes.ABOUT_DETAIL, this.pageStudentDetail);
    this.router.addRoute(routes.CONTACT, this.pageContact);
    this.router.addRoute(routes.NEWS, this.pageNews);
    this.router.setNotFoundPage(this.pageNotFound);
    this.router.resolve();

    // Register components afterRender methods
    await this.compHeader.afterRender();
    await this.compFooter.afterRender();

    // Global App Eventhandlers
    this.lastKnowScrollYPostion = 0;
    this.isTickingScroll = false;
    window.addEventListener('scroll', (ev) => {
      this.lastKnowScrollYPostion = window.scrollY;
      if (!this.isTickingScroll) {
        window.requestAnimationFrame(() => {
          if (this.lastKnowScrollYPostion > 500) {
            this.compHeader.updateUI(false);
          } else {
            this.compHeader.updateUI(true);
          }
          this.isTickingScroll = false;
        });

        this.isTickingScroll = true;
      }
    });

    // Listen to changes in history
    window.addEventListener('popstate', (event) => {
      this.setActiveLink();
    });
    // Set active link
    this.setActiveLink();
  }

  setActiveLink () {
    window.scrollTo(0, 0);
    this.compHeader.updateActiveLink(document.location.hash);
    this.compFooter.updateActiveLink(document.location.hash);
  }
}

export default App;
