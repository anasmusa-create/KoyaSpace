const T=(v)=>v==null?"":typeof v==="string"?v:(v.en||"");
const PLACE_META={
 moon:{name:"The Moon",caption:"Silver dust, footprints and the first robotic scouts.",label:"Moon · Apollo & Surveyor",range:"1966–1977",rangeLabel:"Mission years",heading:"Moon · hardware left behind",note:"Pins are illustrative. Exact coordinates are in each record’s passport."},
 mars:{name:"Mars",caption:"Rust-red plains where wheels, wings and landers fell silent.",label:"Mars · rovers & landers",range:"1975–2024",rangeLabel:"Mission years",heading:"Mars · hardware left behind",note:"Pins are illustrative. Exact coordinates are in each record’s passport."},
 deep:{name:"Deep space",caption:"Orbits, asteroids and the long road to the stars.",label:"Deep space · asteroids & beyond",range:"1972–2018",rangeLabel:"Mission years",heading:"Deep space · hardware left behind",note:"Pins are illustrative; these craft are drifting, orbiting or resting far from any map."}
};
function firstSentences(text,n,max){
 const parts=String(text||"").split(/\n+/)[0].split(/(?<=[.!?])\s+/);let out=parts.slice(0,n).join(" ");
 if(out.length>max){out=out.slice(0,max).replace(/\s+\S*$/,"")+"…";}
 return out;
}
function nssdcaUrl(a){
 const m=/\d{4}-\d{3}[A-Z]/.exec(T(a.passport&&a.passport.nssdca));
 return m?"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id="+m[0]:"https://nssdc.gsfc.nasa.gov/";
}
function buildPlaces(){
 const all=(window.ECHOES&&window.ECHOES.artifacts)||[],out={};
 Object.keys(PLACE_META).forEach(k=>{
  const meta=PLACE_META[k],list=all.filter(a=>a.sector===k).sort((x,y)=>x.num-y.num);
  const count=String(list.length).padStart(2,"0");
  out[k]=Object.assign({},meta,{
   kicker:meta.name+" · "+list.length+" records",count:count,
   records:list.map(a=>({
    id:a.id,a:a,title:T(a.name),status:T(a.status),
    desc:firstSentences(T(a.story&&a.story.specialist),2,260),
    extra:T(a.passport&&a.passport.discovery),
    source:nssdcaUrl(a)
   }))
  });
 });
 return out;
}
const places=buildPlaces();
