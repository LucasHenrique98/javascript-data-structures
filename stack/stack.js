const { Stack, ObjectStack } = require('./stackClass');

const stack = new ObjectStack();

stack.push('Lucas');
stack.push('Gabriela');
stack.push('Adriana');

console.log(stack.pop());
