Node.js Demo App CI/CD Pipeline

This repository contains a simple Node.js Express application and a GitHub Actions workflow to implement a full Continuous Integration/Continuous Deployment (CI/CD) pipeline.

The pipeline automates the following steps:

Continuous Integration (CI): Installs dependencies and runs defined tests whenever code is pushed to the main branch.

Continuous Deployment (CD): If CI passes, it logs into Docker Hub, builds the Docker image, tags it, and pushes it to the Docker Hub registry.

The workflow is divided into two main jobs:

1. build-and-test (CI)

Trigger: Runs on every push to the main branch.

Steps: Checks out the code, sets up Node.js 20, installs dependencies, and runs npm test.

2. docker-build-and-push (CD)

Dependency: Only runs if the build-and-test job is successful.

Steps:

Logs into Docker Hub using secrets.

Builds the Docker image based on the Dockerfile.

Tags the image with the latest commit SHA and the latest tag.

Pushes the built image to the configured Docker Hub repository.

Setup Instructions
To make this pipeline fully functional, you must perform two steps in your GitHub repository:

1. Update Docker Repository Name<img width="1919" height="1079" alt="Screenshot 2025-10-20 175117" src="https://github.com/user-attachments/assets/f388d868-b938-4844-b5e5-6b98fd07152d" />
<img width="1919" height="1079" alt="Screenshot 2025-10-20 175029" src="https://github.com/user-attachments/assets/09022490-ab30-49cb-84f9-72968511ef59" />


In the .github/workflows/main.yml file, change the placeholder repository name in the env section:

env:
  DOCKER_REPO: your-dockerhub-username/nodejs-demo-app # <--- CHANGE THIS


2. Configure GitHub Secrets

You need to add two repository secrets for Docker Hub authentication:

DOCKER_USERNAME: Your Docker Hub username.

DOCKER_PASSWORD: Your Docker Hub access token (recommended over your password).

These are configured in your GitHub repository under Settings > Secrets and variables > Actions.

