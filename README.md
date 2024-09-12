# React Project Plan Step by Step

### Project Requirements

- Build the restaurant recommendation application using React
- Utilize HTML, CSS, and Javascript as part of the tech stack
- Version control your application with Git and host the repository on
  GitHub
- Write a README (using Markdown) that documents your project,
  including:
  - The purpose of your project
  - Technologies used
  - Features
  - Future work

**Features**

- The website allows users to scroll up and down to navigate through its content.
- Users can simulate a search by typing in the search bar
- A list of mock restaurant data is presented to the user.

**Prerequisites**

- HTML
- CSS
- Javascript
- React
- Git and GitHub
- HTTP Requests and Responses
- Authentication

## Part 1 : Creating Project & Components

### Checklist

- [x] **TASK 1** : Set Up Your Local Environment
- on your computer, create a React app named `ravenous`
- use the `create-react-app` package
- run the app in the development mode `npm start`
- [x] **TASK 2** : Set Up Version Control
- set up the folder you created previously to be a Git repository `git init`, `git add .` `git -m commit "Initial commit"`
- need to set up a remote origin and push the initial files to a repository on GitHub. At Source Control menu `Push Branch`, name on it as repository name.
- [x] **TASK 3** : Build the Business Component
- the component will represent how a business (a restaurant) in Ravenous will be formatted and styled. Each `Business` component should display an `image`, `name`, `address`, `city`, `state`, `zipcode`, `category`, `rating`, and `review count`.
- [x] **TASK 4** : Add a Sample Business
- for the Business component, create a hardcoded business that can be used to generate a list of fake businesses and simulate the website’s functionality.
- Eventually, the hardcoded business will be replaced with dynamic data retrieved from the Yelp API.
- [x] **TASK 5** : Build the Business List Component
- create a `BusinessList` component that displays a collection of businesses. The `BusinessList` component should utilize the `Business` component multiple times to generate the list
- [x] **TASK 6** : Build the Search Bar Component
- Create a `SearchBar` component that users can use to search for businesses on the Yelp platform.
- the search bar should contain two inputs, one for the user’s search terms and the selected location. Don’t forget a search button as well.
- concentrate on building the buttons and the structure needed to communicate with the Yelp API
- [x] **TASK 7** : Style Your Components
- make your components visually appealing and consistent by styling them. Create styles for the `Business`, `BusinessList`, and `SearchBar` components using CSS modules.
- [ ] **TASK 8** : Review Your Project
- Ensure that the final product is a simulation of how the Ravenous project will look and work. Some functionality (like querying the Yelp API) is currently missing.
