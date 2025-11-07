### Project Overview

This project is a password manager built with React, Vite, and Firebase. It provides a user interface to manage key-value pairs of secrets, with email-based authentication and a Firestore database for storage.

**Main Technologies:**

*   **Frontend:** React, Vite
*   **Backend:** Firebase (Authentication and Firestore)
*   **Routing:** `react-router-dom`

**Architecture:**

The application is a single-page application (SPA) with two main pages:

*   `/`: The login page, which handles user authentication (login and sign-up).
*   `/home`: The main page, which displays the user's secrets and allows them to add new ones.

Secrets are stored in a Firestore database with the following structure:

```
users (collection)
└── [uid] (document)
    └── secrets (collection)
        └── [key] (document)
            └── value: [value]
```

### Building and Running

**1. Install Dependencies:**

```bash
npm install
```

**2. Configure Firebase:**

Replace the placeholder Firebase configuration in `src/firebase.js` with your actual Firebase project configuration.

**3. Run the Development Server:**

```bash
npm run dev
```

**4. Build for Production:**

```bash
npm run build
```

### Development Conventions

*   **Styling:** The project uses basic CSS for styling, as defined in `src/App.css`.
*   **Linting:** The project uses ESLint for code linting. You can run the linter with `npm run lint`.
*   **Components:** The application is structured into components, with pages located in the `src/pages` directory.
