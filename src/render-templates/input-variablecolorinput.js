const inputvariablecolorinput = `
	<div class="custom-variable_input">
	    <label class="switchVariableLabel col-sm-8 no-padding" for="switchVariable{%=key%}">Use variable</label>
	    <input class="col-sm-2 switchVariable no-padding" id="switchVariable{%=key%}" data-key="switchVariable" type="checkbox">
		<input class="nonVariableInput form-control" data-key="nonVariableInput" name="{%=key%}" type="color"
			{% if (typeof value !== 'undefined') { %}value="{%=value%}"{% } %}
		 	pattern="#[a-f0-9]{6}"/>
		 	
        <select class="variableInput form-control custom-select" data-key="variableInput">
            {% for ( var i = 0; i < options.length; i++ ) { %}
            <option value="{%=options[i].value%}">{%=options[i].text%}</option>
            {% } %}
        </select>
	</div>
`;

export default inputvariablecolorinput;