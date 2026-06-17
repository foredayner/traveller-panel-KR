// tables-data-charmaking.mjs — 캐릭터메이킹 카테고리: 공통 표
// (경력별 표는 별도 파일에서 추가 예정)

export const CHARMAKING_TABLES = [
  {
    title: '경력 요약 표',
    body: `
      <h3>경력 요약 표</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>경력</th><th>직종</th><th>자격 굴림</th><th>생존 굴림</th></tr></thead>
        <tbody>
          <tr><td rowspan="3">귀족</td><td>(공통)</td><td>지위 10+</td><td>-</td></tr>
          <tr><td colspan="3" style="color:#6a9fd8">※ 별도 직종 구분 없음</td></tr>
          <tr><td colspan="3"></td></tr>
          <tr><td rowspan="3">무법자</td><td>도둑</td><td>지능 6+</td><td>민첩 6+</td></tr>
          <tr><td>폭력배</td><td>인내 6+</td><td>근력 6+</td></tr>
          <tr><td>해적</td><td>민첩 6+</td><td>지능 6+</td></tr>
          <tr><td rowspan="3">미디어 직군</td><td>예술가</td><td>지위 6+</td><td>지능 6+</td></tr>
          <tr><td>언론인</td><td>교육 7+</td><td>지능 5+</td></tr>
          <tr><td>공연자</td><td>지능 5+</td><td>민첩 7+</td></tr>
          <tr><td rowspan="3">방랑자</td><td>야만인</td><td>인내 7+</td><td>근력 7+</td></tr>
          <tr><td>떠돌이</td><td>인내 7+</td><td>지능 7+</td></tr>
          <tr><td>자원 수집가</td><td>민첩 7+</td><td>인내 7+</td></tr>
          <tr><td rowspan="3">상인</td><td>상선단</td><td>교육 5+</td><td>지능 7+</td></tr>
          <tr><td>자유 무역상</td><td>민첩 6+</td><td>지능 6+</td></tr>
          <tr><td>중개인</td><td>교육 5+</td><td>지능 7+</td></tr>
          <tr><td rowspan="3">시민</td><td>기업가</td><td>지위 6+</td><td>지능 6+</td></tr>
          <tr><td>노동자</td><td>인내 4+</td><td>교육 8+</td></tr>
          <tr><td>개척자</td><td>지능 7+</td><td>인내 5+</td></tr>
          <tr><td rowspan="3">요원</td><td>법 집행</td><td>인내 6+</td><td>지능 6+</td></tr>
          <tr><td>첩보원</td><td>지능 7+</td><td>지능 5+</td></tr>
          <tr><td>산업 스파이</td><td>지능 5+</td><td>지능 7+</td></tr>
          <tr><td rowspan="3">육군</td><td>지원대</td><td>인내 5+</td><td>교육 7+</td></tr>
          <tr><td>보병대</td><td>근력 6+</td><td>교육 6+</td></tr>
          <tr><td>기갑 부대</td><td>민첩 7+</td><td>지능 5+</td></tr>
          <tr><td rowspan="3">정찰 직군</td><td>운반원</td><td>인내 5+</td><td>교육 9+</td></tr>
          <tr><td>조사원</td><td>인내 6+</td><td>지능 8+</td></tr>
          <tr><td>탐험가</td><td>인내 7+</td><td>교육 7+</td></tr>
          <tr><td rowspan="3">학자</td><td>현장 연구원</td><td>인내 6+</td><td>지능 6+</td></tr>
          <tr><td>과학자</td><td>교육 4+</td><td>지능 8+</td></tr>
          <tr><td>의료인</td><td>교육 4+</td><td>교육 8+</td></tr>
          <tr><td rowspan="3">해군</td><td>전열 장교/선원</td><td>지능 5+</td><td>교육 7+</td></tr>
          <tr><td>기술병/포병</td><td>지능 6+</td><td>교육 6+</td></tr>
          <tr><td>비행사</td><td>민첩 7+</td><td>교육 5+</td></tr>
          <tr><td rowspan="3">해병</td><td>지원대</td><td>인내 5+</td><td>교육 7+</td></tr>
          <tr><td>우주 해병</td><td>인내 6+</td><td>교육 6+</td></tr>
          <tr><td>육전대</td><td>인내 7+</td><td>교육 5+</td></tr>
          <tr><td rowspan="3">공직자(정부)</td><td>공직자</td><td>지능 4+</td><td>교육 6+</td></tr>
          <tr><td>외교관</td><td>지능 5+</td><td>지위 7+</td></tr>
          <tr><td>딜레탕트</td><td>지위 5+</td><td>지능 7+</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">※ 자격 굴림 실패 시 → 징병 표 굴림 또는 방랑자 경력 시작</p>
    `
  },

  {
    title: '징병 표',
    body: `
      <h3>징병 표</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>경력(직종)</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>해군 (아무 직종)</td></tr>
          <tr><td>2</td><td>육군 (아무 직종)</td></tr>
          <tr><td>3</td><td>해병 (아무 직종)</td></tr>
          <tr><td>4</td><td>상인 (상선단)</td></tr>
          <tr><td>5</td><td>정찰 직군 (아무 직종)</td></tr>
          <tr><td>6</td><td>요원 (법 집행)</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">경력 자격 굴림에 실패하고 아직 징병된 적이 없다면, 이 표를 굴려 강제로 해당 경력에 입대합니다. 이미 한 번 징병되었다면 방랑자 경력을 시작해야 합니다.</p>
    `
  },

  {
    title: '생활 사건 표',
    body: `
      <h3>생활 사건 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>사건</th></tr></thead>
        <tbody>
          <tr><td>2</td><td>질병 또는 부상: 부상을 입거나 병에 걸립니다. 부상 표 굴림.</td></tr>
          <tr><td>3</td><td>출생 또는 사망: 가까운 사람이 사망하거나, 출산/탄생에 관계됩니다.</td></tr>
          <tr><td>4</td><td>연애의 끝: 하던 연애가 나쁘게 끝남. 경쟁자나 적수 1명 획득.</td></tr>
          <tr><td>5</td><td>연애의 발전: 연애가 깊어짐. 조력자 1명 획득.</td></tr>
          <tr><td>6</td><td>연애의 시작: 새 연애 시작. 조력자 1명 획득.</td></tr>
          <tr><td>7</td><td>새로운 연줄: 새 연줄 1명 획득.</td></tr>
          <tr><td>8</td><td>배신: 친구에게 배신당함. 연줄/조력자 중 1명을 경쟁자/적수로 전환 (없으면 새로 획득).</td></tr>
          <tr><td>9</td><td>여행: 다른 세계로 이주. 다음 자격 굴림 +2.</td></tr>
          <tr><td>10</td><td>행운: 좋은 일 발생. 다음 소득 굴림 1회 +2.</td></tr>
          <tr><td>11</td><td>범죄: 범죄 연루. 소득 굴림 1회 상실 또는 다음 주기 죄수 경력.</td></tr>
          <tr><td>12</td><td>기이한 사건: 1D 굴림 (아래 참조)</td></tr>
        </tbody>
      </table>
      <table class="tsp-rules-table" style="margin-top:8px">
        <thead><tr><th>1D</th><th>기이한 사건</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>초능력: 초능력자 단체와 접촉. 초능력 검사 가능.</td></tr>
          <tr><td>2</td><td>외계인: 외계 종족과 시간을 보냄. 학문 1 + 외계 종족 연줄 1명.</td></tr>
          <tr><td>3</td><td>외계 유물: 특이한 외계 장치 획득.</td></tr>
          <tr><td>4</td><td>기억상실: 무슨 일이 있었지만 기억나지 않음.</td></tr>
          <tr><td>5</td><td>정부 접촉: 제국 최상층부와 잠시 접촉.</td></tr>
          <tr><td>6</td><td>고대 기술: 인류보다 오래된 무언가를 획득.</td></tr>
        </tbody>
      </table>
    `
  },

  {
    title: '부상 표',
    body: `
      <h3>부상 표 (1D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>1D</th><th>부상</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>1</td><td>빈사 — 신체 특성치 1개를 1D만큼, 다른 신체 특성치 2개를 각 2만큼 낮춤</td></tr>
          <tr class="tsp-row-bad"><td>2</td><td>극심한 부상 — 신체 특성치 1개를 1D만큼 낮춤</td></tr>
          <tr class="tsp-row-bad"><td>3</td><td>눈·팔·다리 상실 — 근력 또는 민첩을 2 낮춤</td></tr>
          <tr class="tsp-row-bad"><td>4</td><td>중상 — 신체 특성치 1개를 2 낮춤</td></tr>
          <tr><td>5</td><td>부상 — 신체 특성치 1개를 1 낮춤</td></tr>
          <tr class="tsp-row-good"><td>6</td><td>경상 — 특성치 영향 없음</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">의료 서비스: 상실한 특성치 1점당 Cr5000으로 회복 가능</p>
    `
  },

  {
    title: '노화 표',
    body: `
      <h3>노화 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D 결과</th><th>노화의 영향</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>-6</td><td>신체 특성치 3개를 각 2만큼, 정신 특성치 1개를 1만큼 낮춤</td></tr>
          <tr class="tsp-row-critical-fail"><td>-5</td><td>신체 특성치 3개를 각 2만큼 낮춤</td></tr>
          <tr class="tsp-row-bad"><td>-4</td><td>신체 특성치 2개를 각 2만큼, 1개를 1만큼 낮춤</td></tr>
          <tr class="tsp-row-bad"><td>-3</td><td>신체 특성치 1개를 2만큼, 2개를 각 1만큼 낮춤</td></tr>
          <tr class="tsp-row-bad"><td>-2</td><td>신체 특성치 3개를 각 1만큼 낮춤</td></tr>
          <tr class="tsp-row-bad"><td>-1</td><td>신체 특성치 2개를 각 1만큼 낮춤</td></tr>
          <tr><td>0</td><td>신체 특성치 1개를 1만큼 낮춤</td></tr>
          <tr class="tsp-row-good"><td>1 이상</td><td>영향 없음</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">
        4번째 경력 주기 종료 시점부터 매 주기 종료 시 굴림. 지금까지 수행한 경력 주기 수만큼 수정치 페널티.
        낮출 특성치는 본인이 선택. 특성치가 0이 되면 노환으로 사망 위험 (의료 처치 없이는 사망).
      </p>
    `
  },

  {
    title: '연금 표',
    body: `
      <h3>연금 표</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>최종 직급(계급) 도달 주기</th><th>연금</th></tr></thead>
        <tbody>
          <tr><td>5</td><td>Cr10,000 / 년</td></tr>
          <tr><td>6</td><td>Cr12,000 / 년</td></tr>
          <tr><td>7</td><td>Cr14,000 / 년</td></tr>
          <tr><td>8</td><td>Cr16,000 / 년</td></tr>
          <tr><td>9 이상</td><td>8주기 이후 1주기당 +Cr2,000</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">정찰 직군·무법자·죄수·방랑자를 제외한 경력을 5주기 이상 수행 후 퇴직 시 적용. A·B급 우주항에서 매년 초 수령.</p>
    `
  },

  {
    title: '직급별 추가 소득 굴림',
    body: `
      <h3>직급별 추가 소득 굴림</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>도달한 최고 직급</th><th>추가 소득 굴림</th></tr></thead>
        <tbody>
          <tr><td>1~2</td><td>+1회</td></tr>
          <tr><td>3~4</td><td>+2회</td></tr>
          <tr><td>5~6</td><td>+3회, 이 경력의 모든 소득 굴림에 수정치 +1</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">현금 표 굴림은 평생 최대 3회까지만 가능. 도박 기능 1 이상 보유 시 현금 표 굴림에 +1.</p>
    `
  },
];

// ── 추가: 보수 미비 표 ────────────────────────────────────
CHARMAKING_TABLES.push({
  title: '보수 미비 표',
  body: `
    <h3>보수 미비 표 (2D + 미보수 개월 수)</h3>
    <div class="tsp-rules-formula">2D + 보수하지 못한 개월 수 → 8+ 이면 치명적 문제</div>
    <table class="tsp-rules-table">
      <thead><tr><th>2D+수정치</th><th>효과</th></tr></thead>
      <tbody>
        <tr><td>2~4</td><td>연료 누출 — 전체 연료 용량의 1D×10% 소실</td></tr>
        <tr class="tsp-row-bad"><td>5~7</td><td>드라이브 손상 — 1D 굴림: 1~3 기동 드라이브(추진력-1, 우주비행 -1), 4~6 점프 드라이브(수리 전까지 점프 불가)</td></tr>
        <tr class="tsp-row-bad"><td>8~9</td><td>무기 고장 — 무작위 포탑(없으면 무기) 손상, 모든 공격 굴림 -1</td></tr>
        <tr class="tsp-row-critical-fail"><td>10~12</td><td>동력부 손상 — 동력 25% 감소, 선체 1D점 피해(장갑 무시), 탑승자 매주 2D×10래드 방사선 노출</td></tr>
      </tbody>
    </table>
    <p class="tsp-rules-note">정기 보수 미비 시 매달 2D 굴림 (+ 미보수 개월 수). 8+ 이면 이 표 적용.</p>
  `
});
