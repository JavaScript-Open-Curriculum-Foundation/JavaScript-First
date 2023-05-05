function getTimeComplexity(fn) {
  let loopCount = 0;
  let recurseCount = 0;

  function countLoops(node) {
    if (node.type === 'WhileStatement' || node.type === 'ForStatement' || node.type === 'DoWhileStatement') {
      loopCount++;
    }
    if (node.body) {
      if (Array.isArray(node.body)) {
        node.body.forEach(countLoops);
      } else {
        countLoops(node.body);
      }
    }
  }

  function countRecurses(node) {
    if (node.type === 'CallExpression' && node.callee.name === fn.name) {
      recurseCount++;
    }
    if (node.arguments) {
      node.arguments.forEach(countRecurses);
    }
    if (node.body) {
      if (Array.isArray(node.body)) {
        node.body.forEach(countRecurses);
      } else {
        countRecurses(node.body);
      }
    }
  }

  const ast = esprima.parseScript(fn.toString());
  console.log('AST:', ast);
  countLoops(ast);
  countRecurses(ast);
  console.log('Loop count:', loopCount);
  console.log('Recursion count:', recurseCount);

  if (recurseCount > 0) {
    console.log('Time complexity: Exponential');
    return 'Exponential';
  } else if (loopCount > 0) {
    if (loopCount === 1) {
      console.log('Time complexity: Linear');
      return 'Linear';
    } else if (loopCount === 2) {
      console.log('Time complexity: Quadratic');
      return 'Quadratic';
    } else {
      console.log('Time complexity: Polynomial');
      return 'Polynomial';
    }
  } else {
    console.log('Time complexity: Constant');
    return 'Constant';
  }
}
