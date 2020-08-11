# Learn JavaScript First, with terminal, NVM & Node.js

In this article, you will learn the basics of terminal commands then we’ll go over installing git & NVM, and finally installing node and creating a test.js file.

This content is part of an ongoing educational series and based off content originally taught to high school coding students to teach them full stack JavaScript in a semester. It is now being turned into an [open source book](https://github.com/HansUXdev/OSS-Books) and therefore is considered a "living article" subject to change, new articles are published on github first, then on [medium.com](https://medium.com/@HansOnConsult).

If you have question, want to contribute or just wanna chat about the content, leave a comment!
If you have a find a bug, typo, DM me on twitter @HansOnConsult.

If you want to contribute to the book, see the GitHub page: https://github.com/HansUXdev/OSS-Books

## Pre-Assessments
Before you continue reading, consider taking the [pre-assessment](https://create.kahoot.it/share/command-line/69a5e0af-b335-405b-8dd9-fffee3191193) to test your knowledge of basic terminal commands. The knowledge assessments are intended to only take 60 seconds and are used to assess whether a reader has the required /preferred prior knowledge.

If you pass the assessment then feel free to skip the command line section and start installing NVM.


## Command Line Basics
Below is a list of just a few common commands you will need to use and understand to install some developer tools like nvm and others.

* [ls](https://linux.die.net/man/1/ls) / [dir](https://linux.die.net/man/1/dir) , [pwd](https://linux.die.net/man/1/pwd), and [cd](https://en.wikipedia.org/wiki/Cd_(command)) are all commands that are useful for navigating system files & folders (directories). `pwd` will print the working directory and show you the full path to the directory you are in. `dir` & `ls` list directory contents but dir is used on windows where as ls is used on linux / mac. `cd` will allow you to change the directory you are in. ls & cd are the two you will use the most, so learn them well.

* [mkdir](https://linux.die.net/man/1/mkdir) & [touch](https://linux.die.net/man/1/touch) are most often used for creating directories and files. `mkdir` is used for creating directories (folders). Whereas `touch` changes the file timestamps as well as creating files, etc. Read the documentation for each to see more.

* [rm](https://linux.die.net/man/1/rm) will remove files and directory. BE VERY CAUTIOUS with this and again read the documentation because if you don’t know how to use it proper you can serious mess up your computer, especially if you used it on directories like system32 on windows...

* [chmod](https://linux.die.net/man/1/chmod) and [chown](https://linux.die.net/man/1/chown) are about security-related commands for changing files and directories. `chmod` stands for change modification and will change as files read, write, execution permissions. chown, on the other hand, will change the owner. Although it's less common to use these it is important for installing software on shared hosting or non-administrator files because you won't have sudo (admin) permissions.

* [curl](https://linux.die.net/man/1/curl) is a tool used to transfer data from or to a server. We will use this to download a shell script in a minute.

* [nano](https://linux.die.net/man/1/nano) is a terminal-based text editor. You may have heard of vi and vim. Those are great too but a bit overkill for what we are doing and confusing to new developers. So we’ll use nano instead of vi or vim.

There are a lot of ways these commands can be used and many are beyond the scope of this article. Now go ahead and install vscode. We are going to use the built-in terminal so you can see the directory and files being created during the exercise. If you want extra credit, use only nano or vim. Then show me that you read this and as well as a basic http server example. Or if you aren’t a student in my class, ignore that last part entirely.

## Terminal Basics Exercise
I’ve included a gif of the exercise showing half of the commands above. It also has alt text of the commands I ran for screen readers. Then I have the instructional steps describing what I did and the commands I typed.

[![A gif typing mkdir test, cd test, touch test.js, pwd, cd ../, pwd, ls, rm test/, rm -rf test/](https://miro.medium.com/max/800/1*a0oGb11RDJDgaCvTcLy1jw.gif)](https://medium.com/swlh/terminal-basics-and-installing-nvm-node-js-631cf9476ac4)



## Instructional Steps:
1. Create a new directory called test with mkdir command.
2. Change the directory and Gg inside the test directory with the cd command.
3. Inside the test directory, create a file called test.js using the touch command.
4. Change the directory again and go back one directory by typing cd ../ check the current directory by typing pwd, check that the test directory you created exists by typing ls,
5. Finally, delete the /test directory using rm -rf /test note that the -rf flag is used to recursive delete the directory and all its contents.

If you were able to follow these steps then you should have all the basic knowledge of terminal commands to install node.js using Node Version Manager which is abbreviated as NVM. Here is a video version of the gif.

## Installing git
Before we install node or nvm we want to install git. Git allows developers to use version control on files which means we can see files changed, who changed them and what was added or deleted. We are not going to cover git or version control, at the moment because I want to focus on installing nvm and node. We’ll circle back to this later if there is enough interest in it. Also if there is downtime in-between the publishing of the article of this series, I recommend these awesome resources also gitkraken if you want a useful GUI to learn but I stress the importance of learning command line first.

## Installing Node Version Manager (NVM)
Instead of installing node via the download page, we are going to install it with NVM so that we can install different versions of node and switch between them as needed. We want to use NVM because as a developer you will need to maintain legacy code that may only run on older versions of node. NVM always us to switch between these different versions easily.

```
It’s very important to note that for windows users there is no official version of nvm. I’m considering writing a tutorial on the closest alternative below but I’m not sure if there is enough demand. So if I get enough comments, I’ll consider it. For now, unfortunately the link below is the best resource I have on the matter.
```

* [Installing NVM on Windows](https://github.com/coreybutler/nvm-windows)

## Installing NVM on Linux / Mac

First, we need to check if there is already a bash profile and create one if there isn’t. The bash profile ‘is a configuration file for configuring user environments” such as the path to programs such as NVM. If we don’t have this file or if it's not configured properly, nvm, git, node, etc won't run. This file will have a dot before the filename which makes it a system file and a hidden file. Let open up the terminal and run `nano .bash_profile`. and if it doesn’t exist let's go ahead and create one with t`ouch ~/.bash_profile`.

Now we use curl to download and run a shell script which will install nvm. You may also need to have git installed on your machine.

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```
This should have created a `.nvm/` directory. We can check this by running the `pwd ~/.nvm` which will show us if it's installed and where it is. Then we can check what’s in that folder with `ls ~/.nvm`.

Now run nvm in terminal. You should see the same thing as the image.

[![image showing nvm is installed](https://miro.medium.com/max/800/1*FLbgAM1NLGAVPale9-GwyQ.png)](https://medium.com/swlh/terminal-basics-and-installing-nvm-node-js-631cf9476ac4)

Now close your terminal completely, reopen it and check if nvm still shows you the same result.

If nvm isn’t showing after you closed and reopened terminal than something went wrong and you .bash_profile wasn’t updated.

## If NVM doesn’t automatically install…
If that didn’t work, we’ll need to figure out why it didn’t install properly.
Let's check our `.bash_profile` and `.bashrc` files. Check the .bashrc with `nano ~/.bashrc` and check the .bash_profile with `nano ~/.bash_profile`.

If it’s not in either one then we need to use nano to edit the file.

`nano ~/.bash_profile`

[![](https://miro.medium.com/max/800/1*h3gT75y5advVYsewVxcE7g.png)]()

Leave your terminal open and copy & paste the code below into the terminal.
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nv
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Then exit and follow the prompts to save the file.

## Using NVM to install node
Assuming that all went well, we can use run `nvm install —lts` to install the long-term supported version. At the time of writing this article that would be 12.14.1 however version 13 is out and available to install and run however, it's just not entirely stable.

### Using different versions of node
Now let’s say we have a command-line tool that uses an older version of node such as the foundation’s CLI. If we were to install it with `npm install —global foundation-cli` as the documentation says then try and use with the command foundation, we’d get an error.

[![](https://miro.medium.com/max/800/1*EyGWjE0I3Q9ZZ8sv-Plf0Q.png)]()

However if we install node version 8 by running nvm install 8 the switch versions using nvm use 8 and run foundation we can now use the cli tool to rapidly prototype front-end websites.

## Creating your first javascript file
Let’s go ahead and open up vs-code and install the code runner extension. We’ll be using this to run simple javascript files however once we start building a server we’ll be using nodemon instead.

[![](https://miro.medium.com/max/800/1*MKaPZLZWWGeOuET9kWk3xA.gif)]()

Now let's begin the second exercise:

1. Create a javascript file. We can do this a number of ways. The fastest is with command n and then change plain text on the bottom to javascript. Or open terminal, run touch test.js and open the file with vscode.

2. Create some variables using the three types of variable declaration, var, let and const. Then print them with console.log(). We’ll go over the differences between var, let and const in the next article.

3. Run the file either by using terminal node test.js or by clicking the play button that was added by the [code runner extension](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner).

## Conclusion
Now let's go ahead and test your knowledge with the post-assessment. By now, you should have some basic working knowledge on terminal commands, git, nvm and node installed and your first hello-world.js file written. Not bad for a 9-minute read.

### Next Up in the series:
Thank you for reading all this way and because you made it all this way, here is a friend link to the next story in the series. I plan to update every article in the series like this because I know what it’s like to be broke and want to learn how to code.

The next article in the series is a gentle (re)Introduction to Variables, Data Types and Immutability. It’s less of a tutorial and more of a dense overview that is packed with resources to provide a rock-solid foundation essential to learning javascript.

### What do you really know about Variables, Data Types and Immutability in Javascript?
Learn how to Code in 2020: Part 2
medium.com
Many have heard the term ES6 by now. But very few talk about how the abandoned ES4 spec not only became ES6 but also led to the creation of Node.js and radically redefining the JavaScript language as a whole.

### A Brief History of JavaScript: Past, Present and Possible futures of ES, Deno & TypeScript
medium.com

## Why you should sign up as a medium member?
First and foremost it encourages technical writers like myself to write more content.
That being said, if you can afford Netflix, you can probably afford a $5 medium account so please consider signing up for a paid account.

Future articles in this series may include topics such as:
1. conditionals & functions
2. data structures (arrays & objects)
3. Iteration of data structures

Additional Resources:
1. [Javascript with FreeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)
2. https://glitch.com for using nodejs on a real server.

Also, don’t forget to tweet your progress with the #100daysofcode.