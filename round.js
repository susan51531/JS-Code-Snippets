/**
 * Round number
 * 四舍五入
 * http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript/21323513#21323513
 */

/*
	round(10.8034, 2);      // Returns 10.8
	round(1.275, 2);        // Returns 1.28
	round(1.27499, 2);      // Returns 1.27
	round(1.2345678e+2, 2); // Returns 123.46
*/

function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp  = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}
