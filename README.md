### No Fun Intended Bucket List App (;

### Overview
No Fun Intended is a simple yet entertaining web application that allows users to create a bucket list of jokes to share during gatherings. You can manually add your own jokes or fetch random dad jokes from an external API to fill up your joke list. This project aims to solve a small problem I face when trying to prepare jokes (even cringy ones) for family gatherings by providing an easy way to collect and organize jokes.

### Objective
The objective of this project is to create a fun and practical solution to the minor problem of remembering jokes to tell at family gatherings. This app helps keep all your jokes in one place, allowing you to easily add, fetch, and manage them.

### Features
- **Add Joke Manually**: Input your own custom jokes into the list.
- **Fetch Random Joke**: Grab a random dad joke from an external API.
- **Bucket List Management**: Add jokes to the list and remove them as you please.

### Components
This app is built using React with several core components:

1. **AddItem.js**: A form component for adding jokes to your list.
2. **BucketList.js**: Displays your list of jokes and allows for removing items.
3. **RandomActivity.js**: Fetches a random joke from the icanhazdadjoke API and allows users to add it to their bucket list.
4. **App.js**: The main component that holds the state and ties all other components together.

### Setup and Installation
To run this project locally, follow these steps:

1. **Project Setup**:
   Use `npx create-react-app` to set up your React project:
   ```
   npx create-react-app nofunintended
   cd nofunintended
   ```

2. **Clone the Repository**:
   ```
   git clone https://github.com/yourusername/nofunintended.git
   cd nofunintended
   ```

3. **Install Dependencies**:
   ```
   npm install
   ```

4. **Run the Application**:
   ```
   npm start
   ```

The app should now be running on http://localhost:3000.

### How to Use
1. **Adding Jokes**: You can add your own joke by typing it in the text input field and clicking 'Add Joke'.
2. **Fetch Random Jokes**: Click the 'Fetch Joke' button to get a random joke from the internet, then click 'Add to Joke List' to save it.
3. **Manage Your List**: View your list of jokes and click the '✖' button next to a joke to remove it from the list.

### Project Structure
- `src/AddItem.js` - Handles user input for manually adding jokes.
- `src/App.js` - Main application component.
- `src/BucketList.js` - Renders the user's list of jokes.
- `src/RandomActivity.js` - Fetches random jokes from an external API.
- `src/App.css` - Styling for the application.

### API Integration
This app makes use of the icanhazdadjoke API to fetch random jokes. The jokes are fetched using the Fetch API, and users can add them directly to their joke list. If the API fails to provide a joke, an error message will notify you.

### AI Assistance
This project was built with assistance from ChatGPT to help generate parts of the code and improve functionality. All AI-generated portions were reviewed to ensure proper understanding and integration into the project. Specifically, ChatGPT assisted in the following areas:

1. **Component Development**: Helped create the structure for core components such as `AddItem.js`, `BucketList.js`, and `RandomActivity.js`.
2. **State Management**: Provided guidance on using React's `useState` hook to manage the state of the joke list.
3. **API Integration**: Assisted in setting up the Fetch API to retrieve random jokes from the icanhazdadjoke API, including handling responses and errors.
4. **Error Handling**: Suggested best practices for handling API errors and notifying users when something goes wrong.

### Dependencies
- **React**: The app is built using React.
- **Fetch API**: Used for fetching random jokes from an external source.

### Future Improvements
- **User Authentication**: Enable users to save their joke lists permanently by creating accounts.
- **Persistent Storage**: Add local storage or backend database to store jokes beyond the current session.
- **Categories of Jokes**: Allow users to select from different joke categories.
