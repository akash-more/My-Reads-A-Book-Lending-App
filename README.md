# MyReads Project
## Introduction about the App:
========================================================================================================================
- Through this project, a user can create their own personal library.

- The user can further categorize the books as "Currently Reading", or "Read" or as "Want to Read".

- These books can be organized in different Shelves.

## Functionality of the App:
========================================================================================================================
- The functionality is implemented using "Book" and "Shelf" components in this project.
![Screenshot](https://d17h27t6h515a5.cloudfront.net/topher/2017/May/590c0f12_react-project1-a/react-project1-a.png)

- The API server and client library provided by Udacity have been used to persist information as the user interacts with the application.

- Each Book in a shelf has a drop-down that can be used to move the books to different shelves.
![Screenshot](https://d17h27t6h515a5.cloudfront.net/topher/2017/May/590c0f26_react-project1-b/react-project1-b.png)

- New books can be searched by clicking on the "+" button on the main page of the application.
![Screenshot](https://d17h27t6h515a5.cloudfront.net/topher/2017/December/5a3c22b9_screen-shot-2017-12-21-at-1.06.59-pm/screen-shot-2017-12-21-at-1.06.59-pm.png)

- On clicking the "+" button, the user is redirected to a new page and the URL is changed from "/" to "/search".

- The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets the user add the book to the library.

- The search page also has a back arrow button to take the user back to the main page.

- The Route and Link components from "react-router-dom" have been used to handle the routing between the main page and the search page.

- Necessary checks have been implemented to handle cases where the book's thumbnail or author is empty, so that the app doesn't crash or throw errors.

- Functionality to move a book between various shelves has been implemented on both the main and the search page.

- It is also ensured that a book on a bookshelf, has the same state on both the main application page and the search page.
![Screenshot](https://d17h27t6h515a5.cloudfront.net/topher/2017/July/595d48a9_correct-use-of-state/correct-use-of-state.gif)

## Installation and Launching the App:
========================================================================================================================
- Use the command "npm install" to install all the node packages that are required for the application.
- Once all the packages are downloaded, use "npm start" to launch the application.
- Once the application is launched, we can see that the application is up and running on localhost, port 3000 and can be accessed using the URL - http://localhost:3000/ with the title as "My Reads".
