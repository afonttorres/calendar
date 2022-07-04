// import { styles } from "./this.theme.styles.js";

export default class Calendar {
    weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    yearMonths = [{ 'january': 31 }, { 'february': 28 }, { 'march': 31 }, { 'april': 30 }, { 'may': 31 }, { 'june': 30 }, { 'july': 31 }, { 'august': 31 }, { 'september': 30 }, { 'october': 31 }, { 'november': 30 }, { 'december': 31 }]

    month;
    year;

    date = {};

    monthDays;
    days = [];
    voidDays = [];
    calendarDate;
    monthStart;

    theme;

    constructor(year, month) {

        let monthI;
        this.yearMonths.map((obj, key) => { if (Object.keys(obj)[0] === month) monthI = key });

        this.calendarDate = year && month ? new Date(year, monthI, 1) : new Date();

        this.month = Object.keys(this.yearMonths[this.calendarDate.getMonth()])[0];
        this.year = this.calendarDate.getFullYear();

        this.date = {
            day: new Date().getDate(),
            month: new Date().getMonth()
        }

        this.monthDays = this.yearMonths[this.calendarDate.getMonth()][this.month];
        this.monthStart = this.weekDays[new Date(this.year, this.calendarDate.getMonth(), 1).getDay() - 1];

        this.setDays();
        this.createVoidDays();
    }

    setDays() {
        for (let i = 1; i <= this.monthDays; i++) {
            this.days.push(i);
        }
    }

    createVoidDays() {
        let index = this.weekDays.indexOf(this.monthStart);
        let voidDays = index;
        for (let i = 1; i <= voidDays; i++) {
            this.voidDays.push(i);
        }

    }

    setTheme(theme) {
        this.theme = theme;
        console.log(theme);
        this.render();
    }

    render() {
        if(this.theme)
        return (`
            <main style=${this.theme.styles.wrapper}>
                <h1 style=${this.theme.styles.title}>${this.month} - ${this.year}</h1>
                <div style=${this.theme.styles.days_row}>${this.weekDays.map((d) => { return `<div style=${this.theme.styles.days_col}>${d}</div>` }).join('')}</div>
                <div style=${this.theme.styles.grid}>
                ${this.voidDays.map((vd) => { return `<article style=${this.theme.styles.grid_item_hidden}></article>` }).join('')}
                ${this.days.map((day) => { return `<article style=${day === this.date.day && this.month === Object.keys(this.yearMonths[this.date.month])[0] ? this.theme.styles.grid_item_current : this.theme.styles.grid_item}><span style=${this.theme.styles.grid_item_span}>${day}</span></article>` }).join('')}
                </div>
                <button style=${this.theme.styles.print_btn} onclick=window.print()><i class="fa-solid fa-print"></i></button>
            </main>
        `)
    }
}