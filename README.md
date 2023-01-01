# profile-Generator

## Description
For this project, 

## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits/Collaborators](#credits-and-collaborators)
- [License](#license)

## **User Story** 
- AS A manager
- I WANT to generate a webpage that displays my team's basic info
- SO THAT I have quick access to their emails and GitHub profiles

## **Acceptance Criteria** 
- GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information
- THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
- THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
- THEN that GitHub profile opens in a new tab
- WHEN I start the application
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
- THEN I exit the application, and the HTML is generated


## Tech Stack
- Node.js
- Javascript
- HTML
- CSS

## Installation
The user is required to have installed inquirer package version 8.2.4 and Node.js in order to use this application.

## Usage
[Profile Generator](https://user-images.githubusercontent.com/112015433/210184155-4d23e8b0-81e8-4b16-913f-d5f5a127bf30.webm)

## Tests
Unit tests were conducted when on classes for Employee, Intern, Manager and Engineer. The tests can be found in the test folder. 


## Credits and Collaborators
The starter code for this project was provided by [kfergrocks](https://github.com/RutgersCodingBootcamp/RUT-VIRT-FSF-PT-10-2022-U-LOLC).  The link to the starter code can be found at: https://github.com/RutgersCodingBootcamp/RUT-VIRT-FSF-PT-10-2022-U-LOLC/tree/main/10-OOP/02-Challenge



## License
MIT License
