# Should you use Node.js or Express in 2020?

Introduction to Node

If you are new to JavaScript or the Node.js ecosystem, I wrote an article about it which you can see below.

Terminal Basics and Installing NVM & Node.Js

Learn how to Code in 2020 

Additionally, I went ahead and published some of slides to help break down some of the basics and also to help keep the length of this article nice an short, but still in-depth for you. Hope it helps.


Introduction to Node.js By Hans McMurdyFor a slightly more in-depth, but still brief example, I've included two simple examples of a basic Node.js for different reasons. The first illustrates the simplest way possible to build a website on Node.js with 100% javascript and zero HTML or CSS files. No react, No ExpressJS, just Today's JavaScript.

If you don't know JavaScript or are still new, please note that this uses ES6 features that were not available when Node.JS launched with the ES5 standard but still could have been done, with significantly more ugly code (template strings, eliminated the royal pain of escaping normal strings for HTML & CSS 😅).

Remember how I mentioned Node.js was built on callback functions? If this were a class, this would be the part where I try and check for understanding and have you identify the parts of the code that uses callback and ES6 features. That way I know if you read the damn assigned readings 😅. So if your new, try and test your own understanding.

Now, on to explain what is going on here. Simply put, we are importing or "requiring" the built-in http method I mentioned way back. Then we are using it to create a basic server and using a callback function to set the server's response to the browser's request. The server is running on port 8080.

When you, the users are viewing this article, the browser (client) is making the request to the server. The server then sends a (200 HTTP) response as HTML, displaying the page with its content.

In medium's case, it's this article, in my code below it's just a blank white page that reads "Hello World". Feel free to follow my tutorial above, and come back here and try it out.

Photo by Hans McMurdy - Simple vanilla JavaScript Server

The second example is even less complicated but illustrates a few important distinctions between Node.js and Deno. Here we there is no server, just JavaScript, if you comment out the require statement, it'll run in the browser and Deno but not in Node.js. The reason is, the fetch API method did not exist in the language when Node.js was created and still isn't part of the core library despite all the additions of ES6+ (yes, I'm politely shaming the maintainers).

Photo by Hans McMurdy - Node-Fetch Example vanilla JavaScript Server

By default, this won't run in node because fetch is undefined without installing node-fetch via npm i node-fetch and then requiring it.

Finally, we wrap everything inside an async function called getData() in order for us to use async/await features.
What does this code do?

Well, remember how we briefly mentioned AJAX and the browser wars? Well long story short, this allows the server (in this case) to request data from another server without the user's knowledge. It's really useful when you want to hide those API keys you are paying to use. You can also use it on the client-side to can some data from a server and it's much cleaner than the original XHR methods that jQuery was largely created to help simplify.

# Why you should sign up as a medium member?
First and foremost it encourages technical writers like myself to write more content. Second, I use the passive income from writing to put into my newborn's college fund. So every read and every penny goes to his future. That being said, if you can afford Netflix, you can probably afford a $5 medium account so please consider signing up for a paid account.

A note from In Plain English
Did you know that we have launched a YouTube channel? Every video we make will aim to teach you something new. Check us out by clicking here, and be sure to subscribe to the channel 😎