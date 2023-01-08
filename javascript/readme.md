# Javascript Tutorial for beginners
[Video](https://www.youtube.com/watch?v=W6NZfCO5SIk&list=PLif4iXLY4SOxbZS26ruK6s6N7ffYPEGF2)

Topic - how to quickly get the html sample code
1. create "index.html" file under the folder
2. in blank "index.html", press `!` + `tab`, and we will get the skeleton of html code.
3. to add a tag for example `<h1>`, press `h1` + `tab`, and VSC automatically complete the tag `<h1>` and `</h1>`, and wait for the content.

Topic - where to add Javascript in HTML file
1. there're two places we can add `<script></script>`, either in the `<head></head>` or at the end of `<body></body>`.
    * the best practise is to add them at the end of `<body></body>` section. 1) the browser processes code from top to bottom. If the code is heavy, then it takes a long time to process Javascript before rendering the content. It's impacting user experience. 2) script content talks to DOM elements on the page. Hence, before executing script, we need those DOMs exist on the page.
    * Exceptions, for example, 3rd party code requires to be at the top in head section.

Topic - separation of concern
1. we shouldnt write all the JS code in a single html file but separate them.
    * the method is to create "index.js", and write the relavent js code there
    * update the `<script>` tag with `<script src='index.js'>`. src provides the reference of js code attached to the script tag.
    * we can run `node index.js` to validate our code.

The rest of the topics from the Youtube video can be found in /js-basic/index.js

# Javascript OOP
[Video](https://www.youtube.com/watch?v=PFmuCDHHpwk)

Topic - difference between procedural and object-oriented programming
1. Procedural programming - it's function based and a program connects different functions together
2. Object-oriented programming - combining related functions and variables together into a unit, and called the unit an Object. 
    * functions called method
    * variables called property
    * for example, a "car" object, consists of properties like "make", "model", "colour", and methods like "start()", "stop()" and "move()"
    * a real-life example in browser is localStorage, which saves data in the browser.

Topic - key concepts of JS OOP
1. encapsulation - combine related methods and properties together under one unit / object
2. abstraction - some benefits of OOP
    * when using object which encapsulates properties and methods, it provides a simpler interface than procedural programming
    * it reduces the impact of change. As long as the input and output are the same, we don't care how internal methods / properties are changed. 
3. inheritance - inherit properties and methods when creating a new class from an existing class
    * it reduces redundancy
    * for example, `TextBox`, `Select` and `CheckBox` are all HTML elements. And they all have properties like "hidden" and "innerHTML", and methods like "click()" and "focus()". Hence, we don't need to write each class but write "HTMLElement" class, and those inherit from it.
4. Polymorphism (many forms) - when rendering `TextBox`, `Select` and `CheckBox`, methods underneath will be different, however, via the same `render()` method.

Rest of the content can be found at /javascript/js-02-oop/.. folder

# Javascript ES6
[Video](https://www.youtube.com/watch?v=NCwa_xi0Uuc&list=PLif4iXLY4SOxbZS26ruK6s6N7ffYPEGF2&index=13)
content are saved under ./javascript/js-03-es6/..

# React Basic
[Video](https://www.youtube.com/watch?v=Ke90Tje7VS0&t=990s)

