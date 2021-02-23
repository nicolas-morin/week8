# Week 8: Netlify Dev Install and Test

- Install node.js – https://nodejs.org and choose the "Current" version. Open the installer and complete the steps.
- Create a new repository in your GitHub account by selecting "Use this template"; call the new repository "week8" and clone/open the new repo in VSCode.
- In VSCode, open a new Terminal window via the menu bar -> Terminal -> New Terminal. In the Terminal, ensure that Node was successfully installed by typing `node -v`. A version number should be returned.
- Install the Netlify developer tools. In the terminal window, type `npm install netlify-cli -g` and hit Enter. It should take a couple of minutes.
- Type `npm install` to install the rest of the dependencies for this project.
- In the terminal window, type `netlify dev`. A browser window should pop up, navigate to `http://localhost:8888` and show the contents of `index.html`.
- Hit CTRL-C in the terminal window to stop the Netlify Dev server.