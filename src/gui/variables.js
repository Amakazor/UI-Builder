import tmpl from '../util/tmpl';
import { ColorInput, CssUnitInput } from '../inputs/inputs'

export default Variables = {
    bodyElement: undefined,
    variablesContainer: $("#variables"),
    cssVariables: {},
    cssHeaders: {
        colors:{
            name: "colors",
            value: "Colors",
            template: "inputcolorinputbootstrap",
        },
        sizes:{
            name: "sizes",
            value: "Sizes",
            template: "inputcssunitinputbootstrap",
        }
    },

    inputs: {},

    init() {
        this.load();
        //this.cssVariables.colors = {"color-red":"#FF0000", "color-blue":"#0000FF"};
        //this.cssVariables.sizes = {"font-size-normal":"14px","font-size-big":"5rem"};
        //this.load();
        //this.addVariable('colors', 'color-test');
        this.save();
        //this.deleteVariable('colors', 'color-test');
        this.prepareInputs();
    },
    render() {
        if (this.variablesContainer) {
            this.variablesContainer[0].innerHTML = "";
            for (let [Index, Val] of Object.entries(this.cssHeaders)) {
                this.variablesContainer[0].insertAdjacentHTML('afterbegin', tmpl("inputsectioninput", {
                    key: "variables_" + Val.name,
                    header: Val.value
                }))
            }

            if (this.cssVariables) {
                for (let [Index, Values] of Object.entries(this.cssVariables)) {
                    if (this.cssHeaders[Index].template) {
                        let element = this.variablesContainer[0].querySelector(".section[data-section=variables_" + Index + "]");
                        if (element) {
                            for (let [Name,Value] of Object.entries(Values)) {
                                if (this.inputs[Index][Name].element) {
                                    let toInsert = document.createElement("div");
                                    toInsert.insertAdjacentHTML('beforeend', tmpl("variablepre", {
                                        header: Name
                                    }));
                                    toInsert.appendChild( this.inputs[Index][Name].element[0]);
                                    toInsert.insertAdjacentHTML('beforeend', tmpl("variablepost", {
                                        group: Index,
                                        name: Name
                                    }));
                                    element.appendChild(toInsert);
                                    this.inputs[Index][Name].setValue(Value);
                                }
                            }

                            element.insertAdjacentHTML('beforeend', tmpl("variableadd", {
                                group: Index,
                            }));
                        }
                    }
                }

                this.bindDeleteButtons();
                this.bindAddButtons();
            }
        }

    },
    load() {
        let CssVariablesStorage = JSON.parse(localStorage.getItem("CssVariablesStorage"));

        if (CssVariablesStorage) {
            this.cssVariables = CssVariablesStorage;
        } else {
            this.cssVariables = {}
        }
    },
    save() {
        localStorage.setItem("CssVariablesStorage", JSON.stringify(this.cssVariables))
    },
    prepareInputs() {
        if (this.cssVariables) {
            for (let [Index, Values] of Object.entries(this.cssVariables)) {
                if (this.cssHeaders[Index].template) {
                    this.inputs[Index] = {};
                    for (let [Name,Value] of Object.entries(Values)) {
                        switch (this.cssHeaders[Index].template) {
                            case "inputcolorinputbootstrap":{
                                this.inputs[Index][Name] = new ColorInput();
                                break;
                            }
                            case "inputcssunitinputbootstrap":{
                                this.inputs[Index][Name] = new CssUnitInput();
                                break;
                            }
                        }
                        this.inputs[Index][Name].init({key: "variablesInput_" + Name, value: Value, keyname:Name, keygroup:Index}, true);
                        $(this.inputs[Index][Name].element[0]).on('propertyChange', {objectReference: this} , function (Event, Value, Object) {
                            Event.data.objectReference.changeValue($(Object).data('group'), $(Object).data('name'), Value);
                            Event.data.objectReference.save();
                            if (window.FrameDocument) {
                                Event.data.objectReference.setVariables();
                            }
                        })
                    }
                }
            }
        }
    },
    changeValue(Group, Name, Value) {
        if (Name && Value) {
            if(this.cssVariables[Group] && this.cssVariables[Group][Name] !== undefined) {
                this.cssVariables[Group][Name] = Value;
            }
        }
    },
    setVariables() {
        if (this.bodyElement)
        {
            let body = this.bodyElement;

            if (!body.querySelector("style#variables")) {
                body.insertAdjacentHTML("beforeend", "<style id='variables'></style>");
            }

            let VariablesElement = body.querySelector("style#variables");
            VariablesElement.innerHTML = this.parseVariablesToCss();
        }
    },
    parseVariablesToCss() {
        let parsedCss = ":root{";
        for (let [Index, Values] of Object.entries(this.cssVariables)) {
            for (let [Name,Value] of Object.entries(Values)) {
                parsedCss += "--"+Name+": "+Value+";";
            }
        }
        parsedCss +="}";
        return parsedCss;
    },
    setBodyElement(bodyElement) {
        this.bodyElement = bodyElement;
    },
    getPropertiesArray(index) {
        let CssVariablesStorage = JSON.parse(localStorage.getItem("CssVariablesStorage"));
        let properties = [];

        if (CssVariablesStorage) {
            if (CssVariablesStorage[index]) {
                for (let [Name,Value] of Object.entries(CssVariablesStorage[index])) {
                    properties.push({value:"var(--"+Name+")", text:Name})
                }
            }
        }
        return properties
    },
    deleteVariable(group, name) {
        let cssVariables = window.Variables.cssVariables;
        if (cssVariables && cssVariables[group] && cssVariables[group][name] !== undefined) {
            delete cssVariables[group][name];
            window.Variables.save();
            window.Variables.prepareInputs();
            window.Variables.render();
            window.Variables.setVariables();
        }
    },
    addVariable(group, name = "", value = "") {
        do {
            name = prompt("name of the new variable:");
        } while (!name);

        let cssVariables = window.Variables.cssVariables;
        if (cssVariables && cssVariables[group] && !cssVariables[group][name]) {
            cssVariables[group][name] = value;
            window.Variables.save();
            window.Variables.prepareInputs();
            window.Variables.render();
            window.Variables.setVariables();
        }
    },
    bindDeleteButtons() {
        let elements = this.variablesContainer[0].querySelectorAll("button.variable-delete");
        for (let element of elements) {
            element.addEventListener('click', this.deleteVariable.bind(null, $(element).data('group'), $(element).data('key')), false)
        }
    },
    bindAddButtons() {
        let elements = this.variablesContainer[0].querySelectorAll("button.variable-add");
        for (let element of elements) {
            element.addEventListener('click', this.addVariable.bind(null, $(element).data('group'), "", ""), false);
        }
    }
}