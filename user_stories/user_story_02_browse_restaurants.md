# User Story Title: Browse Restaurants

Keep any other versions here as well, e.g. View restaurants list, Explore food options.

---

## Priority: 2 (Iteration-1 core feature)

Users must be able to browse available restaurants before placing an order.
This is a core functionality of the system.

---

## Estimation: 2 days

Planning Poker estimation:

* Developer: 2 days (estimated before Iteration-1)

Breakdown:
- Design restaurant listing UI: 0.5 day
- Create backend endpoint for fetching restaurants: 0.5 day
- Connect frontend to backend API: 0.5 day
- Display restaurant details (name, rating, category): 0.5 day

---

## Assumptions:

- Restaurant data already exists in the database
- Users are logged in before browsing

---

## Description:

Description-v1:
The system will display a list of available restaurants to users.
Each restaurant will show basic information including name, rating, and food category.

Users can click on a restaurant to view its detailed menu.

---

## Tasks (Iteration-1):

1. Design restaurant listing page layout – 0.5 days  
2. Implement backend API to fetch restaurant data – 0.5 days  
3. Display restaurant list dynamically – 0.5 days  
4. Implement navigation to restaurant detail page – 0.5 days  

---

# UI Design:

Implemented page: `public/restaurants.html`

Implemented components:
- Restaurant list rendered from backend API
- Clickable list items with clear name/location display
- Protected page behavior (requires login token)
- Navigation actions (my orders and logout)
- Responsive Bootstrap layout for desktop and mobile

---

# Completed:

Screens/evidence available from current implementation:

- `backend/server.js`: `/api/restaurants` endpoint returns restaurant list
- `public/restaurants.html`: dynamic rendering and click-to-menu navigation
- Restaurant selection stored in localStorage for menu flow
- Error feedback implemented when API cannot load data

Suggested screenshot list for report:
- Restaurant list loaded with multiple entries
- Clicking a restaurant and redirecting to menu page
- Login guard behavior when token is missing
