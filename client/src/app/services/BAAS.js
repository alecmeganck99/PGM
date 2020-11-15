const DOMAIN = 'https://pgmgent-1920-students.github.io/case1-pgm-website-baas-alecmeganck99';

class BAAS {
  static getCases = async () => {
    const response = await fetch(`${DOMAIN}/data/cases/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getNews = async () => {
    const response = await fetch(`${DOMAIN}/data/news/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getAbouts = async () => {
    const response = await fetch(`${DOMAIN}/data/about/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getStudents = async () => {
    const response = await fetch(`${DOMAIN}/data/team/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getCase = async (id) => {
    const response = await fetch(`${DOMAIN}/data/cases/index.json`);
    const jsonData = await response.json();
    return jsonData.find(caseName => caseName.id === id);
  }

  static getNew = async (id) => {
    const response = await fetch(`${DOMAIN}/data/news/index.json`);
    const jsonData = await response.json();
    return jsonData.find(caseName => caseName.id === id);
  }

  static getStudent = async (id) => {
    const response = await fetch(`${DOMAIN}/data/team/index.json`);
    const jsonData = await response.json();
    return jsonData.find(studentsName => studentsName.id === id);
  }

  static getHeaderImg = async (id) => {
    const response = await fetch(`${DOMAIN}/data/base/index.json`);
    const jsonData = await response.json();
    return jsonData.find(headerImg => headerImg.id === id);
  }

  static getHpBar = async (id) => {
    const response = await fetch(`${DOMAIN}/data/home/index.json`);
    const jsonData = await response.json();
    return jsonData.find(homepageBar => homepageBar.id === id);
  }

  static getHPAboutPost = async (id) => {
    const response = await fetch(`${DOMAIN}/data/home/index.json`);
    const jsonData = await response.json();
    return jsonData.find(headerPost => headerPost.id === id);
  }

  static getHPCases = async (id) => {
    const response = await fetch(`${DOMAIN}/data/cases/index.json`);
    const jsonData = await response.json();
    return jsonData.find(casesPost => casesPost.id === id);
  }

  static getCasesImg = async (id) => {
    const response = await fetch(`${DOMAIN}/data/casesHeader/index.json`);
    const jsonData = await response.json();
    return jsonData.find(casesImg => casesImg.id === id);
  }

  static getAPPostHeader = async (id) => {
    const response = await fetch(`${DOMAIN}/data/aboutHeader/index.json`);
    const jsonData = await response.json();
    return jsonData.find(aboutPost => aboutPost.id === id);
  }

  static getTeamsStaff = async (id) => {
    const response = await fetch(`${DOMAIN}/data/aboutTeam/index.json`);
    const jsonData = await response.json();
    return jsonData.find(staffImg => staffImg.id === id);
  }
}

export default BAAS;
