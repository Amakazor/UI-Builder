import Input from './Input';
import ColorInput from "./ColorInput";

class VariableColorInput extends Input {
    constructor() {
        super();
        this.number = 0;
        this.unit = 'px';
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
            input[this.name] = this.value;// this.name = unit or number

            value = "";
            if (input.unit == "auto") {
                $(event.data.element).addClass("auto");
                value = input.unit;
            }
            else {
                $(event.data.element).removeClass("auto");
                value = input.number + input.unit;
            }
        }

        event.data.element.trigger('propertyChange', [value, this]);
    }

    setValue(value) {
        if (value.indexOf("var(--") !== -1) {
            this.useVariable = true;
            this.element.find("[data-key='variableInput']").val(value);
        } else {
            this.useVariable = false;

            this.number = parseInt(value);
            this.unit = value.replace(this.number, '');

            if (this.unit == "auto") $(this.element).addClass("auto");

            $('input[data-key="nonVariableInput"]', this.element).val(this.number);
            $('select[data-key="nonVariableInput"]', this.element).val(this.unit);
        }
        this.element.find("[data-key='switchVariable']")[0].checked = this.useVariable;
    }

    init(data) {
        return this.render("variablecssunitinput", data);
    }
}

export default VariableColorInput;