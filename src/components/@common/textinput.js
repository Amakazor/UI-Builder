import { inputTypeNames } from '../inputTypes';
import { dataComponentId, inputBlockClass, inputAlignStyle } from '../common';
import input from './input';
import { textinputid } from './ids';
import { textinputProperties as properties } from '../properties/input';
import extend from 'lodash/extend';

const textinput = extend({}, input, {
    name: "Text Input",
    attributes: { "type": inputTypeNames },
    image: "icons/text_input.svg",
    html: `<div class="${inputBlockClass}" style="${inputAlignStyle}">
            <input ${dataComponentId}="${textinputid}" type="text" class="form-control">
           </div>`,
    properties
});

export default textinput;