// tables-tab.mjs — 「표」 탭: 룰북 랜덤표 모음
// 레이아웃: 상단 카테고리 탭 → 좌측 항목 리스트(고정 높이, 스크롤) → 우측 상세 내용
//
// items 배열 각 원소 형태:
//   { title, body }                         — 일반 항목
//   { type:'header', title }                — 비상호작용 구분 헤더
//   { type:'group', title, items:[{title,body},...] } — 아코디언 그룹

import { CHARMAKING_TABLES } from './tables-data-charmaking.mjs';
import { CAREER_TABLES } from './tables-data-careers.mjs';
import { ENCOUNTER_TABLES } from './tables-data-encounter.mjs';
import { SPACE_TABLES } from './tables-data-space.mjs';
import { TRADE_TABLES } from './tables-data-trade.mjs';
import { TABLE_ROLL_DATA } from './tables-roll-data.mjs';

export class TablesTab {

  constructor() {
    this._activeCategory = null;
    this._activeItem = {};     // { catId: 'idx' | 'g{gi}-{si}' }
    this._expandedGroups = {}; // { catId: { gi: bool } }
    this._spaceEncLoc = '정착지 있음';
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
      const activeKey = this._activeItem[cat.id] ?? '0';
      const expanded = this._expandedGroups[cat.id] ?? {};

      let listHTML = '';
      let detailHTML = `<p class="tsp-rules-note">이 카테고리의 표는 추후 추가될 예정입니다.</p>`;

      let detailTitle = null;
      if (!cat.items.length) {
        listHTML = `<div class="tsp-rules-list-empty">준비 중...</div>`;
      } else {
        cat.items.forEach((item, i) => {
          if (item.type === 'header') {
            listHTML += `<div class="tsp-rules-list-header">${item.title}</div>`;
            return;
          }
          if (item.type === 'group') {
            const isOpen = !!expanded[i];
            listHTML += `
              <div class="tsp-rules-group-title ${isOpen ? 'open' : ''}" data-cat="${cat.id}" data-gidx="${i}">
                <span>【${item.title}】</span>
                <i class="fa-solid fa-chevron-down tsp-rules-chevron"></i>
              </div>`;
            if (isOpen) {
              listHTML += `<div class="tsp-rules-group-items">`;
              item.items.forEach((sub, si) => {
                const key = `g${i}-${si}`;
                listHTML += `
                  <div class="tsp-rules-list-item sub ${activeKey === key ? 'active' : ''}" data-cat="${cat.id}" data-key="${key}">
                    ${sub.title}
                  </div>`;
                if (activeKey === key) { detailHTML = sub.body; detailTitle = sub.title; }
              });
              listHTML += `</div>`;
            }
            return;
          }
          // 일반 항목
          const key = String(i);
          listHTML += `
            <div class="tsp-rules-list-item ${activeKey === key ? 'active' : ''}" data-cat="${cat.id}" data-key="${key}">
              ${item.title}
            </div>`;
          if (activeKey === key) { detailHTML = item.body; detailTitle = item.title; }
        });
      }

      // 자동 굴림 버튼 (TABLE_ROLL_DATA에 등록된 표만)
      const rollInfo = detailTitle ? TABLE_ROLL_DATA[detailTitle] : null;
      let rollBtnHTML = '';
      if (rollInfo?.dice === 'space-encounter') {
        const locOptions = Object.keys(rollInfo.locations)
          .map(loc => `<option value="${loc}" ${loc === this._spaceEncLoc ? 'selected' : ''}>${loc} (${rollInfo.locations[loc] >= 0 ? '+' : ''}${rollInfo.locations[loc]})</option>`)
          .join('');
        rollBtnHTML = `
          <div class="tsp-roll-spacepanel">
            <select class="tsp-roll-loc-select" data-roll-title="${detailTitle.replace(/"/g, '&quot;')}">
              ${locOptions}
            </select>
            <button class="tsp-roll-btn" data-roll-title="${detailTitle.replace(/"/g, '&quot;')}">
              <i class="fa-solid fa-dice"></i> 굴리기
            </button>
          </div>`;
      } else if (rollInfo) {
        rollBtnHTML = `<button class="tsp-roll-btn" data-roll-title="${detailTitle.replace(/"/g, '&quot;')}">
             <i class="fa-solid fa-dice"></i> 굴리기
           </button>`;
      }

      return `
        <div class="tsp-rules-catbody" data-cat="${cat.id}" style="${isActive ? '' : 'display:none'}">
          <div class="tsp-rules-list">${listHTML}</div>
          <div class="tsp-rules-detail">${rollBtnHTML}${detailHTML}</div>
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

    panel.querySelectorAll('.tsp-rules-group-title').forEach(el => {
      el.addEventListener('click', () => {
        const cat = el.dataset.cat, gi = el.dataset.gidx;
        this._expandedGroups[cat] = this._expandedGroups[cat] ?? {};
        this._expandedGroups[cat][gi] = !this._expandedGroups[cat][gi];
        this._rerender(panel);
      });
    });

    panel.querySelectorAll('.tsp-rules-list-item').forEach(item => {
      item.addEventListener('click', () => {
        this._activeItem[item.dataset.cat] = item.dataset.key;
        this._rerender(panel);
      });
    });

    panel.querySelectorAll('.tsp-roll-loc-select').forEach(sel => {
      sel.addEventListener('change', () => {
        this._spaceEncLoc = sel.value;
      });
    });

    panel.querySelectorAll('.tsp-roll-btn').forEach(btn => {
      btn.addEventListener('click', () => this._rollTable(btn.dataset.rollTitle));
    });
  }

  // ── 표 자동 굴림 ──────────────────────────────────────────
  async _rollTable(title) {
    const data = TABLE_ROLL_DATA[title];
    if (!data) return;

    if (data.dice === 'space-encounter') {
      return this._rollSpaceEncounter(title, data);
    }
    if (data.dice === 'chain-d6') {
      return this._rollChainD6(title, data);
    }
    if (data.dice === '2d6-7') {
      return this._roll2d6Minus7(title, data);
    }
    if (data.dice === 'crit-effect') {
      return this._rollCritEffect(title, data);
    }
    if (data.dice === 'starport') {
      return this._rollStarport(title, data);
    }
    if (data.dice === 'law-punish') {
      return this._rollLawPunish(title, data);
    }
    if (data.dice === 'maintenance-fail') {
      return this._rollMaintFail(title, data);
    }

    let formula, label, key;
    if (data.dice === 'd66') {
      formula = '1d6*10 + 1d6';
      label = 'D66';
    } else if (data.dice === '2d6') {
      formula = '2d6';
      label = '2D';
    } else {
      formula = '1d6';
      label = '1D';
    }

    const roll = new Roll(formula);
    await roll.evaluate();
    key = String(roll.total);
    const text = data.rows[key] ?? '(결과 없음)';

    await roll.toMessage({
      speaker: ChatMessage.getSpeaker(),
      flavor: `${title}, ${label}=${roll.total}, ${text}`,
    });
  }

  // 우주 조우 표: D66의 첫 주사위(십의자리)에 위치 수정치 적용
  async _rollSpaceEncounter(title, data) {
    const loc = this._spaceEncLoc;
    const mod = data.locations[loc] ?? 0;

    // 두 주사위를 각각 분리하여 굴림
    const rollTens = new Roll('1d6');
    const rollOnes = new Roll('1d6');
    await rollTens.evaluate();
    await rollOnes.evaluate();

    const tens = rollTens.total;
    const ones = rollOnes.total;

    let tensAdj = tens - 1 + mod; // 1~6 → 0~5 기준 변환 후 수정치 적용
    tensAdj = Math.max(0, Math.min(9, tensAdj));

    const key = String(tensAdj) + String(ones);
    const text = data.rows[key] ?? '(결과 없음)';

    // 두 주사위 결과를 채팅에 표시 (각각 굴림)
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker(),
      content: `<div class="dice-roll"><div class="dice-formula">1d6 + 1d6</div>
        <div class="dice-tooltip"></div>
        <h4 class="dice-total">${tens} / ${ones}</h4></div>`,
      flavor: `${title}, 위치=${loc}(${mod >= 0 ? '+' : ''}${mod}), D66: ${tens}${ones}→키${key}, ${text}`,
    });
  }

  // 생활 사건 표: 2D=12면 1D 추가 굴림(기이한 사건)
  async _rollChainD6(title, data) {
    const roll = new Roll('2d6');
    await roll.evaluate();
    const key = String(roll.total);
    const text = data.rows[key] ?? '(결과 없음)';

    if (key !== data.chainKey) {
      await roll.toMessage({
        speaker: ChatMessage.getSpeaker(),
        flavor: `${title}, 2D=${roll.total}, ${text}`,
      });
      return;
    }

    const roll2 = new Roll('1d6');
    await roll2.evaluate();
    const key2 = String(roll2.total);
    const text2 = data.chainRows[key2] ?? '(결과 없음)';

    await roll.toMessage({
      speaker: ChatMessage.getSpeaker(),
      flavor: `${title}, 2D=${roll.total}, ${text} → ${data.chainLabel}(1D)=${roll2.total}, ${text2}`,
    });
  }

  // 노화 표: 2D-7 결과 (1 이상이면 영향 없음)
  async _roll2d6Minus7(title, data) {
    const roll = new Roll('2d6-7');
    await roll.evaluate();
    const key = String(roll.total);
    const text = (roll.total >= 1) ? data.defaultText : (data.rows[key] ?? '(결과 없음)');

    await roll.toMessage({
      speaker: ChatMessage.getSpeaker(),
      flavor: `${title}, 2D-7=${roll.total}, ${text}`,
    });
  }

  // 우주선 치명타 효과 표: 2D로 부위 결정 + 공격달성도-5(심각도1~6)는 사용자 입력
  async _rollCritEffect(title, data) {
    const sevInput = await Dialog.prompt({
      title: '치명타 심각도 입력',
      content: `<p>공격 달성도 − 5 = 심각도 (1~6)</p>
        <input type="number" id="tsp-crit-sev" min="1" max="6" value="1" style="width:100%;text-align:center;font-size:16px;" />`,
      label: '굴리기',
      callback: html => parseInt(html.find('#tsp-crit-sev').val(), 10),
      rejectClose: false,
    });
    let severity = Number(sevInput);
    if (!severity || severity < 1) severity = 1;
    if (severity > 6) severity = 6;

    const roll = new Roll('2d6');
    await roll.evaluate();
    const key = String(roll.total);
    const loc = data.locationRows[key] ?? '(결과 없음)';
    const effect = data.effects[loc]?.[severity - 1] ?? '(결과 없음)';

    await roll.toMessage({
      speaker: ChatMessage.getSpeaker(),
      flavor: `${title}, 2D=${roll.total}, 부위=${loc}, 심각도=${severity} → ${effect}`,
    });
  }

  // 우주항 등급 표: 2D + 인구 수정치
  async _rollStarport(title, data) {
    const popInput = await Dialog.prompt({
      title: '세계 인구 특성치 입력',
      content: `<p>세계의 인구 특성치를 입력하세요.</p>
        <input type="number" id="tsp-pop-val" min="0" max="15" value="5"
          style="width:100%;text-align:center;font-size:16px;" />`,
      label: '굴리기',
      callback: html => parseInt(html.find('#tsp-pop-val').val(), 10),
      rejectClose: false,
    });
    const pop = Number(popInput) || 0;
    const mod = pop <= 1 ? -2 : pop <= 5 ? 0 : pop <= 7 ? 1 : pop <= 9 ? 2 : 3;
    const modLabel = pop <= 1 ? '인구1이하(-2)' : pop <= 5 ? '인구2~5(+0)' : pop <= 7 ? '인구6~7(+1)' : pop <= 9 ? '인구8~9(+2)' : '인구10+(+3)';

    const roll = new Roll('2d6');
    await roll.evaluate();
    const adjusted = Math.max(2, Math.min(15, roll.total + mod));
    const result = data.rows[String(adjusted)] ?? 'X';

    await roll.toMessage({
      speaker: ChatMessage.getSpeaker(),
      flavor: `${title}, 2D=${roll.total}, ${modLabel}, 합=${adjusted} → 등급 ${result}`,
    });
  }

  // 법규 수준 처벌 표: 2D + 범죄 수정치
  async _rollLawPunish(title, data) {
    const crimes = Object.keys(data.crimeMods);
    const options = crimes.map((c,i) => `<option value="${c}">${c} (${data.crimeMods[c]>=0?'+':''}${data.crimeMods[c]})</option>`).join('');
    const lawInput = await Dialog.prompt({
      title: '처벌 판정',
      content: `
        <div style="display:flex;flex-direction:column;gap:8px;padding:8px">
          <label>범죄 유형</label>
          <select id="tsp-crime-sel" style="padding:4px;background:#1a2540;color:#c8e0ff;border:1px solid #4a6ea8">
            ${options}
            <option value="기타">기타/수동 입력</option>
          </select>
          <label>추가 수정치 (직접 입력)</label>
          <input type="number" id="tsp-crime-mod" value="0" style="width:100%;text-align:center;font-size:14px;background:#1a2540;color:#c8e0ff;border:1px solid #4a6ea8" />
        </div>`,
      label: '굴리기',
      callback: html => ({
        crime: html.find('#tsp-crime-sel').val(),
        extra: parseInt(html.find('#tsp-crime-mod').val(), 10) || 0,
      }),
      rejectClose: false,
    });
    if (!lawInput) return;
    const crimeMod = data.crimeMods[lawInput.crime] ?? 0;
    const totalMod = crimeMod + (lawInput.extra || 0);

    const roll = new Roll('2d6');
    await roll.evaluate();
    const adjusted = roll.total + totalMod;
    const key = String(Math.min(99, Math.max(-99, adjusted)));
    const result = data.rows[key] ?? (adjusted <= 0 ? '석방 또는 훈방' : '사형');

    await roll.toMessage({
      speaker: ChatMessage.getSpeaker(),
      flavor: `${title}, 범죄=${lawInput.crime}(${totalMod>=0?'+':''}${totalMod}), 2D=${roll.total}→${adjusted} → ${result}`,
    });
  }

  // 보수 미비 표: 2D + 미보수 개월 수
  async _rollMaintFail(title, data) {
    const monthInput = await Dialog.prompt({
      title: '미보수 개월 수 입력',
      content: `<p>보수하지 못한 개월 수를 입력하세요.</p>
        <input type="number" id="tsp-maint-months" min="0" max="24" value="1"
          style="width:100%;text-align:center;font-size:16px;" />`,
      label: '굴리기',
      callback: html => parseInt(html.find('#tsp-maint-months').val(), 10),
      rejectClose: false,
    });
    const months = Math.max(0, Number(monthInput) || 0);

    const roll = new Roll('2d6');
    await roll.evaluate();
    const adjusted = roll.total + months;
    const key = String(Math.min(12, Math.max(2, adjusted)));
    const result = data.rows[key] ?? '(결과 없음)';

    await roll.toMessage({
      speaker: ChatMessage.getSpeaker(),
      flavor: `${title}, 미보수 ${months}개월(+${months}), 2D=${roll.total}→${adjusted} → ${result}`,
    });
  }

  _buildCategories() {
    return [
      {
        id: 'charmaking', label: '캐릭터메이킹',
        items: [
          ...CHARMAKING_TABLES,
          { type: 'header', title: '직업 목록' },
          ...CAREER_TABLES,
        ]
      },
      { id: 'encounter',  label: '조우·NPC',     items: ENCOUNTER_TABLES },
      { id: 'space',      label: '우주 관련',     items: SPACE_TABLES },
      { id: 'trade',      label: '세계·무역',     items: TRADE_TABLES },
    ];
  }
}
