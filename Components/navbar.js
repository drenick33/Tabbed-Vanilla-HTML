class Navbar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <nav class="nav">
      <ul>
        <li>
          <a id="generalLink" href="/" class="nav-link" data-link>General</a>
        </li>
        <li>
          <a id="formLink" href="/Pages/Form/form.html" class="nav-link" data-link>Form</a>
        </li>
        <li>
          <a id="helpLink" href="/Pages/Help/help.html" class="nav-link" data-link>Help</a>
        </li>
      </ul>
    </nav>
      `;
    this.highlightCurrentPage();
  }

  highlightCurrentPage() {
    switch (document.title) {
      case "General":
        this.addCurrentPageClassToLink("generalLink");
        break;
      case "Help":
        this.addCurrentPageClassToLink("helpLink");
        break;
      case "Form":
        this.addCurrentPageClassToLink("formLink");
        break;
      default:
        break;
    }
  }

  addCurrentPageClassToLink(linkIdString) {
    document.getElementById(linkIdString).classList.add("currentPageLink");
  }
}

customElements.define("navbar-component", Navbar);
