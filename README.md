# InventoryAI

InventoryAI is an advanced inventory management system that leverages artificial intelligence to optimize stock levels, predict demand, and streamline operations.

## Overview

InventoryAI integrates a Next.js frontend, a Node.js (Express) backend, and Python-based AI models within a monorepo structure to provide a seamless and efficient inventory management solution.

## Purpose

The primary goal of InventoryAI is to assist businesses in maintaining optimal inventory levels, reducing holding costs, and preventing stockouts by utilizing AI-driven demand forecasting and real-time inventory tracking.

## Functionality

- **Real-Time Inventory Tracking**: Monitor stock levels across multiple locations in real-time.
- **AI-Powered Demand Forecasting**: Predict future inventory requirements using machine learning models.
- **Automated Reordering**: Set up automatic purchase orders based on predefined thresholds.
- **Comprehensive Reporting**: Generate detailed reports on inventory performance and trends.

## Features

- **User-Friendly Interface**: Intuitive Next.js frontend for easy navigation and management.
- **Robust Backend**: Scalable Node.js (Express) backend handling API requests and business logic.
- **Advanced AI Models**: Python-based models for accurate demand forecasting.
- **Monorepo Structure**: Unified codebase for streamlined development and deployment.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **AI Models**: Python, TensorFlow, scikit-learn
- **Package Management**: pnpm
- **Monorepo Tooling**: Turborepo

## Folder Structure

The project follows a monorepo structure managed by Turborepo:

```
InventoryAI/
├── apps/
│   ├── web/           # Next.js frontend application
│   └── backend/       # Node.js (Express) backend application
├── packages/
│   ├── ui/            # Shared UI components
│   ├── eslint-config/ # Shared ESLint configurations
│   └── tsconfig/      # Shared TypeScript configurations
├── models/            # Python AI models
├── .vscode/           # VSCode settings
├── package.json       # Root package.json
├── pnpm-workspace.yaml# pnpm workspace configuration
└── turbo.json         # Turborepo configuration
```

## Setup Guide

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js**: Ensure Node.js is installed. [Download Node.js](https://nodejs.org/)
- **Python**: Ensure Python 3.x is installed. [Download Python](https://www.python.org/downloads/)
- **pnpm**: Install pnpm globally using npm:

  ```bash
  npm install -g pnpm
  ```

### Cloning the Repository

```bash
git clone https://github.com/dev-huddle/InventoryAI.git
cd InventoryAI
```

### Installing Dependencies

Install the dependencies for the entire monorepo:

```bash
pnpm install
```

### Running the Applications

Start the development servers for both frontend and backend:

1. **Frontend (Next.js)**:

   ```bash
   pnpm --filter web dev
   ```

2. **Backend (Express.js)**:

   ```bash
   pnpm --filter backend dev
   ```

3. **AI Models (Python)**:

   ```bash
   cd models
   pip install -r requirements.txt
   python app.py
   ```

The frontend will be accessible at `http://localhost:3000`, the backend at `http://localhost:5000`, and the AI models as configured.

## Contribution Guidelines

We welcome contributions! Please follow these steps:

1. **Fork the Repository**: Click the 'Fork' button on the GitHub page.
2. **Create a Branch**: Create a new branch for your feature or bugfix.

   ```bash
   git checkout -b feature-name
   ```

3. **Make Changes**: Implement your changes in the codebase.
4. **Commit Changes**: Commit your changes with a descriptive message.

   ```bash
   git commit -m "Add feature-name"
   ```

5. **Push to GitHub**: Push your branch to your forked repository.

   ```bash
   git push origin feature-name
   ```

6. **Create a Pull Request**: Navigate to the original repository and create a pull request from your branch.


## Credits

InventoryAI is developed and maintained by [Dev Huddle](https://github.com/dev-huddle).


