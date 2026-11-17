(() => {
  const $ = id => document.getElementById(id);
  const say = (message, ok = false) => {
    $("msg").textContent = message || "";
    $("msg").className = "msg " + (ok ? "ok" : "err");
  };
  async function api(path, body) {
    const response = await fetch("/api/cc" + path, {
      method: body ? "POST" : "GET",
      credentials: "same-origin",
      headers: body ? { "Content-Type": "application/json" } : {},
      body: body ? JSON.stringify(body) : undefined
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "Request failed");
    return data;
  }
  const captcha = () => ({ captcha: window.captchaToken ? window.captchaToken() : "" });
  const resetCaptcha = () => window.captchaReset && window.captchaReset();
  let loginOtp = false;
  let signupOtp = false;

  api("/me").then(() => location.replace("index.html")).catch(() => {});

  document.querySelectorAll(".tabs button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tabs button").forEach(x => x.classList.toggle("on", x === button));
      ["login", "signup", "forgot"].forEach(id => { $(id).hidden = id !== button.dataset.t; });
      loginOtp = false; signupOtp = false;
      $("li-otp").hidden = true; $("su1").hidden = false; $("su2").hidden = true;
      say("");
    });
  });

  const submit = (form, handler) => $(form).addEventListener("submit", async event => {
    event.preventDefault();
    const buttons = [...event.currentTarget.querySelectorAll("button[type=submit],button:not([type])")];
    buttons.forEach(button => button.disabled = true);
    try { await handler(); }
    catch (error) { say(error.message); resetCaptcha(); }
    finally { buttons.forEach(button => button.disabled = false); }
  });

  submit("login", async () => {
    if (loginOtp) {
      await api("/login/verify", { identifier: $("li-id").value.trim(), otp: $("li-otp").value.trim() });
      location.replace("index.html"); return;
    }
    const result = await api("/login", {
      identifier: $("li-id").value.trim(), password: $("li-pw").value, ...captcha()
    });
    resetCaptcha();
    if (result.otpRequired) {
      loginOtp = true; $("li-otp").hidden = false; $("li-otp").focus();
      say("OTP sent to your registered email. Enter it to finish login.", true);
    } else location.replace("index.html");
  });

  submit("signup", async () => {
    if (signupOtp) {
      await api("/signup/verify", { email: $("su-email").value.trim().toLowerCase(), otp: $("su-otp").value.trim() });
      location.replace("index.html"); return;
    }
    await api("/signup", {
      name: $("su-name").value.trim(), username: $("su-user").value.trim(),
      email: $("su-email").value.trim().toLowerCase(), password: $("su-pw").value, ...captcha()
    });
    resetCaptcha(); signupOtp = true; $("su1").hidden = true; $("su2").hidden = false;
    $("su-otp").focus(); say("OTP sent. Check your inbox and spam folder.", true);
  });

  submit("forgot", async () => {
    await api("/password/link", { email: $("fp-email").value.trim().toLowerCase(), ...captcha() });
    resetCaptcha(); say("If this email has an account, a reset link was sent.", true);
  });
})();
