// rules-tab.mjs — 트래블러 MGT2 규칙 안내 탭 (입문자용)
// 레이아웃: 상단 카테고리 탭 → 좌측 항목 리스트 → 우측 상세 내용

export class RulesTab {

  constructor() {
    this._activeCategory = null;
    this._activeItem = {}; // { categoryId: itemIndex }
    this._categories = this._buildCategories();
  }

  buildHTML() {
    if (!this._activeCategory) this._activeCategory = this._categories[0].id;

    const navHTML = this._categories.map(cat => `
      <button class="tsp-rules-nav-btn ${cat.id === this._activeCategory ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.label}
      </button>`).join('');

    const bodyHTML = this._categories.map(cat => {
      const isActive = cat.id === this._activeCategory;
      const activeIdx = this._activeItem[cat.id] ?? 0;

      const listHTML = cat.items.map((item, i) => `
        <div class="tsp-rules-list-item ${i === activeIdx ? 'active' : ''}" data-cat="${cat.id}" data-idx="${i}">
          ${item.title}
        </div>`).join('');

      const detailHTML = cat.items[activeIdx]?.body ?? '';

      return `
        <div class="tsp-rules-catbody" data-cat="${cat.id}" style="${isActive ? '' : 'display:none'}">
          <div class="tsp-rules-list">${listHTML}</div>
          <div class="tsp-rules-detail">${detailHTML}</div>
        </div>`;
    }).join('');

    return `
<div class="tsp-rules-wrap">
  <div class="tsp-rules-nav">${navHTML}</div>
  <div class="tsp-rules-body">${bodyHTML}</div>
</div>`;
  }

  _rerender(panel) {
    const list = panel.querySelector(`.tsp-rules-catbody[data-cat="${this._activeCategory}"] .tsp-rules-list`);
    const scrollTop = list?.scrollTop ?? 0;
    panel.innerHTML = this.buildHTML();
    this.bindEvents(panel);
    const newList = panel.querySelector(`.tsp-rules-catbody[data-cat="${this._activeCategory}"] .tsp-rules-list`);
    if (newList) newList.scrollTop = scrollTop;
  }

  bindEvents(panel) {
    panel.querySelectorAll('.tsp-rules-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this._activeCategory = btn.dataset.cat;
        panel.innerHTML = this.buildHTML();
        this.bindEvents(panel);
      });
    });

    panel.querySelectorAll('.tsp-rules-list-item').forEach(item => {
      item.addEventListener('click', () => {
        this._activeItem[item.dataset.cat] = parseInt(item.dataset.idx, 10);
        this._rerender(panel);
      });
    });
  }

  // ══════════════════════════════════════════════════════════
  // 카테고리/항목 데이터
  // ══════════════════════════════════════════════════════════
  _buildCategories() {
    return [
      { id: 'basics',     label: '기본 개념',     items: this._itemsBasics() },
      { id: 'skills',     label: '기능 설명',     items: this._itemsSkills() },
      { id: 'check',      label: '판정',          items: this._itemsCheck() },
      { id: 'combat',     label: '전투',          items: this._itemsCombat() },
      { id: 'space',      label: '우주 전투',     items: this._itemsSpace() },
      { id: 'psionics',   label: '초능력',        items: this._itemsPsionics() },
      { id: 'world',      label: '세계·법규',     items: this._itemsWorld() },
      { id: 'trade',      label: '무역',          items: this._itemsTrade() },
      { id: 'charmaking', label: '캐릭터 메이킹', items: this._itemsCharMaking() },
    ];
  }

  // ── 기본 개념 ────────────────────────────────────────────
  _itemsBasics() {
    return [
      { title: '트래블러란?', body: `
        <h3>🌌 트래블러란?</h3>
        <p>트래블러는 먼 미래를 배경으로 한 SF 롤플레잉 게임입니다.
        플레이어들은 <b>여행자</b>(캐릭터)가 되어 우주를 무대로
        무역, 탐험, 전투, 모험을 펼칩니다.</p>
        <p>한 명은 <b>심판</b>(GM)을 맡아 시나리오를 진행하고,
        나머지는 여행자를 연기합니다.</p>
      `},
      { title: '특성치', body: `
        <h3>👤 특성치 — 캐릭터의 기본 능력</h3>
        <p>모든 캐릭터는 6가지 특성치를 가집니다. 각 특성치는 0~15
        사이의 값을 가지며, 값에 따라 <b>주사위 수정치(DM)</b>가 정해집니다.</p>
        <table class="tsp-rules-table">
          <thead><tr><th>특성치</th><th>분류</th><th>의미</th></tr></thead>
          <tbody>
            <tr><td><b>근력</b> (STR)</td><td rowspan="3">신체</td><td>힘, 체력, 완력</td></tr>
            <tr><td><b>민첩</b> (DEX)</td><td>기민함, 반사 신경</td></tr>
            <tr><td><b>인내</b> (END)</td><td>지구력, 버티는 힘</td></tr>
            <tr><td><b>지능</b> (INT)</td><td rowspan="3">정신</td><td>사고력, 영감, 즉흥성</td></tr>
            <tr><td><b>교육</b> (EDU)</td><td>학습, 훈련된 지식</td></tr>
            <tr><td><b>지위</b> (SOC)</td><td>사회적 위치, 인맥</td></tr>
          </tbody>
        </table>
        <table class="tsp-rules-table tsp-mod-table" style="margin-top:8px">
          <thead><tr><th>특성치 점수</th><th>주사위 수정치</th></tr></thead>
          <tbody>
            <tr><td>0</td><td class="tsp-mod-neg">-3</td></tr>
            <tr><td>1 – 2</td><td class="tsp-mod-neg">-2</td></tr>
            <tr><td>3 – 5</td><td class="tsp-mod-neg">-1</td></tr>
            <tr><td>6 – 8</td><td class="tsp-mod-zero">+0</td></tr>
            <tr><td>9 – 11</td><td class="tsp-mod-pos">+1</td></tr>
            <tr><td>12 – 14</td><td class="tsp-mod-pos">+2</td></tr>
            <tr><td>15+</td><td class="tsp-mod-pos">+3</td></tr>
          </tbody>
        </table>
      `},
      { title: '기능', body: `
        <h3>🛠️ 기능 — 캐릭터가 할 수 있는 일</h3>
        <p>기능은 캐릭터가 무엇을 잘하는지를 나타내며, <b>레벨</b>(0,1,2...)로
        숙련도를 표현합니다.</p>
        <ul class="tsp-rules-list-ul">
          <li>레벨이 높을수록 판정에 더 큰 보너스</li>
          <li>레벨 0 = "기본은 알지만 미숙" → 페널티 없음</li>
          <li>기능을 <b>아예 보유하지 않음</b> = 미숙 페널티 <span class="tsp-badge red">-3</span></li>
        </ul>
        <p class="tsp-rules-note">예: "사격(에너지형) 2"는 에너지 무기를 다루는 데 +2 보너스를 줍니다.</p>
      `},
      { title: '주사위 표기법', body: `
        <h3>🎲 주사위 표기법</h3>
        <table class="tsp-rules-table">
          <thead><tr><th>표기</th><th>의미</th></tr></thead>
          <tbody>
            <tr><td>2D</td><td>6면체 주사위 2개를 굴려 합산 (가장 흔한 판정)</td></tr>
            <tr><td>1D</td><td>6면체 주사위 1개</td></tr>
            <tr><td>D66</td><td>6면체 2개를 굴려, 한 개를 십의 자리·다른 한 개를 일의 자리로 읽음 (예: 3과 5 → 35)</td></tr>
            <tr><td>D3</td><td>1D를 굴려 (결과+1)÷2 반올림 → 1~3 사이 값</td></tr>
          </tbody>
        </table>
      `},
    ];
  }

  // ── 기능 설명 ────────────────────────────────────────────
  _itemsSkills() {
    const skill = (title, desc, specs) => ({
      title,
      body: `<h3>📖 ${title}</h3><p>${desc}</p>` +
        (specs ? `<ul class="tsp-rules-list-ul">${specs.map(s => `<li><b>${s[0]}</b>: ${s[1]}</li>`).join('')}</ul>` : '')
    });

    return [
      skill('경계', '주변을 살펴 위험·수상한 사람·특이한 물체를 발견하는 기능. 매복·기습 감지, 일반 순찰 등에 사용합니다.'),
      skill('근접전', '근접 전투에서의 공격과 근접 무기 사용에 관한 기능입니다.', [
        ['도검','검, 레이피어, 각종 날붙이'],
        ['둔기','철퇴, 곤봉, 지팡이'],
        ['비무장','주먹질, 발차기, 몸싸움, 임시변통 무기'],
        ['생체','이빨·발톱 등 신체 일부를 이용한 공격'],
      ]),
      skill('기계공학', '우주선·첨단 탑승물을 운용·관리·수리하는 기능. 단순한 장비 수리는 정비 기능을 사용합니다.', [
        ['기동 드라이브','기동 드라이브와 인공중력 운용·관리'],
        ['동력부','동력부 운용·관리'],
        ['생명 유지 장치','생명유지 관련 장치 운용·관리'],
        ['점프 드라이브','점프 드라이브 운용·관리, 점프 실행'],
      ]),
      skill('기만', '거짓말·변장·손재주로 눈을 속이는 기능. 대부분의 부정직한 속임수가 여기 해당합니다.'),
      skill('다재다능', '적절한 기능이 없을 때의 미숙 페널티를 기능 레벨당 1씩 줄여줍니다. 3레벨이면 미숙 페널티 완전 상쇄. 0레벨은 효과 없음, 4레벨 이상은 의미 없음.'),
      skill('도박', '포커·룰렛·경마 등 각종 도박과 확률·통계 이해. 1레벨 이상이면 현금 표 굴림에 +1.'),
      skill('동물', '동물을 다루는 기능.', [
        ['수의학','동물에 대한 의학적 조치 (의료 기능과 동일하게 사용)'],
        ['친화력','동물을 다루고 탑승. 희귀 동물일수록 난이도 상승'],
        ['훈련','동물을 길들이고 훈련'],
      ]),
      skill('변호', '법률·법 관행(특히 우주법) 지식. 웅변·토론·연설 경험과도 연관되어 변호사·정치인에게 유용합니다.'),
      skill('비행', '대기권 내 비행 탑승물 조종. 대기권을 벗어나려면 보통 우주 비행 기능 필요.', [
        ['고정익형','제트엔진·추력편향 등을 사용하는 항공기'],
        ['비행선','동력 경항공기'],
        ['오니솝터','날개를 위아래로 움직여 비행하는 탑승물'],
        ['중력형','에어/래프트, 중력 벨트 등 중력 기술 탑승물'],
        ['회전익형','헬리콥터, 수직이착륙기 등'],
      ]),
      skill('사격', '다양한 원거리 무기 사용 기능.', [
        ['에너지형','레이저 권총, 플라스마 라이플 등'],
        ['원시형','활, 바람총 등 (투척무기 제외)'],
        ['탄환형','자동소총, 가우스 소총 등 고체탄 무기'],
      ]),
      skill('산업', '유용한 재화/용역을 생산하는 훈련. 판정 시 매달 "달성도×250" Cr 수입. 전문 분야별로 따로 습득해야 함 (다른 기능과 달리 0레벨 공유 불가).', [
        ['건축','궤도 주거지·초거대 구조물 건설'],
        ['생물공업','인공 유기체 제조·관리'],
        ['소행성 채굴','소행성에서 광석·광물 채굴'],
        ['수경 재배','척박한 환경에서 작물 재배'],
        ['토목','구조물·건축물 설계'],
        ['폴리머','폴리머 설계·활용'],
      ]),
      skill('생존', '개척되지 않은 환경에서 살아남기, 은신처 짓기, 사냥, 방사능 회피, 동식물 식별 등.'),
      skill('설득', '외교보다 가볍고 일상적인 대화의 요령. 흥정·감언이설·허세·매수·위협을 포함합니다.'),
      skill('세상물정', '도시 환경과 권력 구조 이해. 범죄 연줄·해결사를 알고, 뒷세계에 빠르게 적응할 수 있습니다.'),
      skill('수사', '예리한 관찰력, 법의학 지식, 정밀 분석. 단서 수색·증거 분석 등에 사용합니다.'),
      skill('언어', '특정 언어의 읽고 쓰기. 모국어는 기능 없이 가능. 0레벨은 여러 언어로 간단한 표현 가능 수준.', [
        ['앵글릭','서드 임페리움의 공통어'],
        ['빌라니어','퍼스트 임페리움 빌라니인의 언어 (라틴어 격)'],
        ['제틀','조다니의 음성 언어'],
        ['오인프리스','드로인의 제례 언어'],
      ]),
      skill('예술', '창조적 예술 분야.', [
        ['공연','배우·무용수·가수, 무대/스크린/홀로그램 공연'],
        ['글쓰기','감명 깊거나 흥미로운 글 작성'],
        ['시각 매체','회화·조각 등 시각 예술'],
        ['악기','특정 악기 연주'],
        ['홀로그램','홀로그램 영상 녹화·제작'],
      ]),
      skill('외교', '합의 도출, 평화 연락, 사회적 결례 무마. 상류사회 행동규범·귀족 예절 포함. 설득보다 격식 있는 기능.'),
      skill('우주 비행', '우주선 조종. 전문분야별로 다룰 수 있는 함선 규모가 다름.', [
        ['소형선','100톤 미만 (경수송선 등)'],
        ['우주선','100~5000톤 (무역선 등)'],
        ['주력선','5000톤 이상 (전함 등)'],
      ]),
      skill('우주 항법', '우주선의 진로 계산, 점프 계산. 표준 점프는 쉬움(4+) + 점프거리만큼 페널티.'),
      skill('운동', '신체 능력 보완. 해당 특성치를 사용하는 작업에 함께 더할 수 있음.', [
        ['근력','완력, 무거운 것 들기, 고중력 환경 활동'],
        ['민첩','등반, 투척, 저글링, 저중력/무중력 환경 활동'],
        ['인내','장거리 달리기, 장거리 수영'],
      ]),
      skill('운전', '지상 탑승물 조종.', [
        ['공기부양형','공기 쿠션+추진기 탑승물'],
        ['굴착형','드릴·플라스마 토치 등으로 고체 속을 이동'],
        ['궤도형','무한궤도 (전차 등)'],
        ['보행형','2개 이상의 다리로 이동'],
        ['차륜형','바퀴 달린 지상 차량'],
      ]),
      skill('유흥', '어울림의 기술. 자신과 타인의 즐거움을 챙기고 분위기를 띄움. 사회성과 속임수도 포함.'),
      skill('은신', '모습이나 소리를 숨기고 이목을 피하는 기능.'),
      skill('의료', '응급처치, 부상자 분류, 진단·치료, 수술, 장기요양. 응급처치 성공 시 달성도만큼 즉시 회복.'),
      skill('전술', '전투를 위한 전략 계획·의사결정.', [
        ['우주전','우주선·함대 공격 지휘'],
        ['지상전','보병대·지상 탑승물 공격 지휘'],
      ]),
      skill('전자기기', '컴퓨터·우주선 시스템 등 전자장비 조작. 레벨이 높으면 수리·제작도 가능.', [
        ['감지기','정찰위성~열화상카메라 등 전자감지기 사용·분석'],
        ['원격 조종','드론·미사일·로봇 원격 조종'],
        ['컴퓨터','컴퓨터 시스템 사용, 해킹, 프로그램 실행'],
        ['통신','통신장비 사용, 채널 개설, 통신 방해'],
      ]),
      skill('접객', '귀족·상류층 승객 응대. 호칭/예절, 요리·재봉, 기본 경영까지 포함. 함선 상급 수송에는 접객 담당 필수.'),
      skill('정비', '대부분의 장비 관리·수리. 첨단 장비/우주선 부품 수리는 기계공학 필요. 발명·개조는 불가, 관리·수리만.'),
      skill('중개', '무역 협상과 공정한 거래 주선. 무역 활동에서 핵심적으로 사용.'),
      skill('중화기', '대형 플라스마 무기, 로켓 발사기, 화포 등 대규모 물적 피해 무기.', [
        ['탑승형','전차포·기관포 등 탑승물/진지 고정 대형무기'],
        ['화포','고정포, 박격포 등 간접사격 무기'],
        ['휴대형','미사일발사기, 화염방사기, 휴대형 핵융합/플라스마포'],
      ]),
      skill('지도력', '조력자·동료를 통솔·고무·단결시키는 기능. 전투 중 지도력 행동으로 아군에게 수정치 부여 가능.'),
      skill('진공복', '우주복·보호복 착용·운용. 부족한 레벨만큼 해당 장비 착용 중 모든 판정에 -2. 발전된 장갑복 사용에도 필요.'),
      skill('포격', '우주선 탑재 무기를 우주에서 사용. 대부분의 소형선은 포탑 무기만 탑재.', [
        ['궤도포','행성 폭격, 정지 목표 포격'],
        ['주포','격납 포탑/함선 중추 무기 운용'],
        ['차단막','흑색구체생성기 등 에너지 차단막 가동'],
        ['포탑','우주선 포탑 무기 운용'],
      ]),
      skill('폭발물', '폭약·폭발장치 사용, 폭탄 조립/해체. 달성도 -4 이하 실패 시 조기 폭발 위험.'),
      skill('학문', '지식과 그 실질적 활용.', [
        ['경제학','무역과 시장경제 연구'],
        ['고고학','고대 문명 연구, 유물 조사·발굴'],
        ['로봇공학','로봇 제작과 활용'],
        ['물리학','사물의 이치 연구'],
        ['사이버네틱스','생물과 합성소재의 융화 연구'],
        ['생물학','생명체 연구'],
        ['심리학','생각과 사회 연구'],
        ['언어학','언어 연구'],
        ['역사학','문헌 기록으로 과거 연구'],
        ['외계인학','외계 종족의 생명·문화 연구'],
        ['우주론','우주와 그 기원 연구'],
        ['유전학','유전 부호와 유전공학 연구'],
      ]),
    ];
  }

  // ── 판정 ─────────────────────────────────────────────────
  _itemsCheck() {
    return [
      { title: '기본 판정 공식', body: `
        <h3>🎯 기본 판정 공식</h3>
        <div class="tsp-rules-formula">
          2D + 기능 레벨 + 특성 수정치 + 기타 수정치 ≥ <b>8</b>
        </div>
        <p>결과가 <b>8 이상</b>이면 성공 (이것이 "보통" 난이도입니다).</p>
        <ul class="tsp-rules-list-ul">
          <li>관련 기능이 <b>전혀 없음</b> → <span class="tsp-badge red">-3 미숙 페널티</span></li>
          <li>난이도가 따로 언급되지 않으면 → 보통(8+)으로 간주</li>
        </ul>
        <p class="tsp-rules-note">예시: 민첩 9(+1), 사격 2레벨인 캐릭터가 총을 쏜다면<br>
        2D + 2(기능) + 1(민첩) = 2D+3 ≥ 8 이면 명중</p>
      `},
      { title: '작업 난이도 표', body: `
        <h3>📊 작업 난이도 표</h3>
        <table class="tsp-rules-table tsp-difficulty-table">
          <thead><tr><th>난이도</th><th>목표치</th><th>설명</th></tr></thead>
          <tbody>
            <tr><td><span class="tsp-diff diff-1">간단함</span></td><td>2+</td><td>누가 봐도 사소한 일</td></tr>
            <tr><td><span class="tsp-diff diff-2">쉬움</span></td><td>4+</td><td>전문가에겐 사소, 초보자도 손쉬움</td></tr>
            <tr><td><span class="tsp-diff diff-3">일상적</span></td><td>6+</td><td>전문가에겐 사소, 초보자에겐 비교적 쉬움</td></tr>
            <tr><td><span class="tsp-diff diff-4">보통</span></td><td>8+</td><td>전문가에게 적당한 수준 (기본값)</td></tr>
            <tr><td><span class="tsp-diff diff-5">어려움</span></td><td>10+</td><td>전문가에게도 어려움</td></tr>
            <tr><td><span class="tsp-diff diff-6">매우 어려움</span></td><td>12+</td><td>전문가도 어렵고, 초보자는 거의 불가능</td></tr>
            <tr><td><span class="tsp-diff diff-7">역경</span></td><td>14+</td><td>대단히 어려움</td></tr>
            <tr><td><span class="tsp-diff diff-8">불가능</span></td><td>16+</td><td>기적에 가까움</td></tr>
          </tbody>
        </table>
      `},
      { title: '달성도', body: `
        <h3>📈 달성도 — 얼마나 잘했나/못했나</h3>
        <div class="tsp-rules-formula">달성도 = 최종 결과 − 목표치</div>
        <table class="tsp-rules-table">
          <thead><tr><th>달성도</th><th>결과</th><th>설명</th></tr></thead>
          <tbody>
            <tr class="tsp-row-critical-fail"><td>-6 이하</td><td>대실패</td><td>최악의 결과. 더 큰 문제 발생</td></tr>
            <tr class="tsp-row-bad"><td>-2 ~ -5</td><td>실패</td><td>그냥 실패</td></tr>
            <tr class="tsp-row-bad"><td>-1</td><td>아슬아슬한 실패</td><td>대가를 치르면 성공 처리 가능 (심판 재량)</td></tr>
            <tr class="tsp-row-good"><td>0</td><td>아슬아슬한 성공</td><td>겨우 성공, 부작용 있을 수도</td></tr>
            <tr class="tsp-row-good"><td>1 ~ 5</td><td>성공</td><td>평범하게 성공</td></tr>
            <tr class="tsp-row-great"><td>6 이상</td><td>대성공</td><td>완벽하게 성공</td></tr>
          </tbody>
        </table>
        <p class="tsp-rules-note">전투의 피해량 계산에도 달성도가 사용됩니다.</p>
      `},
      { title: '호조건 / 악조건', body: `
        <h3>⚖️ 호조건 / 악조건</h3>
        <div class="tsp-rules-grid2">
          <div class="tsp-rules-card green">
            <div class="tsp-rules-card-title">호조건 (유리할 때)</div>
            주사위를 1개 더 굴리고 <b>가장 낮은 값 제거</b>
          </div>
          <div class="tsp-rules-card red">
            <div class="tsp-rules-card-title">악조건 (불리할 때)</div>
            주사위를 1개 더 굴리고 <b>가장 높은 값 제거</b>
          </div>
        </div>
        <p class="tsp-rules-note">하나의 판정에 호조건/악조건은 각각 최대 1번만. 둘 다 있으면 상쇄.</p>
      `},
      { title: '대항 판정', body: `
        <h3>🔗 대항 판정</h3>
        <p>두 캐릭터가 직접 경쟁할 때 — 양쪽 모두 판정 후
        <b>달성도가 더 높은 쪽이 승리</b>합니다.</p>
        <p class="tsp-rules-note">예: 은신 vs 경계, 협상 vs 저항</p>
      `},
      { title: '소요 시간', body: `
        <h3>⏱️ 소요 시간</h3>
        <table class="tsp-rules-table">
          <thead><tr><th>소요 시간</th><th>예시</th></tr></thead>
          <tbody>
            <tr><td>1D초</td><td>사격, 주먹질, 도약</td></tr>
            <tr><td>1D분</td><td>응급 처치, 간단한 작업</td></tr>
            <tr><td>1D×10분</td><td>복잡한 전문 작업, 구역 수색</td></tr>
            <tr><td>1D시간</td><td>은신처 만들기, 황무지 횡단</td></tr>
            <tr><td>1D×10시간</td><td>손상된 함선 정비</td></tr>
            <tr><td>1D일</td><td>도시에서 실종자 수색</td></tr>
          </tbody>
        </table>
        <div class="tsp-rules-grid2" style="margin-top:8px">
          <div class="tsp-rules-card red"><div class="tsp-rules-card-title">서두르면</div>시간 단축 → <b>수정치 -2</b></div>
          <div class="tsp-rules-card green"><div class="tsp-rules-card-title">신중하면</div>시간 증가 → <b>수정치 +2</b></div>
        </div>
      `},
    ];
  }

  // ── 전투 ─────────────────────────────────────────────────
  _itemsCombat() {
    return [
      { title: '전투 라운드', body: `
        <h3>⚔️ 전투 라운드</h3>
        <div class="tsp-rules-formula">1라운드 ≈ 6초</div>
        <ul class="tsp-rules-list-ul">
          <li><b>우선권</b>: 지도력 판정 달성도 + 민첩 수정치가 높은 순서대로 행동</li>
          <li>동점이면 민첩 높은 쪽 우선, 그래도 같으면 동시 행동</li>
          <li>모두 한 번씩 행동하면 새 라운드 시작 (우선권 유지)</li>
        </ul>
      `},
      { title: '라운드당 행동', body: `
        <h3>🎮 라운드당 행동</h3>
        <table class="tsp-rules-table">
          <thead><tr><th>행동 구성</th><th>설명</th></tr></thead>
          <tbody>
            <tr><td><b>주요 행동 1</b> + <b>부가 행동 1</b></td><td>가장 일반적인 구성</td></tr>
            <tr><td><b>부가 행동 3</b></td><td>주요 행동을 포기하면</td></tr>
            <tr><td><b>반응 행동</b></td><td>무제한, 단 한 번 사용할 때마다 이후 행동에 -1</td></tr>
            <tr><td><b>자유 행동</b></td><td>무제한 (소리치기, 버튼 누르기 등)</td></tr>
          </tbody>
        </table>
      `},
      { title: '공격 판정', body: `
        <h3>🗡️ 공격 판정</h3>
        <div class="tsp-rules-formula">근접: 2D + 근접전 + (근력 또는 민첩 수정치)</div>
        <div class="tsp-rules-formula" style="margin-top:4px">원거리: 2D + 사격 + 민첩 수정치</div>
        <p>8 이상 성공 → 명중 → 피해 적용</p>
        <table class="tsp-rules-table" style="margin-top:8px">
          <thead><tr><th>상황</th><th>수정치</th></tr></thead>
          <tbody>
            <tr class="tsp-row-good"><td>조준 (부가 행동 1회당, 최대 +6)</td><td>+1</td></tr>
            <tr class="tsp-row-good"><td>단거리</td><td>+1</td></tr>
            <tr class="tsp-row-bad"><td>장거리</td><td>-2</td></tr>
            <tr class="tsp-row-bad"><td>초장거리</td><td>-4</td></tr>
            <tr class="tsp-row-bad"><td>엄폐 중인 대상</td><td>-2</td></tr>
            <tr class="tsp-row-bad"><td>포복 중인 대상</td><td>-1</td></tr>
          </tbody>
        </table>
      `},
      { title: '회피 & 엄폐', body: `
        <h3>🛡️ 회피 & 엄폐</h3>
        <table class="tsp-rules-table">
          <thead><tr><th>반응</th><th>효과</th></tr></thead>
          <tbody>
            <tr><td><b>회피</b></td><td>공격자 판정에 (민첩 수정치 또는 운동(민첩) 레벨 중 높은 값)만큼 페널티 부여</td></tr>
            <tr><td><b>즉시 엄폐</b></td><td>이번 라운드 모든 원거리 공격 -2, 엄폐물 장갑 추가 적용 (이후 행동 불가)</td></tr>
          </tbody>
        </table>
        <p class="tsp-rules-note">반응 행동을 쓸 때마다 이후 자신의 행동에 -1 누적</p>
      `},
      { title: '피해와 회복', body: `
        <h3>💥 피해와 회복</h3>
        <div class="tsp-rules-formula">피해 = 무기 피해 주사위 + 공격 달성도 (장갑으로 감소)</div>
        <ul class="tsp-rules-list-ul">
          <li>피해는 <b>인내 → 근력 → 민첩</b> 순서로 깎임</li>
          <li>세 특성치 모두 0 → 쓰러짐 (의식불명/사망)</li>
          <li>자연 회복: 1점/일 (8시간 휴식)</li>
          <li>응급 처치(주요 행동, 의료 판정): 달성도만큼 즉시 회복</li>
        </ul>
      `},
    ];
  }

  // ── 우주 전투 ────────────────────────────────────────────
  _itemsSpace() {
    return [
      { title: '우주 전투 흐름', body: `
        <h3>🚀 우주 전투 흐름</h3>
        <div class="tsp-rules-formula">1라운드 ≈ 1,000초 (약 17분)</div>
        <table class="tsp-rules-table" style="margin-top:8px">
          <thead><tr><th>단계</th><th>내용</th></tr></thead>
          <tbody>
            <tr><td>① 우선권</td><td>지도력 판정 또는 민첩 수정치로 행동 순서 결정</td></tr>
            <tr><td>② 전투 기동</td><td>조종사가 거리·자세 변경 (회피 기동 포함)</td></tr>
            <tr><td>③ 행동 단계</td><td>각 승무원이 차례로 행동 (공격, 수리 등)</td></tr>
          </tbody>
        </table>
      `},
      { title: '승무원 역할', body: `
        <h3>👨‍✈️ 승무원 역할</h3>
        <table class="tsp-rules-table">
          <thead><tr><th>역할</th><th>주요 행동</th><th>관련 기능</th></tr></thead>
          <tbody>
            <tr><td>조종사</td><td>기동, 회피, 도킹</td><td>우주 비행 (민첩)</td></tr>
            <tr><td>항법사</td><td>점프 계산, 항로 설정</td><td>항법 (지능/교육)</td></tr>
            <tr><td>포격수</td><td>무기 발사</td><td>포격 (민첩)</td></tr>
            <tr><td>기관사</td><td>동력 관리, 수리</td><td>기계공학/전자기기</td></tr>
            <tr><td>선장</td><td>우선권 향상, 지휘</td><td>지도력 (지능/지위)</td></tr>
            <tr><td>감지사</td><td>탐지, 전자전</td><td>전자기기(감지기)</td></tr>
          </tbody>
        </table>
      `},
      { title: '함선 공격 판정', body: `
        <h3>🎯 함선 공격 판정</h3>
        <div class="tsp-rules-formula">2D + 포격 기능 + 민첩 수정치 ± 거리/회피 수정치 ≥ 8</div>
      `},
      { title: '거리 밴드', body: `
        <h3>🛸 거리 밴드</h3>
        <table class="tsp-rules-table">
          <thead><tr><th>거리 밴드</th><th>실제 거리</th><th>비고</th></tr></thead>
          <tbody>
            <tr><td>근거리</td><td>1,000km 이내</td><td></td></tr>
            <tr><td>단거리</td><td>10,000km 이내</td><td>공격 +1</td></tr>
            <tr><td>중거리</td><td>25,000km 이내</td><td>표준 거리</td></tr>
            <tr><td>장거리</td><td>50,000km 이내</td><td>공격 -2</td></tr>
            <tr><td>초장거리</td><td>300,000km 이내</td><td>공격 -4</td></tr>
          </tbody>
        </table>
      `},
      { title: '점프 항행', body: `
        <h3>⚡ 점프 항행</h3>
        <ul class="tsp-rules-list-ul">
          <li>점프 계산: 보통(8+) 항법 판정 (1D×10분, 지능/교육)</li>
          <li>점프 소요 시간: 약 1주일</li>
          <li>연료 소모: 점프 거리 1당 선체 톤수의 10%</li>
          <li>실패 시 점프 오류 → 엉뚱한 곳에 도착하거나 시간 지연</li>
        </ul>
      `},
      { title: '우주선 치명타', body: `
        <h3>💥 우주선 치명타</h3>
        <div class="tsp-rules-formula">치명타 심각도 = 공격 달성도 − 5</div>
        <p>치명타 부위는 2D로 결정 (감지기/동력부/연료/무기/장갑/선체/기동드라이브/화물/점프드라이브/탑승자/함교).</p>
        <ul class="tsp-rules-list-ul">
          <li>심각도가 클수록 효과가 심각해짐 (1~6단계)</li>
          <li>동일 부위 재피격: 새 심각도가 높으면 갱신, 같거나 낮으면 1단계 상승</li>
          <li>심각도 6 부위는 더 심해지지 않고, 추가 피해는 새 부위에 적용</li>
          <li>긴급 수리(기계공학 8+, 1D시간): 효과를 1D시간 동안만 정지. 영구 수리는 입항 필요</li>
        </ul>
        <p class="tsp-rules-note">상세 효과는 「표」 탭 → 우주 관련 → 우주선 치명타 효과 표 참조</p>
      `},
      { title: '동력 관리', body: `
        <h3>⚙️ 동력 요구량</h3>
        <table class="tsp-rules-table">
          <thead><tr><th>항목</th><th>동력 요구량</th></tr></thead>
          <tbody>
            <tr><td>기초 시스템</td><td>선체 톤수 × 20%</td></tr>
            <tr><td>기동 드라이브</td><td>선체 톤수 × 10% × Thrust (M0이면 ×0.25)</td></tr>
            <tr><td>점프 드라이브</td><td>선체 톤수 × 10% × Jump (점프 순간에만 소모)</td></tr>
            <tr><td>무기(포탑)</td><td>포탑 1 + 탑재 무기별 동력</td></tr>
          </tbody>
        </table>
        <table class="tsp-rules-table" style="margin-top:8px">
          <thead><tr><th>무기</th><th>동력</th></tr></thead>
          <tbody>
            <tr><td>미사일 발사대 / 샌드캐스터</td><td>0</td></tr>
            <tr><td>펄스 레이저 / 빔 레이저</td><td>4</td></tr>
            <tr><td>입자 빔</td><td>8</td></tr>
          </tbody>
        </table>
        <h3 style="margin-top:14px">동력 부족 시</h3>
        <ul class="tsp-rules-list-ul">
          <li>기초 시스템 절반도 못 댐 → 생명유지 점진적 정지(D3+3일 후 사망), 자동문/화물해치 정지, 단말기 정지(브리지 제외), 인공중력 정지, 통신 정지</li>
          <li>절약: 비필수 장비 OFF → 기초 요구량 절반으로 감소</li>
          <li>절약: 추진력 낮춤 → (선체톤×10%)×낮춘 추진력만큼 절약</li>
        </ul>
      `},
    ];
  }

  // ── 초능력 ───────────────────────────────────────────────
  _itemsPsionics() {
    return [
      { title: '초능력 특성치', body: `
        <h3>🧠 초능력 특성치</h3>
        <div class="tsp-rules-formula">초능력 특성치 = 2D − (지금까지의 경력 주기 횟수)</div>
        <ul class="tsp-rules-list-ul">
          <li>적극적으로 사용하지 않으면 자연 손실됨 — 위 공식으로 계산</li>
          <li>0이면 초능력 전혀 없음</li>
          <li>재능 사용마다 능력 비용만큼 소모 (실패해도 최소 1점 소모)</li>
          <li>0 미만이 되면 사용 불가, 추가로 1점당 1D 피해 (강행 시)</li>
          <li>회복: 마지막 사용 후 일정 시간이 지나면 서서히 회복</li>
        </ul>
        <p class="tsp-rules-note">제국(서드 임페리움)에서는 초능력이 불법이며, 발각되면 엄중 처벌됩니다.</p>
      `},
      { title: '초능력 사용', body: `
        <h3>✨ 초능력 사용하기</h3>
        <ul class="tsp-rules-list-ul">
          <li>해당 재능(텔레파시/투시/염동력/각성/순간이동) 판정 필요</li>
          <li>성공: 능력 비용만큼 초능력 특성치 소모. 실패: 1점만 소모</li>
          <li>비용을 2배 지불하면 1구간 더 먼 거리에서도 사용 가능</li>
        </ul>
        <h3 style="margin-top:14px">초능력 사용 거리 구간</h3>
        <p>가까움 → 매우 가까움 → 멂 → 매우 멂 (비용 2배마다 1구간씩 확장)</p>
      `},
      { title: '주요 재능', body: `
        <h3>🌀 주요 초능력 재능</h3>
        <table class="tsp-rules-table">
          <thead><tr><th>재능</th><th>개요</th></tr></thead>
          <tbody>
            <tr><td><b>텔레파시</b></td><td>가장 흔한 재능. 표층 사고 읽기, 정신 감응 등</td></tr>
            <tr><td><b>투시</b></td><td>시각/감각 확장 — 벽 너머 보기, 원거리 관측</td></tr>
            <tr><td><b>염동력</b></td><td>물체에 직접 힘을 가함 — 들기/던지기/조작</td></tr>
            <tr><td><b>각성</b></td><td>초능력 특성치를 신체 특성치로 전환 (근력/인내 강화, 상처 치유, 장갑 획득 등)</td></tr>
            <tr><td><b>순간이동</b></td><td>단거리 즉시 이동. 강력하지만 비용이 큼</td></tr>
          </tbody>
        </table>
        <p class="tsp-rules-note">이 외에도 예지, 위장 등 다양한 재능이 존재합니다.</p>
      `},
      { title: '초능력 관련 장비', body: `
        <h3>🔧 초능력 관련 기술/장비</h3>
        <table class="tsp-rules-table">
          <thead><tr><th>장비</th><th>효과</th></tr></thead>
          <tbody>
            <tr><td>초능력 약물 (TL8)</td><td>초능력 특성치 소모 후 사용 시 일시적으로 능력 강화. 반복 투약 시 부작용·영구 손실 위험</td></tr>
            <tr><td>초능력 억제제 (TL9)</td><td>모든 초능력 판정에 -3, 초능력자에게만 효과 있음</td></tr>
            <tr><td>초능력 인터페이스</td><td>장착 무기/장비 사용 시 초능력 수정치 적용 가능 (초능력자만 사용 가능)</td></tr>
          </tbody>
        </table>
        <p class="tsp-rules-note">제국법상 대부분의 초능력 관련 물품은 규제 대상이며, 초능력에 대항하는 장비만 예외적으로 허용됩니다.</p>
      `},
    ];
  }

  // ── 세계·법규 ───────────────────────────────────────────
  _itemsWorld() {
    return [
      { title: '세계 생성 절차', body: `
        <h3>🌍 세계의 UWP (Universal World Profile)</h3>
        <p>세계는 다음 8가지 특성치로 표현됩니다: <b>스타포트 / 크기 / 대기 / 해양 / 인구 / 정부 / 법규수준 / 기술수준</b></p>
        <table class="tsp-rules-table">
          <thead><tr><th>특성치</th><th>의미</th><th>결정 방법</th></tr></thead>
          <tbody>
            <tr><td>크기</td><td>행성 직경 (0=소행성대 ~ A=거대)</td><td>2D-2</td></tr>
            <tr><td>대기</td><td>대기 종류·밀도</td><td>2D-7+크기</td></tr>
            <tr><td>해양</td><td>표면 액체 비율</td><td>2D-7+대기 (특수 수정)</td></tr>
            <tr><td>인구</td><td>인구 규모 (자릿수)</td><td>2D-2</td></tr>
            <tr><td>정부</td><td>정부 형태 (0~F)</td><td>2D-7+인구</td></tr>
            <tr><td>법규수준</td><td>규제 강도</td><td>2D-7+정부</td></tr>
            <tr><td>스타포트</td><td>우주항 등급 (A~X)</td><td>2D + 인구 수정치</td></tr>
            <tr><td>기술수준</td><td>기술 발전도</td><td>1D + 스타포트/크기/대기/인구/정부 수정치</td></tr>
          </tbody>
        </table>
        <p class="tsp-rules-note">상세 수정치 표는 「표」 탭 → 세계·무역 카테고리 참조 (우주항 등급/정부 형태/법규수준/기술수준/무역특성).</p>
      `},
      { title: '우주항', body: `
        <h3>🛰️ 우주항</h3>
        <ul class="tsp-rules-list-ul">
          <li><b>하부항</b>: 대기권 내 지상 착륙장 (대부분의 세계에 존재)</li>
          <li><b>상부항</b>: 궤도상 시설 (고기술/고인구 세계에만 존재 가능)</li>
          <li>등급 A~X로 분류, 등급에 따라 정박료·연료·시설·기지 보유 여부 결정</li>
          <li>우주항은 치외법권 — 제국법 적용 (물품규제는 법규수준1 수준, 초능력 전면금지)</li>
        </ul>
        <p class="tsp-rules-note">상세 등급표는 「표」 탭 참조</p>
      `},
      { title: '법규 수준', body: `
        <h3>⚖️ 법규 수준</h3>
        <div class="tsp-rules-formula">법규 수준 = 2D − 7 + 정부 특성치</div>
        <ul class="tsp-rules-list-ul">
          <li>법규 수준이 높을수록 무기·약물·기술·초능력 등의 규제가 강해짐</li>
          <li>금지 물품 소지/거래 적발 시 처벌 수정치 = 현지 법규수준 − 해당 물품 금지 시작 수준</li>
          <li>폭행/재물손괴/살인 등 일반 범죄는 고정 수정치 적용</li>
          <li>처벌은 2D+수정치로 결정 (석방~사형)</li>
        </ul>
        <p class="tsp-rules-note">상세 표는 「표」 탭 → 세계·무역 → 법규 수준 표 참조</p>
      `},
    ];
  }

  // ── 무역 ─────────────────────────────────────────────────
  _itemsTrade() {
    return [
      { title: '화물·여객 구하기', body: `
        <h3>📦 화물·여객 구하기</h3>
        <div class="tsp-rules-formula">3D + 중개 + 세상물정(또는 유흥) + 세계 수정치</div>
        <table class="tsp-rules-table" style="margin-top:8px">
          <thead><tr><th>인구 특성치</th><th>화물 수정치</th><th>여객 수정치</th></tr></thead>
          <tbody>
            <tr class="tsp-row-bad"><td>1 이하</td><td>-4</td><td>-4</td></tr>
            <tr><td>2 – 5</td><td>+0</td><td>+0</td></tr>
            <tr class="tsp-row-good"><td>6 – 7</td><td>+1</td><td>+2</td></tr>
            <tr class="tsp-row-good"><td>8 이상</td><td>+3</td><td>+4</td></tr>
          </tbody>
        </table>
      `},
      { title: '투기 무역 — 구매', body: `
        <h3>💰 투기 무역 — 구매</h3>
        <div class="tsp-rules-formula">3D + 중개(또는 중개인+협상+2) + 구매 DM − 판매 DM − 공급자 중개(보통 2)</div>
        <table class="tsp-rules-table" style="margin-top:8px">
          <thead><tr><th>판정 결과</th><th>구매가</th></tr></thead>
          <tbody>
            <tr><td>2 이하</td><td>기본가 × 300%</td></tr>
            <tr><td>3</td><td>× 200%</td></tr>
            <tr><td>4</td><td>× 175%</td></tr>
            <tr><td>5</td><td>× 150%</td></tr>
            <tr><td>6</td><td>× 125%</td></tr>
            <tr><td>7</td><td>× 110%</td></tr>
            <tr class="tsp-row-good"><td>8</td><td>× 100%</td></tr>
            <tr class="tsp-row-good"><td>9</td><td>× 90%</td></tr>
            <tr class="tsp-row-good"><td>10</td><td>× 85%</td></tr>
            <tr class="tsp-row-good"><td>11</td><td>× 75%</td></tr>
            <tr class="tsp-row-good"><td>12 이상</td><td>× 60%</td></tr>
          </tbody>
        </table>
      `},
      { title: '투기 무역 — 판매', body: `
        <h3>📈 투기 무역 — 판매</h3>
        <div class="tsp-rules-formula">3D + 중개(또는 중개인+협상+2) + 판매 DM − 구매 DM − 구매자 중개(보통 2)</div>
        <table class="tsp-rules-table" style="margin-top:8px">
          <thead><tr><th>판정 결과</th><th>판매가</th></tr></thead>
          <tbody>
            <tr><td>2 이하</td><td>기본가 × 60%</td></tr>
            <tr><td>3</td><td>× 65%</td></tr>
            <tr><td>4</td><td>× 70%</td></tr>
            <tr><td>5</td><td>× 80%</td></tr>
            <tr><td>6</td><td>× 90%</td></tr>
            <tr><td>7</td><td>× 95%</td></tr>
            <tr class="tsp-row-good"><td>8</td><td>× 100%</td></tr>
            <tr class="tsp-row-good"><td>9</td><td>× 105%</td></tr>
            <tr class="tsp-row-good"><td>10</td><td>× 110%</td></tr>
            <tr class="tsp-row-good"><td>11</td><td>× 125%</td></tr>
            <tr class="tsp-row-good"><td>12</td><td>× 150%</td></tr>
            <tr class="tsp-row-good"><td>13 이상</td><td>× 200%</td></tr>
          </tbody>
        </table>
      `},
      { title: '운영 비용', body: `
        <h3>🚢 운영 비용 (월)</h3>
        <table class="tsp-rules-table">
          <thead><tr><th>항목</th><th>비용</th></tr></thead>
          <tbody>
            <tr><td>대출 상환</td><td>구입가의 1/240</td></tr>
            <tr><td>유지 보수</td><td>구입가의 0.1%</td></tr>
            <tr><td>연료 (정제)</td><td>Cr500/톤</td></tr>
            <tr><td>연료 (미정제)</td><td>Cr100/톤</td></tr>
          </tbody>
        </table>
      `},
    ];
  }

  // ── 캐릭터 메이킹 ────────────────────────────────────────
  _itemsCharMaking() {
    return [
      { title: '전체 흐름', body: `
        <h3>📋 전체 흐름</h3>
        <div class="tsp-flow">
          <div class="tsp-flow-step">
            <div class="tsp-flow-num">1</div>
            <div class="tsp-flow-body">
              <div class="tsp-flow-title">특성치 결정</div>
              <div class="tsp-flow-desc">2D를 6번 굴려 근력·민첩·인내·지능·교육·지위에 자유롭게 배분</div>
            </div>
          </div>
          <div class="tsp-flow-arrow">↓</div>

          <div class="tsp-flow-step">
            <div class="tsp-flow-num">2</div>
            <div class="tsp-flow-body">
              <div class="tsp-flow-title">배경 기능 선택</div>
              <div class="tsp-flow-desc">교육 수정치+3개의 배경 기능을 0레벨로 습득 (교육이 낮으면 0개일 수도)</div>
            </div>
          </div>
          <div class="tsp-flow-arrow">↓</div>

          <div class="tsp-flow-step optional">
            <div class="tsp-flow-num">3</div>
            <div class="tsp-flow-body">
              <div class="tsp-flow-title">경력 전 교육 (선택)</div>
              <div class="tsp-flow-desc">대학교(지능 6+) 또는 사관학교(인내/지능)에 도전. 3주기 이내에만 가능</div>
            </div>
          </div>
          <div class="tsp-flow-arrow">↓</div>

          <div class="tsp-flow-step">
            <div class="tsp-flow-num">4</div>
            <div class="tsp-flow-body">
              <div class="tsp-flow-title">경력 자격 판정</div>
              <div class="tsp-flow-desc">원하는 경력의 자격 굴림. 실패 시 징병되거나 방랑자 경력 시작</div>
            </div>
          </div>
          <div class="tsp-flow-arrow">↓</div>

          <div class="tsp-flow-step loop">
            <div class="tsp-flow-num">5</div>
            <div class="tsp-flow-body">
              <div class="tsp-flow-title">경력 주기 반복 (4년 단위)</div>
              <div class="tsp-flow-desc">
                <ol class="tsp-flow-sublist">
                  <li><b>기초 훈련</b> (첫 경력만): 직무 관련 기능 전부 0레벨 습득</li>
                  <li><b>기능과 훈련</b>: 기능 표 1개 선택 후 1D 굴림 → 기능 향상</li>
                  <li><b>생존 굴림</b>: 실패 시 사고 표 → 경력 강제 종료 가능</li>
                  <li><b>사건 표 굴림</b>: 무작위 사건 발생</li>
                  <li><b>임관 굴림</b> (군 경력만, 선택)</li>
                  <li><b>진급 굴림</b>: 성공 시 직급 상승 + 추가 기능 습득</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="tsp-flow-arrow">↓ (반복 또는 종료)</div>

          <div class="tsp-flow-step">
            <div class="tsp-flow-num">6</div>
            <div class="tsp-flow-body">
              <div class="tsp-flow-title">은퇴 / 머스터아웃</div>
              <div class="tsp-flow-desc">경력 종료 시 소득 굴림(현금/장비) → 최종 장비·자금 획득</div>
            </div>
          </div>
          <div class="tsp-flow-arrow">↓</div>

          <div class="tsp-flow-step">
            <div class="tsp-flow-num">7</div>
            <div class="tsp-flow-body">
              <div class="tsp-flow-title">마무리</div>
              <div class="tsp-flow-desc">이름, 종족, 외형 설정 → 캐릭터 완성!</div>
            </div>
          </div>
        </div>
      `},
      { title: '대학교 / 사관학교', body: `
        <h3>🎓 경력 전 교육 (선택)</h3>
        <p>3주기 이내(보통 캐릭터 메이킹 시작 시)에만 도전 가능. 입학에 실패해도 다음 단계로 진행 가능.</p>
        <table class="tsp-rules-table">
          <thead><tr><th>구분</th><th>자격</th><th>특징</th></tr></thead>
          <tbody>
            <tr>
              <td><b>대학교</b></td>
              <td>지능 6+</td>
              <td>대부분의 주요 거주지에 존재. 졸업 시 미디어(언론인)·시민(기업가)·학자 등 진입에 유리. 입학/졸업 시 배경 기능 또는 추가 기능 획득 가능</td>
            </tr>
            <tr>
              <td><b>사관학교</b></td>
              <td>인내 또는 지능 기반</td>
              <td>지원 전 육군/해병/해군 중 군종을 선택. 졸업 후 첫 경력이 같은 군이면 입대 시 큰 혜택(자동 임관 등). 입학만 해도 일부 혜택</td>
            </tr>
          </tbody>
        </table>
        <p class="tsp-rules-note">같은 대학교/사관학교 출신 캐릭터들은 서로 동문 연줄을 가질 수 있습니다 (파티 내 캐릭터 간 관계 설정에 활용).</p>
      `},
      { title: '경력 자격 굴림', body: `
        <h3>📜 경력 자격 굴림</h3>
        <ul class="tsp-rules-list-ul">
          <li>경력마다 정해진 특성치 판정 (예: "자유 무역상: 민첩 6+ 또는 지능 6+")</li>
          <li><b>실패</b> → 이번 주기엔 그 경력 시작 불가 → 징병 또는 방랑자 경력</li>
          <li>이전에 시작한 경력이 있다면, 경력 1개당 수정치 -1</li>
        </ul>
      `},
      { title: '기능과 훈련', body: `
        <h3>📚 기능과 훈련</h3>
        <ul class="tsp-rules-list-ul">
          <li>경력마다 4~5개의 기능 표 (자기 개발 / 직무 관련 / 직종별 / 장교 전용 / 상급 교육)</li>
          <li>표 1개 선택 → 1D 굴림 → 해당 칸의 기능 습득/향상</li>
          <li><b>기능 최대치</b>: 캐릭터 메이킹 중 레벨 5 초과 불가, 보유 기능 합계 ≤ (지능+교육)×3</li>
        </ul>
      `},
      { title: '생존 굴림 & 사고', body: `
        <h3>💀 생존 굴림 & 사고</h3>
        <ul class="tsp-rules-list-ul">
          <li>모든 경력에는 생존 굴림이 있음</li>
          <li><b>실패</b> → 사고 표 굴림 → 부상/사망/경력 강제 종료 등</li>
          <li>수정 전 결과가 정확히 2 → 무조건 실패</li>
        </ul>
      `},
      { title: '진급', body: `
        <h3>⬆️ 진급</h3>
        <ul class="tsp-rules-list-ul">
          <li>진급 성공 → 직급 +1, 기능 표 추가 굴림, 직급 혜택 획득</li>
          <li>진급 결과 ≤ 그동안 수행한 주기 수 → 이 경력 더 이상 계속 불가</li>
          <li>수정 전 결과 12 → 무조건 현재 경력 계속</li>
        </ul>
      `},
      { title: '소득 (머스터아웃)', body: `
        <h3>💰 소득 (머스터아웃)</h3>
        <ul class="tsp-rules-list-ul">
          <li>경력 종료 시 소득 굴림 1회 (정상 종료 시)</li>
          <li>직급 1~2 → 추가 1회, 직급 3~4 → 추가 2회, 직급 5~6 → 추가 3회 + 모든 굴림 +1</li>
          <li><b>현금 표</b> 굴림은 평생 최대 3회까지만 가능</li>
          <li>사고로 종료 시 → 그 주기 소득 굴림 없음</li>
        </ul>
      `},
    ];
  }
}
