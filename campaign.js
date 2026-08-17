(() => {
  const chapters = ['고대 문명의 불빛', '제국과 교역의 길', '중세의 선택', '르네상스의 새 생각', '혁명과 변화', '세계 전쟁과 평화', '연결된 오늘의 세계'];
  const title = document.getElementById('missionTitle');
  const text = document.getElementById('missionText');
  const route = document.getElementById('route');
  function paint() {
    const collected = typeof S === 'undefined' ? 0 : S.cards.length;
    const step = typeof turn === 'undefined' ? 0 : turn;
    const chapter = Math.min(chapters.length - 1, Math.floor(collected / 15));
    title.textContent = `시간의 길 · ${chapter + 1}장`;
    text.textContent = `${chapters[chapter]} · 이번 탐험 ${step + 1} / 10 관문`;
    route.innerHTML = Array.from({ length: 10 }, (_, i) => `<i class="node ${i < step ? 'done' : i === step ? 'active' : ''}">${i === 9 ? '★' : ''}</i>`).join('');
  }
  paint();
  setInterval(paint, 400);
})();
