# Workflow Course Assignment

## Goal
The objective of this assignment is to apply the skills and knowledge gained during the workflow course to enhance the quality of a software package. You will achieve this by configuring tools, creating workflows, and defining tests that improve the efficiency of the development process.

## Brief
Quality Assurance (QA) is an essential practice throughout the software development lifecycle. Often, a Minimum Viable Product (MVP) is built first, and then its quality is improved later. In this assignment, you will work individually to improve the quality of an existing application by implementing various development workflows and creating a comprehensive testing strategy. This includes configuring tools, identifying bugs, and creating tests.

## Process

### 1. Fork the Project Repository
- Start by creating a fork in your GitHub account.

### 2. Create a New Branch
- Name this branch `workflow` for easy identification.
- Use sub-branches for each task or group of tasks, such as:
  - `workflow-tools`, `workflow-testing`, `workflow-fixes`.
- Keep all changes in the `workflow` branch to maintain consistency for the Pull Request (PR). If you use sub-branches, make sure they are merged into the `workflow` branch.

### 3. Set Up Development Tools
- Configure the **ESLint** and **Prettier** packages, including npm commands to lint and format code.
- Set up **commit hooks** to ensure code is checked before being committed.

### 4. Set Up Testing Tools
- Configure **Jest** for unit testing:
  1. Test that the **login function** stores a token when provided with valid credentials.
  2. Test that the **logout function** clears the token from browser storage.
- Configure **Cypress** for end-to-end testing:
  1. Test that a user can **log in** using the login form with valid credentials.
  2. Ensure a user cannot submit the login form with **invalid credentials** and is shown an error message.
  3. Test that a user can **log out** with the logout button.

### 5. Submit Your Work
- Open a **Pull Request (PR)** from the `workflow` branch to your default branch. Do not create a PR into the upstream repository.
- **Do not merge the PR**.
- Request a **review from peers**, incorporate feedback, and make necessary changes.
- Submit your PR link via Moodle or Teams according to your study plan.

## Delivery Instructions
- You must deliver an open PR link from the `workflow` branch into your fork’s default branch.
- There is no requirement to host the forked project.

## Important Notes
- **Test Failure**: A well-written test may still fail if the project does not meet expectations. For example, if the project does not show user error messages, the related test should fail. Writing tests that always pass is **not** the purpose of this assignment.
- **Issues**: You may encounter bugs while working on the project. If a test is failing, create a new **Issue** to notify the project owner. If you wish to fix a bug, do so in a separate PR, e.g., from the `workflow-fixes` branch.

## Resources
- **Noroff Social Media Application**: [GitHub Repository](https://github.com/NoroffFEU/social-media-client)
