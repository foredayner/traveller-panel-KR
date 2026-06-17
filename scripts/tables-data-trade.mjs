// tables-data-trade.mjs — 세계·무역 카테고리

export const TRADE_TABLES = [

  {
    title: '문화 차이 표 (D66)',
    body: `
      <h3>문화 차이 표 (D66)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>D66</th><th>문화</th></tr></thead>
        <tbody>
          <tr><td>11</td><td><b>성차별</b> — 한 성별이 다른 성별보다 중요하지 않거나 열등하다고 여김</td></tr>
          <tr><td>12</td><td><b>종교적</b> — 종교/신앙의 영향력이 강함. 이 세계만의 종교일 수도 있음</td></tr>
          <tr><td>13</td><td><b>예술적</b> — 예술과 문화를 매우 가치 있게 여김. 모든 인공물에 심미성 중시</td></tr>
          <tr><td>14</td><td><b>의식적</b> — 사회적 상호작용과 무역이 매우 형식적. 예절·전통을 중시</td></tr>
          <tr><td>15</td><td><b>보수적</b> — 변화와 외부 영향을 반대함</td></tr>
          <tr><td>16</td><td><b>배타적</b> — 외부인과 외계의 영향력을 불신. 다른 세계 방문자에게 편견</td></tr>
          <tr><td>21</td><td><b>금기</b> — 특정 주제가 금지되어 언급조차 불가. 실수로 언급 시 배척당함</td></tr>
          <tr><td>22</td><td><b>기만적</b> — 속임수와 모호한 표현이 정당함. 정직 = 나약함으로 간주</td></tr>
          <tr><td>23</td><td><b>자유주의</b> — 변화와 외부 영향을 반김. 새롭고 낯선 관념 환영</td></tr>
          <tr><td>24</td><td><b>명예 중시</b> — 언제나 진실만 말함. 거짓말하는 자는 매우 드물고 경멸받음</td></tr>
          <tr><td>25</td><td><b>영향 받음</b> — 이웃 세계에 큰 영향을 받음. 재굴림하여 영향을 준 세계의 문화 결정</td></tr>
          <tr><td>26</td><td><b>혼합</b> — 두 가지 문화가 섞임. 두 번 재굴림 (공존 불가 시 "분열된" 문화)</td></tr>
          <tr><td>31</td><td><b>야만적</b> — 육체적 강함과 전투력을 가치 있게 여김. 스포츠는 폭력적·유혈적</td></tr>
          <tr><td>32</td><td><b>잔재</b> — 융성했던 문명의 몰락 후 잔재. 폐허가 가득하고 옛 시절을 그리워함</td></tr>
          <tr><td>33</td><td><b>몰락 과정</b> — 문화가 퇴보 중. 전쟁/경제 붕괴 직전. 폭력 시위 빈번</td></tr>
          <tr><td>34</td><td><b>발전 과정</b> — 번영하며 팽창 중. 무역 이익 막대, 과학 진보</td></tr>
          <tr><td>35</td><td><b>회복 과정</b> — 최근 전염병/전쟁/재난/독재 정권으로 타격받은 적 있음</td></tr>
          <tr><td>36</td><td><b>중심지</b> — 다양한 문화·종족 출신 방문자들이 찾아옴</td></tr>
          <tr><td>41</td><td><b>관광 명소</b> — 문화/세계의 어떤 요소가 우주 전역의 관광객을 끌어모음</td></tr>
          <tr><td>42</td><td><b>폭력적</b> — 물리적 갈등이 빈번. 결투/난투가 일상. 결투 재판이 사법체계 일부</td></tr>
          <tr><td>43</td><td><b>평화적</b> — 물리적 갈등 거의 없음. 군인 적음, 외교 중시. 강압적 행동 시 배척</td></tr>
          <tr><td>44</td><td><b>강박적</b> — 모든 사람이 약물/성격/행동/물건에 집착·중독. 문화 전반에 스며듦</td></tr>
          <tr><td>45</td><td><b>복식 중시</b> — 고급 옷과 장식이 매우 중요. 복장 미달 시 인정받지 못함</td></tr>
          <tr><td>46</td><td><b>전쟁 중</b> — 다른 세계/정치체제와 전쟁 중이거나 테러·반란이 활발</td></tr>
          <tr><td>51</td><td><b>특이한 관습: 외계인</b> — 신화/신앙에서 우주 여행자가 특별한 위치. 특정 행동을 기대함</td></tr>
          <tr><td>52</td><td><b>특이한 관습: 우주항</b> — 우주항이 상업 이상의 의미. 신성한 사원이거나 시위 대상</td></tr>
          <tr><td>53</td><td><b>특이한 관습: 미디어</b> — 뉴스·통신 수단이 특이. 정확한 정보 획득이 어려울 수 있음</td></tr>
          <tr><td>54</td><td><b>특이한 관습: 기술</b> — 기술 이용 방식이 특이 (통신 금지, 로봇 인권, 사이보그 물건 취급 등)</td></tr>
          <tr><td>55</td><td><b>특이한 관습: 생애 주기</b> — 특정 나이에 삶을 중단하거나 아나가식스 보편 사용 등</td></tr>
          <tr><td>56</td><td><b>특이한 관습: 지위</b> — 수직적 계급 질서 확고. 부적절한 행동 시 처벌</td></tr>
          <tr><td>61</td><td><b>특이한 관습: 무역</b> — 상업 활동에 특이한 관습 (필수 선물, 특정 가문 독점 거래 등)</td></tr>
          <tr><td>62</td><td><b>특이한 관습: 귀족</b> — 상류층에 특이한 관습 (시력 제거, 호화로운 구속, 1년 임기 후 추방 등)</td></tr>
          <tr><td>63</td><td><b>특이한 관습: 성</b> — 성/생식에 특이한 관습 (복제 기술이 출산 대체, 거래 후 성관계 등)</td></tr>
          <tr><td>64</td><td><b>특이한 관습: 식사</b> — 식사가 특이한 위치 (식사를 사생활로 여기거나, 연회를 극진한 예의로)</td></tr>
          <tr><td>65</td><td><b>특이한 관습: 여행</b> — 여행자를 불신 또는 환대. 고향을 떠나는 자를 경멸하는 문화일 수도</td></tr>
          <tr><td>66</td><td><b>특이한 관습: 음모</b> — 수상한 일이 진행 중. 다른 집단이 정부 전복을 시도 중</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">한 세계는 여러 문화 특성을 동시에 가질 수 있습니다. 법규 수준은 2D-7+정부 특성치로 결정하며, 무기·약물·정보에 대한 정부의 태도에 영향을 줍니다.</p>
    `
  },

  {
    title: '기술 수준 표',
    body: `
      <h3>기술 수준 표</h3>
      <p>세계의 기술 수준(TL) = 1D + 아래 수정치 합산</p>
      <table class="tsp-rules-table">
        <thead><tr><th>특성치</th><th>우주항</th><th>크기</th><th>대기</th><th>해양</th><th>인구</th><th>정부</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>+2</td><td>+1</td><td>+1</td><td></td><td>+1</td><td></td></tr>
          <tr><td>1</td><td>+2</td><td></td><td>+1</td><td></td><td>+1</td><td></td></tr>
          <tr><td>2</td><td>+1</td><td></td><td>+1</td><td></td><td>+1</td><td></td></tr>
          <tr><td>3</td><td>+1</td><td></td><td>+1</td><td></td><td>+1</td><td></td></tr>
          <tr><td>4</td><td></td><td>+1</td><td></td><td></td><td>+1</td><td></td></tr>
          <tr><td>5</td><td></td><td>+1</td><td></td><td></td><td>+1</td><td></td></tr>
          <tr><td>6</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>7</td><td></td><td></td><td></td><td></td><td>+2</td><td></td></tr>
          <tr><td>8</td><td></td><td></td><td></td><td></td><td>+1</td><td></td></tr>
          <tr><td>9</td><td></td><td></td><td>+1</td><td></td><td>+2</td><td></td></tr>
          <tr><td>10(A)</td><td>+6</td><td></td><td>+1</td><td></td><td>+2</td><td>+4</td></tr>
          <tr><td>11(B)</td><td>+4</td><td></td><td>+1</td><td></td><td></td><td></td></tr>
          <tr><td>12(C)</td><td>+2</td><td></td><td>+1</td><td></td><td></td><td></td></tr>
          <tr><td>13(D)</td><td>+1</td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>14(E)</td><td>+1</td><td></td><td></td><td></td><td>-2</td><td></td></tr>
          <tr><td>15(F)</td><td>+1</td><td></td><td></td><td></td><td>-2</td><td></td></tr>
          <tr><td>X</td><td>-4</td><td></td><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">우주항 X(없음)는 -4. 기술 수준은 생산·수리 능력의 기준. 부유한 개인·정부는 세계 TL보다 1~2 높은 물품 사용 가능.</p>
      <table class="tsp-rules-table" style="margin-top:8px">
        <thead><tr><th>대기 특성치</th><th>최소 기술 수준 (거주 가능)</th></tr></thead>
        <tbody>
          <tr><td>0~1</td><td>8</td></tr>
          <tr><td>2~3</td><td>5</td></tr>
          <tr><td>4, 7, 9</td><td>3</td></tr>
          <tr><td>10(A)</td><td>8</td></tr>
          <tr><td>11(B)</td><td>9</td></tr>
          <tr><td>12(C)</td><td>10</td></tr>
          <tr><td>13~14(D~E)</td><td>5</td></tr>
          <tr><td>15(F)</td><td>8</td></tr>
        </tbody>
      </table>
    `
  },

  {
    title: '무역 특성 표',
    body: `
      <h3>무역 특성 표</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>분류</th><th>약자</th><th>크기</th><th>대기</th><th>해양</th><th>인구</th><th>정부</th><th>비고</th></tr></thead>
        <tbody>
          <tr><td>기술 우수 (High Tech)</td><td>Ht</td><td colspan="4"></td><td colspan="2">TL 12+</td></tr>
          <tr><td>기술 미비 (Low Tech)</td><td>Lt</td><td colspan="4"></td><td colspan="2">TL 5-</td></tr>
          <tr><td>녹지 (Garden)</td><td>Ga</td><td>6~8</td><td>5,6,8</td><td>5~7</td><td colspan="3"></td></tr>
          <tr><td>농업 (Agricultural)</td><td>Ag</td><td></td><td>4~9</td><td>4~8</td><td>5~7</td><td colspan="2"></td></tr>
          <tr><td>부유함 (Rich)</td><td>Ri</td><td></td><td>6,8</td><td></td><td>6~8</td><td>4~9</td><td></td></tr>
          <tr><td>비농업 (Non-Agricultural)</td><td>Na</td><td></td><td>0~3</td><td>0~3</td><td>6+</td><td colspan="2"></td></tr>
          <tr><td>비산업 (Non-Industrial)</td><td>NI</td><td></td><td></td><td></td><td>4~6</td><td colspan="2"></td></tr>
          <tr><td>빙원 (Ice-Capped)</td><td>Ic</td><td></td><td>0~1</td><td>1+</td><td colspan="3"></td></tr>
          <tr><td>빈곤함 (Poor)</td><td>Po</td><td></td><td>2~5</td><td>0~3</td><td colspan="3"></td></tr>
          <tr><td>사막 (Desert)</td><td>De</td><td></td><td>2~9</td><td>0</td><td colspan="3"></td></tr>
          <tr><td>산업 (Industrial)</td><td>In</td><td></td><td>0~2,4,7,9~12</td><td></td><td>9+</td><td colspan="2"></td></tr>
          <tr><td>소행성 (Asteroids)</td><td>As</td><td>0</td><td>0</td><td>0</td><td colspan="3"></td></tr>
          <tr><td>수상 세계 (Water World)</td><td>Wa</td><td></td><td>3~9,13+</td><td>10+</td><td colspan="3"></td></tr>
          <tr><td>인구 많음 (High Population)</td><td>Hi</td><td colspan="3"></td><td>9+</td><td colspan="2"></td></tr>
          <tr><td>인구 적음 (Low Population)</td><td>Lo</td><td colspan="3"></td><td>3-</td><td colspan="2"></td></tr>
          <tr><td>진공 (Vacuum)</td><td>Va</td><td></td><td>0</td><td colspan="4"></td></tr>
          <tr><td>특이 해양 (Fluid Oceans)</td><td>Fl</td><td></td><td>10+</td><td>1+</td><td colspan="3"></td></tr>
          <tr><td>황무지 (Barren)</td><td>Ba</td><td>0</td><td>0</td><td>0</td><td colspan="3"></td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">세계가 해당 특성치 범위를 충족하면 그 무역 특성을 갖습니다 (중복 가능). 무역 특성은 무역품의 구매/판매 수정치 계산에 사용됩니다.</p>
      <h3 style="margin-top:14px">무역 특성 설명</h3>
      <ul class="tsp-rules-list-ul">
        <li><b>기술 미비</b>: 산업화 전, 첨단 물품 생산 불가</li>
        <li><b>기술 우수</b>: 가장 발전된 기술 보유</li>
        <li><b>녹지</b>: 지구와 유사한 환경</li>
        <li><b>농업</b>: 농경·식품 생산 주력, 봉건 영지 형태가 흔함</li>
        <li><b>부유함</b>: 안정적 정부 + 자생적 생물권, 경제력 상당</li>
        <li><b>비농업</b>: 너무 건조/척박하여 식량 자급 불가</li>
        <li><b>비산업</b>: 인구 부족으로 대규모 산업 불가</li>
        <li><b>빈곤함</b>: 자원·인구 부족, 변방 개척지 수준</li>
        <li><b>빙원</b>: 춥고 건조, 표면 액체 대부분 빙상</li>
        <li><b>사막</b>: 거주 어려운 건조 세계</li>
        <li><b>산업</b>: 공장과 도시가 많음</li>
        <li><b>소행성</b>: 광물 채굴 개척지 또는 궤도 공장</li>
        <li><b>수상 세계</b>: 표면 거의 전부 바다</li>
        <li><b>인구 많음</b>: 수십억 명 이상</li>
        <li><b>인구 적음</b>: 수천 명 이하</li>
        <li><b>진공</b>: 대기 없음</li>
        <li><b>특이 해양</b>: 표면 액체가 물이 아님 (지구 생물 거주 불가)</li>
        <li><b>황무지</b>: 개척되지 않은 황폐한 세계</li>
      </ul>
    `
  },

  {
    title: '무역품 표 (D66)',
    body: `
      <h3>무역품 표 (D66)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>D66</th><th>품목</th><th>기본가</th><th>물량</th><th>비고</th></tr></thead>
        <tbody>
          <tr><td>11</td><td>일반 전자 기기</td><td>Cr20,000</td><td>2D×10톤</td><td></td></tr>
          <tr><td>12</td><td>일반 기계 부품</td><td>Cr10,000</td><td>2D×10톤</td><td></td></tr>
          <tr><td>13</td><td>일반 공산품</td><td>Cr20,000</td><td>2D×10톤</td><td></td></tr>
          <tr><td>14</td><td>일반 원자재</td><td>Cr5,000</td><td>2D×20톤</td><td></td></tr>
          <tr><td>15</td><td>일반 소비재</td><td>Cr500</td><td>2D×20톤</td><td></td></tr>
          <tr><td>16</td><td>일반 광석</td><td>Cr1,000</td><td>2D×20톤</td><td></td></tr>
          <tr><td>21</td><td>첨단 전자 기기</td><td>Cr100,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>22</td><td>첨단 기계 부품</td><td>Cr75,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>23</td><td>첨단 공산품</td><td>Cr100,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>24</td><td>첨단 무기</td><td>Cr150,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>25</td><td>첨단 탑승물</td><td>Cr180,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>26</td><td>생화학 물품</td><td>Cr150,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>31</td><td>화학 물질</td><td>Cr5,000</td><td>2D×10톤</td><td></td></tr>
          <tr><td>32</td><td>의류</td><td>Cr1,000</td><td>2D×10톤</td><td></td></tr>
          <tr><td>33</td><td>컴퓨터</td><td>Cr150,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>34</td><td>전자 부품</td><td>Cr60,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>35</td><td>금속 광물</td><td>Cr200,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>36</td><td>식품</td><td>Cr6,000</td><td>2D×10톤</td><td></td></tr>
          <tr><td>41</td><td>지질 광물</td><td>Cr20,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>42</td><td>냉동 식품</td><td>Cr10,000</td><td>2D×10톤</td><td></td></tr>
          <tr><td>43</td><td>사치품</td><td>Cr150,000</td><td>1D×10톤</td><td></td></tr>
          <tr><td>44</td><td>약품</td><td>Cr50,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>45</td><td>로봇</td><td>Cr400,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>46</td><td>기생충 구제제</td><td>Cr10,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>51</td><td>식물</td><td>Cr10,000</td><td>2D×10톤</td><td></td></tr>
          <tr><td>52</td><td>폴리머</td><td>Cr7,000</td><td>2D×10톤</td><td></td></tr>
          <tr><td>53</td><td>방사성 물질</td><td>Cr1,000,000</td><td>1D×5톤</td><td></td></tr>
          <tr><td>54</td><td>연료</td><td>Cr500</td><td>2D×10톤</td><td></td></tr>
          <tr><td>55</td><td>낙농 가축류</td><td>Cr1,000</td><td>2D×10톤</td><td></td></tr>
          <tr><td>56</td><td>목재</td><td>Cr2,000</td><td>2D×10톤</td><td></td></tr>
          <tr class="tsp-row-bad"><td>61</td><td>불법 생화학 물품</td><td>Cr50,000</td><td>1D×5톤</td><td>불법</td></tr>
          <tr class="tsp-row-bad"><td>62</td><td>불법 사이버네틱스</td><td>Cr250,000</td><td>1D톤</td><td>불법</td></tr>
          <tr class="tsp-row-bad"><td>63</td><td>불법 약물</td><td>Cr100,000</td><td>1D톤</td><td>불법</td></tr>
          <tr class="tsp-row-bad"><td>64</td><td>불법 사치품</td><td>Cr50,000</td><td>1D톤</td><td>불법</td></tr>
          <tr class="tsp-row-bad"><td>65</td><td>불법 무기</td><td>Cr150,000</td><td>1D×5톤</td><td>불법</td></tr>
          <tr class="tsp-row-bad"><td>66</td><td>특이 물품</td><td>Cr1,000,000</td><td>1D톤</td><td>불법</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">
        물량 굴림: 인구 특성치 ≤3 → -3 / 인구 특성치 ≥9 → +3 (0 이하면 재고 없음)<br>
        61~65(불법 물품)는 암시장이 아닌 일반 거래에서 굴렸을 경우 재굴림.<br>
        구매가/판매가는 가격 보정 표(중개 판정 결과)에 따라 기본가의 백분율로 계산.<br>
        상세 구매/판매 수정치(무역 특성별)는 「교역」 탭의 투기 무역 화면에서 자동 계산됩니다.
      </p>
    `
  },
];

// ── 추가: 우주항 등급 / 정부 형태 / 법규 수준 ──────────────
TRADE_TABLES.push({
  title: '우주항 등급 표',
  body: `
    <h3>우주항 등급 표 (2D)</h3>
    <table class="tsp-rules-table">
      <thead><tr><th>2D+수정치</th><th>등급</th></tr></thead>
      <tbody>
        <tr><td>2 이하</td><td>X</td></tr>
        <tr><td>3</td><td>E</td></tr>
        <tr><td>4</td><td>E</td></tr>
        <tr><td>5</td><td>D</td></tr>
        <tr><td>6</td><td>D</td></tr>
        <tr><td>7</td><td>C</td></tr>
        <tr><td>8</td><td>C</td></tr>
        <tr><td>9</td><td>B</td></tr>
        <tr><td>10</td><td>B</td></tr>
        <tr><td>11 이상</td><td>A</td></tr>
      </tbody>
    </table>
    <p class="tsp-rules-note">
      인구 8~9: +1 / 인구 10 이상: +2 / 인구 3~4: -1 / 인구 2 이하: -2
    </p>
    <table class="tsp-rules-table" style="margin-top:8px">
      <thead><tr><th>등급</th><th>수준</th><th>정박 요금</th><th>연료</th><th>시설</th><th>기지 (2D 결과 ≥)</th></tr></thead>
      <tbody>
        <tr><td>A</td><td>훌륭함</td><td>1D×Cr1000</td><td>정제 연료</td><td>조선소(전종류)·수리·상부항(6+)</td><td>육군8 / 해군8 / 정찰10</td></tr>
        <tr><td>B</td><td>좋음</td><td>1D×Cr500</td><td>정제 연료</td><td>조선소(성계선)·수리·상부항(8+)</td><td>육군8 / 해군8 / 정찰9</td></tr>
        <tr><td>C</td><td>평범</td><td>1D×Cr100</td><td>비정제 연료</td><td>조선소(소형선)·수리·상부항(10+)</td><td>육군8 / 정찰9</td></tr>
        <tr><td>D</td><td>나쁨</td><td>1D×Cr10</td><td>비정제 연료</td><td>간이 정비소·상부항(12+)</td><td>정찰8 / 해적기지12</td></tr>
        <tr><td>E</td><td>변방</td><td>0</td><td>없음</td><td>없음</td><td>해적기지10</td></tr>
        <tr><td>X</td><td>우주항 없음</td><td>0</td><td>없음</td><td>없음</td><td>해적기지10</td></tr>
      </tbody>
    </table>
    <p class="tsp-rules-note">
      상부항 존재: TL9~11 → +1, 인구9+ → +1, 인구6- → -1 (2D 판정)<br>
      해적기지 존재: 법규수준0 → +2, 법규수준2+ → -2<br>
      정제연료 Cr500/톤, 비정제연료 Cr100/톤 (비정제는 점프 시 위험).<br>
      우주항은 치외법권 — 우주항 내 법규는 제국법(법규수준1 수준 물품규제 + 초능력 전면금지) 적용.
    </p>
  `
});

TRADE_TABLES.push({
  title: '정부 형태 표',
  body: `
    <h3>정부 형태 표</h3>
    <table class="tsp-rules-table">
      <thead><tr><th>특성치</th><th>정부 유형</th><th>설명</th><th>일반적 금지 물품</th></tr></thead>
      <tbody>
        <tr><td>0</td><td>없음</td><td>정부 체제가 없음. 혈연 중시 (가족·가문·무정부주의)</td><td>없음</td></tr>
        <tr><td>1</td><td>회사/기업</td><td>회사 관리자가 통치, 주민은 직원/피부양자 (기업 출장소·소행성 광산)</td><td>무기, 약물, 여행자</td></tr>
        <tr><td>2</td><td>직접 민주주의</td><td>주민이 직접 조언·합의 (집단 농장·부족 의회)</td><td>약물</td></tr>
        <tr><td>3</td><td>자생적 과두정</td><td>한정된 소수가 통치 (금권정치·세습 통치계급)</td><td>기술, 무기, 여행자</td></tr>
        <tr><td>4</td><td>대의 민주주의</td><td>선출된 대표자가 통치 (공화국·민주주의)</td><td>약물, 무기, 초능력</td></tr>
        <tr><td>5</td><td>봉건적 기술 관료제</td><td>상호이득 기술활동 동의자가 통치, 높은 기술=높은 지위</td><td>기술, 무기, 컴퓨터</td></tr>
        <tr><td>6</td><td>괴뢰 정부</td><td>외부 세력이 선택한 지도자 (식민지·정복지)</td><td>기술, 무기, 여행자</td></tr>
        <tr><td>7</td><td>분열 상태</td><td>중앙권력 없음, 복수 정치체제 경쟁. 법규수준은 우주항 인접 체제 기준</td><td>다양</td></tr>
        <tr><td>8</td><td>행정 관료제</td><td>전문 능력 갖춘 정부기관 고용인이 통치 (기술관료제·공산주의)</td><td>약물, 무기</td></tr>
        <tr><td>9</td><td>비인간적 관료제</td><td>피지배층과 단절된 기관이 통치 (견고한 관료계급·쇠락한 제국)</td><td>기술,무기,약물,여행자,초능력</td></tr>
        <tr><td>10(A)</td><td>카리스마적 독재자</td><td>압도적 지지를 받는 지도자 1명 (혁명영웅·구세주·황제)</td><td>없음</td></tr>
        <tr><td>11(B)</td><td>카리스마 없는 지도자</td><td>독재자 이후 일반적 방식으로 교체 (군부독재·세습왕정)</td><td>기술, 무기, 컴퓨터</td></tr>
        <tr><td>12(C)</td><td>카리스마적 과두정</td><td>지지받는 단체/계급이 선택한 구성원 통치 (군사정권·혁명의회)</td><td>무기</td></tr>
        <tr><td>13(D)</td><td>종교 정권</td><td>개인 욕구 무시하는 종교단체 통치 (광신적 교단·초능력자 집단)</td><td>다양</td></tr>
        <tr><td>14(E)</td><td>종교 독재</td><td>종교 지도자 1명 절대권력 (구세주)</td><td>다양</td></tr>
        <tr><td>15(F)</td><td>전체주의 과두정</td><td>절대권력 소수가 전세계 억압 (세계교단·무자비한 기업)</td><td>다양</td></tr>
      </tbody>
    </table>
  `
});

TRADE_TABLES.push({
  title: '법규 수준 표',
  body: `
    <h3>법규 수준</h3>
    <div class="tsp-rules-formula">법규 수준 = 2D − 7 + 정부 특성치</div>
    <p>법규 수준이 높을수록 여행자에게 더 많은 제약이 적용됩니다.</p>

    <h3 style="margin-top:14px">물품 규제 — 법규 수준 임계값 (이 수준부터 금지)</h3>
    <table class="tsp-rules-table">
      <thead><tr><th>법규 수준</th><th>금지 시작 물품</th></tr></thead>
      <tbody>
        <tr><td>0</td><td>전투용 약물, 휴대용 핵무기</td></tr>
        <tr><td>1</td><td>전투복, 군용 무기, 신체 강화 약물</td></tr>
        <tr><td>2</td><td>레이저 무기, 동력 장갑</td></tr>
        <tr><td>3</td><td>고에너지 휴대 무기 일체</td></tr>
        <tr><td>4</td><td>경 어쌀트 무기, 일반 무기류</td></tr>
        <tr><td>5</td><td>개인 방어구(투구류 제외)</td></tr>
        <tr><td>6</td><td>은닉 무기, 전자 장비 일부</td></tr>
        <tr><td>7</td><td>화기(권총 포함)</td></tr>
        <tr><td>8</td><td>휴대용 무기 전반</td></tr>
        <tr><td>9</td><td>무기 소지 자체</td></tr>
      </tbody>
    </table>
    <p class="tsp-rules-note">위 값은 예시 가이드입니다. 실제 적용 시 현지 법규수준에서 해당 물품의 금지 법규수준을 뺀 값이 처벌 수정치가 됩니다.</p>

    <h3 style="margin-top:14px">법 집행 대응 판정</h3>
    <table class="tsp-rules-table">
      <thead><tr><th>상황</th><th>수정치</th><th>대응</th></tr></thead>
      <tbody>
        <tr><td>세계에 처음 접근</td><td>+0</td><td>검사</td></tr>
        <tr><td>외부인이 길거리를 다님 (1일1회)</td><td>+0</td><td>검사</td></tr>
        <tr><td>외부인의 수상한 행동</td><td>-1</td><td>검사</td></tr>
        <tr><td>술집 다툼</td><td>-1</td><td>체포</td></tr>
        <tr><td>총기 발사</td><td>-2</td><td>체포</td></tr>
        <tr><td>무단 침입</td><td>-2</td><td>수사</td></tr>
        <tr><td>장갑복+군용무기로 총격전</td><td>-4</td><td>체포</td></tr>
        <tr><td>살인 및 학살</td><td>-4</td><td>수사</td></tr>
      </tbody>
    </table>
    <p class="tsp-rules-note">결과 ≤ 법규수준이면 조사/체포 대상이 됨. 검사=신원확인(행정/세상물정 판정으로 회피 가능), 수사=정밀조사·수색·심문, 체포=무력 동원.</p>

    <h3 style="margin-top:14px">범죄별 처벌 수정치</h3>
    <table class="tsp-rules-table">
      <thead><tr><th>범죄</th><th>수정치</th></tr></thead>
      <tbody>
        <tr><td>폭행</td><td>법규수준 -2</td></tr>
        <tr><td>재물 손괴</td><td>법규수준 -3</td></tr>
        <tr><td>신원 위조</td><td>법규수준 -5</td></tr>
        <tr><td>과실 치사</td><td>법규수준 -1</td></tr>
        <tr><td>살인</td><td>법규수준 +0</td></tr>
        <tr><td>밀수(금지물품)</td><td>현지법규수준 - 해당물품 금지시작수준</td></tr>
      </tbody>
    </table>
    <p class="tsp-rules-note">변호 기능 보유 시 변호 판정 달성도만큼 처벌 수정치 감소 가능.</p>

    <h3 style="margin-top:14px">처벌 표 (2D+수정치)</h3>
    <table class="tsp-rules-table">
      <thead><tr><th>2D+수정치</th><th>처벌</th></tr></thead>
      <tbody>
        <tr><td>0 이하</td><td>석방 또는 훈방</td></tr>
        <tr><td>1~2</td><td>벌금 1D×Cr1,000 (밀수품은 톤당)</td></tr>
        <tr><td>3~4</td><td>벌금 2D×Cr5,000 (밀수품은 톤당)</td></tr>
        <tr><td>5~6</td><td>추방 또는 벌금 2D×Cr10,000 (밀수품 톤당)</td></tr>
        <tr><td>7~8</td><td>징역 1D개월 또는 추방 또는 벌금 2D×Cr20,000 (밀수품 톤당)</td></tr>
        <tr><td>9~10</td><td>징역 1D년 또는 추방</td></tr>
        <tr><td>11~12</td><td>징역 2D년 또는 추방</td></tr>
        <tr><td>13~14</td><td>무기 징역</td></tr>
        <tr class="tsp-row-critical-fail"><td>15 이상</td><td>사형</td></tr>
      </tbody>
    </table>
    <p class="tsp-rules-note">추방형은 즉시 그 세계를 떠나야 하고 재입국 불가.</p>
  `
});

// ── 추가: 법규 수준 처벌 표 / 보수 미비 표 ──────────────
TRADE_TABLES.push({
  title: '법규 수준 처벌 표',
  body: `
    <h3>법규 수준 처벌 표 (2D + 범죄 수정치)</h3>
    <div class="tsp-rules-formula">처벌 판정 = 2D + (해당 범죄 수정치)</div>
    <table class="tsp-rules-table">
      <thead><tr><th>2D+수정치</th><th>처벌</th></tr></thead>
      <tbody>
        <tr><td>0 이하</td><td>석방 또는 훈방</td></tr>
        <tr><td>1~2</td><td>벌금 1D×Cr1,000 (밀수품은 톤당)</td></tr>
        <tr><td>3~4</td><td>벌금 2D×Cr5,000 (밀수품은 톤당)</td></tr>
        <tr><td>5~6</td><td>추방 또는 벌금 2D×Cr10,000 (밀수품 톤당)</td></tr>
        <tr><td>7~8</td><td>징역 1D개월 또는 추방 또는 벌금 2D×Cr20,000 (밀수품 톤당)</td></tr>
        <tr><td>9~10</td><td>징역 1D년 또는 추방</td></tr>
        <tr><td>11~12</td><td>징역 2D년 또는 추방</td></tr>
        <tr><td>13~14</td><td>무기 징역</td></tr>
        <tr class="tsp-row-critical-fail"><td>15 이상</td><td>사형</td></tr>
      </tbody>
    </table>
    <h3 style="margin-top:12px">범죄별 수정치</h3>
    <table class="tsp-rules-table">
      <thead><tr><th>범죄</th><th>수정치</th></tr></thead>
      <tbody>
        <tr><td>폭행</td><td>-2</td></tr>
        <tr><td>재물 손괴</td><td>-3</td></tr>
        <tr><td>신원 위조</td><td>-5</td></tr>
        <tr><td>과실 치사</td><td>-1</td></tr>
        <tr><td>살인</td><td>+0</td></tr>
        <tr><td>밀수(금지물품)</td><td>현지법규수준 − 해당물품 금지시작수준</td></tr>
      </tbody>
    </table>
    <p class="tsp-rules-note">변호 기능 보유 시 변호 판정 달성도만큼 수정치 감소 가능.</p>
  `
});
