(() => {
  const originalRender = render;
  render = function () {
    originalRender();
    if (!current?.covid) return;
    const card = document.querySelector('.card');
    if (!card) return;
    card.classList.add('covid-scene');
    card.style.backgroundImage = "linear-gradient(90deg,#061a3fe8,#09235cb8),url('assets/covid-science.png')";
  };
  const style = document.createElement('style');
  style.textContent = '@keyframes covidFloat{0%,100%{background-size:cover,auto 112%;background-position:center,right 18% center}50%{background-size:cover,auto 126%;background-position:center,right 12% center}}.card.covid-scene{animation:covidFloat 3.4s ease-in-out infinite;box-shadow:inset 0 0 55px #ed5b5366}.card.covid-scene:after{content:"COVID-19 · GLOBAL HEALTH ALERT";position:absolute;right:14px;bottom:12px;color:#d7edff;font-size:10px;letter-spacing:1px}.card.covid-scene .symbol{animation:float 1.4s ease-in-out infinite}';
  document.head.append(style);
})();
