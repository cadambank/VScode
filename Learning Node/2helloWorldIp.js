//Process Input from CLI Arguments and Print it along with a message

let name = process.argv.slice(2)[0];

const welcomeMsg = "\nCongrats on your first Node Program!\nThat too with CLI arguments!!";
const salutation = "Hello ";

console.log(salutation + name + welcomeMsg);

