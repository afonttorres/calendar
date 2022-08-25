export default class Theme {
    colors = {
        backgroundColor: 'white',
        themeColor: 'indianred'
    };
    styles = {};

    constructor(backgroundColor, themeColor) {
        this.colors = {
            backgroundColor: backgroundColor ? backgroundColor : 'white',
            themeColor: themeColor ? themeColor : 'indianred'
        }

        this.styles = {
            wrapper: `"
                height: 100vh;
                width: 100vw;
                background-color: ${this.colors.backgroundColor};
                color: ${this.colors.themeColor};
                font-family: system-ui;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                border-radius: .75rem;
                position: fixed;
                top: 0;
                left: 0;
                margin: 0;
                padding: 0;
            "`,
            title: `"
                color: inherit;
                font-size: medium;
                text-transform: capitalize;
            "`,
            days_row: `"
                height: calc(100% * .01);
                width: calc(100% * .9);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;
            "`,
            days_col: `"
                height: 100%;
                width: calc(100%/7);
                display: flex;
                align-items: center;
                justify-content: center;
            "`,
            grid: `"
                display: flex;
                flex-wrap: wrap;
                height: calc(100% * .9);
                width: calc(100% * .9);
                justify-content: flex-start;
                align-items: center;
                gap: 1%;
                position: relative;
                left: .25%;
            "`,
            grid_item: `"
                width: calc(100%/ 7.6);
                height: calc(100%/6);
                border-radius: .25rem;
                border: 1px solid ${this.colors.themeColor};
                position: relative;
            "`,
            grid_item_span: `"
                top: 5%;
                left: 10%;
                position: absolute;
            "`,
            grid_item_hidden: `"
                width: calc(100%/ 7.6);
                height: calc(100%/6);
                visibility: hidden;
            "`,
            grid_item_current: `"
                width: calc(100%/ 7.6);
                height: calc(100%/6);
                border-radius: .25rem;
                border: 2px solid ${this.colors.themeColor};
                font-weight: 800;
                transform: scale(.95);
            "`,
            print_btn: `"
                position: fixed;
                top: 5vh;
                left: 4vh;
                height: 3vh;
                width: 3vh;
                border-radius: 50%;
                border: 2px solid ${this.colors.themeColor};
                color: ${this.colors.themeColor};
                background-color: ${this.colors.backgroundColor};
                cursor: pointer;
                outline: none;
                box-shadow: none;
                display: flex;
                align-items: center;
                justify-content: center;
        "`,
            toggle_btn: `"
                position: fixed;
                top: calc(5vh + 3vh + 1vh);
                left: 4vh;
                height: 3vh;
                width: 3vh;
                border: none;
                background-color: ${this.colors.backgroundColor};
                background-color: transparent; 
                cursor: pointer;
                outline: none;
                box-shadow: none;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${this.colors.themeColor};
                font-size: x-large;
                transition: all 2s ease;
            "`,
            form: `"
                position: absolute;
                top: calc(100% - 75%);
                left: calc(100% - 75%);
                height: 50%;
                width: 50%;
                justify-content: center;
                align-items: center;
                display: flex;
                flex-direction: column;
                background: ${this.colors.backgroundColor};
                border-radius: 0.75rem;
                box-shadow: 5px 4px 30px lightgrey;
                gap: 5%;
            "`,
            d_none: `"
                display: none;
            "`,
            label: `"
                font-family: system-ui;
            "`
            ,
            sendBtn: `"
                border: 1px solid indianred;
                padding: 8px 32px;
                border-radius: 0.25rem;
                background-color: white;
                color: indianred;
                font-family: system-ui;
                cursor: pointer;
            "`
            ,input: `"
                border: 1px solid indianred;
                padding: 8px;
                width: 125px;
                border-radius: 0.25rem;
                color: indianred;
            "`
        }
    }
}