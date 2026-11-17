(() => {
  const $ = id => document.getElementById(id);
  const token = new URLSearchParams(location.search).get("token") || "";
  // Remove the bearer token from the address bar and avoid referrer leakage.
  history.replaceState(null, "", location.pathname);
  const say = (message, ok = false) => {
    $("msg").textContent = message;
    $("msg").className = "msg " + (ok ? "ok" : "err");
  };
  $("f").addEventListener("submit", async event => {
    event.preventDefault();
    if ($("pw").value !== $("pw2").value) return say("Passwords do not match.");
    if (!token) return say("This link is invalid. Ask for a new one.");
    const button = event.currentTarget.querySelector("button"); button.disabled = true;
    try {
      const response = await fetch("/api/cc/password/reset", {
        method: "POST", credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password: $("pw").value })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Could not change password");
      say("Password changed. Redirecting to login…", true);
      setTimeout(() => location.replace("login.html"), 1500);
    } catch (error) { say(error.message); }
    finally { button.disabled = false; }
  });
})();
