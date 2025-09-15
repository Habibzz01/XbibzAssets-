/*  Enterprise PasteBin-Safe Loader  –  1 baris inject saja
 *  Cara pakai:
 *    <script src="https://pastebin.com/raw/xxxxxxxx"></script>
 *  (ganti xxxxxxxx dengan ID PasteBin kalian nanti)
 * ---------------------------------------------------------------
 *  Blocks: Screenshots, DevTools, Copy/Paste, Print, Brave, etc.
 *  100% obfuscate-friendly → siap di-minify tanpa error.
 * ---------------------------------------------------------------
 */
(function(){
/* ---------- CONFIG ---------- */
var _cfg={
  blurOnBlur   : true,        // blur tab saat kehilangan fokus
  watermark    : true,        // watermark dinamis
  killDevTools : true,        // bunuh dev-tools
  logURL       : "",          // endpoint API (kosongkan jika tidak perlu)
  freezeOnTrap : true         // freeze halaman saat pelanggaran
};

/* ---------- UTIL ---------- */
var _log=function(m){if(_cfg.logURL){var x=new XMLHttpRequest();x.open("POST",_cfg.logURL,true);x.setRequestHeader("Content-Type","application/json");x.send(JSON.stringify({t:new Date().toISOString(),ua:navigator.userAgent,r:m,u:location.href}))}};
var _flash=function(){var d=document.createElement("div");d.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:999999;pointer-events:none;opacity:0;transition:opacity .15s";document.body.appendChild(d);requestAnimationFrame(function(){d.style.opacity=.9});setTimeout(function(){d.remove()},200)};
var _trap=function(r){_log(r);_flash();if(_cfg.freezeOnTrap){while(true){debugger}}else{document.body.innerHTML='<div style="height:100vh;display:flex;align-items:center;justify-content:center;background:#000;color:red;font:5vw monospace">🛡️ BREACH: '+r+'</div>'}};

/* ---------- ANTI-SCREENSHOT ---------- */
document.addEventListener("keydown",function(e){
  var bad=["PrintScreen","F12","F5","Tab"];
  if(bad.includes(e.key)||e.keyCode===44||(e.ctrlKey&&["a","c","v","u","s","p","j","i"].includes(e.key))||(e.shiftKey&&e.ctrlKey&&["i","j","c","s"].includes(e.key))){e.preventDefault();_trap("Screenshot/Shortcut")}  // Windows / Mac / Brave
});

/* ---------- CLIPBOARD ---------- */
["copy","cut","paste","contextmenu","dragstart","selectstart"].forEach(function(ev){
  document.addEventListener(ev,function(e){e.preventDefault();_trap("Clipboard")},true)
});
if(navigator.clipboard){navigator.clipboard.writeText("")}

/* ---------- DEV-TOOLS ---------- */
if(_cfg.killDevTools){
  setInterval(function(){
    var w=window.outerWidth-window.innerWidth>160,h=window.outerHeight-window.innerHeight>160;
    if(h||w)_trap("DevTools")
  },500);
  var dev=/./;dev.toString=function(){_trap("Console")};console.log("%c",dev);
  (function(){var t=performance.now();debugger;var e=performance.now();if(e-t>100)_trap("Debugger")})()
}

/* ---------- PRINT ---------- */
var printCSS=document.createElement("style");printCSS.textContent="@media print{*{display:none!important}body::before{content:'🖨️ PRINT BLOCKED';display:block!important;color:red;font-size:10vw;text-align:center}}";document.head.appendChild(printCSS);
window.addEventListener("beforeprint",function(e){document.body.innerHTML="<h1>PRINT DENIED</h1>"});

/* ---------- WATERMARK ---------- */
if(_cfg.watermark){
  var w=document.createElement("div");w.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;background:repeating-linear-gradient(-45deg,rgba(255,0,0,.04),rgba(255,0,0,.04) 20px,rgba(0,0,255,.04) 20px,rgba(0,0,255,.04) 40px);animation:w 15s linear infinite";document.body.appendChild(w);
  var k=document.createElement("style");k.textContent="@keyframes w{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}";document.head.appendChild(k)
}

/* ---------- BLUR ON BLUR ---------- */
if(_cfg.blurOnBlur){
  window.addEventListener("blur",function(){document.body.classList.add("f");navigator.clipboard&&navigator.clipboard.writeText("")});
  window.addEventListener("focus",function(){document.body.classList.remove("f")});
  var blurCSS=document.createElement("style");blurCSS.textContent="body.f{filter:blur(50px) grayscale(1)}";document.head.appendChild(blurCSS)
}

/* ---------- BRAVE SHIELD BYPASS ---------- */
if(typeof navigator.brave!=="undefined")_trap("Brave");

/* ---------- SESSION ---------- */
var sKey="sec-"+location.pathname,sId=Date.now()+"-"+Math.random();localStorage.setItem(sKey,sId);
setInterval(function(){if(localStorage.getItem(sKey)!==sId)_trap("Multi-Tab")},1000);

/* ---------- ANTI-VIEW-SOURCE ---------- */
document.addEventListener("keydown",function(e){if(e.ctrlKey&&e.key==="u"){e.preventDefault();_trap("ViewSource")}});

/* ---------- OBFUSCATION-READY ---------- */
/* Minify-friendly: tidak ada template literal, tidak ada let/const di global */
})();

/* ---------- END OF FILE ---------- */
