// tables-data-careers.mjs — 캐릭터메이킹: 경력별 표
// 그룹 구조: { type:'group', title:'경력명', items:[{title, body}, ...] }

export const CAREER_TABLES = [
  {
    type: 'group',
    title: '육군',
    items: [
      { title: '개요·자격·진급', body: `
      <h3>육군</h3>
      <p>행성 표면 전투를 위해 무장한 병력의 일원. 행성 표면에서 임무·전투·작전을 수행합니다. 대가를 받는 용병일 수도 있습니다.</p>
      <table class="tsp-rules-table">
        <tbody>
          <tr><td><b>자격 굴림</b></td><td>인내 5+ <span class="tsp-rules-note">(이전 경력 1개당 -1, 30세 이상 -2)</span></td></tr>
          <tr><td><b>임관 굴림</b></td><td>지위 8+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 생존·진급 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직종</th><th>생존 굴림</th><th>진급 굴림</th></tr></thead>
        <tbody>
          <tr><td>지원대</td><td>인내 5+</td><td>교육 7+</td></tr>
          <tr><td>보병대</td><td>근력 6+</td><td>교육 6+</td></tr>
          <tr><td>기갑 부대</td><td>민첩 7+</td><td>지능 5+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>지원대</b>: 공병·취사병 등 후방에서 복무하는 병과</li>
        <li><b>보병대</b>: 지상의 보병</li>
        <li><b>기갑 부대</b>: 무장 헬기나 전차의 승무원</li>
      </ul>
    ` },
      { title: '기능과 훈련 표', body: `
      <h3>육군 — 기능과 훈련 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>자기 개발</th><th>직무 관련</th><th>상급 교육 (교육 8+)</th><th>장교 전용</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>근력 +1</td><td>운전 또는 진공복</td><td>전술(지상전)</td><td>전술(지상전)</td></tr>
          <tr><td>2</td><td>민첩 +1</td><td>운동</td><td>전자기기</td><td>지도력</td></tr>
          <tr><td>3</td><td>인내 +1</td><td>사격</td><td>항법</td><td>변호</td></tr>
          <tr><td>4</td><td>도박</td><td>경계</td><td>폭발물</td><td>외교</td></tr>
          <tr><td>5</td><td>의료</td><td>근접전</td><td>기계공학</td><td>전자기기</td></tr>
          <tr><td>6</td><td>근접전</td><td>중화기</td><td>생존</td><td>행정</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>지원대</th><th>보병대</th><th>기갑 부대</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>정비</td><td>사격</td><td>정비</td></tr>
          <tr><td>2</td><td>운전 또는 비행</td><td>근접전</td><td>운전</td></tr>
          <tr><td>3</td><td>산업</td><td>중화기</td><td>비행</td></tr>
          <tr><td>4</td><td>폭발물</td><td>은신</td><td>경계</td></tr>
          <tr><td>5</td><td>전자기기(통신)</td><td>운동</td><td>중화기(탑승형)</td></tr>
          <tr><td>6</td><td>의료</td><td>경계</td><td>전자기기(감지기)</td></tr>
        </tbody>
      </table>
    ` },
      { title: '직급과 혜택', body: `
      <h3>육군 — 직급과 혜택</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>계급(사병)</th><th>호칭</th><th>기능 및 혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>이등병</td><td>사격 1</td></tr>
          <tr><td>1</td><td>일병</td><td>경계 1</td></tr>
          <tr><td>2</td><td>상병</td><td>-</td></tr>
          <tr><td>3</td><td>병장</td><td>지도력 1</td></tr>
          <tr><td>4</td><td>하사</td><td>-</td></tr>
          <tr><td>5</td><td>중사</td><td>-</td></tr>
          <tr><td>6</td><td>원사</td><td>-</td></tr>
        </tbody>
      </table>
      <table class="tsp-rules-table" style="margin-top:8px">
        <thead><tr><th>계급(장교)</th><th>호칭</th><th>기능 및 혜택</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>소위/중위</td><td>지도력 1</td></tr>
          <tr><td>2</td><td>대위</td><td>-</td></tr>
          <tr><td>3</td><td>소령</td><td>전술(지상전) 1</td></tr>
          <tr><td>4</td><td>중령</td><td>-</td></tr>
          <tr><td>5</td><td>대령</td><td>-</td></tr>
          <tr><td>6</td><td>장군</td><td>지위 10 또는 지위 +1 (높은 쪽)</td></tr>
        </tbody>
      </table>
    ` },
      { title: '사건 표 (2D)', body: `
      <h3>육군 — 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>2</td><td>큰일이 났습니다! 사고 표 굴림 (경력을 그만둘 필요는 없음)</td></tr>
          <tr><td>3</td><td>가혹하거나 미개척된 환경에 배치됨. 진공복 1, 기계공학 1, 동물(친화력 또는 훈련) 1, 경계 1 중 하나 획득</td></tr>
          <tr><td>4</td><td>전쟁으로 엉망이 된 도시 행성에 배치됨. 은신 1, 세상물정 1, 설득 1, 경계 1 중 하나 획득</td></tr>
          <tr><td>5</td><td>부대 내 특수 임무를 맡음. 아무 소득 굴림에 +1 (1회)</td></tr>
          <tr><td>6</td><td>치열한 육상 전투. 교육 8+ 성공 시 부상 면함, 사격 또는 지도력 1레벨 향상</td></tr>
          <tr><td>7</td><td>생활 사건 발생. 생활 사건 표 굴림</td></tr>
          <tr><td>8</td><td>전문 분야 고급 훈련. 교육 8+ 성공 시 보유 기능 1개 1레벨 향상</td></tr>
          <tr><td>9</td><td>수적 열세 속 포위당했으나 버팀. 다음 진급 굴림 +2</td></tr>
          <tr><td>10</td><td>평화 유지군 배치. 행정 1, 수사 1, 기만 1, 경계 1 중 하나 획득</td></tr>
          <tr><td>11</td><td>상관이 경력에 관심을 가짐. 전술(지상전) 1 획득 또는 다음 진급 굴림 +4</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>전투에서 영웅적 활약. 자동 진급 또는 임관</td></tr>
        </tbody>
      </table>
    ` },
      { title: '사고 표 (1D)', body: `
      <h3>육군 — 사고 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>사고</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>작전 중 심한 부상. 부상 표에서 2가 나온 것으로 간주 (또는 부상 표 2회 굴려 낮은 결과 선택)</td></tr>
          <tr class="tsp-row-bad"><td>2</td><td>소속 부대가 몰살당함. 상관 책임으로 강제 제대. 상관을 적수로 획득</td></tr>
          <tr><td>3</td><td>험지(밀림/늪지/사막/빙원/도시)에서 반군과 교전 중 제대. 경계 또는 생존 1레벨 향상, 반군을 적수로 획득</td></tr>
          <tr><td>4</td><td>상관의 위법 행위(무기 밀수 등) 발견. 동참하여 일당을 조력자로 얻고 불명예 제대, 또는 헌병대 협조 시 이번 소득 굴림 가능</td></tr>
          <tr><td>5</td><td>영내 괴롭힘/시비. 가해자 또는 상대측을 경쟁자로 획득하고 제대</td></tr>
          <tr><td>6</td><td>부상을 입음. 부상 표 굴림</td></tr>
        </tbody>
      </table>
    ` },
      { title: '머스터아웃 (현금/물품)', body: `
      <h3>육군 — 퇴직 소득 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현금</th><th>물품</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cr2,000</td><td>전투용 이식물</td></tr>
          <tr><td>2</td><td>Cr5,000</td><td>지능 +1</td></tr>
          <tr><td>3</td><td>Cr10,000</td><td>교육 +1</td></tr>
          <tr><td>4</td><td>Cr10,000</td><td>무기</td></tr>
          <tr><td>5</td><td>Cr10,000</td><td>장갑복</td></tr>
          <tr><td>6</td><td>Cr20,000</td><td>인내 +1 또는 전투용 이식물</td></tr>
          <tr><td>7</td><td>Cr30,000</td><td>지위 +1</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표(좌측)는 평생 최대 3회. 물품 표(우측)는 직급에 따라 추가 굴림 (직급별 추가 소득 굴림 표 참조).</p>
    ` },
    ]
  },
];
// ══════════════════════════════════════════════════════
// 정찰 직군
// ══════════════════════════════════════════════════════
CAREER_TABLES.push({
  type: 'group',
  title: '정찰 직군',
  items: [
    { title: '개요·자격·진급', body: `
      <h3>정찰 직군</h3>
      <p>각종 탐사 서비스를 제공하는 직군. 미지의 지역을 탐험하고, 새로 발견된 지역을 조사·지도화하며, 우주 곳곳으로 정보와 서신을 전달하는 연락선을 관리합니다.</p>
      <table class="tsp-rules-table">
        <tbody>
          <tr><td><b>자격 굴림</b></td><td>지능 5+ <span class="tsp-rules-note">(이전 경력 1개당 -1)</span></td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 생존·진급 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직종</th><th>생존 굴림</th><th>진급 굴림</th></tr></thead>
        <tbody>
          <tr><td>운반원</td><td>인내 5+</td><td>교육 9+</td></tr>
          <tr><td>조사원</td><td>인내 6+</td><td>지능 8+</td></tr>
          <tr><td>탐험가</td><td>인내 7+</td><td>교육 7+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>운반원</b>: 우주 곳곳으로 서신과 귀중한 화물을 운송</li>
        <li><b>조사원</b>: 변방 세계를 찾아가 그 가치를 평가</li>
        <li><b>탐험가</b>: 지도상에 없는 곳을 다니며 미지의 세계와 개척되지 않은 우주를 탐험</li>
      </ul>
    `},
    { title: '기능과 훈련 표', body: `
      <h3>정찰 직군 — 기능과 훈련 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>자기 개발</th><th>직무 관련</th><th>상급 교육 (교육 8+)</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>근력 +1</td><td>우주 비행(소형선 또는 우주선)</td><td>의료</td></tr>
          <tr><td>2</td><td>민첩 +1</td><td>생존</td><td>항법</td></tr>
          <tr><td>3</td><td>인내 +1</td><td>정비</td><td>항해</td></tr>
          <tr><td>4</td><td>지능 +1</td><td>우주 항법</td><td>폭발물</td></tr>
          <tr><td>5</td><td>교육 +1</td><td>진공복</td><td>학문</td></tr>
          <tr><td>6</td><td>다재다능</td><td>사격</td><td>다재다능</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>운반원</th><th>조사원</th><th>탐험가</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>전자기기</td><td>전자기기</td><td>전자기기</td></tr>
          <tr><td>2</td><td>비행</td><td>설득</td><td>우주 비행</td></tr>
          <tr><td>3</td><td>우주 비행(우주선)</td><td>우주 비행</td><td>기계공학</td></tr>
          <tr><td>4</td><td>기계공학</td><td>항법</td><td>학문</td></tr>
          <tr><td>5</td><td>운동</td><td>외교</td><td>은신</td></tr>
          <tr><td>6</td><td>우주 항법</td><td>세상물정</td><td>경계</td></tr>
        </tbody>
      </table>
    `},
    { title: '직급과 혜택', body: `
      <h3>정찰 직군 — 직급과 혜택</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직급</th><th>직급명</th><th>기능 및 특전</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>-</td><td>-</td></tr>
          <tr><td>1</td><td>정찰대원</td><td>진공복 1</td></tr>
          <tr><td>2</td><td>-</td><td>-</td></tr>
          <tr><td>3</td><td>상급 정찰대원</td><td>우주 비행 1</td></tr>
          <tr><td>4</td><td>-</td><td>-</td></tr>
          <tr><td>5</td><td>-</td><td>-</td></tr>
          <tr><td>6</td><td>-</td><td>-</td></tr>
        </tbody>
      </table>
    `},
    { title: '사건 표 (2D)', body: `
      <h3>정찰 직군 — 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>2</td><td>큰일이 났습니다! 사고 표 굴림 (경력을 그만둘 필요는 없음)</td></tr>
          <tr><td>3</td><td>적대적인 우주선이 정찰선을 공격. 우주 비행 8+(도주) 또는 설득 10+(교섭). 실패 시 정찰선 파괴 → 이번 주기 후 정찰 직군 계속 불가. 성공 시 전자기기(감지기) 1 획득. 성공 여부 무관 적수 획득</td></tr>
          <tr><td>4</td><td>외계 행성을 조사. 동물(탑승 또는 훈련) 1, 생존 1, 경계 1, 학문 1 중 하나 획득</td></tr>
          <tr><td>5</td><td>정찰 직군의 모범을 보임. 아무 소득 굴림에 +1 (1회)</td></tr>
          <tr><td>6</td><td>몇 년간 정찰선을 타고 점프하며 보냄. 우주 항법 1, 전자기기 1, 항법 1, 우주 비행(소형선) 1, 정비 1 중 하나 획득</td></tr>
          <tr><td>7</td><td>생활 사건 발생. 생활 사건 표 굴림</td></tr>
          <tr><td>8</td><td>외계 종족에 대한 추가 정보 수집 기회. 전자기기 8+ 또는 기만 8+. 성공 시 제국 내 협력자 획득 + 다음 진급 굴림 +2. 실패 시 사고 표 굴림 (경력 계속 가능)</td></tr>
          <tr><td>9</td><td>재난 생존자 구조 현장에 최초 도착. 의료 8+ 또는 기계공학 8+. 성공 시 연줄 1명 + 다음 진급 굴림 +2. 실패 시 적수 1명 획득</td></tr>
          <tr><td>10</td><td>개척된 우주 변두리에서 오랜 시간. 생존 8+ 또는 우주 비행 8+. 성공 시 외계 종족 연줄 1명 + 아무 기능 1레벨 향상. 실패 시 사고 표 굴림 (경력 계속 가능)</td></tr>
          <tr><td>11</td><td>제국의 중요한 서신 전달 임무. 외교 1레벨 향상 또는 다음 진급 굴림 +4</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>제국에 가치 있는 세계/물건/정보 발견. 자동 진급</td></tr>
        </tbody>
      </table>
    `},
    { title: '사고 표 (1D)', body: `
      <h3>정찰 직군 — 사고 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>사고</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>심한 부상. 부상 표에서 2가 나온 것으로 간주 (또는 부상 표 2회 굴려 낮은 결과 선택)</td></tr>
          <tr class="tsp-row-bad"><td>2</td><td>정찰 활동 중 정신적 손상. 지능 또는 지위 1 감소</td></tr>
          <tr><td>3</td><td>우주선 고장으로 히치하이킹만으로 정찰 기지 귀환. 연줄 1D명 + 적수 D3명 획득</td></tr>
          <tr><td>4</td><td>제국과 변방 세계/소수 종족 간 갈등을 의도치 않게 야기. 경쟁자 1명 + 외교 1 획득</td></tr>
          <tr><td>5</td><td>무슨 일이 있었는지 알 수 없음. 우주선이 개척 우주 끝에서 표류 중 발견됨</td></tr>
          <tr><td>6</td><td>부상을 입음. 부상 표 굴림</td></tr>
        </tbody>
      </table>
    `},
    { title: '머스터아웃 (현금/물품)', body: `
      <h3>정찰 직군 — 퇴직 소득 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현금</th><th>물품</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cr20,000</td><td>함선 지분</td></tr>
          <tr><td>2</td><td>Cr20,000</td><td>지능 +1</td></tr>
          <tr><td>3</td><td>Cr30,000</td><td>교육 +1</td></tr>
          <tr><td>4</td><td>Cr30,000</td><td>무기</td></tr>
          <tr><td>5</td><td>Cr50,000</td><td>무기</td></tr>
          <tr><td>6</td><td>Cr50,000</td><td>정찰선</td></tr>
          <tr><td>7</td><td>Cr50,000</td><td>정찰선</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표(좌측)는 평생 최대 3회. 정찰선을 2회 획득하면 함선 1대를 완전히 소유 (대출 없음).</p>
    `},
  ]
});

// ══════════════════════════════════════════════════════
// 학자
// ══════════════════════════════════════════════════════
CAREER_TABLES.push({
  type: 'group',
  title: '학자',
  items: [
    { title: '개요·자격·진급', body: `
      <h3>학자</h3>
      <p>기술적으로 또는 학문적으로 과학을 연구하고 물질·환경·현상 등을 조사하거나, 의료 행위에 종사하는 사람들입니다.</p>
      <table class="tsp-rules-table">
        <tbody>
          <tr><td><b>자격 굴림</b></td><td>지능 6+ <span class="tsp-rules-note">(이전 경력 1개당 -1)</span></td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 생존·진급 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직종</th><th>생존 굴림</th><th>진급 굴림</th></tr></thead>
        <tbody>
          <tr><td>현장 연구원</td><td>인내 6+</td><td>지능 6+</td></tr>
          <tr><td>과학자</td><td>교육 4+</td><td>지능 8+</td></tr>
          <tr><td>의료인</td><td>교육 4+</td><td>교육 8+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>현장 연구원</b>: 황무지를 연구실만큼 편안하게 느끼는, 탐험가에 가까운 연구원</li>
        <li><b>과학자</b>: 기업·연구기관 소속 연구자, 또는 궤도상 연구소의 과학자</li>
        <li><b>의료인</b>: 의사, 치료사, 의학 연구원</li>
      </ul>
    `},
    { title: '기능과 훈련 표', body: `
      <h3>학자 — 기능과 훈련 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>자기 개발</th><th>직무 관련</th><th>상급 교육 (교육 10+)</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>지능 +1</td><td>운전</td><td>예술</td></tr>
          <tr><td>2</td><td>교육 +1</td><td>전자기기</td><td>변호</td></tr>
          <tr><td>3</td><td>지위 +1</td><td>외교</td><td>전자기기</td></tr>
          <tr><td>4</td><td>민첩 +1</td><td>의료</td><td>언어</td></tr>
          <tr><td>5</td><td>인내 +1</td><td>수사</td><td>기계공학</td></tr>
          <tr><td>6</td><td>언어</td><td>학문</td><td>학문</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현장 연구원</th><th>과학자</th><th>의료인</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>전자기기</td><td>행정</td><td>의료</td></tr>
          <tr><td>2</td><td>진공복</td><td>기계공학</td><td>전자기기</td></tr>
          <tr><td>3</td><td>항법</td><td>학문</td><td>수사</td></tr>
          <tr><td>4</td><td>생존</td><td>학문</td><td>의료</td></tr>
          <tr><td>5</td><td>수사</td><td>전자기기</td><td>설득</td></tr>
          <tr><td>6</td><td>학문</td><td>학문</td><td>학문</td></tr>
        </tbody>
      </table>
    `},
    { title: '직급과 혜택', body: `
      <h3>학자 — 직급과 혜택</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직급</th><th>현장 연구원/과학자</th><th>의료인</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>-</td><td>-</td></tr>
          <tr><td>1</td><td>학문 1</td><td>의료 1</td></tr>
          <tr><td>2</td><td>전자기기(컴퓨터) 1</td><td>-</td></tr>
          <tr><td>3</td><td>수사 1</td><td>학문 1</td></tr>
          <tr><td>4</td><td>-</td><td>-</td></tr>
          <tr><td>5</td><td>학문 2</td><td>학문 2</td></tr>
          <tr><td>6</td><td>-</td><td>-</td></tr>
        </tbody>
      </table>
    `},
    { title: '사건 표 (2D)', body: `
      <h3>학자 — 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>2</td><td>큰일이 났습니다! 사고 표 굴림 (경력을 그만둘 필요는 없음)</td></tr>
          <tr><td>3</td><td>양심에 어긋나는 연구 요청. 수락 시 소득 굴림 +1회 + 학문 전문분야 2개 1레벨 향상, 단 적수 D3명 획득</td></tr>
          <tr><td>4</td><td>비밀 프로젝트에 선발. 의료 1, 학문 1, 기계공학 1, 전자기기 1, 수사 1 중 하나 획득</td></tr>
          <tr><td>5</td><td>연구 성과로 권위 있는 상 수상. 아무 소득 굴림에 +1 (1회)</td></tr>
          <tr><td>6</td><td>전문 분야 고급 훈련. 교육 8+ 성공 시 원하는 기능 1개 1레벨로 습득</td></tr>
          <tr><td>7</td><td>생활 사건 발생. 생활 사건 표 굴림</td></tr>
          <tr><td>8</td><td>떳떳하지 못한 방식의 연구 진전 기회. 거부 시 무효과. 수락 시 기만 8+ 또는 행정 8+ — 성공: 소득 굴림 +2(1회)+기능 1레벨 향상, 적수 1명. 실패: 적수 1명 + 소득 굴림 1회 상실</td></tr>
          <tr><td>9</td><td>분야의 획기적 발견. 다음 진급 굴림 +2</td></tr>
          <tr><td>10</td><td>법적/제도적 곤경. 행정 1, 변호 1, 설득 1, 외교 1 중 하나 획득</td></tr>
          <tr><td>11</td><td>괴팍하지만 천재적인 스승을 만남. 스승은 조력자, 학문 1레벨 향상 또는 다음 진급 굴림 +4</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>중대한 돌파구. 자동 진급</td></tr>
        </tbody>
      </table>
    `},
    { title: '사고 표 (1D)', body: `
      <h3>학자 — 사고 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>사고</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>심한 부상. 부상 표에서 2가 나온 것으로 간주 (또는 부상 표 2회 굴려 낮은 결과 선택)</td></tr>
          <tr class="tsp-row-bad"><td>2</td><td>큰 사고로 여러 사람 부상, 원인 제공자로 지목되어 제대. 부상 표 2회 굴려 높은 결과 적용 + 경쟁자 1명 획득</td></tr>
          <tr><td>3</td><td>정부가 정치/종교적 이유로 연구에 간섭. 공개 계속: 학문 1레벨 향상 + 적수 획득. 비밀 계속: 학문 1레벨 향상 + 지위 -2 (경력 계속 가능)</td></tr>
          <tr><td>4</td><td>탐사/항해 중 사고로 황무지에 고립. 생존 1 또는 운동(민첩/인내) 1 획득. 귀환 시 일자리 상실</td></tr>
          <tr><td>5</td><td>정체불명 세력이 일터 파괴. 포기 시 경력 종료 + 이번 소득 굴림 유지. 재시작 시 모든 소득 굴림 상실 (경력 계속 가능)</td></tr>
          <tr><td>6</td><td>경쟁 연구자에게 오명/표절 당함. 경쟁자 1명 획득 (경력 계속 가능)</td></tr>
        </tbody>
      </table>
    `},
    { title: '머스터아웃 (현금/물품)', body: `
      <h3>학자 — 퇴직 소득 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현금</th><th>물품</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cr5,000</td><td>지능 +1</td></tr>
          <tr><td>2</td><td>Cr10,000</td><td>인내 +1</td></tr>
          <tr><td>3</td><td>Cr20,000</td><td>함선 지분 ×2</td></tr>
          <tr><td>4</td><td>Cr30,000</td><td>지위 +1</td></tr>
          <tr><td>5</td><td>Cr40,000</td><td>과학 장비</td></tr>
          <tr><td>6</td><td>Cr60,000</td><td>연구선</td></tr>
          <tr><td>7</td><td>Cr100,000</td><td>연구선</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표(좌측)는 평생 최대 3회.</p>
    `},
  ]
});

// ══════════════════════════════════════════════════════
// 해군
// ══════════════════════════════════════════════════════
CAREER_TABLES.push({
  type: 'group',
  title: '해군',
  items: [
    { title: '개요·자격·진급', body: `
      <h3>해군</h3>
      <p>별들 사이를 순찰하는 우주 해군의 일원. 외세와 성간 무역 업계의 무법자들로부터 사회를 보호합니다.</p>
      <table class="tsp-rules-table">
        <tbody>
          <tr><td><b>자격 굴림</b></td><td>지능 6+ <span class="tsp-rules-note">(이전 경력 1개당 -1, 34세 이상 -2)</span></td></tr>
          <tr><td><b>임관 굴림</b></td><td>지위 8+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 생존·진급 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직종</th><th>생존 굴림</th><th>진급 굴림</th></tr></thead>
        <tbody>
          <tr><td>전열 장교/선원</td><td>지능 5+</td><td>교육 7+</td></tr>
          <tr><td>기술병/포병</td><td>지능 6+</td><td>교육 6+</td></tr>
          <tr><td>비행사</td><td>민첩 7+</td><td>교육 5+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>전열 장교/선원</b>: 전열함에 승선하는 일반 선원 또는 장교</li>
        <li><b>기술병/포병</b>: 우주선 내 특수 기술직</li>
        <li><b>비행사</b>: 경수송선·전투기 등 가벼운 기체 조종</li>
      </ul>
    `},
    { title: '기능과 훈련 표', body: `
      <h3>해군 — 기능과 훈련 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>자기 개발</th><th>직무 관련</th><th>상급 교육 (교육 8+)</th><th>장교 전용</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>근력 +1</td><td>우주 비행</td><td>전자기기</td><td>지도력</td></tr>
          <tr><td>2</td><td>민첩 +1</td><td>진공복</td><td>우주 항법</td><td>전자기기</td></tr>
          <tr><td>3</td><td>인내 +1</td><td>운동</td><td>기계공학</td><td>우주 비행</td></tr>
          <tr><td>4</td><td>지능 +1</td><td>포격</td><td>운전</td><td>근접전(도검)</td></tr>
          <tr><td>5</td><td>교육 +1</td><td>정비</td><td>항법</td><td>행정</td></tr>
          <tr><td>6</td><td>지위 +1</td><td>사격</td><td>행정</td><td>전술(우주전)</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>전열 장교/선원</th><th>기술병/포병</th><th>비행사</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>전자기기</td><td>기계공학</td><td>우주 비행</td></tr>
          <tr><td>2</td><td>정비</td><td>정비</td><td>비행</td></tr>
          <tr><td>3</td><td>사격</td><td>전자기기</td><td>포격</td></tr>
          <tr><td>4</td><td>비행</td><td>기계공학</td><td>우주 비행(소형선)</td></tr>
          <tr><td>5</td><td>근접전</td><td>포격</td><td>우주 항법</td></tr>
          <tr><td>6</td><td>진공복</td><td>비행</td><td>전자기기</td></tr>
        </tbody>
      </table>
    `},
    { title: '직급과 혜택', body: `
      <h3>해군 — 직급과 혜택</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>계급(사병)</th><th>호칭</th><th>기능 및 혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>선원</td><td>-</td></tr>
          <tr><td>1</td><td>이등병</td><td>정비 1</td></tr>
          <tr><td>2</td><td>상병</td><td>진공복 1</td></tr>
          <tr><td>3</td><td>병장</td><td>-</td></tr>
          <tr><td>4</td><td>하사</td><td>인내 +1</td></tr>
          <tr><td>5</td><td>중사</td><td>-</td></tr>
          <tr><td>6</td><td>원사</td><td>-</td></tr>
        </tbody>
      </table>
      <table class="tsp-rules-table" style="margin-top:8px">
        <thead><tr><th>계급(장교)</th><th>호칭</th><th>기능 및 혜택</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>소위</td><td>근접전(도검) 1</td></tr>
          <tr><td>2</td><td>중위</td><td>지도력 1</td></tr>
          <tr><td>3</td><td>대위</td><td>-</td></tr>
          <tr><td>4</td><td>중령</td><td>전술 1</td></tr>
          <tr><td>5</td><td>대령</td><td>지위 10 또는 지위 +1 (높은 쪽)</td></tr>
          <tr><td>6</td><td>대장</td><td>지위 12 또는 지위 +1 (높은 쪽)</td></tr>
        </tbody>
      </table>
    `},
    { title: '사건 표 (2D)', body: `
      <h3>해군 — 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>2</td><td>큰일이 났습니다! 사고 표 굴림 (경력을 그만둘 필요는 없음)</td></tr>
          <tr><td>3</td><td>도박 무리에 합류. 도박 1 또는 기만 1 획득. 도박 8+ 시도 가능 — 성공 시 소득 굴림 +1회, 실패 시 -1회</td></tr>
          <tr><td>4</td><td>특수 임무/보직 배치. 아무 소득 굴림에 +1</td></tr>
          <tr><td>5</td><td>전문 분야 고급 훈련. 교육 8+ 성공 시 보유 기능 1개 1레벨 향상</td></tr>
          <tr><td>6</td><td>중요한 교전. 전자기기 1, 기계공학 1, 포격 1, 우주 비행 1 중 하나 획득</td></tr>
          <tr><td>7</td><td>생활 사건 발생. 생활 사건 표 굴림</td></tr>
          <tr><td>8</td><td>외교 임무 수행. 경계 1, 외교 1, 접객 1, 연줄 1명 중 하나 획득</td></tr>
          <tr><td>9</td><td>선상 범죄(반란/파괴공작/밀수/음모) 저지. 적수 1명 획득 + 다음 진급 굴림 +2</td></tr>
          <tr><td>10</td><td>직권 남용으로 이익 취할 기회. 수락: 이번 소득 굴림 +1회. 거부: 다음 진급 굴림 +2</td></tr>
          <tr><td>11</td><td>상관이 경력에 관심. 전술(우주전) 1 획득 또는 다음 진급 굴림 +4</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>영웅적 활약으로 함선을 구함. 자동 진급 또는 임관</td></tr>
        </tbody>
      </table>
    `},
    { title: '사고 표 (1D)', body: `
      <h3>해군 — 사고 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>사고</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>작전 중 심한 부상. 부상 표에서 2가 나온 것으로 간주 (또는 2회 굴려 낮은 결과 선택)</td></tr>
          <tr class="tsp-row-bad"><td>2</td><td>동결 수송 후 소생 문제. 근력/민첩/인내 중 하나 -1 (경력 계속 가능)</td></tr>
          <tr><td>3</td><td>전투 승패가 당신에게 달림. 직종별 기능으로 8+ 굴림 (전열: 전자기기/포격, 기술병: 정비/진공복, 비행사: 우주비행/전술). 실패 시 함선 대파 + 군사재판 후 불명예 제대. 성공 시 명예 제대. 어느 쪽이든 이번 소득 굴림 가능</td></tr>
          <tr><td>4</td><td>승무원 다수 사망 사고의 원인 제공자로 지목. 본인 책임 인정 시 기능과훈련 표 1회 굴림 후 제대. 부인 시 비난한 상관이 적수가 되지만 이번 소득 굴림 가능</td></tr>
          <tr><td>5</td><td>장교/동료와 괴롭힘·언쟁. 그 인물을 경쟁자로 획득, 불명예 제대</td></tr>
          <tr><td>6</td><td>부상을 입음. 부상 표 굴림</td></tr>
        </tbody>
      </table>
    `},
    { title: '머스터아웃 (현금/물품)', body: `
      <h3>해군 — 퇴직 소득 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현금</th><th>물품</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cr1,000</td><td>개인용 탑승물 또는 함선 지분</td></tr>
          <tr><td>2</td><td>Cr5,000</td><td>지능 +1</td></tr>
          <tr><td>3</td><td>Cr5,000</td><td>교육 +1 또는 함선 지분 ×2</td></tr>
          <tr><td>4</td><td>Cr10,000</td><td>무기</td></tr>
          <tr><td>5</td><td>Cr20,000</td><td>여행자 지원 협회 가입</td></tr>
          <tr><td>6</td><td>Cr50,000</td><td>부속정 또는 함선 지분 ×2</td></tr>
          <tr><td>7</td><td>Cr50,000</td><td>지위 +2</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표(좌측)는 평생 최대 3회.</p>
    `},
  ]
});

// ══════════════════════════════════════════════════════
// 해병
// ══════════════════════════════════════════════════════
CAREER_TABLES.push({
  type: 'group',
  title: '해병',
  items: [
    { title: '개요·자격·진급', body: `
      <h3>해병</h3>
      <p>우주선으로 수송되는 무장 병력. 우주에서 해적 행위를 감시하고, 선상 전투를 실행하며, 우주항·해군 기지를 방어하고, 육군 등 지상군을 지원합니다.</p>
      <table class="tsp-rules-table">
        <tbody>
          <tr><td><b>자격 굴림</b></td><td>인내 6+ <span class="tsp-rules-note">(이전 경력 1개당 -1, 30세 이상 -2)</span></td></tr>
          <tr><td><b>임관 굴림</b></td><td>지위 8+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 생존·진급 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직종</th><th>생존 굴림</th><th>진급 굴림</th></tr></thead>
        <tbody>
          <tr><td>지원대</td><td>인내 5+</td><td>교육 7+</td></tr>
          <tr><td>우주 해병</td><td>인내 6+</td><td>교육 6+</td></tr>
          <tr><td>육전대</td><td>인내 7+</td><td>교육 5+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>지원대</b>: 해병 병참단·공병대·야전의무반 등에 소속</li>
        <li><b>우주 해병</b>: 강제 승선해서 선상 교전을 수행하고 적 우주선을 탈취하는 훈련을 받음</li>
        <li><b>육전대</b>: 궤도상 우주선에서 내려와 행성을 점령</li>
      </ul>
    `},
    { title: '기능과 훈련 표', body: `
      <h3>해병 — 기능과 훈련 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>자기 개발</th><th>직무 관련</th><th>상급 교육 (교육 8+)</th><th>장교 전용</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>근력 +1</td><td>운동</td><td>의료</td><td>전자기기</td></tr>
          <tr><td>2</td><td>민첩 +1</td><td>진공복</td><td>생존</td><td>전술</td></tr>
          <tr><td>3</td><td>인내 +1</td><td>전술</td><td>폭발물</td><td>행정</td></tr>
          <tr><td>4</td><td>도박</td><td>중화기</td><td>기계공학</td><td>변호</td></tr>
          <tr><td>5</td><td>근접전(비무장)</td><td>사격</td><td>우주 비행</td><td>진공복</td></tr>
          <tr><td>6</td><td>근접전(도검)</td><td>은신</td><td>항법</td><td>지도력</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>지원대</th><th>우주 해병</th><th>육전대</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>전자기기</td><td>진공복</td><td>진공복</td></tr>
          <tr><td>2</td><td>정비</td><td>운동</td><td>중화기</td></tr>
          <tr><td>3</td><td>운전 또는 비행</td><td>포격</td><td>경계</td></tr>
          <tr><td>4</td><td>의료</td><td>근접전(도검)</td><td>근접전(도검)</td></tr>
          <tr><td>5</td><td>중화기</td><td>전자기기</td><td>전술(지상전)</td></tr>
          <tr><td>6</td><td>사격</td><td>사격</td><td>사격</td></tr>
        </tbody>
      </table>
    `},
    { title: '직급과 혜택', body: `
      <h3>해병 — 직급과 혜택</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>계급(사병)</th><th>호칭</th><th>기능 및 혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>해병</td><td>사격(아무 전문 분야) 1 또는 근접전(도검) 1</td></tr>
          <tr><td>1</td><td>일병</td><td>사격(아무 전문 분야) 1</td></tr>
          <tr><td>2</td><td>상병</td><td>-</td></tr>
          <tr><td>3</td><td>병장</td><td>지도력 1</td></tr>
          <tr><td>4</td><td>하사</td><td>-</td></tr>
          <tr><td>5</td><td>중사</td><td>인내 +1</td></tr>
          <tr><td>6</td><td>원사</td><td>-</td></tr>
        </tbody>
      </table>
      <table class="tsp-rules-table" style="margin-top:8px">
        <thead><tr><th>계급(장교)</th><th>호칭</th><th>기능 및 혜택</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>소위/중위</td><td>지도력 1</td></tr>
          <tr><td>2</td><td>대위</td><td>-</td></tr>
          <tr><td>3</td><td>소령</td><td>전술 1</td></tr>
          <tr><td>4</td><td>중령</td><td>-</td></tr>
          <tr><td>5</td><td>대령</td><td>지위 10 또는 지위 +1 (높은 쪽)</td></tr>
          <tr><td>6</td><td>준장</td><td>-</td></tr>
        </tbody>
      </table>
    `},
    { title: '사건 표 (2D)', body: `
      <h3>해병 — 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>2</td><td>큰일이 났습니다! 사고 표 굴림 (경력을 그만둘 필요는 없음)</td></tr>
          <tr><td>3</td><td>적진에 갇혀 홀로 살아남음. 생존 1, 은신 1, 기만 1, 세상물정 1 중 하나 획득</td></tr>
          <tr><td>4</td><td>우주 정거장 보안 요원으로 배치. 진공복 또는 운동(민첩) 1레벨 향상</td></tr>
          <tr><td>5</td><td>전문 분야 고급 훈련. 교육 8+ 성공 시 아무 기능 1개 1레벨로 획득</td></tr>
          <tr><td>6</td><td>적 요새 공격 작전 투입. 근접전 8+ 또는 사격 8+. 성공: 전술(지상전) 또는 지도력 획득. 실패: 부상으로 신체 특성치 1 감소</td></tr>
          <tr><td>7</td><td>생활 사건 발생. 생활 사건 표 굴림</td></tr>
          <tr><td>8</td><td>행성 공격·점거 작전 최전선 투입. 경계 1, 사격 1, 지도력 1, 전자기기(통신) 1 중 하나 획득</td></tr>
          <tr><td>9</td><td>상관의 실책으로 작전 실패하나 생존. 보고 시 다음 진급 +2 + 상관이 적수. 덮어주면 상관이 조력자</td></tr>
          <tr><td>10</td><td>비밀 작전 투입. 다음 진급 굴림 +2</td></tr>
          <tr><td>11</td><td>상관이 경력에 관심. 전술 1 획득 또는 다음 진급 굴림 +4</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>영웅적 활약. 자동 진급 또는 임관</td></tr>
        </tbody>
      </table>
    `},
    { title: '사고 표 (1D)', body: `
      <h3>해병 — 사고 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>사고</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>작전 중 심한 부상. 부상 표에서 2가 나온 것으로 간주 (또는 2회 굴려 낮은 결과 선택)</td></tr>
          <tr class="tsp-row-bad"><td>2</td><td>임무 실패로 포로로 붙잡혀 학대당함. 부상 입고 조기 제대. 간수가 적수, 근력·민첩 각 -1</td></tr>
          <tr><td>3</td><td>임무 실패로 적진 고립. 은신 또는 생존 1레벨 향상하지만 불명예 제대</td></tr>
          <tr><td>4</td><td>양심에 어긋나는 첩보 임무 명령. 거부 시 불명예 제대. 수락 시 경력 계속하나 유일한 생존자가 적수</td></tr>
          <tr><td>5</td><td>장교/동료와 괴롭힘·언쟁. 경쟁자 획득 + 불명예 제대</td></tr>
          <tr><td>6</td><td>부상을 입음. 부상 표 굴림</td></tr>
        </tbody>
      </table>
    `},
    { title: '머스터아웃 (현금/물품)', body: `
      <h3>해병 — 퇴직 소득 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현금</th><th>물품</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cr2,000</td><td>장갑복</td></tr>
          <tr><td>2</td><td>Cr5,000</td><td>지능 +1</td></tr>
          <tr><td>3</td><td>Cr5,000</td><td>교육 +1</td></tr>
          <tr><td>4</td><td>Cr10,000</td><td>무기</td></tr>
          <tr><td>5</td><td>Cr20,000</td><td>여행자 지원 협회 가입</td></tr>
          <tr><td>6</td><td>Cr30,000</td><td>장갑복 또는 인내 +1</td></tr>
          <tr><td>7</td><td>Cr40,000</td><td>지위 +2</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표(좌측)는 평생 최대 3회.</p>
    `},
  ]
});

// ══════════════════════════════════════════════════════
// 무법자
// ══════════════════════════════════════════════════════
CAREER_TABLES.push({
  type: 'group',
  title: '무법자',
  items: [
    { title: '개요·자격·진급', body: `
      <h3>무법자</h3>
      <p>목표를 달성하기 위해 거칠거나 불법적인 방법도 거리낌 없이 사용하는 범죄자 부류입니다.</p>
      <table class="tsp-rules-table">
        <tbody>
          <tr><td><b>자격 굴림</b></td><td>민첩 6+ <span class="tsp-rules-note">(이전 경력 1개당 -1)</span></td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 생존·진급 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직종</th><th>생존 굴림</th><th>진급 굴림</th></tr></thead>
        <tbody>
          <tr><td>도둑</td><td>지능 6+</td><td>민첩 6+</td></tr>
          <tr><td>폭력배</td><td>인내 6+</td><td>근력 6+</td></tr>
          <tr><td>해적</td><td>민첩 6+</td><td>지능 6+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>도둑</b>: 부유한 자의 재산을 훔침</li>
        <li><b>폭력배</b>: 범죄 조직에 속한 깡패·건달·암살자</li>
        <li><b>해적</b>: 우주를 누비는 해적</li>
      </ul>
    `},
    { title: '기능과 훈련 표', body: `
      <h3>무법자 — 기능과 훈련 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>자기 개발</th><th>직무 관련</th><th>상급 교육 (교육 10+)</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>유흥</td><td>기만</td><td>전자기기</td></tr>
          <tr><td>2</td><td>민첩 +1</td><td>경계</td><td>항법</td></tr>
          <tr><td>3</td><td>인내 +1</td><td>운동</td><td>의료</td></tr>
          <tr><td>4</td><td>도박</td><td>사격</td><td>수사</td></tr>
          <tr><td>5</td><td>근접전</td><td>은신</td><td>중개</td></tr>
          <tr><td>6</td><td>사격</td><td>세상물정</td><td>변호</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>도둑</th><th>폭력배</th><th>해적</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>은신</td><td>사격</td><td>우주 비행</td></tr>
          <tr><td>2</td><td>전자기기</td><td>근접전</td><td>우주 항법</td></tr>
          <tr><td>3</td><td>경계</td><td>세상물정</td><td>포격</td></tr>
          <tr><td>4</td><td>세상물정</td><td>설득</td><td>기계공학</td></tr>
          <tr><td>5</td><td>기만</td><td>운동</td><td>진공복</td></tr>
          <tr><td>6</td><td>운동</td><td>운전</td><td>근접전</td></tr>
        </tbody>
      </table>
    `},
    { title: '직급과 혜택', body: `
      <h3>무법자 — 직급과 혜택</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직급</th><th>도둑</th><th>폭력배</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>-</td><td>-</td></tr>
          <tr><td>1</td><td>은신 1</td><td>설득 1</td></tr>
          <tr><td>2</td><td>-</td><td>-</td></tr>
          <tr><td>3</td><td>세상물정 1</td><td>사격 1 또는 근접전 1</td></tr>
          <tr><td>4</td><td>-</td><td>-</td></tr>
          <tr><td>5</td><td>경계 1</td><td>세상물정 1</td></tr>
          <tr><td>6</td><td>-</td><td>-</td></tr>
        </tbody>
      </table>
      <table class="tsp-rules-table" style="margin-top:8px">
        <thead><tr><th>직급</th><th>호칭(해적)</th><th>기능 및 혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>말단</td><td>-</td></tr>
          <tr><td>1</td><td>부하</td><td>우주 비행 1 또는 포격 1</td></tr>
          <tr><td>2</td><td>상병</td><td>-</td></tr>
          <tr><td>3</td><td>하사</td><td>사격 1 또는 근접전 1</td></tr>
          <tr><td>4</td><td>부관</td><td>-</td></tr>
          <tr><td>5</td><td>지도자</td><td>기계공학 1 또는 항법 1</td></tr>
          <tr><td>6</td><td>선장</td><td>-</td></tr>
        </tbody>
      </table>
    `},
    { title: '사건 표 (2D)', body: `
      <h3>무법자 — 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>2</td><td>큰일이 났습니다! 사고 표 굴림 (경력을 그만둘 필요는 없음)</td></tr>
          <tr><td>3</td><td>체포되어 기소. 직접 변론(변호 8+) 성공 시 기소 취하. 실패 시 적수 1명 + 다음 주기 죄수 경력. 변호사 선임 시 연줄이 되지만 소득 굴림 1회 상실</td></tr>
          <tr><td>4</td><td>근사한 강도 계획에 참여. 전자기기 1 또는 정비 1 획득</td></tr>
          <tr><td>5</td><td>범죄 성공. 아무 소득 굴림 +2 (1회), 피해자가 적수가 됨</td></tr>
          <tr><td>6</td><td>동료 배신 기회. 배신 시 다음 진급 굴림 +4. 배신 안 하면 동료가 조력자가 됨</td></tr>
          <tr><td>7</td><td>생활 사건 발생. 생활 사건 표 굴림</td></tr>
          <tr><td>8</td><td>경쟁 범죄 조직과 갈등. 은신 8+ 또는 사격 8+. 실패 시 부상 표 굴림. 성공 시 소득 굴림 +1회</td></tr>
          <tr><td>9</td><td>도박사 패거리와 어울림. 도박 1 획득. 소득 굴림 횟수를 걸고 도박 8+ 가능 — 실패: 건 만큼 상실, 성공: 건 것의 절반 추가(올림)</td></tr>
          <tr><td>10</td><td>범죄계 거물의 제자가 됨. 전술(지상전) 1 획득 또는 다음 진급 굴림 +4</td></tr>
          <tr class="tsp-row-great"><td>11</td><td>전설적인 범죄 행위 성공. 자동 진급</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>범죄계 거물의 제자가 됨. 전술(지상전) 1 획득 또는 다음 진급 굴림 +4 / 전설적인 범죄 행위 성공, 자동 진급</td></tr>
        </tbody>
      </table>
    `},
    { title: '사고 표 (1D)', body: `
      <h3>무법자 — 사고 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>사고</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>심한 부상. 부상 표에서 2가 나온 것으로 간주 (또는 2회 굴려 낮은 결과 선택)</td></tr>
          <tr class="tsp-row-bad"><td>2</td><td>체포됨. 다음 주기에는 죄수 경력 수행</td></tr>
          <tr><td>3</td><td>친구에게 배신당함. 연줄/조력자가 경쟁자/적수로 전환 (없으면 새로 적수 획득). 2D 굴려 2면 다음 주기 죄수 경력</td></tr>
          <tr><td>4</td><td>일을 그르쳐 행성에서 도주. 기만 1, 우주 비행 1, 운동(민첩) 1, 포격 1 중 하나 획득</td></tr>
          <tr><td>5</td><td>형사/경쟁 조직이 계속 추격하기로 함. 적수 1명 획득</td></tr>
          <tr><td>6</td><td>부상을 입음. 부상 표 굴림</td></tr>
        </tbody>
      </table>
    `},
    { title: '머스터아웃 (현금/물품)', body: `
      <h3>무법자 — 퇴직 소득 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현금</th><th>물품</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>없음</td><td>함선 지분</td></tr>
          <tr><td>2</td><td>없음</td><td>무기</td></tr>
          <tr><td>3</td><td>Cr10,000</td><td>지능 +1</td></tr>
          <tr><td>4</td><td>Cr10,000</td><td>함선 지분 ×1D</td></tr>
          <tr><td>5</td><td>Cr50,000</td><td>장갑복</td></tr>
          <tr><td>6</td><td>Cr100,000</td><td>민첩 +1</td></tr>
          <tr><td>7</td><td>Cr100,000</td><td>함선 지분 ×1D</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표(좌측)는 평생 최대 3회.</p>
    `},
  ]
});

// ══════════════════════════════════════════════════════
// 미디어 직군
// ══════════════════════════════════════════════════════
CAREER_TABLES.push({
  type: 'group',
  title: '미디어 직군',
  items: [
    { title: '개요·자격·진급', body: `
      <h3>미디어 직군</h3>
      <p>기자, 예술가, 연예인 등 미디어와 관련된 일을 하는 사람들입니다.</p>
      <table class="tsp-rules-table">
        <tbody>
          <tr><td><b>자격 굴림</b></td><td>민첩 5+ 또는 지능 5+ <span class="tsp-rules-note">(이전 경력 1개당 -1)</span></td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 생존·진급 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직종</th><th>생존 굴림</th><th>진급 굴림</th></tr></thead>
        <tbody>
          <tr><td>예술가</td><td>지위 6+</td><td>지능 6+</td></tr>
          <tr><td>언론인</td><td>교육 7+</td><td>지능 5+</td></tr>
          <tr><td>공연자</td><td>지능 5+</td><td>민첩 7+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>예술가</b>: 다양한 분야의 예술적 창작 활동</li>
        <li><b>언론인</b>: 지역/우주 사건을 언론사·여행자 지원 협회 등에 알림</li>
        <li><b>공연자</b>: 배우·무용수·곡예사·운동선수 등 대중 앞에서 몸을 쓰는 직업</li>
      </ul>
    `},
    { title: '기능과 훈련 표', body: `
      <h3>미디어 — 기능과 훈련 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>자기 개발</th><th>직무 관련</th><th>상급 교육 (교육 10+)</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>민첩 +1</td><td>예술</td><td>변호</td></tr>
          <tr><td>2</td><td>지능 +1</td><td>유흥</td><td>중개</td></tr>
          <tr><td>3</td><td>지위 +1</td><td>기만</td><td>기만</td></tr>
          <tr><td>4</td><td>언어</td><td>운전</td><td>학문</td></tr>
          <tr><td>5</td><td>유흥</td><td>설득</td><td>세상물정</td></tr>
          <tr><td>6</td><td>다재다능</td><td>접객</td><td>외교</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>예술가</th><th>언론인</th><th>공연자</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>예술</td><td>예술(홀로그램 또는 글쓰기)</td><td>예술(공연 또는 악기)</td></tr>
          <tr><td>2</td><td>유흥</td><td>전자기기</td><td>운동</td></tr>
          <tr><td>3</td><td>전자기기(컴퓨터)</td><td>운전</td><td>유흥</td></tr>
          <tr><td>4</td><td>도박</td><td>수사</td><td>기만</td></tr>
          <tr><td>5</td><td>설득</td><td>경계</td><td>은신</td></tr>
          <tr><td>6</td><td>산업</td><td>세상물정</td><td>세상물정</td></tr>
        </tbody>
      </table>
    `},
    { title: '직급과 혜택', body: `
      <h3>미디어 — 직급과 혜택</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직급</th><th>예술가</th><th>공연자</th><th>언론인 (호칭)</th><th>언론인 혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
          <tr><td>1</td><td>예술 1</td><td>민첩 +1</td><td>프리랜서 기자</td><td>전자기기(통신) 1</td></tr>
          <tr><td>2</td><td>-</td><td>-</td><td>정규 기자</td><td>수사 1</td></tr>
          <tr><td>3</td><td>수사 1</td><td>근력 +1</td><td>-</td><td>-</td></tr>
          <tr><td>4</td><td>-</td><td>-</td><td>특파원</td><td>설득 1</td></tr>
          <tr><td>5</td><td>지위 +1 (유명 예술가)</td><td>지위 +1 (유명 공연자)</td><td>-</td><td>-</td></tr>
          <tr><td>6</td><td>-</td><td>-</td><td>수석 특파원</td><td>지위 +1</td></tr>
        </tbody>
      </table>
    `},
    { title: '사건 표 (2D)', body: `
      <h3>미디어 — 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>2</td><td>큰일이 났습니다! 사고 표 굴림 (경력을 그만둘 필요는 없음)</td></tr>
          <tr><td>3</td><td>논란의 행사/전시에 초대. 예술 8+ 또는 수사 8+. 성공: 지위 +1, 실패: 지위 -1</td></tr>
          <tr><td>4</td><td>고향 세계 유명인 사교계에 진입. 유흥 1, 설득 1, 접객 1, 또는 연줄 1명 중 하나 획득</td></tr>
          <tr><td>5</td><td>작품/활동이 호평받아 유명해짐. 아무 소득 굴림 +1 (1회)</td></tr>
          <tr><td>6</td><td>후원자를 만남. 다음 진급 굴림 +2 + 조력자 1명 획득</td></tr>
          <tr><td>7</td><td>생활 사건 발생. 생활 사건 표 굴림</td></tr>
          <tr><td>8</td><td>고향 세계 정치 지도자 비판/실각 기회. 무시 시 무효과. 이용 시 적수 1명 + 예술 8+ 또는 설득 8+ — 성공: 기능 1레벨 향상. 실패: 기능 1레벨 향상 + 사고 표 굴림</td></tr>
          <tr><td>9</td><td>여러 세계 순회공연. 연줄 D3명 획득</td></tr>
          <tr><td>10</td><td>작품 도난 사건 수사 중 범죄 지하세계 접촉. 세상물정 1, 수사 1, 경계 1, 은신 1 중 하나 획득</td></tr>
          <tr><td>11</td><td>기묘하고 신비한 삶. 생활 사건 표의 기이한 사건 굴림</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>권위 있는 상 수상. 자동 진급</td></tr>
        </tbody>
      </table>
    `},
    { title: '사고 표 (1D)', body: `
      <h3>미디어 — 사고 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>사고</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>심한 부상. 부상 표에서 2가 나온 것으로 간주 (또는 2회 굴려 낮은 결과 선택)</td></tr>
          <tr><td>2</td><td>스캔들을 폭로하거나 스캔들에 연루됨</td></tr>
          <tr><td>3</td><td>대중의 비판. 지위 -1</td></tr>
          <tr><td>4</td><td>동료에게 배신당함. 연줄/조력자가 경쟁자/적수로 전환 (없으면 새로 획득)</td></tr>
          <tr><td>5</td><td>취재/순회공연/탐험 등이 잘못되어 고립. 생존 1, 우주 비행 1, 설득 1, 세상물정 1 중 하나 획득</td></tr>
          <tr><td>6</td><td>검열/논란으로 경력 종료. 다음 경력 자격 굴림 +2</td></tr>
        </tbody>
      </table>
    `},
    { title: '머스터아웃 (현금/물품)', body: `
      <h3>미디어 — 퇴직 소득 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현금</th><th>물품</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>없음</td><td>연줄</td></tr>
          <tr><td>2</td><td>없음</td><td>지위 +1</td></tr>
          <tr><td>3</td><td>Cr10,000</td><td>연줄</td></tr>
          <tr><td>4</td><td>Cr10,000</td><td>지위 +1</td></tr>
          <tr><td>5</td><td>Cr40,000</td><td>지능 +1</td></tr>
          <tr><td>6</td><td>Cr40,000</td><td>함선 지분 ×2</td></tr>
          <tr><td>7</td><td>Cr80,000</td><td>지위와 교육 각각 +1</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표(좌측)는 평생 최대 3회.</p>
    `},
  ]
});

// ══════════════════════════════════════════════════════
// 방랑자
// ══════════════════════════════════════════════════════
CAREER_TABLES.push({
  type: 'group',
  title: '방랑자',
  items: [
    { title: '개요·자격·진급', body: `
      <h3>방랑자</h3>
      <p>떠돌이, 히치하이커, 여행자 등의 방랑자들은 명확한 목표나 목적지 없이 별들 사이를 떠돕니다.</p>
      <table class="tsp-rules-table">
        <tbody>
          <tr><td><b>자격 굴림</b></td><td><span class="tsp-badge yellow">자동 성공</span></td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 생존·진급 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직종</th><th>생존 굴림</th><th>진급 굴림</th></tr></thead>
        <tbody>
          <tr><td>야만인</td><td>인내 7+</td><td>근력 7+</td></tr>
          <tr><td>떠돌이</td><td>인내 7+</td><td>지능 7+</td></tr>
          <tr><td>자원 수집가</td><td>민첩 7+</td><td>인내 7+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>야만인</b>: 기술의 혜택이 없는 원시 세계에 삶</li>
        <li><b>떠돌이</b>: 은하 전역의 빈민가와 우주항을 떠도는 우주 부랑자</li>
        <li><b>자원 수집가</b>: 소행성 채굴 또는 난파선 수색을 업으로 삼음</li>
      </ul>
    `},
    { title: '기능과 훈련 표', body: `
      <h3>방랑자 — 기능과 훈련 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>자기 개발</th><th>직무 관련 기능</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>근력 +1</td><td>운동</td></tr>
          <tr><td>2</td><td>인내 +1</td><td>근접전(비무장)</td></tr>
          <tr><td>3</td><td>민첩 +1</td><td>경계</td></tr>
          <tr><td>4</td><td>언어</td><td>세상물정</td></tr>
          <tr><td>5</td><td>산업</td><td>은신</td></tr>
          <tr><td>6</td><td>다재다능</td><td>생존</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>야만인</th><th>떠돌이</th><th>자원 수집가</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>동물</td><td>운전</td><td>우주 비행(소형선)</td></tr>
          <tr><td>2</td><td>유흥</td><td>기만</td><td>정비</td></tr>
          <tr><td>3</td><td>근접전(도검)</td><td>경계</td><td>우주 항법</td></tr>
          <tr><td>4</td><td>은신</td><td>은신</td><td>진공복</td></tr>
          <tr><td>5</td><td>항해(개인선 또는 범선)</td><td>세상물정</td><td>산업</td></tr>
          <tr><td>6</td><td>생존</td><td>생존</td><td>사격</td></tr>
        </tbody>
      </table>
    `},
    { title: '직급과 혜택', body: `
      <h3>방랑자 — 직급과 혜택</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직급</th><th>야만인 (호칭)</th><th>혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>-</td><td>-</td></tr>
          <tr><td>1</td><td>-</td><td>생존 1</td></tr>
          <tr><td>2</td><td>전사</td><td>근접전(도검) 1</td></tr>
          <tr><td>3</td><td>-</td><td>-</td></tr>
          <tr><td>4</td><td>족장</td><td>지도력 1</td></tr>
          <tr><td>5</td><td>-</td><td>-</td></tr>
          <tr><td>6</td><td>대족장</td><td>-</td></tr>
        </tbody>
      </table>
      <table class="tsp-rules-table" style="margin-top:8px">
        <thead><tr><th>직급</th><th>떠돌이</th><th>자원 수집가</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>-</td><td>-</td></tr>
          <tr><td>1</td><td>세상물정 1</td><td>진공복 1</td></tr>
          <tr><td>2</td><td>-</td><td>-</td></tr>
          <tr><td>3</td><td>기만 1</td><td>산업(소행성 채굴) 1 또는 정비 1</td></tr>
          <tr><td>4</td><td>-</td><td>-</td></tr>
          <tr><td>5</td><td>-</td><td>-</td></tr>
          <tr><td>6</td><td>-</td><td>-</td></tr>
        </tbody>
      </table>
    `},
    { title: '사건 표 (2D)', body: `
      <h3>방랑자 — 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>2</td><td>큰일이 났습니다! 사고 표 굴림 (경력을 그만둘 필요는 없음)</td></tr>
          <tr><td>3</td><td>후원자가 일자리 알선. 수락 시 다음 자격 굴림 +4 (대신 추후 은혜를 갚아야 할 수도)</td></tr>
          <tr><td>4</td><td>여기저기서 유용한 기능 습득. 다재다능, 생존, 세상물정, 근접전 중 하나 1레벨 향상</td></tr>
          <tr><td>5</td><td>유용한 물건 발견. 아무 소득 굴림 +1</td></tr>
          <tr><td>6</td><td>범상치 않은 것과 마주침. 생활 사건 표의 기이한 사건 굴림</td></tr>
          <tr><td>7</td><td>생활 사건 발생. 생활 사건 표 굴림</td></tr>
          <tr><td>8</td><td>적수에게 공격당함. 적수 없으면 1명 획득. 근접전/사격/은신 8+ 중 하나 실패 시 부상 표 굴림</td></tr>
          <tr><td>9</td><td>위험하지만 보수 좋은 모험 제안. 수락 시 1D — 1~2: 부상/체포(부상 표 또는 죄수 경력), 3~4: 무사하지만 무소득, 5~6: 성공 (소득 굴림 +4, 1회)</td></tr>
          <tr><td>10</td><td>벼랑 끝의 삶이 단련시킴. 보유 기능 1개 1레벨 향상</td></tr>
          <tr><td>11</td><td>강제 징병. 다음 주기 징병 굴림</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>역경을 이겨내고 성공. 자동 진급</td></tr>
        </tbody>
      </table>
    `},
    { title: '사고 표 (1D)', body: `
      <h3>방랑자 — 사고 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>사고</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>심한 부상. 부상 표에서 2가 나온 것으로 간주 (또는 2회 굴려 낮은 결과 선택)</td></tr>
          <tr><td>2</td><td>부상을 입음. 부상 표 굴림</td></tr>
          <tr><td>3</td><td>범죄 조직/부패 관료와 갈등. 적수 1명 획득</td></tr>
          <tr><td>4</td><td>생명을 위협하는 병. 인내 -1</td></tr>
          <tr><td>5</td><td>친구에게 배신당함. 연줄/조력자가 경쟁자/적수로 전환 (없으면 새로 획득). 2D 굴려 2면 다음 주기 죄수 경력</td></tr>
          <tr><td>6</td><td>무슨 일이 있었는지 알 수 없음. 기억이 공백</td></tr>
        </tbody>
      </table>
    `},
    { title: '머스터아웃 (현금/물품)', body: `
      <h3>방랑자 — 퇴직 소득 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현금</th><th>물품</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>없음</td><td>연줄</td></tr>
          <tr><td>2</td><td>없음</td><td>무기</td></tr>
          <tr><td>3</td><td>Cr1,000</td><td>조력자</td></tr>
          <tr><td>4</td><td>Cr2,000</td><td>무기</td></tr>
          <tr><td>5</td><td>Cr3,000</td><td>교육 +1</td></tr>
          <tr><td>6</td><td>Cr4,000</td><td>함선 지분</td></tr>
          <tr><td>7</td><td>Cr8,000</td><td>함선 지분 ×2</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표(좌측)는 평생 최대 3회.</p>
    `},
  ]
});

// ══════════════════════════════════════════════════════
// 상인
// ══════════════════════════════════════════════════════
CAREER_TABLES.push({
  type: 'group',
  title: '상인',
  items: [
    { title: '개요·자격·진급', body: `
      <h3>상인</h3>
      <p>영리 기업의 일원입니다. 거대 무역회사 소속 함선의 승무원일 수도, 기회가 되는 대로 화물과 승객을 싣고 세계를 오가는 개인 소유 자유 무역선의 승무원일 수도 있습니다.</p>
      <table class="tsp-rules-table">
        <tbody>
          <tr><td><b>자격 굴림</b></td><td>지능 4+ <span class="tsp-rules-note">(이전 경력 1개당 -1)</span></td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 생존·진급 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직종</th><th>생존 굴림</th><th>진급 굴림</th></tr></thead>
        <tbody>
          <tr><td>상선단</td><td>교육 5+</td><td>지능 7+</td></tr>
          <tr><td>자유 무역상</td><td>민첩 6+</td><td>지능 6+</td></tr>
          <tr><td>중개인</td><td>교육 5+</td><td>지능 7+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>상선단</b>: 제국이나 초거대 기업이 운영하는 거대 화물선에서 근무</li>
        <li><b>자유 무역상</b>: 떠돌이 무역상의 배에 탑승</li>
        <li><b>중개인</b>: 행성이나 우주항에서 중개업</li>
      </ul>
    `},
    { title: '기능과 훈련 표', body: `
      <h3>상인 — 기능과 훈련 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>자기 개발</th><th>직무 관련</th><th>상급 교육 (교육 8+)</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>근력 +1</td><td>운전</td><td>기계공학</td></tr>
          <tr><td>2</td><td>민첩 +1</td><td>진공복</td><td>우주 항법</td></tr>
          <tr><td>3</td><td>인내 +1</td><td>중개</td><td>전자기기</td></tr>
          <tr><td>4</td><td>지능 +1</td><td>접객</td><td>우주 비행</td></tr>
          <tr><td>5</td><td>언어</td><td>전자기기</td><td>행정</td></tr>
          <tr><td>6</td><td>세상물정</td><td>설득</td><td>변호</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>상선단</th><th>자유 무역상</th><th>중개인</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>우주 비행</td><td>우주 비행(우주선)</td><td>행정</td></tr>
          <tr><td>2</td><td>진공복</td><td>진공복</td><td>변호</td></tr>
          <tr><td>3</td><td>운동</td><td>기만</td><td>중개</td></tr>
          <tr><td>4</td><td>정비</td><td>정비</td><td>세상물정</td></tr>
          <tr><td>5</td><td>기계공학</td><td>세상물정</td><td>기만</td></tr>
          <tr><td>6</td><td>전자기기</td><td>포격</td><td>설득</td></tr>
        </tbody>
      </table>
    `},
    { title: '직급과 혜택', body: `
      <h3>상인 — 직급과 혜택</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직급</th><th>상선단 (호칭)</th><th>혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>선원</td><td>-</td></tr>
          <tr><td>1</td><td>상급 선원</td><td>정비 1</td></tr>
          <tr><td>2</td><td>4급 사관</td><td>-</td></tr>
          <tr><td>3</td><td>3급 사관</td><td>-</td></tr>
          <tr><td>4</td><td>2급 사관</td><td>우주 비행 1</td></tr>
          <tr><td>5</td><td>1급 사관</td><td>지위 +1</td></tr>
          <tr><td>6</td><td>선장</td><td>-</td></tr>
        </tbody>
      </table>
      <table class="tsp-rules-table" style="margin-top:8px">
        <thead><tr><th>직급</th><th>자유 무역상</th><th>중개인</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>-</td><td>-</td></tr>
          <tr><td>1</td><td>설득 1</td><td>중개 1</td></tr>
          <tr><td>2</td><td>-</td><td>-</td></tr>
          <tr><td>3</td><td>다재다능 1 (노련한 무역상)</td><td>세상물정 1 (노련한 중개인)</td></tr>
          <tr><td>4</td><td>-</td><td>-</td></tr>
          <tr><td>5</td><td>-</td><td>-</td></tr>
          <tr><td>6</td><td>-</td><td>-</td></tr>
        </tbody>
      </table>
    `},
    { title: '사건 표 (2D)', body: `
      <h3>상인 — 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>2</td><td>큰일이 났습니다! 사고 표 굴림 (경력을 그만둘 필요는 없음)</td></tr>
          <tr><td>3</td><td>불법 물품 밀수 제안. 수락 시 기만 8+ 또는 설득 8+ — 성공: 세상물정 1 + 추가 소득 굴림. 거절 시 범죄계 적수 1명</td></tr>
          <tr><td>4</td><td>공급자/우주인과 교류. 산업 1, 전자기기 1, 기계공학 1, 동물 1, 학문 1 중 하나 획득</td></tr>
          <tr><td>5</td><td>위험한 거래 기회. 소득 굴림을 걸고 도박 8+ 또는 중개 8+ — 성공: 건 것의 절반 추가(올림). 실패: 모두 상실. 사용 기능 1레벨 향상(공통)</td></tr>
          <tr><td>6</td><td>뜻밖의 연줄. 연줄 1명 획득</td></tr>
          <tr><td>7</td><td>생활 사건 발생. 생활 사건 표 굴림</td></tr>
          <tr><td>8</td><td>법적 분쟁. 변호 1, 행정 1, 외교 1, 수사 1 중 하나 획득. 2D 굴려 2면 다음 주기 죄수 경력</td></tr>
          <tr><td>9</td><td>전문 분야 고급 훈련. 교육 8+ 성공 시 보유 기능 1개 1레벨 향상</td></tr>
          <tr><td>10</td><td>좋은 거래로 부유해짐. 아무 소득 굴림 +1 (1회)</td></tr>
          <tr><td>11</td><td>유용한 조력자와 친분. 조력자 1명 + 유흥 1레벨 향상 또는 다음 진급 굴림 +4</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>사업체/함선이 크게 성공. 자동 진급</td></tr>
        </tbody>
      </table>
    `},
    { title: '사고 표 (1D)', body: `
      <h3>상인 — 사고 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>사고</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>심한 부상. 부상 표에서 2가 나온 것으로 간주 (또는 2회 굴려 낮은 결과 선택)</td></tr>
          <tr class="tsp-row-bad"><td>2</td><td>경쟁 상인이 파산시킴. 이 경력의 모든 소득 굴림 상실, 그 상인이 경쟁자</td></tr>
          <tr><td>3</td><td>전쟁 발발로 무역로·연줄 모두 잃고 떠나야 함. 사격 1 또는 우주 비행 1 획득</td></tr>
          <tr><td>4</td><td>범죄 집단이 함선/우주항 파괴. 그 집단이 적수가 됨</td></tr>
          <tr><td>5</td><td>무역 규제로 상거래 중단. 원할 시 다음 주기 자격 굴림 없이 무법자 경력 시작 가능</td></tr>
          <tr><td>6</td><td>불리한 거래로 파산. 이번 주기와 이전 주기까지의 소득 굴림은 유지</td></tr>
        </tbody>
      </table>
    `},
    { title: '머스터아웃 (현금/물품)', body: `
      <h3>상인 — 퇴직 소득 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현금</th><th>물품</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cr1,000</td><td>도검</td></tr>
          <tr><td>2</td><td>Cr5,000</td><td>지능 +1</td></tr>
          <tr><td>3</td><td>Cr10,000</td><td>교육 +1</td></tr>
          <tr><td>4</td><td>Cr20,000</td><td>총기</td></tr>
          <tr><td>5</td><td>Cr20,000</td><td>함선 지분</td></tr>
          <tr><td>6</td><td>Cr40,000</td><td>자유 무역선</td></tr>
          <tr><td>7</td><td>Cr40,000</td><td>자유 무역선</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표(좌측)는 평생 최대 3회. 자유 무역선을 2회 획득하면 함선 1대를 완전히 소유 (대출 없음).</p>
    `},
  ]
});

// ══════════════════════════════════════════════════════
// 시민
// ══════════════════════════════════════════════════════
CAREER_TABLES.push({
  type: 'group',
  title: '시민',
  items: [
    { title: '개요·자격·진급', body: `
      <h3>시민</h3>
      <p>기업, 산업 현장, 관료 조직에서 근무하거나, 개척되지 않은 행성에서 새로운 삶을 만들어 가는 사람들입니다.</p>
      <table class="tsp-rules-table">
        <tbody>
          <tr><td><b>자격 굴림</b></td><td>교육 5+ <span class="tsp-rules-note">(이전 경력 1개당 -1)</span></td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 생존·진급 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직종</th><th>생존 굴림</th><th>진급 굴림</th></tr></thead>
        <tbody>
          <tr><td>기업가</td><td>지위 6+</td><td>지능 6+</td></tr>
          <tr><td>노동자</td><td>인내 4+</td><td>교육 8+</td></tr>
          <tr><td>개척자</td><td>지능 7+</td><td>인내 5+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>기업가</b>: 대기업의 간부나 경영자</li>
        <li><b>노동자</b>: 산업 현장에서 일하는 육체 노동자</li>
        <li><b>개척자</b>: 최근에 정착지가 생겨 아직 개척이 필요한 세계에서 새로운 삶</li>
      </ul>
    `},
    { title: '기능과 훈련 표', body: `
      <h3>시민 — 기능과 훈련 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>자기 개발</th><th>직무 관련</th><th>상급 교육 (교육 10+)</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>교육 +1</td><td>운전</td><td>예술</td></tr>
          <tr><td>2</td><td>지능 +1</td><td>비행</td><td>변호</td></tr>
          <tr><td>3</td><td>유흥</td><td>세상물정</td><td>외교</td></tr>
          <tr><td>4</td><td>도박</td><td>근접전</td><td>언어</td></tr>
          <tr><td>5</td><td>운전</td><td>접객</td><td>전자기기(컴퓨터)</td></tr>
          <tr><td>6</td><td>다재다능</td><td>산업</td><td>의료</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>기업가</th><th>노동자</th><th>개척자</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>변호</td><td>운전</td><td>동물</td></tr>
          <tr><td>2</td><td>행정</td><td>정비</td><td>운동</td></tr>
          <tr><td>3</td><td>중개</td><td>전자기기</td><td>다재다능</td></tr>
          <tr><td>4</td><td>전자기기(컴퓨터)</td><td>기계공학</td><td>운전</td></tr>
          <tr><td>5</td><td>외교</td><td>산업</td><td>생존</td></tr>
          <tr><td>6</td><td>지도력</td><td>학문</td><td>경계</td></tr>
        </tbody>
      </table>
    `},
    { title: '직급과 혜택', body: `
      <h3>시민 — 직급과 혜택</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직급</th><th>기업가 (호칭)</th><th>혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>-</td><td>-</td></tr>
          <tr><td>1</td><td>-</td><td>-</td></tr>
          <tr><td>2</td><td>과장</td><td>행정 1</td></tr>
          <tr><td>3</td><td>-</td><td>-</td></tr>
          <tr><td>4</td><td>부장</td><td>변호 1</td></tr>
          <tr><td>5</td><td>-</td><td>-</td></tr>
          <tr><td>6</td><td>임원</td><td>지위 +1</td></tr>
        </tbody>
      </table>
      <table class="tsp-rules-table" style="margin-top:8px">
        <thead><tr><th>직급</th><th>노동자 (호칭)</th><th>혜택</th><th>개척자 (호칭)</th><th>혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
          <tr><td>1</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
          <tr><td>2</td><td>기술자</td><td>산업 1</td><td>정착민</td><td>생존 1</td></tr>
          <tr><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
          <tr><td>4</td><td>장인</td><td>정비 1</td><td>탐험가</td><td>항법 1</td></tr>
          <tr><td>5</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
          <tr><td>6</td><td>명장</td><td>기계공학 1</td><td>-</td><td>사격 1</td></tr>
        </tbody>
      </table>
    `},
    { title: '사건 표 (2D)', body: `
      <h3>시민 — 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>2</td><td>큰일이 났습니다! 사고 표 굴림 (경력을 그만둘 필요는 없음)</td></tr>
          <tr><td>3</td><td>고향 세계 정치 격동, 혁명에 휘말림. 변호1/설득1/폭발물1/세상물정1 중 하나 선택해 8+ 굴림 — 성공: 다음 진급 굴림 +2. 실패: 다음 생존 굴림 -2</td></tr>
          <tr><td>4</td><td>큰 탑승물 관리·이용. 정비/운전/전자기기/비행/기계공학 중 하나 1레벨 향상</td></tr>
          <tr><td>5</td><td>사업/회사/개척지 번영. 아무 소득 굴림 +1</td></tr>
          <tr><td>6</td><td>전문 분야 고급 훈련. 교육 10+ 성공 시 원하는 기술 1개 1레벨 획득</td></tr>
          <tr><td>7</td><td>생활 사건 발생. 생활 사건 표 굴림</td></tr>
          <tr><td>8</td><td>알아서는 안 될 정보 입수. 이용 시 소득 굴림 +1(1회) + 세상물정1/기만1/범죄자 연줄 중 하나. 미이용 시 무효과</td></tr>
          <tr><td>9</td><td>성실함/요령이 성과를 거둠. 다음 진급 판정 +2</td></tr>
          <tr><td>10</td><td>기술 분야 경험. 전자기기 또는 기계공학 1레벨 향상</td></tr>
          <tr><td>11</td><td>상급자와 친분. 조력자 1명 + 외교 1 획득 또는 다음 진급 굴림 +4</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>영향력 있는 자리에 오름. 자동 진급</td></tr>
        </tbody>
      </table>
    `},
    { title: '사고 표 (1D)', body: `
      <h3>시민 — 사고 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>사고</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>심한 부상. 부상 표에서 2가 나온 것으로 간주 (또는 2회 굴려 낮은 결과 선택)</td></tr>
          <tr class="tsp-row-bad"><td>2</td><td>범죄 조직이 행패. 그 조직이 적수가 됨</td></tr>
          <tr><td>3</td><td>불경기로 직업을 잃음. 지위 -1</td></tr>
          <tr><td>4</td><td>당국이 사업체/개척지 조사. 협조: 폐쇄되지만 다음 자격 굴림 +2. 거부: 적수 1명 획득</td></tr>
          <tr><td>5</td><td>혁명/침략으로 행성을 떠남. 세상물정 8+ 성공 시 보유 기능 1개 1레벨 향상</td></tr>
          <tr><td>6</td><td>부상을 입음. 부상 표 굴림</td></tr>
        </tbody>
      </table>
    `},
    { title: '머스터아웃 (현금/물품)', body: `
      <h3>시민 — 퇴직 소득 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현금</th><th>물품</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cr2,000</td><td>함선 지분</td></tr>
          <tr><td>2</td><td>Cr5,000</td><td>조력자</td></tr>
          <tr><td>3</td><td>Cr10,000</td><td>지능 +1</td></tr>
          <tr><td>4</td><td>Cr10,000</td><td>총기</td></tr>
          <tr><td>5</td><td>Cr10,000</td><td>교육 +1</td></tr>
          <tr><td>6</td><td>Cr50,000</td><td>함선 지분 ×2</td></tr>
          <tr><td>7</td><td>Cr100,000</td><td>여행자 지원 협회 가입</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표(좌측)는 평생 최대 3회.</p>
    `},
  ]
});

// ══════════════════════════════════════════════════════
// 요원
// ══════════════════════════════════════════════════════
CAREER_TABLES.push({
  type: 'group',
  title: '요원',
  items: [
    { title: '개요·자격·진급', body: `
      <h3>요원</h3>
      <p>법 집행 기관, 산업 스파이, 첩보원, 그 외 그림자 속에서 일하는 사람들입니다.</p>
      <table class="tsp-rules-table">
        <tbody>
          <tr><td><b>자격 굴림</b></td><td>지능 6+ <span class="tsp-rules-note">(이전 경력 1개당 -1)</span></td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 생존·진급 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직종</th><th>생존 굴림</th><th>진급 굴림</th></tr></thead>
        <tbody>
          <tr><td>법 집행</td><td>인내 6+</td><td>지능 6+</td></tr>
          <tr><td>첩보원</td><td>지능 7+</td><td>지능 5+</td></tr>
          <tr><td>산업 스파이</td><td>지능 5+</td><td>지능 7+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>법 집행</b>: 경찰관이나 탐정</li>
        <li><b>첩보원</b>: 정보원이나 파괴 공작원</li>
        <li><b>산업 스파이</b>: 기업체에 소속되어 경쟁사를 염탐</li>
      </ul>
    `},
    { title: '기능과 훈련 표', body: `
      <h3>요원 — 기능과 훈련 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>자기 개발</th><th>직무 관련</th><th>상급 교육 (교육 8+)</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>사격</td><td>세상물정</td><td>변호</td></tr>
          <tr><td>2</td><td>민첩 +1</td><td>운전</td><td>언어</td></tr>
          <tr><td>3</td><td>인내 +1</td><td>수사</td><td>폭발물</td></tr>
          <tr><td>4</td><td>근접전</td><td>비행</td><td>의료</td></tr>
          <tr><td>5</td><td>지능 +1</td><td>경계</td><td>진공복</td></tr>
          <tr><td>6</td><td>운동</td><td>사격</td><td>전자기기</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>법 집행</th><th>첩보원</th><th>산업 스파이</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>수사</td><td>수사</td><td>수사</td></tr>
          <tr><td>2</td><td>경계</td><td>경계</td><td>전자기기(컴퓨터)</td></tr>
          <tr><td>3</td><td>세상물정</td><td>전자기기(통신)</td><td>은신</td></tr>
          <tr><td>4</td><td>은신</td><td>은신</td><td>유흥</td></tr>
          <tr><td>5</td><td>근접전</td><td>설득</td><td>기만</td></tr>
          <tr><td>6</td><td>변호</td><td>기만</td><td>세상물정</td></tr>
        </tbody>
      </table>
    `},
    { title: '직급과 혜택', body: `
      <h3>요원 — 직급과 혜택</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직급</th><th>법 집행 (호칭)</th><th>혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>신입</td><td>-</td></tr>
          <tr><td>1</td><td>순경</td><td>세상물정 1</td></tr>
          <tr><td>2</td><td>경장</td><td>-</td></tr>
          <tr><td>3</td><td>경사</td><td>-</td></tr>
          <tr><td>4</td><td>경위</td><td>수사 1</td></tr>
          <tr><td>5</td><td>총경</td><td>행정 1</td></tr>
          <tr><td>6</td><td>치안감</td><td>지위 +1</td></tr>
        </tbody>
      </table>
      <table class="tsp-rules-table" style="margin-top:8px">
        <thead><tr><th>직급</th><th>첩보원/산업 스파이 (호칭)</th><th>혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>-</td><td>-</td></tr>
          <tr><td>1</td><td>요원</td><td>기만 1</td></tr>
          <tr><td>2</td><td>현장 요원</td><td>수사 1</td></tr>
          <tr><td>3</td><td>-</td><td>-</td></tr>
          <tr><td>4</td><td>특수 요원</td><td>사격 1</td></tr>
          <tr><td>5</td><td>부국장</td><td>-</td></tr>
          <tr><td>6</td><td>국장</td><td>-</td></tr>
        </tbody>
      </table>
    `},
    { title: '사건 표 (2D)', body: `
      <h3>요원 — 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>2</td><td>큰일이 났습니다! 사고 표 굴림 (경력을 그만둘 필요는 없음)</td></tr>
          <tr><td>3</td><td>조사 중 위험에 처함. 수사 8+ 또는 세상물정 8+. 실패: 사고 표 굴림. 성공: 기만/다재다능/설득/전술 중 하나 1레벨 향상</td></tr>
          <tr><td>4</td><td>임무 완수로 보상. 이 경력 소득 굴림 +1 (1회)</td></tr>
          <tr><td>5</td><td>인적 네트워크 구축. 연줄 D3명 획득</td></tr>
          <tr><td>6</td><td>전문 분야 고급 훈련. 교육 8+ 성공 시 보유 기능 1개 1레벨 향상</td></tr>
          <tr><td>7</td><td>생활 사건 발생. 생활 사건 표 굴림</td></tr>
          <tr><td>8</td><td>적을 잠복 수사. 기만 8+ — 성공: 무법자/시민 경력의 사건표+직종표 굴림. 실패: 무법자/시민 경력의 사고표 굴림</td></tr>
          <tr><td>9</td><td>기대 이상의 활약. 다음 진급 판정 +2</td></tr>
          <tr><td>10</td><td>탑승물 조종 훈련. 운전 1, 비행 1, 우주 비행 1, 포격 1 중 하나 획득</td></tr>
          <tr><td>11</td><td>상급 요원과 친분. 수사 1레벨 향상 또는 진급 판정 +4 (1회)</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>커다란 음모를 밝혀냄. 자동 진급</td></tr>
        </tbody>
      </table>
    `},
    { title: '사고 표 (1D)', body: `
      <h3>요원 — 사고 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>사고</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>심한 부상. 부상 표에서 2가 나온 것으로 간주 (또는 2회 굴려 낮은 결과 선택)</td></tr>
          <tr><td>2</td><td>조사 대상이 거래 제안. 수락: 불이익 없이 경력 종료(소득 굴림 상실). 거절: 부상 표 2회 굴려 낮은 결과 + 적수 1명 + 기능 1레벨 향상</td></tr>
          <tr><td>3</td><td>조사를 그르쳐 경력에 오점. 변호 8+ — 성공: 이번 소득 굴림 가능. 2가 나오면 다음 주기 죄수 경력</td></tr>
          <tr><td>4</td><td>위험한 정보 입수로 추적당함. 적수 1명 + 기만 1 획득</td></tr>
          <tr><td>5</td><td>일이 개인사에 영향. 연줄/조력자/가족 중 하나 선택, 부상 표 2회 굴려 낮은 결과 적용</td></tr>
          <tr><td>6</td><td>부상을 입음. 부상 표 굴림</td></tr>
        </tbody>
      </table>
    `},
    { title: '머스터아웃 (현금/물품)', body: `
      <h3>요원 — 퇴직 소득 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현금</th><th>물품</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cr1,000</td><td>과학 장비</td></tr>
          <tr><td>2</td><td>Cr2,000</td><td>지능 +1</td></tr>
          <tr><td>3</td><td>Cr5,000</td><td>함선 지분</td></tr>
          <tr><td>4</td><td>Cr7,500</td><td>무기</td></tr>
          <tr><td>5</td><td>Cr10,000</td><td>전투용 이식물</td></tr>
          <tr><td>6</td><td>Cr25,000</td><td>지위 +1 또는 전투용 이식물</td></tr>
          <tr><td>7</td><td>Cr50,000</td><td>여행자 지원 협회 가입</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표(좌측)는 평생 최대 3회.</p>
    `},
  ]
});

// ══════════════════════════════════════════════════════
// 귀족 (공직자 / 외교관 / 딜레탕트)
// ══════════════════════════════════════════════════════
CAREER_TABLES.push({
  type: 'group',
  title: '귀족',
  items: [
    { title: '개요·자격·진급', body: `
      <h3>귀족</h3>
      <p>고정적으로 하는 일은 별로 없지만, 수중의 현금은 넉넉할 때가 많은 상류층 사람들입니다.</p>
      <table class="tsp-rules-table">
        <tbody>
          <tr><td><b>자격 굴림</b></td><td>지위 10+ <span class="tsp-rules-note">(이전 경력 1개당 -1, 지위 10 이상이면 자동 성공)</span></td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 생존·진급 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직종</th><th>생존 굴림</th><th>진급 굴림</th></tr></thead>
        <tbody>
          <tr><td>공직자</td><td>지능 4+</td><td>교육 6+</td></tr>
          <tr><td>외교관</td><td>지능 5+</td><td>지위 7+</td></tr>
          <tr><td>딜레탕트</td><td>지위 3+</td><td>지능 8+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>공직자</b>: 행성 정부의 관료, 또는 영지·지역을 다스림</li>
        <li><b>외교관</b>: 외교 등 국가적 공무 담당</li>
        <li><b>딜레탕트</b>: 유명하다는 이유로 유명할 뿐, 사회에 실용적 기여가 없음</li>
      </ul>
    `},
    { title: '기능과 훈련 표', body: `
      <h3>귀족 — 기능과 훈련 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>자기 개발</th><th>직무 관련</th><th>상급 교육 (교육 8+)</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>근력 +1</td><td>행정</td><td>행정</td></tr>
          <tr><td>2</td><td>민첩 +1</td><td>변호</td><td>변호</td></tr>
          <tr><td>3</td><td>인내 +1</td><td>전자기기</td><td>언어</td></tr>
          <tr><td>4</td><td>도박</td><td>외교</td><td>지도력</td></tr>
          <tr><td>5</td><td>사격</td><td>수사</td><td>외교</td></tr>
          <tr><td>6</td><td>근접전</td><td>설득</td><td>예술</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>공직자</th><th>외교관</th><th>딜레탕트</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>행정</td><td>변호</td><td>유흥</td></tr>
          <tr><td>2</td><td>변호</td><td>유흥</td><td>기만</td></tr>
          <tr><td>3</td><td>중개</td><td>전자기기</td><td>비행</td></tr>
          <tr><td>4</td><td>외교</td><td>접객</td><td>세상물정</td></tr>
          <tr><td>5</td><td>지도력</td><td>외교</td><td>도박</td></tr>
          <tr><td>6</td><td>설득</td><td>기만</td><td>다재다능</td></tr>
        </tbody>
      </table>
    `},
    { title: '직급과 혜택', body: `
      <h3>귀족 — 직급과 혜택</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직급</th><th>공직자 (호칭)</th><th>혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>서기보</td><td>-</td></tr>
          <tr><td>1</td><td>서기</td><td>행정 1</td></tr>
          <tr><td>2</td><td>주사</td><td>-</td></tr>
          <tr><td>3</td><td>계장</td><td>변호 1</td></tr>
          <tr><td>4</td><td>과장</td><td>-</td></tr>
          <tr><td>5</td><td>국장</td><td>지도력 1</td></tr>
          <tr><td>6</td><td>장관</td><td>-</td></tr>
        </tbody>
      </table>
      <table class="tsp-rules-table" style="margin-top:8px">
        <thead><tr><th>직급</th><th>외교관 (호칭)</th><th>혜택</th><th>딜레탕트 (호칭)</th><th>혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>인턴</td><td>-</td><td>한량</td><td>-</td></tr>
          <tr><td>1</td><td>3등 서기관</td><td>행정 1</td><td>-</td><td>-</td></tr>
          <tr><td>2</td><td>2등 서기관</td><td>-</td><td>무뢰한</td><td>유흥 1</td></tr>
          <tr><td>3</td><td>1등 서기관</td><td>변호 1</td><td>-</td><td>-</td></tr>
          <tr><td>4</td><td>참사관</td><td>-</td><td>망나니</td><td>설득 1</td></tr>
          <tr><td>5</td><td>공사</td><td>외교 1</td><td>-</td><td>-</td></tr>
          <tr><td>6</td><td>대사</td><td>-</td><td>불한당</td><td>다재다능 1</td></tr>
        </tbody>
      </table>
    `},
    { title: '사건 표 (2D)', body: `
      <h3>귀족 — 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>2</td><td>큰일이 났습니다! 사고 표 굴림 (경력을 그만둘 필요는 없음)</td></tr>
          <tr><td>3</td><td>명예·지위 결투 신청. 거부 시 지위 -1. 수락 시 근접전(도검) 8+ — 성공: 지위 +1, 실패: 부상 표 굴림 + 지위 -1. 어느 쪽이든 근접전(도검)/지도력/전술/기만 중 하나 1레벨 향상</td></tr>
          <tr><td>4</td><td>통치자/놈팡이로 다양한 경험. 동물(탑승) 1, 예술 1, 유흥 1, 세상물정 1 중 하나 획득</td></tr>
          <tr><td>5</td><td>부유한 친척의 유산 상속. 아무 소득 굴림 +1 (1회)</td></tr>
          <tr><td>6</td><td>정치에 깊이 연루. 변호/행정/외교/설득 중 하나 1레벨 향상, 단 경쟁자 1명 획득</td></tr>
          <tr><td>7</td><td>생활 사건 발생. 생활 사건 표 굴림</td></tr>
          <tr><td>8</td><td>귀족 음모 세력의 포섭 시도. 거부 시 그 세력이 적수. 수락 시 기만 8+ 또는 설득 8+ — 실패: 사고 표 굴림. 성공: 기만/설득/전술/유흥 중 하나 1레벨 향상</td></tr>
          <tr><td>9</td><td>공정한 통치자로 칭송받음 (딜레탕트는 가문 재산을 더 오래 향유). 질투하는 친척/시민이 적수가 됨. 다음 진급 굴림 +2</td></tr>
          <tr><td>10</td><td>계략과 매력으로 상류 사회 진입. 유흥/외교/설득/접객 중 하나 1레벨 향상 + 경쟁자 1명 + 조력자 1명 획득</td></tr>
          <tr><td>11</td><td>권위 있는 귀족과 협력, 조력자가 됨. 지도력 1레벨 향상 또는 다음 진급 굴림 +4</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>노력이 제국에 인정받음. 자동 진급</td></tr>
        </tbody>
      </table>
    `},
    { title: '사고 표 (1D)', body: `
      <h3>귀족 — 사고 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>사고</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>심한 부상. 부상 표에서 2가 나온 것으로 간주 (또는 2회 굴려 낮은 결과 선택)</td></tr>
          <tr class="tsp-row-bad"><td>2</td><td>가문의 스캔들로 실각. 지위 -1</td></tr>
          <tr><td>3</td><td>재난/전쟁 발생. 은신 8+ 또는 기만 8+ — 성공: 부상 면함. 실패: 부상 표 굴림</td></tr>
          <tr><td>4</td><td>정치 공작으로 실각. 외교 또는 변호 1레벨 향상 + 경쟁자 1명 획득</td></tr>
          <tr><td>5</td><td>암살 시도. 인내 8+ — 실패 시 부상 표 굴림</td></tr>
          <tr><td>6</td><td>부상을 입음. 부상 표 굴림</td></tr>
        </tbody>
      </table>
    `},
    { title: '머스터아웃 (현금/물품)', body: `
      <h3>귀족 — 퇴직 소득 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현금</th><th>물품</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cr10,000</td><td>함선 지분</td></tr>
          <tr><td>2</td><td>Cr10,000</td><td>함선 지분 ×2</td></tr>
          <tr><td>3</td><td>Cr50,000</td><td>도검</td></tr>
          <tr><td>4</td><td>Cr50,000</td><td>지위 +1</td></tr>
          <tr><td>5</td><td>Cr100,000</td><td>여행자 지원 협회 가입</td></tr>
          <tr><td>6</td><td>Cr100,000</td><td>요트</td></tr>
          <tr><td>7</td><td>Cr200,000</td><td>지위 +1과 요트</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표(좌측)는 평생 최대 3회.</p>
    `},
  ]
});

// ══════════════════════════════════════════════════════
// 초능력자
// ══════════════════════════════════════════════════════
CAREER_TABLES.push({
  type: 'group',
  title: '초능력자',
  items: [
    { title: '개요·자격·진급', body: `
      <h3>초능력자</h3>
      <p>일반적인 생활 방식보다는 초능력의 가능성에 집중하기로 한 여행자들을 위한 경력입니다.</p>
      <table class="tsp-rules-table">
        <tbody>
          <tr><td><b>자격 굴림</b></td><td>초능력 6+ <span class="tsp-rules-note">(이전 경력 1개당 -1)</span></td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 생존·진급 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직종</th><th>생존 굴림</th><th>진급 굴림</th></tr></thead>
        <tbody>
          <tr><td>선천 능력자</td><td>지위 6+</td><td>지능 8+</td></tr>
          <tr><td>초상학자</td><td>교육 4+</td><td>교육 8+</td></tr>
          <tr><td>초능력 전사</td><td>인내 6+</td><td>인내 6+</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>선천 능력자</b>: 정식 훈련 없이 능력을 성장시킴</li>
        <li><b>초상학자</b>: 초능력을 연구하는 학자</li>
        <li><b>초능력 전사</b>: 전투 훈련과 초능력 전투를 병행</li>
      </ul>
      <p class="tsp-rules-note">
        제국법상 초능력은 불법이며 위험한 설정입니다. 초능력 특성치 = 2D − 경력 주기 횟수.
        시작 시 다른 경력의 기초 훈련 표는 받지 않습니다.
      </p>
    `},
    { title: '기능과 훈련 표', body: `
      <h3>초능력자 — 기능과 훈련 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>자기 개발</th><th>직무 관련</th><th>상급 교육 (교육 8+)</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>교육 +1</td><td>텔레파시</td><td>언어</td></tr>
          <tr><td>2</td><td>지능 +1</td><td>투시</td><td>예술</td></tr>
          <tr><td>3</td><td>근력 +1</td><td>염동력</td><td>전자기기</td></tr>
          <tr><td>4</td><td>민첩 +1</td><td>각성</td><td>의료</td></tr>
          <tr><td>5</td><td>인내 +1</td><td>순간이동</td><td>학문</td></tr>
          <tr><td>6</td><td>초능력 +1</td><td>아무 재능 하나</td><td>정비</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:14px">직종별 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>선천 능력자</th><th>초상학자</th><th>초능력 전사</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>텔레파시</td><td>텔레파시</td><td>텔레파시</td></tr>
          <tr><td>2</td><td>염동력</td><td>투시</td><td>각성</td></tr>
          <tr><td>3</td><td>기만</td><td>각성</td><td>순간이동</td></tr>
          <tr><td>4</td><td>은신</td><td>의료</td><td>사격</td></tr>
          <tr><td>5</td><td>세상물정</td><td>설득</td><td>진공복</td></tr>
          <tr><td>6</td><td>근접전 또는 사격</td><td>학문</td><td>경계</td></tr>
        </tbody>
      </table>
    `},
    { title: '직급과 혜택', body: `
      <h3>초능력자 — 직급과 혜택</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>직급</th><th>선천 능력자 (호칭)</th><th>혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>-</td><td>-</td></tr>
          <tr><td>1</td><td>생존자</td><td>생존 1 또는 세상물정 1</td></tr>
          <tr><td>2</td><td>-</td><td>-</td></tr>
          <tr><td>3</td><td>요술쟁이</td><td>기만 1</td></tr>
          <tr><td>4~6</td><td>-</td><td>-</td></tr>
        </tbody>
      </table>
      <table class="tsp-rules-table" style="margin-top:8px">
        <thead><tr><th>직급</th><th>초상학자 (호칭)</th><th>혜택</th><th>초능력 전사 (호칭)</th><th>혜택</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>-</td><td>-</td><td>초능력 병사</td><td>-</td></tr>
          <tr><td>1</td><td>입문자</td><td>학문(초상학) 1</td><td>-</td><td>사격(아무 전문분야) 1</td></tr>
          <tr><td>2</td><td>-</td><td>-</td><td>기사</td><td>지도력 1</td></tr>
          <tr><td>3</td><td>수행자</td><td>아무 재능 1</td><td>-</td><td>-</td></tr>
          <tr><td>4</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
          <tr><td>5</td><td>-</td><td>-</td><td>의지의 주인</td><td>전술(아무 전문분야) 1</td></tr>
          <tr><td>6</td><td>대가</td><td>아무 재능 1</td><td>-</td><td>-</td></tr>
        </tbody>
      </table>
    `},
    { title: '사건 표 (2D)', body: `
      <h3>초능력자 — 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>2</td><td>큰일이 났습니다! 사고 표 굴림 (경력을 그만둘 필요는 없음)</td></tr>
          <tr><td>3</td><td>초능력이 주변 사람들을 불편하게 함. 조력자/연줄 1명이 경쟁자가 됨</td></tr>
          <tr><td>4</td><td>몸과 마음을 수련. 운동(아무 전문분야) 1, 은신 1, 생존 1, 예술(아무 전문분야) 1 중 하나 획득</td></tr>
          <tr><td>5</td><td>초능력을 비윤리적으로 써서 지위 상승 기회. 이용 시 초능력 8+ — 성공: 소득 굴림 +1회 또는 지위+1. 실패: 지위 -1</td></tr>
          <tr><td>6</td><td>뜻밖의 연줄이 생김. 연줄 1명 획득</td></tr>
          <tr><td>7</td><td>생활 사건 발생. 생활 사건 표 굴림</td></tr>
          <tr><td>8</td><td>초능력이 더 높은 수준으로 성장. 초능력 특성치 +1</td></tr>
          <tr><td>9</td><td>전문 분야 고급 훈련. 교육 8+ 성공 시 다재다능 제외 아무 기능 1개 획득</td></tr>
          <tr><td>10</td><td>초능력을 통해 유용한 정보 입수. 아무 소득 굴림 +1 (1회)</td></tr>
          <tr><td>11</td><td>스승을 만남. 다음 진급 굴림(어느 경력에서든) +4</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>초능력의 새로운 경지에 도달. 자동 진급</td></tr>
        </tbody>
      </table>
    `},
    { title: '사고 표 (1D)', body: `
      <h3>초능력자 — 사고 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>사고</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>심한 부상. 부상 표에서 2가 나온 것으로 간주 (또는 2회 굴려 낮은 결과 선택)</td></tr>
          <tr class="tsp-row-bad"><td>2</td><td>위험한 존재와 텔레파시로 연결됨. 초능력 특성치 -1 + 끈질긴 악몽에 시달림</td></tr>
          <tr><td>3</td><td>초능력 반대 단체가 정체를 공개/공격. 1D: 1~2 부상표 굴림, 3~4 지위-1, 5~6 경력 종료(특별한 일 없음)</td></tr>
          <tr><td>4</td><td>비윤리적 사용 요구받음. 수락: 경력 계속하지만 적수 1명. 거부: 경력 종료</td></tr>
          <tr><td>5</td><td>기업/정부에 의해 실험당함. 탈출은 성공하지만 경력 종료</td></tr>
          <tr><td>6</td><td>초능력 때문에 조력자가 배신. 조력자/연줄 1명이 적수가 됨</td></tr>
        </tbody>
      </table>
    `},
    { title: '머스터아웃 (현금/물품)', body: `
      <h3>초능력자 — 퇴직 소득 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>현금</th><th>물품</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cr1,000</td><td>총기</td></tr>
          <tr><td>2</td><td>Cr2,000</td><td>함선 지분 ×2</td></tr>
          <tr><td>3</td><td>Cr4,000</td><td>연줄</td></tr>
          <tr><td>4</td><td>Cr4,000</td><td>여행자 지원 협회 가입</td></tr>
          <tr><td>5</td><td>Cr8,000</td><td>연줄</td></tr>
          <tr><td>6</td><td>Cr8,000</td><td>전투용 이식물</td></tr>
          <tr><td>7</td><td>Cr16,000</td><td>함선 지분 ×10</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표(좌측)는 평생 최대 3회.</p>
    `},
  ]
});
