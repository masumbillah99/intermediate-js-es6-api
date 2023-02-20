/** template String, multiple line string, dynamic string */
/** ----- COMMON KEYS/ASCII CODE YOU SHOULD KNOW ------
	\n -– new line (it takes the cursor to the next line)
	` ` --- back tick
	‘  --- single quotes
	“ ” --- double quotes
	/ --- forward slash
	\ --- backward slash
	; --- 
*/

const person1 = 'Vladimir Putin';
const person2 = 'Ben White';
const person3 = `Donald Trump`;

const multiline = 'first line text \n' +
    'second line text \n' +
    'third line text';
// console.log(multiline);

// for multiline = backTick
const newMultiline = `first line of text
    second line text
    third line text
    fourth line of code`;
// console.log(newMultiline);

const a = 20;
const b = 30;
const nums = [23, 54, 6, 465, 76, 98];
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a + b);
// console.log(summary);

/** template string */
const newSummary = `sum of ${a} and ${nums.length} is: ${a + b}`;
console.log(newSummary);