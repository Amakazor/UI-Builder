import {SectionInput, CssUnitInput, VariableCssUnitInput} from '../inputs/inputs';
import { inc_base_sort } from './common';
import Variables from "../gui/variables";

const padding = {
    properties: [{
        key: "paddings_header",
        inputtype: new SectionInput(),
        name: false,
        sort: inc_base_sort(),
        data: { header: "Padding", expanded: false },
    }, {
        name: "Top",
        key: "padding-top",
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
        key: "padding-right",
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
        key: "padding-bottom",
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
        key: "padding-left",
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

export default padding;