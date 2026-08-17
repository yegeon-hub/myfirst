(() => {
  let timerId, seconds=25, combo=0;
  const ancientNames=['피라미드','문자','올림픽','민주 정치','만리장성','Pyramids','Writing','Ancient Olympic Games','Democracy','Great Wall','ピラミッド','文字','古代オリンピック','民主政治','万里の長城','金字塔','文字','古代奥林匹克运动会','民主制度','长城'];
  const baseRender=render;
  render=function(){
    clearInterval(timerId);baseRender();
    if(!current||turn===RUN||!energy)return;
    const card=document.querySelector('.card');
    if(card&&!current.covid&&ancientNames.includes(current.h[0]))card.classList.add('ancient-scene');
    const hud=document.createElement('section');hud.className='field-hud';
    hud.innerHTML=`<div class="briefing"><i class="portrait"></i><div><small>FIELD COMMAND · LIVE</small><b>${player}, 역사 기록을 확인하고 안전한 경로를 선택하세요.</b></div></div><div class="survival-readout"><div class="hud-chip"><small>TIME</small><b class="timer" id="missionTimer">25</b></div><div class="hud-chip"><small>COMBO</small><b id="combo">×${combo}</b></div><div class="hud-chip"><small>ZONE</small><b>${turn+1}/${RUN}</b></div></div><div class="inventory"><span class="item">🧭 나침반</span><span class="item">📻 통신기</span><span class="item">📓 역사 기록</span></div>`;
    document.querySelector('.meta').before(hud);seconds=25;
    timerId=setInterval(()=>{seconds--;const el=$('missionTimer');if(!el)return clearInterval(timerId);el.textContent=String(seconds).padStart(2,'0');if(seconds<=7)el.classList.add('danger');if(seconds<=0){clearInterval(timerId);const first=document.querySelector('.choice:not(:disabled)');if(first)answer('__TIMEOUT__',first)}},1000);
  };
  const baseAnswer=answer;
  answer=function(v,b){clearInterval(timerId);const ok=v===current.ans;combo=ok?combo+1:0;baseAnswer(v,b);const c=$('combo');if(c)c.textContent='×'+combo;document.querySelector('.board')?.classList.add('impact-flash');setTimeout(()=>document.querySelector('.board')?.classList.remove('impact-flash'),300)};
  const baseFinish=finish;
  finish=function(win){clearInterval(timerId);combo=0;baseFinish(win)};
})();
