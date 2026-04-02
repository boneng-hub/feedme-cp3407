
# FeedMe - Food Delivery Platform (CP3407 Project)

FeedMe is a web-based food ordering system with customer flows for registration, login, restaurant browsing, menu ordering, and order tracking.

## Team

Recommended team size in this unit: 2-4 students (5 with approval).

1. Boneng Sun (14905695)

## Local Run (Environment Variables)

Backend supports environment-based configuration for cloud readiness.

1. Copy backend/.env.example to backend/.env and fill values.
2. At minimum, set JWT_SECRET to a non-default value.
3. Start app with:
	- npm install
	- npm --prefix backend install
	- npm --prefix backend run start

Optional (production-like run with process manager):
	- npm --prefix backend run start:pm2

## Fresh Clone Quick Start (for marker/demo)

If someone downloads this repository from GitHub on a new machine, follow these steps.

1. Install prerequisites:
	- Node.js 18+ and npm
	- MySQL 8+

2. Initialize database (from repository root):
	- mysql -u root -p < feedme_utf8.sql

3. Create backend environment file:
	- cp backend/.env.example backend/.env
	- Update DB_HOST, DB_USER, DB_PASSWORD, DB_NAME if needed
	- Set a strong JWT_SECRET value

4. Install and run:
	- npm install
	- npm --prefix backend install
	- npm --prefix backend run start

5. Verify:
	- Open http://localhost:3000/index.html
	- Check health API: http://localhost:3000/api/health

Windows note:
1. If `cp` is unavailable in PowerShell, use:
	- Copy-Item backend/.env.example backend/.env

## Course-Driven Requirements

This repository is organized to satisfy both implementation and assessment expectations:

1. User stories are research-driven and cover user pain points.
2. Modern tools and cloud services are planned in a practical roadmap.
3. Iteration evidence is kept in versioned markdown files and story documents.

## Planned Scope (Before Iteration 1)

Core backlog:

1. User Registration and Login, High, 2 days
2. Browse Restaurants, High, 2 days
3. View Restaurant Menu, High, 1 day
4. Place Food Order, High, 3 days
5. Track Order Status, Medium, 2 days
6. Restaurant Menu Management, Medium, 2 days
7. Rate Restaurants, Low, 1 day

Total estimate: 13 days

## Iteration Plan

Iteration 1 (16 Feb 2026 - 8 Mar 2026):

1. User Registration and Login
2. Browse Restaurants
3. View Restaurant Menu
4. Place Food Order

Iteration 2 (9 Mar 2026 - 29 Mar 2026):

1. Track Order Status
2. Restaurant Menu Management
3. Rate Restaurants

## HD Rubric Mapping (Working Checklist)

1. Innovation and USP:
FeedMe focuses on clear order visibility, one-click reorder from order history, and a smooth customer ordering flow as a baseline USP, with optional AI recommendation extension in future work.
2. Use of Modern Tools:
Node.js + Express + MySQL implemented, with AWS deployment roadmap documented.
3. Quality of Research:
Competitor observations and personas are documented before finalizing story details.
4. Functionality and Usability:
End-to-end flow is implemented and improved for responsiveness and clarity.
5. Documentation and Presentation:
Iteration boards, user stories, and submission checklist are maintained for evidence traceability.

## Evidence Files

1. [User Stories Index](./User_stories.md)
2. [Iteration 1 Board](./iteration_1.md)
3. [Iteration 2 Board](./iteration_2.md)
4. [Market Research and Personas](./user_stories/market_research_and_personas.md)
5. [HD Submission Checklist](./user_stories/assessment_checklist_hd.md)
6. [AWS Deployment Plan](./user_stories/aws_deployment_plan.md)
7. [Deployment and Presentation Guide](./user_stories/deployment_and_presentation_guide.md)
8. [Final Submission Checklist](./user_stories/final_submission_checklist.md)

## Next Improvements

1. Complete provider-side menu management flow.
2. Add test evidence (API and end-to-end smoke test records).
3. Execute AWS deployment baseline (EC2 + RDS) and capture screenshots/logs.

## Cloud-Ready Code Implemented

1. Environment-variable based runtime and database configuration.
2. Health endpoint (`/api/health`) with status and uptime metadata.
3. Database pool sizing via `DB_CONN_LIMIT`.
4. Configurable CORS policy via `CORS_ORIGIN`.
5. PM2 process config for EC2 (`backend/ecosystem.config.cjs`).


