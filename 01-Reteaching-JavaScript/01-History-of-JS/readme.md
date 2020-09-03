#  JavaScript History

Before "JavaScript Existed", The creators behind the Mosaic browser created a language called "LiveScript" and shipped it in 1995. Within 3 months, it was renamed to "JavaScript" to build on the hype train programmers were on with Java, a completely separate and unrelated language.

Eventually, Microsoft did what they always do, which is steal source code from someone else's product and release their own version of it, Internet Explorer that used "JScript". The browsers wars started and long story, short, Mosaic, and other browsers died off due to Internet Explorer. Yet multiple forks of JS remained as well as other scripting languages. All of which were made to address the same issues of providing the browser interactive behavior beyond hyperlinks and the page reloading.

## Behind the Language & Engine that powers it


## Standardization of Browser Behavior via Scripting
The first attempt at standardizing scripting languages was in 1997 with ECMAScript. (ES-1) as part of European Computer Manufacturers Association (ECMA). However, different implementations, competing languages, and egos prevented any real standardization from occurring until 2009. In between that time, the (failed) proposal for ES-4 (led by Mozilla and others) attempted to call for more traditional programming concepts like classes, modules, etc.

The standard was abandoned largely due to the concern of "breaking the web" and the introduction of AJAX ( Asynchronous JavaScript And XML") which allowed for client-side dynamic content. As a result of multiple factors, jQuery was created in 2006, largely to provide cross-browser support for different implementations of JavaScript and AJAX. By 2009 ES-5 was released and essentially became what the De facto Standard of JavaScript that most still refer to.

It is important to note, that virtually every proposed feature in ES-4 would later be implemented in ES-6 such as classes, generators and iterators, destructuring assignment, and most importantly a module system. The only feature truly noticeably absent are the various reimplementations of types. To read more about the [The Real Story Behind ECMAScript 4](https://auth0.com/blog/the-real-story-behind-es4/).



## The Birth of Node.js & JavaScript Module Systems
Beginning in 2009, serverJS was created to give JavaScript a module system and later was renamed commonJS . The goal was "to establish conventions on module ecosystem for JavaScript outside of the web browser" and was likely related to some of the failed ES4 proposals.


Later the same year, Ryan Dahl would build on top of this to create the Node.js is a runtime environment for JavaScript, which used the Chrome V8 engine among others such as libuv and released in May, 2009.

This runtime environment, is what allowed JavaScript to run virtually anywhere the environment is installed.

After Node.js was released, it changed the JS language forever and helped slowly turn it into more of a programming language and less of scripting language. This was made possible by two things, callbacks for asynchronous code (which already existed in the language) and modules system (a rejected ES4 proposal) which allowed multiple files to be imported and exported via require() and export and eventually a package manager, NPM which would later become one of the largest sources of open-source software. 

The Node.js API also came baked with some basic methods that allowed for reading/writing files (such as FS) and a basic HTTP method, both of which are essential for creating a simple server.
After Node.js was released, this runtime environment and its primary package manager, npm, allowed the ecosystem to grow more and more. Libraries on both browser-side and node-side became easier to publish, distribute, and concatenate together with tools such a grunt, gulp, webpack, etc.

This made it easier for developers to rapidly prototype websites on both the front-end and back. Consequently, the transition into becoming a full-stack developer suddenly flung the door wide open to just about anyone as it didn't require switching to other languages such as PHP, python, pearl, etc.

## The Startup Scene
Over time, Node.js grew and exploded in popularity for a variety of reasons.

Namely, the environment made things easy to learn, because you didn't have to learn how to configure a local apache server, xampp, configure your vhost file, like you did with php & LAMP, etc. Virtually everything you could think of needing, there was a library for that on the front-end or back-end was a single npm install command away.

Oh yeah, and the servers are FAST and handle high amounts of concurrent traffic with minimial memory in many cases when implemented properly (async coding pattern) and for the right use cases. Oh and they are insanely quick to code.

This was an absolute dream for developers, new or experienced, and especially startups which almost always drive programming hype and trends. Once it reached maturity, People saw the advantages in terms of speed, server costs, learning costs, less potential training & recruiting costs, speed of rapid prototypes, communication between front-end and back-end teams, and most of all overall payroll costs could potentially go down as one good full-stack engineer could do both front-end and backend. The latter is especially important for startups because it means less equity and less overhead.


## Responsive Design & Mobile App Development
Between the time Node.js was first created in 2009 and skyrocketing in 2013, mobile phones became smartphones, and apps became a make or break scenario for startups. It was a way to put your software in some's hands 24/7 and get an edge on your competitor or otherwise disrupt the other titans in the industry and establish an empire.

Media Queries were introduced between 2008–9 and Responsive Design was coined as a term in 2010, to explain the demand created by this fundamental shift in technology and our society more generally. Where responsive design handled the needs of the web design, new technology was about to emerge to disrupt mobile application development.

By 2011, another technology started to pop up, largely influenced by responsive design philosophy. Apache Cordova, which allowed web developers to use HTML, CSS, and JS to build mobile apps. Prior to this, you'd have to specialize in languages like Java for android, or objective C for iOS apps. These languages aren't just significantly harder to learn but the development environment was (and still is) harder to debug and slower dev time because you have to wait for your code to recompile. Cordova offered a solution, one programming language (JS), html (markup), and CSS (styling) and it was way easier to learn.
Of course, this did have huge drawbacks, namely, apps run slower than their native counterparts and consequently still haven't explored in the same way Node.js did. Ionic built on top of this in 2013 and has since taken it much further and has since largely replaced Cordova. But it also wasn't enough to save Microsoft windows phones as no one developed apps for their marketplace…
Personal note, my uncle worked for Microsoft (MS)for 20+ years & largely with their phones. So that's why I attempt to make humous jab MS throughout this article. He's like my second dad and I was always amazed and inspired by seeing the latest smartphone MS made in 2000–2008 that had the full internet too (windows mobile). A full decade before responsive design was coined.



On the hardware side of things, Johnny-Five.io first came on the scene in 2012 and with it, you could use the simplicity of JS and the power behind Node.js and NPM to rapid prototype hardware for the first time.

All the areas where you used to need a statically typed, OOP language to the developer had been encroached upon.

This allows us as developers to use build Arduino,Tessel 2, Raspberry Pi, and basically anything that you can get Node.js and johnny-five installed on. It's not just robots either, many IOT devices today are built on this today and it's had a profound impact in the ways most, even in the JavaScript scene may not be fully aware of or appreciate.

As a result, JavaScript as a language became arguably the most versatile and accessible programming language which can now be used on the client (browser), the server, phones/tablets apps, and even to an extent, on microcontrollers via Johnny-Five.
Oh and there are even a few libraries to build VR and even Games…
Node Forks & The ES6 problem

By 2014, Node.js started getting a few different forks for various reasons. The most notable was io.js which eventually merged back with node.js. But there were several other forks, I won't mention and the reason behind them varied from technical reasons (like promises), lack of contributors, and even petty and frankly, immature ego related personal differences (but I'm not linking to that can of worms, keep me far away from me, thank you…).

By 2015 the latest JavaScript standard, ECMAScript 6 was released and with it became almost everything originally drafted in ES4, minus the breaking changes and notably the introduction of let, const and symbol as opposed to more traditional local/global variables and static, strongly typed declarations. Again, unlike the original ES4 draft that would have broken the web, this approach had the power of Babel and allows us to use future features, today by compiling from ES6+ to ES5 (the standard at the time).

All this was made possible by Node.js.
These new JavaScript features included ESM or ECMAScript Modules (imports/export as opposed to require() via commonJS), async/await, the fetch browser API, and many others not in the original ES4 draft. Some of these features also introduced compatibility problems with the core architectures of Node.js to various extents. Most notably, over the last 5 years, the ESM standard has continued to be a very real and persistent issue that requires either using a 3rd party package, an experimental flag or using .mjs files depending on various considerations.

## Birth & Rise of TypeScript: a response to ES4 & ES6?
Quietly lurking in the background, however, TypeScript was first made in 2012 but didn't have its 1.0 release until 2014 near the same time as ES6 was coming to the new standard.
Now, from here on out. I'm going to begin to interject small parts of my personal opinions based on my understanding of the history, the current landscape today in 2020 and I'll try and make a few projections about the future as both a sociologist and as a JavaScript developer with almost half a decade of experience, now.

I believe JavaScript is largely a broken language that should have been fixed before large parts of our entire global economy and technology that running off it intertwined with our social reality. In other words, they were probably right with ES4 proposals… But it's too late for that now.

Finally, I think TypeScript is really amazing for debugging the inherit bugs of the language itself and a good balance between rapid prototyping and quality code and I can't wait to see what Deno has in store for the language.

## Birth of Baby Deno

Deno was first announced back in 2018, where Ryan Dahl the original creator of Node.js took the JavaScript world by storm by introducing a complete rewrite, entirely from scratch based on modern JS standards such as promises & async/await, ESM, typed arrays and TypeScript.

As a result of all this history and other factors, Ryan Dahl, the original creator started working on something new. In the talk, he talks about Deno as mostly a "thought experiment" and expresses his biggest regrets in building nodeJS, love for TypeScript, and hate for dart.

## Versions 1 of Deno
Today, demo is ready and stable for you to try out and is at version 1. Truthfully, it's been stable enough since January when they have the installs compiled as executables. Anyhow, here is a more recent video from its creators. I'll let him do the talking.
I could go and write my own Deno Tutorial and compare it to the node example above (and I did…). But, I deleted it once these videos came out because and reused other parts for the history sections above.

Anyway, Brad Traversy is doing an amazing job, as always. The first video is a bit too long in my personal opinion.
However, the second video is great because it goes over denon which is like a weird mixture of nodemon, npm scripts & package.json. It's really cool sweet.

## Possible Futures?

I want to start off with the same predictions I talked about when I taught high school students last year and told them to pay attention to 3 things that will change the development landscape:
1. TypeScript & Deno
-- For learning Backend & code quality required in Industry jobs (FANG).
2. CSS Houdini
-- For browser optimizations, custom layouts and so much more.
3. Web Assembly & AssemblyScript 
-- For native-like optimizations to servers, Mobile Apps & VR.

In other words, it's like we're back in 2009 only now it's TypeScript's turn to disrupt the landscape with it's own runtime environment.

Instead of JavaScript and Node.js, it's TypeScript and Deno.
Instead of Mobile Apps and Responsive Design, it could be VR/AR Design Interfaces, as we learn to adjust the reality of this global pandemic in a world of 5G & cloud gaming…

Instead of Cordova, Ionic or NativeScript, compiling to run natively with a wrapper, it'll be something that you write & debug in TypeScript and compiles down to Web Assembly and performance wont be near as much of an issue.

## Thoughts or Comments?

I hope you enjoyed reading this and don't take any of my criticisms personally (unless you are my uncle, in which case it's just fun banter). I really want to hear your thought! Especially if you were part of JavaScript / ECMAScript's history as I didn't start using it until 2013 and wasn't really full-stack until 2015–2016. I tried to do the best research I could.
