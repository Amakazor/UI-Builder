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
        //this.save();
        //this.load();
        this.prepareInputs();
    },
    render() {
        if (this.variablesContainer) {
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
                                    element.appendChild(toInsert);
                                    this.inputs[Index][Name].setValue(Value);
                                }
                            }
                        }
                    }
                }
            }
        }

    },
    load() {
        let CssVariablesStorage = JSON.parse(localStorage.getItem("CssVariablesStorage"));

        if (CssVariablesStorage) {
            this.cssVariables = CssVariablesStorage;
        } else {
            this.cssVariables = {
                colors: null,
            }
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
            if(this.cssVariables[Group][Name]) {
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
}