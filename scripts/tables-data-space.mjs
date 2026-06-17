// tables-data-space.mjs — 우주 관련 카테고리

export const SPACE_TABLES = [

  {
    title: '우주 조우 표 (D66/D% 혼합)',
    body: `
      <h3>우주 조우 표</h3>
      <p class="tsp-rules-note">01~46: D66 / 51~96: D% (백분위) — 표 좌측은 십의 자리 0~4, 우측은 5~9</p>
      <table class="tsp-rules-table">
        <thead><tr><th>번호</th><th>조우</th><th>번호</th><th>조우</th></tr></thead>
        <tbody>
          <tr><td>01</td><td>버려진 외계인 우주선 (물품 수색 가능)</td><td>51</td><td>적대적인 우주선 (우주선 유형 굴림 필요)</td></tr>
          <tr><td>02</td><td>항성 플레어 (1D×100래드)</td><td>52</td><td>다른 우주선이 버린 쓰레기</td></tr>
          <tr><td>03</td><td>소행성 (암석으로만 이루어짐)</td><td>53</td><td>의료선 또는 병원선</td></tr>
          <tr><td>04</td><td>광물을 함유한 소행성 (채굴 가능)</td><td>54</td><td>연구선 또는 정찰선</td></tr>
          <tr><td>05</td><td>외계인 우주선 (임무 수행 중)</td><td>55</td><td>후원자</td></tr>
          <tr><td>06</td><td>바위굴 은둔자 (사람이 사는 암석 소행성)</td><td>56</td><td>경찰선</td></tr>
          <tr><td>11</td><td>우주 해적</td><td>61</td><td>보기 드물게 용감한 해적</td></tr>
          <tr><td>12</td><td>버려진 우주선 (물품 수색 가능)</td><td>62</td><td>귀족 요트</td></tr>
          <tr><td>13</td><td>우주 정거장 (1~4: 버려짐)</td><td>63</td><td>전함</td></tr>
          <tr><td>14</td><td>혜성 (중심부에 고대문명 흔적 가능성)</td><td>64</td><td>화물선</td></tr>
          <tr><td>15</td><td>광물을 함유한 소행성 (채굴 가능)</td><td>65</td><td>우주 항행용 부표 또는 등대</td></tr>
          <tr><td>16</td><td>조난당한 함선 (우주선 유형 굴림 필요)</td><td>66</td><td>보기 드문 함선</td></tr>
          <tr><td>21</td><td>우주 해적</td><td>71</td><td>우주 쓰레기에 충돌함 (충돌!)</td></tr>
          <tr><td>22</td><td>자유 무역상</td><td>72</td><td>자동화된 우주선</td></tr>
          <tr><td>23</td><td>유성진 폭풍 (충돌!)</td><td>73</td><td>자유 무역상</td></tr>
          <tr><td>24</td><td>적대적인 우주선 (우주선 유형 굴림 필요)</td><td>74</td><td>버려진 화물 포드 (무작위 무역품 굴림)</td></tr>
          <tr><td>25</td><td>채굴선</td><td>75</td><td>경찰선</td></tr>
          <tr><td>26</td><td>정찰선</td><td>76</td><td>화물선</td></tr>
          <tr><td>31</td><td>외계인 함선 (1~3 무역선/4~6 탐험선/6 스파이)</td><td>81</td><td>여객선</td></tr>
          <tr><td>32</td><td>우주 쓰레기 (물품 수색 가능)</td><td>82</td><td>궤도 공장 (무작위 무역품 굴림)</td></tr>
          <tr><td>33</td><td>장거리 무역선</td><td>83</td><td>궤도 주거지</td></tr>
          <tr><td>34</td><td>버려진 우주선 (물품 수색 가능)</td><td>84</td><td>궤도 주거지</td></tr>
          <tr><td>35</td><td>사파리선 혹은 과학선</td><td>85</td><td>통신 위성</td></tr>
          <tr><td>36</td><td>탈출 포드</td><td>86</td><td>방어용 위성</td></tr>
          <tr><td>41</td><td>여객선</td><td>91</td><td>유람선</td></tr>
          <tr><td>42</td><td>위기에 처한 함선 (우주선 유형 굴림 필요)</td><td>92</td><td>우주 정거장</td></tr>
          <tr><td>43</td><td>개척선 또는 여객선</td><td>93</td><td>경찰선</td></tr>
          <tr><td>44</td><td>정찰선</td><td>94</td><td>화물선</td></tr>
          <tr><td>45</td><td>우주 정거장</td><td>95</td><td>항성계 수비선</td></tr>
          <tr><td>46</td><td>X-보트 중계선</td><td>96</td><td>대함대(Grand Fleet) 소속 전함</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">
        조우 거리는 전자기기(감지기) 판정 결과로 결정. 민간/비작전 군용선은 피아식별 신호로 감지 +4.
        충돌·신호·항성 플레어 조우에는 거리 규칙 미적용.<br><br>
        <b>충돌!</b>: 작은 물체가 선체에 강하게 부딪침 → 함선 1D점 피해.<br>
        <b>조난 신호(SOS)</b>: 시간이 기록된 표준 SOS 신호. 감지 시 응답·구조 또는 신고 의무 (무시 시 범죄). 가짜 구조 신호로 유인하는 해적도 있음.<br>
        <b>채굴</b>: 채굴용 드론 보유 시 소행성에서 채굴 가능 → 2D 굴려 소행성 채굴 표 참조.
      </p>
    `
  },

  {
    title: '물품 수색 표 (2D)',
    body: `
      <h3>물품 수색 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>결과</th></tr></thead>
        <tbody>
          <tr class="tsp-row-critical-fail"><td>3 이하</td><td>위험! 우주선 반응로가 손상되었거나, 폭발 직전이거나, 바이러스가 퍼져 있거나, 승무원을 죽인 외계 괴물이 남아 있습니다…</td></tr>
          <tr class="tsp-row-bad"><td>4</td><td>물품 없음 — 쓸만한 물품을 건질 수 없음</td></tr>
          <tr><td>5</td><td>쓰레기 — 사소한 개인 물품, 예비 부품, 기념품, 잡동사니</td></tr>
          <tr><td>6</td><td>연료 — 2D×10톤 추출 가능 (버려진 우주선의 최대 연료량 한도)</td></tr>
          <tr><td>7</td><td>장비 — 2D×Cr2,000 상당의 진공복/의료 용품/무기</td></tr>
          <tr class="tsp-row-good"><td>8</td><td>화물 — 화물 2D톤. D66 굴려 무역품 표 참조</td></tr>
          <tr class="tsp-row-good"><td>9</td><td>상당한 양의 화물 — 화물 2D×10톤 (버려진 우주선의 최대 적재량 한도)</td></tr>
          <tr class="tsp-row-good"><td>10</td><td>흥미로운 유물 — 외계 유물, 유용한 개인 정보, 우편함 등 모험의 계기. 냉동 침상에 생존자가 있을 수도</td></tr>
          <tr class="tsp-row-great"><td>11</td><td>개조 부품 — 2D×Cr25,000 상당의 포탑용 무기/우주선 컴퓨터/에어·래프트</td></tr>
          <tr class="tsp-row-great"><td>12</td><td>우주선 — 수리하여 재사용 가능</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">
        버려진 우주선/화물 수색은 합법이지만 획득물은 해당 항성계 우주항에 신고해야 함.
        2D + (손상 정도에 따라 -0~-6 수정치). 결과 8 이상 → D3회 추가 굴림.
        해적이 미끼로 이용하는 경우도 있으니 주의.
      </p>
    `
  },

  {
    title: '소행성 채굴 표 (2D)',
    body: `
      <h3>소행성 채굴 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>획득 가능한 광석</th></tr></thead>
        <tbody>
          <tr class="tsp-row-great"><td>2</td><td>귀금속 2D톤</td></tr>
          <tr><td>3~4</td><td>일반 광석 2D×20톤</td></tr>
          <tr><td>5~6</td><td>일반 광석 2D×50톤</td></tr>
          <tr class="tsp-row-good"><td>7~8</td><td>희귀 광석 2D×10톤</td></tr>
          <tr class="tsp-row-good"><td>9~11</td><td>희귀 광석 2D×20톤</td></tr>
          <tr class="tsp-row-bad"><td>12</td><td>방사능 원료 1D톤</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">채굴용 드론 보유 시 우주 조우에서 광물 함유 소행성을 만나면 사용. 채굴한 광석은 무역 규칙에 따라 판매 가능.</p>
    `
  },

  {
    title: '중고 우주선 표 (2D)',
    body: `
      <h3>중고 우주선 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>우주선 연식</th><th>가격 할인</th><th>특이사항 표 굴림 횟수</th></tr></thead>
        <tbody>
          <tr><td>2</td><td>6~10년</td><td>5%</td><td>1회</td></tr>
          <tr><td>3</td><td>11~15년</td><td>10%</td><td>2회</td></tr>
          <tr><td>4</td><td>16~25년</td><td>15%</td><td>3회</td></tr>
          <tr><td>5~9</td><td>26~50년</td><td>20%</td><td>4회</td></tr>
          <tr><td>10</td><td>51~100년</td><td>25%</td><td>6회</td></tr>
          <tr><td>11</td><td>101~250년</td><td>30%</td><td>8회</td></tr>
          <tr><td>12</td><td>251년 이상</td><td>40%</td><td>10회</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">중고 우주선 구매 시 이 표를 굴려 연식·할인율·우주선 특이사항 표 굴림 횟수를 결정합니다.</p>
    `
  },

  {
    title: '우주선 특이사항 표 (2D)',
    body: `
      <h3>우주선 특이사항 표 (2D)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>2D</th><th>무역선</th><th>군용선</th><th>기타</th></tr></thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>블랙리스트 무역선: 여러 항성계에서 압수 수색을 당함. 모든 중개 판정 -1</td>
            <td>심각한 파손: 내구도 -1</td>
            <td>반응로 코어 누출: 점프할 때마다 2D 굴림. 12 → 모든 탑승자 2D×20래드 방사선 노출</td>
          </tr>
          <tr>
            <td>3</td>
            <td>잘 보수됨: 보수 비용 50% 저렴</td>
            <td>한 등급 높은 감지기 탑재</td>
            <td>호화 여객선: 모든 접객 판정 +1</td>
          </tr>
          <tr>
            <td>4</td>
            <td>밀수품을 숨길 수 있는 공간 있음</td>
            <td>포탑이 한 대 더 탑재됨</td>
            <td>컴퓨터 라이브러리에 잘못된 정보가 있음</td>
          </tr>
          <tr>
            <td>5</td>
            <td>화물칸이 화학 물질로 오염됨 (오염 취약 화물 손상 가능)</td>
            <td>악명 높은 전투 참전 이력 — 이 우주선을 노리는 적수 있음</td>
            <td>우주선에 불편한 초능력의 기운이 감돔</td>
          </tr>
          <tr><td colspan="4">6 — 손상된 감지기: 모든 전자기기(감지기) 판정 -1 (공통)</td></tr>
          <tr><td colspan="4">7 — 모든 수리 시도 -1 (공통)</td></tr>
          <tr><td colspan="4">8 — 보수 비용 2배 (공통)</td></tr>
          <tr><td colspan="4">9 — 심각한 파손: 내구도 -10 (공통)</td></tr>
          <tr><td colspan="4">10 — 손상된 추진기: 모든 우주 비행 판정 -1 (공통)</td></tr>
          <tr>
            <td>11</td>
            <td>유명하고 인정받던 무역선 — 평판 좋음</td>
            <td>큰 활약을 펼쳤던 우주선 — 해군 내 평판 좋음</td>
            <td>컴퓨터 라이브러리에 비밀/비범한 정보가 있음</td>
          </tr>
          <tr>
            <td>12</td>
            <td>한 등급 높은 컴퓨터 탑재</td>
            <td>최대 MCr2 가격의 무기 한 대 추가</td>
            <td>한 등급 높은 감지기 탑재</td>
          </tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">중고 우주선 구매 시 결정된 횟수만큼 이 표를 굴려 특이사항을 적용합니다. 우주선 종류(무역선/군용선/기타)에 맞는 열을 사용하세요.</p>
    `
  },
];

// ── 추가: 우주선 치명타 ────────────────────────────────────
SPACE_TABLES.push({
  title: '우주선 치명타 부위 표 (2D)',
  body: `
    <h3>우주선 치명타 부위 표 (2D)</h3>
    <table class="tsp-rules-table">
      <thead><tr><th>2D</th><th>부위</th></tr></thead>
      <tbody>
        <tr><td>2</td><td>감지기</td></tr>
        <tr><td>3</td><td>동력부</td></tr>
        <tr><td>4</td><td>연료</td></tr>
        <tr><td>5</td><td>무기</td></tr>
        <tr><td>6</td><td>장갑</td></tr>
        <tr><td>7</td><td>선체</td></tr>
        <tr><td>8</td><td>기동 드라이브</td></tr>
        <tr><td>9</td><td>화물</td></tr>
        <tr><td>10</td><td>점프 드라이브</td></tr>
        <tr><td>11</td><td>탑승자</td></tr>
        <tr><td>12</td><td>함교(컴퓨터)</td></tr>
      </tbody>
    </table>
    <p class="tsp-rules-note">
      치명타 심각도 = 공격 굴림 달성도 − 5 (1~6).<br>
      동일 부위에 더 높은 심각도의 치명타 발생 시 그 효과로 갱신, 같거나 낮으면 심각도를 1단계 올려 적용.<br>
      심각도 6 부위는 추가 치명타 효과 미적용 (대신 새 부위 굴림, 그 부위 심각도1로 적용).
    </p>
  `
});

SPACE_TABLES.push({
  title: '우주선 치명타 효과 표',
  body: `
    <h3>우주선 치명타 효과 표 (심각도 1~6)</h3>

    <table class="tsp-rules-table">
      <thead><tr><th>부위</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead>
      <tbody>
        <tr>
          <td><b>감지기</b></td>
          <td>감지기 판정 -2</td>
          <td>중거리 초과 감지 불가</td>
          <td>근거리 초과 감지 불가</td>
          <td>매우근거리 초과 감지 불가</td>
          <td>인접구간 초과 감지 불가</td>
          <td>감지기 사용 불가</td>
        </tr>
        <tr>
          <td><b>동력부</b></td>
          <td>추진력-1, 동력10%감소</td>
          <td>추진력-1, 동력10%감소</td>
          <td>추진력-1, 동력50%감소</td>
          <td>추진력0, 동력0</td>
          <td>추진력0,동력0, 선체심각도+1</td>
          <td>추진력0,동력0, 선체심각도+1D</td>
        </tr>
        <tr>
          <td><b>연료</b></td>
          <td>누출: 시간당 1D톤 소실</td>
          <td>누출: 라운드당 1D톤 소실</td>
          <td>누출: 연료 1D×10% 소실</td>
          <td>연료탱크 파괴</td>
          <td>연료탱크 파괴, 선체심각도+1</td>
          <td>연료탱크 파괴, 선체심각도+1D</td>
        </tr>
        <tr>
          <td><b>무기</b></td>
          <td>무작위 무기 공격판정 -2</td>
          <td>무작위 무기 사용불가</td>
          <td>무작위 무기 파괴</td>
          <td>무작위 무기 폭발, 선체심각도+1</td>
          <td>무작위 무기 폭발, 선체심각도+1</td>
          <td>무작위 무기 폭발, 선체심각도+1</td>
        </tr>
        <tr>
          <td><b>장갑</b></td>
          <td>장갑 -1</td>
          <td>장갑 -D3</td>
          <td>장갑 -1D</td>
          <td>장갑 -1D</td>
          <td>장갑 -2D, 선체심각도+1</td>
          <td>장갑 -2D, 선체심각도+1</td>
        </tr>
        <tr>
          <td><b>선체</b></td>
          <td>1D점 피해</td>
          <td>2D점 피해</td>
          <td>3D점 피해</td>
          <td>4D점 피해</td>
          <td>5D점 피해</td>
          <td>6D점 피해</td>
        </tr>
        <tr>
          <td><b>기동 드라이브</b></td>
          <td>조종 판정 -1</td>
          <td>조종 판정 -2, 추진력-1</td>
          <td>조종 판정 -3, 추진력-1</td>
          <td>조종 판정 -4, 추진력-1</td>
          <td>추진력 0</td>
          <td>추진력 0, 선체심각도+1</td>
        </tr>
        <tr>
          <td><b>화물</b></td>
          <td>화물 10% 파괴</td>
          <td>화물 1D×10% 파괴</td>
          <td>화물 2D×10% 파괴</td>
          <td>모든 화물 파괴</td>
          <td>모든 화물 파괴, 선체심각도+1</td>
          <td>모든 화물 파괴, 선체심각도+1</td>
        </tr>
        <tr>
          <td><b>점프 드라이브</b></td>
          <td>점프 판정 -2</td>
          <td>점프 드라이브 사용 불가</td>
          <td>점프 드라이브 파괴, 선체심각도+1</td>
          <td>점프 드라이브 파괴, 선체심각도+1</td>
          <td>점프 드라이브 파괴, 선체심각도+1</td>
          <td>점프 드라이브 파괴, 선체심각도+1</td>
        </tr>
        <tr>
          <td><b>탑승자</b></td>
          <td>무작위 탑승자 1D점 피해</td>
          <td>1D시간 후 생명유지 정지</td>
          <td>1D명에게 2D점 피해</td>
          <td>1D라운드 후 생명유지 정지</td>
          <td>전원 3D점 피해</td>
          <td>생명유지 정지</td>
        </tr>
        <tr>
          <td><b>함교(컴퓨터)</b></td>
          <td>컴퓨터 판정 -2</td>
          <td>컴퓨터 성능 -1</td>
          <td>컴퓨터 성능 -1</td>
          <td>컴퓨터 성능 -1</td>
          <td>컴퓨터 사용 불가</td>
          <td>컴퓨터 파괴</td>
        </tr>
      </tbody>
    </table>
    <p class="tsp-rules-note">
      치명타 수리: 보통(8+) 기계공학 판정(1D시간) — 판정에 치명타 심각도만큼 페널티,
      매 라운드 추가 페널티 적용. 긴급 수리는 효과를 1D시간만 멈출 뿐, 영구 수리는 입항 후 가능.
    </p>
  `
});
