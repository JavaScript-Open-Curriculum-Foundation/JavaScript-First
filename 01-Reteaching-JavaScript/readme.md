---
theme : "night"
transition: "slide"
highlightTheme: "monokai"
logoImg: "logo.png"
slideNumber: false
title: "JavaScript-Reintroduction"
---



::: block
Introduction to JavaScript with Node.js
{style=font-size:3em;text-align:center;}
::: 

---

# About
This chapter will teach strong JavaScript fundementals using the node.js runtime environment. 

It starts with a brief history of the language from origin to present.  {.fragment .current-only  }

Then it will teach fundemental on identifying syntax for variables and functions and the scope of them. {.fragment .current-only  }

Next, students will learn about immutability and scope by distuishing primitive types and non-primitive types, using operators to evaluate Boolean expressions and type coercion. {.fragment .current-only  }

Finally it will wrap up with two projects, one on creating functions to better log datatypes and another to demonstrate how to use node's API and callbacks to create a command line game. {.fragment .current-only  }


---

### Learning Objectives (Remember & Understand)
1.  Define what **Node.js** is
2.  Identify **primitive types**  and **non-primitive types** in code examples
3.  Identify the correct syntax for different types functions. 


---

### Learning Objectives (Apply & Analyze)
1.  Compare and constrast **Primitive Types** with **Non-Primitive Types**.
2.  Compare and constrast the different types of function.
3.  Demonstrate how to use functions with return values. 
4.  Use operations on strings, including length, substring, and concatenation.

---

### Learning Objectives (Evaluate & Create)
1.  Create functions that log different datatypes in JavaScript 
2.  Develop a commandline application using node's API and using callbacks and other javascript fundementals. 


---

### [State Standards](https://cms.azed.gov/home/GetDocumentFile?id=5a6b7c473217e10b806ce060) Utilized

1.   4.0 UTILIZE PRIMITIVE DATA TYPES AND STRINGS IN WRITING PROGRAMS (4.1 - 4.4)
2.   6.0 UTILIZE CONDITIONAL STRUCTURES IN WRITING PROGRAMS
3.   12.10 Demonstrate the use of parameters to pass data into program module (function)
4.   12.11 Demonstrate the use of return values from modules
5.   STANDARD 14.0 UTILIZE AND CREATE COMMUNITY RESOURCES
     - 14.1 Use standard library functions
     - 14.2 Find and use third party libraries (e.g., web-based and package managers)
     - 14.3 Explain and interact with an Application Program Interface (API)

---

### Future Standards to be implemented in this chapter

:::block
* STANDARD 15.0 USE VERSION CONTROL SYSTEMS
  - 15.1 Identify the purpose of version control systems (Git)
  - 15.2 Create a new repository
  - 15.3 Add, push, and pull source code from repository
  - 15.4 Explain branching and its uses
  - 15.5 Restore previous versions of code from the repository
{.fragment .current-only  }
:::


:::block
* STANDARD 19.0 EMPLOY RUNTIME AND ERROR HANDLING TECHNIQUES
  - 19.1 Identify runtime errors
  - 19.2 Describe error handling strategies
  - 19.3 Handle unexpected return values
  - 19.4 Handle (catch) runtime errors and take appropriate action
  - 19.5 Throw standard exception classes
  - 19.6 Develop and throw custom exception classes
{.fragment .current-only  }
:::


---

---

### Overview

1. Why Learn JavaScript with Node.js
2. Why learn terminal, git, NVM and docker?
3. Package.json
4. npm install
5. npm audit fix
6. NVM

---

### Why Learn JavaScript with Node.js

This makes it an ideal language to learn before chosing to **specialize** in any area of **computer science** and develop standardized curriculum around. {.fragment }

---

### Why learn terminal, git, NVM and docker?

Learning terminal is essential to any modern developer for the following reasons:

1. often required for common tasks such as git (source control), ssh, etc. {.fragment }
2. Git helps us collaborate as developers and produce better code without zipping up our projects. {.fragment }
3. installing NVM and wrapping an application in docker is a perfect example for using the terminal commands that you should know. {.fragment }
4. Docker also provides an opportunity to fix the problem of "it works on my computer" by learning a light introduction to docker: {.fragment }
5. Learning basic terminal basics can help develpers create more secure applications by ensuring any used ports are secure. {.fragment }


---


### What is node.js


---

### NPM

::: block
Node Package Manager
{style=font-size:1em;text-align:center;}
::: 
Why we use it?
<ol>
  <li class="fragment">
   Allows users to install 3rd Party Software
  </li>
  <li class="fragment"> 
    Technically, seperate from node.js but bundled with it.
  </li>
  <li class="fragment"> 
    The company, NPM, now owned by Github.
  </li>
</ol>

---

### NVM

::: block
Node Version Manager
{style=font-size:1em;text-align:center;}
::: 
<ol>
  <li class="fragment">Allows use to install and use multiple different versions of node.</li>
  <li class="fragment"> Aids in maintaining legacy software.</li>
</ol>

---


