// import { styles } from "./this.theme.styles.js";
import Calendar from "./calendar.js";
import Form from "./form.js";
import Theme from "./theme.js";

class App {
    calendar;
    form;
    theme;
    formActive = false;
    app = document.getElementById('app');

    constructor() {
        this.theme = new Theme();
        this.calendar = new Calendar();
        this.calendar.setTheme(this.theme);
        this.form = new Form();
        this.form.setTheme(this.theme);
        this.formActive = false;
    }

    toggleForm() {
        this.formActive ? this.formActive = false : this.formActive = true;
        this.render();
    }

    getData() {
        this.form.setData();
        const { backgroundColor, themeColor, year, month } = this.form.data;
        this.createCalendar(year, month);
        this.createTheme(backgroundColor, themeColor);
        this.toggleForm();
    }

    createCalendar(year, month) {
        month = month.toLowerCase();
        if (!year || !month) return;
        if (typeof year !== 'string' && typeof month !== 'string') return;
        this.calendar = new Calendar(year, month);
        this.render();
    }

    createTheme(backgroundColor, themeColor) {
        console.log(backgroundColor, themeColor)
        if (backgroundColor === '#000000' && themeColor === '#000000') return;
        let theme = new Theme(backgroundColor, themeColor);
        this.calendar.setTheme(theme);
        this.render();
    }

    render() {
        if(this.theme)
        this.app.innerHTML = this.calendar.render();
        this.app.insertAdjacentHTML("beforeend", ` <form id="form" style=${this.formActive ? this.theme.styles.form : this.theme.styles.d_none}>${this.form.render()}</form>`);
        this.app.insertAdjacentHTML("beforeend", `<button id="toggle_btn" style=${this.theme.styles.toggle_btn}>${!this.formActive ? '<i class="fa-solid fa-toggle-off"></i>' : '<i class="fa-solid fa-toggle-on"></i>'} </button>`);
        document.getElementById("toggle_btn").addEventListener('click', () => this.toggleForm());
        document.getElementById("send_btn").addEventListener('click', () => this.getData());
    }
}

export const app = new App();
app.render();