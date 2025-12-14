// ======== CONFIGURAÇÕES ========
const SETTINGS = {
  contactName: "Paloma Amorim",
  avatar: "assets/avatar.jpg",
  checkoutURL: "https://pay.cakto.com.br/e29uo79_685023",

  // 1) Pré-nome — pausa após o 1º áudio para pedir o nome
  preName: [
    { type:"text",  text:"Oii amor, que bom que você me aceitou Qua seu nome 😉" },
{ type:"audio", src:"assets/audio1.mp3", wait:"name" } // pede nome depois do áudio
  ],

  // 2) Depois do nome
  afterName: [
    { type:"audio", src:"assets/audio2.mp3" },

    { type:"text",  text:"Estou até com vergonha de falar no áudio {name}, mas eu queria te fazer uma perguntinha, posso?" },
    { type:"quick", options:["Sim, pode..."], side:"right", asUser:true },

    { type:"text",  text:"Posso te enviar uma fotinha minha que tirei agora há pouco?" },
    { type:"quick", options:["Claro, adoraria ver 🔥","SIM,  quero ver😋"], side:"right", asUser:true },

    { type:"text",  text:"Então tá bom, {name}, espero que goste, rsrs" },
    { type:"image", src:"assets/foto8.jpg", alt:"Foto 8" },
{ type:"text",  text:"O que você achou?? rsrs" },
    { type:"quick", options:["Nossa, Uma delícia! 😋","Achei feia 🤢"], side:"right", asUser:true },
{ type:"text",  text:"Hmm, {name}, que bom que gostou, gatinho 🔥" },
{ type:"text",  text:"Fiquei até meio tímida kkk" },
{ type:"text",  text:"Posso te mandar uma sem a parte de cima? rsrs 😏" },
{ type:"quick", options:["Sim, claro 😋","Adoraria ver seus peitos 😏🔥"], side:"right", asUser:true },
{ type:"text",  text:"Tá bom, vou mandar... 😉👄" },
{ type:"image", src:"assets/foto7.jpg", alt:"Foto 7" },
{ type:"text",  text:"o que você faria comigo se eu estivesse assim pra você agora?" },
    { type:"quick", options:["Te chuparia todinha 😋🔥","Te daria só um beijo 👄"], side:"right", asUser:true },

    { type:"text",  text:"Nossa, {name}, que delícia, fiquei até instigada rsrs" },
    { type:"text",  text:"É que eu sou um pouquinhoo safadinha kkk mas ninguém sabe" },
{ type:"text",  text:"Será que eu posso te mandar uma fotinha mais quente? rsrs 😇🔥 " },
{ type:"quick", options:["Claro, safadinha rsrs 🔥😋","Não, não quero ver!"], side:"right", asUser:true },
{ type:"text",  text:"Aii amor, então tá rsrs, vou mandar 🤤 " },
{ type:"text",  text:"Olha como eu estava mais cedo 😋" },
    { type:"image", src:"assets/foto3.jpg", alt:"Foto 3" },

    { type:"text",  text:"Você {name} me daria leitinho nessa posição? rsrs 😇" },
    { type:"quick", options:["SIM, MUITO LEITE 💦"], side:"right", asUser:true },
    { type:"text",  text:"Hm, safado rsrs, Mas deixa eu te perguntar outra coisa..." },
    { type:"audio", src:"assets/audio3.mp3" },

    { type:"quick", options:["Sim, adorei suas fotinhas 😏🔥","Não, não gostei das fotos 🤮"], side:"right", asUser:true },

    { type:"text",  text:"Nossa, {name}, tô vendo que você é safadinho, rsrs" },
    { type:"text",  text:"Vou te mandar mais uma, amorzinho" },
    { type:"image", src:"assets/foto2.jpg", alt:"Foto 2" },
    { type:"audio", src:"assets/audio4.mp3" },

    { type:"text",  text:"Você quer, gatinho?" },
    { type:"quick", options:["SIM, QUERO VER! 😋"], side:"right", asUser:true },

    { type:"text",  text:"Nossa, já estou me empolgando aqui com você, rsrs" },
    { type:"text",  text:"olha só eu de quatro, cheia de tesão" },
    { type:"image", src:"assets/foto4.jpg", alt:"Foto 4" },

    { type:"text",  text:"Está gostando, lindinho?" },
    { type:"quick", options:["SIM, MUITO! 🔥"], side:"right", asUser:true },

    { type:"text",  text:"Bom saber, safadinho..." },
    { type:"text",  text:"Mas agora que eu já te dei alguns presentinhos, quero que você me dê um presentinho também..." },
    { type:"text",  text:"Como falei no áudio, eu preciso terminar minha faculdade de Odontologia, e eu queria que você me ajudasse... 🥺❤️" },
    { type:"text",  text:"Eu estou vendendo vários videozinhos gostosos e fotinhas minhas bem safadinhas pra você gozar gostoso me vendo... 😋💦" },

    { type:"text",  text:"Quer saber o que tem nos vídeos?" },
    { type:"quick", options:["Sim, amor, quero saber!"], side:"right", asUser:true },

    { type:"text",  text:"Você vai ter mais de 50 vídeos e fotos minhas, com muito tesão 🔞🤭" },
    { type:"text",  text:"Eu batendo siririca, mostrando minha bucetinha pertinho da câmera, nessa posição:" },
    { type:"image", src:"assets/foto5.jpg", alt:"Foto 2" },
    { type:"text",  text:"Porém, vou estar sem calcinha, rsrs 😇" },
    { type:"quick", options:["🔥 Que delícia, o que mais tem?"], side:"right", asUser:true },
    { type:"text",  text:"Vai ter também eu mostrando meus peitinhos durinhos, eu de toalha no banheiro, eu fazendo um boquete bem molhadinho e várias fotinhas da minha bundinha branquinha mostrando meu cuzinho pra você 🤤❤️‍🔥" },
    { type:"text",  text:"Se interessou, meu amor? 😊" },
    { type:"quick", options:["Sim, delícia, pode falar! 💦"], side:"right", asUser:true },

    { type:"text",  text:"Ótimo, safado... Então amor, geralmente eu cobro R$80,00 por mês por todos esses conteúdos. 🥺❤️" },
    { type:"text",  text:"🔥 Mas como eu tô com muito tesão pra te mostrar isso, posso te fazer uma promoção especial, pra que por apenas R$15,00 você veja meu lado safadinha por trás das cameras, e eu não vou te cobrar nada por mês, você só vai me ajudar essa única vez e vai ficar pra sempre com meus vídeozinhos e fotos bem safadinha, rsrs 😘" },

    { type:"text",  text:"Posso te mandar o link pra acessar, amor? 😇🔞💦" },
    { type:"quick", options:["SIM, QUERO TE VER PELADINHA 🔥"], side:"right", asUser:true },
    { type:"text",  text:"Tá bom, amor, assim que fizer o pagamento, todos os meus vídeos e fotos vão chegar no seu E-mail para você fazer um bom uso deles, rsrs 😉" },
    { type:"text",  text:"Aí vai o link:" },
 { type:"image", src:"assets/foto5.jpg", alt:"foto9" },
    { type:"cta",   text:"+ de 50 vídeos e fotos gostosas 💋😏💦", buttonText:"Acessar tudo agora" }
  ]
};

// ===== Timings (mais realistas) =====
const TIMINGS = {
  baseGap: 750,               // espaçamento entre mensagens do bot
  typingPerCharMin: 28,       // ms por caractere (mín)
  typingPerCharMax: 55,       // ms por caractere (máx)
  typingMin: 900,             // mínimo para qualquer texto
  typingMax: 5500,            // máximo (textos grandes ficam mais “humanos”)
  afterUserGap: 2000,         // pausa após resposta do lead
  recordingExtraMin: 1700,    // delay extra mostrando "gravando áudio..."
  recordingExtraMax: 2600
};

// ===== Elements =====
const $messages = document.getElementById("messages");
const $form = document.getElementById("chat-form");
const $input = document.getElementById("chat-input");
const $status = document.getElementById("status");
// Ícones em SVG (brancos via currentColor)
const ICONS = {
  play:
    '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>',
  pause:
    '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" fill="currentColor"/><rect x="14" y="5" width="4" height="14" fill="currentColor"/></svg>'
};


document.getElementById("contact-name").textContent = SETTINGS.contactName;
document.getElementById("avatar").src = SETTINGS.avatar;

// ===== Estado =====
let leadName = "";
let waiting  = null;   // "name" | "freeText"
let resumeFn = null;

// ===== Som ao receber (bot) =====
let __userInteracted = false;
window.addEventListener("pointerdown", ()=>{ __userInteracted = true; }, {once:true});
window.addEventListener("keydown",     ()=>{ __userInteracted = true; }, {once:true});

const botDing = (() => {
  try{
    const a = new Audio("assets/sounds/receive.mp3");
    a.preload = "auto";
    a.volume  = 0.9;
    return () => {
      if (!__userInteracted) return;   // precisa de interação antes (autoplay policy)
      try{ a.currentTime = 0; a.play().catch(()=>{}); }catch{}
    };
  }catch{
    return () => {};
  }
})();

// ===== Helpers =====
const THUMB_SIZE = 36; // deve bater com o CSS (.row .thumb)
const now   = () => new Date().toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
const clamp = (v,min,max)=>Math.max(min,Math.min(max,v));
const rand  = (min,max)=>Math.floor(Math.random()*(max-min+1))+min;
const scroll= () => { $messages.scrollTop = $messages.scrollHeight; };
const fmt   = s => { if(!isFinite(s)) return "0:00"; const m=Math.floor(s/60); const ss=Math.floor(s%60).toString().padStart(2,"0"); return `${m}:${ss}`; };

/* input visibilidade */
function setInputVisible(show, placeholder="Escreva uma mensagem"){
  if (show){
    $form.classList.remove("hidden");
    $form.style.display = "flex";
    if (placeholder) $input.placeholder = placeholder;
    $input.disabled = false;
  }else{
    $form.classList.add("hidden");
    $form.style.display = "none";
    $input.disabled = true;
    $input.blur();
  }
}
setInputVisible(false);

// ===== UI helpers =====
function row(side){
  const r = document.createElement("div");
  r.className = `row ${side}`;
  if (side === "left"){
    const t = document.createElement("div");
    t.className = "thumb";
    t.innerHTML = `<img src="${SETTINGS.avatar}" alt="avatar">`;
    r.appendChild(t);
  }else{
    const s=document.createElement("div");
    s.style.width = THUMB_SIZE + "px"; // espaçador do lado direito
    r.appendChild(s);
  }
  return r;
}
function bubble(inner){ const b=document.createElement("div"); b.className="bubble enter"; b.innerHTML=inner; return b; }
function meta(){
  const m=document.createElement("div");
  m.className="meta";
  m.innerHTML=`<span class="time">${now()}</span><span class="checks">✓✓</span>`;
  return m;
}
function markSeenLater(el){ setTimeout(()=>{ if(el) el.classList.add("seen"); }, rand(1200,2800)); }

function addText(side,text){
  const r=row(side);
  const b=bubble(`<div>${text}</div>`);
  const m=meta(); b.appendChild(m); r.appendChild(b);
  $messages.appendChild(r); scroll(); markSeenLater(m.querySelector('.checks'));
  if (side === "left") botDing();
}
function addImage(side,src,alt){
  const r=row(side);
  const b=bubble(`<img src="${src}" alt="${alt||""}" style="max-width:320px;border-radius:6px;display:block">`);
  const m=meta(); b.appendChild(m); r.appendChild(b);
  $messages.appendChild(r); scroll(); markSeenLater(m.querySelector('.checks'));
  if (side === "left") botDing();
}
function addCTA(text,btn,name){
  const r=row("left");
  const url=new URL(SETTINGS.checkoutURL);
  new URLSearchParams(location.search).forEach((v,k)=>url.searchParams.set(k,v));
  url.searchParams.set("name", name||"");
  const b=bubble(`<div>${text}</div><div class="cta"><a href="${url}" target="_blank" rel="noopener">${btn}</a></div>`);
  const m=meta(); b.appendChild(m); r.appendChild(b);
  $messages.appendChild(r); scroll(); markSeenLater(m.querySelector('.checks'));
  botDing();
}

/* “gravando áudio…” — mic grande e simples */
function addRecordingBadge(){
  const r = row("left");
  r.classList.add("recording-wrap");

  const b = document.createElement("div");
  b.className = "bubble";

  b.innerHTML = `
    <div class="recording pro" role="status" aria-live="polite">
      <span class="mic" aria-hidden="true">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <!-- mic simples -->
          <path d="M12 14a3 3 0 0 0 3-3V7a3 3 0 1 0-6 0v4a3 3 0 0 0 3 3Z"/>
          <path d="M7 11a5 5 0 0 0 10 0" fill="none" stroke="#075e54" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M12 15v3" fill="none" stroke="#075e54" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      </span>
      <span class="label">gravando áudio…</span>
    </div>
  `;

  r.appendChild(b);
  $messages.appendChild(r);
  scroll();
  return r;
}




/* áudio (com ▶/⏸) */
/* áudio (com ▶/⏸) — garante que onEnded rode apenas 1 vez */
/* áudio (com ▶/⏸ via SVG branco) — onEnded só 1x + reset no fim */
function addAudio(src,dur, onEnded){
  const r=row("left"); const id="a"+Math.random().toString(36).slice(2);
  const b=bubble(`
    <div class="audio">
      <button class="play" data-id="${id}" aria-label="Tocar áudio"></button>
      <div class="tline"><i></i></div>
      <div class="aud-time">0:00 / ${dur||"0:00"}</div>
      <audio id="${id}" preload="auto" src="${src}"></audio>
    </div>`); 
  const m=meta(); b.appendChild(m); r.appendChild(b);
  $messages.appendChild(r); scroll(); markSeenLater(m.querySelector('.checks'));

  botDing(); // som quando a bolha de áudio chega

  const audio   = b.querySelector("audio");
  const btn     = b.querySelector(".play");
  const progBar = b.querySelector(".tline i");
  const timeEl  = b.querySelector(".aud-time");

  // ícone inicial: play
  btn.innerHTML = ICONS.play;

  // flag para continuar o fluxo só uma vez
  let continued = false;

  audio.addEventListener("loadedmetadata", ()=>{
    timeEl.textContent = `0:00 / ${fmt(audio.duration)}`;
  });
  audio.addEventListener("timeupdate", ()=>{
    if(!audio.duration) return;
    progBar.style.width = (audio.currentTime / audio.duration * 100) + "%";
    timeEl.textContent  = `${fmt(audio.currentTime)} / ${fmt(audio.duration)}`;
  });
  audio.addEventListener("play",  ()=>{
    btn.innerHTML = ICONS.pause;
    btn.setAttribute("aria-label","Pausar áudio");
  });
  audio.addEventListener("pause", ()=>{
    btn.innerHTML = ICONS.play;
    btn.setAttribute("aria-label","Tocar áudio");
  });
  audio.addEventListener("ended", ()=>{
    // reset total do player ao terminar
    try { audio.currentTime = 0; } catch {}
    progBar.style.width = "0%";
    timeEl.textContent  = `0:00 / ${fmt(audio.duration)}`;
    btn.innerHTML = ICONS.play;
    btn.setAttribute("aria-label","Tocar áudio");

    // continua o fluxo só na primeira vez
    if (!continued) {
      continued = true;
      if (typeof onEnded === "function") {
        setTimeout(onEnded, TIMINGS.baseGap);
      }
    }
  });

  // extra: se o usuário arrastar pro início, mantemos visual resetado
  audio.addEventListener("seeked", ()=>{
    if (audio.currentTime === 0 && audio.paused) {
      progBar.style.width = "0%";
      timeEl.textContent  = `0:00 / ${fmt(audio.duration)}`;
      btn.innerHTML = ICONS.play;
      btn.setAttribute("aria-label","Tocar áudio");
    }
  });

  btn.addEventListener("click", ()=>{
    if (audio.paused) audio.play(); else audio.pause();
  });
}



/* “digitando…” */
function addTyping(side="left"){
  const r = row(side);
  r.classList.add("typing-wrap");
  const bb = document.createElement("div");
  bb.className = "bubble";
  bb.innerHTML = `<div class="typing"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`;
  r.appendChild(bb);
  $messages.appendChild(r);
  scroll();
  return r;
}

/* chips (quick replies) — esconde a barra enquanto há opções */
function addChips(options, side="left", asUser=false, onPick=()=>{}){
  setInputVisible(false);
  const r=row(side);
  const b=bubble(`<div class="chips">${options.map(o=>`<span class="chip">${o}</span>`).join("")}</div>`);
  const m=meta(); b.appendChild(m); r.appendChild(b); $messages.appendChild(r); scroll(); markSeenLater(m.querySelector('.checks'));
  b.querySelectorAll(".chip").forEach(ch=>{
    ch.addEventListener("click",()=>{ 
      r.remove(); 
      addText("right", ch.textContent); 
      setTimeout(()=>onPick(), TIMINGS.afterUserGap); 
    });
  });
}

/* delays de “digitando” / “gravando” */
function typingTimeFor(msg){
  // áudio: mantém “gravando…” com delay extra realista
  if (msg.type === "audio"){
    let base = rand(TIMINGS.typingMin, TIMINGS.typingMin + 400);
    base += rand(TIMINGS.recordingExtraMin, TIMINGS.recordingExtraMax);
    return base;
  }

  const text = (msg.text || "");
  let n = text.length || 8;

  // tempo base por caractere (varia aleatoriamente num intervalo)
  const perChar = rand(TIMINGS.typingPerCharMin, TIMINGS.typingPerCharMax);
  let base = n * perChar;

  // pausas por pontuação — simulando respirações
  const commas = (text.match(/[\,;]/g) || []).length;     // vírgulas/; => pausa curta
  const stops  = (text.match(/[\.!\?]/g) || []).length;   // . ! ? => pausa um pouco maior
  const breaks = (text.match(/\n/g) || []).length;        // quebras de linha

  base += commas * 180;
  base += stops  * 280;
  base += breaks * 220;

  // textos muito longos ganham um tempo extra
  if (n > 120) base += 600;
  if (n > 220) base += 800;

  // jitter final (±15%)
  base = base * (rand(85,115) / 100);

  return clamp(base, TIMINGS.typingMin, TIMINGS.typingMax);
}

function processList(list, idx=0){
  if (idx >= list.length) return;
  const msg = list[idx];

  // ➊ CASO ESPECIAL: "quick" que aguarda resposta do lead (asUser/right)
  // -> não mostra "digitando..." nem "gravando...", mostra direto as opções
  if (msg.type === "quick" && (msg.asUser || msg.side === "right")) {
    // mantém o status "Online" (sem "digitando")
    $status.textContent = "Online";
    setInputVisible(false);

    addChips(msg.options, msg.side || "left", !!msg.asUser, () => {
      // depois que o lead clicar, seguimos o fluxo
      if (msg.next && SETTINGS[msg.next]) {
        processList(SETTINGS[msg.next], 0);
      } else {
        processList(list, idx + 1);
      }
    });

    return; // sai daqui, sem delay/typing
  }

  // ➋ Demais tipos (texto, imagem, áudio, cta, quick do bot/esquerda)
  let preRow = null;

  if (msg.type === "audio"){
    $status.textContent = "gravando áudio…";
    preRow = addRecordingBadge();
  } else {
    $status.textContent = "digitando…";
    preRow = addTyping("left");
  }

  setTimeout(() => {
    if (preRow) preRow.remove();
    $status.textContent = "Online";
    setInputVisible(false);

    if (msg.type === "text"){
      addText("left", (msg.text || "").replaceAll("{name}", leadName));
      return setTimeout(() => processList(list, idx + 1), TIMINGS.baseGap);
    }

    if (msg.type === "image"){
      addImage("left", msg.src, msg.alt);
      return setTimeout(() => processList(list, idx + 1), TIMINGS.baseGap);
    }

    if (msg.type === "audio"){
      addAudio(msg.src, msg.duration, () => {
        if (msg.wait === "name"){
          waiting = "name";
          setInputVisible(true, "Digite seu nome");
          resumeFn = () => { waiting = null; processList(SETTINGS.afterName, 0); };
          return;
        }
        processList(list, idx + 1);
      });
      return;
    }

    if (msg.type === "cta"){
      addCTA(msg.text, msg.buttonText || "Acessar", leadName);
      return setTimeout(() => processList(list, idx + 1), TIMINGS.baseGap);
    }

    // "quick" do bot (lado esquerdo): mantém o comportamento padrão com typing
    if (msg.type === "quick"){
      addChips(msg.options, msg.side || "left", !!msg.asUser, () => {
        if (msg.next && SETTINGS[msg.next]) processList(SETTINGS[msg.next], 0);
        else processList(list, idx + 1);
      });
      return;
    }

  }, typingTimeFor(msg));
}


/* start */
processList(SETTINGS.preName);

/* submit (captura nome) */
$form.addEventListener("submit", e=>{
  e.preventDefault();
  const val = $input.value.trim(); if(!val) return;
  addText("right", val);
  $input.value = "";

  if (waiting === "name"){
    leadName = val;
    waiting = null;
    setInputVisible(false);
    const cb = resumeFn; resumeFn = null;
    cb && setTimeout(cb, TIMINGS.afterUserGap);
  }
});
