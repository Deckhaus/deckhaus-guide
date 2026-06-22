/* @ds-bundle: {"format":3,"namespace":"DeckhausDesignSystem_ca5964","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ServiceRow","sourcePath":"components/editorial/ServiceRow.jsx"},{"name":"StatBlock","sourcePath":"components/editorial/StatBlock.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"292202b8d2cb","components/core/Badge.jsx":"cd719d17cf5b","components/core/Button.jsx":"22179dea161f","components/core/Card.jsx":"46e637ab3a6b","components/core/Eyebrow.jsx":"207e438b6e87","components/core/IconButton.jsx":"6ac085a4d00f","components/core/Tag.jsx":"ce5044aa72c0","components/editorial/ServiceRow.jsx":"3bddc3d7b544","components/editorial/StatBlock.jsx":"158368568da9","components/forms/Checkbox.jsx":"dd483514fc16","components/forms/Input.jsx":"5aa9ad494bb1","components/forms/Select.jsx":"a8ad0559e694","components/forms/Switch.jsx":"e2c43e96a158","components/forms/Textarea.jsx":"133add6655e7","ui_kits/website/Chrome.jsx":"692041565d21","ui_kits/website/HomeView.jsx":"68717fbadbe8","ui_kits/website/Views.jsx":"3dc39329a4ef","ui_kits/website/data.js":"0ae9ce36425d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DeckhausDesignSystem_ca5964 = window.DeckhausDesignSystem_ca5964 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar with image or initials fallback. */
function Avatar({
  src,
  name = "",
  size = "md",
  className = "",
  ...rest
}) {
  const initials = name.split(" ").map(p => p[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const cls = ["dh-avatar", `dh-avatar--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", null, initials || "—"));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Compact mono uppercase status/label chip. */
function Badge({
  variant = "default",
  dot = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["dh-badge", variant !== "default" ? `dh-badge--${variant}` : "", dot ? "dh-badge--dot" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Deckhaus primary action button. Lime by default; secondary/ghost/solid
 * variants for supporting actions. One primary per view.
 */
function Button({
  variant = "primary",
  size = "md",
  block = false,
  href,
  leadingIcon,
  trailingIcon,
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["dh-btn", `dh-btn--${variant}`, `dh-btn--${size}`, block ? "dh-btn--block" : "", className].filter(Boolean).join(" ");
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, leadingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "dh-btn__icon",
    "aria-hidden": "true"
  }, leadingIcon) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, trailingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "dh-btn__icon",
    "aria-hidden": "true"
  }, trailingIcon) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled,
    "aria-disabled": disabled || undefined
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. Composable; use interactive for hover lift. */
function Card({
  interactive = false,
  accent = false,
  flush = false,
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  const cls = ["dh-card", interactive ? "dh-card--interactive" : "", accent ? "dh-card--accent" : "", flush ? "dh-card--flush" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono uppercase eyebrow label with a lime tick. */
function Eyebrow({
  accent = false,
  plain = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["dh-eyebrow-c", accent ? "dh-eyebrow-c--accent" : "", plain ? "dh-eyebrow-c--plain" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only button. Pass an icon node as children. */
function IconButton({
  variant = "default",
  size = "md",
  label,
  className = "",
  children,
  ...rest
}) {
  const cls = ["dh-iconbtn", variant === "ghost" ? "dh-iconbtn--ghost" : "", variant === "accent" ? "dh-iconbtn--accent" : "", `dh-iconbtn--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill tag, optionally interactive (filter chips). */
function Tag({
  interactive = false,
  active = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["dh-tag", interactive ? "dh-tag--interactive" : "", active ? "dh-tag--active" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ServiceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered editorial service row — the dossier's signature list pattern. */
function ServiceRow({
  index,
  title,
  description,
  action,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["dh-service", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "dh-service__idx"
  }, index), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "dh-service__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "dh-service__desc"
  }, description) : null), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 4
    }
  }, action) : null);
}
Object.assign(__ds_scope, { ServiceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ServiceRow.jsx", error: String((e && e.message) || e) }); }

// components/editorial/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big display stat. Wrap the accented portion of `value` with the unit prop
 * or pass a string like "70%"; the unit/suffix renders in lime.
 */
function StatBlock({
  value,
  unit,
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["dh-stat", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "dh-stat__value"
  }, value, unit ? /*#__PURE__*/React.createElement("em", null, unit) : null), label ? /*#__PURE__*/React.createElement("span", {
    className: "dh-stat__label"
  }, label) : null);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label. Controlled via checked/onChange. */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    className: ["dh-check", className].filter(Boolean).join(" "),
    "data-checked": checked
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "dh-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled text input with optional hint/error. */
function Input({
  label,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  const fieldId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ["dh-field", error ? "dh-field--error" : "", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "dh-label",
    htmlFor: fieldId
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "dh-input"
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "dh-hint dh-hint--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "dh-hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled native select. */
function Select({
  label,
  hint,
  options = [],
  id,
  className = "",
  children,
  ...rest
}) {
  const fieldId = id || (label ? `se-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ["dh-field", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "dh-label",
    htmlFor: fieldId
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: "dh-select"
  }, rest), children || options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), hint ? /*#__PURE__*/React.createElement("span", {
    className: "dh-hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch. Controlled via checked/onChange. */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  const btn = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    className: "dh-switch",
    "data-checked": checked,
    onClick: toggle
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "dh-switch__thumb"
  }));
  if (!label) return btn;
  return /*#__PURE__*/React.createElement("label", {
    className: ["dh-check", className].filter(Boolean).join(" "),
    style: {
      cursor: "pointer"
    }
  }, btn, /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled multi-line text area. */
function Textarea({
  label,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  const fieldId = id || (label ? `ta-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ["dh-field", error ? "dh-field--error" : "", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "dh-label",
    htmlFor: fieldId
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    className: "dh-textarea"
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "dh-hint dh-hint--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "dh-hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
// Shared website chrome: Nav + Footer
const NS = window.DeckhausDesignSystem_ca5964;

// tone: "dark" → white mark, "light" → black mark
function Mark({
  size = 26,
  tone = "dark"
}) {
  const src = tone === "light" ? "../../assets/logos/deckhaus-mark-black.svg" : "../../assets/logos/deckhaus-mark-white.svg";
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    style: {
      height: size,
      display: "block"
    },
    alt: ""
  });
}
function Wordmark({
  tone = "dark"
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      window.DH_NAV("home");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 24,
    tone: tone
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      letterSpacing: "0",
      color: "var(--text-primary)"
    }
  }, "deckhaus"));
}

// tone controls the surface the nav sits on: "dark" or "light"
function Nav({
  view,
  tone = "dark"
}) {
  const {
    Button
  } = NS;
  const items = [["work", "Work"], ["services", "Services"], ["sprint", "Visual Sprint"]];
  const [scrolled, setScrolled] = React.useState(false);
  const [navTone, setNavTone] = React.useState(tone);
  React.useEffect(() => {
    const probe = () => {
      const y = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(y > 28);
      // which section sits behind the header band?
      let t = "light";
      document.querySelectorAll("main section, footer").forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top <= 70 && r.bottom > 70) t = el.getAttribute("data-theme") === "dark" ? "dark" : "light";
      });
      setNavTone(t);
    };
    probe();
    const raf = requestAnimationFrame(probe);
    window.addEventListener("scroll", probe, {
      passive: true
    });
    document.addEventListener("scroll", probe, {
      passive: true,
      capture: true
    });
    window.addEventListener("resize", probe);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", probe);
      document.removeEventListener("scroll", probe, {
        capture: true
      });
      window.removeEventListener("resize", probe);
    };
  }, [view]);
  const blur = "blur(26px) saturate(190%) contrast(105%)";
  const darkGlass = {
    background: "color-mix(in srgb, var(--bg-base) 32%, transparent)",
    backdropFilter: blur,
    WebkitBackdropFilter: blur,
    borderBottom: "1px solid color-mix(in srgb, var(--paper) 12%, transparent)",
    boxShadow: "0 1px 0 rgba(255,255,255,.06) inset, 0 10px 34px -20px rgba(0,0,0,.7)"
  };
  const lightGlass = {
    background: "color-mix(in srgb, var(--paper) 64%, transparent)",
    backdropFilter: blur,
    WebkitBackdropFilter: blur,
    borderBottom: "1px solid color-mix(in srgb, var(--text-primary) 9%, transparent)",
    boxShadow: "0 1px 0 rgba(255,255,255,.5) inset, 0 10px 34px -22px rgba(0,0,0,.22)"
  };
  const transparent = {
    background: "transparent",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    borderBottom: "1px solid transparent",
    boxShadow: "none"
  };
  const glass = !scrolled ? transparent : navTone === "dark" ? darkGlass : lightGlass;
  return /*#__PURE__*/React.createElement("header", {
    "data-theme": navTone,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      transition: "background .4s ease, backdrop-filter .4s ease, border-color .4s ease, box-shadow .4s ease",
      ...glass
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "0 var(--page-margin)",
      height: 74,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: navTone
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    onClick: e => {
      e.preventDefault();
      window.DH_NAV(id);
    },
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      padding: "8px 14px",
      borderRadius: "var(--radius-md)",
      color: view === id ? "var(--text-primary)" : "var(--text-muted)",
      background: view === id ? "var(--surface-hover)" : "transparent",
      transition: "color .15s, background .15s"
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => window.DH_NAV("contact")
  }, "Start a project"))));
}
function Footer() {
  const cols = [["Studio", ["Work", "Services", "Visual Sprint", "About"]], ["Services", ["Strategic presentations", "Content systems", "Brand experiences"]], ["Connect", ["hola@deckhaus.studio", "LinkedIn", "Instagram"]]];
  return /*#__PURE__*/React.createElement("footer", {
    "data-theme": "dark",
    style: {
      background: "var(--bg-base)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "84px var(--page-margin) 44px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 28,
    tone: "dark"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 28,
      letterSpacing: "0",
      color: "var(--text-primary)"
    }
  }, "deckhaus")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 290,
      color: "var(--text-muted)",
      fontSize: 15,
      lineHeight: 1.6,
      margin: 0
    }
  }, "Visual systems for brands that need to present, launch and grow.")), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "dh-eyebrow",
    style: {
      marginBottom: 18
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--text-secondary)",
      fontSize: 14
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      paddingTop: 26,
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-disabled)"
    }
  }, "\xA9 2026 Deckhaus Studio \xB7 Built across borders"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-disabled)",
      letterSpacing: ".14em",
      textTransform: "uppercase"
    }
  }, "Enhanced by AI \xB7 Crafted by humans"))));
}
Object.assign(window, {
  Nav,
  Footer,
  Mark,
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeView.jsx
try { (() => {
// Home view
const HV_NS = window.DeckhausDesignSystem_ca5964;

// Small shared bits for the hero deck cards
function HeroEyebrow({
  children,
  right
}) {
  const tick = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 2,
      background: "var(--lime-500)",
      flex: "none"
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      justifyContent: right ? "flex-end" : "flex-start"
    }
  }, right ? null : tick, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      lineHeight: 1.4,
      letterSpacing: ".22em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, children), right ? tick : null);
}

// Card 1 — an animated presentation building itself (what Deckhaus really sells)
function PptSlide({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 20%",
      height: "100%",
      boxSizing: "border-box",
      padding: "13px 15px",
      background: "#F4F4EF",
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid rgba(0,0,0,.06)"
    }
  }, children);
}
function PptBar({
  w,
  h,
  c,
  mt
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      background: c,
      borderRadius: 2,
      marginTop: mt || 0
    }
  });
}
function HeroCardPresentation() {
  const INK = "rgba(10,10,11,.82)",
    MUT = "rgba(10,10,11,.28)",
    LIME = "var(--lime-500)";
  const TitleSlide = () => /*#__PURE__*/React.createElement(PptSlide, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      background: LIME,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8,
      letterSpacing: ".16em",
      color: INK
    }
  }, "DECKHAUS")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement(PptBar, {
    w: "74%",
    h: 10,
    c: INK
  }), /*#__PURE__*/React.createElement(PptBar, {
    w: "54%",
    h: 10,
    c: INK,
    mt: 6
  }), /*#__PURE__*/React.createElement(PptBar, {
    w: "40%",
    h: 4,
    c: MUT,
    mt: 11
  })));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(HeroEyebrow, null, "Presentation"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Keynote-ready")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      position: "relative",
      aspectRatio: "16 / 9",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      border: "1px solid var(--border-default)",
      boxShadow: "0 24px 50px -30px rgba(0,0,0,.8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dh-ppt-anim",
    style: {
      display: "flex",
      width: "500%",
      height: "100%",
      animation: "dh-ppt-track 14s cubic-bezier(.7,0,.3,1) infinite"
    }
  }, /*#__PURE__*/React.createElement(TitleSlide, null), /*#__PURE__*/React.createElement(PptSlide, null, /*#__PURE__*/React.createElement(PptBar, {
    w: "46%",
    h: 8,
    c: INK
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: i === 0 ? LIME : MUT,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement(PptBar, {
    w: ["80%", "68%", "74%"][i],
    h: 5,
    c: i === 0 ? INK : MUT
  }))))), /*#__PURE__*/React.createElement(PptSlide, null, /*#__PURE__*/React.createElement(PptBar, {
    w: "42%",
    h: 8,
    c: INK
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "flex-end",
      gap: 9,
      height: "56%"
    }
  }, [0.5, 0.78, 0.62, 1].map((hf, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dh-ppt-anim",
    style: {
      flex: 1,
      height: hf * 100 + "%",
      background: i === 3 ? LIME : INK,
      transformOrigin: "bottom",
      animation: `dh-grow 3.4s ease-in-out ${-i * 0.3}s infinite`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      width: "100%",
      background: MUT,
      marginTop: 6
    }
  })), /*#__PURE__*/React.createElement(PptSlide, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(PptBar, {
    w: "68%",
    h: 10,
    c: INK
  }), /*#__PURE__*/React.createElement(PptBar, {
    w: "48%",
    h: 10,
    c: INK,
    mt: 6
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 3,
      background: LIME,
      marginTop: 12
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 7.5,
      letterSpacing: ".18em",
      color: MUT,
      marginTop: 12
    }
  }, "THE ASK"))), /*#__PURE__*/React.createElement(TitleSlide, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      marginTop: 14
    }
  }, [1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dh-ppt-anim",
    style: {
      flex: 1,
      aspectRatio: "16 / 9",
      background: "rgba(255,255,255,.04)",
      border: "1px solid rgba(0,0,0,.14)",
      borderRadius: 2,
      animation: `dh-th${i} 14s linear infinite`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      padding: 4,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 2,
      width: "55%",
      background: "rgba(244,244,239,.5)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1.5,
      width: "80%",
      background: "rgba(244,244,239,.22)"
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 2,
      background: "rgba(255,255,255,.12)",
      marginTop: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dh-ppt-anim",
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--lime-500)",
      transformOrigin: "left",
      animation: "dh-ppt-prog 14s linear infinite"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(HeroEyebrow, {
    right: true
  }, "Built slide by slide")));
}

// Card 2 — services as a schematic
function HeroCardServices() {
  const D = window.DH_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroEyebrow, null, "What we do"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: 1
    }
  }, D.lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l.title,
    style: {
      display: "grid",
      gridTemplateColumns: "34px 1fr",
      gap: 16,
      alignItems: "baseline",
      padding: "16px 0",
      borderTop: `${i === 0 ? "2px" : "1px"} solid ${i === 0 ? "var(--accent-tick)" : "var(--border-subtle)"}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".08em",
      color: i === 0 ? "var(--lime-500)" : "var(--text-muted)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(18px,1.7vw,22px)",
      lineHeight: 1.12,
      color: "var(--paper)"
    }
  }, l.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginTop: 7
    }
  }, l.tags.join("  ·  ")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(HeroEyebrow, {
    right: true
  }, "Three scales, one idea")));
}

// Card 3 — the key idea, as a fragmentation → system schematic
function HeroCardIdea() {
  const scatter = [{
    l: "2%",
    t: "8%",
    r: -9
  }, {
    l: "44%",
    t: "0%",
    r: 6
  }, {
    l: "20%",
    t: "52%",
    r: -4
  }, {
    l: "60%",
    t: "46%",
    r: 8
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroEyebrow, null, "The thesis"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "1fr 40px 1fr",
      alignItems: "center",
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 12
    }
  }, "Fragmented"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 120
    }
  }, scatter.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      left: s.l,
      top: s.t,
      width: "38%",
      height: 26,
      border: "1px solid rgba(255,255,255,.16)",
      background: "rgba(255,255,255,.02)",
      transform: `rotate(${s.r}deg)`
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      color: "var(--lime-500)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "14",
    viewBox: "0 0 26 14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "7",
    x2: "24",
    y2: "7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "18 2 24 7 18 12"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--text-accent)",
      marginBottom: 12
    }
  }, "One system"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 32,
      border: `1px solid ${i === 0 ? "var(--lime-500)" : "rgba(255,255,255,.18)"}`,
      borderTop: i === 0 ? "2px solid var(--lime-500)" : undefined,
      background: i === 0 ? "rgba(183,201,74,.07)" : "rgba(255,255,255,.02)"
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(17px,1.7vw,21px)",
      lineHeight: 1.22,
      color: "var(--paper)",
      marginTop: 14,
      maxWidth: "26ch"
    }
  }, "Not a design problem \u2014 a communication-system problem."));
}

// Card 4 — a design preview (placeholder for real artwork)
function HeroCardDesign() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(HeroEyebrow, null, "Selected design"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Fig. 01")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      flex: 1,
      position: "relative",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      background: "linear-gradient(150deg,#16241a,#0b0f0c)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "repeating-linear-gradient(135deg, rgba(255,255,255,.045) 0 9px, transparent 9px 18px)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/deckhaus-mark-lime.svg",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      height: 86,
      opacity: .5
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "rgba(244,244,239,.5)"
    }
  }, "Drop artwork"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      bottom: 16,
      fontFamily: "var(--font-display)",
      fontSize: "clamp(20px,2.1vw,28px)",
      lineHeight: 1.05,
      color: "var(--paper)"
    }
  }, "Experience Ceremony")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(HeroEyebrow, {
    right: true
  }, "Placeholder \u2014 your work here")));
}
function HeroPanel() {
  // Dynamic hero deck: auto-rotates through the system, services, the
  // key idea (as a schematic) and a design preview placeholder.
  const cards = [HeroCardPresentation, HeroCardServices, HeroCardIdea, HeroCardDesign];
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(p => (p + 1) % cards.length), 4200);
    return () => clearInterval(t);
  }, [paused, cards.length]);
  return /*#__PURE__*/React.createElement("div", {
    className: "dh-rise",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      animationDelay: ".14s",
      position: "relative",
      aspectRatio: "4 / 3.4",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      border: "1px solid var(--border-default)",
      background: "linear-gradient(155deg, #161616, #0b0b0d)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
      backgroundSize: "44px 44px",
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 3,
      display: "flex",
      gap: 4,
      padding: "10px clamp(22px,3vw,32px) 0"
    }
  }, cards.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setI(idx),
    "aria-label": `View ${idx + 1}`,
    style: {
      flex: 1,
      height: 3,
      padding: 0,
      border: "none",
      cursor: "pointer",
      borderRadius: 2,
      background: idx === i ? "var(--lime-500)" : "rgba(255,255,255,.16)",
      transition: "background .3s"
    }
  }))), cards.map((C, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "dh-deck-card",
    "aria-hidden": idx !== i,
    style: {
      position: "absolute",
      inset: 0,
      padding: "clamp(28px,3.4vw,38px) clamp(22px,3vw,32px) clamp(22px,3vw,32px)",
      display: "flex",
      flexDirection: "column",
      opacity: idx === i ? 1 : 0,
      transform: idx === i ? "translateY(0)" : "translateY(10px)",
      pointerEvents: idx === i ? "auto" : "none"
    }
  }, /*#__PURE__*/React.createElement(C, null))));
}
function VisualSprintLoop() {
  // Embedded, container-scaled port of the "Loop 06 — Visual Sprint" brand loop.
  // cqw units scale every element to the framed 16:9 container.
  const cards = [{
    delay: "-0.2s"
  }, {
    delay: "-0.5s"
  }, {
    sel: true
  }, {
    delay: "-0.8s"
  }, {
    delay: "-1.1s"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "16 / 9",
      containerType: "size",
      background: "#0A0A0B",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
      backgroundSize: "5% 8.8%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "27%",
      transform: "translateX(-50%)",
      width: "68%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "50%",
      height: 1,
      background: "rgba(255,255,255,0.10)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dh-vsl",
    style: {
      position: "absolute",
      left: 0,
      top: "50%",
      height: 1,
      background: "var(--lime-500)",
      animation: "dh-fill 7s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-vsl",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "2cqw",
      color: "rgba(244,244,239,.7)",
      background: "#0A0A0B",
      padding: "0 1cqw",
      animation: "dh-w1 7s ease-in-out infinite"
    }
  }, "Briefing"), /*#__PURE__*/React.createElement("span", {
    className: "dh-vsl",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "2cqw",
      color: "rgba(244,244,239,.7)",
      background: "#0A0A0B",
      padding: "0 1cqw",
      animation: "dh-w2 7s ease-in-out infinite"
    }
  }, "Explore"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "2cqw",
      color: "rgba(244,244,239,.7)",
      background: "#0A0A0B",
      padding: "0 1cqw"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-vsl",
    style: {
      position: "relative",
      zIndex: 1,
      animation: "dh-w3 7s ease-in-out infinite"
    }
  }, "Align"), /*#__PURE__*/React.createElement("span", {
    className: "dh-vsl",
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: "calc(100% + 1cqw)",
      aspectRatio: "1 / 1",
      height: "auto",
      border: "1.5px solid var(--lime-500)",
      borderRadius: "50%",
      transform: "translate(-50%,-50%)",
      animation: "dh-ring 7s ease-out infinite"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "dh-vsl",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "2cqw",
      color: "rgba(244,244,239,.7)",
      background: "#0A0A0B",
      padding: "0 1cqw",
      animation: "dh-w4 7s ease-in-out infinite"
    }
  }, "Craft"), /*#__PURE__*/React.createElement("span", {
    className: "dh-vsl",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "2cqw",
      color: "rgba(244,244,239,.7)",
      background: "#0A0A0B",
      padding: "0 1cqw",
      animation: "dh-w5 7s ease-in-out infinite"
    }
  }, "Delivery"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "56%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "1.6cqw"
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dh-vsl",
    style: {
      width: "5cqw",
      height: "7cqw",
      border: `1px solid ${c.sel ? "rgba(183,201,74,0.85)" : "rgba(255,255,255,0.12)"}`,
      background: c.sel ? "#1A1B14" : "#141417",
      padding: "0.7cqw",
      animation: c.sel ? "dh-sel 7s ease-in-out infinite" : "dh-other 7s ease-in-out infinite",
      animationDelay: c.delay || "0s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: c.sel ? "60%" : "50%",
      height: "0.4cqw",
      background: c.sel ? "var(--lime-500)" : "rgba(244,244,239,0.4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "85%",
      height: "0.25cqw",
      background: `rgba(244,244,239,${c.sel ? "0.35" : "0.18"})`,
      marginTop: "0.6cqw"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "68%",
      height: "0.25cqw",
      background: `rgba(244,244,239,${c.sel ? "0.35" : "0.18"})`,
      marginTop: "0.4cqw"
    }
  }), c.sel ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: "80%",
      height: "0.25cqw",
      background: "rgba(244,244,239,0.35)",
      marginTop: "0.4cqw"
    }
  }) : null))), /*#__PURE__*/React.createElement("div", {
    className: "dh-vsl",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "10%",
      textAlign: "center",
      animation: "dh-cap 7s ease-out infinite"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "2cqw",
      lineHeight: 1.3,
      color: "#F4F4EF"
    }
  }, "AI accelerates exploration.", /*#__PURE__*/React.createElement("br", null), "Human judgement defines the result.")));
}

// One case-study card — chrome mirrors the reference (CASE STUDY / NN·03 / meta / progress)
function CaseStudyCard({
  c,
  n,
  total,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": `Case study ${c.client}`,
    style: {
      all: "unset",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      cursor: active ? "default" : "pointer",
      boxSizing: "border-box",
      background: "#0E0E10",
      border: `1px solid ${active ? "rgba(183,201,74,.32)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-lg)",
      padding: "clamp(18px,1.5vw,24px)",
      boxShadow: active ? "0 40px 90px -40px rgba(0,0,0,.85)" : "0 20px 50px -30px rgba(0,0,0,.7)",
      transition: "border-color .4s ease, box-shadow .4s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 2,
      background: "var(--lime-500)"
    }
  }), "Case study"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: ".14em",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: active ? "var(--lime-500)" : "var(--text-secondary)"
    }
  }, String(n).padStart(2, "0")), " / ", String(total).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .55
    }
  }, "\u21BA"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .55
    }
  }, "\u2197"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 10",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      background: `linear-gradient(150deg, ${c.tone}, #0b0b0d)`,
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/deckhaus-mark-lime.svg",
    style: {
      position: "absolute",
      right: 18,
      bottom: 16,
      height: 56,
      opacity: .42
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "rgba(244,244,239,.45)"
    }
  }, "Fig. ", c.fig, " \u2014 artwork soon")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      margin: "22px 0 10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 2,
      background: "var(--lime-500)"
    }
  }), c.sector), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Visual Sprint")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(26px,2.6vw,38px)",
      lineHeight: 1.04,
      color: "var(--paper)"
    }
  }, c.client), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, c.year)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      flex: "none"
    }
  }, "Drag to explore"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      flex: 1
    }
  }, Array.from({
    length: 9
  }).map((_, k) => {
    const lit = k < Math.round(n / total * 9);
    return /*#__PURE__*/React.createElement("span", {
      key: k,
      style: {
        flex: 1,
        height: 2,
        background: lit ? "var(--lime-500)" : "rgba(255,255,255,.16)"
      }
    });
  }))));
}
function CaseShowcase() {
  const {
    Eyebrow,
    Button
  } = HV_NS;
  const cases = window.DH_DATA.cases;
  const [active, setActive] = React.useState(1); // center
  const order = [(active - 1 + cases.length) % cases.length, active, (active + 1) % cases.length];
  return /*#__PURE__*/React.createElement("section", {
    "data-theme": "dark",
    style: {
      position: "relative",
      background: "var(--bg-base)",
      borderBottom: "1px solid var(--border-subtle)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "var(--section-y) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      marginBottom: "clamp(40px,5vw,64px)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(34px,4.6vw,60px)",
      lineHeight: 1.08,
      letterSpacing: "0",
      margin: "26px 0 0",
      maxWidth: "18ch",
      color: "var(--paper)",
      textWrap: "balance"
    }
  }, "One idea, made ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lime-500)"
    }
  }, "presentation-ready."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive((active - 1 + cases.length) % cases.length),
    "aria-label": "Previous",
    className: "dh-case-nav"
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive((active + 1) % cases.length),
    "aria-label": "Next",
    className: "dh-case-nav"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      perspective: 1800
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.82fr 1fr 0.82fr",
      gap: "clamp(16px,1.6vw,28px)",
      alignItems: "center"
    }
  }, order.map((idx, slot) => {
    const isCenter = slot === 1;
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        transformStyle: "preserve-3d",
        transform: isCenter ? "none" : `scale(.93) rotateY(${slot === 0 ? 7 : -7}deg)`,
        opacity: isCenter ? 1 : .42,
        filter: isCenter ? "none" : "saturate(.85)",
        transition: "transform .5s cubic-bezier(.16,1,.3,1), opacity .5s ease, filter .5s ease",
        zIndex: isCenter ? 2 : 1
      }
    }, /*#__PURE__*/React.createElement(CaseStudyCard, {
      c: cases[idx],
      n: idx + 1,
      total: cases.length,
      active: isCenter,
      onClick: () => setActive(idx)
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: "clamp(36px,4vw,56px)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => window.DH_NAV("work"),
    trailingIcon: /*#__PURE__*/React.createElement(ArrowR, null)
  }, "See all case studies"))));
}

// Presentation-native belief diagrams — slide frames, grid, branch & signature
const DH_LIME = "#B7C94A";
const DH_STROKE = "rgba(255,255,255,.55)";
const DH_SOFT = "rgba(255,255,255,.28)";
const DH_FILL = "rgba(255,255,255,.025)";
function BeliefDiagram({
  kind
}) {
  if (kind === 1) {
    // 01-A — One system: a slide master radiates its grid + accent to every format
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 200 150",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "xMidYMid meet"
    }, /*#__PURE__*/React.createElement("g", {
      className: "dh-d",
      fill: "none",
      stroke: DH_LIME,
      strokeWidth: "1",
      strokeDasharray: "2.5 4.5",
      style: {
        animation: "dh-dash 1.1s linear infinite"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M82 64 L52 32"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M126 72 L160 58"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M100 90 L100 106"
    })), /*#__PURE__*/React.createElement("g", {
      className: "dh-d",
      style: {
        animation: "dh-floaty 7s ease-in-out infinite"
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: "74",
      y: "56",
      width: "52",
      height: "34",
      rx: "2.5",
      fill: DH_FILL,
      stroke: DH_STROKE,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "74",
      y: "56",
      width: "52",
      height: "5",
      rx: "1",
      fill: DH_LIME,
      opacity: ".9"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "80",
      y1: "70",
      x2: "120",
      y2: "70",
      stroke: DH_SOFT
    }), /*#__PURE__*/React.createElement("line", {
      x1: "80",
      y1: "76",
      x2: "112",
      y2: "76",
      stroke: DH_SOFT
    }), /*#__PURE__*/React.createElement("line", {
      x1: "80",
      y1: "82",
      x2: "118",
      y2: "82",
      stroke: DH_SOFT
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "26",
      y: "18",
      width: "40",
      height: "22",
      rx: "1.5",
      fill: DH_FILL,
      stroke: DH_STROKE,
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      className: "dh-d",
      x: "26",
      y: "18",
      width: "40",
      height: "3.5",
      fill: DH_LIME,
      style: {
        animation: "dh-accpulse 4.8s ease-in-out infinite"
      }
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "158",
      y: "40",
      width: "24",
      height: "40",
      rx: "1.5",
      fill: DH_FILL,
      stroke: DH_STROKE,
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      className: "dh-d",
      x: "158",
      y: "40",
      width: "24",
      height: "3.5",
      fill: DH_LIME,
      style: {
        animation: "dh-accpulse 4.8s ease-in-out .5s infinite"
      }
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "60",
      y: "108",
      width: "80",
      height: "22",
      rx: "1.5",
      fill: DH_FILL,
      stroke: DH_STROKE,
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      className: "dh-d",
      x: "60",
      y: "108",
      width: "80",
      height: "3.5",
      fill: DH_LIME,
      style: {
        animation: "dh-accpulse 4.8s ease-in-out 1s infinite"
      }
    })));
  }
  if (kind === 2) {
    // 02-B — Decide before you produce: branches lock to one route, then it produces
    const track = [{
      x: 120,
      w: 15,
      d: 0
    }, {
      x: 139,
      w: 15,
      d: 0.1
    }, {
      x: 158,
      w: 15,
      d: 0.2
    }, {
      x: 177,
      w: 13,
      d: 0.3
    }];
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 200 150",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "xMidYMid meet"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "62",
      width: "26",
      height: "26",
      rx: "2",
      fill: DH_FILL,
      stroke: DH_STROKE,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "70",
      x2: "32",
      y2: "70",
      stroke: DH_SOFT
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "76",
      x2: "29",
      y2: "76",
      stroke: DH_SOFT
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "82",
      x2: "32",
      y2: "82",
      stroke: DH_SOFT
    }), /*#__PURE__*/React.createElement("path", {
      className: "dh-d",
      d: "M38 75 C58 58, 60 36, 76 31",
      fill: "none",
      stroke: DH_STROKE,
      strokeWidth: "1.2",
      strokeDasharray: "64",
      style: {
        animation: "dh-branch 6s ease-in-out infinite"
      }
    }), /*#__PURE__*/React.createElement("path", {
      className: "dh-d",
      d: "M38 75 L76 75",
      fill: "none",
      stroke: DH_LIME,
      strokeWidth: "1.4",
      strokeDasharray: "64",
      style: {
        animation: "dh-branch 6s ease-in-out .15s infinite"
      }
    }), /*#__PURE__*/React.createElement("path", {
      className: "dh-d",
      d: "M38 75 C58 92, 60 114, 76 119",
      fill: "none",
      stroke: DH_STROKE,
      strokeWidth: "1.2",
      strokeDasharray: "64",
      style: {
        animation: "dh-branch 6s ease-in-out .3s infinite"
      }
    }), /*#__PURE__*/React.createElement("g", {
      className: "dh-d",
      style: {
        animation: "dh-dim 6s ease-in-out infinite"
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: "78",
      y: "22",
      width: "30",
      height: "18",
      rx: "1.5",
      fill: DH_FILL,
      stroke: DH_STROKE,
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "83",
      y1: "31",
      x2: "103",
      y2: "31",
      stroke: DH_SOFT
    })), /*#__PURE__*/React.createElement("g", {
      className: "dh-d",
      style: {
        animation: "dh-dim 6s ease-in-out infinite"
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: "78",
      y: "110",
      width: "30",
      height: "18",
      rx: "1.5",
      fill: DH_FILL,
      stroke: DH_STROKE,
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "83",
      y1: "119",
      x2: "103",
      y2: "119",
      stroke: DH_SOFT
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "78",
      y: "66",
      width: "30",
      height: "18",
      rx: "1.5",
      fill: "rgba(183,201,74,.10)",
      stroke: DH_LIME,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "83",
      y1: "75",
      x2: "103",
      y2: "75",
      stroke: DH_LIME,
      opacity: ".7"
    })), /*#__PURE__*/React.createElement("g", {
      fill: DH_FILL,
      stroke: DH_STROKE,
      strokeWidth: "1"
    }, track.map((t, i) => /*#__PURE__*/React.createElement("g", {
      key: i,
      className: "dh-d",
      style: {
        animation: `dh-track 6s ease-in-out ${t.d}s infinite`
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: t.x,
      y: "67",
      width: t.w,
      height: "17",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: t.x,
      y: "67",
      width: t.w,
      height: "2.5",
      fill: DH_LIME,
      stroke: "none"
    })))));
  }

  // 03-A — AI accelerates; people decide: a generated grid, one chosen + signed
  const cells = [{
    x: 14,
    y: 20,
    x2: 38
  }, {
    x: 55,
    y: 20,
    x2: 76
  }, {
    x: 96,
    y: 20,
    x2: 122
  }, {
    x: 137,
    y: 20,
    x2: 160
  }, {
    x: 14,
    y: 58,
    x2: 40
  }, {
    x: 55,
    y: 58,
    x2: 78
  }, {
    x: 96,
    y: 58,
    x2: 120
  }, {
    x: 137,
    y: 58,
    x2: 162
  }, {
    x: 14,
    y: 96,
    x2: 38
  }, {
    x: 55,
    y: 96,
    x2: 80
  }, {
    x: 96,
    y: 96,
    x2: 118
  }, {
    x: 137,
    y: 96,
    x2: 160
  }];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 150",
    width: "100%",
    height: "100%",
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/React.createElement("g", {
    fill: DH_FILL,
    stroke: DH_STROKE,
    strokeWidth: ".9"
  }, cells.map((c, i) => /*#__PURE__*/React.createElement("g", {
    key: i,
    className: "dh-d",
    style: {
      animation: `dh-flick 6s ease-in-out ${(i * 0.05).toFixed(2)}s infinite`
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: c.x,
    y: c.y,
    width: "34",
    height: "26",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: c.x + 5,
    y1: c.y + 8,
    x2: c.x2,
    y2: c.y + 8,
    stroke: DH_SOFT
  })))), /*#__PURE__*/React.createElement("g", {
    className: "dh-d",
    style: {
      animation: "dh-pickshow 6s ease-in-out infinite"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "94",
    y: "56",
    width: "38",
    height: "30",
    rx: "2",
    fill: "rgba(183,201,74,.12)",
    stroke: DH_LIME,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    className: "dh-d",
    x1: "96",
    y1: "92",
    x2: "130",
    y2: "92",
    stroke: DH_LIME,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeDasharray: "34",
    style: {
      animation: "dh-sign 6s ease-in-out infinite"
    }
  })));
}
function ManifestoCard({
  n,
  title,
  desc,
  kind,
  idx
}) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.3
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const delay = idx * 0.13;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "dh-mf" + (seen ? " in-view" : ""),
    style: {
      transitionDelay: delay + "s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 156,
      marginBottom: 24,
      overflow: "hidden",
      background: "#0A0A0C",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement(BeliefDiagram, {
    kind: kind
  })), /*#__PURE__*/React.createElement("span", {
    className: "dh-mf-line",
    style: {
      transitionDelay: delay + 0.15 + "s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      letterSpacing: ".1em",
      color: "var(--text-accent)"
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 19,
      lineHeight: 1.3,
      letterSpacing: "0",
      margin: "18px 0 12px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 15.5,
      lineHeight: 1.6,
      margin: 0
    }
  }, desc)));
}
function HomeView() {
  const {
    Button,
    Eyebrow,
    StatBlock,
    Badge,
    Tag,
    Card
  } = HV_NS;
  const D = window.DH_DATA;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    "data-theme": "dark",
    style: {
      position: "relative",
      background: "var(--bg-base)",
      borderBottom: "1px solid var(--border-subtle)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/work-wall.png",
    alt: "",
    className: "dh-wall-img",
    style: {
      position: "absolute",
      top: "-6%",
      left: "-6%",
      width: "112%",
      height: "112%",
      objectFit: "cover",
      objectPosition: "center",
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(10,10,11,.05) 0%, rgba(10,10,11,.12) 45%, rgba(10,10,11,.45) 80%, var(--bg-base) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(115% 80% at 28% 40%, rgba(10,10,11,.78) 0%, rgba(10,10,11,.3) 48%, transparent 78%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "clamp(56px,8vw,116px) var(--page-margin) clamp(56px,7vw,96px)",
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: 72,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dh-rise"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Boutique visual communication studio")), /*#__PURE__*/React.createElement("h1", {
    className: "dh-rise",
    style: {
      animationDelay: ".08s",
      fontFamily: "var(--font-display)",
      fontSize: "clamp(46px, 6.6vw, 82px)",
      lineHeight: 1.1,
      letterSpacing: "0",
      margin: "34px 0 0",
      textWrap: "balance"
    }
  }, "Present.", /*#__PURE__*/React.createElement("br", null), "Launch. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lime-500)"
    }
  }, "Grow.")), /*#__PURE__*/React.createElement("p", {
    className: "dh-rise",
    style: {
      animationDelay: ".16s",
      fontSize: 19,
      lineHeight: 1.62,
      color: "var(--text-secondary)",
      maxWidth: "48ch",
      margin: "36px 0 0"
    }
  }, "Most companies don't have a design problem \u2014 they have a communication-system problem. Deckhaus builds the visual systems behind how a brand presents, launches and grows."), /*#__PURE__*/React.createElement("div", {
    className: "dh-rise",
    style: {
      animationDelay: ".24s",
      display: "flex",
      gap: 14,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => window.DH_NAV("contact"),
    trailingIcon: /*#__PURE__*/React.createElement(ArrowR, null)
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => window.DH_NAV("work")
  }, "View work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: "clamp(40px,5vw,64px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      background: "var(--lime-500)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      lineHeight: 1.4,
      letterSpacing: ".2em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, "One message \xB7 many moments"))), /*#__PURE__*/React.createElement(HeroPanel, null))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "26px var(--page-margin)",
      display: "flex",
      gap: "clamp(28px,4vw,56px)",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-eyebrow",
    style: {
      flex: "none"
    }
  }, "Trusted by"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "clamp(26px,3.4vw,52px)",
      alignItems: "center",
      flexWrap: "wrap",
      flex: 1
    }
  }, ["Lacoste", "TED", "Rolex", "JURA", "On", "Swissquote"].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(17px,1.5vw,21px)",
      letterSpacing: ".02em",
      color: "var(--text-secondary)",
      opacity: .82
    }
  }, t))))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-content)",
      margin: "0 auto",
      padding: "var(--section-y) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What we believe"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(34px,5vw,68px)",
      lineHeight: 1.12,
      letterSpacing: "0",
      margin: "34px 0 0",
      maxWidth: "20ch",
      textWrap: "balance"
    }
  }, "We don't just design pieces. We design how a brand ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "appears"), " in front of an audience."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 40,
      marginTop: "clamp(48px,6vw,72px)"
    }
  }, [["01", "One system, not many pieces.", "A deck, a campaign and an event should look like the same thinking — we build the language, not the one-off.", 1], ["02", "Decide before you produce.", "Alignment before execution. We validate the direction visually, so everything after is faster and more coherent.", 2], ["03", "AI accelerates; people decide.", "It widens exploration and removes repetition. Judgement still chooses the route and signs the work.", 3]].map(([n, t, d, kind], i) => /*#__PURE__*/React.createElement(ManifestoCard, {
    key: n,
    n: n,
    title: t,
    desc: d,
    kind: kind,
    idx: i
  }))))), /*#__PURE__*/React.createElement(CaseShowcase, null), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "var(--section-y) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "clamp(30px,4vw,48px)",
      lineHeight: 1.14,
      letterSpacing: "0",
      margin: "22px 0 0",
      maxWidth: "16ch"
    }
  }, "Three scales of one idea."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 16,
      lineHeight: 1.6,
      margin: "18px 0 0",
      maxWidth: "40ch"
    }
  }, "Not three markets \u2014 three scales of the same problem: how a brand shows up, stays clear and becomes memorable.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => window.DH_NAV("services"),
    trailingIcon: /*#__PURE__*/React.createElement(ArrowR, null)
  }, "All services")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "clamp(32px,4vw,56px)"
    }
  }, D.lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l.title,
    style: {
      display: "flex",
      flexDirection: "column",
      borderTop: `${i === 0 ? "2px" : "1px"} solid ${i === 0 ? "var(--accent-tick)" : "var(--border-default)"}`,
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      lineHeight: 1.4,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: i === 0 ? "var(--text-accent)" : "var(--text-muted)"
    }
  }, i === 0 ? "01 — Core" : String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      lineHeight: 1.4,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, l.scale)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(27px,2.4vw,36px)",
      lineHeight: 1.14,
      letterSpacing: "0",
      margin: "26px 0 16px",
      maxWidth: "12ch"
    }
  }, l.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 15.5,
      lineHeight: 1.62,
      margin: 0,
      flex: 1
    }
  }, l.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      lineHeight: 1.5,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginTop: 26
    }
  }, l.tags.join("  ·  ")))))), /*#__PURE__*/React.createElement("section", {
    "data-theme": "dark",
    style: {
      background: "var(--bg-base)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "var(--section-y) var(--page-margin)",
      display: "grid",
      gridTemplateColumns: "0.8fr 1.2fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, "Visual Sprint\u2122"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "clamp(28px,3.6vw,42px)",
      lineHeight: 1.16,
      letterSpacing: "0",
      margin: "26px 0 24px",
      maxWidth: "20ch"
    }
  }, "Decide how it should look and feel \u2014 before you build everything else."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 17,
      lineHeight: 1.62,
      maxWidth: "46ch",
      margin: 0
    }
  }, "Visual Sprint isn't just speed. It's how we reach alignment before execution \u2014 routes validated visually before production, so presentations, campaigns and events stay coherent and scale faster."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      marginTop: 48,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 10
    }
  }, "Up to"), /*#__PURE__*/React.createElement(StatBlock, {
    value: "70",
    unit: "%",
    label: "less time exploring visual directions"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 10,
      visibility: "hidden"
    }
  }, "Up to"), /*#__PURE__*/React.createElement(StatBlock, {
    value: "5",
    unit: "",
    label: "phases, briefing to delivery"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => window.DH_NAV("sprint"),
    trailingIcon: /*#__PURE__*/React.createElement(ArrowR, null)
  }, "See the method"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(VisualSprintLoop, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 2,
      background: "var(--lime-500)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "The method, in motion \u2014 alignment before execution"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "var(--section-y) var(--page-margin)",
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "The studio"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "clamp(30px,4vw,48px)",
      lineHeight: 1.14,
      letterSpacing: "0",
      margin: "22px 0 0",
      maxWidth: "14ch"
    }
  }, "Design-led. Human first. AI throughout."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 18,
      lineHeight: 1.62,
      maxWidth: "42ch",
      margin: "28px 0 0"
    }
  }, "Deckhaus is a focused studio. Every project is led end to end by the people who shape it \u2014 AI sits in the room to widen exploration and cut repetition, never to make the call. You work with the people doing the work.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "36px 32px",
      paddingTop: 8
    }
  }, [["Senior attention, end to end.", "The people who shape the work stay close to it."], ["Systems, not one-offs.", "We leave teams with a stronger starting point."], ["AI with judgement.", "Exploration moves faster. Human direction decides."], ["Built across borders.", "Remote by design. Close to the work."]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: "1px solid var(--border-default)",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 17,
      lineHeight: 1.3,
      letterSpacing: "0",
      margin: "0 0 10px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 15,
      lineHeight: 1.58,
      margin: 0
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "var(--section-y) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "clamp(30px,4vw,48px)",
      lineHeight: 1.14,
      letterSpacing: "0",
      margin: "22px 0 0"
    }
  }, "Built through the Visual Sprint.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => window.DH_NAV("work"),
    trailingIcon: /*#__PURE__*/React.createElement(ArrowR, null)
  }, "All case studies")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, window.DH_DATA.cases.map(c => /*#__PURE__*/React.createElement(window.CaseCard, {
    key: c.client,
    c: c
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "0 var(--page-margin) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-theme": "dark",
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--border-default)",
      background: "linear-gradient(140deg, #15170f, #0c0c0e 62%)",
      padding: "clamp(48px,6vw,88px)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/deckhaus-mark-lime.svg",
    style: {
      position: "absolute",
      right: -30,
      top: -40,
      height: 280,
      opacity: .16
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "34ch"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(36px,5vw,64px)",
      lineHeight: 1.08,
      letterSpacing: "0",
      margin: 0,
      color: "var(--text-primary)"
    }
  }, "Have a moment that matters?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 18,
      lineHeight: 1.62,
      margin: "28px 0 40px",
      maxWidth: "42ch"
    }
  }, "Whether it's a pitch, a launch, a keynote or a communication system, we bring clarity, craft and momentum."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => window.DH_NAV("contact"),
    trailingIcon: /*#__PURE__*/React.createElement(ArrowR, null)
  }, "Start a project")))));
}
function ArrowR() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }));
}
Object.assign(window, {
  HomeView,
  ArrowR
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Views.jsx
try { (() => {
// Case card + Work / Services / Sprint / Contact views
const VW_NS = window.DeckhausDesignSystem_ca5964;
function CaseCard({
  c,
  onClick
}) {
  const {
    Badge
  } = VW_NS;
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      (onClick || (() => window.DH_NAV("work")))();
    },
    className: "dh-card dh-card--interactive dh-card--flush",
    style: {
      display: "block",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 3",
      background: `linear-gradient(150deg, ${c.tone}, #0b0b0d)`,
      position: "relative",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      opacity: .7
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/deckhaus-mark-white.svg",
    style: {
      position: "absolute",
      left: 22,
      top: 22,
      height: 26,
      opacity: .85
    },
    alt: ""
  }), c.fig ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 22,
      top: 24,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      lineHeight: 1.4,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "rgba(244,244,239,.5)"
    }
  }, "Fig. ", c.fig) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22,
      bottom: 20,
      right: 22,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start"
    }
  }, c.status ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      lineHeight: 1,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "rgba(244,244,239,.72)",
      border: "1px solid rgba(255,255,255,.22)",
      borderRadius: 999,
      padding: "5px 10px"
    }
  }, c.status) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 30,
      lineHeight: 1.05,
      letterSpacing: "0",
      color: "var(--paper)"
    }
  }, c.client))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      lineHeight: 1.4,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, c.kind), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-disabled)"
    }
  }, c.year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.25,
      letterSpacing: "0",
      margin: "0 0 10px"
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 14.5,
      lineHeight: 1.55,
      margin: 0
    }
  }, c.blurb)));
}
function PageHead({
  eyebrow,
  title,
  sub
}) {
  const {
    Eyebrow
  } = VW_NS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "clamp(48px,7vw,96px) var(--page-margin) 56px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(44px,6.5vw,80px)",
      lineHeight: 1.09,
      letterSpacing: "0",
      margin: "30px 0 0",
      maxWidth: "16ch",
      textWrap: "balance"
    }
  }, title), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 19,
      lineHeight: 1.62,
      maxWidth: "52ch",
      margin: "32px 0 0"
    }
  }, sub) : null);
}
function WorkView() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Selected work",
    title: "Case studies.",
    sub: "A view into how the Visual Sprint turns briefings into presentation-ready systems."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "0 var(--page-margin) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, window.DH_DATA.cases.map(c => /*#__PURE__*/React.createElement(CaseCard, {
    key: c.client,
    c: c,
    onClick: () => window.DH_NAV("case")
  })), window.DH_DATA.cases.map(c => /*#__PURE__*/React.createElement(CaseCard, {
    key: c.client + "2",
    c: {
      ...c,
      year: "2024"
    },
    onClick: () => window.DH_NAV("case")
  })))));
}
function ServicesView() {
  const {
    Eyebrow
  } = VW_NS;
  const D = window.DH_DATA;
  // The 8 detailed offerings, mapped under the 3 strategic pillars
  const includes = {
    "Strategic Presentations": ["Sales & pitch decks", "Executive presentations", "Corporate reports", "PowerPoint template systems"],
    "Content Systems": ["LinkedIn carousels", "Campaign & social templates", "Monthly visual production", "Reusable content libraries"],
    "Brand Experiences": ["Visual identities", "Launches & activations", "Event & screen design", "Digital brand moments"]
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "What we do",
    title: "Three scales of one idea.",
    sub: "Not three markets \u2014 three scales of the same problem. Strategic Presentations is how a brand explains itself when it matters; Content Systems is how it keeps that clarity day to day; Brand Experiences is how it becomes memorable in the room."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--maxw-content)",
      margin: "0 auto",
      padding: "0 var(--page-margin) var(--section-y)"
    }
  }, D.lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l.title,
    style: {
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: 64,
      padding: "clamp(40px,5vw,72px) 0",
      borderTop: "1px solid var(--border-default)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--text-accent)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, i === 0 ? "Core practice" : l.scale)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(30px,3.4vw,44px)",
      lineHeight: 1.12,
      letterSpacing: "0",
      margin: "18px 0 0",
      maxWidth: "12ch"
    }
  }, l.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 19,
      lineHeight: 1.62,
      color: "var(--text-secondary)",
      margin: 0,
      maxWidth: "46ch"
    }
  }, l.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px 32px",
      marginTop: 34
    }
  }, includes[l.title].map(it => /*#__PURE__*/React.createElement("div", {
    key: it,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "baseline",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 1,
      background: "var(--accent-tick)",
      flex: "none",
      transform: "translateY(-4px)"
    }
  }), it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-default)"
    }
  })));
}
function SprintView() {
  const {
    Badge,
    StatBlock
  } = VW_NS;
  const phases = [{
    n: "01",
    t: "Idea & Briefing",
    d: "We define the project's goal and visual tone based on the initial briefing."
  }, {
    n: "02",
    t: "Prompt Design",
    d: "We translate the concept into strategic prompts that define tone and style."
  }, {
    n: "03",
    t: "Visual Exploration",
    d: "AI-assisted exploration tests tone, light and composition early — grounding the concept before we craft."
  }, {
    n: "04",
    t: "Refine & Craft",
    d: "In the Direction Room we lock the strongest route, then refine composition and storytelling by hand — alignment before execution."
  }, {
    n: "05",
    t: "Final Delivery",
    d: "Final design, ready for presentation or campaign launch."
  }];
  return /*#__PURE__*/React.createElement("main", {
    "data-theme": "dark",
    style: {
      background: "var(--bg-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "clamp(48px,7vw,96px) var(--page-margin) 48px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, "Visual Sprint\u2122"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(44px,6.5vw,80px)",
      lineHeight: 1.09,
      letterSpacing: "0",
      margin: "30px 0 0",
      maxWidth: "18ch",
      textWrap: "balance"
    }
  }, "Alignment before execution."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 19,
      lineHeight: 1.62,
      maxWidth: "56ch",
      margin: "32px 0 0"
    }
  }, "Visual Sprint is our operating philosophy, not a five-step process. We decide how your communication should look and feel before building everything else \u2014 so what follows is more coherent, faster and easier to scale. AI accelerates exploration; human judgement defines the result.")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--maxw-content)",
      margin: "0 auto",
      padding: "clamp(24px,4vw,48px) var(--page-margin) 56px"
    }
  }, phases.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    style: {
      display: "grid",
      gridTemplateColumns: "72px 0.5fr 1fr",
      gap: 32,
      padding: "30px 0",
      borderTop: "1px solid var(--border-subtle)",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--lime-500)"
    }
  }, p.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 26,
      lineHeight: 1.14,
      letterSpacing: "0",
      margin: 0
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 16,
      lineHeight: 1.62,
      margin: 0,
      maxWidth: "48ch"
    }
  }, p.d))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)"
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "var(--section-y) var(--page-margin)",
      display: "flex",
      gap: 80,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 10
    }
  }, "Up to"), /*#__PURE__*/React.createElement(StatBlock, {
    value: "70",
    unit: "%",
    label: "less time exploring visual directions"
  })), /*#__PURE__*/React.createElement(StatBlock, {
    value: "5",
    unit: "",
    label: "phases, briefing to delivery"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "\u221E",
    unit: "",
    label: "aesthetic routes, one coherent system"
  }))));
}
function ContactView() {
  const {
    Input,
    Select,
    Textarea,
    Button,
    Checkbox,
    Eyebrow
  } = VW_NS;
  const [sent, setSent] = React.useState(false);
  const [agree, setAgree] = React.useState(true);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--maxw-content)",
      margin: "0 auto",
      padding: "clamp(48px,7vw,96px) var(--page-margin) var(--section-y)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 72
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Start a project"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(40px,5vw,66px)",
      lineHeight: 1.1,
      letterSpacing: "0",
      margin: "30px 0 0",
      maxWidth: "12ch"
    }
  }, "Let's build the system."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 18,
      lineHeight: 1.62,
      maxWidth: "40ch",
      margin: "32px 0 40px"
    }
  }, "Tell us what you're presenting, launching or scaling. We typically reply within two working days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, [["Email", "hola@deckhaus.studio"], ["Studio", "Built across borders · remote by design"], ["Engagements", "Sprints from €3,000"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      gap: 16,
      paddingBottom: 14,
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      width: 120,
      flex: "none"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    className: "dh-card",
    style: {
      padding: 32
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 16,
      padding: "40px 0"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/deckhaus-mark-lime.svg",
    style: {
      height: 56
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 32,
      lineHeight: 1.1,
      letterSpacing: "0",
      margin: 0
    }
  }, "Thank you."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Your brief is in. We'll be in touch shortly."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Company"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "What do you need?",
    options: ["Strategic presentations", "Content systems", "Brand experiences", "Not sure yet"]
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Project brief",
    rows: 4,
    placeholder: "Tell us what you're presenting\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: agree,
    onChange: e => setAgree(e.target.checked),
    label: "I'd like to receive studio notes occasionally"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    block: true
  }, "Send brief")))));
}
Object.assign(window, {
  CaseCard,
  WorkView,
  ServicesView,
  SprintView,
  ContactView,
  CaseStudyView
});
function CaseStudyView() {
  const {
    Badge,
    Button,
    Eyebrow
  } = VW_NS;
  const steps = [{
    n: "01",
    t: "Briefing",
    d: "Design a presentation cover defining the visual direction for a Lacoste brand event — a hybrid of fashion, innovation and urban lifestyle."
  }, {
    n: "02",
    t: "Concept & prompt",
    d: "\u201CFuturistic urban environment with glass reflections, neon green lighting, modern minimal typography, elegant and premium mood.\u201D"
  }, {
    n: "03",
    t: "AI exploration",
    d: "Multiple visual proposals generated to explore tone, lighting and composition — not to obtain the final image."
  }, {
    n: "04",
    t: "Refinement",
    d: "The strongest storytelling is selected and manually refined: contrast, cropping, typography and a light focus on the logo."
  }, {
    n: "05",
    t: "Final crafting",
    d: "Built in PowerPoint with typographic structure, visual grid and compositional balance — clean and presentation-ready."
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "32px var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      window.DH_NAV("work");
    },
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "\u2190 All work")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "28px var(--page-margin) 48px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, "Visual Sprint\u2122 case study"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(44px,6.5vw,80px)",
      lineHeight: 1.09,
      letterSpacing: "0",
      margin: "28px 0 0"
    }
  }, "Lacoste \u2014 Experience Ceremony"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 19,
      lineHeight: 1.62,
      maxWidth: "54ch",
      margin: "30px 0 0"
    }
  }, "Create a visual composition conveying modernity, exclusivity and alignment with Lacoste's DNA \u2014 blending technology, light and an urban atmosphere.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--maxw-wide)",
      margin: "0 auto",
      padding: "0 var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 7",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      border: "1px solid var(--border-default)",
      background: "linear-gradient(135deg, #16241a, #0b0f0c)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
      backgroundSize: "56px 56px",
      opacity: .7
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 40,
      top: 34,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      lineHeight: 1.4,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "rgba(244,244,239,.55)"
    }
  }, "Fig. 01 \u2014 Lacoste"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/deckhaus-mark-lime.svg",
    style: {
      position: "absolute",
      right: 48,
      top: "50%",
      transform: "translateY(-50%)",
      height: 160,
      opacity: .9
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      bottom: 36,
      fontFamily: "var(--font-display)",
      fontSize: 52,
      lineHeight: 1.05,
      letterSpacing: "0",
      color: "var(--paper)"
    }
  }, "Experience Ceremony"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--maxw-content)",
      margin: "0 auto",
      padding: "var(--section-y) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The transformation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 40,
      marginTop: 36
    }
  }, [["Fragmented", "A strong idea with no defined visual direction — the moment risked looking like a generic premium template."], ["The system", "A Visual Sprint set the direction: identity, screen language, motion cues and a presentation system the event team could extend."], ["What changed", "One coherent experience, on-brand from cover to keynote — Lacoste in a new world, not a stock interpretation of it."]].map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: "1px solid var(--border-default)",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: i === 2 ? "var(--text-accent)" : "var(--text-muted)"
    }
  }, String(i + 1).padStart(2, "0"), " \xB7 ", t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      margin: "14px 0 0"
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--maxw-content)",
      margin: "0 auto",
      padding: "var(--section-y) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The process"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: "grid",
      gridTemplateColumns: "80px 1fr",
      gap: 28,
      padding: "34px 0",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--text-accent)"
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 1.2,
      letterSpacing: "0",
      margin: 0
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 16,
      lineHeight: 1.62,
      margin: 0
    }
  }, s.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: "flex",
      alignItems: "center",
      gap: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => window.DH_NAV("contact"),
    trailingIcon: /*#__PURE__*/React.createElement(window.ArrowR, null)
  }, "Start your sprint"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Designed for the room."))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Views.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Deckhaus website — content model
window.DH_DATA = {
  services: [{
    index: "01",
    title: "Sales presentations",
    desc: "Turning strategy into compelling visual storytelling."
  }, {
    index: "02",
    title: "Pitch decks & fundraising",
    desc: "Designs that attract investment and communicate vision."
  }, {
    index: "03",
    title: "PowerPoint templates",
    desc: "Functional, elegant and fully editable slide systems."
  }, {
    index: "04",
    title: "Financial reports",
    desc: "Clear, readable and visually consistent strategic documents."
  }, {
    index: "05",
    title: "Event presentations",
    desc: "Slides crafted to inspire, engage and leave a lasting impression."
  }, {
    index: "06",
    title: "Brand guidelines",
    desc: "Brand manuals structured with visual precision and clarity."
  }, {
    index: "07",
    title: "Corporate presentations",
    desc: "Business communication elevated through clarity and authority."
  }, {
    index: "08",
    title: "Interactive presentations",
    desc: "Dynamic experiences that foster engagement and connection."
  }],
  lines: [{
    tag: "01 — Core",
    scale: "When it matters most",
    title: "Strategic Presentations",
    desc: "How a brand explains itself when it really matters — the pitch, the sale, the board, the investment conversation. Clarity and narrative in rooms where a weak deck makes a strong idea look mediocre.",
    tags: ["Pitch decks", "Sales enablement", "Templates"]
  }, {
    tag: "02",
    scale: "Day to day",
    title: "Content Systems",
    desc: "How a brand keeps that clarity between the big moments. A reusable visual language that adapts and grows — not a string of disconnected pieces.",
    tags: ["Reusable narrative", "Campaigns", "Social"]
  }, {
    tag: "03",
    scale: "In the room",
    title: "Brand Experiences",
    desc: "How a brand becomes memorable when it appears before an audience. The visual layer of the moment — narrative, screens, keynote content and motion.",
    tags: ["Identity", "Screens", "Brand in motion"]
  }],
  sprint: [{
    n: "01",
    title: "Idea & Briefing",
    desc: "We define the project's goal and visual tone from the initial briefing."
  }, {
    n: "02",
    title: "Prompt Design",
    desc: "We translate the concept into strategic prompts that define tone and style."
  }, {
    n: "03",
    title: "Visual Exploration",
    desc: "AI-assisted exploration tests directions early, grounding the concept before craft."
  }, {
    n: "04",
    title: "Refine & Craft",
    desc: "We select the strongest direction and refine composition and storytelling."
  }, {
    n: "05",
    title: "Final Delivery",
    desc: "Final design, ready for presentation or campaign launch."
  }],
  cases: [{
    client: "Lacoste",
    fig: "01",
    sector: "Fashion & Sport",
    status: "Concept direction",
    title: "Experience Ceremony",
    kind: "Brand event · Visual Sprint",
    year: "2025",
    blurb: "A brand event that had to feel like Lacoste in a new world. We built the visual direction — identity, screens and motion language — so the moment read as one coherent experience.",
    tone: "#1d2a1f"
  }, {
    client: "Café Vision",
    fig: "02",
    sector: "Food & Beverage",
    status: "Visual exploration",
    title: "Corporate Launch",
    kind: "Brand identity · Visual Sprint",
    year: "2025",
    blurb: "A coffee brand whose identity didn't match its ambition. We built a Scandinavian-minimal system that carried from corporate deck through to a packaging-ready brand.",
    tone: "#24201a"
  }, {
    client: "Northbank",
    fig: "03",
    sector: "Finance & Banking",
    status: "System study",
    title: "Sales Enablement System",
    kind: "Design system · Decks",
    year: "2025",
    blurb: "Sales materials rebuilt from scratch for every region. We replaced them with one reusable narrative, components and a Claude workspace — so the team sells instead of formatting.",
    tone: "#181b22"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ServiceRow = __ds_scope.ServiceRow;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
