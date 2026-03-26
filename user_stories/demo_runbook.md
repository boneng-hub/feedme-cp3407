# Demo Runbook

Use this script during assessment demo to show a stable end-to-end flow.

## 1. Startup

1. Install dependencies:
   - root: npm install
   - backend: npm install
2. Configure environment:
   - copy backend/.env.example to backend/.env
   - set JWT_SECRET and database values
2. Start backend: npm --prefix backend run start
3. Open app at: http://localhost:3000
4. Quick health check: GET /api/health should return status ok.
5. If port 3000 is already used, run backend with PORT=3100 and use http://localhost:3100.

## 2. End-to-End Demo Flow

1. Register a new user account.
2. Login with the same account.
3. Open restaurants list and choose one restaurant.
4. Add at least two menu items and adjust quantities.
5. Place order.
6. Open my-orders and verify:
   - latest order appears first
   - item names and quantities are shown

## 3. Failure Handling Demo

1. Try opening restaurants page without login token.
2. Show redirection to login page.
3. Explain backend input validation for order payload.

## 4. Talking Points for Marker

1. Research-informed user stories are documented.
2. Iteration planning and actual evidence are tracked.
3. Core functionality is working end-to-end.
4. Backend validation and transaction handling improve reliability.
5. Cloud deployment path (AWS EC2 + RDS) is prepared for next phase.
