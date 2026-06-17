// ── 여행자 탭 ─────────────────────────────────────────────────
// Actor 데이터: actor.name, actor.img,
//   actor.system.sophont.{ age, species }
//   actor.system.finance.cash
//   actor.ownership (플레이어 소유 확인용)

// ── 기능 한글 번역 테이블 (traveller-chargen-sheet와 동일) ──────
const SKILL_KO = {
  admin:'행정', advocate:'변호', animals:'동물', art:'예술',
  astrogation:'우주 항법', athletics:'운동', broker:'중개',
  carouse:'유흥', deception:'기만', diplomat:'외교',
  drive:'운전', electronics:'전자기기', engineer:'공학',
  explosives:'폭발물', flyer:'비행', gambler:'도박',
  gunner:'포격', guncombat:'사격', heavyweapons:'중화기',
  independence:'독립심', investigate:'수사',
  jackofalltrades:'다재다능', language:'언어',
  leadership:'지도력', mechanic:'정비', medic:'의료',
  melee:'근접전', navigation:'항법', persuade:'설득',
  pilot:'우주 비행', profession:'직업', recon:'경계',
  science:'학문', seafarer:'항해', stealth:'은신',
  steward:'접객', streetwise:'세상물정', survival:'생존',
  tactics:'전술', vaccsuit:'진공복',
  telepathy:'텔레파시', clairvoyance:'투시',
  telekinesis:'염동력', awareness:'지각', teleportation:'순간 이동',
  // 전문화
  handling:'친화력', vetinary:'수의학', training:'훈련',
  performer:'공연', holography:'홀로그램', instrument:'악기',
  visualMedia:'영상 매체', write:'글쓰기',
  dexterity:'민첩(운동)', endurance:'인내(운동)', strength:'근력(운동)',
  hovercraft:'호버크래프트', mole:'굴착', track:'궤도형',
  walker:'보행형', wheel:'바퀴형',
  comms:'통신', computers:'컴퓨터', remoteOps:'원격 조작', sensors:'감지기',
  mDrive:'기동 추진', jDrive:'점프 추진', lifeSupport:'생명 유지', power:'전력',
  airship:'비행선', grav:'반중력', ornithopter:'날갯짓 비행',
  rotor:'회전익형', wing:'고정익형',
  turret:'포탑', ortillery:'궤도 포격', screen:'방어막', capital:'주력함',
  archaic:'구식 화기', energy:'에너지형', slug:'탄환형',
  artillery:'포병', portable:'휴대형', vehicle:'탑승형',
  galanglic:'갈란글릭', vilani:'빌라니', zdetl:'즈데틀',
  oynprith:'오인프리스', trokh:'트로크', gvegh:'그베그',
  unarmed:'비무장', blade:'도검', bludgeon:'둔기', natural:'자연 무기',
  smallCraft:'소형선', spacecraft:'우주선', capitalShips:'주력함',
  belter:'소행성 채굴', biologicals:'생물학적 산물',
  civilEngineering:'토목 공학', construction:'건설',
  hydroponics:'수경 재배', polymers:'폴리머', robotics:'로봇 공학',
  archaeology:'고고학', astronomy:'천문학', biology:'생물학',
  chemistry:'화학', cosmology:'우주론', cybernetics:'사이버네틱스',
  economics:'경제학', genetics:'유전학', history:'역사학',
  linquistics:'언어학', philosophy:'철학', physics:'물리학',
  planetology:'행성학', psionicology:'초능력학',
  psychology:'심리학', sophontology:'소폰트학', xenology:'외계 생물학',
  oceanShips:'해양 선박', personal:'개인선', sail:'범선', submarine:'잠수함',
  military:'지상전', naval:'우주전',
};

export class TravellerTab {

  constructor(widget) {
    this._widget = widget;
  }

  // ── 데이터 키 ─────────────────────────────────────────────
  get _dataKey() { return 'traveller'; }

  _data() { return this._widget._sceneData(this._dataKey); }

  async _save(patch) { return this._widget._save(this._dataKey, patch); }

  // ── 등록된 여행자 목록 (actorId 배열) ─────────────────────
  _registeredIds() {
    return this._data().registered ?? [];
  }

  // PL명 맵 { actorId: plName }
  _plNames() {
    return this._data().plNames ?? {};
  }

  // ── 여행자 카드 데이터 빌드 ───────────────────────────────
  _buildCards() {
    const ids     = this._registeredIds();
    const plNames = this._plNames();
    const cards   = [];

    for (const id of ids) {
      const actor = game.actors.get(id);
      if (!actor) continue;
      const sys = actor.system ?? {};
      const chars = sys.characteristics ?? {};
      const strVal = (chars.STR?.value ?? 0) + (chars.STR?.augment ?? 0);
      const dexVal = (chars.DEX?.value ?? 0) + (chars.DEX?.augment ?? 0);
      const endVal = (chars.END?.value ?? 0) + (chars.END?.augment ?? 0);
      // 캐릭터 손상 — 우선 mgt2e 기본 시스템 characteristics.X.damage를 읽고,
      // 없으면 traveller-chargen-sheet 플래그로 폴백
      const sysChars = sys.characteristics ?? {};
      const sysDmg = {
        STR: sysChars.STR?.damage ?? null,
        DEX: sysChars.DEX?.damage ?? null,
        END: sysChars.END?.damage ?? null,
      };
      const hasSysDmg = sysDmg.STR !== null || sysDmg.DEX !== null || sysDmg.END !== null;

      const dmgFlag = hasSysDmg ? {} : (actor.getFlag('traveller-chargen-sheet', 'damage') ?? {});
      const dmg = hasSysDmg
        ? { STR: sysDmg.STR ?? 0, DEX: sysDmg.DEX ?? 0, END: sysDmg.END ?? 0 }
        : { STR: dmgFlag.STR ?? 0, DEX: dmgFlag.DEX ?? 0, END: dmgFlag.END ?? 0 };
      const dmgSource = hasSysDmg ? 'system' : 'flag'; // 저장 방식 결정용
      const hitsMax     = strVal + dexVal + endVal;
      const hitsCurrent = hitsMax - dmg.STR - dmg.DEX - dmg.END;
      // 착용 중인 장갑 protection 합산
      const armor = (actor.items ?? [])
        .filter(i => i.type === 'armour' && i.system?.worn)
        .reduce((s, i) => s + (i.system?.armour?.protection ?? 0), 0);

      // 보유 기능 (전문화 포함) — system.skills 기반, 훈련된 기능만
      const skills = [];
      const sysSkills = sys.skills ?? {};
      for (const [key, skl] of Object.entries(sysSkills)) {
        if (key === 'untrained') continue;
        const specs = skl.specialities ?? {};
        if (Object.keys(specs).length) {
          for (const [specKey, spec] of Object.entries(specs)) {
            if (spec.trained === true) {
              skills.push({ name: SKILL_KO[key] ?? key, spec: SKILL_KO[specKey] ?? specKey, level: spec.value ?? 0 });
            }
          }
        } else if (skl.trained === true) {
          skills.push({ name: SKILL_KO[key] ?? key, spec: '', level: skl.value ?? 0 });
        }
      }
      skills.sort((a, b) => b.level - a.level || a.name.localeCompare(b.name, 'ko'));

      cards.push({
        id,
        name:    actor.name,
        img:     actor.img ?? 'icons/svg/mystery-man.svg',
        age:     sys.sophont?.age     ?? '?',
        species: sys.sophont?.species ?? '인간',
        cash:    sys.finance?.cash    ?? 0,
        plName:  plNames[id] ?? '',
        ownerName: this._getOwnerName(actor),
        skills,
        chars: {
          STR: strVal,
          DEX: dexVal,
          END: endVal,
          INT: (chars.INT?.value ?? 0) + (chars.INT?.augment ?? 0),
          EDU: (chars.EDU?.value ?? 0) + (chars.EDU?.augment ?? 0),
          SOC: (chars.SOC?.value ?? 0) + (chars.SOC?.augment ?? 0),
        },
        hitsCurrent,
        hitsMax,
        armor,
        dmg,
        dmgSource,
        isOwner: actor.isOwner,
      });
    }
    return cards;
  }

  _getOwnerName(actor) {
    // ownership: { userId: level } level 3 = owner
    const ownership = actor.ownership ?? {};
    for (const [userId, level] of Object.entries(ownership)) {
      if (userId === 'default') continue;
      if (level >= 3) {
        const user = game.users.get(userId);
        if (user && !user.isGM) return user.name;
      }
    }
    return '';
  }

  // ── 특성치 HTML ──────────────────────────────────────────
  _charsHTML(chars) {
    const KEYS = [
      ['STR','근력'], ['DEX','민첩'], ['END','인내'],
      ['INT','지능'], ['EDU','교육'], ['SOC','지위'],
    ];
    return KEYS.map(([k, ko]) => {
      const val = chars?.[k] ?? 0;
      const cls = val >= 12 ? 'high' : val <= 5 ? 'low' : '';
      return `
        <div class="tsp-tv-char ${cls}">
          <span class="tsp-tv-char-key">${ko}</span>
          <span class="tsp-tv-char-val">${val}</span>
        </div>`;
    }).join('');
  }

  // ── 기능(+전문화) HTML ───────────────────────────────────
  _skillsHTML(skills) {
    if (!skills?.length) return '<div class="tsp-tv-skills-empty">보유 기능 없음</div>';
    return skills.map(s => {
      const label = s.spec ? `${s.name}(${s.spec})` : s.name;
      const lvlCls = s.level >= 3 ? 'high' : s.level <= 0 ? 'zero' : '';
      return `
        <div class="tsp-tv-skill ${lvlCls}">
          <span class="tsp-tv-skill-name">${label}</span>
          <span class="tsp-tv-skill-lvl">${s.level}</span>
        </div>`;
    }).join('');
  }

  // ── HTML 빌드 ─────────────────────────────────────────────
  buildHTML() {
    const cards  = this._buildCards();
    const isGM   = game.user.isGM;
    const canReg = this._widget._can('permTravellerRegister');

    const cardsHTML = cards.map(c => this._cardHTML(c, isGM)).join('');

    const plusBtn = canReg ? `
      <div class="tsp-tv-plus" id="tsp-tv-plus" title="여행자를 여기에 드래그">
        <i class="fa-solid fa-plus"></i>
        <span>드래그로 등록</span>
      </div>` : '';

    return `
      <div class="tsp-tv-wrap">
        <div class="tsp-tv-list" id="tsp-tv-list">
          ${cardsHTML}
          ${plusBtn}
        </div>
        <div class="tsp-tv-scrollbar">
          <button class="tsp-tv-scroll-btn" id="tsp-tv-scroll-left">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button class="tsp-tv-scroll-btn" id="tsp-tv-scroll-right">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    `;
  }

  _cardHTML(c, isGM) {
    const cashStr = Number(c.cash).toLocaleString();
    const deleteBtn = isGM
      ? `<button class="tsp-tv-del" data-actor-id="${c.id}" title="제거">
           <i class="fa-solid fa-xmark fa-xs"></i>
         </button>`
      : '';

    // PL명: 소유자 이름 자동 표시, 수동 입력도 가능
    const plDisplay = c.plName || c.ownerName || 'PL명';
    const plEditable = isGM || (game.user.character?.id === c.id);

    return `
      <div class="tsp-tv-card" data-actor-id="${c.id}">
        ${deleteBtn}
        <div class="tsp-tv-pl-name">
          <input class="tsp-tv-pl-input"
                 type="text"
                 value="${c.plName}"
                 placeholder="${c.ownerName || 'PL명'}"
                 data-actor-id="${c.id}"
                 ${plEditable ? '' : 'disabled'} />
        </div>
        <div class="tsp-tv-portrait">
          <img src="${c.img}" alt="${c.name}" />
        </div>
        <div class="tsp-tv-info">
          <div class="tsp-tv-charname">${c.name}</div>
          <div class="tsp-tv-stat">
            <span class="tsp-tv-stat-label">나이</span>
            <span class="tsp-tv-stat-val">${c.age}</span>
          </div>
          <div class="tsp-tv-stat">
            <span class="tsp-tv-stat-label">종족</span>
            <span class="tsp-tv-stat-val">${c.species}</span>
          </div>
          <div class="tsp-tv-stat cash">
            <span class="tsp-tv-stat-label">보유금</span>
            <span class="tsp-tv-stat-val tsp-tv-cash">Cr ${cashStr}</span>
          </div>
        </div>
        <div class="tsp-tv-chars">
          ${this._charsHTML(c.chars)}
        </div>
        <div class="tsp-tv-skills">
          ${this._skillsHTML(c.skills)}
        </div>
        <div class="tsp-tv-vitals">
          <div class="tsp-tv-vital hp ${c.hitsCurrent <= 0 ? 'dead' : c.hitsCurrent <= c.hitsMax * 0.3 ? 'low' : ''}">
            <span class="tsp-tv-vital-label"><i class="fa-solid fa-heart fa-xs"></i></span>
            <span class="tsp-tv-vital-val">${c.hitsCurrent}<span class="tsp-tv-vital-max">/${c.hitsMax}</span></span>
          </div>
          <div class="tsp-tv-vital armor">
            <span class="tsp-tv-vital-label"><i class="fa-solid fa-shield fa-xs"></i></span>
            <span class="tsp-tv-vital-val">${c.armor}</span>
          </div>
        </div>
        <div class="tsp-tv-damage">
          ${['STR','DEX','END'].map(k => `
            <div class="tsp-tv-dmg-item">
              <span class="tsp-tv-dmg-label">${k}피해</span>
              <input class="tsp-tv-dmg-input" type="number" min="0"
                data-actor-id="${c.id}" data-cha="${k}" data-dmg-source="${c.dmgSource}"
                value="${c.dmg[k]}"
                ${(c.isOwner || isGM) ? '' : 'disabled'} />
            </div>`).join('')}
        </div>
      </div>
    `;
  }

  // ── 이벤트 바인딩 ─────────────────────────────────────────
  bindEvents(panel) {
    panel.querySelectorAll('.tsp-tv-dmg-input').forEach(input => {
      input.addEventListener('change', async (ev) => {
        const actorId = ev.currentTarget.dataset.actorId;
        const cha = ev.currentTarget.dataset.cha;
        const src = ev.currentTarget.dataset.dmgSource;
        const actor = game.actors.get(actorId);
        if (!actor) return;
        const val = Math.max(0, parseInt(ev.currentTarget.value) || 0);

        if (src === 'system') {
          // mgt2e 기본 시스템 경로
          await actor.update({ [`system.characteristics.${cha}.damage`]: val });
        } else {
          // traveller-chargen-sheet 플래그 폴백
          const dmg = foundry.utils.deepClone(actor.getFlag('traveller-chargen-sheet', 'damage') ?? {});
          dmg[cha] = val;
          await actor.setFlag('traveller-chargen-sheet', 'damage', dmg);
        }
      });
    });
    const list = panel.querySelector('#tsp-tv-list');
    const plus = panel.querySelector('#tsp-tv-plus');

    // ── 드래그 앤 드롭 등록 ──────────────────────────────────
    if (plus) {
      plus.addEventListener('dragover', e => {
        e.preventDefault();
        plus.classList.add('drag-over');
      });
      plus.addEventListener('dragleave', () => {
        plus.classList.remove('drag-over');
      });
      plus.addEventListener('drop', async e => {
        e.preventDefault();
        plus.classList.remove('drag-over');
        await this._onDrop(e);
      });

      // list 전체도 드롭 허용
      list?.addEventListener('dragover', e => e.preventDefault());
      list?.addEventListener('drop', async e => {
        if (e.target.closest('#tsp-tv-plus')) return; // plus가 처리
        e.preventDefault();
        await this._onDrop(e);
      });
    }

    // ── PL명 입력 ─────────────────────────────────────────
    panel.querySelectorAll('.tsp-tv-pl-input').forEach(input => {
      input.addEventListener('change', async e => {
        const actorId = e.target.dataset.actorId;
        const plNames = { ...this._plNames(), [actorId]: e.target.value };
        await this._save({ plNames });
      });
    });

    // ── 삭제 버튼 ─────────────────────────────────────────
    panel.querySelectorAll('.tsp-tv-del').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation();
        const actorId = btn.dataset.actorId;
        const registered = this._registeredIds().filter(id => id !== actorId);
        const plNames = { ...this._plNames() };
        delete plNames[actorId];
        await this._save({ registered, plNames });
      });
    });

    // ── 좌우 스크롤 버튼 ──────────────────────────────────
    panel.querySelector('#tsp-tv-scroll-left')?.addEventListener('click', () => {
      list?.scrollBy({ left: -220, behavior: 'smooth' });
    });
    panel.querySelector('#tsp-tv-scroll-right')?.addEventListener('click', () => {
      list?.scrollBy({ left: 220, behavior: 'smooth' });
    });

    // ── 카드 클릭 → 시트 열기 ─────────────────────────────
    panel.querySelectorAll('.tsp-tv-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('button, input')) return;
        const actor = game.actors.get(card.dataset.actorId);
        actor?.sheet?.render(true);
      });
    });
  }

  // ── 드롭 처리 ─────────────────────────────────────────────
  async _onDrop(e) {
    let data;
    try {
      data = JSON.parse(e.dataTransfer.getData('text/plain'));
    } catch { return; }

    // Actor 드롭
    let actor = null;
    if (data.type === 'Actor') {
      actor = data.uuid
        ? await fromUuid(data.uuid)
        : game.actors.get(data.id);
    }

    if (!actor) {
      ui.notifications.warn('Actor를 드래그해서 등록하세요.');
      return;
    }

    const registered = this._registeredIds();
    if (registered.includes(actor.id)) {
      ui.notifications.info(`${actor.name}은 이미 등록되어 있습니다.`);
      return;
    }

    // PL명 자동 설정
    const ownerName = this._getOwnerName(actor);
    const plNames   = { ...this._plNames() };
    if (ownerName && !plNames[actor.id]) {
      plNames[actor.id] = ownerName;
    }

    await this._save({
      registered: [...registered, actor.id],
      plNames,
    });

    ui.notifications.info(`${actor.name} 등록 완료!`);
  }
}
