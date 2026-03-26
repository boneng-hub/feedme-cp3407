# Market Research and Personas

## 1. Research Summary

Reference services reviewed:

1. TaskRabbit
2. Handy
3. Thumbtack
4. Common food delivery flows (FoodPanda/Uber Eats style menu and order tracking)

Observed strengths:

1. Fast booking/order flows
2. Transparent status updates
3. Ratings and trust indicators

Observed weaknesses and opportunity gaps:

1. Complex navigation in some multi-step flows
2. Inconsistent feedback after submitting requests/orders
3. Weak personalization for repeat users

FeedMe direction based on research:

1. Keep order journey short and explicit
2. Make order state visible in one page (my-orders)
3. Use clear, beginner-friendly UI and validation messages

## 2. Personas

### Persona A: Busy Professional (End User)

- Goal: Order food quickly between work tasks
- Pain points: Too many steps, unclear order status, slow checkout
- Story impact: Prioritize simple browse-menu-order flow and concise order history

### Persona B: Family Planner (End User)

- Goal: Repeat orders from trusted places
- Pain points: Hard to compare options, limited clarity on previous items
- Story impact: Keep restaurant list clear and show itemized order details

### Persona C: Small Restaurant Operator (Service Provider Perspective)

- Goal: Receive correct orders and prepare efficiently
- Pain points: Missing item details, inconsistent quantity data
- Story impact: Validate order payload and persist order_items reliably

## 3. USP Candidate

Primary USP for this project stage:

- Reliable itemized ordering flow with clear post-order visibility.

Potential extension USP (future iteration):

- Basic recommendation layer (repeat favorites / frequent items).

## 4. Modern Tools and Cloud Plan

Current implementation stack:

1. Frontend: HTML, CSS, Bootstrap, vanilla JavaScript
2. Backend: Node.js + Express
3. Database: MySQL
4. Collaboration: Git + GitHub

Cloud roadmap (AWS):

1. EC2 for backend hosting
2. RDS for MySQL managed database
3. S3 for static assets and evidence artifacts
4. Optional Cognito for managed authentication in future upgrade

## 5. Evidence to Keep for Marking

1. API screenshots/logs for key routes
2. Iteration board updates with completion status
3. User story to implementation mapping
4. Demo steps for end-to-end flow
