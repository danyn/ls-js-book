let xlr = {
  j_c: 'pens green',
  t: 'phones',
  c_j: 'stones green',
  g: 'fish'
}

let k = Object.keys(xlr);

k = k.filter((identifier) => identifier.includes('c'));

k.forEach(prop => console.log(xlr[prop], prop));
