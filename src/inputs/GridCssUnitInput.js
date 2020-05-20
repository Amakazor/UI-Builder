import Input from './Input';

class GridCssUnitInput extends Input {
	constructor() {
		super();
		this.number = 0;
		this.unit = 'px';
		this.repeat = 0;
		this.events = [
			["change", "onChange", "select"],
			["change", "onChange", "input"],
		];
	}

	onChange(event) {
		if (event.data && event.data.element) {
			input = event.data.input;
			input[this.name] = this.value;// this.name = unit or number	

			value = "";
			if (input.unit == "auto") {
				$(event.data.element).addClass("auto");
				value = "1fr"
			}
			else {
				if (input.unit == "fr")
				{
					$(event.data.element).addClass("auto");
				}
				else
				{
					$(event.data.element).removeClass("auto");
				}
				value = input.number + input.unit;
			}
			value = "repeat("+input.repeat+","+value+")";

			event.data.element.trigger('propertyChange', [value, this]);
		}
	}

	setValue(value) {
		let roundBracketOpenIndex = value.indexOf("(");
		let roundBracketCloseIndex = value.indexOf(")");
		let commaIndex = value.indexOf(",");

		this.number = parseInt(value.substring(commaIndex+1, roundBracketCloseIndex));
		this.unit = (value.substring(commaIndex+1, roundBracketCloseIndex)).replace(this.number, '').trim();
		this.repeat = parseInt(value.substring(roundBracketOpenIndex+1,commaIndex));

		if ((this.unit == "auto") || (this.unit == "fr")) $(this.element).addClass("auto");

		$('input[name="number"]', this.element).val(this.number);
		$('select[name="unit"]', this.element).val(this.unit);
		$('input[name="repeat"]', this.element).val(this.repeat);
	}

	init(data, isBootstraped=false) {
		return this.render("gridcssunitinput"+(isBootstraped?"bootstrap":""), data);
	}
}

export default GridCssUnitInput;