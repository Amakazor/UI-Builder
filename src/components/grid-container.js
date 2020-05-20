import { inc_base_sort } from './common';
import {
    GridCssUnitInput,
    SectionInput,
    SelectInput,
    VariableCssUnitInput,
} from '../inputs/inputs';
import Variables from "../gui/variables";

const gridContainer = {
    properties: [
        {
            key: "gridContainer_header",
            inputtype: new SectionInput(),
            name: false,
            sort: inc_base_sort(),
            data: { header: "Grid Container", expanded: false },
        },{
            name: "Grid template columns",
            key: "grid-template-columns",
            htmlAttr: "style",
            sort: inc_base_sort(),
            col: 12,
            inline: true,
            parent: "",
            inputtype: new GridCssUnitInput(),
        },{
            name: "Grid template rows",
            key: "grid-template-rows",
            htmlAttr: "style",
            sort: inc_base_sort(),
            col: 12,
            inline: true,
            parent: "",
            inputtype: new GridCssUnitInput(),
        },{
            name: "Column gap",
            key: "column-gap",
            htmlAttr: "style",
            sort: inc_base_sort(),
            col: 6,
            inline: true,
            parent: "",
            inputtype: new VariableCssUnitInput(),
            data: {
                options: Variables.getPropertiesArray("sizes"),
                keygroup: "",
                keyname: "",
            }
        },{
            name: "Row gap",
            key: "row-gap",
            htmlAttr: "style",
            sort: inc_base_sort(),
            col: 6,
            inline: true,
            parent: "",
            inputtype: new VariableCssUnitInput(),
            data: {
                options: Variables.getPropertiesArray("sizes"),
                keygroup: "",
                keyname: "",
            }
        }, {
            name: "Justify items",
            key: "justify-items",
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
            name: "Align items",
            key: "align-items",
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
            name: "Justify content",
            key: "justify-content",
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
                }, {
                    value: "space-around",
                    text: "Space around"
                }, {
                    value: "space-between",
                    text: "Space between"
                }, {
                    value: "space-evenly",
                    text: "Space evenly"
                }]
            }
        }, {
            name: "Align content",
            key: "align-content",
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
                }, {
                    value: "space-around",
                    text: "Space around"
                }, {
                    value: "space-between",
                    text: "Space between"
                }, {
                    value: "space-evenly",
                    text: "Space evenly"
                }]
            }
        }
    ]
};

export default gridContainer;