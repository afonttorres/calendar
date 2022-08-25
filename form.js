import { styles } from "./styles.js"

export default class Form {

    data;
    theme;

    setData() {
        const inputs = document.querySelectorAll('input');
        let data = {};
        for (let input of inputs) {
            let name = input.name;
            let value = input.value;
            data = { ...data, [name]: value }
        }
        this.data = data;
    }

    setTheme(theme) {
        this.theme = theme;
        // this.render();
    }

    
    render() {
        console.log(this.theme.styles.label)
        return (
            `
            <input style=${this.theme.styles.input} placeholder=" Year" name="year" type="text" />
            <input style=${this.theme.styles.input} placeholder=" Month" name="month" type="text"/>

            <label style=${this.theme.styles.label}>Background color</label>
            <input placeholder="background color" name="backgroundColor" type="color"/>

            <label style=${this.theme.styles.label}>Font color</label>
            <input placeholder="theme color" name="themeColor" type="color"/>

            <button style=${this.theme.styles.sendBtn} id="send_btn" type=button>Send</button>
        `
        )
    }
}