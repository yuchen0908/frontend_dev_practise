# Pre-requisite: before practising / learning javascript and React App, we need to set up the environment. Here're the steps:
1. install nvm-windows (for windows)
    * it's recommended to install node.js and npm via a node package manager such as nvm-windows (windows version). The reason is to have version control across global setting. [ref link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
    * npm, is a online repository for open source node.js projects
    * npm, is a cli tool the help install packages
    * local installs at ./node_modules/.bin/directory
    * global installs at global/bin/directory
    * ***we need to make sure that nvm installation directory doesn't have space***
    * [nvm-windows - download url](https://github.com/coreybutler/nvm-windows/releases)
    * [nvm-windows - how to use](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)
2. install node.js
    * once nvm-windows is installed, open Admin level powershell
    * `nvm ls` to check if there is any node.js installed, or list all the versions installed
    * `nvm install latest` to install the latest node.js (currently it's 19.3.0)
    * `nvm install <version>` to install the specific version, let's install 18.12.1
    * we should be able to see 18.12.1 is installed via `nvm ls`
