# HD Submission Checklist

Use this file as the final rubric-to-evidence checklist before submission.

## 1. Rubric to Evidence Mapping

### Innovation and USP

- [ ] USP is explicitly stated in README.
Evidence: README.md
- [ ] USP is demonstrable in product behavior (one-click reorder from order history).
Evidence: public/my-orders.html
- [ ] USP is linked to identified pain points from research.
Evidence: user_stories/market_research_and_personas.md

### Use of Modern Tools and Cloud Services

- [ ] Current stack and engineering tools are documented and match implementation.
Evidence: README.md
- [ ] Environment-variable based backend configuration is implemented.
Evidence: backend/server.js, backend/.env.example
- [ ] Cloud deployment path is concrete and reproducible (EC2 + RDS).
Evidence: user_stories/aws_deployment_plan.md

### Quality of Research and User Stories

- [ ] Similar services are analyzed with strengths, weaknesses, and gap opportunities.
Evidence: user_stories/market_research_and_personas.md
- [ ] Personas include end-user and provider-side perspectives.
Evidence: user_stories/market_research_and_personas.md
- [ ] Stories map to real pages/APIs.
Evidence: User_stories.md, backend/server.js, public/*.html

### Functionality and Usability

- [ ] End-to-end core flow works (register -> login -> browse -> menu -> place order -> my-orders).
Evidence: user_stories/demo_runbook.md
- [ ] Itemized order persistence is reliable.
Evidence: backend/server.js, public/my-orders.html
- [ ] Common failure handling is explained and testable.
Evidence: user_stories/deployment_and_presentation_guide.md

### Documentation and Presentation

- [ ] README and index files provide complete navigation for marker review.
Evidence: README.md, User_stories.md
- [ ] Iteration boards reflect implemented scope and progress.
Evidence: iteration_1.md, iteration_2.md
- [ ] Demo speaking flow and troubleshooting guide are prepared.
Evidence: user_stories/deployment_and_presentation_guide.md

## 2. Demo Action Checklist (Live)

- [ ] Show health endpoint success (`/api/health`).
- [ ] Register and login with a fresh account.
- [ ] Browse restaurants and open one menu.
- [ ] Add multiple items with quantity changes and place order.
- [ ] Show my-orders itemized details and run one-click reorder.
- [ ] Explain one engineering quality point (transaction + input validation).
- [ ] Explain one cloud readiness point (env config + AWS plan).

## 3. Submission Packaging Checklist

- [ ] README links are valid.
- [ ] User_stories.md links are valid.
- [ ] Required evidence files are present in repository.
- [ ] No temporary or private secrets are committed.
- [ ] Demo recording follows the runbook sequence.

## 4. Last 5-Minute Risk Check

- [ ] Backend starts without syntax/runtime startup errors.
- [ ] Correct port is used (3000 default or configured alternative).
- [ ] Database connectivity verified via `/api/health`.
- [ ] Login token flow works for protected pages.
- [ ] Reorder works for orders that include item details.
