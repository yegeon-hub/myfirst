/* Every visible question, option, hint, and spoken prompt uses the selected language. */
const HISTORY_I18N = [
  [['피라미드','Pyramids','ピラミッド','金字塔'],['고대 이집트','Ancient Egypt','古代エジプト','古埃及'],['나일강','the Nile River','ナイル川','尼罗河'],['왕의 무덤을 만들었다','They were tombs for kings.','王の墓として作られた。','它们是为国王建造的陵墓。'],['기원전 2500년쯤','around 2500 BCE','紀元前2500年ごろ','大约公元前2500年']],
  [['문자','Writing','文字','文字'],['메소포타미아','Mesopotamia','メソポタミア','美索不达米亚'],['티그리스강과 유프라테스강','the Tigris and Euphrates rivers','ティグリス川とユーフラテス川','底格里斯河和幼发拉底河'],['기록을 남기기 시작했다','People could keep records.','記録を残せるようになった。','人们能够留下记录。'],['기원전 3200년쯤','around 3200 BCE','紀元前3200年ごろ','大约公元前3200年']],
  [['올림픽','Ancient Olympic Games','古代オリンピック','古代奥林匹克运动会'],['고대 그리스','Ancient Greece','古代ギリシャ','古希腊'],['올림피아','Olympia','オリンピア','奥林匹亚'],['운동 경기로 사람들이 만났다','People met through athletic games.','競技を通して人々が集まった。','人们通过体育比赛相聚。'],['기원전 776년','776 BCE','紀元前776年','公元前776年']],
  [['민주 정치','Democracy','民主政治','民主制度'],['아테네','Athens','アテネ','雅典'],['그리스','Greece','ギリシャ','希腊'],['시민이 중요한 일을 정했다','Citizens made important decisions.','市民が大切なことを決めた。','公民决定重要的事情。'],['기원전 5세기','5th century BCE','紀元前5世紀','公元前5世纪']],
  [['만리장성','Great Wall','万里の長城','长城'],['중국','China','中国','中国'],['중국 북쪽','northern China','中国北部','中国北部'],['침입을 막기 위한 성벽이었다','It was a wall built to help stop invasions.','侵入を防ぐための城壁だった。','它是为抵御入侵而修建的城墙。'],['기원전 3세기','3rd century BCE','紀元前3世紀','公元前3世纪']],
  [['실크로드','Silk Road','シルクロード','丝绸之路'],['아시아와 유럽','Asia and Europe','アジアとヨーロッパ','亚洲和欧洲'],['중앙아시아','Central Asia','中央アジア','中亚'],['물건과 생각이 오갔다','Goods and ideas traveled along it.','品物と考えが行き来した。','商品和思想在这条路上流动。'],['기원전 2세기','2nd century BCE','紀元前2世紀','公元前2世纪']],
  [['로마 제국','Roman Empire','ローマ帝国','罗马帝国'],['로마','Rome','ローマ','罗马'],['지중해','the Mediterranean Sea','地中海','地中海'],['도로와 법으로 넓은 땅을 연결했다','Roads and laws connected a large empire.','道路と法律で広い土地を結んだ。','道路和法律连接了广阔的帝国。'],['기원전 27년','27 BCE','紀元前27年','公元前27年']],
  [['이슬람','Islam','イスラム教','伊斯兰教'],['아라비아','Arabia','アラビア','阿拉伯半岛'],['메카','Mecca','メッカ','麦加'],['무함마드의 가르침에서 시작되었다','It began with the teachings of Muhammad.','ムハンマドの教えから始まった。','它起源于穆罕默德的教导。'],['7세기','7th century','7世紀','7世纪']],
  [['몽골 제국','Mongol Empire','モンゴル帝国','蒙古帝国'],['몽골','Mongolia','モンゴル','蒙古'],['유라시아','Eurasia','ユーラシア','欧亚大陆'],['아주 넓은 땅을 연결했다','It connected a huge area of land.','とても広い土地を結んだ。','它连接了非常广阔的地区。'],['13세기','13th century','13世紀','13世纪']],
  [['르네상스','Renaissance','ルネサンス','文艺复兴'],['이탈리아','Italy','イタリア','意大利'],['피렌체','Florence','フィレンツェ','佛罗伦萨'],['예술과 사람을 새롭게 바라봤다','People looked at art and human life in new ways.','芸術と人間を新しく見つめ直した。','人们用新的方式看待艺术和人。'],['14~16세기','14th–16th centuries','14〜16世紀','14至16世纪']],
  [['인쇄술','Printing press','印刷術','印刷术'],['독일','Germany','ドイツ','德国'],['마인츠','Mainz','マインツ','美因茨'],['책을 빠르게 많이 만들 수 있게 했다','It made many books quickly.','本を速くたくさん作れるようにした。','它让人们能够快速印出许多书。'],['15세기','15th century','15世紀','15世纪']],
  [['대항해 시대','Age of Exploration','大航海時代','大航海时代'],['유럽','Europe','ヨーロッパ','欧洲'],['대서양','the Atlantic Ocean','大西洋','大西洋'],['새 항로를 찾아 바다로 나갔다','Sailors searched for new sea routes.','航海者は新しい海の道を探した。','航海者寻找新的海上航线。'],['15~16세기','15th–16th centuries','15〜16世紀','15至16世纪']],
  [['산업 혁명','Industrial Revolution','産業革命','工业革命'],['영국','Britain','イギリス','英国'],['맨체스터','Manchester','マンチェスター','曼彻斯特'],['기계와 공장이 크게 늘어났다','Machines and factories grew quickly.','機械と工場が大きく増えた。','机器和工厂迅速增加。'],['18세기','18th century','18世紀','18世纪']],
  [['미국 독립','American Independence','アメリカ独立','美国独立'],['미국','United States','アメリカ','美国'],['북아메리카','North America','北アメリカ','北美洲'],['영국에서 벗어나 새 나라를 세웠다','The colonies formed a new country.','イギリスから離れて新しい国を作った。','殖民地脱离英国建立了新国家。'],['1776년','1776','1776年','1776年']],
  [['프랑스 혁명','French Revolution','フランス革命','法国大革命'],['프랑스','France','フランス','法国'],['파리','Paris','パリ','巴黎'],['자유와 평등을 외치며 왕정을 바꿨다','People called for liberty and equality.','自由と平等を求めて王政を変えた。','人们呼吁自由和平等，改变了君主制。'],['1789년','1789','1789年','1789年']],
  [['유엔','United Nations','国際連合','联合国'],['세계','the world','世界','世界'],['뉴욕','New York','ニューヨーク','纽约'],['나라들이 평화를 위해 함께 만들었다','Countries created it to work for peace.','国々が平和のために一緒に作った。','各国为和平共同建立了它。'],['1945년','1945','1945年','1945年']],
  [['달 착륙','Moon landing','月面着陸','登月'],['미국','United States','アメリカ','美国'],['달','the Moon','月','月球'],['사람이 처음 달 표면을 걸었다','Humans first walked on the Moon.','人類が初めて月面を歩いた。','人类首次在月球表面行走。'],['1969년','1969','1969年','1969年']],
  [['베를린 장벽 붕괴','Fall of the Berlin Wall','ベルリンの壁崩壊','柏林墙倒塌'],['독일','Germany','ドイツ','德国'],['베를린','Berlin','ベルリン','柏林'],['독일 통일의 길이 열렸다','It opened the way to German reunification.','ドイツ統一への道が開かれた。','它为德国统一打开了道路。'],['1989년','1989','1989年','1989年']],
  [['코로나19','COVID-19','COVID-19','新冠肺炎'],['세계','the world','世界','世界'],['전 세계','the whole world','世界中','全世界'],['보건과 서로 돕는 일의 중요성을 알렸다','It showed why health and helping one another matter.','健康と助け合いの大切さを教えた。','它让人们认识到健康和互相帮助的重要性。'],['2020년','2020','2020年','2020年']]
];
const LANGUAGE_INDEX={ko:0,en:1,ja:2,zh:3};
function historyQuestion(raw, language, type) {
  const i=LANGUAGE_INDEX[language], item=raw.map(part=>part[i]);
  const q={ko:[`‘${item[0]}’은(는) 어느 문명 또는 나라와 관련 있을까요?`,`‘${item[0]}’은(는) 주로 어디에서 시작되었을까요?`,`‘${item[0]}’이 남긴 중요한 변화는 무엇일까요?`,`‘${item[0]}’은(는) 대략 언제였을까요?`],en:[`Which civilization or country is linked to “${item[0]}”?`,`Where did “${item[0]}” mainly begin?`,`What important change did “${item[0]}” bring?`,`About when did “${item[0]}” happen?`],ja:[`「${item[0]}」はどの文明や国と関係がありますか？`,`「${item[0]}」は主にどこで始まりましたか？`,`「${item[0]}」がもたらした大切な変化は？`,`「${item[0]}」はおよそいつですか？`],zh:[`“${item[0]}”与哪个文明或国家有关？`,`“${item[0]}”主要在哪里开始？`,`“${item[0]}”带来了什么重要变化？`,`“${item[0]}”大约发生在什么时候？`]}[language][type];
  return { item,q };
}
make=function(id){
  const raw=HISTORY_I18N[(id*19+7)%HISTORY_I18N.length],type=id%4,{item,q}=historyQuestion(raw,ui,type);
  const answer=item[type+1],pool=HISTORY_I18N.map(x=>x[type+1][LANGUAGE_INDEX[ui]]);
  return {id,h:item,raw,type,ans:answer,q,covid:item[0]==='코로나19'||item[0]==='COVID-19'||item[0]==='新冠肺炎',options:shuffle([answer,...shuffle(pool.filter(x=>x!==answer)).slice(0,3)])};
};
speak=function(){
  const language=$('voice').value,{q}=historyQuestion(current.raw,language,current.type);
  const u=new SpeechSynthesisUtterance(q);u.lang={ko:'ko-KR',en:'en-US',ja:'ja-JP',zh:'zh-CN'}[language];u.rate=.85;speechSynthesis.cancel();speechSynthesis.speak(u);
};
