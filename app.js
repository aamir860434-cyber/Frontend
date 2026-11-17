const $ = id => document.getElementById(id);
const h = (t, p = {}, ...k) => {
  const e = document.createElement(t);
  for (const [a, v] of Object.entries(p)) { if (a === "class") e.className = v; else if (a.startsWith("on")) e[a] = v; else if (v !== false && v != null) e.setAttribute(a, v); }
  k.flat().forEach(c => { if (c != null && c !== false) e.append(c instanceof Node ? c : document.createTextNode(c)); });
  return e;
};
const P = {
 plane: '<path d="M21.5 3 2.5 10.6l6.2 2.2L18 6.5l-7.2 7.7v5.3l3-3.3 4.5 1.6z" fill="currentColor" stroke="none"/>',
 search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
 more: '<g fill="currentColor" stroke="none"><circle cx="12" cy="5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="19" r="1.7"/></g>',
 back: '<path d="M15 5l-7 7 7 7"/>', chev: '<path d="M9 5l7 7-7 7"/>', arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
 phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
 video: '<rect x="2" y="6" width="14" height="12" rx="3"/><path d="m22 8-6 4 6 4z"/>',
 smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14.5s1.5 2 4 2 4-2 4-2M9 9.5h.01M15 9.5h.01"/>',
 clip: '<path d="m21 11.5-8.6 8.6a5.5 5.5 0 0 1-7.8-7.8l8.6-8.6a3.7 3.7 0 0 1 5.2 5.2l-8.6 8.6a1.8 1.8 0 0 1-2.6-2.6l7.9-7.9"/>',
 camera: '<path d="M4 8h3l1.5-2.5h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>',
 mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
 send: '<path d="M21 3 10 14M21 3l-7 18-4-7-7-4z"/>', plus: '<path d="M12 5v14M5 12h14"/>',
 chats: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
 storyplus: '<circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="M12 7v10M7 12h10" stroke="#fff"/>',
 gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
 user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>', userplus: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6"/>',
 block: '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>', flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
 bell: '<path d="M18 16V11a6 6 0 0 0-12 0v5l-2 2h16zM10 21h4"/>', lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
 box: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18"/>', help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7M12 17h.01"/>',
 info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>', x: '<path d="M6 6l12 12M18 6 6 18"/>', image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="1.5"/><path d="m21 15-5-5L5 21"/>',
 type: '<path d="M5 6V4h14v2M12 4v16M9 20h6"/>', pencil: '<path d="M4 20l4-1L19 8a2.1 2.1 0 0 0-3-3L5 16z"/>', download: '<path d="M12 4v12m0 0-5-5m5 5 5-5M4 20h16"/>',
 check: '<path d="m5 12 5 5 9-10"/>', checks: '<path d="m2 12.5 4.5 4.5L15 7M10 15l2 2 9-10"/>'
};
const svg = n => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + (P[n] || "") + '</svg>';
const ico = n => { const e = document.createElement("span"); e.className = "ico"; e.innerHTML = svg(n); return e; };
document.querySelectorAll("[data-i]").forEach(e => { e.classList.add("ico"); e.innerHTML = svg(e.dataset.i); });
async function api(path, body) {
  const r = await fetch("/api/cc" + path, { method: body ? "POST" : "GET", headers: body ? { "Content-Type": "application/json" } : {}, body: body ? JSON.stringify(body) : undefined });
  const d = await r.json().catch(() => ({}));
  if (r.status === 401) { location.replace("login.html"); throw new Error("Please login"); }
  if (!r.ok) throw new Error(d.error || "Error " + r.status);
  return d;
}
let toastT;
function toast(t) { const e = $("toast"); e.textContent = t; e.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => e.hidden = true, 3500); }
const fail = e => toast(e.message || String(e));
const canon = e => { let [l, d] = String(e).toLowerCase().split("@"); if (!d) return String(e).toLowerCase(); l = l.split("+")[0]; if (d === "googlemail.com") d = "gmail.com"; if (d === "gmail.com") l = l.replace(/\./g, ""); return l + "@" + d; };

/* ========== E2EE (ECDH P-256 + AES-GCM) ==========
   Private key never leaves the device (IndexedDB).
   Server only stores ciphertext + public keys.
*/
const E2EE = (() => {
  const DB = "cc-e2ee-v1", STORE = "keys";
  const b64 = buf => btoa(String.fromCharCode(...new Uint8Array(buf)));
  const fromB64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  const peerCache = new Map(); // userId → CryptoKey (AES)
  let registered = false;
  const accountPrefix = () => "user:" + String(window.me && window.me.id || "legacy") + ":";
  const peerPinKey = userId => accountPrefix() + "peer:" + String(userId);

  function openDB() {
    return new Promise((res, rej) => {
      const r = indexedDB.open(DB, 1);
      r.onupgradeneeded = () => r.result.createObjectStore(STORE);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }
  async function idbGet(key) {
    const db = await openDB();
    return new Promise((res, rej) => {
      const t = db.transaction(STORE, "readonly").objectStore(STORE).get(key);
      t.onsuccess = () => res(t.result);
      t.onerror = () => rej(t.error);
    });
  }
  async function idbSet(key, val) {
    const db = await openDB();
    return new Promise((res, rej) => {
      const t = db.transaction(STORE, "readwrite").objectStore(STORE).put(val, key);
      t.onsuccess = () => res();
      t.onerror = () => rej(t.error);
    });
  }
  async function idbDelete(key) {
    const db = await openDB();
    return new Promise((res, rej) => {
      const t = db.transaction(STORE, "readwrite").objectStore(STORE).delete(key);
      t.onsuccess = () => res();
      t.onerror = () => rej(t.error);
    });
  }

  async function generateAndStore(prefix) {
    // WebCrypto's generated pair must briefly be exportable to obtain the public
    // key. Import the private component immediately as non-extractable, and
    // persist only that CryptoKey (never persist raw PKCS#8 bytes).
    const pair = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveKey", "deriveBits"]);
    const spki = await crypto.subtle.exportKey("spki", pair.publicKey);
    const pkcs = await crypto.subtle.exportKey("pkcs8", pair.privateKey);
    const privateKey = await crypto.subtle.importKey("pkcs8", pkcs, { name: "ECDH", namedCurve: "P-256" }, false, ["deriveKey", "deriveBits"]);
    const publicKey = b64(spki);
    await idbSet(prefix + "private", privateKey);
    await idbSet(prefix + "public", publicKey);
    return { publicKey, privateKey };
  }

  async function loadPrivate(prefix) {
    const raw = await idbGet(prefix + "private");
    if (!raw) return null;
    // Migrate old installations that stored a base64 PKCS#8 private key.
    if (typeof raw === "string") {
      const migrated = await crypto.subtle.importKey("pkcs8", fromB64(raw), { name: "ECDH", namedCurve: "P-256" }, false, ["deriveKey", "deriveBits"]);
      await idbSet(prefix + "private", migrated);
      return migrated;
    }
    if (raw.type !== "private" || raw.extractable !== false) throw new Error("Stored private key is not protected");
    return raw;
  }

  async function loadPublicLocal(prefix) {
    return (await idbGet(prefix + "public")) || null;
  }

  async function ensureKeys() {
    const prefix = accountPrefix();
    let priv = await loadPrivate(prefix);
    let pub = await loadPublicLocal(prefix);
    // One-time migration of the previous shared browser key into the first
    // signed-in account namespace. Future accounts get independent keys.
    if (!priv && !pub) {
      const legacyPrivate = await idbGet("private");
      const legacyPublic = await idbGet("public");
      if (legacyPrivate && legacyPublic) {
        if (typeof legacyPrivate === "string") {
          priv = await crypto.subtle.importKey("pkcs8", fromB64(legacyPrivate), { name: "ECDH", namedCurve: "P-256" }, false, ["deriveKey", "deriveBits"]);
        } else priv = legacyPrivate;
        pub = legacyPublic;
        await idbSet(prefix + "private", priv);
        await idbSet(prefix + "public", pub);
        await idbDelete("private");
        await idbDelete("public");
      }
    }
    if (!priv || !pub) {
      const g = await generateAndStore(prefix);
      priv = g.privateKey;
      pub = g.publicKey;
    }
    // Registration failure is fatal for E2EE; never continue with a key the
    // server has not confirmed as this account's immutable identity key.
    await api("/keys", { publicKey: pub });
    registered = true;
    return { privateKey: priv, publicKey: pub };
  }

  async function importPeerPublic(b64Key) {
    return crypto.subtle.importKey("spki", fromB64(b64Key), { name: "ECDH", namedCurve: "P-256" }, false, []);
  }

  async function deriveShared(privateKey, peerPublicKey) {
    return crypto.subtle.deriveKey(
      { name: "ECDH", public: peerPublicKey },
      privateKey,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
  }

  async function getSharedFor(userId) {
    if (!registered) throw new Error("Your secure identity key is not registered. Reload or sign in again.");
    const r = await api("/keys/" + userId);
    if (!r.publicKey) return null;
    const pubStr = r.publicKey;
    // Trust-on-first-use pinning: a changed key is never silently accepted.
    // This does not authenticate the very first key; users still need an
    // out-of-band fingerprint check for protection against first-contact MITM.
    const pinned = await idbGet(peerPinKey(userId));
    if (pinned && pinned !== pubStr) throw new Error("Contact security key changed. Verify their safety fingerprint before messaging.");
    if (!pinned) await idbSet(peerPinKey(userId), pubStr);
    if (peerCache.has(userId)) return peerCache.get(userId);
    const priv = await loadPrivate(accountPrefix());
    if (!priv) return null;
    const peerPub = await importPeerPublic(pubStr);
    const shared = await deriveShared(priv, peerPub);
    peerCache.set(userId, shared);
    return shared;
  }

  async function encrypt(userId, plaintext) {
    const key = await getSharedFor(userId);
    if (!key) return null;
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const enc = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(plaintext));
    return { ciphertext: b64(enc), iv: b64(iv), e2ee: true };
  }

  async function decrypt(userId, ciphertext, iv) {
    if (!ciphertext || !iv) return null;
    try {
      const key = await getSharedFor(userId);
      if (!key) return null;
      const dec = await crypto.subtle.decrypt({ name: "AES-GCM", iv: fromB64(iv) }, key, fromB64(ciphertext));
      return new TextDecoder().decode(dec);
    } catch {
      return null; // wrong key / corrupted
    }
  }

  /** Encrypt raw file bytes (ArrayBuffer/Uint8Array) with the shared AES-GCM key. */
  async function encryptBytes(userId, bytes) {
    const key = await getSharedFor(userId);
    if (!key) return null;
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const data = bytes instanceof ArrayBuffer ? bytes : bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
    const enc = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, data);
    return { ciphertext: new Uint8Array(enc), iv: b64(iv) };
  }

  /** Decrypt ciphertext bytes → ArrayBuffer (for blob/URL creation). */
  async function decryptBytes(userId, ciphertextBytes, ivB64) {
    if (!ciphertextBytes || !ivB64) return null;
    try {
      const key = await getSharedFor(userId);
      if (!key) return null;
      const iv = fromB64(ivB64);
      const buf = ciphertextBytes instanceof ArrayBuffer ? ciphertextBytes : ciphertextBytes.buffer.slice(ciphertextBytes.byteOffset, ciphertextBytes.byteOffset + ciphertextBytes.byteLength);
      return await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, buf);
    } catch {
      return null;
    }
  }

  /** Safety number (fingerprint) for out-of-band verification — Signal-style first-contact protection. */
  async function safetyNumber(userId) {
    const myPub = await loadPublicLocal(accountPrefix());
    let peerPub = await idbGet(peerPinKey(userId));
    if (!peerPub) {
      try {
        const r = await fetch("/api/cc/keys/" + userId, { credentials: "include" });
        if (r.ok) {
          const j = await r.json();
          peerPub = j.publicKey || j.key;
        }
      } catch { /* ignore */ }
    }
    if (!myPub || !peerPub) return null;
    const a = myPub < peerPub ? myPub + peerPub : peerPub + myPub;
    const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(a));
    const hex = [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, "0")).join("");
    // Group into readable blocks like Signal safety numbers
    const digits = (BigInt("0x" + hex) % (10n ** 60n)).toString().padStart(60, "0");
    return digits.replace(/(\d{5})/g, "$1 ").trim();
  }

  function clearCache() { peerCache.clear(); registered = false; }

  return { ensureKeys, encrypt, decrypt, encryptBytes, decryptBytes, safetyNumber, getSharedFor, clearCache, loadPublicLocal };
})();
function confirmBox(text, yes) {
  return new Promise(res => { const d = $("dlg"); d.textContent = ""; d.className = ""; let out = false;
    d.append(h("h3", {}, "Are you sure?"), h("p", {}, text), h("div", { class: "dbtn" }, h("button", { class: "btn gray", onclick: () => d.close() }, "Cancel"), h("button", { class: "btn red", onclick: () => { out = true; d.close(); } }, yes)));
    d.onclose = () => res(out); d.showModal(); });
}
function formModal(title, nodes, okText, onOk) {
  const d = $("dlg"); d.textContent = ""; d.className = ""; d.onclose = null;
  d.append(h("h3", {}, title), ...nodes, h("div", { class: "dbtn" }, h("button", { class: "btn gray", onclick: () => d.close() }, "Cancel"),
    h("button", { class: "btn", onclick: async ev => { ev.target.disabled = true; try { if ((await onOk()) !== false) d.close(); } catch (e) { fail(e); } ev.target.disabled = false; } }, okText)));
  d.showModal();
}
/* Back button support (screen button + phone/browser back) */
const small = () => window.innerWidth <= 820;
function pushView() { if (!(history.state && history.state.v)) history.pushState({ v: 1 }, ""); }
function doBack() { $("pmenu").hidden = true; if (tab === "profile") return setTab(profFrom === "settings" ? "settings" : "chats"); if (tab === "settings") return setTab("chats"); document.body.classList.remove("chat-open"); renderList(); }
function goBack() { if (history.state && history.state.v) history.back(); else doBack(); }
window.addEventListener("popstate", doBack);

let profFrom = "", imported = null, stories = [], swReg = null, me, convs = [], contacts = [], callsList = [], active = null, msgs = [], more = false, tab = "chats", replyTo = null, missed = 0, searchTerm = "", typingT = 0;
const hue = s => [...s].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
const avatar = (u, cls = "") => {
  const d = h("div", { class: "av " + cls, style: `background:hsl(${hue(u.name || "?")},55%,45%)` });
  if (u.avatar) d.append(h("img", { src: u.avatar, alt: "" })); else d.textContent = (u.name || "?").trim().slice(0, 1).toUpperCase();
  if (u.online) d.append(h("span", { class: "dot" }));
  return d;
};
const tm = d => new Date(d).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
function when(d) {
  const x = new Date(d), n = new Date(), y = new Date(Date.now() - 864e5);
  if (x.toDateString() === n.toDateString()) return tm(x);
  if (x.toDateString() === y.toDateString()) return "Yesterday";
  return x.toLocaleDateString([], { day: "numeric", month: "short" });
}
const dayLabel = d => { const x = new Date(d); if (x.toDateString() === new Date().toDateString()) return "Today"; if (x.toDateString() === new Date(Date.now() - 864e5).toDateString()) return "Yesterday"; return x.toLocaleDateString([], { day: "numeric", month: "long", year: "numeric" }); };
const statusText = u => u.online ? "Online" : (u.lastSeen ? "Last seen " + when(u.lastSeen) + (new Date(u.lastSeen).toDateString() === new Date().toDateString() ? "" : ", " + tm(u.lastSeen)) : "");
const convOf = id => convs.find(c => c.user.id === id);
const updBadges = () => { const n = convs.reduce((a, c) => a + (c.unread || 0), 0); $("nchats").textContent = n; $("nchats").hidden = !n; $("nbell").textContent = missed; $("nbell").hidden = !missed; };

/* ---------- lists ---------- */
async function loadConvs() { convs = (await api("/conversations")).conversations; }
function renderList() {
  const lb = $("lb"); lb.textContent = ""; $("lt").textContent = { chats: "Messages", contacts: "Contacts", calls: "Calls" }[tab] || ""; $("lh").dataset.t = tab;
  const q = $("gs").value.trim().toLowerCase();
  if (tab === "chats") {
    const rows = convs.filter(c => !q || c.user.name.toLowerCase().includes(q) || c.user.username.includes(q) || (c.last.text || "").toLowerCase().includes(q));
    if (!rows.length) lb.append(h("div", { class: "empty" }, "No chats yet. Tap the search icon to find people."));
    rows.forEach(c => lb.append(h("div", { class: "row" + (active && active.id === c.user.id ? " on" : ""), onclick: () => openChat(c.user) },
      avatar(c.user), h("div", { class: "mid" }, h("b", {}, c.user.name), h("small", {}, (c.last.from === me.id ? "You: " : "") + (c.last.text || ""))),
      h("div", { class: "rt" }, h("span", {}, c.last.at ? when(c.last.at) : ""), c.unread ? h("span", { class: "badge" }, c.unread) : null))));
  } else if (tab === "contacts") {
    lb.append(h("div", { class: "crow2" }, h("button", { class: "btn gray", onclick: () => shareInvite() }, "✉️ Invite friends")));
    if (imported) {
      lb.append(h("div", { class: "hint", style: "padding:0 12px" }, "From your phone: " + imported.length + " contact(s)"));
      imported.forEach(p => {
        const msg = inviteText(), tel = (p.tels[0] || "").replace(/[^\d+]/g, ""), mail = p.emails[0];
        lb.append(h("div", { class: "row" }, avatar({ name: p.name }), h("div", { class: "mid" }, h("b", {}, p.name), p.user ? h("small", {}, "On ConnectChat · @" + p.user.username) : h("small", {}, "Not on ConnectChat yet")),
          p.user ? h("div", { class: "acts" }, h("button", { onclick: () => openChat(p.user) }, "Chat"), h("button", { onclick: async ev => { try { await api("/contacts/add", { userId: p.user.id }); ev.target.textContent = "Added ✓"; } catch (e) { fail(e); } } }, p.user.isContact ? "Added ✓" : "Add"))
            : h("div", { class: "links" }, tel ? h("a", { href: "https://wa.me/" + tel.replace("+", "") + "?text=" + encodeURIComponent(msg), target: "_blank", rel: "noopener" }, "WhatsApp") : null,
              tel ? h("a", { href: "sms:" + tel + "?body=" + encodeURIComponent(msg) }, "SMS") : null,
              mail ? h("a", { href: "mailto:" + mail + "?subject=" + encodeURIComponent("Join me on ConnectChat") + "&body=" + encodeURIComponent(msg) }, "Email") : null,
              h("a", { href: "#", onclick: e => { e.preventDefault(); shareInvite(); } }, "Share"))));
      });
    }
    if (!contacts.length && !imported) lb.append(h("div", { class: "empty" }, "No contacts yet. Search a username and tap Add, or invite friends."));
    contacts.filter(c => !q || c.name.toLowerCase().includes(q) || c.username.includes(q)).forEach(c => lb.append(h("div", { class: "row" }, avatar(c),
      h("div", { class: "mid", onclick: () => openChat(c) }, h("b", {}, c.name), h("small", {}, "@" + c.username + (c.blocked ? " · blocked" : ""))),
      h("div", { class: "acts" }, h("button", { onclick: () => openChat(c) }, "Chat"), h("button", { onclick: async () => { try { await api("/contacts/remove", { userId: c.id }); await loadContacts(); renderList(); } catch (e) { fail(e); } } }, "Remove")))));
  } else if (tab === "calls") {
    if (!callsList.length) lb.append(h("div", { class: "empty" }, "No calls yet."));
    callsList.forEach(c => { const ms = c.status === "missed", vd = c.type === "video";
      lb.append(h("div", { class: "row" }, avatar(c.user), h("div", { class: "mid" }, h("b", {}, c.user.name), h("small", { class: ms ? "miss" : "" }, (c.direction === "incoming" ? "↙ " : "↗ ") + (vd ? "Video" : "Voice") + " · " + when(c.startedAt) + (c.status === "ended" ? " · " + c.duration + "s" : " · " + c.status))),
        h("button", { class: "cbtn " + (ms ? "miss" : vd ? "vid" : "ok"), title: "Call back", onclick: () => startCall(c.user, vd ? "video" : "audio") }, ico(vd ? "video" : "phone")))); });
  }
  updBadges();
}
async function loadContacts() { contacts = (await api("/contacts")).contacts; }
async function loadCalls() { callsList = (await api("/calls")).calls; }

/* ---------- tabs ---------- */
async function setTab(t) {
  if (t === "profile") profFrom = tab; tab = t; document.body.dataset.tab = t; document.querySelectorAll("#nav [data-tab]").forEach(b => b.classList.toggle("on", b.dataset.tab === t));
  $("panes").classList.toggle("single", t === "profile" || t === "settings");
  if (t === "contacts") await loadContacts().catch(fail);
  if (t === "calls") { missed = 0; await loadCalls().catch(fail); }
  if (t === "profile" || t === "settings") pushView();
  renderList(); renderRight(); renderStories();
}
function renderRight() { if (tab === "profile") return renderProfile(); if (tab === "settings") return renderSettings(); renderChat(); }
document.querySelectorAll("#nav [data-tab]").forEach(b => b.onclick = () => { document.body.classList.remove("chat-open"); setTab(b.dataset.tab); });
$("logout").onclick = async () => { try { await api("/logout", {}); } catch (e) {} location.replace("login.html"); };
$("bell").onclick = () => { if ("Notification" in window && Notification.permission !== "granted") enableNotifications(); else setTab("calls"); };
$("navstory").onclick = () => addStory();
$("sbtn").onclick = openSearch;
$("newchat").onclick = openSearch;
function pickFile(cam) { const f = $("file"); if (cam) { f.accept = "image/*"; f.setAttribute("capture", "environment"); } else { f.accept = ""; f.removeAttribute("capture"); } f.click(); }

/* ---------- search users ---------- */
let sT;
$("gs").oninput = () => {
  renderList(); clearTimeout(sT); const q = $("gs").value.trim();
  if (q.length < 2) { $("sres").hidden = true; return; }
  sT = setTimeout(async () => {
    try {
      const { users } = await api("/users/search?q=" + encodeURIComponent(q)), box = $("sres"); box.textContent = ""; box.hidden = false;
      if (!users.length) box.append(h("div", { class: "empty" }, "No users found"));
      users.forEach(u => box.append(h("div", { class: "row" }, avatar(u, "sm"), h("div", { class: "mid" }, h("b", {}, u.name), h("small", {}, "@" + u.username)),
        h("div", { class: "acts" }, h("button", { onclick: () => { box.hidden = true; $("gs").value = ""; openChat(u); } }, "Chat"),
          h("button", { onclick: async ev => { try { await api("/contacts/add", { userId: u.id }); ev.target.textContent = "Added ✓"; } catch (e) { fail(e); } } }, u.isContact ? "Added ✓" : "Add")))));
    } catch (e) { fail(e); }
  }, 300);
};
document.addEventListener("click", e => { if (!e.target.closest(".sw")) $("sres").hidden = true; });

/* ---------- chat ---------- */
async function openChat(u) {
  tab = "chats"; document.body.dataset.tab = "chats"; document.querySelectorAll("#nav [data-tab]").forEach(b => b.classList.toggle("on", b.dataset.tab === "chats")); $("panes").classList.remove("single");
  active = u; replyTo = null; msgs = []; more = false; if (small()) pushView(); renderList(); renderChat();
  try { const d = await api("/messages/" + u.id); msgs = d.messages; more = d.more; renderMsgs(true); markRead(); } catch (e) { fail(e); }
}
function markRead() {
  if (!active || document.hidden) return; const c = convOf(active.id);
  if (c && c.unread) { c.unread = 0; renderList(); }
  socket.emit("message:read", { with: active.id }, () => {});
}
function renderChat() {
  const cp = $("cp"); cp.textContent = "";
  if (!active) { document.body.classList.remove("chat-open"); cp.append(h("div", { class: "empty" }, h("div", { class: "big" }, "💬"), h("h3", {}, "Select a chat"), h("p", {}, "Or search a username above to start a conversation."))); return; }
  document.body.classList.add("chat-open");
  const st = h("small", { id: "hst" }, statusText(active)); st.className = active.online ? "on" : "";
  const menu = h("button", { title: "More", onclick: chatMenu }, ico("more"));
  cp.append(h("div", { class: "chead" }, h("button", { class: "back", onclick: goBack }, ico("back")), avatar(active, "sm"),
    h("div", { class: "t" }, h("b", {}, active.name), st), h("button", { title: "Voice call", onclick: () => startCall(active, "audio") }, ico("phone")), h("button", { title: "Video call", onclick: () => startCall(active, "video") }, ico("video")), menu));
  cp.append(h("div", { id: "msgs" }), h("div", { id: "rbar", hidden: true }));
  const input = h("input", { id: "txt", placeholder: "Type a message...", maxlength: 4000, autocomplete: "off" });
  input.onkeydown = e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendText(); } };
  input.oninput = () => { const now = Date.now(); if (now - typingT > 2000) { typingT = now; socket.emit("typing", { to: active.id, typing: true }); } };
  const emo = h("div", { id: "emo", hidden: true }, ..."😅🤣😂🙂😘😗☺️😚😙🥲😋🤪😝🤗🤭🫢🫣😓😩😫🥱🫪😤😡👿💀☠️🤡💋💌💘💝💖💗💓💞💕💟❣️💔❤️🩷❤️‍🩹".match(/\p{Extended_Pictographic}(?:\uFE0F)?|\p{Regional_Indicator}{2}/gu).map(x => h("button", { onclick: () => { input.value += x; input.focus(); } }, x)));
  cp.append(h("div", { class: "comp" }, emo, h("div", { class: "box" }, h("button", { title: "Emoji", onclick: () => emo.hidden = !emo.hidden }, ico("smile")), input,
    h("button", { title: "Attach", onclick: () => pickFile(false) }, ico("clip")), h("button", { title: "Camera", onclick: () => pickFile(true) }, ico("camera"))), h("button", { id: "mic", title: "Voice message", onclick: toggleRec }, ico("mic")), h("button", { id: "send", onclick: sendText }, ico("send"))));
  renderMsgs(true); renderReply();
}
function renderMsgs(bottom) {
  const box = $("msgs"); if (!box) return; const prev = box.scrollHeight; box.textContent = "";
  if (more) box.append(h("button", { class: "more", onclick: loadOlder }, "Load earlier messages"));
  let day = "";
  msgs.forEach(m => { const d = dayLabel(m.createdAt); if (d !== day) { day = d; box.append(h("div", { class: "day" }, d)); } box.append(msgEl(m)); });
  if (bottom) box.scrollTop = box.scrollHeight; else box.scrollTop = box.scrollHeight - prev;
  // Decrypt any E2EE messages that still lack plaintext
  msgs.filter(m => m.e2ee && !m.text && !m.deleted && m.ciphertext).forEach(async m => {
    const peerId = m.from === me.id ? m.to : m.from;
    const pt = await E2EE.decrypt(peerId, m.ciphertext, m.iv);
    if (pt) { m.text = pt; const el = box.querySelector(`[data-id="${m.id}"] .tx`); if (el) el.textContent = pt; else renderMsgs(bottom); }
  });
}
async function loadOlder() { try { const d = await api("/messages/" + active.id + "?before=" + encodeURIComponent(msgs[0].createdAt)); msgs = d.messages.concat(msgs); more = d.more; renderMsgs(false); } catch (e) { fail(e); } }
function msgEl(m) {
  const mine = m.from === me.id, b = h("div", { class: "b " + (mine ? "out" : "in") + (m.deleted ? " del" : ""), "data-id": m.id });
  if (m.replyTo) b.append(h("div", { class: "rp" }, h("b", {}, m.replyTo.from === me.id ? "You" : active.name), h("span", {}, (m.replyTo.text || (m.replyTo.e2ee ? "🔒" : "")).slice(0, 80))));
  if (m.deleted) b.append("🚫 This message was deleted");
  else {
    const peerId = m.from === me.id ? active.id : m.from;
    if (m.type === "image" || m.type === "video" || m.type === "voice" || m.type === "file") {
      const holder = h("div", { class: "media-holder" }, h("span", { class: "tx" }, "🔒 Decrypting media…"));
      b.append(holder);
      mediaObjectUrl(m, peerId).then(url => {
        if (!url) { holder.textContent = "🔒 Unable to decrypt media"; return; }
        holder.textContent = "";
        if (m.type === "image") holder.append(h("a", { href: url, target: "_blank" }, h("img", { class: "mi", src: url, alt: "photo" })));
        else if (m.type === "video") holder.append(h("video", { controls: true, class: "mi", src: url }));
        else if (m.type === "voice") holder.append(h("audio", { controls: true, src: url }));
        else holder.append(h("a", { class: "fl", href: url, download: m.fileName || "file" }, "📄 " + (m.fileName || "File") + " 🔒"));
      });
    }
    if (m.e2ee && !m.text && !m.mediaId) b.append(h("div", { class: "tx" }, "🔒 Encrypted message…"));
    else if (m.text) b.append(h("div", { class: "tx" }, (m.e2ee ? "🔒 " : "") + m.text));
  }
  b.append(h("span", { class: "mt" }, tm(m.createdAt) + (m.editedAt && !m.deleted ? " · edited" : "") + (m.e2ee && !m.deleted ? " · E2EE" : ""), mine && !m.deleted ? h("span", { class: "tk " + m.status }, ico(m.status === "sent" ? "check" : "checks")) : null));
  b.onclick = e => {
    if (e.target.closest("a,audio,button")) return;
    const old = b.querySelector(".act"); document.querySelectorAll(".act").forEach(x => x.remove()); if (old) return;
    if (m.deleted) return;
    const a = h("div", { class: "act" }, h("button", { onclick: () => { replyTo = m; renderReply(); $("txt").focus(); } }, "↩ Reply"),
      m.text ? h("button", { onclick: () => navigator.clipboard && navigator.clipboard.writeText(m.text).then(() => toast("Copied")) }, "Copy") : null,
      mine && m.type === "text" ? h("button", { onclick: async () => {
        const t = prompt("Edit message", m.text || "");
        if (!t || !t.trim()) return;
        try {
          const enc = await E2EE.encrypt(active.id, t);
          if (!enc) throw new Error("Secure messaging is unavailable for this contact. Message was not sent.");
          socket.emit("message:edit", { id: m.id, e2ee: true, ciphertext: enc.ciphertext, iv: enc.iv }, r => r && r.error && toast(r.error));
        } catch (e) { toast(e.message || "Secure edit failed; message was not changed."); }
      } }, "✎ Edit") : null,
      mine ? h("button", { onclick: () => { if (confirm("Delete this message for everyone?")) socket.emit("message:delete", { id: m.id }, r => r && r.error && toast(r.error)); } }, "🗑 Delete") : null);
    b.append(a);
  };
  return b;
}
function renderReply() {
  const r = $("rbar"); if (!r) return; r.hidden = !replyTo; r.textContent = ""; if (!replyTo) return;
  r.append(h("span", {}, "↩ Replying to " + (replyTo.from === me.id ? "yourself" : active.name) + ": " + (replyTo.text || replyTo.fileName || replyTo.type).slice(0, 60)), h("button", { onclick: () => { replyTo = null; renderReply(); } }, "✖"));
}
function addMsg(m) { if (!msgs.some(x => x.id === m.id)) msgs.push(m); }
async function sendRaw(payload) {
  if (!active) return;
  const originalText = payload.text || "";
  // Fail closed: text is never sent in plaintext, even if encryption or key
  // lookup fails. Media uploads are a separate, currently non-E2EE feature.
  if (payload.type === "text" && payload.text && !payload.e2ee) {
    try {
      const enc = await E2EE.encrypt(active.id, payload.text);
      if (!enc) throw new Error("This contact has not enabled secure messaging yet.");
      payload = { type: "text", e2ee: true, ciphertext: enc.ciphertext, iv: enc.iv, preview: "🔒 Encrypted message" };
    } catch (e) {
      toast((e && e.message) || "Encryption failed. Message was not sent.");
      return;
    }
  }
  socket.emit("message:send", { to: active.id, replyTo: replyTo ? replyTo.id : undefined, ...payload }, r => {
    if (!r || !r.ok) return toast((r && r.error) || "Could not send");
    // Keep local plaintext for the sender's UI
    if (payload.e2ee && originalText) r.message.text = originalText;
    else if (r.message.e2ee && r.message.ciphertext) {
      E2EE.decrypt(active.id, r.message.ciphertext, r.message.iv).then(pt => {
        if (pt) { r.message.text = pt; renderMsgs(true); }
      });
    }
    addMsg(r.message); touch(active, r.message); replyTo = null; renderReply(); renderMsgs(true);
  });
}
function sendText() {
  const i = $("txt"), t = i.value.trim();
  if (!t) return;
  i.value = ""; $("emo").hidden = true;
  sendRaw({ type: "text", text: t });
}
function touch(user, m) {
  let c = convOf(user.id);
  if (!c) { c = { user, last: {}, unread: 0 }; convs.unshift(c); }
  const preview = m.e2ee ? "🔒 Encrypted message" :
    m.type === "text" ? (m.text || "") :
    m.type === "image" ? "📷 Photo" :
    m.type === "voice" ? "🎤 Voice message" :
    "📄 " + (m.fileName || "File");
  c.last = { text: preview, type: m.type, at: m.createdAt, from: m.from };
  convs = [c, ...convs.filter(x => x !== c)]; renderList();
}
async function upload(blob, kind, name, opts = {}) {
  // opts.e2ee: encrypt client-side before upload (required for chat media)
  const to = active ? active.id : "";
  let body = blob;
  let qs = `kind=${encodeURIComponent(kind)}&to=${encodeURIComponent(to)}&name=${encodeURIComponent(name || "")}`;
  let contentType = blob.type || "application/octet-stream";

  if (opts.e2ee && to) {
    const ab = await blob.arrayBuffer();
    const enc = await E2EE.encryptBytes(to, ab);
    if (!enc) throw new Error("Encryption failed — verify contact security key first");
    body = new Blob([enc.ciphertext], { type: "application/octet-stream" });
    contentType = "application/octet-stream";
    qs += `&e2ee=1&iv=${encodeURIComponent(enc.iv)}&originalMime=${encodeURIComponent(blob.type || "application/octet-stream")}`;
  }

  const r = await fetch(`/api/cc/upload?${qs}`, {
    method: "POST",
    headers: { "Content-Type": contentType },
    body,
    credentials: "include"
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.error || "Upload failed");
  return d;
}

/** Fetch encrypted media and decrypt to object URL for display/playback. */
async function mediaObjectUrl(m, peerId) {
  if (!m.mediaUrl) return null;
  try {
    const r = await fetch(m.mediaUrl, { credentials: "include" });
    if (!r.ok) return null;
    const encFlag = r.headers.get("X-Encrypted") === "1" || m.mediaEncrypted;
    const ab = await r.arrayBuffer();
    if (encFlag) {
      const iv = m.mediaIv || r.headers.get("X-Media-IV");
      const plain = await E2EE.decryptBytes(peerId, ab, iv);
      if (!plain) return null;
      const mime = m.originalMime || r.headers.get("X-Original-Mime") || "application/octet-stream";
      return URL.createObjectURL(new Blob([plain], { type: mime }));
    }
    const mime = r.headers.get("Content-Type") || "application/octet-stream";
    return URL.createObjectURL(new Blob([ab], { type: mime }));
  } catch {
    return null;
  }
}

$("file").onchange = async e => {
  const f = e.target.files[0]; e.target.value = ""; if (!f || !active) return;
  try {
    toast("Encrypting & uploading…");
    const kind = f.type.startsWith("image/") ? "image" : f.type.startsWith("video/") ? "video" : "file";
    const d = await upload(f, kind, f.name, { e2ee: true });
    sendRaw({ type: kind, mediaId: d.mediaId });
  } catch (x) { fail(x); }
};
let rec = null;
async function toggleRec() {
  const mic = $("mic"); if (rec) { rec.stop(); return; }
  try {
    const st = await navigator.mediaDevices.getUserMedia({ audio: true }), chunks = [], mr = new MediaRecorder(st); rec = mr;
    mr.ondataavailable = e => chunks.push(e.data);
    mr.onstop = async () => { st.getTracks().forEach(t => t.stop()); rec = null; if (mic) mic.classList.remove("rec"); const blob = new Blob(chunks, { type: mr.mimeType || "audio/webm" });
      if (blob.size > 800) try { const d = await upload(blob, "voice", "voice", { e2ee: true }); sendRaw({ type: "voice", mediaId: d.mediaId }); } catch (x) { fail(x); } };
    mr.start(); mic.classList.add("rec"); toast("Recording… tap the mic again to send");
  } catch { toast("Microphone permission is needed"); }
}
function chatMenu() {
  const u = active, c = convOf(u.id), blocked = !!(c && c.user.blocked), d = $("dlg");
  d.textContent = ""; d.className = "sheet"; d.onclose = () => { d.className = ""; };
  const it = (icn, cls, title, sub, fn) => h("button", { class: "mi2 " + cls, onclick: () => { d.close(); setTimeout(fn, 80); } }, h("span", { class: "si" }, ico(icn)), h("span", { class: "stx" }, h("b", {}, title), sub ? h("small", {}, sub) : null));
  d.append(h("div", { class: "shh" }, avatar(u, "lgx"), h("b", {}, u.name), h("small", {}, "@" + u.username)),
    h("div", { class: "shl" },
      it("user", "", "View Profile", "", () => formModal(u.name, [h("p", {}, "@" + u.username + (u.bio ? " · " + u.bio : "")), h("p", {}, statusText(u))], "Add to contacts", () => api("/contacts/add", { userId: u.id }).then(() => toast("Added to contacts")))),
      it("search", "", "Search in Chat", "", () => { const i = h("input", { placeholder: "Search messages…" }); formModal("Search in chat", [i], "Search", async () => { const t = i.value.trim(); if (!t) return false; const r = await api("/messages/" + u.id + "?q=" + encodeURIComponent(t)); msgs = r.messages; more = false; renderMsgs(true); toast(r.messages.length + " result(s). Reopen the chat to see all."); }); }),
      it("gear", "", "Verify Safety Number", "Compare with contact out-of-band (Signal-style)", async () => {
        try {
          const sn = await E2EE.safetyNumber(u.id);
          if (!sn) return toast("Keys not available yet — send a message first");
          formModal("Safety Number", [
            h("p", {}, "Compare this number with " + u.name + " over a trusted channel (call / in person). If they match, the connection is authentic."),
            h("pre", { style: "white-space:pre-wrap;word-break:break-all;font-size:13px;line-height:1.5;background:#111;padding:12px;border-radius:8px;" }, sn)
          ], "Done", async () => true);
        } catch (e) { fail(e); }
      }),
      it("block", "red", blocked ? "Unblock" : "Block", "", () => api("/block", { userId: u.id, blocked: !blocked }).then(() => { if (c) c.user.blocked = !blocked; toast(blocked ? "Unblocked" : "Blocked"); }).catch(fail))),
    h("button", { class: "cancel", onclick: () => d.close() }, "Cancel"));
  d.showModal();
}

/* ---------- contacts import / invite ---------- */
const inviteLink = () => location.origin + "/chat/login.html";
const inviteText = () => "Join me on ConnectChat: " + inviteLink();
async function shareInvite() {
  const d = { title: "ConnectChat", text: "Join me on ConnectChat", url: inviteLink() };
  try { if (navigator.share) await navigator.share(d); else { await navigator.clipboard.writeText(inviteText()); toast("Invite link copied"); } } catch (e) {}
}
async function importContacts() {
  if (!("contacts" in navigator && "ContactsManager" in window)) { toast("Your browser cannot read phone contacts (works on Android Chrome). Use Invite friends instead."); return shareInvite(); }
  let picked;
  try { picked = await navigator.contacts.select(["name", "email", "tel"], { multiple: true }); } catch (e) { return toast("Contacts permission was not given"); }
  if (!picked.length) return;
  const emails = [...new Set(picked.flatMap(c => c.email || []))]; let found = [];
  try { if (emails.length) found = (await api("/contacts/match", { emails })).users; } catch (e) { fail(e); }
  const byKey = new Map(found.map(u => [u.matchKey, u]));
  imported = picked.map(c => ({ name: (c.name && c.name[0]) || (c.email && c.email[0]) || (c.tel && c.tel[0]) || "Contact", emails: c.email || [], tels: c.tel || [], user: (c.email || []).map(e => byKey.get(canon(e))).find(Boolean) || null }))
    .sort((a, b) => (!!b.user - !!a.user) || a.name.localeCompare(b.name));
  renderList(); toast("Contacts are used only to find friends. Nothing is saved.");
}

/* ---------- notifications (real browser notifications + web push) ---------- */
const b64u = x => { const r = atob((x + "=".repeat((4 - x.length % 4) % 4)).replace(/-/g, "+").replace(/_/g, "/")); return Uint8Array.from([...r].map(c => c.charCodeAt(0))); };
async function initSW() {
  if (!("serviceWorker" in navigator)) return;
  try {
    swReg = await navigator.serviceWorker.register("/chat/sw.js", { scope: "/chat/" });
    navigator.serviceWorker.addEventListener("message", e => { if (e.data && e.data.open) openFromUrl(e.data.open); });
    if ("Notification" in window && Notification.permission === "granted") subscribePush();
    else if ("Notification" in window && Notification.permission === "default") setTimeout(() => toast("Turn on notifications in Settings"), 2500);
  } catch (e) { console.error("sw", e); }
}
async function subscribePush() {
  try {
    if (!swReg) return; const k = await api("/push/key");
    const sub = (await swReg.pushManager.getSubscription()) || await swReg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64u(k.key) });
    await api("/push/subscribe", sub.toJSON());
  } catch (e) { /* push not configured on the server: in-page notifications still work */ }
}
async function enableNotifications() {
  if (!("Notification" in window)) return toast("This browser does not support notifications");
  const p = await Notification.requestPermission();
  if (p !== "granted") return toast("Notifications are blocked. Allow them in your browser settings.");
  await subscribePush(); toast("Notifications enabled ✓");
}
function notify(title, body, url, tag) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  if (swReg) swReg.showNotification(title, { body, tag, data: { url } }); else try { new Notification(title, { body, tag }); } catch (e) {}
}
async function openFromUrl(u) {
  try { const name = new URLSearchParams(String(u).split("?")[1] || "").get("u"); if (!name) return; const { users } = await api("/users/search?q=" + encodeURIComponent(name)); const f = users.find(x => x.username === name.toLowerCase()); if (f) openChat(f); } catch (e) {}
}

/* ---------- stories ---------- */
// Stories are intentionally disabled until their API, moderation and retention controls are implemented.
async function loadStories() { stories = []; renderStories(); }
const mineStory = () => stories.find(g => g.user.id === me.id);
function renderStories() {
  const box = $("stories"); box.textContent = ""; box.hidden = true;
  const storyButton = $("navstory"); if (storyButton) storyButton.hidden = true;
  return;
  const mine = mineStory();
  box.append(h("div", { class: "st", onclick: () => mine ? openStory(mine) : addStory() }, mine ? h("div", { class: "ring on" }, avatar(me)) : h("div", { class: "ring add" }, ico("plus")), mine ? h("span", { class: "plus", onclick: e => { e.stopPropagation(); addStory(); } }, "+") : null, h("small", { class: "me" }, "Your Story")));
  stories.filter(g => g.user.id !== me.id).forEach(g => box.append(h("div", { class: "st", onclick: () => openStory(g) }, h("div", { class: "ring" + (g.unviewed ? " on" : "") }, avatar(g.user)), h("small", {}, g.user.name.split(" ")[0]))));
}
function addStory() {
  const cols = ["#1f6bff", "#8b5cf6", "#16a34a", "#ea580c", "#db2777", "#0f172a"]; let bg = cols[0], file = null, url = "";
  const ov = h("div", { class: "sed" }), stage = h("div", { class: "sstage" }), cap = h("textarea", { placeholder: "Add a caption…", maxlength: 200, rows: 2 }), fi = h("input", { type: "file", accept: "image/*", hidden: true });
  const paint = () => { stage.style.background = file ? '#000 center/cover no-repeat url("' + url + '")' : bg; }; paint();
  const close = () => { if (url) URL.revokeObjectURL(url); ov.remove(); };
  fi.onchange = () => { file = fi.files[0] || null; if (url) URL.revokeObjectURL(url); url = file ? URL.createObjectURL(file) : ""; paint(); };
  const tool = (n, t, fn) => h("button", { title: t, onclick: fn }, ico(n));
  stage.append(h("div", { class: "stools" }, tool("type", "Text", () => cap.focus()), tool("pencil", "Background colour", () => { file = null; fi.value = ""; bg = cols[(cols.indexOf(bg) + 1) % cols.length]; paint(); }), tool("image", "Choose photo", () => fi.click())), cap);
  const share = h("button", { class: "sshare" }, "Share Story ", ico("arrow"));
  share.onclick = async () => {
    if (!cap.value.trim() && !file) return toast("Write something or choose a photo");
    share.disabled = true;
    try { let mediaId; if (file) mediaId = (await upload(file, "story", file.name)).mediaId; await api("/story", { text: cap.value, bg, mediaId }); toast("Story posted"); close(); await loadStories(); } catch (e) { fail(e); }
    share.disabled = false;
  };
  const save = h("button", { class: "ssave" }, ico("download"), " Save");
  save.onclick = () => { if (!file) return toast("Choose a photo to save"); const a = h("a", { href: url, download: file.name }); document.body.append(a); a.click(); a.remove(); };
  ov.append(h("div", { class: "sedh" }, h("button", { onclick: close, title: "Close" }, ico("x")), h("b", {}, "My Story"), h("button", { title: "Info", onclick: () => toast("Visible for 24 hours to people you chat with and people who added you.") }, ico("gear"))), stage, h("div", { class: "sedf" }, save, share), fi);
  document.body.append(ov);
}
let sv = null;
function openStory(g) { sv = { g, i: Math.max(0, g.items.findIndex(x => !x.viewed)), t: null }; $("sv").hidden = false; showStory(); }
function closeStory() { if (sv) clearTimeout(sv.t); sv = null; $("sv").hidden = true; loadStories(); }
function nextStory() { if (!sv) return; if (sv.i < sv.g.items.length - 1) { sv.i++; showStory(); } else closeStory(); }
function showStory() {
  clearTimeout(sv.t); const it = sv.g.items[sv.i], own = sv.g.user.id === me.id;
  $("svbar").textContent = ""; sv.g.items.forEach((_, k) => $("svbar").append(h("i", { class: k < sv.i ? "done" : k === sv.i ? "cur" : "" }, h("b"))));
  $("svav").textContent = ""; $("svav").append(avatar(sv.g.user, "sm")); $("svn").textContent = own ? "My story" : sv.g.user.name; $("svt").textContent = tm(it.createdAt);
  const c = $("svc"); c.textContent = ""; c.style.background = it.kind === "text" ? it.bg : "#000";
  if (it.kind === "image") c.append(h("img", { src: it.mediaUrl, alt: "story" })); if (it.text) c.append(h("div", { style: it.kind === "image" ? "position:absolute;bottom:80px;left:20px;right:20px;text-shadow:0 1px 6px #000;font-size:20px" : "" }, it.text));
  $("svdel").hidden = !own; $("svviews").hidden = !own; if (own) $("svviews").textContent = "👁 " + (it.views || 0) + " views";
  if (!own && !it.viewed) { it.viewed = true; api("/story/view", { id: it.id }).catch(() => {}); }
  sv.t = setTimeout(nextStory, 5000);
}
$("svx").onclick = closeStory; $("svnext").onclick = nextStory; $("svprev").onclick = () => { if (sv && sv.i > 0) { sv.i--; showStory(); } };
$("svdel").onclick = async () => { if (!sv) return; clearTimeout(sv.t); if (await confirmBox("Delete this story?", "Yes, delete")) { try { await api("/story/delete", { id: sv.g.items[sv.i].id }); closeStory(); } catch (e) { fail(e); } } else showStory(); };
$("svviews").onclick = async () => {
  if (!sv) return; clearTimeout(sv.t);
  try { const { viewers } = await api("/story/" + sv.g.items[sv.i].id + "/viewers"); const d = $("dlg"); d.textContent = ""; d.className = ""; d.onclose = () => { if (sv) showStory(); };
    d.append(h("h3", {}, "Viewed by"), viewers.length ? viewers.map(v => h("p", {}, v.name + " (@" + v.username + ")")) : h("p", {}, "No views yet."), h("div", { class: "dbtn" }, h("button", { class: "btn", onclick: () => d.close() }, "Close"))); d.showModal(); } catch (e) { fail(e); }
};

/* ---------- profile menu, profile & settings ---------- */
function setMeBtn() { const b = $("meb"); b.textContent = ""; b.append(ico("more")); }
$("meb").onclick = e => {
  e.stopPropagation(); const m = $("pmenu"); if (!m.hidden) { m.hidden = true; return; } m.textContent = "";
  const item = (t, fn) => h("button", { onclick: () => { m.hidden = true; fn(); } }, t);
  m.append(item("My profile", () => setTab("profile")), item("Contacts", () => setTab("contacts")), item("My story", () => { const g = mineStory(); g ? openStory(g) : addStory(); }), item("Settings", () => setTab("settings")), item("Logout", () => $("logout").click()));
  m.hidden = false;
};
document.addEventListener("click", () => { $("pmenu").hidden = true; });
const head = (t, bk) => h("div", { class: "fh" }, h("button", { class: "back2", onclick: bk || goBack }, ico("back")), h("h2", {}, t));
function renderProfile() {
  const cp = $("cp"); cp.textContent = ""; document.body.classList.add("chat-open");
  const f = {}; const fld = (k, l, v, tag = "input") => { f[k] = h(tag, { value: v, maxlength: k === "bio" ? 160 : 60 }); if (tag === "textarea") f[k].textContent = v; return [h("label", {}, l), f[k]]; };
  const pic = h("div", { id: "pp" }, avatar(me, "lgx"));
  cp.append(h("div", { class: "form" }, head("My profile"), pic,
    h("button", { class: "btn gray", onclick: () => { const i = h("input", { type: "file", accept: "image/*" }); i.onchange = async () => { try { const d = await upload(i.files[0], "avatar", i.files[0].name); me.avatar = d.url; pic.textContent = ""; pic.append(avatar(me, "lgx")); setMeBtn(); toast("Photo updated"); } catch (x) { fail(x); } }; i.click(); } }, "Change photo"),
    h("button", { class: "btn gray", onclick: () => { const g = mineStory(); g ? openStory(g) : addStory(); } }, "📖 My story"),
    ...fld("name", "Full name", me.name), ...fld("username", "Username", me.username), ...fld("bio", "Bio", me.bio || "", "textarea"),
    h("button", { class: "btn", onclick: async () => { try { await api("/profile", { name: f.name.value, username: f.username.value, bio: f.bio.value }); me.name = f.name.value; me.username = f.username.value.toLowerCase(); me.bio = f.bio.value; toast("Saved"); } catch (x) { fail(x); } } }, "Save changes")));
}
function aboutBox() {
  const d = $("dlg"); d.textContent = ""; d.className = ""; d.onclose = null;
  d.append(h("h3", {}, "About ConnectChat"), h("p", {}, "A modern messaging app to connect with your friends, classmates and community."), h("h3", {}, "Your Privacy, Our Priority"), h("p", {}, "New text messages are encrypted on the sender's device and decrypted on the recipient's device. This is a prototype E2EE design using first-use key pinning; it is not independently audited and does not prevent a first-contact man-in-the-middle attack. Older messages may be plaintext. Images, videos, voice notes, files, profile photos and metadata are not end-to-end encrypted and are processed by the service."), h("div", { class: "dbtn" }, h("button", { class: "btn", onclick: () => d.close() }, "Close")));
  d.showModal();
}
async function renderSettings(sub) {
  sub = typeof sub === "string" ? sub : "";
  const cp = $("cp"); cp.textContent = ""; document.body.classList.add("chat-open");
  await loadContacts().catch(() => {});
  const wrap = h("div", { class: "form set" }); cp.append(wrap);
  const back = () => renderSettings();
  const row = (icn, title, subt, right, fn) => h("button", { class: "srow", onclick: fn }, h("span", { class: "si" }, ico(icn)), h("span", { class: "stx" }, h("b", {}, title), subt ? h("small", {}, subt) : null), right ? h("span", { class: "sval" }, right) : null, h("span", { class: "chv" }, ico("chev")));
  if (!sub) {
    wrap.append(head("Settings"), h("button", { class: "scard", onclick: () => setTab("profile") }, avatar(me, "lg2"), h("span", { class: "stx" }, h("b", {}, me.name), h("small", {}, "@" + me.username)), h("span", { class: "chv" }, ico("chev"))),
      h("div", { class: "slist" },
        row("user", "Account", "Password, delete account", "", () => renderSettings("account")),
        row("lock", "Privacy", "Activity status, blocked users", "", () => renderSettings("privacy")),
        row("bell", "Notifications", "Messages and calls", "", () => renderSettings("notif")),
        row("box", "Data and Storage", "Clear chats", "", () => renderSettings("data")),
        row("help", "Help & Support", "What we keep & how it is protected", "", () => window.open("about.html", "_blank", "noopener")),
        row("info", "About", "", "App version 1.0.0", aboutBox)));
    return;
  }
  if (sub === "account") {
    const em = h("input", { type: "email", value: me.email || "", placeholder: "Your account email" });
    wrap.append(head("Account", back),
      h("div", { class: "sec" }, h("h3", {}, "Change password"), h("p", { class: "hint" }, "Enter your email. We send a link; open it to set a new password."), em,
        h("button", { class: "btn", onclick: async ev => { ev.target.disabled = true; try { await api("/password/link", { email: em.value }); toast("If this email matches your account, a link was sent."); } catch (x) { fail(x); } ev.target.disabled = false; } }, "Send link")),
      h("button", { class: "btn gray", onclick: () => $("logout").click() }, "Logout"),
      h("button", { class: "btn red", onclick: async () => { const pw = prompt("Delete your account and all your messages? Enter your password to confirm:"); if (!pw) return; try { await api("/account/delete", { password: pw }); location.replace("login.html"); } catch (x) { fail(x); } } }, "Delete my account"));
  } else if (sub === "privacy") {
    const tg = h("input", { type: "checkbox", checked: me.showStatus ? "checked" : null });
    tg.onchange = async () => { try { await api("/profile", { showStatus: tg.checked }); me.showStatus = tg.checked; toast("Privacy updated"); } catch (x) { fail(x); } };
    const bu = h("input", { placeholder: "Username to block, e.g. rahul" }), blocked = contacts.filter(c => c.blocked);
    wrap.append(head("Privacy", back),
      h("div", { class: "sw2" }, h("div", {}, h("b", {}, "Show activity status"), h("br"), h("small", {}, "Online status and last seen. If off, others cannot see yours.")), tg),
      h("div", { class: "sec" }, h("h3", {}, "Block a user"), bu,
        h("button", { class: "btn gray", onclick: async () => { try { const q = bu.value.trim().replace(/^@/, "").toLowerCase(); if (q.length < 2) return toast("Enter a username");
          const { users } = await api("/users/search?q=" + encodeURIComponent(q)); const f = users.find(x => x.username === q); if (!f) return toast("No user with this exact username");
          await api("/block", { userId: f.id, blocked: true }); bu.value = ""; toast(f.name + " blocked"); renderSettings("privacy"); } catch (x) { fail(x); } } }, "Block user"),
        h("h3", { style: "margin-top:12px" }, "Blocked users (" + blocked.length + ")"),
        blocked.length ? blocked.map(u => h("div", { class: "sw2" }, h("span", {}, u.name + " (@" + u.username + ")"), h("button", { class: "btn gray", onclick: async () => { try { await api("/block", { userId: u.id, blocked: false }); renderSettings("privacy"); } catch (x) { fail(x); } } }, "Unblock"))) : h("small", { class: "hint" }, "No blocked users.")));
  } else if (sub === "notif") {
    const ns = !("Notification" in window) ? "Not supported" : Notification.permission === "granted" ? "On ✓" : Notification.permission === "denied" ? "Blocked in browser" : "Off";
    wrap.append(head("Notifications", back), h("div", { class: "sw2" }, h("div", {}, h("b", {}, "Browser notifications"), h("br"), h("small", {}, ns)), h("button", { class: "btn gray", onclick: async () => { await enableNotifications(); renderSettings("notif"); } }, "Enable")));
  } else {
    wrap.append(head("Data and Storage", back), h("div", { class: "sec" }, h("p", { class: "hint" }, "All your chats will be cleared from your account. The other people keep their own copy."),
      h("button", { class: "btn gray", onclick: async () => { if (await confirmBox("All your chats will be cleared from your account. The other people keep their own copy.", "Yes, clear")) { try { await api("/chats/clear", {}); convs = []; msgs = []; active = null; renderList(); toast("All chats cleared"); } catch (x) { fail(x); } } } }, "Clear all chats")));
  }
}

/* ---------- sockets ---------- */
const socket = io();
socket.on("connect_error", e => { if (/unauthorized/i.test(e.message)) location.replace("login.html"); });
socket.on("message:new", async m => {
  const other = m.from === me.id ? m.to : m.from; let c = convOf(other);
  const isActive = active && active.id === other;
  // Decrypt incoming E2EE message for local display
  if (m.e2ee && m.ciphertext && !m.text) {
    const pt = await E2EE.decrypt(other, m.ciphertext, m.iv);
    if (pt) m.text = pt;
  }
  if (isActive) { addMsg(m); renderMsgs(true); if (!document.hidden && m.from !== me.id) markRead(); }
  const preview = m.deleted ? "" : (m.e2ee ? "🔒 Encrypted message" : m.type === "text" ? m.text : m.type === "image" ? "📷 Photo" : m.type === "voice" ? "🎤 Voice message" : "📄 " + (m.fileName || "File"));
  if (m.from !== me.id && (document.hidden || !isActive)) notify("ConnectChat", "You have a new message.", "/chat/?u=" + ((c && c.user.username) || ""), "m-" + other);
  if (!c) { loadConvs().then(renderList).catch(() => {}); return; }
  touch(c.user, { ...m, text: preview, type: "text" });
  if (!isActive && m.from !== me.id) { c.unread = (c.unread || 0) + 1; renderList(); }
});
socket.on("message:updated", async m => {
  if (m.e2ee && m.ciphertext && !m.text) {
    const other = m.from === me.id ? m.to : m.from;
    const pt = await E2EE.decrypt(other, m.ciphertext, m.iv);
    if (pt) m.text = pt;
  }
  const i = msgs.findIndex(x => x.id === m.id); if (i >= 0) { msgs[i] = m; renderMsgs(false); }
});
socket.on("message:status", ({ ids, status }) => { let ch = false; msgs.forEach(m => { if (ids.includes(m.id)) { m.status = status; ch = true; } }); if (ch) renderMsgs(false); });
socket.on("presence", p => {
  const c = convOf(p.userId); if (c) { c.user.online = p.online; c.user.lastSeen = p.lastSeen; renderList(); }
  if (active && active.id === p.userId) { active.online = p.online; active.lastSeen = p.lastSeen; const s = $("hst"); if (s) { s.textContent = statusText(active); s.className = active.online ? "on" : ""; } }
});
socket.on("typing", ({ from, typing }) => {
  if (!active || active.id !== from) return; const s = $("hst"); if (!s) return; s.textContent = "typing…"; s.className = "on";
  clearTimeout(socket._tt); socket._tt = setTimeout(() => { s.textContent = statusText(active); s.className = active.online ? "on" : ""; }, 3000);
});
document.addEventListener("visibilitychange", () => { if (!document.hidden) markRead(); });

/* ---------- calls (WebRTC, signaling through Socket.IO) ---------- */
let call = null, incoming = null, iceServers = null, ringT;
async function getMedia(type, facing = "user") { return navigator.mediaDevices.getUserMedia({ audio: true, video: type === "video" ? { facingMode: facing } : false }); }
async function ensureIce() { if (!iceServers) iceServers = (await api("/ice")).iceServers; }
function showCall(state) {
  $("callbox").hidden = false; $("cin").hidden = state !== "in"; $("cact").hidden = state === "in";
  if (state !== "in") {
    $("cname").textContent = call.peer.name; $("lv").hidden = call.type !== "video"; $("c-cam").hidden = $("c-flip").hidden = call.type !== "video";
    $("lv").srcObject = call.local; $("rav").textContent = ""; if (call.type !== "video") $("rav").append(avatar(call.peer, "lgx"));
  }
}
function cleanupCall() {
  if (call) { clearInterval(call.timer); call.local && call.local.getTracks().forEach(t => t.stop()); call.pc && call.pc.close(); }
  call = null; incoming = null; $("callbox").hidden = true; $("rv").hidden = false; $("rv").srcObject = null; $("lv").srcObject = null;
  ["c-mute", "c-cam"].forEach(i => $(i).classList.remove("off"));
}
function startTimer() {
  if (!call || call.start) return; call.start = Date.now();
  call.timer = setInterval(() => { const s = Math.floor((Date.now() - call.start) / 1000); $("cstat").textContent = String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); }, 1000);
}
function makePc() {
  const pc = new RTCPeerConnection({ iceServers });
  pc.onicecandidate = e => e.candidate && call && socket.emit("call:signal", { callId: call.id, data: { candidate: e.candidate } });
  pc.ontrack = e => { $("rv").srcObject = e.streams[0]; $("rv").hidden = call.type !== "video"; if (call.type !== "video") { const a = $("rv"); a.hidden = true; a.play && a.play().catch(() => {}); } startTimer(); };
  pc.onconnectionstatechange = () => { if (pc.connectionState === "failed") { toast("Call connection failed"); endCall(); } };
  call.local.getTracks().forEach(t => pc.addTrack(t, call.local)); return pc;
}
async function startCall(u, type) {
  if (call || incoming) return toast("You are already in a call");
  let local; try { await ensureIce(); local = await getMedia(type); } catch (e) { return toast("Allow microphone" + (type === "video" ? " and camera" : "") + " access to call"); }
  socket.emit("call:invite", { to: u.id, type }, r => {
    if (!r || !r.ok) { local.getTracks().forEach(t => t.stop()); loadCalls().catch(() => {}); return toast((r && r.error) || "Call failed"); }
    call = { id: r.callId, peer: u, type, local, queue: [], facing: "user" }; showCall("out"); $("cstat").textContent = "Calling…";
  });
}
socket.on("call:incoming", ({ callId, type, from }) => {
  if (call || incoming) { socket.emit("call:reject", { callId }, () => {}); return; }
  if (document.hidden) notify("Incoming " + type + " call", from.name, "/chat/", "call");
  incoming = { callId, type, from }; $("cin-av").textContent = ""; $("cin-av").append(avatar(from, "lgx")); $("cin-name").textContent = from.name;
  $("cin-type").textContent = "Incoming " + (type === "video" ? "video" : "voice") + " call…"; $("callbox").hidden = false; $("cin").hidden = false; $("cact").hidden = true;
});
$("c-rej").onclick = () => { if (incoming) socket.emit("call:reject", { callId: incoming.callId }, () => {}); cleanupCall(); loadCalls().catch(() => {}); };
$("c-acc").onclick = async () => {
  const inc = incoming; if (!inc) return; let local;
  try { await ensureIce(); local = await getMedia(inc.type); } catch (e) { toast("Allow microphone" + (inc.type === "video" ? " and camera" : "") + " access to answer"); return $("c-rej").onclick(); }
  call = { id: inc.callId, peer: inc.from, type: inc.type, local, queue: [], facing: "user" }; incoming = null; showCall("act"); $("cstat").textContent = "Connecting…";
  socket.emit("call:accept", { callId: inc.callId }, r => { if (!r || !r.ok) { toast((r && r.error) || "Call is no longer available"); cleanupCall(); } });
};
socket.on("call:accepted", async ({ callId }) => {
  if (!call || call.id !== callId) return; $("cstat").textContent = "Connecting…"; call.pc = makePc();
  const o = await call.pc.createOffer(); await call.pc.setLocalDescription(o); socket.emit("call:signal", { callId, data: { sdp: call.pc.localDescription } });
});
socket.on("call:signal", async ({ callId, data }) => {
  if (!call || call.id !== callId) return;
  try {
    if (data.sdp) {
      if (!call.pc) call.pc = makePc(); await call.pc.setRemoteDescription(data.sdp);
      for (const c of call.queue) await call.pc.addIceCandidate(c); call.queue = [];
      if (data.sdp.type === "offer") { const a = await call.pc.createAnswer(); await call.pc.setLocalDescription(a); socket.emit("call:signal", { callId, data: { sdp: call.pc.localDescription } }); }
    } else if (data.candidate) { if (call.pc && call.pc.remoteDescription) await call.pc.addIceCandidate(data.candidate); else call.queue.push(data.candidate); }
  } catch (e) { console.error("signal", e); }
});
socket.on("call:ended", ({ callId, reason }) => {
  const mine = (call && call.id === callId) || (incoming && incoming.callId === callId);
  if (mine) {
    const who = (call && call.peer.name) || (incoming && incoming.from.name) || "";
    if (reason === "missed" && incoming) { missed++; toast("Missed call from " + who); } else if (reason === "rejected") toast("Call declined"); else if (reason !== "self") toast("Call ended");
    cleanupCall();
  }
  loadCalls().then(() => tab === "calls" && renderList()).catch(() => {}); updBadges();
});
function endCall() { if (call) socket.emit("call:end", { callId: call.id }, () => {}); cleanupCall(); loadCalls().catch(() => {}); }
$("c-end").onclick = endCall;
$("c-mute").onclick = () => { const t = call.local.getAudioTracks()[0]; if (!t) return; t.enabled = !t.enabled; $("c-mute").classList.toggle("off", !t.enabled); $("c-mute").textContent = t.enabled ? "🎤" : "🔇"; };
$("c-cam").onclick = () => { const t = call.local.getVideoTracks()[0]; if (!t) return; t.enabled = !t.enabled; $("c-cam").classList.toggle("off", !t.enabled); };
$("c-flip").onclick = async () => {
  try {
    const old = call.local.getVideoTracks()[0]; if (!old) return; call.facing = call.facing === "user" ? "environment" : "user";
    const nt = (await getMedia("video", call.facing)).getVideoTracks()[0]; const sender = call.pc && call.pc.getSenders().find(s => s.track && s.track.kind === "video");
    if (sender) await sender.replaceTrack(nt); old.stop(); call.local.removeTrack(old); call.local.addTrack(nt); $("lv").srcObject = call.local;
  } catch (e) { toast("Cannot switch camera on this device"); }
};

/* ---------- global search ---------- */
const RS = () => "cc_recent_" + (me ? me.id : "");
const getRecent = () => { try { return JSON.parse(localStorage.getItem(RS())) || []; } catch { return []; } };
const setRecent = a => { try { localStorage.setItem(RS(), JSON.stringify(a.slice(0, 8))); } catch {} };
const addRecent = q => q && q.length >= 2 && setRecent([q, ...getRecent().filter(x => x !== q)]);
const gsClean = () => $("gsq").value.replace(/[\u0000-\u001f]/g, "").trim().slice(0, 60);
let gsF = "people", gsT, gsSeq = 0;
function openSearch() { $("gsp").hidden = false; $("gsq").focus(); gsIdle(); }
function closeSearch() { gsSeq++; clearTimeout(gsT); $("gsp").hidden = true; }
function gsOpen(u) { addRecent(gsClean()); closeSearch(); openChat(u); }
const gsHL = (t, q) => { t = t || ""; const i = t.toLowerCase().indexOf(q.toLowerCase()); if (i < 0) return [t.slice(0, 90)]; const s = Math.max(0, i - 25); return [(s ? "…" : "") + t.slice(s, i), h("mark", {}, t.slice(i, i + q.length)), t.slice(i + q.length, i + q.length + 60)]; };
function gsPaged(items, render) {
  const box = h("div"), more = h("button", { class: "more gsmore" }, "Show more"); let n = 0;
  const step = () => { items.slice(n, n + 8).forEach(x => box.insertBefore(render(x), more)); n += 8; more.hidden = n >= items.length; };
  box.append(more); more.onclick = step; step(); return box;
}
function gsIdle() {
  const b = $("gsbody"), r = getRecent(); b.textContent = ""; $("gsclr").hidden = !$("gsq").value;
  if (!r.length) return b.append(h("div", { class: "empty" }, h("div", { class: "big" }, "🔍"), h("p", {}, "Type at least 2 characters to search registered people and your messages.")));
  b.append(h("div", { class: "gsh2" }, "Recent searches", h("button", { onclick: () => { setRecent([]); gsIdle(); } }, "Clear all")));
  r.forEach(q => b.append(h("div", { class: "gsrec", onclick: () => { $("gsq").value = q; gsRun(q, gsF); $("gsclr").hidden = false; } }, ico("search"), h("span", { class: "t" }, q),
    h("button", { title: "Remove", onclick: e => { e.stopPropagation(); setRecent(getRecent().filter(x => x !== q)); gsIdle(); } }, ico("x")))));
}
function gsProfile(u) {
  const d = $("dlg"); d.textContent = ""; d.className = "sheet"; d.onclose = () => { d.className = ""; };
  d.append(h("div", { class: "shh" }, avatar(u, "lgx"), h("b", {}, u.name), h("small", {}, "@" + u.username), u.bio ? h("p", { class: "gbio" }, u.bio) : null, h("small", { class: u.online ? "gon" : "" }, statusText(u))),
    h("div", { class: "gsact" }, h("button", { class: "btn", onclick: () => { d.close(); gsOpen(u); } }, "Message"),
      h("button", { class: "btn gray", onclick: async ev => { try { await api("/contacts/add", { userId: u.id }); ev.target.textContent = "Added ✓"; } catch (e) { fail(e); } } }, u.isContact ? "Added ✓" : "Add contact")),
    h("button", { class: "cancel", onclick: () => d.close() }, "Close"));
  d.showModal();
}
const gsPerson = u => h("div", { class: "row gsr", onclick: () => gsProfile(u) }, avatar(u, "sm"),
  h("div", { class: "mid" }, h("b", {}, u.name), h("small", {}, "@" + u.username, u.online ? h("span", { class: "gon" }, " · Online") : null)),
  h("div", { class: "acts" }, h("button", { onclick: e => { e.stopPropagation(); gsOpen(u); } }, "Message")));
async function gsRun(q, f) {
  const my = ++gsSeq, b = $("gsbody"); b.textContent = ""; b.append(h("div", { class: "gsload" }, h("span", { class: "spin" }), "Searching…"));
  try {
    if (f === "people") {
      const { users } = await api("/users/search?q=" + encodeURIComponent(q)); if (my !== gsSeq) return; b.textContent = "";
      if (!users.length) return b.append(h("div", { class: "empty" }, h("div", { class: "big" }, "🙈"), h("p", {}, "No people found for “" + q + "”.")));
      b.append(h("div", { class: "gsh2" }, users.length + " result(s)"), gsPaged(users, gsPerson));
    } else {
      const list = convs.slice(0, 12);
      const res = await Promise.allSettled(list.map(c => api("/messages/" + c.user.id + "?q=" + encodeURIComponent(q))));
      if (my !== gsSeq) return; b.textContent = "";
      const hits = []; res.forEach((r, i) => r.status === "fulfilled" && (r.value.messages || []).forEach(m => !m.deleted && m.text && hits.push({ m, u: list[i].user })));
      hits.sort((a, c) => new Date(c.m.createdAt) - new Date(a.m.createdAt));
      if (!hits.length) return b.append(h("div", { class: "empty" }, h("div", { class: "big" }, "💬"), h("p", {}, "No messages found for “" + q + "”.")));
      b.append(h("div", { class: "gsh2" }, hits.length + " message(s)"), gsPaged(hits, x => h("div", { class: "row gsr", onclick: () => gsOpen(x.u) }, avatar(x.u, "sm"),
        h("div", { class: "mid" }, h("b", {}, x.u.name), h("small", { class: "sn" }, gsHL(x.m.text, q))), h("div", { class: "rt" }, h("span", {}, when(x.m.createdAt))))));
    }
  } catch (e) {
    if (my !== gsSeq) return; b.textContent = "";
    b.append(h("div", { class: "empty gserr" }, h("div", { class: "big" }, "⚠️"), h("p", {}, e.message || "Search failed"), h("button", { class: "btn", onclick: () => gsRun(q, f) }, "Try again")));
  }
}
$("gsq").oninput = () => { clearTimeout(gsT); const q = gsClean(); $("gsclr").hidden = !$("gsq").value; if (q.length < 2) { gsSeq++; gsIdle(); return; } gsT = setTimeout(() => gsRun(q, gsF), 350); };
$("gsq").onkeydown = e => { if (e.key === "Enter") { const q = gsClean(); if (q.length >= 2) { clearTimeout(gsT); addRecent(q); gsRun(q, gsF); } } if (e.key === "Escape") closeSearch(); };
$("gsclr").onclick = () => { $("gsq").value = ""; $("gsq").focus(); gsSeq++; gsIdle(); };
$("gsback").onclick = closeSearch;
$("gsp").onclick = e => { if (e.target.id === "gsp") closeSearch(); };
$("gstabs").onclick = e => { const t = e.target.closest("button"); if (!t) return; gsF = t.dataset.f; document.querySelectorAll("#gstabs button").forEach(x => x.classList.toggle("on", x === t)); const q = gsClean(); q.length >= 2 ? gsRun(q, gsF) : gsIdle(); };

/* ---------- start ---------- */
(async () => {
  try {
    me = (await api("/me")).user; setMeBtn();
    // Generate / restore E2EE keys and upload public key (private stays on device)
    try { await E2EE.ensureKeys(); me.hasE2EE = true; } catch (e) { console.warn("E2EE setup failed", e); }
    await Promise.all([loadConvs(), loadCalls()]);
    missed = callsList.filter(c => c.direction === "incoming" && c.status === "missed" && Date.now() - new Date(c.startedAt) < 864e5).length;
    renderList(); renderChat(); loadStories(); initSW();
    const u = new URLSearchParams(location.search).get("u"); if (u) { const { users } = await api("/users/search?q=" + encodeURIComponent(u)); const f = users.find(x => x.username === u.toLowerCase()); if (f) openChat(f); }
  } catch (e) { if (e.message !== "Please login") fail(e); }
})();
