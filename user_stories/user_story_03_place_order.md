# User Story Title: Place Order

Keep any other versions here as well, e.g. Submit order, Confirm purchase.

---

## Priority: 3 (Iteration-1 core feature)

Users must be able to place an order after selecting a restaurant.
This completes the main flow of Iteration-1.

---

## Estimation: 3 days

Planning Poker estimation:

* Developer: 3 days (estimated before Iteration-1)

Breakdown:
- Design order page UI: 1 day
- Implement cart functionality: 1 day
- Create backend order API: 0.5 day
- Save order to database: 0.5 day

---

## Assumptions:

- User is logged in
- Restaurant menu data exists
- Payment system is simulated (no real payment integration in Iteration-1)

---

## Description:

Description-v1:
The system allows users to select food items from a restaurant menu and add them to a cart.
Users can review their selected items and confirm the order.

After confirmation, the system saves the order in the database and displays an order confirmation message.

---

## Tasks (Iteration-1):

1. Design menu page layout – 0.5 days  
2. Implement add-to-cart functionality – 1 day  
3. Display cart summary – 0.5 days  
4. Implement order confirmation process – 0.5 days  
5. Store order data in database – 0.5 days  

---

# UI Design:

Implemented pages:
- `public/menu.html`
- `public/my-orders.html`

Implemented components:
- Dynamic menu list loaded from selected restaurant
- Add-to-cart controls and quantity adjustment (`+`, `-`, remove)
- Cart detail panel with per-item subtotal and total amount
- Place-order action with confirmation feedback
- My-orders page showing order history and item details

---

# Completed:

Screens/evidence available from current implementation:

- `backend/server.js`: `/api/orders` creates order and inserts `order_items`
- `backend/server.js`: `/api/my-orders` returns order list with item details
- `public/menu.html`: cart logic, total calculation, and order submission
- `public/my-orders.html`: order card rendering with itemized lines

Suggested screenshot list for report:
- Menu page with selected items in cart panel
- Successful order creation alert with order ID
- My-orders page showing newly created order and item details
