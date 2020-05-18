const inputvariablecssunitinput = `
	<div class="custom-variable_input">
	    <label class="switchVariableLabel col-sm-8 no-padding" for="switchVariable{%=key%}">Use variable</label>
	    <input class="col-sm-2 switchVariable no-padding" id="switchVariable{%=key%}" data-key="switchVariable" type="checkbox">
		<div class="nonVariableInput flex">
            <input name="number" data-key="nonVariableInput" type="number" data-group="{%=keygroup%}" data-name="{%=keyname%}"
            {% if (typeof value !== 'undefined') { %}value="{%=value%}"{% } %}
            {% if (typeof min !== 'undefined' && min != false) { %}min="{%=min%}"{% } %}
            {% if (typeof max !== 'undefined' && max != false) { %}max="{%=max%}"{% } %}
            {% if (typeof step !== 'undefined' && step != false) { %}step="{%=step%}"{% } %}
            class="form-control col-sm-8 no-padding"/>
            <div class="input-group-append col-sm-4 no-padding">
                <select class="form-control custom-select small-arrow" data-key="nonVariableInput" name="unit" data-group="{%=keygroup%}" data-name="{%=keyname%}">
                    <option>em</option>
                    <option>px</option>
                    <option>%</option>
                    <option>rem</option>
                    <option>auto</option>
                </select>
            </div>
        </div>
        <select class="variableInput form-control custom-select" data-key="variableInput">
            {% for ( var i = 0; i < options.length; i++ ) { %}
            <option value="{%=options[i].value%}">{%=options[i].text%}</option>
            {% } %}
        </select>
	</div>
`;

export default inputvariablecssunitinput;