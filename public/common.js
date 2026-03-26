const DEFAULT_API_BASE = "http://localhost:3000";

function normalizeApiBase(value) {
  return String(value || "").trim().replace(/\/$/, "");
}

function getApiBase() {
  const stored = normalizeApiBase(localStorage.getItem("apiBase"));
  if (stored) {
    return stored;
  }

  if (window.location.port === "3000") {
    return normalizeApiBase(window.location.origin);
  }

  return DEFAULT_API_BASE;
}

window.API_BASE = getApiBase();

function setApiBase(nextApiBase) {
  const normalized = normalizeApiBase(nextApiBase);
  if (!normalized) {
    return;
  }
  localStorage.setItem("apiBase", normalized);
  window.API_BASE = normalized;
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("cart");
  localStorage.removeItem("restaurantId");
  window.location.href = "/login.html";
}

function handleAuthFailure(status) {
  if (status === 401 || status === 403) {
    alert("Session expired. Please login again.");
    logout();
    return true;
  }

  return false;
}