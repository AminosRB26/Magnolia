const string = `I'm looking for something in this search bar hehe -money -money_corporation -aminos`;

const array = string.split('-').slice(1);

const parametersArray = array.map(param => param.trim());

console.log(parametersArray);