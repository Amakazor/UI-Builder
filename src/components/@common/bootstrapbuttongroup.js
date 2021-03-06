import { buttonGroupProperties as properties } from '../properties/button';
import button from './button';
import extend from 'lodash/extend';
import basiccomponent from './basiccomponent';
import { configurableComponent } from '../common';

const bootstrapbuttongroup = extend({}, basiccomponent, {
    classes: ["btn-group"],
    name: "Button Group",
    image: "icons/button_group.svg",
    html: `<div class="btn-group ${configurableComponent}" role="group" aria-label="Basic example">
                ${button.html}
                ${button.html}
                ${button.html}
           </div>`,
    properties
});

export default bootstrapbuttongroup;