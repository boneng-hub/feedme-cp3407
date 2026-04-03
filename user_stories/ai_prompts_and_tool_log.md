# AI Prompts and Tool Log

This page records the useful prompts and assistant-assisted actions used while building FeedMe.

## 1. Purpose

The project used AI assistance to speed up planning, documentation, debugging, and deployment support.
The goal was to keep the implementation decisions human-reviewed while using AI to draft, refine, and cross-check work.

## 2. Representative Prompts Used

1. "Check whether the project can run directly after being downloaded from GitHub."
2. "Summarize the assignment requirements and compare them with the current implementation."
3. "Help me create a basic but complete cloud deployment plan for EC2 + RDS."
4. "Improve the README so a marker can start the project from a fresh clone."
5. "Check whether any secrets or node_modules are accidentally tracked by Git."
6. "Add a minimal home page redesign that matches the style of the login page."
7. "Make JWT_SECRET required so the backend does not start with a weak default secret."
8. "Create evidence pages for cloud readiness and demo testing."

## 3. Useful Outcomes

1. README now includes a fresh-clone quick start guide.
2. Backend startup uses environment configuration and fails fast when JWT_SECRET is missing.
3. Repository ignores node_modules, logs, and .env files.
4. Cloud and demo evidence pages are documented for assessment.

## 4. Why This Helps the Assessment

1. It shows a practical use of modern productivity tools.
2. It documents the decision-making support used during development.
3. It provides traceability between prompts, implementation changes, and final evidence.