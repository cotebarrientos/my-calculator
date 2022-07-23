# JS Final Assignment: My Calculator

## Brainnest: Frontend Development Industry Training

![Mockups](https://github.com/cotebarrientos/my-calculator/blob/main/doc/calc-mockup.png?raw=true)

This repository contains my final assignment for the **Frontend Development industry training program**
taught by [**Brainnest**](https://www.brainnest.consulting/).

**You can visit this website by clicking [here](https://cotebarrientos.github.io/my-calculator/).**

---

## Table of Contents

1. [**Project Purpose**](#project-purpose)
2. [**Features**](#features)
   - [Buttons](#buttons)
   - [Functionality](#functionality)
   - [Color Scheme](#color-scheme)
   - [Fonts](#fonts)
3. [**Technologies Used**](#technologies-used)
   - [Languages](#languages)
   - [Libraries](#libraries)
   - [Tools Used](#tools-used)
4. [**Deployment**](#deployment)
   - [Clone Project from GitHub Website](#clone-project-from-github-website-📁)
   - [Clone Project from terminal](#clone-project-from-terminal-💻)
   - [Deploy this Project using GitHub pages](#deploy-this-project-using-github-pages-✅)
5. [**Testing**](#testing)
6. [**Credits**](#credits)
   - [Media](#media)
   - [Code](#code)

---

## Project Purpose

The main purpose of this project is to create a calculator capable of performing simple calculations.

### Project Structure

<img src="https://github.com/cotebarrientos/my-calculator/blob/main/doc/calc-project-structure.png?raw=true" alt="Calc working" width="400px">

[**Back to top**](#table-of-contents)

## Features

### Buttons

The calculator consists of the following

- 10 buttons for numbers **(0 to 9)**
- 5 buttons to perform mathematical operations, which are:
  - Addition **(+)**
  - Subtract **(-)**
  - Multiply **(x)**
  - Divide **(÷)**
  - Calculate percentage **(%)**
- 1 button to display the results **(=)**
- 2 buttons to clear the calculator screen, one removes everything **(AC)** and the
  other removes only the last number **(←)**.
- 1 button to change the sign of a number **(+/-)**.
- 1 button to add decimals **(.)**.

### Functionality

This calculator has these functions:

- Performs simple calculations.
- It has keyboard support.
- It is responsive, adapting to mobile devices.
- The calculator screen shows the operations you are performing, and also displays a special message
  if you try to divide a number by 0.

|                                                              Working Normally                                                              |
| :----------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/cotebarrientos/my-calculator/blob/main/doc/calculator_working.png?raw=true" alt="Calc working" width="350px"> |
|                                              The calculator displays mathematical operations                                               |

|                                                           Special Error Message                                                           |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/cotebarrientos/my-calculator/blob/main/doc/calculator_error.png?raw=true" alt="Error message" width="360px"> |
|                                        This message appears when you try to divide a number by 0.                                         |

### Color Scheme

**App Background**

|                                             #B87AE8                                              |                                             #F1A4A4                                              |
| :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| ![#B87AE8](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%23b87ae8.png?raw=true) | ![#F1A4A4](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%23f1a4a4.png?raw=true) |

**Calculator Background**

|                                              #ECECEC                                              |                                             #D9D9D9                                              |
| :-----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| ![#ECECEC ](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%23ececec.png?raw=true) | ![#D9D9D9](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%23d9d9d9.png?raw=true) |

**Screen**

|                                             #36BBE3                                              |                                             #1E1E1E                                              |                                              #101010                                              |
| :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: |
| ![#36BBE3](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%2336bbe3.png?raw=true) | ![#1E1E1E](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%231e1e1e.png?raw=true) | ![#101010 ](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%23101010.png?raw=true) |

**Number Buttons**

|                                             #F9A6F3                                              |                                             #72067B                                              |
| :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| ![#F9A6F3](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%23f9a6f3.png?raw=true) | ![#72067B](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%2372067b.png?raw=true) |

**Operator Buttons**

|                                             #F4CA26                                              |                                             #664800                                              |
| :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| ![#F4CA26](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%23f4ca26.png?raw=true) | ![#664800](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%23664800.png?raw=true) |

**Equal Button**

|                                             #B87AE8                                              |                                             #40025B                                              |
| :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| ![#B87AE8](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%23b87ae8.png?raw=true) | ![#40025B](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%2340025b.png?raw=true) |

**All Clear, Change Number Sign and Percentage Buttons**

|                                             #36BBE3                                              |                                             #02185B                                              |
| :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| ![#36BBE3](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%2336bbe3.png?raw=true) | ![#02185B](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%2302185b.png?raw=true) |

**Clear one space and Decimal Buttons**

|                                             #FFC4C4                                              |                                             #713636                                              |
| :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| ![#FFC4C4](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%23ffc4c4.png?raw=true) | ![#713636](https://github.com/cotebarrientos/my-calculator/blob/main/doc/%23713636.png?raw=true) |

### Fonts

- [**Nunito**](https://fonts.google.com/specimen/Nunito?query=nuni): This font was used for the calculator buttons.
- [**Orbitron**](https://fonts.google.com/specimen/Orbitron?query=orbi): This font was used to display numerical operations and results on the calculator's screen.

[**Back to top**](#table-of-contents)

## Technologies Used

### Languages

- HTML 5
- CSS 3
- JavaScript

### Libraries

- Font Awesome version 6.1.1
- Google Fonts

### Tools Used

- VS Code
- GitHub
- Git
- Adobe Photoshop portable version 13.0.0
- Affinity designer version 1.7.4

[**Back to top**](#table-of-contents)

## Deployment

### Clone Project from GitHub Website 📁

1. Follow this link to the [Project GitHub repository](https://github.com/cotebarrientos/my-calculator).
2. Scroll to the top of this repository and click on the "clone or download button".
3. Decide whether you want to clone the project using HTTPS or an SSH key and do the following:
   - HTTPS: click on the checklist icon to the right of the URL.
   - SSH key: first click on 'Use SSH' then click on the same icon as above.

### Clone Project from terminal 💻

1.  Open the 'Terminal'.
2.  Choose the location for the cloned directory.
3.  Type `git clone`, and then paste the clone URL.

        $ git clone https://github.com/USERNAME/REPOSITORY

4.  Press 'Enter' to create your local clone.
5.  Well done!, you've cloned this repository.

### Deploy this Project using GitHub pages ✅

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/cotebarrientos/my-calculator), the following steps were taken:

1. Log into GitHub.
2. Open the 'Settings' section of the project repository in GitHub.
3. Scroll down to the GitHub Pages section.
4. Under Source click the drop-down menu labelled None and select Main Branch or Main Branch/docs folder.
5. On selecting Main Branch the page is automatically refreshed, the website is now deployed.
6. Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.
7. Well done!, you've deployed this project.

[**Back to top**](#table-of-contents)

## Testing

### Validation Services

#### HTML 5

I used <a href="https://validator.w3.org/" target="_blank">W3C HTML Validator</a> to validate my HTML files by direct input.

- my index **.html** file was tested and no errors were found.

#### CSS

I used <a href="https://jigsaw.w3.org/css-validator/validator.html.en" target="_blank">W3C CSS Validator</a> to validate my CSS files by direct input.

- My style **.css** file was checked and no errors were found.

#### JavaScript

I used <a href="https://jshint.com/" target="_blank">JShint</a> to validate my JS files by direct input.

- The script **.js** file was checked, no error were found.
  - Metrics:
    - There are 19 functions in this file.
    - Function with the largest signature take 1 arguments, while the median is 0.
    - Largest function has 19 statements in it, while the median is 3.
    - The most complex function has a cyclomatic complexity value of 16 while the median is 1.

### Chrome's DevTools Lighthouse Report

![Lighthouse report](https://github.com/cotebarrientos/my-calculator/blob/main/doc/calc-lighthouse-report.png?raw=true)

The website is performing quite well as reported by this tool.

### Browser Compatibility

In order to ensure that the calculator would work properly in the following browsers, responsiveness tests and button were done, as well
as tests on the look of the website to ensure that the colors and fonts used would display correctly.

|   Browser    | Responsiveness | Appearance | Performance |
| :----------: | :------------: | :--------: | :---------: |
|    Chrome    |      Good      |    Good    |    Good     |
|   Firefox    |      Good      |    Good    |    Good     |
| Avast Secure |      Good      |    Good    |    Good     |
|     Edge     |      Good      |    Good    |    Good     |

[**Back to top**](#table-of-contents)

## Credits

### Media

The images used in this project were obtained mainly from these sources:

- [Unsplash](https://unsplash.com/)
- [Iconfinder](https://www.iconfinder.com/)

### Code

These websites were really useful to troubleshooting the issues I faced:

- [w3schools](https://www.w3schools.com/)
- [Stackoverflow](https://stackoverflow.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)

These blogs helped me to understand more about how to create a calculator.

- [Doro Onome - Section](https://www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/)
- [Adam Nagy - Dev](https://dev.to/javascriptacademy/create-a-simple-calculator-using-html-css-and-javascript-4o7k)

This interactive calculator was really interesting

- [Cristian Vasquez - Code Pen](https://codepen.io/cristian_vasquez/pen/dyvELOy)

[**Back to top**](#table-of-contents)

---
