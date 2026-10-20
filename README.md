[styles.css](https://github.com/user-attachments/files/33707688/styles.css)
:root {
  color-scheme: light;
  --ink: #242820;
  --muted: #85897d;
  --green: #547b48;
  --green-dark: #3d6137;
  --green-pale: #eef3e9;
  --paper: #f7f7f2;
  --line: #e9e9e1;
  font-family: "DM Sans", "Noto Sans SC", sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  background: radial-gradient(ellipse at 92% 8%, rgba(227, 233, 214, 0.48), transparent 28rem), var(--paper);
  color: var(--ink);
}
button, a { font: inherit; }
button { cursor: pointer; }
.page-shell { width: min(1060px, calc(100% - 48px)); margin: 0 auto; }
.topbar {
  height: 82px; display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid rgba(59, 69, 48, 0.08);
}
.brand {
  display: inline-flex; align-items: center; gap: 10px; color: var(--ink);
  font-size: 17px; font-weight: 800; letter-spacing: -0.04em; text-decoration: none;
}
.brand-mark {
  display: grid; width: 31px; height: 31px; place-items: center; border-radius: 10px;
  background: var(--green); color: white; font-size: 17px;
}
.brand-period { color: var(--green); }
.topbar-note { display: flex; align-items: center; gap: 8px; color: #777c70; font-size: 12px; }
.status-dot { width: 7px; height: 7px; border-radius: 50%; background: #8aaa69; box-shadow: 0 0 0 4px rgba(138, 170, 105, 0.13); }
.intro { padding: 61px 0 30px; text-align: center; }
.eyebrow, .section-kicker { margin: 0; color: #89917e; font-size: 10px; font-weight: 700; letter-spacing: 0.16em; }
.eyebrow { display: flex; align-items: center; justify-content: center; gap: 9px; }
.eyebrow-line { width: 17px; height: 1px; background: #94a187; }
h1, h2, h3, p { margin-top: 0; }
h1 { margin: 14px 0 8px; font-size: clamp(32px, 5vw, 45px); font-weight: 800; letter-spacing: -0.07em; line-height: 1.25; }
.title-highlight { color: var(--green); }
.intro-copy { margin: 0; color: #85897f; font-size: 14px; }
.picker {
  display: flex; align-items: center; justify-content: center; gap: 34px; width: fit-content;
  max-width: 100%; margin: 0 auto 27px; padding: 13px 18px; border: 1px solid rgba(62, 76, 49, 0.09);
  border-radius: 15px; background: rgba(255, 255, 251, 0.82); box-shadow: 0 8px 28px rgba(48, 57, 39, 0.035);
}
.picker-group { display: flex; align-items: center; gap: 14px; }
.picker-label { white-space: nowrap; color: #8a8e83; font-size: 11px; }
.segmented { display: flex; gap: 3px; padding: 3px; border-radius: 10px; background: #f3f4ef; }
.segment {
  min-height: 34px; padding: 0 12px; border: 0; border-radius: 8px; background: transparent;
  color: #767a71; font-size: 12px; white-space: nowrap; transition: background 160ms ease, color 160ms ease, box-shadow 160ms ease;
}
.segment:hover { color: var(--green-dark); }
.segment.is-active { background: white; color: var(--green-dark); box-shadow: 0 2px 7px rgba(35, 43, 28, 0.1); font-weight: 700; }
.mood-icon { margin-right: 3px; }
.picker-divider { width: 1px; height: 28px; background: #e7e9e2; }
.menu-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: -12px 1px 15px; }
#menu-count { color: #81877a; font-size: 11px; }
.cafeteria-button {
  display: inline-flex; min-height: 34px; align-items: center; justify-content: center; gap: 7px; padding: 0 12px;
  border: 1px solid #e0e6d9; border-radius: 8px; background: #f5f7f1; color: #567148;
  font-size: 11px; font-weight: 600; transition: background 160ms ease, border-color 160ms ease;
}
.cafeteria-button:hover { border-color: #bccbad; background: #edf2e7; }
.result-layout { display: grid; grid-template-columns: minmax(0, 1.72fr) minmax(260px, 0.88fr); gap: 18px; align-items: stretch; }
.meal-card, .nutrition-card, .recipe-card {
  overflow: hidden; border: 1px solid rgba(56, 66, 45, 0.08); border-radius: 17px;
  background: #fffefa; box-shadow: 0 10px 34px rgba(42, 51, 33, 0.045);
}
.meal-visual {
  position: relative; display: flex; height: 230px; overflow: hidden; align-items: center; justify-content: center;
  background: radial-gradient(ellipse at 50% 70%, rgba(255, 255, 250, 0.7) 0 22%, transparent 22.5%),
    radial-gradient(ellipse at 50% 70%, rgba(255, 255, 255, 0.62) 0 33%, transparent 33.5%),
    linear-gradient(132deg, #dfe9d3, #eff0dd 55%, #e9e7ce);
  transition: background 200ms ease;
}
.meal-visual.is-treat {
  background: radial-gradient(ellipse at 50% 70%, rgba(255, 252, 242, 0.8) 0 22%, transparent 22.5%),
    radial-gradient(ellipse at 50% 70%, rgba(255, 255, 255, 0.6) 0 33%, transparent 33.5%),
    linear-gradient(132deg, #f0ddc9, #f6e8d4 55%, #ead6c1);
}
.visual-topline { position: absolute; z-index: 2; top: 17px; right: 20px; left: 20px; display: flex; align-items: center; justify-content: space-between; }
.meal-type-badge { padding: 6px 10px; border: 1px solid rgba(255, 255, 255, 0.7); border-radius: 20px; background: rgba(255, 255, 255, 0.6); color: #526b46; font-size: 10px; font-weight: 700; backdrop-filter: blur(8px); }
.is-treat .meal-type-badge { color: #a15f38; }
.meal-time { color: rgba(51, 59, 43, 0.62); font-size: 11px; }
.plate-scene { position: relative; display: grid; width: 205px; height: 180px; place-items: center; }
.plate-emoji {
  z-index: 1; display: grid; width: 132px; height: 132px; place-items: center; border: 7px solid rgba(255, 255, 255, 0.88);
  border-radius: 50%; background: rgba(255, 255, 250, 0.94); box-shadow: 0 15px 35px rgba(68, 70, 49, 0.15), inset 0 0 0 1px rgba(62, 67, 51, 0.05);
  font-size: 66px; transform: rotate(-7deg); animation: plate-appear 320ms ease both;
}
.plate-shadow { position: absolute; right: 22px; bottom: 9px; left: 22px; height: 21px; border-radius: 50%; background: rgba(72, 77, 53, 0.12); filter: blur(11px); }
.sparkle { position: absolute; color: rgba(255, 255, 255, 0.88); }
.sparkle-one { top: 35px; right: 25px; font-size: 23px; }
.sparkle-two { bottom: 36px; left: 13px; font-size: 20px; }
.visual-caption { position: absolute; right: 20px; bottom: 16px; color: rgba(52, 60, 44, 0.64); font-size: 10px; }
.meal-content { padding: 21px 24px 22px; }
.meal-heading-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.meal-kicker { margin: 0 0 6px; color: #8d9287; font-size: 10px; }
.meal-heading-row h2 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.045em; }
.calorie-chip { display: flex; flex-shrink: 0; align-items: baseline; gap: 4px; color: var(--green-dark); }
.is-treat + .meal-content .calorie-chip { color: #a86138; }
.calorie-chip strong { font-size: 23px; letter-spacing: -0.06em; }
.calorie-chip span { color: #92968c; font-size: 10px; }
.meal-description { max-width: 520px; margin: 9px 0 13px; color: #777c71; font-size: 12px; line-height: 1.75; }
.tag-list { display: flex; flex-wrap: wrap; gap: 7px; }
.food-tag { padding: 5px 9px; border-radius: 6px; background: #f2f4ed; color: #718064; font-size: 10px; }
.is-treat + .meal-content .food-tag { background: #f8f0e8; color: #a67550; }
.meal-actions { display: flex; align-items: center; gap: 12px; margin-top: 19px; }
.primary-button {
  display: inline-flex; min-height: 40px; align-items: center; justify-content: center; gap: 8px; padding: 0 16px;
  border: 0; border-radius: 9px; background: var(--green); color: white; font-size: 12px; font-weight: 700;
  transition: background 160ms ease, transform 160ms ease;
}
.primary-button:hover { background: var(--green-dark); transform: translateY(-1px); }
.primary-button:active { transform: translateY(0); }
.is-treat ~ .meal-content .primary-button { background: #bd774b; }
.is-treat ~ .meal-content .primary-button:hover { background: #a96239; }
.primary-button > span { font-size: 17px; line-height: 1; }
.action-hint { color: #9a9d94; font-size: 10px; }
.nutrition-card { display: flex; flex-direction: column; padding: 23px 22px 18px; }
.nutrition-header { display: flex; align-items: flex-start; justify-content: space-between; }
.nutrition-header h2 { margin: 7px 0 0; font-size: 17px; font-weight: 700; letter-spacing: -0.04em; }
.nutrition-icon { display: grid; width: 30px; height: 30px; place-items: center; border-radius: 9px; background: var(--green-pale); color: var(--green); font-size: 23px; transform: rotate(-40deg); }
.nutrition-total { display: flex; align-items: baseline; justify-content: space-between; margin: 21px 0 15px; padding-bottom: 14px; border-bottom: 1px solid #eff0e9; color: #7c8176; font-size: 11px; }
.nutrition-total strong { color: var(--green-dark); font-size: 24px; letter-spacing: -0.06em; }
.nutrition-total small { color: #8b9084; font-size: 10px; font-weight: 500; letter-spacing: 0; }
.macro-list { display: grid; gap: 13px; }
.macro-row { display: grid; grid-template-columns: 56px 1fr auto; align-items: center; gap: 9px; }
.macro-name { color: #73796e; font-size: 10px; }
.macro-track { height: 5px; overflow: hidden; border-radius: 8px; background: #eff0e9; }
.macro-fill { display: block; height: 100%; border-radius: inherit; background: #8ca477; transition: width 250ms ease; }
.macro-row:nth-child(2) .macro-fill { background: #d6a46e; }
.macro-row:nth-child(3) .macro-fill { background: #8babc0; }
.macro-row:nth-child(4) .macro-fill { background: #a6b87f; }
.macro-value { min-width: 39px; color: #43483e; font-size: 10px; text-align: right; }
.nutrition-foot { display: flex; align-items: flex-start; gap: 9px; margin-top: auto; padding: 13px 10px; border-radius: 9px; background: #f4f6ef; }
.leaf-icon { color: #779365; font-size: 15px; line-height: 1.1; }
.nutrition-foot p { margin: 0; color: #6d7864; font-size: 10px; line-height: 1.55; }
.estimate-note { margin: 11px 0 0; color: #a0a399; font-size: 9px; line-height: 1.6; }
.recipe-card { margin-top: 18px; padding: 22px 25px 24px; }
.recipe-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-bottom: 17px; border-bottom: 1px solid #eff0e9; }
.recipe-heading h2 { margin: 7px 0 0; font-size: 19px; letter-spacing: -0.05em; }
.recipe-sparkle { color: #91a77d; font-size: 15px; }
.recipe-time { padding: 7px 10px; border-radius: 7px; background: #f5f5ef; color: #73796e; font-size: 10px; white-space: nowrap; }
.recipe-body { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 36px; padding-top: 18px; }
.recipe-body h3 { display: flex; align-items: center; gap: 8px; margin: 0 0 13px; font-size: 12px; font-weight: 700; }
.tiny-icon { color: #8b9c7a; font-size: 10px; letter-spacing: 0.04em; }
.serving-note { color: #9a9e94; font-size: 10px; font-weight: 400; }
.ingredient-list, .step-list { margin: 0; padding: 0; list-style: none; }
.ingredient-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px 12px; }
.ingredient-list li { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; color: #646a5f; font-size: 10px; }
.ingredient-list li::before { width: 4px; height: 4px; flex: 0 0 4px; border-radius: 50%; background: #9aac87; content: ""; order: -1; }
.ingredient-list li span:first-child { margin-right: auto; }
.ingredient-list li span:last-child { color: #92978b; white-space: nowrap; }
.step-list { display: grid; gap: 10px; counter-reset: cooking; }
.step-list li { position: relative; padding-left: 23px; color: #6e7369; font-size: 10px; line-height: 1.65; counter-increment: cooking; }
.step-list li::before { position: absolute; top: 0; left: 0; display: grid; width: 16px; height: 16px; place-items: center; border-radius: 50%; background: #f0f3eb; color: #718563; content: counter(cooking); font-size: 9px; font-weight: 700; }
.page-footer { display: flex; justify-content: space-between; gap: 12px; padding: 19px 2px 28px; color: #a0a398; font-size: 9px; }
@keyframes plate-appear {
  from { opacity: 0; transform: translateY(5px) rotate(-11deg) scale(0.94); }
  to { opacity: 1; transform: translateY(0) rotate(-7deg) scale(1); }
}
@media (max-width: 760px) {
  .page-shell { width: min(100% - 32px, 560px); }
  .intro { padding: 45px 0 25px; }
  .picker { width: 100%; gap: 13px; justify-content: space-between; padding: 12px; }
  .picker-group { display: grid; gap: 7px; }
  .picker-label { padding-left: 4px; }
  .segment { padding: 0 9px; font-size: 11px; }
  .menu-meta { margin-top: -7px; }
  .result-layout { grid-template-columns: 1fr; }
  .meal-visual { height: 218px; }
  .nutrition-card { min-height: 300px; }
}
@media (max-width: 480px) {
  .page-shell { width: calc(100% - 24px); }
  .topbar { height: 65px; }
  .intro { padding: 37px 0 21px; }
  .intro-copy { font-size: 12px; }
  .picker { gap: 8px; padding: 10px 8px; }
  .picker-group { gap: 6px; }
  .picker-label { font-size: 10px; }
  .segment { min-height: 32px; padding: 0 7px; font-size: 10px; }
  .picker-divider { height: 39px; }
  .menu-meta { align-items: flex-start; flex-direction: column; }
  .cafeteria-button { width: 100%; }
  .meal-content { padding: 18px 16px 19px; }
  .meal-heading-row h2 { font-size: 19px; }
  .calorie-chip strong { font-size: 20px; }
  .action-hint { font-size: 9px; }
  .recipe-card { padding: 19px 16px 21px; }
  .recipe-body { grid-template-columns: 1fr; gap: 23px; }
  .page-footer { flex-direction: column; padding-bottom: 22px; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}
