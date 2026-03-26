# Deployment and Presentation Guide

This guide is for final submission and live demo speaking points.

## 1. Configuration Checklist

1. Copy backend/.env.example to backend/.env.
2. Set JWT_SECRET to a strong value.
3. Confirm DB_HOST, DB_USER, DB_PASSWORD, DB_NAME are correct.
4. If port 3000 is occupied, set PORT to 3100 (or another free port).

## 2. Startup Commands

1. In project root: npm install
2. In backend: npm install
3. Start server: npm --prefix backend run start
4. Health check:
   - http://localhost:3000/api/health
   - or http://localhost:3100/api/health if alternate port is used

## 3. What to Say During Demo (Short Script)

1. Problem: users need quick and reliable ordering.
2. Solution: FeedMe provides an end-to-end flow from login to itemized order history.
3. USP: one-click reorder from order history and reliable item-level persistence.
4. Engineering quality:
   - input validation and transaction handling in order API
   - environment variable based deployment configuration
   - health endpoint for operational checks
5. Cloud readiness: EC2 + RDS deployment plan is documented and actionable.

## 4. Proof Points to Show Marker

1. Register and login flow works.
2. Restaurant and menu data load from backend.
3. Place order with multiple items and quantities.
4. My-orders shows itemized details and supports reorder.
5. Health endpoint returns status ok with connected database.

## 5. Common Troubleshooting

1. Cannot GET /api/health on 3000:
   - Another app may already use port 3000.
   - Run with PORT=3100 and test /api/health on 3100.
2. Login/register fails with server error:
   - Check database credentials in backend/.env.
   - Confirm MySQL service is running.
3. Reorder fails:
   - Ensure original order contains item details.
   - Confirm restaurant_id exists in restaurants table.

## 6. Submission Packaging

1. Include README, iteration boards, user stories, and assessment evidence files.
2. Ensure links in User_stories.md are valid.
3. Record short demo video using the same flow as this guide.
