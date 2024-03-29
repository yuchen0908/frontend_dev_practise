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
[Video](https://www.youtube.com/watch?v=Ke90Tje7VS0&list=PLif4iXLY4SOxbZS26ruK6s6N7ffYPEGF2&index=20&t=848s)

Some preparations before kicking off
1. enable node and install `npm i -g create-react-app`, it is to install create-react-app package. 
2. install VSC extension `Simple React Snippets`, the extension has many shortcuts / functions to quickly write import statements.
3. install VSC extension `prettier`, which enables automatic code formatting. [link](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Once those things are done, we're ready to create the first React Application. We type `create-react-app react-app` in the directory where we want to save the app. Through the process, create-react-app essentially makes a development server, add the web packages as well as Babel. <br>

Once it's all done, we can run `npm start` to run the development mode, and `Ctrl + C` to quit. 

Topic - Understand React Folder Structure<br>
Under /react-app/.. we have the following folders:
1. /node_modules/.., all the dependencies / packages are installed here. I have gitigore the folder given the size of the folder. 
2. /public/.., like asset folder in traditional developement. It has:
    * index.html, which is the homepage html file. the `div` tag under body is a container where our react app actualy sits. 
    * manifest.json, which links to index.html. It has all relevant meta data. 
3. /src/.., this is the javascript folder where we make the app. Essentially, we build a JS app that manipulates DOM elements as well as provides UI funcitonality. 
    * App.js, contains what we by default shows the interface when running `npm start`. What returns is called JSX, which we can run in [Babel site](https://babeljs.io/repl). JSX is code that can be translated to pure React JS.
    * App.css, the css stylesheet that App.js is going to load;
    * index.js, the entry point for our application
    * etc .. 

Topic - Overview
1. 