#  &&

> 3 && 'foo'  // last evaluated operand is 'foo'
returns 'foo'

> 'foo' && 3  // last evaluated operand is 3
returns 3

> 0 && 'foo'  // last evaluated operand is 0
returns 0

> 'foo' && 0  // last evaluated operand is 0
returns 0

# ||

> 3 || 'foo'  // last evaluated operand is 3
returns  3

> 'foo' || 3  // last evaluated operand is 'foo'
returns  'foo'

> 0 || 'foo'  // last evaluated operand is 'foo'
returns  'foo'

> 'foo' || 0  // last evaluated operand is 'foo'
returns  'foo'

> '' || 0     // last evaluated operand is 0
returns 0

# example
let foo = null;
let bar = 'qux';
let isOk = foo || bar;

here if isOk is later to be used as a boolean value it is not
the clearest to use the string 'qux' as true

There is a couple things you could do to make it clear

# if either is tru it's true
let isOk = (foo || bar) ? true : false;

let isOk;
if (foo || bar) {
  isOk = true;
} else {
  isOk = false;
}

foo || bar returns 'qux' , 'qux' is truthy so:
isOk = Boolean(foo || bar) // true
isOk = !!(foo || bar) // true


