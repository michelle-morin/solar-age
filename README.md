# _Super Galactic Age Calculator_

#### _Test Driven Development Independent Project for Epicodus_, _7 Feb. 2020_

#### By _**Michelle Morin**_

## Description

_This application takes a person’s age in Earth years and creates a class that returns their age in Mercury years, Venus years, Mars years, and Jupiter years. This application also determines how many years a user has left to live on each of these planets, and if a user has already surpassed the average life expectancy, returns the number of years they have lived past the life expectancy. The application also returns the number of mayfly lifespans the user has lived compared to the number of mayfly lifespans the Earth's sun has lived._

_This application is delployed on [Netlify](https://solar-age-calculator.netlify.com/)._

## Specifications:

| Specification | Example Input | Example Output |
| ------------- |:-------------:| -------------------:|
| Webpage determines a person's age in Mercury years (one Mercury year = 0.24 Earth years) | 30 Earth years | 125 Mercury years |
| Webpage determines a person's age in Venus years (one Venus year = 0.62 Earth years) | 30 Earth years | 48.39 Venus years |
| Webpage determines a person's age in Mars years (one Mars year = 1.88 Earth years) | 30 Earth years | 15.96 Mars years |
| Webpage determines a person's age in Jupiter years (one Jupiter year = 11.86 Earth years) | 30 Earth years | 2.53 Jupiter years |
| Webpage determines a person's life expectancy on Earth | female, lives in North America | 81 Earth years |
| Webpage determines number of Mercury years a person has left to live on Mercury | 30 Earth years old, female | 212.5 Mercury years |
| Webpage determines number of Venus years a person has left to live on Venus | 30 Earth years old, female | 82.26 Venus years |
| Webpage determines number of Mars years a person has left to live on Mars | 30 Earth years old, female | 27.13 Mars years |
| Webpage determines number of Jupiter years a person has left to live on Jupiter | 30 Earth years old, female | 4.30 Jupiter years |
| Webpage determines number of Mercury years a person has lived beyond their life expectancy | 85 Earth years, female | 16.67 Mercury years |
| Webpage determines number of Venus years a person has lived beyond their life expectancy | 85 Earth years, female | 6.45 Venus years |
| Webpage determines number of Mars years a person has lived beyond their life expectancy | 85 Earth years, female | 2.13 Mars years |
| Webpage determines number of Jupiter years a person has lived beyond their life expectancy | 85 Earth years, female | 0.34 Jupiter years |
| Webpage determines number of mayfly lifespans that a user has lived | 30 Earth years | 3153600 |
| Webpage compares number of mayfly lifespans that a user has lived to the number of mayfly lifespans the sun has been in existence | 30 Earth years | 3153600/4.7304e+14 = 6.67e-9 |

_Note: average male and female life expectancies on Earth (76 and 81 years, respectively) are obtained from [statista](https://www.statista.com/statistics/274513/life-expectancy-in-north-america/) and are only relevant for individuals living in North America. When a user selects the 'prefer not to answer' option, the user is assigned the average male life expectancy._

_Note: approximate age of the sun (4.5 billion Earth years) obtained from [NASA](https://solarsystem.nasa.gov/solar-system/sun/in-depth/). The mayfly lifespan calculations do not consider leap years._

## Setup/Installation Requirements

#### Node install

###### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

_Install Git with the following command:_
* $ brew install git

_Next, install Node.js by entering the following command in Terminal:_
* $ brew install node

###### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._


#### Install this application

_Clone this repository via Terminal using the following commands:_
* _$ cd desktop_
* _$ git clone https://github.com/michelle-morin/solar-age_
* _$ cd solar-age_
_Then, confirm that you have navigated to the solar-age project directory by entering "pwd" in Terminal._

_Next, install npm at the project's root directory via the following commands:_
* _$ npm install_
* _$ npm run build_

_Open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code on macOS, enter the command "code ." in Terminal)._

## Technologies Used

_Git, HTML, CSS, JavaScript, jQuery, npm, webpack, Jest_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Michelle Morin_**
