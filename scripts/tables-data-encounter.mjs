// tables-data-encounter.mjs — 조우·NPC 카테고리

export const ENCOUNTER_TABLES = [

  {
    title: '조력자와 적수 표 (D66)',
    body: `
      <h3>조력자와 적수 표 (D66)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>D66</th><th>NPC</th><th>D66</th><th>NPC</th></tr></thead>
        <tbody>
          <tr><td>11</td><td>해군 장교</td><td>41</td><td>따분해하는 귀족</td></tr>
          <tr><td>12</td><td>제국 외교관</td><td>42</td><td>행성 총독</td></tr>
          <tr><td>13</td><td>파렴치한 상인</td><td>43</td><td>도박 중독자</td></tr>
          <tr><td>14</td><td>의사</td><td>44</td><td>사회 고발 중인 언론인</td></tr>
          <tr><td>15</td><td>괴짜 과학자</td><td>45</td><td>종말론자 사교도</td></tr>
          <tr><td>16</td><td>용병</td><td>46</td><td>기업 비밀 요원</td></tr>
          <tr><td>21</td><td>유명 공연자</td><td>51</td><td>범죄 조직</td></tr>
          <tr><td>22</td><td>외계인 도둑</td><td>52</td><td>군정 장관</td></tr>
          <tr><td>23</td><td>자유 무역상</td><td>53</td><td>육군 보급 장교</td></tr>
          <tr><td>24</td><td>탐험가</td><td>54</td><td>사설탐정</td></tr>
          <tr><td>25</td><td>해병 대위</td><td>55</td><td>우주항 관리자</td></tr>
          <tr><td>26</td><td>기업 임원</td><td>56</td><td>퇴역한 제독</td></tr>
          <tr><td>31</td><td>연구자</td><td>61</td><td>외계 대사</td></tr>
          <tr><td>32</td><td>문화 주재관</td><td>62</td><td>밀수업자</td></tr>
          <tr><td>33</td><td>종교계 지도자</td><td>63</td><td>무기 검사관</td></tr>
          <tr><td>34</td><td>음모 가담자</td><td>64</td><td>나이 든 정치인</td></tr>
          <tr><td>35</td><td>부유한 귀족</td><td>65</td><td>행성 군벌 지도자</td></tr>
          <tr><td>36</td><td>인공지능</td><td>66</td><td>제국 비밀 요원</td></tr>
        </tbody>
      </table>
    `
  },

  {
    title: 'NPC 경험 수준 표',
    body: `
      <h3>NPC 경험 수준 표</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>경험 수준</th><th>기능</th><th>평균 기능 레벨</th><th>특성치</th></tr></thead>
        <tbody>
          <tr><td>미숙련 비전투원</td><td>운전/비행</td><td>0</td><td>+0</td></tr>
          <tr><td>미숙련 전투원</td><td>근접전, 사격, 운전/비행</td><td>0</td><td>+0</td></tr>
          <tr><td>일반 비전투원</td><td>산업, 운전/비행</td><td>1</td><td>+1</td></tr>
          <tr><td>일반 전투원</td><td>경계, 근접전, 사격, 운전/비행</td><td>1</td><td>+1</td></tr>
          <tr><td>숙련 비전투원</td><td>산업, 운전/비행, 행정</td><td>2</td><td>+1, +2</td></tr>
          <tr><td>숙련 전투원</td><td>경계, 근접전, 사격, 운전/비행, 중화기</td><td>2</td><td>+1, +2</td></tr>
          <tr><td>전문 비전투원</td><td>산업, 수사, 운전/비행, 행정</td><td>3</td><td>+1, +2, +3</td></tr>
          <tr><td>전문 전투원</td><td>경계, 근접전, 사격, 전술, 중화기, 운전/비행</td><td>3</td><td>+1, +2, +3</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">기준 특성치는 모두 7. "특성치" 열의 수정치만큼 임의의 특성치에 추가 (그 NPC의 직업을 반영). 표시된 수준 이상의 NPC는 제시된 모든 기능을 보유.</p>
    `
  },

  {
    title: 'NPC 특징 표 (D66)',
    body: `
      <h3>NPC 특징 표 (D66)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>D66</th><th>특징</th><th>D66</th><th>특징</th></tr></thead>
        <tbody>
          <tr><td>11</td><td>의리 있음</td><td>41</td><td>소문 내기 좋아함</td></tr>
          <tr><td>12</td><td>다른 걱정이 많음</td><td>42</td><td>유독 편협함</td></tr>
          <tr><td>13</td><td>범죄자들에게 빚을 짐</td><td>43</td><td>술꾼 또는 약물 중독자</td></tr>
          <tr><td>14</td><td>아주 썰렁한 농담을 함</td><td>44</td><td>정부 정보원</td></tr>
          <tr><td>15</td><td>여행자들을 배신하려 함</td><td>45</td><td>한 여행자를 다른 사람과 착각함</td></tr>
          <tr><td>16</td><td>공격적</td><td>46</td><td>유독 기술 수준 높은 물품을 소유함</td></tr>
          <tr><td>21</td><td>비밀 조력자가 있음</td><td>51</td><td>유독 아름답거나 잘생긴 외모</td></tr>
          <tr><td>22</td><td>비밀리에 아나가식스를 투약함</td><td>52</td><td>여행자들을 감시함</td></tr>
          <tr><td>23</td><td>뭔가를 찾는 중</td><td>53</td><td>여행자 지원 협회 회원</td></tr>
          <tr><td>24</td><td>협조적</td><td>54</td><td>남몰래 여행자들을 적대함</td></tr>
          <tr><td>25</td><td>건망증이 있음</td><td>55</td><td>돈을 빌리려고 함</td></tr>
          <tr><td>26</td><td>여행자들을 고용하려 함</td><td>56</td><td>여행자들이 위험하다고 확신함</td></tr>
          <tr><td>31</td><td>유용한 연줄이 있음</td><td>61</td><td>정치적 음모에 관여함</td></tr>
          <tr><td>32</td><td>예술적 감각이 있음</td><td>62</td><td>위험한 비밀이 있음</td></tr>
          <tr><td>33</td><td>쉽게 헷갈려 함</td><td>63</td><td>최대한 빨리 현재 행성을 떠나려 함</td></tr>
          <tr><td>34</td><td>유독 흉한 외모</td><td>64</td><td>한 여행자에게 끌림</td></tr>
          <tr><td>35</td><td>현 상황을 걱정함</td><td>65</td><td>다른 세계에서 옴</td></tr>
          <tr><td>36</td><td>자녀들 사진을 보여줌</td><td>66</td><td>텔레파시 등의 특이한 능력 있음</td></tr>
        </tbody>
      </table>
    `
  },

  {
    title: '무작위 후원자 표 (D66)',
    body: `
      <h3>무작위 후원자 표 (D66)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>D66</th><th>후원자</th><th>D66</th><th>후원자</th></tr></thead>
        <tbody>
          <tr><td>11</td><td>암살자</td><td>41</td><td>상인</td></tr>
          <tr><td>12</td><td>밀수업자</td><td>42</td><td>자유 무역상</td></tr>
          <tr><td>13</td><td>테러리스트</td><td>43</td><td>중개인</td></tr>
          <tr><td>14</td><td>횡령범</td><td>44</td><td>기업 임원</td></tr>
          <tr><td>15</td><td>도둑</td><td>45</td><td>기업 비밀 요원</td></tr>
          <tr><td>16</td><td>혁명가</td><td>46</td><td>재정 담당자</td></tr>
          <tr><td>21</td><td>사무직</td><td>51</td><td>소행성 광부</td></tr>
          <tr><td>22</td><td>관리자</td><td>52</td><td>연구자</td></tr>
          <tr><td>23</td><td>시장</td><td>53</td><td>해군 장교</td></tr>
          <tr><td>24</td><td>하급 귀족</td><td>54</td><td>조종사</td></tr>
          <tr><td>25</td><td>의사</td><td>55</td><td>우주항 관리자</td></tr>
          <tr><td>26</td><td>족장</td><td>56</td><td>정찰병</td></tr>
          <tr><td>31</td><td>외교관</td><td>61</td><td>외계인</td></tr>
          <tr><td>32</td><td>운반원</td><td>62</td><td>방탕아</td></tr>
          <tr><td>33</td><td>첩보원</td><td>63</td><td>밀항자</td></tr>
          <tr><td>34</td><td>대사</td><td>64</td><td>친척</td></tr>
          <tr><td>35</td><td>귀족</td><td>65</td><td>외세의 비밀 요원</td></tr>
          <tr><td>36</td><td>경찰관</td><td>66</td><td>제국의 비밀 요원</td></tr>
        </tbody>
      </table>
    `
  },

  {
    title: '무작위 의뢰 표 (D66)',
    body: `
      <h3>무작위 의뢰 표 (D66)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>D66</th><th>의뢰</th><th>D66</th><th>의뢰</th></tr></thead>
        <tbody>
          <tr><td>11</td><td>목표 암살하기</td><td>41</td><td>범죄 수사하기</td></tr>
          <tr><td>12</td><td>목표에게 누명 씌우기</td><td>42</td><td>절도 사건 수사하기</td></tr>
          <tr><td>13</td><td>목표 파괴하기</td><td>43</td><td>살인 사건 수사하기</td></tr>
          <tr><td>14</td><td>목표의 물건 훔치기</td><td>44</td><td>미스터리 수사하기</td></tr>
          <tr><td>15</td><td>도둑질 돕기</td><td>45</td><td>목표 조사하기</td></tr>
          <tr><td>16</td><td>도둑질 막기</td><td>46</td><td>사건 조사하기</td></tr>
          <tr><td>21</td><td>보안 시설에서 자료나 물건 빼내기</td><td>51</td><td>탐험대에 합류하기</td></tr>
          <tr><td>22</td><td>목표의 평판 떨어뜨리기</td><td>52</td><td>행성 조사하기</td></tr>
          <tr><td>23</td><td>분실된 화물 찾기</td><td>53</td><td>새로운 항성계 탐험하기</td></tr>
          <tr><td>24</td><td>실종된 사람 찾기</td><td>54</td><td>폐허 탐험하기</td></tr>
          <tr><td>25</td><td>목표 속이기</td><td>55</td><td>우주선 잔해 회수하기</td></tr>
          <tr><td>26</td><td>목표 방해하기</td><td>56</td><td>생물 포획하기</td></tr>
          <tr><td>31</td><td>상품 운송하기</td><td>61</td><td>우주선 납치하기</td></tr>
          <tr><td>32</td><td>사람 운송하기</td><td>62</td><td>귀족 즐겁게 해 주기</td></tr>
          <tr><td>33</td><td>자료 전달하기</td><td>63</td><td>목표 보호하기</td></tr>
          <tr><td>34</td><td>비밀리에 상품 운송하기</td><td>64</td><td>목표 구출하기</td></tr>
          <tr><td>35</td><td>신속하게 상품 운송하기</td><td>65</td><td>목표 돕기</td></tr>
          <tr><td>36</td><td>위험 물품 운송하기</td><td>66</td><td>함정 – 후원자가 배신하려 함</td></tr>
        </tbody>
      </table>
    `
  },

  {
    title: '무작위 목표 표 (D66)',
    body: `
      <h3>무작위 목표 표 (D66)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>D66</th><th>목표</th><th>D66</th><th>목표</th></tr></thead>
        <tbody>
          <tr><td>11</td><td>평범한 무역품</td><td>41</td><td>무작위 후원자 표 굴림</td></tr>
          <tr><td>12</td><td>평범한 무역품</td><td>42</td><td>무작위 후원자 표 굴림</td></tr>
          <tr><td>13</td><td>평범한 무역품</td><td>43</td><td>무작위 후원자 표 굴림</td></tr>
          <tr><td>14</td><td>평범한 무역품</td><td>44</td><td>조력자와 적수 표 굴림</td></tr>
          <tr><td>15</td><td>불법적인 무역품</td><td>45</td><td>조력자와 적수 표 굴림</td></tr>
          <tr><td>16</td><td>불법적인 무역품</td><td>46</td><td>조력자와 적수 표 굴림</td></tr>
          <tr><td>21</td><td>컴퓨터 자료</td><td>51</td><td>지역 정부</td></tr>
          <tr><td>22</td><td>외계 유물</td><td>52</td><td>행성 정부</td></tr>
          <tr><td>23</td><td>개인 소지품</td><td>53</td><td>기업</td></tr>
          <tr><td>24</td><td>예술 작품</td><td>54</td><td>제국 첩보국</td></tr>
          <tr><td>25</td><td>역사적 유물</td><td>55</td><td>범죄 조직</td></tr>
          <tr><td>26</td><td>무기</td><td>56</td><td>갱단</td></tr>
          <tr><td>31</td><td>우주항</td><td>61</td><td>자유 무역선</td></tr>
          <tr><td>32</td><td>소행성 기지</td><td>62</td><td>요트</td></tr>
          <tr><td>33</td><td>도시</td><td>63</td><td>화물 수송선</td></tr>
          <tr><td>34</td><td>연구소</td><td>64</td><td>경찰 쾌속선</td></tr>
          <tr><td>35</td><td>주점이나 클럽</td><td>65</td><td>우주 정거장</td></tr>
          <tr><td>36</td><td>의료 시설</td><td>66</td><td>전함</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">의뢰의 사례금은 난이도와 여행자들의 상황에 따라 달라집니다. 빈털터리 여행자에게는 2주 의뢰당 인당 Cr5,000 정도면 만족스럽지만, 자유 무역상 일행은 같은 시간에 화물 운송으로 수십만 크레딧을 벌 수 있으므로 더 높은 보수가 필요합니다.</p>
    `
  },

  {
    title: '무작위 장애물 표 (D66)',
    body: `
      <h3>무작위 장애물 표 (D66)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>D66</th><th>장애물</th><th>D66</th><th>장애물</th></tr></thead>
        <tbody>
          <tr><td>11</td><td>동물</td><td>41</td><td>목표가 심우주에 있음</td></tr>
          <tr><td>12</td><td>대형 동물</td><td>42</td><td>목표가 궤도상에 있음</td></tr>
          <tr><td>13</td><td>강도, 도둑</td><td>43</td><td>위협적인 기상 상황</td></tr>
          <tr><td>14</td><td>겁에 질린 농부들</td><td>44</td><td>위험한 생물 또는 방사선</td></tr>
          <tr><td>15</td><td>현지 공직자들</td><td>45</td><td>목표가 위험 구역에 있음</td></tr>
          <tr><td>16</td><td>현지 통치자</td><td>46</td><td>목표가 제한 구역에 있음</td></tr>
          <tr><td>21</td><td>범죄자 – 갱단원이나 해적</td><td>51</td><td>목표가 전자 장비로 감시됨</td></tr>
          <tr><td>22</td><td>범죄자 – 도둑이나 파괴 공작원</td><td>52</td><td>적대적인 경비 로봇 또는 경비 함선</td></tr>
          <tr><td>23</td><td>경찰 – 일반 치안 요원</td><td>53</td><td>생체 인증 필요</td></tr>
          <tr><td>24</td><td>경찰 – 경위, 경사</td><td>54</td><td>기계 고장 또는 컴퓨터 해킹</td></tr>
          <tr><td>25</td><td>기업 – 비밀 요원</td><td>55</td><td>여행자들이 감시당함</td></tr>
          <tr><td>26</td><td>기업 – 합법적</td><td>56</td><td>연료 또는 탄약 고갈</td></tr>
          <tr><td>31</td><td>우주항 보안팀</td><td>61</td><td>경찰 조사</td></tr>
          <tr><td>32</td><td>제국 해병대</td><td>62</td><td>법적 제약</td></tr>
          <tr><td>33</td><td>성간 기업</td><td>63</td><td>귀족들</td></tr>
          <tr><td>34</td><td>외계인 – 시민 또는 사기업</td><td>64</td><td>정부 공직자들</td></tr>
          <tr><td>35</td><td>외계인 – 정부</td><td>65</td><td>제3세력이 목표를 보호함</td></tr>
          <tr><td>36</td><td>우주 여행자들 또는 경쟁 함선</td><td>66</td><td>인질들</td></tr>
        </tbody>
      </table>
    `
  },

  {
    title: '우주항 조우 표 (D66)',
    body: `
      <h3>우주항 조우 표 (D66)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>D66</th><th>조우</th><th>D66</th><th>조우</th></tr></thead>
        <tbody>
          <tr><td>11</td><td>정비 로봇이 활동 중</td><td>41</td><td>무역상들이 예비 부품과 물자를 할인해 주겠다고 제안함</td></tr>
          <tr><td>12</td><td>무역선의 출발이나 도착</td><td>42</td><td>정비소에 불이 남</td></tr>
          <tr><td>13</td><td>어떤 선장이 연료 가격을 놓고 입씨름을 함</td><td>43</td><td>여객선의 출발이나 도착</td></tr>
          <tr><td>14</td><td>해적 활동 뉴스에 사람들이 몰려듦</td><td>44</td><td>도우미 로봇이 안내를 제안함</td></tr>
          <tr><td>15</td><td>심심한 직원이 여행자들을 성가시게 함</td><td>45</td><td>먼 항성계 무역상이 기이한 물건을 파는 중</td></tr>
          <tr><td>16</td><td>현지 상인이 운송할 우주선을 찾는 중</td><td>46</td><td>노인 소행성 광부가 잔돈을 구걸함</td></tr>
          <tr><td>21</td><td>반정부 활동가가 숨을 곳을 찾는 중</td><td>51</td><td>후원자가 일거리를 제안함</td></tr>
          <tr><td>22</td><td>다른 세계 무역상과 중개인이 언쟁</td><td>52</td><td>태워 줄 우주선을 찾는 승객</td></tr>
          <tr><td>23</td><td>기술자들이 컴퓨터 시스템 수리 중</td><td>53</td><td>순례자들이 포교하려 함</td></tr>
          <tr><td>24</td><td>기자가 다른 세계 소식을 들려달라 함</td><td>54</td><td>화물선의 출발이나 도착</td></tr>
          <tr><td>25</td><td>독특한 전통 문화 공연</td><td>55</td><td>정찰선의 출발이나 도착</td></tr>
          <tr><td>26</td><td>후원자가 다른 일행과 언쟁</td><td>56</td><td>불법/위험 물품이 압수되는 중</td></tr>
          <tr><td>31</td><td>군용 우주선의 출발이나 도착</td><td>61</td><td>소매치기가 물건을 훔치려 함</td></tr>
          <tr><td>32</td><td>우주항 바깥에서 시위가 일어남</td><td>62</td><td>술 취한 선원들이 시비를 걺</td></tr>
          <tr><td>33</td><td>탈옥수들이 동승을 간청함</td><td>63</td><td>정부 공무원들이 여행자들을 조사함</td></tr>
          <tr><td>34</td><td>독특한 일일 시장이 열림</td><td>64</td><td>무작위 보안 수색 대상이 됨</td></tr>
          <tr><td>35</td><td>보안팀의 순찰</td><td>65</td><td>보안상의 이유로 우주항 임시 폐쇄</td></tr>
          <tr><td>36</td><td>특이한 외계인</td><td>66</td><td>손상된 우주선이 비상 도킹을 시도함</td></tr>
        </tbody>
      </table>
    `
  },

  {
    title: '시골 조우 표 (D66)',
    body: `
      <h3>시골 조우 표 (D66)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>D66</th><th>조우</th><th>D66</th><th>조우</th></tr></thead>
        <tbody>
          <tr><td>11</td><td>야생 동물</td><td>41</td><td>야생 동물</td></tr>
          <tr><td>12</td><td>농업용 로봇들</td><td>42</td><td>작은 마을 – 조용하게 사는 곳</td></tr>
          <tr><td>13</td><td>관수용 드론이 머리 위로 날아감</td><td>43</td><td>작은 마을 – 무역로 중간에 위치</td></tr>
          <tr><td>14</td><td>손상된 농업용 로봇 수리 현장</td><td>44</td><td>작은 마을 – 축제 중</td></tr>
          <tr><td>15</td><td>작은 고립주의자 마을</td><td>45</td><td>작은 마을 – 위험에 처함</td></tr>
          <tr><td>16</td><td>사냥하러 온 귀족 일행</td><td>46</td><td>작은 마을 – 겉보기와 다른 곳</td></tr>
          <tr><td>21</td><td>야생 동물</td><td>51</td><td>야생 동물</td></tr>
          <tr><td>22</td><td>착륙장</td><td>52</td><td>특이한 기상 현상</td></tr>
          <tr><td>23</td><td>길 잃은 아이</td><td>53</td><td>험한 지형</td></tr>
          <tr><td>24</td><td>이동 중인 상단</td><td>54</td><td>특이한 생물</td></tr>
          <tr><td>25</td><td>화물 호송대</td><td>55</td><td>외딴 농가 – 친절함</td></tr>
          <tr><td>26</td><td>경찰 추격전</td><td>56</td><td>외딴 농가 – 불친절</td></tr>
          <tr><td>31</td><td>야생 동물</td><td>61</td><td>야생 동물</td></tr>
          <tr><td>32</td><td>통신 장애 지역</td><td>62</td><td>개인 별장</td></tr>
          <tr><td>33</td><td>치안 순찰</td><td>63</td><td>수도원 또는 은거지</td></tr>
          <tr><td>34</td><td>군사 시설</td><td>64</td><td>실험농장</td></tr>
          <tr><td>35</td><td>주점 또는 휴게소</td><td>65</td><td>폐허가 된 구조물</td></tr>
          <tr><td>36</td><td>착륙한 우주선</td><td>66</td><td>연구 시설</td></tr>
        </tbody>
      </table>
    `
  },

  {
    title: '도시 조우 표 (D66)',
    body: `
      <h3>도시 조우 표 (D66)</h3>
      <table class="tsp-rules-table">
        <thead><tr><th>D66</th><th>조우</th><th>D66</th><th>조우</th></tr></thead>
        <tbody>
          <tr><td>11</td><td>길거리 폭동이 진행 중</td><td>41</td><td>치안 순찰</td></tr>
          <tr><td>12</td><td>근사한 식당</td><td>42</td><td>오래된 건물 또는 기록 보관소</td></tr>
          <tr><td>13</td><td>불법 물품 거래상</td><td>43</td><td>축제</td></tr>
          <tr><td>14</td><td>공공장소에서의 논쟁</td><td>44</td><td>누군가 캐릭터들을 따라다님</td></tr>
          <tr><td>15</td><td>갑작스러운 날씨 변화</td><td>45</td><td>독특한 문화의 집단 또는 행사</td></tr>
          <tr><td>16</td><td>도움을 청하는 사람</td><td>46</td><td>행성 관료</td></tr>
          <tr><td>21</td><td>주점</td><td>51</td><td>여행자들이 아는 사람을 발견함</td></tr>
          <tr><td>22</td><td>극장 또는 기타 오락 시설</td><td>52</td><td>시위</td></tr>
          <tr><td>23</td><td>신기한 물건들을 파는 가게</td><td>53</td><td>로봇 또는 누군가의 고용인</td></tr>
          <tr><td>24</td><td>호객하는 노점상</td><td>54</td><td>장래의 후원자</td></tr>
          <tr><td>25</td><td>화재, 보호벽 붕괴 등 응급 상황</td><td>55</td><td>강도나 폭행 등의 범죄 진행 중</td></tr>
          <tr><td>26</td><td>강도들의 습격</td><td>56</td><td>거리 전도사가 소리 질러 댐</td></tr>
          <tr><td>31</td><td>여행자들이 교통 사고를 당하거나 일으킴</td><td>61</td><td>공공 화면에 방영되는 뉴스</td></tr>
          <tr><td>32</td><td>저공비행하는 우주선이 머리 위로</td><td>62</td><td>예고 없는 통행 금지/이동 제약</td></tr>
          <tr><td>33</td><td>외계인 또는 다른 세계의 존재</td><td>63</td><td>이상하게 한산하거나 조용한 거리</td></tr>
          <tr><td>34</td><td>여행자들이 무작위 캐릭터와 충돌함</td><td>64</td><td>공개 발표</td></tr>
          <tr><td>35</td><td>소매치기</td><td>65</td><td>스포츠 행사</td></tr>
          <tr><td>36</td><td>취재팀 또는 언론인</td><td>66</td><td>제국 고위 공직자</td></tr>
        </tbody>
      </table>
      <p class="tsp-rules-note">서드 임페리움에는 초광속 통신이 없습니다. 조력자/연줄과 연락하려면 같은 항성계에 있어야 하며, 행성 간에는 통신 지연이 발생합니다. 평균적으로 6시간마다 조우 굴림 1회 (위험/주목 상황에서는 더 자주).</p>
    `
  },
];
