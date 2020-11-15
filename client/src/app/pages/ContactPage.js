class ContactPage {
  async render () {
    return `
      <div class="container">
        <div class="contact-header">
          <div class="contact-header__mails">
            <div class="contact-mails">
              <p class="contact-mails__title">Opleidingsverantwoordelijke</p>
              <p class="contact-mails__name">Olivier Parent</p>
              <p class="contact-mails__mail"><a href="mailto:olivier.parent@arteveldehs.be">olivier.parent@arteveldehs.be</a></p>
            </div>
            <div class="contact-mails">
              <p class="contact-mails__title">Trajectbeheer</p>
              <p class="contact-mails__name">Maaike Callens</p>
              <p class="contact-mails__mail"><a href="mailto:maaike.callens@arteveldehs.be">maaike.callens@arteveldehs.be</a></p>
            </div>
            <div class="contact-mails">
              <p class="contact-mails__title">Werkplekleren</p>
              <p class="contact-mails__name">Philippe De Pauw - Waterschoot</p>
              <p class="contact-mails__mail"><a href="mailto:philippe.depauw@arteveldehs.be">philippe.depauw@arteveldehs.be</a></p>
            </div>
          </div>
          <div class="contact-header__form">
            <form method="post">
              <input type="text" id="name" placeholder="Naam">
              <input type="mail" id="email" placeholder="Email">
              <input type="text" id="text" placeholder="Onderwerp">
              <button type="submit">Verstuur</button>
            </form>
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

export default ContactPage;
