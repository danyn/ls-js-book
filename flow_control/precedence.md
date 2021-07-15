# order of natural precedence

1. <=, <, >, >= - Comparison operators
2. ===, !==, ==, != - Equality operators
3. && - Logical AND - operator
4. || - Logical OR - operator



true || false && false // true "true || false"
(true || false) && false // false "true && false"

use parenthesis to overide or make explicit 
* these are equal
default precedence:   true || false && false
explicit precendence: true || (false && false)
