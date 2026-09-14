function showView(v){
  $$('.view').forEach(s => s.hidden = true);
  $('#v-'+v).hidden = false;
  $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === v));
  window.scrollTo({top:0, behavior:'smooth'});
  if(v==='inicio') drawHero();
  if(v==='simulador') setTimeout(()=>initThree(), 200);
}
$$('[data-view]').forEach(el => el.addEventListener('click', e => {
  if(el.tagName==='A'){ e.preventDefault(); }
  showView(el.dataset.view);
}));

/* ============================================================
   HERO CANVAS
============================================================ */
function drawHero(){
  const cv=$('#heroCanvas'); if(!cv || cv.offsetParent===null) return;
  const dpr = window.devicePixelRatio||1;
  const r = cv.getBoundingClientRect();
  cv.width = Math.max(10, r.width*dpr); cv.height = Math.max(10, r.height*dpr);
