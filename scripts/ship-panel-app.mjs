import { SHIP_DATA, SHIP_TYPES, SHIP_CATEGORIES } from './ship-data.mjs';
import { TravellerTab } from './traveller-tab.mjs';
import { SectorTab } from './sector-tab.mjs';
import { QuestTab } from './quest-tab.mjs';
import { TradeTab } from './trade-tab.mjs';
import { RulesTab } from './rules-tab.mjs';
import { TablesTab } from './tables-tab.mjs';

export class ShipPanelWidget {

  constructor({ socket }) {
    this._socketName = socket;
    this._activeTab  = null;
    this._el         = null;
    this._localCache = {};
    this._travellerTab = new TravellerTab(this);
    this._sectorTab = new SectorTab(this);
    this._questTab = new QuestTab(this);
    this._tradeTab = new TradeTab(this);
    this._rulesTab = new RulesTab(this);
    this._tablesTab = new TablesTab(this);
  }

  // ── 권한 체크 ─────────────────────────────────────────────
  get _isGM() { return game.user.isGM; }

  _can(key) {
    // GM은 항상 가능
    if (this._isGM) return true;
    // 플레이어는 설정값 확인
    return game.settings.get('traveller-panel', key) === true;
  }

  // ── 씬 키 ─────────────────────────────────────────────────
  get _sceneKey() {
    return 'global'; // 전역 공유 - 씬 무관
  }

  // ── 데이터 ────────────────────────────────────────────────
  _sceneData(tab) {
    const cache = this._localCache[this._sceneKey];
    if (cache?.[tab]) return cache[tab];
    const stored = game.settings.get('traveller-panel', 'shipData') ?? {};
    return (stored[this._sceneKey] ?? {})[tab] ?? {};
  }

  async _save(tab, patch) {
    const next = { ...this._sceneData(tab), ...patch };
    if (!this._localCache[this._sceneKey]) this._localCache[this._sceneKey] = {};
    this._localCache[this._sceneKey][tab] = next;

    if (this._isGM) {
      const all = game.settings.get('traveller-panel', 'shipData') ?? {};
      if (!all[this._sceneKey]) all[this._sceneKey] = {};
      all[this._sceneKey][tab] = next;
      await game.settings.set('traveller-panel', 'shipData', all);
    }

    game.socket.emit(this._socketName, {
      type: 'syncData',
      sceneKey: this._sceneKey,
      tab,
      data: next,
      requestSave: !this._isGM
    });

    // 발신자 본인도 즉시 UI 갱신 (소켓은 발신자에게 되돌아오지 않으므로)
    if (this._activeTab) this._renderPanel(this._activeTab);
  }

  receiveSync(sceneKey, data, tab) {
    if (!this._localCache[sceneKey]) this._localCache[sceneKey] = {};
    if (tab) this._localCache[sceneKey][tab] = data;
    if (sceneKey === this._sceneKey && this._activeTab) {
      this._renderPanel(this._activeTab);
    }
  }

  refreshScene() {
    if (this._activeTab) this._renderPanel(this._activeTab);
  }

  // ── 마운트 ────────────────────────────────────────────────
  mount() {
    if (document.getElementById('tsp-tabbar')) return;
    const bar = document.createElement('div');
    bar.id = 'tsp-tabbar';
    bar.innerHTML = `
      <div id="tsp-tabs">
        <button class="tsp-tab" data-tab="ship">
          <i class="fa-solid fa-rocket"></i> 우주선
        </button>
        <button class="tsp-tab" data-tab="traveller">
          <i class="fa-solid fa-users"></i> 여행자
        </button>
        <button class="tsp-tab" data-tab="sector">
          <i class="fa-solid fa-map"></i> 섹터
        </button>
        <button class="tsp-tab" data-tab="quest">
          <i class="fa-solid fa-scroll"></i> 의뢰
        </button>
        <button class="tsp-tab" data-tab="trade">
          <i class="fa-solid fa-coins"></i> 교역
        </button>
        <button class="tsp-tab" data-tab="rules">
          <i class="fa-solid fa-book"></i> 규칙
        </button>
        <button class="tsp-tab" data-tab="tables">
          <i class="fa-solid fa-table-list"></i> 표
        </button>
        <button class="tsp-refresh-btn" id="tsp-refresh-btn" title="새로고침">
          <i class="fa-solid fa-rotate-right"></i>
        </button>
      </div>
      <div id="tsp-panel" style="display:none;"></div>
    `;
    document.getElementById('interface')?.appendChild(bar);
    this._el = bar;
    bar.querySelector('#tsp-tabs').addEventListener('click', e => {
      const btn = e.target.closest('.tsp-tab');
      if (btn) this._toggleTab(btn.dataset.tab);
    });

    // 새로고침 버튼
    bar.querySelector('#tsp-refresh-btn').addEventListener('click', () => {
      this._localCache = {}; // 로컬 캐시 초기화 → settings에서 최신 데이터 재읽기
      if (this._activeTab) {
        this._renderPanel(this._activeTab);
      }
      // 애니메이션
      const icon = document.querySelector('#tsp-refresh-btn i');
      if (icon) {
        icon.classList.add('tsp-spin');
        setTimeout(() => icon.classList.remove('tsp-spin'), 600);
      }
    });
  }

  _toggleTab(tab) {
    const panel = document.getElementById('tsp-panel');
    if (this._activeTab === tab) {
      this._activeTab = null;
      panel.style.display = 'none';
      document.querySelectorAll('.tsp-tab').forEach(b => b.classList.remove('active'));
    } else {
      this._activeTab = tab;
      panel.style.display = 'block';
      document.querySelectorAll('.tsp-tab').forEach(b =>
        b.classList.toggle('active', b.dataset.tab === tab));
      this._renderPanel(tab);
    }
  }

  _renderPanel(tab) {
    const panel = document.getElementById('tsp-panel');
    if (!panel) return;
    if (tab === 'ship') {
      panel.innerHTML = this._buildShipPanel();
      this._bindShipEvents(panel);
    } else if (tab === 'traveller') {
      panel.innerHTML = this._travellerTab.buildHTML();
      this._travellerTab.bindEvents(panel);
    } else if (tab === 'sector') {
      panel.innerHTML = this._sectorTab.buildHTML();
      this._sectorTab.bindEvents(panel);
    } else if (tab === 'quest') {
      panel.innerHTML = this._questTab.buildHTML();
      this._questTab.bindEvents(panel);
    } else if (tab === 'trade') {
      panel.innerHTML = this._tradeTab.buildHTML();
      this._tradeTab.bindEvents(panel);
    } else if (tab === 'rules') {
      panel.innerHTML = this._rulesTab.buildHTML();
      this._rulesTab.bindEvents(panel);
    } else if (tab === 'tables') {
      panel.innerHTML = this._tablesTab.buildHTML();
      this._tablesTab.bindEvents(panel);
    }
  }

  // ── 저장된 함선 ───────────────────────────────────────────
  _getSavedShips() {
    return game.settings.get('traveller-panel', 'savedShips') ?? {};
  }
  async _saveShip(name, data) {
    const ships = this._getSavedShips();
    ships[name] = { ...data, savedAt: Date.now() };
    await game.settings.set('traveller-panel', 'savedShips', ships);
  }
  async _deleteShip(name) {
    const ships = this._getSavedShips();
    delete ships[name];
    await game.settings.set('traveller-panel', 'savedShips', ships);
  }

  // ── 우주선 패널 HTML ──────────────────────────────────────
  _buildShipPanel() {
    const data      = this._sceneData('ship');
    const baseStats = data.selectedShip ? SHIP_DATA[data.selectedShip] : null;
    const stats     = baseStats ? { ...baseStats, ...(data.customStats ?? {}) } : null;
    const saved     = this._getSavedShips();
    const savedKeys = Object.keys(saved);

    const canSelect  = this._can('permSelectShip');
    const canEdit    = this._can('permEditStats');
    const canUpload  = this._can('permUploadImage');
    const canSwitch  = this._can('permSwitchView');
    const canLoad    = this._isGM; // 불러오기는 GM 전용
    const canDelete  = this._can('permDeleteShip');
    const canSave    = this._isGM; // 저장(생성)은 항상 GM만

    const dis = (flag) => flag ? '' : 'disabled';

    const options = Object.entries(SHIP_CATEGORIES).map(([cat, ships]) =>
      `<optgroup label="── ${cat} ──">${
        ships.map(s =>
          `<option value="${s.id}" ${data.selectedShip === s.id ? 'selected':''}>${s.name}</option>`
        ).join('')
      }</optgroup>`
    ).join('');

    const savedOptions = savedKeys.length
      ? savedKeys.map(k => `<option value="${k}">${k}</option>`).join('')
      : `<option value="" disabled>저장된 함선 없음</option>`;

    const currentImage = data.currentView === 'interior' ? data.interiorImage : data.exteriorImage;
    const imgHTML = currentImage
      ? `<img src="${currentImage}" class="tsp-ship-img" />`
      : `<div class="tsp-img-empty"><i class="fa-solid fa-image"></i><span>이미지 없음</span></div>`;

    const statsHTML = stats ? this._buildStats(stats, data, canEdit) : `
      <div class="tsp-no-ship">
        <i class="fa-solid fa-rocket"></i><p>함선을 선택하세요</p>
      </div>`;

    return `
      <div class="tsp-ship-wrap">
        <div class="tsp-ship-topbar">
          <input class="tsp-name-input" type="text"
                 value="${data.shipName ?? ''}" placeholder="함선 이름..."
                 ${dis(canSelect)} />
          <select class="tsp-ship-select" ${dis(canSelect)}>
            <option value="">-- 종류 선택 --</option>
            ${options}
          </select>
          <div class="tsp-fund-area">
            <span class="tsp-fund-label"><i class="fa-solid fa-vault"></i> 공용자금</span>
            <span class="tsp-fund-val" id="tsp-fund-display">Cr ${Number(data.shipFund ?? 0).toLocaleString()}</span>
            <button class="tsp-action-btn fund" id="tsp-fund-add-btn" title="자금 추가">
              <i class="fa-solid fa-plus"></i> 추가
            </button>
            ${this._isGM ? `<button class="tsp-action-btn danger fund-edit" id="tsp-fund-edit-btn" title="직접 수정">
              <i class="fa-solid fa-pen fa-xs"></i>
            </button>` : ''}
          </div>
          <div class="tsp-save-area">
            ${canSave ? `
              <button class="tsp-action-btn" id="tsp-save-ship-btn">
                <i class="fa-solid fa-floppy-disk"></i> 저장
              </button>` : ''}
            <select class="tsp-saved-select" id="tsp-saved-select" ${dis(canLoad)}>
              <option value="">-- 불러오기 --</option>
              ${savedOptions}
            </select>
            <button class="tsp-action-btn" id="tsp-load-ship-btn" ${dis(canLoad)}>
              <i class="fa-solid fa-folder-open"></i> 불러오기
            </button>
            ${(canDelete) ? `
              <button class="tsp-action-btn danger" id="tsp-delete-ship-btn">
                <i class="fa-solid fa-trash"></i>
              </button>` : ''}
          </div>
        </div>

        <div class="tsp-ship-main">
          <div class="tsp-ship-left">
            <div class="tsp-stats-scroll">${statsHTML}</div>
          </div>
          <div class="tsp-ship-right">
            <div class="tsp-view-tabs">
              <button class="tsp-view-btn ${data.currentView !== 'interior' ? 'active':''}"
                      data-view="exterior" ${dis(canSwitch)}>
                <i class="fa-solid fa-satellite"></i> 외부
              </button>
              <button class="tsp-view-btn ${data.currentView === 'interior' ? 'active':''}"
                      data-view="interior" ${dis(canSwitch)}>
                <i class="fa-solid fa-door-open"></i> 내부
              </button>
            </div>
            <div class="tsp-img-area">${imgHTML}</div>
            <div class="tsp-upload-row">
              <button class="tsp-upload-btn" data-slot="exterior" ${dis(canUpload)}>
                <i class="fa-solid fa-upload"></i> 외부 업로드
              </button>
              <button class="tsp-upload-btn" data-slot="interior" ${dis(canUpload)}>
                <i class="fa-solid fa-upload"></i> 내부 업로드
              </button>
            </div>
            <div class="tsp-img-status">
              <span class="tsp-dot ${data.exteriorImage ? 'on':''}"></span> 외부
              <span class="tsp-dot ${data.interiorImage ? 'on':''}"></span> 내부
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _buildStats(stats, data, canEdit) {
    const armorStr = stats.armorType
      ? `${stats.armorType}, 장갑 ${stats.armor}`
      : `장갑 ${stats.armor ?? 0}`;
    const val = (key) => {
      const c = data.customStats?.[key];
      if (c !== undefined) return c;
      if (key === 'armor') return armorStr;
      return stats[key] ?? '-';
    };

    // 동력 사용량 계산 (기동·점프 제외)
    const powerReq = stats.powerReq ?? {};
    const POWER_LABELS = {
      core: '기초', sensors: '감지기', weapons: '무기',
      fuelProcessor: '연료정제기', lowBerths: '냉동침상',
      biosphere: '생물권', medBay: '의무실', multiEnv: '환경순응시설',
      trainingFacilities: '훈련시설', loadingBelt: '하역벨트',
    };
    const coreVal = Number(powerReq.core) || 0;
    const equipEntries = Object.entries(powerReq)
      .filter(([k]) => !['core', 'maneuver', 'jump'].includes(k));
    const equipTotal = equipEntries.reduce((s, [, v]) => s + (Number(v) || 0), 0);
    const calcUsedPower = coreVal + equipTotal;
    const calcUsedPowerStr = `기초${coreVal}` + equipEntries
      .map(([k, v]) => ` ${POWER_LABELS[k] ?? k}${v}`).join('');

    // 사용 동력 수동 오버라이드 (숫자만 입력 시 적용, 비우면 자동 계산값 사용)
    const usedPowerOverride = data.customStats?.usedPowerOverride;
    const hasOverride = usedPowerOverride !== undefined && usedPowerOverride !== '';
    const usedPower = hasOverride ? (Number(usedPowerOverride) || 0) : calcUsedPower;
    const usedPowerDisplay = hasOverride ? String(usedPower) : calcUsedPowerStr;

    const totalPower = Number(val('power')) || 0;
    const sparePower = totalPower - usedPower;

    const sections = [
      { icon: 'fa-info-circle', title: '기본 정보',   fields: [['hull','선체(톤)'],['hullShape','선체 형태'],['tl','기술 수준 TL'],['armor','장갑'],['durability','내구도']] },
      { icon: 'fa-bolt',        title: '추진 & 점프', fields: [['maneuver','기동 드라이브'],['jump','점프 드라이브'],['power','동력 출력']],
        extra: powerReq && Object.keys(powerReq).length ? `
          <div class="tsp-row tsp-power-sub" data-field="usedPowerOverride">
            <span class="tsp-label">사용 동력</span>
            <span class="tsp-val">${usedPowerDisplay}${hasOverride ? ' <span class="tsp-power-override-badge">수동</span>' : ''}</span>
            <input class="tsp-input" type="text" value="${hasOverride ? usedPowerOverride : ''}" placeholder="예시: a11 b22 c33 (합계 자동계산)" />
            <div class="tsp-row-btns">
              ${canEdit ? `
                <button class="tsp-edit-btn"><i class="fa-solid fa-pen fa-xs"></i></button>
                <button class="tsp-save-btn"><i class="fa-solid fa-check fa-xs"></i></button>
                ${hasOverride ? `<button class="tsp-power-reset-btn" title="자동 계산으로 복원"><i class="fa-solid fa-rotate-left fa-xs"></i></button>` : ''}
              ` : ''}
            </div>
          </div>
          <div class="tsp-row tsp-power-sub ${sparePower < 0 ? 'tsp-power-warn' : ''}">
            <span class="tsp-label">여분 동력</span>
            <span class="tsp-val">${sparePower}</span>
            <span class="tsp-power-readonly" title="계산값 (편집 불가)"><i class="fa-solid fa-calculator fa-xs"></i></span>
          </div>` : '',
        moreFields: [['fuel','연료 탱크(톤)']]
      },
      { icon: 'fa-microchip',   title: '전자 장비',   fields: [['bridge','함교(톤)'],['computer','컴퓨터'],['sensors','감지기']] },
      { icon: 'fa-crosshairs',  title: '무장 & 인원', fields: [['weapons','무기'],['crew','승무원'],['staterooms','선실'],['cargo','화물칸(톤)']] },
      { icon: 'fa-coins',       title: '비용',        fields: [['maintenance','유지비'],['price','구입 가격']] },
    ];
    return sections.map(sec => `
      <div class="tsp-section">
        <div class="tsp-sec-title"><i class="fa-solid ${sec.icon}"></i> ${sec.title}</div>
        ${sec.fields.map(([key, label]) => `
          <div class="tsp-row" data-field="${key}">
            <span class="tsp-label">${label}</span>
            <span class="tsp-val">${val(key)}</span>
            <input class="tsp-input" type="text" value="${val(key)}" />
            <div class="tsp-row-btns">
              ${canEdit ? `
                <button class="tsp-edit-btn"><i class="fa-solid fa-pen fa-xs"></i></button>
                <button class="tsp-save-btn"><i class="fa-solid fa-check fa-xs"></i></button>
              ` : ''}
            </div>
          </div>
        `).join('')}
        ${sec.extra ?? ''}
        ${(sec.moreFields ?? []).map(([key, label]) => `
          <div class="tsp-row" data-field="${key}">
            <span class="tsp-label">${label}</span>
            <span class="tsp-val">${val(key)}</span>
            <input class="tsp-input" type="text" value="${val(key)}" />
            <div class="tsp-row-btns">
              ${canEdit ? `
                <button class="tsp-edit-btn"><i class="fa-solid fa-pen fa-xs"></i></button>
                <button class="tsp-save-btn"><i class="fa-solid fa-check fa-xs"></i></button>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `).join('') + (stats.notes ? `
      <div class="tsp-section">
        <div class="tsp-sec-title"><i class="fa-solid fa-scroll"></i> 비고</div>
        <p class="tsp-notes">${stats.notes}</p>
      </div>` : '');
  }

  // ── 이벤트 바인딩 ─────────────────────────────────────────
  _bindShipEvents(panel) {
    if (this._can('permSelectShip')) {
      panel.querySelector('.tsp-name-input')?.addEventListener('change', e =>
        this._save('ship', { shipName: e.target.value }));
      panel.querySelector('.tsp-ship-select')?.addEventListener('change', e =>
        this._save('ship', { selectedShip: e.target.value, customStats: {} }));
    }

    if (this._can('permSwitchView')) {
      panel.querySelectorAll('.tsp-view-btn').forEach(btn =>
        btn.addEventListener('click', () =>
          this._save('ship', { currentView: btn.dataset.view })));
    }

    if (this._can('permUploadImage')) {
      panel.querySelectorAll('.tsp-upload-btn').forEach(btn =>
        btn.addEventListener('click', () => {
          new FilePicker({
            type: 'image',
            callback: path => {
              const patch = {};
              patch[`${btn.dataset.slot}Image`] = path;
              this._save('ship', patch);
            }
          }).browse();
        }));
    }

    if (this._can('permEditStats')) {
      panel.querySelectorAll('.tsp-edit-btn').forEach(btn =>
        btn.addEventListener('click', () => {
          const row = btn.closest('.tsp-row');
          row.classList.add('editing');
          row.querySelector('.tsp-input').focus();
        }));
      panel.querySelectorAll('.tsp-save-btn').forEach(btn =>
        btn.addEventListener('click', () => this._saveRow(btn.closest('.tsp-row'))));
      panel.querySelectorAll('.tsp-input').forEach(input =>
        input.addEventListener('keydown', e => {
          if (e.key === 'Enter')  this._saveRow(input.closest('.tsp-row'));
          if (e.key === 'Escape') input.closest('.tsp-row').classList.remove('editing');
        }));
      panel.querySelectorAll('.tsp-power-reset-btn').forEach(btn =>
        btn.addEventListener('click', () => {
          const customStats = { ...(this._sceneData('ship').customStats ?? {}) };
          delete customStats.usedPowerOverride;
          this._save('ship', { customStats });
        }));
    }

    // 공용자금 추가 버튼
    panel.querySelector('#tsp-fund-add-btn')?.addEventListener('click', async () => {
      // 현재 사용자의 캐릭터(여행자) 목록 가져오기
      const myActors = game.actors.filter(a =>
        a.isOwner && !game.user.isGM && a.type !== 'npc'
      );
      const isGM = this._isGM;

      if (!isGM && myActors.length === 0) {
        return ui.notifications.warn('소유한 여행자 캐릭터가 없습니다.');
      }

      const actorOptions = isGM
        ? game.actors.filter(a => a.type !== 'npc').map(a =>
            `<option value="${a.id}">${a.name}</option>`).join('')
        : myActors.map(a =>
            `<option value="${a.id}">${a.name} (Cr ${Number(a.system?.finance?.cash??0).toLocaleString()})</option>`
          ).join('');

      const result = await Dialog.prompt({
        title: '공용자금 추가',
        content: `
          <div class="tsp-dialog-body">
            <label class="tsp-dialog-label">여행자 선택</label>
            <select id="fund-actor" class="tsp-dialog-select">
              ${actorOptions}
            </select>
            <label class="tsp-dialog-label">이체 금액 (Cr)</label>
            <input id="fund-amount" type="number" min="1" placeholder="금액 입력"
              class="tsp-dialog-input" />
          </div>`,
        label: '추가',
        callback: html => ({
          actorId: html.find('#fund-actor').val(),
          amount:  Number(html.find('#fund-amount').val()) || 0,
        })
      }).catch(() => null);

      if (!result?.actorId || !result.amount) return;

      const actor = game.actors.get(result.actorId);
      if (!actor) return;

      const currentCash = Number(actor.system?.finance?.cash ?? 0);
      if (result.amount > currentCash) {
        return ui.notifications.warn(`보유 자금(Cr ${currentCash.toLocaleString()}) 부족`);
      }

      // 여행자 자금 차감
      await actor.update({ 'system.finance.cash': currentCash - result.amount });

      // 공용자금 추가
      const newFund = (this._sceneData('ship').shipFund ?? 0) + result.amount;
      await this._save('ship', { shipFund: newFund });

      ui.notifications.info(`${actor.name}이 Cr ${result.amount.toLocaleString()} 공용자금에 추가했습니다.`);
    });

    // GM 공용자금 직접 수정
    panel.querySelector('#tsp-fund-edit-btn')?.addEventListener('click', async () => {
      const cur = this._sceneData('ship').shipFund ?? 0;
      const val = await Dialog.prompt({
        title: '공용자금 수정',
        content: `<input id="fund-direct" type="number" value="${cur}"
          style="width:100%;padding:4px;background:#0a1628;color:#c8e0ff;border:1px solid rgba(0,140,220,0.4);border-radius:4px;" />`,
        label: '확인',
        callback: html => Number(html.find('#fund-direct').val())
      }).catch(() => null);
      if (val === null) return;
      await this._save('ship', { shipFund: val });
    });

    // 저장 (GM 전용)
    panel.querySelector('#tsp-save-ship-btn')?.addEventListener('click', async () => {
      const data = this._sceneData('ship');
      const name = await Dialog.prompt({
        title: '함선 저장',
        content: `<input id="tsp-save-name" type="text"
                         value="${data.shipName || data.selectedShip || '새 함선'}"
                         style="width:100%;padding:4px;" />`,
        label: '저장',
        callback: html => html.find('#tsp-save-name').val()
      });
      if (!name) return;
      await this._saveShip(name, data);
      ui.notifications.info(`함선 "${name}" 저장 완료`);
      this._renderPanel('ship');
    });

    // 불러오기
    if (this._isGM) {
      panel.querySelector('#tsp-load-ship-btn')?.addEventListener('click', async () => {
        const name = panel.querySelector('#tsp-saved-select')?.value;
        if (!name) return ui.notifications.warn('불러올 함선을 선택하세요');
        const { savedAt, ...shipData } = this._getSavedShips()[name] ?? {};
        await this._save('ship', shipData);
        ui.notifications.info(`함선 "${name}" 불러오기 완료`);
      });
    }

    // 삭제
    if (this._can('permDeleteShip')) {
      panel.querySelector('#tsp-delete-ship-btn')?.addEventListener('click', async () => {
        const name = panel.querySelector('#tsp-saved-select')?.value;
        if (!name) return ui.notifications.warn('삭제할 함선을 선택하세요');
        const ok = await Dialog.confirm({
          title: '함선 삭제',
          content: `<p>"${name}"을(를) 삭제할까요?</p>`
        });
        if (!ok) return;
        await this._deleteShip(name);
        ui.notifications.info(`함선 "${name}" 삭제 완료`);
        this._renderPanel('ship');
      });
    }
  }

  _saveRow(row) {
    const field = row.dataset.field;
    let val = row.querySelector('.tsp-input').value.trim();

    // 사용동력 오버라이드: "a11 b22 c33" 형식이면 숫자 합산
    if (field === 'usedPowerOverride' && val && !/^\d+$/.test(val)) {
      const nums = val.match(/\d+/g);
      if (nums) val = String(nums.reduce((s, n) => s + parseInt(n, 10), 0));
    }

    const customStats = { ...(this._sceneData('ship').customStats ?? {}), [field]: val };
    this._save('ship', { customStats });
  }
}
