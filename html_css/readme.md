# Basic HTML Tutorial
[Video](https://www.youtube.com/watch?v=N8YMl4Ezp4g&list=PLif4iXLY4SOxbZS26ruK6s6N7ffYPEGF2&index=1&t=1541s)

Topic Semantic HTML
1. When grouping elements or conent in a webpage, it's possible to use just `div` and `span` tags together. However, those tags don't tell anything about content. 
2. Semantic HTML element clearly describe their meaning in a better way - `HTML5` They include:
    * `header` tag represents a container for introductory content or a set of navigational links
    * `nav` tag is the navigation tag
    * `section` tag, defines a section of the page such as intro
    * `article` tag, used for blog post, newpaper articles etc..
    * `aside` tag , content aside from the main content. 
    * `footer` tag includes things like privacy policy, terms and conditions.
3. reference of semantic HTML can be found [here](https://www.w3schools.com/html/html5_semantic_elements.asp)
4. the rest of the content can be found under ./html-01-basic

# Semantic HTML Tags
[HTML5 semantic elements tutorial](https://www.youtube.com/watch?v=kX3TfdUqpuU)

There're some key points we can take away from this tutorial:
1. using semantic HTMLs when building web pages. This is because it's easy to understand the meaning of each part.
2. how to create anchors at the navigation bar, and link those anchors to each article/section of the page. Read Line 26 and 41 together. 
3. the major skeleton of a body is `header`, `main` and `footer`. 
    * Within `header`, we can create `nav`
    * within `main`, we may have a multiple `article`s or `section`s.
    * `footer` will be used to contain stuff like copyright, privacy policy, terms-and-conditions etc..
4. html validator: it is used to validate the syntax [here](https://validator.w3.org/). There is also a CSS validator we can use.
5. the rest of the items can be found under ./html-02-semantic

# Basic CSS Tutorial
[Video](https://www.youtube.com/watch?v=Icf5D3fEKbM&list=PLif4iXLY4SOxbZS26ruK6s6N7ffYPEGF2&index=4)

Topic - Intro<br>
CSS (Cascading Style Sheets) is the language used to style HTML document. A metaphor is 
* HTML is the house strucutre, which builds the skeleton of the house.
* CSS is the renovation of the house, which provides colours and likes
* JS is the functionality of the house, like electricity and utilities. 

CSS control the layout of the webpage, the spacing between elements and what colour the text should be in, etc.. Two key quesitons we need to be able to answer:
* How do i select an HTML element from CSS?
* How do I style the selected elements?

Topic - How to add CSS?<br>
There're three ways to add CSS
1. inline styles - adding the CSS style to a single HTML element.
    * The code is written within the tag, for example `<p style='color:orange'>`. 
    * The syntax is to start with "style" as the keyword, and put key-value pair as the value. For example the colour pair by assigning "Orange" as the value. 
    * Cons: 1) it's difficult to maintain. 2) it's hard to read because we mix HTML and CSS. 
    * Usecases: it is not a good practise; however, sometimes, for example in HTML email, we may use this method.
2. internal stylesheet - adding CSS style at the `head` section within `<style></style>` tag.
    * The method decouples HTML and styling.
    * CSS Rule Syntax: selector + style declaration. For example, we want to style h1 tag. Then we will write `h1 {color: orange;}`. We can add more for h1, as long as we keep writing key-value pairs with ";".
    * Cons: 1) if we have a lot of CSS Stylings then we will create a long HTML file. It's not easy to manage. 2) also if we have mulitple webpages and they require the same styling. we will have to create css for each page. It's not easy to manage as well. 
3. external stylesheet - maintain CSS stylesheet as an external .css file, and link back to html file via `link` tag.

Topic - CSS Rule Syntax
1. type selector
    * scope: it only selects the tags under the same name
    * syntax: `tag name {key:value;}`
2. universal selector
    * scope: it selects all the HTML elements across the page.
    * syntax: `* {key:value;}`
3. class selector - one of the most frequently used selector
    * scope: it selects elements that share the same class name.
    * syntax: `.className {key:value;}`
4. id selector
    * scope: it selects elements that share the same id name.
    * syntax: `#id {key:value;}`

Topic - basic CSS options:
1. colour properties
    * hex method, `#000000` (black) and `#FFFFFF` (white), always have 6 digits.
    * rgba method, `rgba(0,0,0, 0.5)`, means rgb, plus opacity (from 0 to 1)
    * we can define a class as "colour" and update css style with a background colour.
2. text properties
    * `font-family`, to change the font
    * we can define a class called "font-styles", and use the font via the class. With this methods, we can add other font-related styles in such as `font-size`, `font-weight`, `font-size`, `text-decorate`;
3. text layout properties
    * we add those attributes under the `.grey` class in styles.css file.
    * `text-align`, to specify whether the text should be left-aligned, position in the center or right-aligned.
    * `line-height`, to specify the vertical (up and down) space of text. we can change the value to see the difference.
    *  `word-spacing`, to specify the space between two words. 
    * `letter-spacing`, to specify the space between each character within a word.

Topic - CSS Box Model<br>
In web design, every HTML element is considered a rectangular box. It is a kind-of standard by which browsers render HTML elements. It consists of 4 parts:
* margin, margin is the outer layer. It's quite useful to create space between different HTML elements esp block type of HTML elements. 
* border, border sits around the padidng and actual content. Border can be understood as the boundary, and we can solidify it by filling the colour.
* padding, padding sits around the content. IT's the space between content and border.
* the actual content, can be sized by `width` and `height`

Topic - cascading
When two rules apply that have equal specificity, the one that comes last in the CSS is the one that will be used.
* specificity, is how the browser decides which rule applies if multiple rules have different selectors but apply to the same element. Specificity is calculated and compared based on weights from left to right position across three key elements: ID > Class > Type. However, inline style has the highest ranking power. 
    1. taking h4 specificity tag as an example -> refer to Topic 9 in css stylesheet.
    2. [more details](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

Topic - inheritance<br>
Some CSS property values set on parent elements are inheried by their child elements, and some are not.
* inheritance controls what happens when no value is specified for a property on an element (which by default set to the computed value of the parent element).
* CSS properties can be categorised in two types: inheried properties and non-inherited properties (which by default are set to initial values).  
* inheritance is less superior than specificity.

Topic - CSS Units<br>

absolute units - good for printing
|Unit|Name       |Equivalent to            |
|----|-----------|-------------------------|
|cm  |centimeters|1cm = 37.8px = 25.2/64 in|
|mm  |millimeters|1mm = 1/10 cm            |
|Q   |quarter-mm |1Q = 1/4 mm              |
|in  |inches     |1in = 2.54cm = 96px      |
|pc  |picas      |1pc = 1/6 in = 16px      |
|pt  |points     |1pt = 1/72 in = 1.3px    |
|px  |pixel      |1px = 1/96 in            |

relative units - are relative to something else, perphas the size of the parent element fonts, or the size of the viewport.
|Unit |Relative to                                           |
|-----|------------------------------------------------------|
|em   |font size of the parent                               |
|ex   |x-height of the element font                          |
|ch   |the advance measure of the glyph 0 of the element font|
|rem  |font size of the root element typically the body elem |
|lh   |line height of the element                            |
|vw   |1% of the viewport width                              |
|vh   |1% of the viewport height                             |
|vmin |1% of the viewport's smaller dimension                |
|vmax |1% of the viewport's larger dimension                 |

we can also use max() and min() to calculate values.

# CSS Flexbox Crash Course
[Video](https://www.youtube.com/watch?v=z62f2k38s64&list=PLif4iXLY4SOxbZS26ruK6s6N7ffYPEGF2&index=5&t=416s)

Topic - what is Flexbox
1. CSS Flexbox module is a <em>one-dimensional</em> layout model. It allows to densign flexible and efficient layouts, align and distribute space among items in a container.
2. what layout modes availabe before Flexbox:
    * block such as `div` and `section` in webpage
    * inline, for text
    * table, for 2D table data
    * positioned, for explicit poisiton of an element. ref to css stylesheet in css-01-basic.
    The problem with those layouts is not flexible enough to arrange items across the document.
3. why Flexbox?
    * it's flexible enough to arrange items. 
    * provides functionality to spacing, alignment and order of items.
4. some terminologies:
    * container and flex items. It's as the literal meaning that imagine a box with items within.
        * a parent container: a flex container. There're a few properties associated with flex container.
            * `display`, mandatory to work with box.
            * `flex-direction`, it defines how flex items place in the container (whether it's vertical or horizontal)
            * `flex-wrap`, it controls wraping items in the container.
            * `flex-flow`, it's a shorthand / combo of `flex-direction` and `flex-wrap`.
            * `column-gap`, to set the gap between columns
            * `row-gap`, to set the gap between rows
            * `gap`, it's a shorthand / combo of `column-gap` and `row-gap`.
            * `justify-content`, define the alignment of content along the main axis
            * `align-items`, defines the default behavior for how flex items are laid out along the <b>cross axis</b> on the current line
            * `align-content`,  aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how `justify-content` aligns individual items within the main-axis
        
        * immediate children: flex items
            * `order`, the order property controls the order in which they appear in the flex container;
            * `flex-grow`,  defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up;
            * `flex-shrink`, the opposite of flex-grow, which will shrink the flex item.
            * `flex-basis`, defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword.
            * `flex`, a shorthand of combo, sequence as below `flex-grow`, `flex-shrink` and `flex-basis`. by default, the value combo is `flex: 0 1 auto`
            * `algin-self`, allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
        * [visual ref](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
        
    * flex axes, which consist of the main axis and cross axis.
        * by default, main axis is horizontal direction, and grows from left to right; the cross axis is perpendicular to main axis and grows from top to bottom.
        * the start of the main axis is called main start, and the end of the main axis is called main end. The length between main start and main end is called main size.
        * similarly, we have cross start, cross end and cross size. 

# CSS to create a navbar
[Video](https://www.youtube.com/watch?v=PwWHL3RyQgk&list=PLif4iXLY4SOxbZS26ruK6s6N7ffYPEGF2&index=14&t=256s)
It's an application of our CSS Flex tutorial.

# CSS Grid Crash Course


# Resources:
1. a library / service that provides legally-protected images [here](https://unsplash.com/)
2. a library / service that provides legally-proctected icons [here](https://www.flaticon.com/)
3. Google fonts that provides support / library of fonts [here](https://fonts.google.com/)