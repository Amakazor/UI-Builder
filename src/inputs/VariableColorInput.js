import Input from './Input';
import ColorInput from "./ColorInput";

class VariableColorInput extends Input {
    constructor() {
        super();
        this.events = [
            ["change", "onChange", "select"],
            ["change", "onChange", "input"],
        ];
        this.useVariable = false;
    }

    changeInput(useVariable) {
        this.useVariable = useVariable;
    }

    onChange(event) {
        let input = event.data.input;
        let value = "";

        if ($(event.target).data("key") === "switchVariable") {
            input.changeInput(event.target.checked);
        }

        console.log(input);

        if (input.useVariable) {
            value = input.element.find("[data-key='variableInput']").val();
        } else {
            value = input.element.find("[data-key='nonVariableInput']").val();
        }

        event.data.element.trigger('propertyChange', [value, this]);
    }

    rgb2hex(rgb) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : rgb;
    }

    setValue(value) {
        if (value.indexOf("var(--") !== -1) {
            this.useVariable = true;
            this.element.find("[data-key='variableInput']").val(value);
        } else {
            this.useVariable = false;
            this.element.find("[data-key='nonVariableInput']")[0].value = this.rgb2hex(value);
        }
        this.element.find("[data-key='switchVariable']")[0].checked = this.useVariable;
    }

    init(data) {
        return this.render("variablecolorinput", data);
    }
}

export default VariableColorInput;