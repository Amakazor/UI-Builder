import {SectionInput, CssUnitInput, VariableCssUnitInput} from '../inputs/inputs';
import { inc_base_sort } from './common';
import Variables from "../gui/variables";

const margin = {
    properties: [{
        key: "margins_header",
        inputtype: new SectionInput(),
        name: false,
        sort: inc_base_sort(),
        data: { header: "Margin", expanded: false },
    }, {
        name: "Top",
        key: "margin-top",
        htmlAttr: "style",
        sort: inc_base_sort(),
        col: 6,
        inline: true,
        inputtype: new VariableCssUnitInput(),
        data: {
            options: Variables.getPropertiesArray("sizes"),
            keygroup: "",
            keyname: "",
        }
    }, {
        name: "Right",
        key: "margin-right",
        htmlAttr: "style",
        sort: inc_base_sort(),
        col: 6,
        inline: true,
        inputtype: new VariableCssUnitInput(),
        data: {
            options: Variables.getPropertiesArray("sizes"),
            keygroup: "",
            keyname: "",
        }
    }, {
        name: "Bottom",
        key: "margin-bottom",
        htmlAttr: "style",
        sort: inc_base_sort(),
        col: 6,
        inline: true,
        inputtype: new VariableCssUnitInput(),
        data: {
            options: Variables.getPropertiesArray("sizes"),
            keygroup: "",
            keyname: "",
        }
    }, {
        name: "Left",
        key: "margin-left",
        htmlAttr: "style",
        sort: inc_base_sort(),
        col: 6,
        inline: true,
        inputtype: new VariableCssUnitInput(),
        data: {
            options: Variables.getPropertiesArray("sizes"),
            keygroup: "",
            keyname: "",
        }
    }]
};

export default margin;