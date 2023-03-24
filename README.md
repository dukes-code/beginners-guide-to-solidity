# Beginners Guide to Solidity

Repository used during the development of the series of articles on DukesCode about Solidity for beginners.

[![LinkedIn](https://img.shields.io/static/v1?label=LinkedIn&message=%20&color=blue&logo=LinkedIn&style=flat-square&logoColor=white)](https://www.linkedin.com/in/dukefullstack/)
[![Youtube](https://img.shields.io/static/v1?label=Youtube&message=%20&color=blue&logo=Youtube&style=flat-square&logoColor=white)](https://www.youtube.com/@DukesCode)
[![Twitter](https://img.shields.io/static/v1?label=Twitter&message=%20&color=blue&logo=Twitter&style=flat-square&logoColor=white)](https://twitter.com/dukefullstack)
[![DukesCode](https://img.shields.io/static/v1?label=Duke'sCode&message=%20&color=blue&logo=googlechrome&style=flat-square&logoColor=white)](https://dukescode.com?utm_source=github&utm_medium=page&ref=github)
[![Instagram](https://img.shields.io/static/v1?label=Instagram&message=%20&color=blue&logo=Instagram&style=flat-square&logoColor=white)](https://www.instagram.com/dukefullstack/)

## ![image](https://github.com/dukefullstack/store-app-castore/blob/assets/assets/octohub.png?raw=true) Menu Contents

- [Beginners Guide to Solidity](#beginners-guide-to-solidity)
  - [:bulb: Menu Contents](#-menu-contents)
  - [:pushpin: Motivation](#pushpin-motivation)
  - [:man_technologist: Technologies & Tools](#man_technologist-technologies--tools)
  - [:iphone: Final Application](#iphone-final-application)
  - [:heavy_check_mark: Installation](#heavy_check_mark-installation)
  - [:heavy_check_mark: Compilation & Test](#heavy_check_mark-compilation--test)
  - [:pencil: Author](#pencil-author)

## :pushpin: Motivation

This is the first article in a series entitled [“A Complete Beginner's Guide to Solidity”](https://dukescode.com/a-complete-beginners-guide-to-solidity-part-i), where I will present a detailed understanding of the ecosystem surrounding the Smart Contract and the Solidity Language with a focus on the Ethereum platform. These fundamentals will give you basic knowledge on the subject to help you get started on your journey.

With this series, my goal is to bring complete and comprehensive content on the subject, which I will deal with theoretically and practically.

## :man_technologist: Technologies & Tools

- Node.js
- Hardhat & Hardhat CLI
- Solidity

## :iphone: Final Application

At the end of this series of articles we will build a smart contract that draws a lottery number and transfers the amount of ETH from the pot to the winner subtracting the administration fee.

- Each player can bet more than once on different numbers.

- If there is a tie, the amount must be distributed equally to the winners.

- If there is no winner(s), the value is rolled over to the next draw.

## :heavy_check_mark: Installation

- First, you need to have Node.js, npm and Hardhat installed, then clone the project via HTTPS through this command:</br>
  `git clone https://github.com/dukefullstack/beginners-guide-to-solidity`

- After cloning, enter the cloned repository directory:</br>
  `cd beginners-guide-to-solidity`

- Once being inside the directory, download and install the dependencies using:</br>
  `npm i`

## :heavy_check_mark: Compilation & Test

- To compile you must run at terminal:</br>
  `npx hardhat compile`

- To run our tests you must access your terminal and run:</br>
  `npx hardhat test`

## :pencil: Author

- <a href="https://www.linkedin.com/in/dukefullstack/" target="_blank">LinkedIn</a>
- <a href="https://www.youtube.com/@DukesCode" target="_blank">Youtube</a>
- <a href="https://twitter.com/dukefullstack" target="_blank">Twitter</a>
- <a href="https://dukescode.com?utm_source=github&utm_medium=page&ref=github" target="_blank">Duke's Code</a>
- <a href="https://www.instagram.com/dukefullstack/" target="_blank">Instagram</a>

Made with :heart: by <a href="https://www.linkedin.com/in/dukefullstack/">**Thiago Santos Joaquim**</a>. MIT License
