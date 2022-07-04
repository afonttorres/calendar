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

    setTheme(theme){
        this.theme = theme;
        // this.render();
    }

    render() {
        return (
            `
            <input placeholder="year" name="year" type="text" />
            <input placeholder="month" name="month" type="text"/>

            <input placeholder="background color" name="backgroundColor" type="color"/>
            <input placeholder="theme color" name="themeColor" type="color"/>

            <button id="send_btn" type=button  >send</button>
        `
        )
    }
}