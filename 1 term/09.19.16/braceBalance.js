function braceBalance(str) {
	let braces = '[]{}()';
	let stack = [];
	let bracePos = 0;

	for (let char of str) {
		bracePos = braces.indexOf(char);

		if (bracePos === -1) {
			continue;
		}

		if (bracePos % 2 === 0) {
			stack.push(bracePos + 1);
		} else if (stack.pop() !== bracePos) {
				return false;
		}
	}
	return stack.length === 0;
}

console.log('are these braces balanced or wut???');
console.log('() ' + braceBalance('()'));
console.log('({[}]) ' + braceBalance('({[}])'));
console.log('[] () {}] ' + braceBalance('[] () {}]'));
console.log('( {} {  [ {}]  { ()}   } ) ' + braceBalance('( {} {  [ {}]  { ()}   } )'));
console.log('by the way, the same pascal script (http://pascalabc.net/WDE/?file=01011.pas) fails on ({}})');