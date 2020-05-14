const inputcssunitinputbootstrap = `
    <div class="input-group col-sm-8" id="cssunit-{%=key%}">
        <input name="number" type="number" data-group="{%=keygroup%}" data-name="{%=keyname%}"
            {% if (typeof value !== 'undefined') { %}value="{%=value%}"{% } %}
            {% if (typeof min !== 'undefined' && min != false) { %}min="{%=min%}"{% } %}
            {% if (typeof max !== 'undefined' && max != false) { %}max="{%=max%}"{% } %}
            {% if (typeof step !== 'undefined' && step != false) { %}step="{%=step%}"{% } %}
        class="form-control"/>
        <div class="input-group-append">
            <select class="form-control custom-select small-arrow" name="unit" data-group="{%=keygroup%}" data-name="{%=keyname%}">
                <option>em</option>
                <option>px</option>
                <option>%</option>
                <option>rem</option>
                <option>auto</option>
            </select>
        </div>
    </div>
`;

export default inputcssunitinputbootstrap;