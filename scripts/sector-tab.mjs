const TTK_ID = 'traveller-toolkit';

function subsectorImageUrl(sector, position, scale = 48) {
  const params = new URLSearchParams({ sector, subsector: position, style: 'poster', scale: String(scale) });
  return `https://travellermap.com/api/poster?${params}`;
}

export class SectorTab {

  constructor(widget) {
    this._widget = widget;
  }

  get _dataKey() { return 'sector'; }
  _data()        { return this._widget._sceneData(this._dataKey); }
  async _save(p) { return this._widget._save(this._dataKey, p); }

  _registeredList() { return this._data().registered ?? []; }
  // 등록 형태: [{ journalId, sector, position, name }, ...]

  // ── HTML 빌드 ─────────────────────────────────────────────
  buildHTML() {
    const list  = this._registeredList();
    const isGM  = game.user.isGM;

    const cardsHTML = list.map(item => this._cardHTML(item, isGM)).join('');

    return `
      <div class="tsp-sc-wrap">
        <div class="tsp-sc-list" id="tsp-sc-list">
          ${cardsHTML}
          <div class="tsp-sc-plus" id="tsp-sc-plus" title="서브섹터를 여기에 드래그">
            <i class="fa-solid fa-plus"></i>
            <span>서브섹터 드래그로 등록</span>
          </div>
        </div>
        <div class="tsp-sc-scrollbar">
          <button class="tsp-sc-scroll-btn" id="tsp-sc-scroll-left"><i class="fa-solid fa-chevron-left"></i></button>
          <button class="tsp-sc-scroll-btn" id="tsp-sc-scroll-right"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>`;
  }

  _cardHTML(item, isGM) {
    const imgUrl = subsectorImageUrl(item.sector, item.position, 48);
    const delBtn = isGM
      ? `<button class="tsp-sc-del" data-key="${item.journalId}" title="제거"><i class="fa-solid fa-xmark fa-xs"></i></button>`
      : '';
    return `
      <div class="tsp-sc-card" data-journal-id="${item.journalId}">
        ${delBtn}
        <div class="tsp-sc-sector-label">${item.sector}</div>
        <div class="tsp-sc-img-wrap">
          <img class="tsp-sc-img" src="${imgUrl}" alt="${item.name}" loading="lazy" />
          <div class="tsp-sc-img-loading"><i class="fa-solid fa-spinner fa-spin"></i></div>
        </div>
        <div class="tsp-sc-name">${item.name}</div>
        <div class="tsp-sc-pos">구역 ${item.position}</div>
      </div>`;
  }

  // ── 이벤트 바인딩 ─────────────────────────────────────────
  bindEvents(panel) {
    const list = panel.querySelector('#tsp-sc-list');
    const plus = panel.querySelector('#tsp-sc-plus');

    // 드래그 앤 드롭 — list 전체와 plus 모두 받음
    [list, plus].forEach(el => {
      if (!el) return;
      el.addEventListener('dragover', e => {
        e.preventDefault();
        e.stopPropagation();
        plus?.classList.add('drag-over');
      });
      el.addEventListener('dragleave', e => {
        // list 밖으로 나갈 때만 제거
        if (!list?.contains(e.relatedTarget)) {
          plus?.classList.remove('drag-over');
        }
      });
      el.addEventListener('drop', async e => {
        e.preventDefault();
        e.stopPropagation();
        plus?.classList.remove('drag-over');
        await this._onDrop(e);
      });
    });

    // 삭제
    panel.querySelectorAll('.tsp-sc-del').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation();
        const key = btn.dataset.key;
        const registered = this._registeredList().filter(i => i.journalId !== key);
        await this._save({ registered });
      });
    });

    // 스크롤
    panel.querySelector('#tsp-sc-scroll-left')?.addEventListener('click',  () => list?.scrollBy({ left: -280, behavior: 'smooth' }));
    panel.querySelector('#tsp-sc-scroll-right')?.addEventListener('click', () => list?.scrollBy({ left:  280, behavior: 'smooth' }));

    // 이미지 로드
    panel.querySelectorAll('.tsp-sc-img').forEach(img => {
      const wrap = img.closest('.tsp-sc-img-wrap');
      const spinner = wrap?.querySelector('.tsp-sc-img-loading');
      if (img.complete && img.naturalWidth > 0) {
        spinner?.remove();
      } else {
        img.addEventListener('load',  () => spinner?.remove());
        img.addEventListener('error', () => {
          spinner?.remove();
          img.style.display = 'none';
          wrap?.insertAdjacentHTML('beforeend',
            `<div class="tsp-sc-img-error"><i class="fa-solid fa-triangle-exclamation"></i><span>로드 실패</span></div>`);
        });
      }
    });

    // 카드 클릭 → 이미지 확대 라이트박스
    panel.querySelectorAll('.tsp-sc-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('button')) return;
        const img = card.querySelector('.tsp-sc-img');
        if (!img?.src) return;
        this._openLightbox(img.src, card.querySelector('.tsp-sc-name')?.textContent ?? '');
      });
    });
  }

  // ── 드롭 처리 ─────────────────────────────────────────────
  async _onDrop(e) {
    // application/json 키로 데이터 읽기
    let raw = e.dataTransfer.getData('application/json')
           || e.dataTransfer.getData('text/plain');
    if (!raw) return;

    let data;
    try { data = JSON.parse(raw); }
    catch { return; }

    const ttkType = data.journalEntry?.flags?.[TTK_ID]?.type;
    const ttkData = data.journalEntry?.flags?.[TTK_ID]?.data;

    // ── 케이스 1: 서브섹터를 직접 드래그 ──────────────────
    if (ttkType === 'subsector' && ttkData?.sector && ttkData?.position) {
      const journalId = data.journalEntry?._id
                     ?? data.uuid?.split('.').pop()
                     ?? data.id;
      await this._register({
        journalId,
        sector:   ttkData.sector,
        position: ttkData.position,
        name:     ttkData.name ?? data.journalEntry?.name ?? '서브섹터',
      });
      return;
    }

    // ── 케이스 2: 섹터를 드래그 → 서브섹터 선택 다이얼로그 ──
    if (ttkType === 'sector' && ttkData?.subsectors) {
      await this._selectSubsector(data.journalEntry?.name ?? '섹터', ttkData);
      return;
    }

    // ── 케이스 3: 기존 방식 (uuid/id로 Journal 조회) ────────
    const uuid = data.uuid || (data.id ? `JournalEntry.${data.id}` : null);
    if (uuid) {
      const je = await fromUuid(uuid).catch(() => null);
      if (je) {
        const flags = je.flags?.[TTK_ID];
        if (flags?.type === 'subsector') {
          await this._register({
            journalId: je.id,
            sector:    flags.data?.sector,
            position:  flags.data?.position,
            name:      flags.data?.name ?? je.name,
          });
          return;
        }
      }
    }

    ui.notifications.warn('traveller-toolkit 서브섹터를 드래그하세요.');
  }

  // ── 서브섹터 선택 다이얼로그 (섹터 드래그 시) ─────────────
  async _selectSubsector(sectorName, ttkData) {
    const subsectors = ttkData.subsectors ?? {};
    const entries    = Object.entries(subsectors); // [['A', journalId], ...]
    if (!entries.length) {
      ui.notifications.warn('이 섹터에 서브섹터가 없습니다.');
      return;
    }

    // 서브섹터 Journal들의 이름 가져오기
    const options = entries.map(([pos, jid]) => {
      const je   = game.journal.get(jid);
      const name = je?.flags?.[TTK_ID]?.data?.name ?? je?.name ?? pos;
      return `<option value="${pos}|${jid}">${name} (${pos})</option>`;
    }).join('');

    const selected = await Dialog.prompt({
      title: `${sectorName} — 서브섹터 선택`,
      content: `
        <p style="font-size:12px;color:#8ab4d8;margin-bottom:6px;">등록할 서브섹터를 선택하세요.</p>
        <select id="tsp-sub-select" style="width:100%;padding:4px;background:#0a1628;color:#c8e0ff;border:1px solid rgba(0,140,220,0.4);border-radius:4px;">
          ${options}
        </select>`,
      label: '등록',
      callback: html => html.find('#tsp-sub-select').val(),
    }).catch(() => null);

    if (!selected) return;

    const [position, journalId] = selected.split('|');
    const je   = game.journal.get(journalId);
    const name = je?.flags?.[TTK_ID]?.data?.name ?? je?.name ?? position;

    await this._register({ journalId, sector: sectorName, position, name });
  }

  // ── 이미지 라이트박스 ────────────────────────────────────
  _openLightbox(src, title) {
    // 기존 라이트박스 제거
    document.getElementById('tsp-lightbox')?.remove();

    const lb = document.createElement('div');
    lb.id = 'tsp-lightbox';
    lb.innerHTML = `
      <div class="tsp-lb-backdrop"></div>
      <div class="tsp-lb-container">
        <div class="tsp-lb-header">
          <span class="tsp-lb-title">${title}</span>
          <button class="tsp-lb-close"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="tsp-lb-body">
          <img class="tsp-lb-img" src="${src}" alt="${title}" />
        </div>
      </div>
    `;

    document.getElementById('interface')?.appendChild(lb);

    // 닫기
    const close = () => document.getElementById('tsp-lightbox')?.remove();
    lb.querySelector('.tsp-lb-close').addEventListener('click', close);
    lb.querySelector('.tsp-lb-backdrop').addEventListener('click', close);
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
    });
  }

  // ── 실제 등록 ─────────────────────────────────────────────
  async _register({ journalId, sector, position, name }) {
    if (!journalId || !sector || !position) {
      ui.notifications.warn('서브섹터 데이터가 불완전합니다.');
      return;
    }
    const registered = this._registeredList();
    if (registered.some(i => i.journalId === journalId)) {
      ui.notifications.info(`"${name}"은 이미 등록되어 있습니다.`);
      return;
    }
    await this._save({ registered: [...registered, { journalId, sector, position, name }] });
    ui.notifications.info(`서브섹터 "${name}" 등록 완료!`);
  }
}
