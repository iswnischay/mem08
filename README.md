# mem8 Application

## Overview

mem8 is a modern web application built with React, Vite, and Firebase. This project is containerized using Docker and includes CI/CD workflows for automated deployment.

## Features

- **React**: Frontend framework for building user interfaces.
- **Vite**: Development server and build tool for fast development.
- **Firebase**: Backend services for authentication and Firestore database.
- **Docker**: Containerized application for consistent environments.
- **GitHub Actions**: CI/CD workflows for automated builds and deployments.

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- Docker
- Firebase account
- GitHub repository with secrets configured

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mem8.git
   cd mem8
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Docker Setup

1. Build the Docker image:

   ```bash
   docker build -t mem8-app .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 5173:5173 mem8-app
   ```

### Firebase Configuration

1. Add your Firebase configuration to GitHub Secrets as `FIREBASE_CONFIG`.
2. Ensure the `firebase.js` file uses environment variables for secure configuration.

### CI/CD Workflows

- **Automation Workflow**: Located at `.github/workflows/automation.yml`, this workflow builds the project, pushes Docker images, and deploys to GitHub Pages.
- **Deploy Workflow**: Located at `.github/workflows/deploy.yml`, this workflow handles Firebase hosting deployment.

## Project Structure

```
mem8/
├── src/
│   ├── firebase.js       # Firebase configuration and initialization
│   ├── pages/            # React pages
│   └── ...
├── Dockerfile            # Docker configuration
├── vite.config.js        # Vite configuration
├── package.json          # Project dependencies and scripts
├── .github/workflows/    # CI/CD workflows
└── README.md             # Project documentation
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License.
