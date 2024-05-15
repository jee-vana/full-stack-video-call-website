# Contributing Guidelines

Thank you for your interest in contributing to this project! We welcome contributions from everyone, whether it's a bug report, a feature request, or a pull request. By following these guidelines, you'll help us maintain a consistent and high-quality codebase.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Reporting Issues](#reporting-issues)
4. [Submitting Pull Requests](#submitting-pull-requests)
5. [Coding Guidelines](#coding-guidelines)
6. [Commit Message Guidelines](#commit-message-guidelines)

## Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand the expectations for respectful and inclusive behavior.

## Getting Started

1. Fork the repository and create a new branch for your feature or bug fix.
2. Install the project dependencies by running `npm install`.
3. Make your changes and test them thoroughly.
4. Ensure that your code adheres to our [Coding Guidelines](#coding-guidelines).
5. Commit your changes with a descriptive commit message following our [Commit Message Guidelines](#commit-message-guidelines).

## Reporting Issues

If you encounter any bugs or have feature requests, please open an issue on the project's GitHub repository. When reporting an issue, please provide as much detail as possible, including:

- A clear and descriptive title
- A description of the issue or feature request
- Steps to reproduce the issue (if applicable)
- Expected behavior
- Actual behavior
- Any relevant error messages or logs
- Your environment (operating system, browser version, etc.)

## Submitting Pull Requests

1. Ensure that your code follows our [Coding Guidelines](#coding-guidelines).
2. Update the project documentation if necessary.
3. Squash your commits into a single commit with a descriptive message following our [Commit Message Guidelines](#commit-message-guidelines).
4. Open a new pull request against the `main` branch, providing a clear and descriptive title and a detailed description of the changes you've made.
5. Be prepared to address any feedback or requested changes from the project maintainers.

## Coding Guidelines

- Follow the coding style and conventions used in the project.
- Write clear and concise code with appropriate comments.
- Ensure that your code is properly formatted and adheres to the project's linting rules.
- Write unit tests for new features or bug fixes whenever possible.
- Optimize your code for performance and scalability.

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) convention for commit messages. Please structure your commit messages as follows:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- `<type>` describes the kind of change (e.g., `feat` for a new feature, `fix` for a bug fix, `docs` for documentation changes, etc.).
- `<scope>` (optional) specifies the part of the codebase affected by the change.
- `<subject>` is a brief summary of the change (maximum 50 characters, written in imperative present tense).
- `<body>` (optional) provides a more detailed description of the change and its motivation.
- `<footer>` (optional) can include additional information like issue references or breaking change notes.

Example commit message:

```
feat(authentication): add support for social login

Add support for social login with Google and Facebook. This change includes:

- New components for social login buttons
- Integration with third-party authentication providers
- Updated user flow and UI

Closes #123
```

By following these guidelines, you'll help us maintain a clean and organized commit history, making it easier to track changes and collaborate effectively.

Thank you for your contributions!