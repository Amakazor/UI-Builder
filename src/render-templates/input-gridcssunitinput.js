const inputgridcssunitinput = `
    <div class="input-group" id="cssunit-{%=key%}">
        <input name="number" type="number"
            {% if (typeof value !== 'undefined') { %}value="{%=value%}"{% } %}
            {% if (typeof min !== 'undefined' && min != false) { %}min="{%=min%}"{% } %}
            {% if (typeof max !== 'undefined' && max != false) { %}max="{%=max%}"{% } %}
            {% if (typeof step !== 'undefined' && step != false) { %}step="{%=step%}"{% } %}
        class="form-control col-sm-6 no-padding"/>
        <div class="input-group-append input-group-append-smaller col-sm-2 no-padding">
            <select class="form-control custom-select small-arrow" name="unit">
                <option>px</option>
                <option>%</option>
                <option>fr</option>
            </select>
        </div>
        <input name="repeat" type="number" class="no-hide col-sm-4 no-padding">
            {% if (typeof repeat !== 'undefined') { %}value="{%=repeat%}"{% } %}
    </div>
`;

export default inputgridcssunitinput;