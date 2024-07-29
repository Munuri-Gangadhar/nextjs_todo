# Todo List Application

## Overview

This is a Todo List application built with Next.js. It allows users to create, update, and manage tasks with features including search, expandable list items, and marking tasks as done.

## Features

- **Create Task:** Add new tasks to the list.
- **Update Task:** Edit existing tasks.
- **Mark as Done:** Toggle task completion status.
- **Search Tasks:** Filter tasks based on the search query.
- **Expandable List:** View task details on expanding a list item.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-list-app

2. **Install Dependencies:**
Ensure you have Node.js and npm installed. Then run:
npm install

3. **Start the Development Server:**
npm install

markdown
Copy code

3. **Start the Development Server:**
npm run dev

markdown
Copy code

4. **Open the Application:**
Go to `http://localhost:3000` in your browser to view the application.

## File Structure

/todo-list-app
/components
TaskForm.js # Component for adding and editing tasks
TaskItem.js # Component for displaying individual tasks
TaskList.js # Component for displaying the list of tasks
/pages
_app.js # Custom App component for global styles and setup
index.js # Main page component with task management logic
/public
/data
tasks.json # Sample task data used by the application
/styles
Home.module.css # CSS Module for styling the home page
README.md # This file
package.json # Project dependencies and scripts



## Implementation Details

### Server-Side Rendering (SSR)

The application uses the `getServerSideProps` function in `pages/index.js` to fetch initial task data on the server side. This improves performance and SEO.

### Search Functionality

Tasks can be filtered by title using a search input field.

### Expandable Task List

Tasks are displayed in an expandable format to show detailed information including the description and the last update timestamp.

## Future Enhancements

- **User Authentication:** Add user accounts for task management.
- **Persistent Storage:** Integrate a backend database for task storage.
- **Improved Styling:** Enhance the visual design and responsiveness.

## Contributing

Contributions are welcome! Please fork the repository, make changes, and submit a pull request. For major changes, open an issue to discuss.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- Next.js and React for providing the framework and library.
- Axios for simplifying HTTP requests.

## Contact
