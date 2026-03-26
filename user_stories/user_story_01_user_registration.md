# User Story Title: User Registration and Login

Keep any other versions here as well, e.g. Sign up, Create account, User authentication.

---

## Priority: 1 (Iteration-1 essential feature)

This feature is required before users can place orders.
It is one of the highest priority items in Iteration-1.

---

## Estimation: 2 days

Planning Poker estimation:

* Developer: 2 days (estimated before Iteration-1)

Breakdown:
- Frontend form design: 0.5 day
- Backend validation logic: 1 day
- Database integration: 0.5 day

---

## Assumptions:

- Users have a valid email address
- Users have internet access
- The system has access to a user database

---

## Description:

Description-v1:
The system allows new users to register an account using email and password.  
Registered users can log in securely to access their personal account and place food orders.

The login system will validate user credentials and redirect users to their dashboard upon successful login.

---

## Tasks (Iteration-1):

1. Design registration form (email, password fields) – 0.5 days  
2. Implement form validation (empty fields, password length) – 0.5 days  
3. Create backend API for user registration – 0.5 days  
4. Store user data securely in database – 0.5 days  
5. Implement login authentication logic – 0.5 days  

---

# UI Design:

Implemented pages:
- `public/register.html`
- `public/login.html`

Implemented components:
- Username and password input fields with validation
- Register and Login action buttons
- Navigation between login, register, and home pages
- Error/success message area for user feedback
- Responsive Bootstrap card-based layout

---

# Completed:

Screens/evidence available from current implementation:

- `backend/server.js`: `/register` and `/login` routes implemented
- `public/register.js`: registration request handling and feedback
- `public/script.js`: login request, token storage, and redirect logic
- `public/login.html` and `public/register.html`: usable responsive UI flow

Suggested screenshot list for report:
- Registration page with form fields and submit action
- Successful registration feedback and redirect to login
- Successful login redirect to restaurant browsing page
