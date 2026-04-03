# HD Submission Checklist

Use this file as the final rubric-to-evidence checklist before submission.

## 1. Rubric to Evidence Mapping

### Innovation and USP

- [x] USP is explicitly stated in README.
Evidence: README.md
- [x] USP is demonstrable in product behavior (one-click reorder from order history).
Evidence: public/my-orders.html
- [x] USP is linked to identified pain points from research.
Evidence: user_stories/market_research_and_personas.md

### Use of Modern Tools and Cloud Services

- [x] Current stack and engineering tools are documented and match implementation.
Evidence: README.md
- [x] Environment-variable based backend configuration is implemented.
Evidence: backend/server.js, backend/.env.example
- [x] Cloud deployment path is concrete and reproducible (EC2 + RDS).
Evidence: user_stories/aws_deployment_plan.md

### Quality of Research and User Stories

- [x] Similar services are analyzed with strengths, weaknesses, and gap opportunities.
Evidence: user_stories/market_research_and_personas.md
- [x] Personas include end-user and provider-side perspectives.
Evidence: user_stories/market_research_and_personas.md
- [x] Stories map to real pages/APIs.
Evidence: User_stories.md, backend/server.js, public/*.html

### Functionality and Usability

- [x] End-to-end core flow works (register -> login -> browse -> menu -> place order -> my-orders).
Evidence: user_stories/demo_runbook.md
- [x] Itemized order persistence is reliable.
Evidence: backend/server.js, public/my-orders.html
- [x] Common failure handling is explained and testable.
Evidence: user_stories/deployment_and_presentation_guide.md

### Documentation and Presentation

- [x] README and index files provide complete navigation for marker review.
Evidence: README.md, User_stories.md
- [x] Iteration boards reflect implemented scope and progress.
Evidence: iteration_1.md, iteration_2.md
- [x] Demo speaking flow and troubleshooting guide are prepared.
Evidence: user_stories/deployment_and_presentation_guide.md
- [x] AI prompt log and evidence pages are available for assessment traceability.
Evidence: user_stories/ai_prompts_and_tool_log.md, user_stories/testing_evidence.md, user_stories/cloud_evidence_log.md

## 2. Demo Action Checklist (Live)

- [x] Show health endpoint success (`/api/health`).
- [x] Register and login with a fresh account.
- [x] Browse restaurants and open one menu.
- [x] Add multiple items with quantity changes and place order.
- [x] Show my-orders itemized details and run one-click reorder.
- [x] Explain one engineering quality point (transaction + input validation).
- [x] Explain one cloud readiness point (env config + AWS plan).

## 3. Submission Packaging Checklist

- [x] README links are valid.
- [x] User_stories.md links are valid.
- [x] Required evidence files are present in repository.
- [x] No temporary or private secrets are committed.
- [ ] Demo recording follows the runbook sequence.

## 4. Last 5-Minute Risk Check

- [x] Backend starts without syntax/runtime startup errors.
- [x] Correct port is used (3000 default or configured alternative).
- [x] Database connectivity verified via `/api/health`.
- [x] Login token flow works for protected pages.
- [x] Reorder works for orders that include item details.
