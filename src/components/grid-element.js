import { inc_base_sort } from './common';
import {
    SectionInput,
    SelectInput,
    VariableCssUnitInput,
    NumberInput
} from '../inputs/inputs';
import Variables from "../gui/variables";
import gridContainer from "./grid-container";
import numberinput from "../render-templates/input-numberinput";

const gridElement = {
    properties: [
        {
            key: "gridElement_header",
            inputtype: new SectionInput(),
            name: false,
            sort: inc_base_sort(),
            data: {header: "Grid Element", expanded: false},
        },{
            name: "Grid column start",
            key: "grid-column-start",
            htmlAttr: "style",
            sort: inc_base_sort(),
            col: 6,
            inline: true,
            inputtype: new NumberInput(),
        },{
            name: "Grid column end",
            key: "grid-column-end",
            htmlAttr: "style",
            sort: inc_base_sort(),
            col: 6,
            inline: true,
            inputtype: new NumberInput(),
        },{
            name: "Grid row start",
            key: "grid-row-start",
            htmlAttr: "style",
            sort: inc_base_sort(),
            col: 6,
            inline: true,
            inputtype: new NumberInput(),
        },{
            name: "Grid row end",
            key: "grid-row-end",
            htmlAttr: "style",
            sort: inc_base_sort(),
            col: 6,
            inline: true,
            inputtype: new NumberInput(),
        },{
            name: "Justify self",
            key: "justify-self",
            htmlAttr: "style",
            sort: inc_base_sort(),
            col: 6,
            inline: true,
            inputtype: new SelectInput(),
            data: {
                options: [{
                    value: "start",
                    text: "Start"
                }, {
                    value: "end",
                    text: "End"
                }, {
                    value: "center",
                    text: "Center"
                }, {
                    value: "stretch",
                    text: "Stretch"
                }]
            }
        }, {
            name: "Align self",
            key: "align-self",
            htmlAttr: "style",
            sort: inc_base_sort(),
            col: 6,
            inline: true,
            inputtype: new SelectInput(),
            data: {
                options: [{
                    value: "start",
                    text: "Start"
                }, {
                    value: "end",
                    text: "End"
                }, {
                    value: "center",
                    text: "Center"
                }, {
                    value: "stretch",
                    text: "Stretch"
                }]
            }
        }
    ]
};

export default gridElement;