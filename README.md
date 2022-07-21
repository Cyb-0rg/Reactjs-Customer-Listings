# Simple React JS Project

## What is the use of this Repo

This Project is a Simple ReactJS Project which demonstrates the following
1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using Bootstrap along with React
5. Using Basic Routing in React

The project Template can be used to build bigger projects

## Live Application URL

### https://github.com/Cyb-0rg/Reactjs-Customer-Listings
This URL has the application deployed in

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```
## Live Application URL

The Application is deployed in https://github.com/Cyb-0rg/Reactjs-Customer-Listings


## Tamplate and initial idea from
https://aditya-sridhar.github.io/simple-reactjs-app


Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

![image](https://user-images.githubusercontent.com/50844224/180167438-5d52f6dd-1259-4051-bd01-d0d799c18cc4.png)


#### Components

1. **Customers** Component : This Component displays a list of customers. This Component gets the data from a json file in assets folder

2. **CustomerDetails** Component : This Component Displays the details of the selected customer. This Component gets its data from a json file in assets folder as well. This Component is the Child Component of *Customers* Component

3. **CustomerPics** Component : This Component Displays the picture of the selected customer. This Component gets its data from a hosting website that makes this projrct need an internet access to run fully. This Component is the Child Component of *Customers* Component

4. **pageNotFound** Component : This Component Displays "404 ERROR NOT FOUND text and Link tag to go back home". Gets rendered if an unknown address is entered in the address bar of the browser after "localhost:3000/"

![image](https://user-images.githubusercontent.com/50844224/180168142-f9d69337-6059-4c2c-9c8e-d490e68c0e2d.png)


#### HTTP client

**axios** library is used to make HTTP Calls

#### URL

The application has just one url /customerlistings which ties to *Customers* Component

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap
