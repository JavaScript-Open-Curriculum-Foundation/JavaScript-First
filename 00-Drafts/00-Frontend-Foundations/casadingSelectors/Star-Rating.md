Read the [Full Article on Medium](https://medium.com/javascript-in-plain-english/how-to-create-an-animated-star-rating-with-just-css-4df50286ea4b?source=friends_link&sk=5184575c98b541f0bd1b920d607b2416)

## Educational Objectives:
1. Explain the difference between a CSS Selector and a CSS combinator
2. Compare & Contrast the "Adjacent sibling combinator" and the "General sibling combinator"
3. Demonstrate how to use flex-direction and hover to imitate a previous sibling combinator 
4. Demonstrate how to use clip-path to create a star

Today I will go over a simple but surprisingly powerful way to use previous child selector CSS “Hack” to build a Star Rating Component.

## So how do we build a Star Rating Component with only CSS?
Keep scrolling down to find out, in the mean time, I wanted to provide a little background on the context of this article…
Beware. 

```
There will be “humor”. It may or may not be taken out later...

This article is part of an ongoing educational series that will be turned into an Open Source Book and therefore is considered a "living article" subject to change. If you have question, want to contribute or just wanna chat about the content, leave a comment!

If you have a find a bug, typo, DM me on twitter @HansOnConsult or contribute directly to this book by submitting an issue: 
https://github.com/HansUXdev/OSS-Books
```

## CSS Basics in a single GIF
I like my posts to be beginner friendly, without sacrificing advanced content. So here is a gif by Umar Hansa that goes over some of the most basic rule around css. Try out the [full link here](http://apps.workflower.fi/vocabs/css/en).
![css anatomy](http://g.recordit.co/xioIEE6rRb.gif)


## What we'll be building today
![CSS Only Star Rating](https://miro.medium.com/max/700/1*-go9uJzTY_Zv0Sfx13g9QA.gif)
 
## I wrote some code, a description in code comments and made a gif... So I guess, that’s all folks.

**I’m just joking**, what am I the JavaScript Teacher? We can do a better job than that… So let’s dive in:

## How is this a CSS “Hack”?
No it’s not a “hack” as in, a violation of the computer fraud act, type of hack. That’s **illegal** and we are law abiding citizens here.

It’s a just a creative way to problem solve by flipping the problem entirely upside down, doing the exact opposite of requirements and then presenting our lie to the user flawlessly because it doesn’t matter to them how you did it.

```
If that’s not a CSS “hack”, it’s certainly a magic star...
```

## Star Rating With CSS Only:
Let’s break this down in terms of the project requirements and CSS selectors & combinators available to see if this is even possible.

```
Spoiler, we cheat… and that’s why its a “hack”.
```

**So what exactly are the requirements of a star rating?**

Generally when you see this coding challenge it goes something like this:

The Rating component consists of 5 stars, with each star represented by an element and held in a parent container.

1. When the star element is clicked or in this case hovered on, the star, should be change to an “active” color and all starts before it should be updated to do the same.
2. Also, the stars after the desired rating should not have an active color.

**Problem Solving with CSS Selectors, Display types & Combinators**

The CSS isn’t a programming language, it’s a “style sheet language used for describing the presentation of a document written in a markup language like HTML”.

```
In other words, we cant tell the browser what to do.
Instead, we can only tell the browser how to present the markup.
```

Using pseudo selectors like :hover, :focus, :focus-within, and :checked we can mimic the behavior of clicking and touching an element in the document object model (DOM) or more simply, the rendered HTML.


Ok great, that we can accomplish the requirement #2 easy enough. But what about requirement #1.
Well… this is why we have to “cheat” because there is no way to really target a **previous sibling**, we can only ever target the parent container, the child and their relatives in a cascading manner.

```
That’s why it’s called CASCADING Style Sheets, not ascending style sheet.
```

That also means we can’t technically accomplish either one of these, but we can do the exact opposite of both and present it, as if we were, in fact accomplishing them… So yeah, it’s definitely cheating and it’s going to be fun and hopefully make you appreciate CSS more.

## Rewriting the requirements to the rules of CSS
1. When the star element is hovered on, the star, should be change to an “active” color and all starts after it should be updated to do the same.
2. Also, the stars before the desired rating cannot be styled, so we throw a childish fit and flip the damn thing up side down and reverse the order.
3. Lie to the user (and reader) and say it’s a Previous-Child Selector.

Since we can, “describe the presentation of a document”,
that includes how we present the order of the elements.
There several ways we can do this but I’m only going to cover two of them and the second is an anti-pattern and you should avoid using it. It’s only used to manually, demonstrate another way of describing what is happening.

### Option 1: Display Flex & flex-direction

Because I want to show it as a row, we’ll apply flex-direction: row-reverse; to the class of .star-rating to reverse the order of every child element.
The DOM doesn’t change. We just change how we present it.
So enough our document, or HTML is written as the following:
```html
<div class="star-rating">
  <div class="star star-1"></div>
  <div class="star star-2"></div>
  <div class="star star-3"></div>
  <div class="star star-4"></div>
  <div class="star star-5"></div>
</div>
```
The CSS applied in the .star-rating class, will reverse the order of every div.

Then we’ll change the color of the star.
To do this I’m going to use :hover to change the color on the selected star and we’ll use the CSS General sibling combinator ~ instead of the Adjacent sibling combinator, +. If we used the adjacent combinator, we’d have to write:

```scss
.star-rating .star:hover,      // the selected star
.star-rating .star:hover+.star, // the sibling after it
.star-rating .star:hover+.star+.star, // and so on
.star-rating .star:hover+.star+.star+.star, // and so on
.star-rating .star:hover+.star+.star+.star+.star, // and so on
.star-rating .star:hover+.star+.star+.star+star+.star // and so on..
{
  background-color: red;
}
```

That’s to much typing, I have a plate & 8 screws in my hand so it hurt to type.
Plus it’s just bad CSS, so instead, we’ll simply write the following:
```css
.star-rating .star:hover,
.star-rating .star:hover ~ .star{
  background-color: red;
}
```
That’s much easier.
But it’s important to remember that we are not really styling the previous siblings, we’re styling the siblings after the star we select and just reversing how it is presented to the user.

That’s what makes this a CSS HACK
### Option 2: Using SCSS, grid, grid-area and grid-template 

Since we’re already cheating, YOLO, let’s use SCSS which compiles down to CSS. Please don’t use code like this in production. It’s just another way of describing how to present the stars in reverse order in a more semantic way.
Because I’m lazy I’ll use SCSS to provide some actually programmatic feature to generate my end user CSS.
```scss
// DO USE THIS IN CSS, it wont work because it's SCSS.
@for $i from 1 through 5 {
    .star-#{$i} {
      grid-area: star-#{$i} ;
    }
}
This complies down to the following CSS:
.star-1 {grid-area: star-1;}
.star-2 {grid-area: star-2;}
.star-3 {grid-area: star-3;}
.star-4 {grid-area: star-4;}
.star-5 {grid-area: star-5;}
```

That we have 5 useless classes that describe the area of each star, we’ll manually rearrange them using grid-template
```scss
.star-rating-grid {
  display: grid;
  /* This is what flex-direction: row-reverse is doing */
  grid-template: 
  'star-5 ... star-4  ... star-3  ... star-2  ... star-1';
}
```
Cheating with CSS is fun, doing it properly with react on the other hand is also fun & more practical.

### Advanced Use Cases: SCSS Mixin
If you are a bit new to CSS than I’d recommend skipping this part until you pick up SCSS. For those more daring, curious or experienced…

I mad a fun little mix in for you all to use. You can also remove the :hover part for what ever you want.
```scss
@mixin previousSibling($parent, $child, $sibling) {
  #{$parent} {
    display: flex;
    flex-direction: row-reverse;
    #{$child}:hover ~ #{$sibling }{
      @content;
    }
  }
}
@include previousSibling(".star-rating", ".star", "*") {
  // Do something
  background-color: red;
}
```

### Educations Resources:
Methods for Star Ratings: https://css-tricks.com/five-methods-for-five-star-ratings/
Is there a Previous Sibling Combinator?
Flex Direction:
Adjacent sibling combinator
General sibling **combinator**