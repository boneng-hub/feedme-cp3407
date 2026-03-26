# User Story Title: Rate Restaurants

Keep any other versions here as well, e.g. Submit feedback, Review restaurant experience.

---

## Priority: 6 (Iteration-2 low priority feature)

Users should be able to leave feedback after completing an order.
This supports service quality improvement and better restaurant ranking.

---

## Estimation: 1 day

Planning Poker estimation:

* Developer: 1 day (estimated before Iteration-2)

Breakdown:
- Design rating and review UI concept: 0.25 day
- Define backend data model and endpoint contract: 0.25 day
- Define validation and moderation notes: 0.25 day
- Prepare test scenarios and acceptance checklist: 0.25 day

---

## Assumptions:

- Only users with completed orders can submit ratings
- Rating scale is from 1 to 5
- Review text is optional and has length limit

---

## Description:

Description-v1:
After finishing an order, users can rate the restaurant and optionally leave a short review.
Average ratings can later be shown on the restaurant listing page.

---

## Tasks (Iteration-2):

1. Design rating input UI (star selection + optional comment) – 0.25 day
2. Define rating submission API and payload format – 0.25 day
3. Define eligibility and validation rules – 0.25 day
4. Create test checklist for rating flow – 0.25 day

---

# UI Design:

Current related UI context:
- `public/my-orders.html` provides completed-order visibility, which is the entry point for future rating action.

Planned rating UI components:
- Star rating selector (1-5)
- Optional short review text input
- Submit feedback button
- Validation and success/error message display
- Restaurant average rating display on browse/list page

---

# Completed:

(Retrospective update for current scope)

- Rating requirements and acceptance criteria documented
- Dependency flow clarified: rating should only be enabled after completed order history is available
- Core prerequisite delivered: user can now view historical orders with itemized details
- Implementation kept in backlog to preserve delivery quality of higher-priority features

Suggested screenshot list for report:
- My Orders page as prerequisite evidence for post-order rating flow
- Wireframe/mockup image of proposed rating interaction
