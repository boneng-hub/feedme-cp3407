# User Story Title: Restaurant Menu Management

Keep any other versions here as well, e.g. Manage menu items, Update restaurant offerings.

---

## Priority: 5 (Iteration-2 medium feature)

Restaurant-side menu management is needed to keep offerings current and accurate.
This supports long-term maintainability of restaurant content.

---

## Estimation: 2 days

Planning Poker estimation:

* Developer: 2 days (estimated before Iteration-2)

Breakdown:
- Design provider-side menu management flow: 0.5 day
- Plan CRUD endpoints and data validation rules: 0.5 day
- Define role/permission assumptions for provider actions: 0.5 day
- Prepare integration and test checklist: 0.5 day

---

## Assumptions:

- Provider accounts and roles will be added in later scope
- Menu data is stored in database table `menu_items`
- Provider menu management is staged after customer-facing MVP

---

## Description:

Description-v1:
Restaurants should be able to add, edit, and remove menu items.
Each item should include name, price, and availability-related details.

---

## Tasks (Iteration-2):

1. Draft menu management UI wireframe for provider dashboard – 0.5 day
2. Define backend API contract for add/edit/delete menu item – 0.5 day
3. Document validation rules (empty fields, price format) – 0.5 day
4. Create test scenarios for provider-side menu updates – 0.5 day

---

# UI Design:

Implemented customer-side menu interface page: `public/menu.html`

Implemented components in current scope:
- Dynamic menu list loaded from `/api/menu/:restaurantId`
- Add-to-cart actions per menu item
- Cart panel with quantity controls (`+`, `-`, remove)
- Live subtotal and total updates
- Place-order action posting order + itemized details

Planned provider-side components (next increment):
- Add item form
- Edit/Delete controls
- Provider menu list management dashboard

---

# Completed:

(Retrospective update for current scope)

- Backend menu retrieval endpoint `/api/menu/:restaurantId` implemented
- Customer-facing menu and cart workflow implemented and tested
- Itemized order payload (`items`) integrated into order creation flow
- Provider-side CRUD endpoints and UI remain backlog items for future iteration

Suggested screenshot list for report:
- Menu page with dynamic items loaded
- Cart panel showing quantity controls and total update
- Successful order confirmation from menu page
