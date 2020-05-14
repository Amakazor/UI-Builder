const inputcolorinputbootstrap = `
	<div class="col-sm-8">
		<input name="{%=key%}" data-group="{%=keygroup%}" data-name="{%=keyname%}" type="color"
			{% if (typeof value !== 'undefined') { %}value="{%=value%}"{% } %}
		 	pattern="#[a-f0-9]{6}" class="form-control"/>
	</div>
`;

export default inputcolorinputbootstrap;