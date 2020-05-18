import {
    SectionInput,
    SelectInput,
    CssUnitInput,
    ColorInput,
    VariableCssUnitInput,
    VariableColorInput
} from '../inputs/inputs';
import { inc_base_sort } from './common';
import Variables from "../gui/variables";

const border = {
    properties: [{
        key: "border_header",
        inputtype: new SectionInput(),
        name: false,
        sort: inc_base_sort(),
        data: { header: "Border", expanded: false },
    }, {
        name: "Style",
        key: "border-style",
        htmlAttr: "style",
        sort: inc_base_sort(),
        col: 6,
        inline: true,
        inputtype: new SelectInput(),
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: 'dashed',
                text: 'Dashed'
            }, {
                value: 'dotted',
                text: 'Dotted'
            }, {
                value: 'double',
                text: 'Double'
            }, {
                value: 'groove',
                text: 'Groove'
            }, {
                value: 'hidden',
                text: 'Hidden'
            }, {
                value: 'inherit',
                text: 'Inherit'
            }, {
                value: 'initial',
                text: 'Initial'
            }, {
                value: 'inset',
                text: 'Inset'
            }, {
                value: 'none',
                text: 'None'
            }, {
                value: 'outset',
                text: 'Outset'
            }, {
                value: 'ridge',
                text: 'Ridge'
            }, {
                value: 'solid',
                text: 'Solid'
            }, {
                value: 'unset',
                text: 'Unset'
            }],
        }
    }, {
        name: "Width",
        key: "border-width",
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
        name: "Color",
        key: "border-color",
        sort: inc_base_sort(),
        col: 6,
        inline: true,
        htmlAttr: "style",
        inputtype: new VariableColorInput(),
        data: {
            options: Variables.getPropertiesArray("colors")
        }
    }, {
        name: "Radius",
        key: "border-radius",
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

export default border;