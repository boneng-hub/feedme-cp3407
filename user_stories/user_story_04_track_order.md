# User Story Title: Track Order Status

Keep any other versions here as well, e.g. View my order progress, Follow delivery status.

---

## Priority: 4 (Iteration-2 core feature)

Users should be able to view order progress after placing an order.
This improves trust and reduces uncertainty after checkout.

---

## Estimation: 2 days

Planning Poker estimation:

* Developer: 2 days (estimated before Iteration-2)

Breakdown:
- Design order history and status display UI: 0.5 day
- Implement backend query for user order history: 0.5 day
- Show per-order detail items in frontend: 0.5 day
- End-to-end test and bug fixes: 0.5 day

---

## Assumptions:

- User has completed at least one order
- User is logged in with valid token
- Order data exists in `orders` and `order_items` tables

---

## Description:

Description-v1:
The system displays the user's order history with itemized details.
For each order, users can view order id, total amount, and ordered items.

---

## Tasks (Iteration-2):

1. Build order history page layout – 0.5 day
2. Create backend API for fetching current user's orders – 0.5 day
3. Return and render item-level details for each order – 0.5 day
4. Validate login protection and loading/error states – 0.5 day

---

# UI Design:

Implemented page: `public/my-orders.html`

Implemented components:
- Responsive top navigation with quick action back to ordering
- Order card list rendered from `/api/my-orders`
- Order header with order ID and total amount badge
- Itemized list for each order (item name + quantity)
- Empty-state and error-state feedback for better usability

---

# Completed:

Screens/evidence available from current implementation:

- `backend/server.js`: `/api/my-orders` returns each order with `items`
- `public/my-orders.html`: renders card-based order history with item details
- Successful path tested: order creation from `menu` page appears in `my-orders`
- UI upgraded with Bootstrap responsive layout for readability

Suggested screenshot list for report:
- My Orders page showing at least two orders with item lists
- Empty state screenshot (new user with no orders)
- Error handling screenshot (token missing or API failure message)
