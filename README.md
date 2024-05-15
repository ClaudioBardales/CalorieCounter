# Calorie Tracker

## Overview

Calorie Tracker is a React-based web application designed to help users track their calorie intake. It utilizes Firebase for the backend database and is deployed using Netlify.

## Features

- User Authentication with Firebase
- Add, edit, and delete calorie entries
- View daily, weekly, and monthly calorie intake
- Responsive design with Bootstrap

## Project Structure

The project has the following structure:

```
calorie-tracker/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .firebaserc
├── .gitignore
├── firebase.json
├── database.rules.json
├── netlify.toml
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)
- Firebase CLI
- Netlify CLI

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/calorie-tracker.git
   cd calorie-tracker
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up Firebase:**

   - Ensure you have a Firebase project set up.
   - Replace the Firebase configuration in `src/firebase.js` with your own.

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Firebase configuration variables.

   ```env
   REACT_APP_API_KEY=your_api_key
   REACT_APP_AUTH_DOMAIN=your_auth_domain
   REACT_APP_PROJECT_ID=your_project_id
   REACT_APP_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_APP_ID=your_app_id
   ```

### Running the Application

1. **Start the development server:**

   ```sh
   npm start
   ```

2. **Build for production:**
   ```sh
   npm run build
   ```

### Deployment

#### Firebase Hosting

1. **Login to Firebase:**

   ```sh
   firebase login
   ```

2. **Initialize Firebase:**

   ```sh
   firebase init
   ```

3. **Deploy to Firebase:**
   ```sh
   firebase deploy
   ```

#### Netlify

1. **Login to Netlify:**

   ```sh
   netlify login
   ```

2. **Deploy to Netlify:**
   ```sh
   netlify deploy --prod
   ```

## Configuration Files

### firebase.json

```json
{
  "database": {
    "rules": "database.rules.json"
  }
}
```

### database.rules.json

```json
{
  "rules": {
    ".read": false,
    ".write": false
  }
}
```

### netlify.toml

This file contains the configuration for deploying the app using Netlify. Ensure the settings match your project's requirements.

## Scripts

- **start:** Starts the development server.
- **build:** Builds the app for production.
- **test:** Runs tests.
- **eject:** Ejects the app from Create React App configuration.

## Dependencies

- **React:** JavaScript library for building user interfaces.
- **Firebase:** Backend-as-a-Service (BaaS) for real-time databases.
- **Bootstrap:** CSS framework for responsive design.
- **Axios:** Promise-based HTTP client for making API requests.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on contributing to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com).

---

Feel free to adjust any sections as necessary to better fit your project.
