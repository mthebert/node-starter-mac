# Current Node/JS Playbook-Starter

[Remapping your stupid windows keyboard on your mac ](https://www.youtube.com/watch?v=puedY8fciy0)

## Code Editor

[Visual Studio Code](https://code.visualstudio.com/)

### Prettier for formatting code

Prettier is an extension, so after you install VS Code, search 'Prettier - Code
Formatter' and install.

[How to use Prettier](https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code)
[The .prettierrc file I use was taken from here](https://www.boag.online/notepad/post/full-prettier-prettierrc-config)

## Version Control

[Git](https://git-scm.com/)

**Quick Git Command List**

git clone <url>

git add .

git commit -m "comment goes here"

git push

[.gitignore for .js projects](<(https://github.com/mthebert/.gitignore/blob/master/.gitignore)>)

general file structure .gitign1. first 2. second 3. third

README.md

## Homebrew - Mac package manager

[Install Homebrew here](https://brew.sh/)

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

## Install Node and NPM

<!-- prettier-ignore -->
```$ brew install node```

Or go to the[ Node site](https://nodejs.org/)

## Install NVM Node Version Manager

Check out instructions on how to do the whole install
[here](https://heynode.com/tutorial/install-nodejs-locally-nvm/)

or use Homebrew

<!-- prettier-ignore -->
```$ brew install nvm```

You will also want to make a version of node your default version every time you
use node, unless you otherwise specify. You can do this by typing:

<!-- prettier-ignore -->
```$ nvm alias default v14```

<!-- prettier-ignore -->
If it doesnt exist, you can install it using: ```$ nvm install 14```

### ITerm2

I like using Iterm2 for my terminal emulator in MacOS

You can get it [here](https://iterm2.com/)

### ~/.bash_profile

With the use of a terminal like Iterm2, you also need to get comfy using your
bash profile to customize your command line experience

You can open your bash profile using Visual Studio Code. (you can use vi, or
whatever you feel most comfy with, but this to me is easiest)

<!-- prettier-ignore -->
```$ code ~/.bash_profile```

You can reload your bash profile after changes using

<!-- prettier-ignore -->
```$ source ~/.bash_profile```

### Postman

For making API calls,
[Postman](https://www.postman.com/downloads/?utm_source=postman-home) is great!

#### Note - BuildScripts and Automated Tasks

This folder (buildscripts) containts files used for setup of useful techs

The package.json "scripts:" section has some handy automation tasks using NPM

### Web Server - Express

Install web server for development

### Public Web Server - [localtunnel](https://theboroer.github.io/localtunnel-www/) or [ngrok](https://dashboard.ngrok.com/get-started/setup)

<!-- prettier-ignore -->
```npm install localtunnel -g```

start app

<!-- prettier-ignore -->
```lt --port 3000```

or for ngrok

<!-- prettier-ignore -->
```npm install -g ngrok```

You will need to get your public IP address with localtunnel, there are
instructions when the page loads the first time. Need account for Ngrok
beforehand, and then add the auth token but also pretty easy to use.

<!-- prettier-ignore -->
```ngrok config add-authtoken xxx```

<!-- prettier-ignore -->
```ngrok http 3000```

## Transpiling with Babel

Using a .babelrc in root. This is great for transpiling your project, like using
typescript You can see the different presets for Babel
[here](https://babeljs.io/docs/presets)

<!-- prettier-ignore -->
Now instead of using commonJs require you would usually in node, you can use
JS's import instead ```var express = require('express')``` - commonJs

<!-- prettier-ignore -->
Now you can use ```import express from ("express")```

## Bundling with Webpack

using.webpack.config.js or webpack.config.dev.js to bundle

when chosing dev, it does not physically create the files in /src but serves
them from memory

## Database - MongoDB

Install MongoDB on a Mac using homebrew. Tap the MongoDB Homebrew Tap to
download the offical Homebrew formula for mongo by typing:

`brew tap mongodb/brew`

to update homebrew and all existing formulae:

` brew update`

to install mongodb:

`brew install mongodb-community@6.0`

## InstallX Code Command-Line Tools

For some features in other tools, you need to make sure you have installed the
command line tools in Xcode

You can install it by typing the following:

`xcode-select --install`

[Install Instructions](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)

also there are some additional tools, including
[Compass](https://www.mongodb.com/try/download/compass), a GUI which is helpful
sometimes

## Scripting Language - Python

As a young dev, when it came to quick and dirty, I often used PERL in my bag of
tricks. Especially for reports where I often needed synchronous parsing of text
files to schedule and email. But today - that has been replaced in my toolbelt
by Python 3.

Python 2.7 used to come with Macs, but you need 3. Not sure what ships with new
macs now. While you can install it with Brew, there are multiple steps, so I
suggest using this
[guide to install](https://docs.python-guide.org/starting/install3/osx/).

You can see what you have installed by running

<!-- prettier-ignore -->
```$ python3 --version```

The Python install comes with its package manager, Pip.

#### Issues

**\_\_dirname is not defined in ES module scope **

I used this a lot, looks like it broke,
[here is the fix](https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/)
