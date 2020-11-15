import * as THREE from 'three/build/three.module';
import { routes } from '../router';
import { BAAS } from '../services';
import { CasesList } from '../components';

class HomePage {
  constructor () {
    this.compCasesList = new CasesList(4);
    this.initThree();
  }

  async getAboutPostOne (id) {
    const headerPost = await BAAS.getHPAboutPost(id);
    return `
      <div class="hp_about__content--txt">
        <h1>${headerPost.title}</h1>
        <p>${headerPost.description}</p>
        <a href="#!${routes.ABOUT}" class="glitch-btn">Meer info</a>
      </div>
      <div class="hp_about__content--img">
        <img src="${headerPost.image}" alt="Head">
      </div>
    `;
  }

  async getAboutPostTwo (id) {
    const headerPost = await BAAS.getHPAboutPost(id);
    return `
      <div class="hp_news__txt">
        <h2>${headerPost.news}</h2>
        <p>${headerPost.description_news}</p>
        <a href="#!${routes.NEWS}" class="glitch-btn">Meer info</a>
      </div>
    `;
  }

  async getHomepageBar (id) {
    const homepageBar = await BAAS.getHpBar(id);
    return `
      <img src="${homepageBar.imageBar}" alt="bar">
    `;
  }

  async render () {
    return `
      <div class="container">
        <div class="hp_about">
          <div class="hp_about__roll">
            <p>html - sass - javascript - react - react native - adobe photoshop - adobe xd - blender - adobe Illustrator</p>
          </div>
          <div class="hp_about__content">
            ${await this.getAboutPostOne('header-part')}
          </div>
        </div>
      </div>
      <div class="divided">
        <div class="divided__big"></div>
        <div class="divided__small"></div>
        <div class="divided__big"></div>
      </div>
      <div class="container">
        <div class="hp_news">
          ${await this.getAboutPostTwo('header-news')}
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
      </div>
      <div class="divided divided-down">
        <div class="divided__small"></div>
        <div class="divided__big"></div>
        <div class="divided__small"></div>
      </div>
      <div class="container">
        <div class="hp_diamond">
          <div class="hp_diamond__txt">
            <p class="txt_one">PGM</p>
            <p class="txt_two">GRADUAAT</p>
          </div>
          <div class="page page--three">
            <div class="three-container"></div>
          </div>
        </div>
      </div>
      <div class="bar">
        ${await this.getHomepageBar('header-bar')}
      </div>
      <div class="container">
        <div class="hp_cases">
          <h2>Made by pgm</h2>
          <div class="hp_cases__cases">
            ${await this.compCasesList.render()}
          </div>
          <div class="hp_cases__button">
            <a class="glitch-btn" href="#!${routes.CASES}" data-navigo>Meer info</a>
          </div>
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
    // afterRender all components on the page
    const container = document.querySelector('.page--three .three-container');
    await container.appendChild(this.renderer.domElement);

    this.animate();
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

  initThree () {
    this.camera = new THREE.PerspectiveCamera(25, 8 / 5);
    this.camera.position.z = 1;
    this.scene = new THREE.Scene();

    this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    this.material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(1200, 500);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate = () => {
    window.requestAnimationFrame(this.animate);
    this.mesh.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}

export default HomePage;
