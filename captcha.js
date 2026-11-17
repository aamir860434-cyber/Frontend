/* Cloudflare Turnstile integration. The server remains authoritative. */
(() => {
  const api = (document.currentScript && document.currentScript.dataset.api) || "/api/cc";
  let widgetId = null;
  let enabled = false;
  window.captchaToken = () => enabled && window.turnstile && widgetId !== null
    ? (window.turnstile.getResponse(widgetId) || "") : "";
  window.captchaReset = () => { if (enabled && window.turnstile && widgetId !== null) window.turnstile.reset(widgetId); };
  fetch(api + "/captcha-config", { credentials: "same-origin" })
    .then(response => response.json())
    .then(config => {
      const box = document.getElementById("cf");
      if (!config.enabled || !config.siteKey || !box) return;
      enabled = true;
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.onload = () => {
        if (window.turnstile) widgetId = window.turnstile.render(box, { sitekey: config.siteKey, theme: "auto" });
      };
      document.head.append(script);
    }).catch(() => {});
})();
