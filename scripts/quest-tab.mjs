export class QuestTab {

  constructor(widget) {
    this._widget  = widget;
    this._subView = 'current'; // 'current' | 'list'
  }

  get _dataKey() { return 'quest'; }
  _data()        { return this._widget._sceneData(this._dataKey); }
  async _save(p) { return this._widget._save(this._dataKey, p); }

  _quests()       { return this._data().quests      ?? []; }
  _activeId()     { return this._data().activeId    ?? null; }
  _logs()         { return this._data().logs        ?? []; }

  _activeQuest()  {
    const id = this._activeId();
    return this._quests().find(q => q.id === id) ?? this._quests()[0] ?? null;
  }

  // ── HTML 빌드 ─────────────────────────────────────────────
  buildHTML() {
    return this._subView === 'list'
      ? this._buildListView()
      : this._buildCurrentView();
  }

  // ── 현재 의뢰 뷰 ─────────────────────────────────────────
  _buildCurrentView() {
    const isGM  = game.user.isGM;
    const quest = this._activeQuest();
    const logs  = this._logs()
      .filter(l => !quest || l.questId === quest?.id)
      .sort((a, b) => a.ts - b.ts);

    const logsHTML = logs.map(l => `
      <div class="tsp-qt-log-entry">
        <span class="tsp-qt-log-time">${this._fmtTime(l.ts)}</span>
        <span class="tsp-qt-log-user">${l.user}</span>
        <span class="tsp-qt-log-text">${this._escHtml(l.text)}</span>
      </div>`).join('');

    return `
      <div class="tsp-qt-wrap">

        <!-- 상단: 의뢰목록 버튼 -->
        <div class="tsp-qt-topbar">
          <span class="tsp-qt-active-title">
            ${quest ? `<i class="fa-solid fa-circle-dot"></i> ${this._escHtml(quest.name)}` : '의뢰 없음'}
          </span>
          <button class="tsp-qt-list-btn" id="tsp-qt-list-btn">
            <i class="fa-solid fa-list"></i> 의뢰 목록
          </button>
        </div>

        <!-- 메인 좌우 분할 -->
        <div class="tsp-qt-main">

          <!-- 왼쪽: 현재 의뢰 상세 -->
          <div class="tsp-qt-left">
            ${isGM ? `
              <div class="tsp-qt-field-row">
                <input class="tsp-qt-name-input" type="text"
                       value="${quest ? this._escHtml(quest.name) : ''}"
                       placeholder="의뢰명 입력..." />
              </div>` : `
              <div class="tsp-qt-cur-name">${quest ? this._escHtml(quest.name) : '진행 중인 의뢰 없음'}</div>`
            }
            <div class="tsp-qt-desc-wrap">
              ${isGM ? `
                <textarea class="tsp-qt-desc-input"
                          placeholder="의뢰 내용을 입력하세요...">${quest ? this._escHtml(quest.desc ?? '') : ''}</textarea>
              ` : `
                <div class="tsp-qt-desc-text">${quest ? this._escHtml(quest.desc ?? '') : ''}</div>
              `}
            </div>
          </div>

          <!-- 오른쪽: 로그 -->
          <div class="tsp-qt-right">
            <div class="tsp-qt-log-list" id="tsp-qt-log-list">
              ${logsHTML || '<div class="tsp-qt-log-empty">로그가 없습니다</div>'}
            </div>
            <div class="tsp-qt-log-input-row">
              <input class="tsp-qt-log-input" id="tsp-qt-log-input"
                     type="text"
                     placeholder="의뢰 로그 기입..."
                     ${quest ? '' : 'disabled'} />
              <button class="tsp-qt-log-send" id="tsp-qt-log-send" ${quest ? '' : 'disabled'}>
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>

        </div>
      </div>`;
  }

  // ── 의뢰 목록 뷰 ─────────────────────────────────────────
  _buildListView() {
    const isGM   = game.user.isGM;
    const quests = this._quests();
    const active = this._activeId();

    const listHTML = quests.length ? quests.map(q => `
      <div class="tsp-qt-list-item ${q.id === active ? 'active' : ''}" data-quest-id="${q.id}">
        <div class="tsp-qt-li-name">${this._escHtml(q.name)}</div>
        <div class="tsp-qt-li-meta">
          <span class="tsp-qt-li-place">${this._escHtml(q.place ?? '-')}</span>
          <span class="tsp-qt-li-reward">Cr ${Number(q.reward ?? 0).toLocaleString()}</span>
        </div>
        ${isGM ? `<button class="tsp-qt-li-del" data-quest-id="${q.id}"><i class="fa-solid fa-xmark fa-xs"></i></button>` : ''}
      </div>`).join('')
    : '<div class="tsp-qt-list-empty">의뢰가 없습니다</div>';

    // 선택된 의뢰 상세
    const sel = quests.find(q => q.id === active) ?? quests[0];

    return `
      <div class="tsp-qt-wrap">

        <!-- 상단 -->
        <div class="tsp-qt-topbar">
          <span class="tsp-qt-active-title"><i class="fa-solid fa-list"></i> 의뢰 목록</span>
          <button class="tsp-qt-list-btn" id="tsp-qt-back-btn">
            <i class="fa-solid fa-arrow-left"></i> 현재 의뢰
          </button>
        </div>

        <!-- 메인 좌우 분할 -->
        <div class="tsp-qt-main">

          <!-- 왼쪽: 선택 의뢰 상세 -->
          <div class="tsp-qt-left">
            ${sel ? `
              <div class="tsp-qt-detail-header">
                <div class="tsp-qt-detail-row">
                  <span class="tsp-qt-detail-label">의뢰명</span>
                  <span class="tsp-qt-detail-val name">${this._escHtml(sel.name)}</span>
                </div>
                <div class="tsp-qt-detail-row">
                  <span class="tsp-qt-detail-label">위치</span>
                  <span class="tsp-qt-detail-val">${this._escHtml(sel.place ?? '-')}</span>
                </div>
                <div class="tsp-qt-detail-row">
                  <span class="tsp-qt-detail-label">보수금</span>
                  <span class="tsp-qt-detail-val reward">Cr ${Number(sel.reward ?? 0).toLocaleString()}</span>
                </div>
              </div>
              <div class="tsp-qt-desc-wrap">
                <div class="tsp-qt-desc-text">${this._escHtml(sel.desc ?? '')}</div>
              </div>
              <div class="tsp-qt-activate-row">
                <button class="tsp-qt-activate-btn" id="tsp-qt-activate-btn" data-quest-id="${sel.id}">
                  <i class="fa-solid fa-bullhorn"></i> 의뢰 띄우기
                </button>
              </div>
            ` : '<div class="tsp-qt-desc-text" style="opacity:0.4;padding:10px;">의뢰를 선택하세요</div>'}
          </div>

          <!-- 오른쪽: 목록 + 추가 -->
          <div class="tsp-qt-right list-mode">
            <div class="tsp-qt-list-scroll" id="tsp-qt-list-scroll">
              ${listHTML}
            </div>
            ${isGM ? `
              <div class="tsp-qt-add-row">
                <button class="tsp-qt-add-btn" id="tsp-qt-add-btn">
                  <i class="fa-solid fa-plus"></i> 의뢰 추가
                </button>
              </div>` : ''}
          </div>

        </div>
      </div>`;
  }

  // ── 이벤트 바인딩 ─────────────────────────────────────────
  bindEvents(panel) {
    if (this._subView === 'list') {
      this._bindListEvents(panel);
    } else {
      this._bindCurrentEvents(panel);
    }
  }

  _bindCurrentEvents(panel) {
    const isGM = game.user.isGM;

    // 의뢰목록 버튼
    panel.querySelector('#tsp-qt-list-btn')?.addEventListener('click', () => {
      this._subView = 'list';
      this._widget._renderPanel('quest');
    });

    // GM: 의뢰명 변경
    if (isGM) {
      panel.querySelector('.tsp-qt-name-input')?.addEventListener('change', async e => {
        const quest = this._activeQuest();
        if (!quest) return;
        await this._updateQuest(quest.id, { name: e.target.value });
      });

      // GM: 의뢰내용 변경
      panel.querySelector('.tsp-qt-desc-input')?.addEventListener('change', async e => {
        const quest = this._activeQuest();
        if (!quest) return;
        await this._updateQuest(quest.id, { desc: e.target.value });
      });
    }

    // 로그 전송
    const logInput = panel.querySelector('#tsp-qt-log-input');
    const logSend  = panel.querySelector('#tsp-qt-log-send');

    const sendLog = async () => {
      const text = logInput?.value?.trim();
      if (!text) return;
      await this._addLog(text);
      if (logInput) logInput.value = '';
    };

    logSend?.addEventListener('click', sendLog);
    logInput?.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendLog(); }
    });

    // 로그 스크롤 하단 고정
    const logList = panel.querySelector('#tsp-qt-log-list');
    if (logList) logList.scrollTop = logList.scrollHeight;
  }

  _bindListEvents(panel) {
    const isGM = game.user.isGM;

    // 뒤로가기
    panel.querySelector('#tsp-qt-back-btn')?.addEventListener('click', () => {
      this._subView = 'current';
      this._widget._renderPanel('quest');
    });

    // 목록 아이템 클릭 → 상세 표시 + 활성화
    panel.querySelectorAll('.tsp-qt-list-item').forEach(item => {
      item.addEventListener('click', async e => {
        if (e.target.closest('button')) return;
        const id = item.dataset.questId;
        await this._save({ activeId: id });
        // 상세를 왼쪽에 즉시 반영
        this._widget._renderPanel('quest');
      });
    });

    // 의뢰 띄우기 (활성 의뢰로 설정 + 현재 의뢰 뷰로 전환)
    panel.querySelector('#tsp-qt-activate-btn')?.addEventListener('click', async e => {
      const id = e.currentTarget.dataset.questId;
      await this._save({ activeId: id });
      this._subView = 'current';
      this._widget._renderPanel('quest');
    });

    // 의뢰 삭제 (GM)
    if (isGM) {
      panel.querySelectorAll('.tsp-qt-li-del').forEach(btn => {
        btn.addEventListener('click', async e => {
          e.stopPropagation();
          const id     = btn.dataset.questId;
          const quests = this._quests().filter(q => q.id !== id);
          const logs   = this._logs().filter(l => l.questId !== id);
          const activeId = this._activeId() === id
            ? (quests[0]?.id ?? null)
            : this._activeId();
          await this._save({ quests, logs, activeId });
        });
      });

      // 의뢰 추가
      panel.querySelector('#tsp-qt-add-btn')?.addEventListener('click', async () => {
        const name = await Dialog.prompt({
          title: '새 의뢰 추가',
          content: `
            <div style="display:flex;flex-direction:column;gap:8px;">
              <input id="qt-add-name"   type="text"   placeholder="의뢰명"   style="width:100%;padding:4px;background:#0a1628;color:#c8e0ff;border:1px solid rgba(0,140,220,0.4);border-radius:4px;" />
              <input id="qt-add-place"  type="text"   placeholder="장소"     style="width:100%;padding:4px;background:#0a1628;color:#c8e0ff;border:1px solid rgba(0,140,220,0.4);border-radius:4px;" />
              <input id="qt-add-reward" type="number" placeholder="보수금"   style="width:100%;padding:4px;background:#0a1628;color:#c8e0ff;border:1px solid rgba(0,140,220,0.4);border-radius:4px;" />
              <textarea id="qt-add-desc" placeholder="의뢰 상세 내용" rows="5" style="width:100%;padding:4px;background:#0a1628;color:#c8e0ff;border:1px solid rgba(0,140,220,0.4);border-radius:4px;resize:vertical;"></textarea>
            </div>`,
          label: '추가',
          callback: html => ({
            name:   html.find('#qt-add-name').val(),
            place:  html.find('#qt-add-place').val(),
            reward: html.find('#qt-add-reward').val(),
            desc:   html.find('#qt-add-desc').val(),
          }),
        }).catch(() => null);

        if (!name?.name) return;
        const newQuest = {
          id:     foundry.utils.randomID(),
          name:   name.name,
          place:  name.place  ?? '',
          reward: Number(name.reward) || 0,
          desc:   name.desc ?? '',
        };
        const quests   = [...this._quests(), newQuest];
        const activeId = this._activeId() ?? newQuest.id;
        await this._save({ quests, activeId });
      });
    }
  }

  // ── 로그 추가 ─────────────────────────────────────────────
  async _addLog(text) {
    const quest = this._activeQuest();
    if (!quest) return;
    const log = {
      id:      foundry.utils.randomID(),
      questId: quest.id,
      user:    game.user.name,
      text,
      ts:      Date.now(),
    };
    await this._save({ logs: [...this._logs(), log] });
  }

  // ── 의뢰 업데이트 ─────────────────────────────────────────
  async _updateQuest(id, patch) {
    const quests = this._quests().map(q => q.id === id ? { ...q, ...patch } : q);
    await this._save({ quests });
  }

  // ── 유틸 ──────────────────────────────────────────────────
  _fmtTime(ts) {
    const d = new Date(ts);
    return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
  }

  _escHtml(str) {
    return String(str ?? '')
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;')
      .replace(/\n/g,'<br>');
  }
}
