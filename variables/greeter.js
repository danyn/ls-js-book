const user = 'Victor';
n = 0;
while (n < 3) {
  switch (n) {
    case 0:
      console.log(`Good Morning ${user}`);
      break;
    case 1:
      console.log(`Good Afternoon ${user}`);
      break;
    case 2:
      console.log(`Good Evening ${user}`);
      break;
  }
  n ++;
}