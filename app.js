// ===== PSEUDO JOUEUR (premier lancement) =====

let playerName = localStorage.getItem("lettoPlayer");

if (!playerName) {
  playerName = prompt("Choisis ton pseudo :") || "Player";
  localStorage.setItem("lettoPlayer", playerName);
  document.getElementById("playerDisplay").textContent =
  "👤 " + playerName;
}
:root{
  --bg:#0b0d12;
  --card:#0f1320;
  --card2:#121624;
  --text:#eef1ff;
  --muted:rgba(238,241,255,.78);
  --line:#2a355d;
  --glow:rgba(238,241,255,.12);
}

*{box-sizing:border-box}
body{
  margin:0;
  background:radial-gradient(1200px 600px at 50% -50%, rgba(125,168,255,.16), transparent 60%), var(--bg);
  color:var(--text);
  font-family: Arial, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  text-align:center;
}

.wrap{max-width:920px;margin:0 auto;padding:24px 14px}
.header h1{letter-spacing:.14em;margin:4px 0;font-size:38px}
.sub{opacity:.8;margin-bottom:18px}

.top{
  display:flex;
  justify-content:center;
  gap:10px;
  flex-wrap:wrap;
  margin:10px 0 18px;
}
.pill{
  border:1px solid var(--line);
  background:linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0)), var(--card);
  border-radius:999px;
  padding:9px 12px;
  min-width:120px;
}
.k{opacity:.72;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.mono{font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace}

.grid{
  display:grid;
  grid-template-columns:repeat(6, minmax(46px, 1fr));
  gap:10px;
  margin:16px auto 12px;
  max-width:560px;
}
.slot{
  height:70px;
  display:grid;
  place-items:center;
  border:1px solid var(--line);
  background:linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0)), var(--card);
  border-radius:16px;
  font-size:30px;
  font-weight:900;
  letter-spacing:.12em;
  transition:transform .18s ease, box-shadow .18s ease, outline .18s ease;
}
.slot.win{
  outline:2px solid var(--text);
  box-shadow:0 0 0 8px var(--glow);
  transform:translateY(-2px) scale(1.03);
}

.actions{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin:10px 0}
.btn{
  padding:12px 20px;
  font-size:18px;
  border:0;
  border-radius:14px;
  cursor:pointer;
  background:linear-gradient(180deg, rgba(255,255,255,.14), rgba(255,255,255,.02));
  color:var(--text);
  box-shadow:0 8px 24px rgba(0,0,0,.35);
}
.btn:disabled{opacity:.55;cursor:not-allowed}
.btn.ghost{
  background:transparent;
  border:1px solid var(--line);
  box-shadow:none;
}

.msg{margin-top:10px;line-height:1.5}
.muted{opacity:.78}

.panel{
  margin:18px auto 0;
  max-width:560px;
  text-align:left;
  border:1px solid var(--line);
  background:linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0)), var(--card2);
  border-radius:16px;
  padding:14px;
}

ol{margin:10px 0 0;padding-left:18px}
hr{border:0;border-top:1px solid var(--line);margin:14px 0}
#history{white-space:pre-wrap;font-size:13px;line-height:1.45}

/* Animations */
@keyframes pulse {
  0%{transform:scale(1); box-shadow:0 0 0 0 rgba(255,255,255,.12)}
  60%{transform:scale(1.02); box-shadow:0 0 0 10px rgba(255,255,255,0)}
  100%{transform:scale(1); box-shadow:0 0 0 0 rgba(255,255,255,0)}
}
.jackpot .slot.win{animation:pulse .7s ease 2}
