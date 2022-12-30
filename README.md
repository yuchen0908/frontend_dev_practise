Topic - Arrow function expressions
* An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:
    * Arrow functions don't have their own bindings to `this`, `arguments`, or `super`, and should not be used as `methods`.
    * Arrow functions cannot be used as `constructors`. Calling them with new throws a TypeError. They also don't have access to the `new.target` keyword.
    * Arrow functions cannot use `yield` within their body and cannot be created as generator functions.
[Arrow function reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

Topic - Var, Let and Const
|Keywords|Scope level   |Re-declare|Update |
|--------|--------------|----------|-------|
|Var     |block / global|Y         |Y      |
|Const   |block         |N         |N      |
|Let     |block         |Y         |Y      |
[Difference between Var, Let and Const](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
