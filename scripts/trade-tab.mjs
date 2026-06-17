// ================================================================
// 교역 탭 v3 - 공급자 규모 시스템 + 품목 계층
// ================================================================
import { SHIP_DATA } from './ship-data.mjs';
import { ITEMS_BY_TYPE, OCCUPATIONS, NPC_FIRST, NPC_LAST } from './trade-data.mjs';

// ── 무역품 기본 데이터 ────────────────────────────────────────
const TRADE_TYPES = {
  '11':{ name:'일반 전자 기기',  base:20000,  tons:'2d6*10', legal:true,  buyMod:{산업:2,기술우수:3,부유함:1},    sellMod:{비산업:2,기술미비:1,빈곤함:1},   worlds:['전부'] },
  '12':{ name:'일반 기계 부품',  base:10000,  tons:'2d6*10', legal:true,  buyMod:{비농업:2,산업:5},               sellMod:{비산업:3,농업:2},                worlds:['전부'] },
  '13':{ name:'일반 공산품',     base:20000,  tons:'2d6*10', legal:true,  buyMod:{비농업:2,산업:5},               sellMod:{비산업:3,인구많음:2},            worlds:['전부'] },
  '14':{ name:'일반 원자재',     base:5000,   tons:'2d6*20', legal:true,  buyMod:{농업:3,녹지:2},                sellMod:{산업:2,빈곤함:2},                worlds:['전부'] },
  '15':{ name:'일반 소비재',     base:500,    tons:'2d6*20', legal:true,  buyMod:{농업:3,수상세계:2,녹지:1},      sellMod:{소행성:1,빙원:1,인구많음:1},     worlds:['전부'] },
  '16':{ name:'일반 광석',       base:1000,   tons:'2d6*20', legal:true,  buyMod:{소행성:4},                      sellMod:{산업:3,비산업:1},                worlds:['전부'] },
  '21':{ name:'첨단 전자 기기',  base:100000, tons:'1d6*5',  legal:true,  buyMod:{산업:2,기술우수:3},             sellMod:{비산업:1,부유함:2,소행성:3},     worlds:['산업','기술우수'] },
  '22':{ name:'첨단 기계 부품',  base:75000,  tons:'1d6*5',  legal:true,  buyMod:{산업:2,기술우수:1},             sellMod:{소행성:2,비산업:1},              worlds:['산업','기술우수'] },
  '23':{ name:'첨단 공산품',     base:100000, tons:'1d6*5',  legal:true,  buyMod:{산업:1},                        sellMod:{인구많음:1,부유함:2},            worlds:['산업','기술우수'] },
  '24':{ name:'첨단 무기',       base:150000, tons:'1d6*5',  legal:true,  buyMod:{기술우수:2},                    sellMod:{빈곤함:1,황색구역:2,적색구역:4}, worlds:['산업','기술우수'] },
  '25':{ name:'첨단 탑승물',     base:180000, tons:'1d6*5',  legal:true,  buyMod:{기술우수:2},                    sellMod:{소행성:2,부유함:2},              worlds:['산업','기술우수'] },
  '26':{ name:'생화학 물품',     base:150000, tons:'1d6*5',  legal:true,  buyMod:{농업:1,수상세계:2},             sellMod:{산업:2,기술우수:1},              worlds:['농업','수상세계'] },
  '31':{ name:'화학 물질',       base:5000,   tons:'2d6*10', legal:true,  buyMod:{소행성:2,산업:3},               sellMod:{농업:2,비산업:2},                worlds:['소행성','산업'] },
  '32':{ name:'의류',            base:1000,   tons:'2d6*10', legal:true,  buyMod:{농업:2,녹지:1},                sellMod:{기술우수:3,부유함:2},            worlds:['농업','녹지'] },
  '33':{ name:'컴퓨터',          base:150000, tons:'1d6*5',  legal:true,  buyMod:{기술우수:2},                    sellMod:{기술미비:2,비산업:1},            worlds:['기술우수'] },
  '34':{ name:'전자 부품',       base:60000,  tons:'1d6*5',  legal:true,  buyMod:{산업:2,기술우수:1},             sellMod:{비산업:2,비농업:1},              worlds:['산업','기술우수'] },
  '35':{ name:'금속 광물',       base:200000, tons:'1d6*5',  legal:true,  buyMod:{소행성:3,녹지:1},              sellMod:{산업:2},                          worlds:['소행성','녹지'] },
  '36':{ name:'식품',            base:6000,   tons:'2d6*10', legal:true,  buyMod:{농업:3,수상세계:2},             sellMod:{비농업:2,빈곤함:1},              worlds:['농업','수상세계'] },
  '41':{ name:'지질 광물',       base:20000,  tons:'1d6*5',  legal:true,  buyMod:{소행성:3,진공:2},               sellMod:{산업:1,기술우수:2},              worlds:['소행성','진공'] },
  '42':{ name:'냉동 식품',       base:10000,  tons:'2d6*10', legal:true,  buyMod:{농업:2,수상세계:1},             sellMod:{비농업:2,기술우수:1},            worlds:['농업','수상세계'] },
  '43':{ name:'사치품',          base:150000, tons:'1d6*10', legal:true,  buyMod:{농업:2,녹지:3},                sellMod:{부유함:4,비산업:2},              worlds:['농업','녹지'] },
  '44':{ name:'약품',            base:50000,  tons:'1d6*5',  legal:true,  buyMod:{기술우수:2},                    sellMod:{빈곤함:2,기술미비:1},            worlds:['기술우수'] },
  '45':{ name:'로봇',            base:400000, tons:'1d6*5',  legal:true,  buyMod:{산업:2},                        sellMod:{농업:2,기술미비:1},              worlds:['산업'] },
  '46':{ name:'기생충 구제제',   base:10000,  tons:'1d6*5',  legal:true,  buyMod:{농업:2,녹지:1},                sellMod:{산업:1,비농업:1},                worlds:['농업','녹지'] },
  '51':{ name:'식물',            base:10000,  tons:'2d6*10', legal:true,  buyMod:{농업:3},                        sellMod:{비산업:2,진공:2},                worlds:['농업'] },
  '52':{ name:'폴리머',          base:7000,   tons:'2d6*10', legal:true,  buyMod:{산업:2},                        sellMod:{부유함:1,기술우수:2},            worlds:['산업'] },
  '53':{ name:'방사성 물질',     base:1000000,tons:'1d6*5',  legal:true,  buyMod:{소행성:2},                      sellMod:{산업:3,기술우수:1},              worlds:['소행성'] },
  '54':{ name:'연료',            base:500,    tons:'2d6*10', legal:true,  buyMod:{소행성:2,기술우수:1},           sellMod:{빈곤함:2,비산업:2},              worlds:['소행성'] },
  '55':{ name:'낙농 가축류',     base:1000,   tons:'2d6*10', legal:true,  buyMod:{농업:2},                        sellMod:{비농업:2,진공:1},                worlds:['농업'] },
  '56':{ name:'목재',            base:2000,   tons:'2d6*10', legal:true,  buyMod:{농업:6,녹지:2},                sellMod:{소행성:2,진공:2},                worlds:['농업','녹지'] },
  '61':{ name:'불법 생화학 물품',base:50000,  tons:'1d6*5',  legal:false, buyMod:{수상세계:2},                    sellMod:{산업:6},                          worlds:['농업','수상세계'],     desc:'위험한 화학 물질, 멸종 위기 생물의 추출물' },
  '62':{ name:'불법 사이버네틱스',base:250000,tons:'1d6',    legal:false, buyMod:{기술우수:1},                    sellMod:{소행성:4,빙원:4,부유함:8,황색구역:6,적색구역:6}, worlds:['기술우수'], desc:'전투용 사이버네틱스, 불법 이식물' },
  '63':{ name:'불법 약물',       base:100000, tons:'1d6',    legal:false, buyMod:{소행성:1,사막:1,녹지:1,수상세계:1}, sellMod:{부유함:6,인구많음:6},            worlds:['소행성','사막','인구많음','수상세계'], desc:'중독성 약물, 전투용 약물' },
  '64':{ name:'불법 사치품',     base:50000,  tons:'1d6',    legal:false, buyMod:{농업:2,수상세계:1},             sellMod:{부유함:6,인구많음:4},            worlds:['농업','녹지','수상세계'], desc:'사람을 망칠 수 있거나 중독성 있는 사치품' },
  '65':{ name:'불법 무기',       base:150000, tons:'1d6*5',  legal:false, buyMod:{기술우수:2},                    sellMod:{빈곤함:6,황색구역:8,적색구역:10},worlds:['산업','기술우수'],     desc:'대량 살상 무기, 해군용 무기' },
  '66':{ name:'특이 물품',       base:1000000,tons:'1d6',    legal:false, buyMod:{소행성:2},                      sellMod:{부유함:6},                        worlds:['전부'],               desc:'외계 유물, 프로토타입 기술, 희귀 동식물. 일반 무역 규칙 미적용 - GM 재량' },
};

const PRICE_TABLE = [
  {max:-1,buy:200,sell:30},{max:0,buy:175,sell:40},{max:1,buy:150,sell:45},
  {max:2,buy:135,sell:50},{max:3,buy:125,sell:55},{max:4,buy:120,sell:60},
  {max:5,buy:115,sell:65},{max:6,buy:110,sell:70},{max:7,buy:105,sell:75},
  {max:8,buy:100,sell:80},{max:9,buy:95,sell:85},{max:10,buy:90,sell:90},
  {max:11,buy:85,sell:100},{max:12,buy:80,sell:105},{max:13,buy:75,sell:110},
  {max:14,buy:70,sell:115},{max:15,buy:65,sell:120},{max:16,buy:60,sell:125},
  {max:17,buy:55,sell:130},{max:18,buy:50,sell:135},{max:19,buy:45,sell:140},
  {max:20,buy:40,sell:145},{max:21,buy:35,sell:150},{max:22,buy:30,sell:155},
  {max:999,buy:25,sell:160},
];
function getPriceRow(v) { return PRICE_TABLE.find(r=>v<=r.max)??PRICE_TABLE[PRICE_TABLE.length-1]; }

function parseUWP(uwp) {
  if (!uwp||uwp.length<8) return null;
  const h=n=>parseInt(n,16);
  const [sp,sz,at,hy,po,gv,lw]=uwp.split('');
  const tl=h(uwp[8])||0;
  const traits=[];
  const [size,atm,hydro,pop,gov,law]=[sz,at,hy,po,gv,lw].map(h);
  if(atm>=4&&atm<=9&&hydro>=4&&hydro<=8&&pop>=5&&pop<=7) traits.push('농업');
  if(size===0) traits.push('소행성');
  if(atm>=2&&atm<=9&&hydro===0) traits.push('사막');
  if(atm===0&&size>=6&&hydro>=1) traits.push('빙원');
  if((atm===0||atm===1)&&pop>=9) traits.push('유동인구');
  if(pop>=9&&[0,1,2,4,7,9].includes(atm)) traits.push('산업');
  if(pop<=6) traits.push('비산업'); else if(!traits.includes('산업')) traits.push('산업');
  if(size>=6&&atm>=5&&atm<=8&&hydro>=5&&hydro<=7) traits.push('녹지');
  if(pop>=9) traits.push('인구많음');
  if(pop<=6&&tl<=5) traits.push('빈곤함');
  if(atm===0) traits.push('진공');
  if(size>=6&&atm>=3&&atm<=9&&hydro>=10) traits.push('수상세계');
  if(pop>=9&&gov>=4&&gov<=9) traits.push('부유함');
  if(tl>=12) traits.push('기술우수'); else if(tl<=5) traits.push('기술미비');
  if(pop>=1) traits.push('비농업');
  const portDM={A:6,B:4,C:2,D:0,E:-1,X:-99}[sp]??0;
  return {starport:sp,size,atm,hydro,pop,gov,law,tl,traits,portDM};
}

// 현재 세계에서 구매 가능한 유형 목록
function getAvailableTypes(traits,showIllegal) {
  return Object.entries(TRADE_TYPES).filter(([,t])=>{
    if(!showIllegal&&!t.legal) return false;
    return t.worlds.includes('전부')||t.worlds.some(w=>traits.includes(w));
  }).map(([id])=>id);
}

function calcBuyDM(typeId,traits)  { return Object.entries(TRADE_TYPES[typeId]?.buyMod??{}).reduce((s,[t,v])=>traits.includes(t)?s+v:s,0); }
function calcSellDM(typeId,traits) { return Object.entries(TRADE_TYPES[typeId]?.sellMod??{}).reduce((s,[t,v])=>traits.includes(t)?s+v:s,0); }

function rndName() {
  return `${NPC_FIRST[Math.floor(Math.random()*NPC_FIRST.length)]} ${NPC_LAST[Math.floor(Math.random()*NPC_LAST.length)]}`;
}
function rnd(arr) { return arr[Math.floor(Math.random()*arr.length)]; }
function rndInt(a,b) { return a+Math.floor(Math.random()*(b-a+1)); }

// 랜덤 아이템 1개 선택 (유형에서)
function pickItem(typeId) {
  const items = ITEMS_BY_TYPE[typeId]??[];
  return rnd(items) ?? {id:`${typeId}-?`, name:TRADE_TYPES[typeId]?.name??typeId};
}

// ── 공급자 생성 ───────────────────────────────────────────────
// 물량 굴림 (인구 수정치 포함)
// tonsFormula 예: '1d6*5', '2d6*10', '1d6'
function rollStock(tonsFormula, pop) {
  const popMod = pop <= 3 ? -3 : pop >= 9 ? 3 : 0;
  // 수식 파싱: 'XdY*Z' 또는 'XdY'
  const m = tonsFormula.match(/^(\d+)d(\d+)(?:\*(\d+))?$/);
  if (!m) return 0;
  const [, nd, ds, mult] = m;
  let total = 0;
  for (let i = 0; i < Number(nd); i++) {
    total += Math.floor(Math.random() * Number(ds)) + 1;
  }
  total = Math.max(0, total + popMod);
  return total * (mult ? Number(mult) : 1);
}

function generateSupplier(tier, traits, allTypes, isIllegal, pop) {
  const legal = !isIllegal;
  pop = pop ?? 5;

  // 직업 풀
  const jobPool = OCCUPATIONS.filter(o => o.tier <= (tier===3?3:tier===2?2:1) && o.legal === legal);
  const occ = rnd(jobPool) ?? OCCUPATIONS[0];

  // 룰북 기준 유형 결정
  // 일반 상품: worlds가 '전부'인 합법 상품
  const allLegal       = Object.keys(TRADE_TYPES).filter(id => TRADE_TYPES[id].legal === legal);
  const generalTypes   = allLegal.filter(id => TRADE_TYPES[id].worlds.includes('전부'));
  // 세계 무역특성에 맞는 무역품 (일반 제외)
  const worldSpecial   = allTypes.filter(id =>
    TRADE_TYPES[id]?.legal === legal && !TRADE_TYPES[id].worlds.includes('전부'));
  // 세계와 무관한 나머지
  const outsideSpecial = allLegal.filter(id =>
    !TRADE_TYPES[id].worlds.includes('전부') && !worldSpecial.includes(id));

  let selTypes = [];
  if (tier === 1) {
    // 소규모: 일반 상품 전체
    selTypes = [...generalTypes];
  } else if (tier === 2) {
    // 중규모: 일반 상품 + 현재 세계 무역특성 맞는 무역품
    selTypes = [...generalTypes, ...worldSpecial];
  } else if (tier === 3) {
    // 대규모: 중규모 전체 + 인구특성치만큼 무작위 상품
    const allPool   = [...generalTypes, ...worldSpecial, ...outsideSpecial];
    const randCount = Math.max(0, pop);
    const randExtra = shuffle(outsideSpecial).slice(0, randCount);
    selTypes = [...generalTypes, ...worldSpecial, ...randExtra];
  }

  // 각 유형에서 품목 1개씩 + 물량 굴림
  const items = selTypes.map(typeId => {
    const type   = TRADE_TYPES[typeId];
    const stock  = rollStock(type.tons, pop);
    return {
      typeId,
      typeName: type?.name ?? typeId,
      stock,   // 최대 구매 가능 물량(톤)
      ...pickItem(typeId),
    };
  }).filter(it => it.stock > 0); // 물량 0이면 재고 없음

  return {
    id:     Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name:   rndName(),
    job:    occ.job,
    tier,
    legal,
    skill:      Math.floor((Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2)/3),
    commission: 0,
    brokerBonus:0,
    items,
  };
}

// 중개인 생성
function generateBroker(traits, allTypes, isIllegal, pop) {
  pop = pop ?? 5;
  const commission = isIllegal ? 20 : rndInt(5,15);
  const showAll = isIllegal
    ? allTypes.filter(id => !TRADE_TYPES[id]?.legal)
    : allTypes.filter(id => TRADE_TYPES[id]?.legal !== false);
  // 중개인은 stock 굴림 포함
  const items = showAll.map(typeId => {
    const type  = TRADE_TYPES[typeId];
    const stock = rollStock(type?.tons ?? '1d6', pop);
    return { typeId, typeName: type?.name ?? typeId, ...pickItem(typeId), stock };
  }).filter(it => it.stock > 0);
  return {
    id:         Date.now().toString(36)+Math.random().toString(36).slice(2,6),
    name:       rndName(),
    job:        isIllegal ? '불법 중개인' : '현지 중개인',
    tier:       99,
    legal:      !isIllegal,
    skill:      Math.floor((Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2)/3),
    commission,
    brokerBonus: 2,
    items,
  };
}

function shuffle(arr) { return [...arr].sort(()=>Math.random()-0.5); }

// ================================================================
export class TradeTab {
  constructor(widget) {
    this._widget      = widget;
    this._subView     = 'world';
    this._worldSubTab = 'buy';
    this._catalogSearch = '';
    this._catalogSel    = null;
  }

  get _dataKey() { return 'trade'; }
  _data()        { return this._widget._sceneData(this._dataKey); }
  async _save(p) { return this._widget._save(this._dataKey, p); }

  get _showIllegal() {
    try { return game.settings.get('traveller-panel','tradeShowIllegal')&&game.user.isGM; }
    catch { return false; }
  }
  _getShipFund()         { return this._widget._sceneData('ship').shipFund??0; }
  async _setShipFund(v)  { return this._widget._save('ship',{shipFund:v}); }
  _getShipCargo() {
    const sd=this._widget._sceneData('ship');
    if(!sd.selectedShip) return null;
    const c=sd.customStats?.cargo;
    if(c!==undefined) return Number(c);
    return SHIP_DATA[sd.selectedShip]?.cargo??null;
  }
  _getUsedCargo() { return (this._data().cargo??[]).reduce((s,c)=>s+(c.tons||0),0); }

  // ── 메인 빌드 ─────────────────────────────────────────────
  buildHTML() {
    const labels={world:'🌍 현재 세계',cargo:'📦 화물 관리',speculative:'📊 투기 무역',catalog:'📖 상품 도감'};
    return `
      <div class="tsp-tr-wrap">
        <div class="tsp-tr-subnav">
          ${Object.entries(labels).map(([v,l])=>`
            <button class="tsp-tr-subbtn ${this._subView===v?'active':''}" data-view="${v}">${l}</button>`).join('')}
        </div>
        <div class="tsp-tr-body">
          ${{world:()=>this._buildWorldView(),cargo:()=>this._buildCargoView(),
             speculative:()=>this._buildSpecView(),catalog:()=>this._buildCatalogView()
            }[this._subView]?.()??''}
        </div>
      </div>`;
  }

  // ── 현재 세계 뷰 ─────────────────────────────────────────
  _buildWorldView() {
    const d=this._data(), cur=d.currentWorld??{};
    const parsed=cur.uwp?parseUWP(cur.uwp):null;
    const allTypes=parsed?getAvailableTypes(parsed.traits,this._showIllegal):[];

    return `
      <div class="tsp-tr-world-v2">
        <!-- 왼쪽: 세계 검색 -->
        <div class="tsp-tr-world-left">
          <div class="tsp-tr-world-label">현재 세계</div>
          <div class="tsp-tr-search-row">
            <input class="tsp-tr-search-input" id="tsp-tr-cur-input" type="text"
                   value="${cur.name??''}" placeholder="행성명 검색..." />
            <button class="tsp-tr-search-btn" id="tsp-tr-cur-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div class="tsp-tr-search-results" id="tsp-tr-cur-results"></div>
          ${parsed?`
            <div class="tsp-tr-uwp-display">
              <span class="tsp-tr-uwp-code">${cur.name??''} ${cur.uwp??''}</span>
              <span class="tsp-tr-uwp-tl">TL${parsed.tl} · ${parsed.starport}급</span>
            </div>
            <div class="tsp-tr-traits">${parsed.traits.map(t=>`<span class="tsp-tr-trait">${t}</span>`).join('')}</div>
            <div class="tsp-tr-fund-display">
              <i class="fa-solid fa-vault"></i> 공용자금: <strong>Cr ${Number(this._getShipFund()).toLocaleString()}</strong>
            </div>
          `:'<div class="tsp-tr-world-empty">행성을 검색해서 선택하세요</div>'}
        </div>

        <!-- 오른쪽: 구매/판매 탭 -->
        <div class="tsp-tr-world-right">
          <div class="tsp-tr-bs-tabs">
            <button class="tsp-tr-bs-tab ${this._worldSubTab==='buy'?'active':''}" data-bstab="buy">
              <i class="fa-solid fa-cart-shopping"></i> 구매
            </button>
            <button class="tsp-tr-bs-tab ${this._worldSubTab==='sell'?'active':''}" data-bstab="sell">
              <i class="fa-solid fa-hand-holding-dollar"></i> 판매
            </button>
          </div>
          <div class="tsp-tr-world-right-inner">
            ${this._worldSubTab==='buy'
              ? this._buildBuyPanel(parsed, allTypes)
              : this._buildSellPanel(parsed, allTypes)}
          </div>
        </div>
      </div>`;
  }

  // ── 구매 패널 ─────────────────────────────────────────────
  _buildBuyPanel(parsed, allTypes) {
    const d = this._data();
    const suppliers  = d.suppliers ?? [];
    const selIdx     = d.selectedSupplier ?? 0;
    const selNpc     = suppliers[selIdx] ?? null;
    const attempts   = d.supplierAttempts ?? 0;

    // 왼쪽: 공급자 선택 목록
    const npcListHTML = suppliers.length
      ? suppliers.map((s,i)=>`
          <div class="tsp-tr-npc-row ${i===selIdx?'active':''}" data-npcidx="${i}">
            <div class="tsp-tr-npc-row-main">
              <span class="tsp-tr-npc-name">${s.name}</span>
              <span class="tsp-tr-npc-job">${s.job}</span>
              <span class="tsp-tr-npc-comm ${s.commission?'':'muted'}">${s.commission?s.commission+'%':'0%'}</span>
            </div>
            <button class="tsp-tr-npc-del" data-npcidx="${i}" data-listtype="supplier">
              <i class="fa-solid fa-xmark fa-xs"></i>
            </button>
          </div>`).join('')
      : '<div class="tsp-tr-empty-npc">공급자 없음</div>';

    // 오른쪽: 선택된 공급자의 품목 카드
    const popDM = parsed ? (parsed.pop <= 3 ? -3 : parsed.pop >= 9 ? 3 : 0) : 0;
    const itemCardsHTML = selNpc?.items?.length
      ? selNpc.items.map(it=>{
          const type  = TRADE_TYPES[it.typeId];
          const buyDM = parsed ? calcBuyDM(it.typeId, parsed.traits) : 0;
          const stock = it.stock ?? 0;
          const stockLabel = stock > 0
            ? `<span class="tsp-tr-stock">${stock}톤</span>`
            : `<span class="tsp-tr-stock empty">재고 없음</span>`;
          return `
            <div class="tsp-tr-item-card ${stock<=0?'no-stock':''}">
              <div class="tsp-tr-item-card-top">
                <span class="tsp-tr-item-name2">${it.name}</span>
                <span class="tsp-tr-item-type2">${type?.name??it.typeId}</span>
              </div>
              <div class="tsp-tr-item-card-meta">
                <span>기본가 <b>Cr ${type?.base.toLocaleString()??'-'}</b></span>
                <span>구매DM <b class="tsp-tr-spec-dm buy">${buyDM>=0?'+':''}${buyDM}</b></span>
                <span>물량 수식 <b>${type?.tons?.replace('d','D').replace('*','×')??'-'}${popDM!==0?` (인구${popDM>=0?'+':''}${popDM})`:''}</b></span>
                <span>재고 ${stockLabel}</span>
              </div>
              ${stock > 0 ? `
              <button class="tsp-tr-item-buy-btn tsp-action-btn"
                      data-npcidx="${selIdx}" data-listtype="supplier"
                      data-typeid="${it.typeId}" data-itemid="${it.id}"
                      data-itemname="${it.name}" data-stock="${stock}">
                <i class="fa-solid fa-cart-plus"></i> 구매
              </button>` : `
              <span class="tsp-tr-item-nostock">재고 없음</span>`}
            </div>`;
        }).join('')
      : '<div class="tsp-tr-empty-row" style="padding:20px;">왼쪽에서 공급자를 선택하세요</div>';

    return `
      <div class="tsp-tr-buy-layout">
        <!-- 왼쪽: 공급자 패널 -->
        <div class="tsp-tr-npc-panel">
          <div class="tsp-tr-npc-panel-header">
            <span class="tsp-tr-section-title"><i class="fa-solid fa-store"></i> 공급자</span>
            ${attempts>0?`<span class="tsp-tr-penalty">-${attempts}</span>`:''}
          </div>
          <div class="tsp-tr-find-col">
            ${parsed?`
              <button class="tsp-tr-find-btn tsp-action-btn" data-findtype="supplier" data-tier="any">
                <i class="fa-solid fa-magnifying-glass"></i> 공급자 찾기
              </button>
              <button class="tsp-tr-find-btn tsp-action-btn" data-findtype="broker" data-tier="broker">
                <i class="fa-solid fa-handshake"></i> 중개인 찾기
              </button>
              ${this._showIllegal?`
                <button class="tsp-tr-find-btn tsp-action-btn danger" data-findtype="broker" data-tier="illegalBroker">
                  <i class="fa-solid fa-mask"></i> 불법 중개인
                </button>`:''}
            `:'<span style="font-size:10px;color:rgba(80,140,200,.4);">세계 설정 필요</span>'}
          </div>
          <div class="tsp-tr-npc-list2">${npcListHTML}</div>
        </div>
        <!-- 오른쪽: 품목 카드 -->
        <div class="tsp-tr-items-panel">
          <div class="tsp-tr-items-panel-header">
            ${selNpc?`<span class="tsp-tr-section-title"><i class="fa-solid fa-boxes-stacked"></i> ${selNpc.name}의 품목</span>
              <span class="tsp-tr-npc-job">${selNpc.job} · 중개${selNpc.skill}${selNpc.brokerBonus?`+${selNpc.brokerBonus}`:''}${selNpc.commission?` · 수수료${selNpc.commission}%`:''}</span>`
            :'<span class="tsp-tr-section-title">품목</span>'}
          </div>
          <div class="tsp-tr-item-cards">${itemCardsHTML}</div>
        </div>
      </div>`;
  }

  // ── 판매 패널 ─────────────────────────────────────────────
  _buildSellPanel(parsed, allTypes) {
    const d        = this._data();
    const buyers   = d.buyers ?? [];
    const cargo    = d.cargo  ?? [];
    const attempts = d.buyerAttempts ?? 0;
    const selIdx   = d.selectedBuyer ?? null;
    const selBuyer = selIdx !== null ? buyers[selIdx] : null;

    // 구매자 행 목록
    const buyerRowsHTML = buyers.length ? buyers.map((b,i) => `
      <div class="tsp-tr-npc-row ${i===selIdx?'active':''}" data-npcidx="${i}">
        <div class="tsp-tr-npc-row-main">
          <span class="tsp-tr-npc-name">${b.name}</span>
          <span class="tsp-tr-npc-job">${b.job}</span>
          <span class="tsp-tr-npc-comm ${b.commission?'':'muted'}">${b.commission?b.commission+'%':'0%'}${b.brokerBonus?` · 협상+${b.brokerBonus}`:''}</span>
        </div>
        <button class="tsp-tr-npc-del" data-npcidx="${i}" data-listtype="buyer">
          <i class="fa-solid fa-xmark fa-xs"></i>
        </button>
      </div>`).join('')
    : '<div class="tsp-tr-empty-npc">구매자 없음</div>';

    // 선택된 구매자의 판매 가능 화물 (불법 중개인이면 불법 화물만)
    const isIllegalBuyer = selBuyer && selBuyer.legal === false;
    const visibleCargo = selBuyer
      ? (isIllegalBuyer
          ? cargo.filter(c => !TRADE_TYPES[c.typeId]?.legal)
          : cargo.filter(c => TRADE_TYPES[c.typeId]?.legal !== false))
      : [];

    const cargoRows = visibleCargo.length ? visibleCargo.map((c) => {
      const realIdx = cargo.indexOf(c);
      const sellDM  = (parsed && c.typeId) ? calcSellDM(c.typeId, parsed.traits) : 0;
      return `
        <tr>
          <td class="tsp-tr-spec-name">${c.name}</td>
          <td style="font-size:10px;color:#5a8fc8;">${TRADE_TYPES[c.typeId]?.name??'-'}</td>
          <td>${c.tons}톤</td>
          <td>Cr ${Number(c.buyPrice).toLocaleString()}</td>
          <td>${c.origin??'-'}</td>
          <td class="tsp-tr-spec-dm sell">${sellDM>=0?'+':''}${sellDM}</td>
          <td><button class="tsp-tr-sell-confirm-btn tsp-action-btn" data-idx="${realIdx}">
            <i class="fa-solid fa-hand-holding-dollar"></i> 판매
          </button></td>
        </tr>`;
    }).join('')
    : `<tr><td colspan="7" class="tsp-tr-empty-row">${
        !selBuyer ? '왼쪽에서 구매자를 선택하세요'
        : isIllegalBuyer ? '판매 가능한 불법 화물 없음'
        : '판매 가능한 화물 없음'
      }</td></tr>`;

    return `
      <div class="tsp-tr-buy-layout">
        <!-- 왼쪽: 구매자 패널 -->
        <div class="tsp-tr-npc-panel">
          <div class="tsp-tr-npc-panel-header">
            <span class="tsp-tr-section-title"><i class="fa-solid fa-user-tie"></i> 구매자</span>
            ${attempts>0?`<span class="tsp-tr-penalty">-${attempts}</span>`:''}
          </div>
          <div class="tsp-tr-find-col">
            ${parsed?`
              <button class="tsp-tr-find-btn tsp-action-btn" data-findtype="buyer" data-tier="buyer">
                <i class="fa-solid fa-magnifying-glass"></i> 구매자 찾기
              </button>
              <button class="tsp-tr-find-btn tsp-action-btn" data-findtype="buyer" data-tier="buyerBroker">
                <i class="fa-solid fa-handshake"></i> 중개인 찾기
              </button>
              ${this._showIllegal?`
                <button class="tsp-tr-find-btn tsp-action-btn danger" data-findtype="buyer" data-tier="illegalBuyerBroker">
                  <i class="fa-solid fa-mask"></i> 불법 중개인
                </button>`:''}
            `:'<span style="font-size:10px;color:rgba(80,140,200,.4);">세계 설정 필요</span>'}
          </div>
          <div class="tsp-tr-npc-list2">${buyerRowsHTML}</div>
        </div>

        <!-- 오른쪽: 선택된 구매자의 판매 목록 -->
        <div class="tsp-tr-items-panel">
          <div class="tsp-tr-items-panel-header">
            ${selBuyer
              ? `<span class="tsp-tr-section-title">
                  <i class="fa-solid fa-boxes-stacked"></i>
                  ${selBuyer.name}에게 판매${isIllegalBuyer?' <span class="tsp-tr-illegal-tag">불법만</span>':''}
                </span>
                <span class="tsp-tr-npc-job">${selBuyer.job} · 중개${selBuyer.skill}${selBuyer.brokerBonus?`+${selBuyer.brokerBonus}`:''} ${selBuyer.commission?`· 수수료${selBuyer.commission}%`:''}</span>`
              : '<span class="tsp-tr-section-title">판매 목록</span>'}
          </div>
          <div class="tsp-tr-table-wrap">
            <table class="tsp-tr-table">
              <thead><tr><th>품목명</th><th>유형</th><th>수량</th><th>구매가</th><th>구매지</th><th>판매DM</th><th></th></tr></thead>
              <tbody>${cargoRows}</tbody>
            </table>
          </div>
        </div>
      </div>`;
  }

  // ── NPC 카드 ──────────────────────────────────────────────
  _buildNpcCard(npc, idx, listType) {
    const tierLabel = {1:'소규모',2:'중규모',3:'대규모',99:'중개인'}[npc.tier]??'';
    const items = npc.items?.slice(0,6)??[];
    const itemsHTML = items.map(it=>`
      <button class="tsp-tr-item-btn" data-npcidx="${idx}" data-listtype="${listType}"
              data-typeid="${it.typeId}" data-itemid="${it.id}" data-itemname="${it.name}">
        <span class="tsp-tr-item-type">${TRADE_TYPES[it.typeId]?.name??it.typeId}</span>
        <span class="tsp-tr-item-name">${it.name}</span>
      </button>`).join('');

    return `
      <div class="tsp-tr-npc-card2 ${npc.legal?'':'illegal'}">
        <div class="tsp-tr-npc-card2-header">
          <span class="tsp-tr-npc-name">${npc.name}</span>
          <span class="tsp-tr-npc-job">${npc.job}</span>
          <span class="tsp-tr-npc-tier">${tierLabel}</span>
          <span class="tsp-tr-npc-meta2">
            중개기능 ${npc.skill}${npc.brokerBonus?` <span class="tsp-green">(협상+${npc.brokerBonus})</span>`:''}
            ${npc.commission?` · 수수료 <span class="${npc.commission>=20?'tsp-loss':''}">${npc.commission}%</span>`:''}
          </span>
          <button class="tsp-tr-npc-del" data-npcidx="${idx}" data-listtype="${listType}">
            <i class="fa-solid fa-xmark fa-xs"></i>
          </button>
        </div>
        <div class="tsp-tr-item-list">${itemsHTML}</div>
      </div>`;
  }

  // ── 화물 관리 뷰 ─────────────────────────────────────────
  _buildCargoView() {
    const sd=this._widget._sceneData('ship');
    const shipName=sd.shipName||(sd.selectedShip?SHIP_DATA[sd.selectedShip]?.name:null)||'우주선 미선택';
    const cap=this._getShipCargo(), used=this._getUsedCargo();
    const free=cap!==null?cap-used:null;
    const fund=this._getShipFund();
    const cargo=this._data().cargo??[];
    const buyers=this._data().buyers??[];
    const isGM=game.user.isGM;

    const rows=cargo.length?cargo.map((c,i)=>{
      const basePrice = TRADE_TYPES[c.typeId]?.base;
      return `
      <tr>
        <td class="tsp-tr-spec-name">${c.name}</td>
        <td style="font-size:10px;color:#7aadcc;max-width:80px;white-space:normal">${TRADE_TYPES[c.typeId]?.name??'-'}</td>
        <td>${c.tons}톤</td>
        <td>${basePrice?`Cr ${basePrice.toLocaleString()}`:'-'}</td>
        <td>Cr ${Number(c.buyPrice).toLocaleString()}</td>
        <td>${c.origin??'-'}</td>
        <td style="font-size:10px;color:#6ab4e8;">${c.buyerCharName??'-'}</td>
        ${isGM?`<td><button class="tsp-tr-cargo-del" data-idx="${i}"><i class="fa-solid fa-xmark fa-xs"></i></button></td>`:'<td></td>'}
      </tr>`}).join('')
    :'<tr><td colspan="8" class="tsp-tr-empty-row">화물 없음</td></tr>';

    return `
      <div class="tsp-tr-cargo-wrap">
        <div class="tsp-tr-cargo-header">
          <div class="tsp-tr-ship-info">
            <span class="tsp-tr-ship-name"><i class="fa-solid fa-rocket"></i> ${shipName}</span>
            ${cap!==null?`<span class="tsp-tr-ship-cap">${used}/${cap}톤</span>`:''}
          </div>
          ${cap!==null?`<div class="tsp-tr-cargo-bar-wrap">
            <div class="tsp-tr-cargo-bar"><div class="tsp-tr-cargo-bar-fill" style="width:${Math.min(100,used/(cap||1)*100)}%"></div></div>
            <span class="tsp-tr-cargo-free">${free}톤 여유</span>
          </div>`:''}
          <div class="tsp-tr-fund-chip"><i class="fa-solid fa-vault"></i><span>Cr ${Number(fund).toLocaleString()}</span></div>

        </div>
        <div class="tsp-tr-table-wrap">
          <table class="tsp-tr-table">
            <thead><tr><th>품목명</th><th>유형</th><th>수량</th><th>기본가</th><th>구매가</th><th>구매지</th><th>구매자</th><th></th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
  }

  // ── 투기 무역 로그 ────────────────────────────────────────
  _buildSpecView() {
    const logs=this._data().tradeLogs??[];
    const isGM=game.user.isGM;
    const mk=(type,cols,hdr)=>{
      const r=logs.filter(l=>l.type===type).reverse();
      return `<div class="tsp-tr-log-section">
        <div class="tsp-tr-section-title"><i class="fa-solid fa-${type==='buy'?'cart-shopping':'hand-holding-dollar'}"></i> ${type==='buy'?'구매':'판매'} 기록</div>
        <div class="tsp-tr-table-wrap"><table class="tsp-tr-table">
          <thead><tr>${hdr.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${r.length?r.map(cols).join(''):'<tr><td colspan="99" class="tsp-tr-empty-row">기록 없음</td></tr>'}</tbody>
        </table></div></div>`;
    };
    const resetBtn = isGM ? `
      <div class="tsp-tr-spec-reset-wrap">
        <button class="tsp-tr-spec-reset-btn" id="tsp-tr-spec-reset">
          <i class="fa-solid fa-trash-can fa-xs"></i> 투기 무역 기록 초기화
        </button>
      </div>` : '';
    return `<div class="tsp-tr-spec-log-wrap">
      ${resetBtn}${mk('buy',l=>`<tr><td class="tsp-tr-log-time">${this._fmtDate(l.ts)}</td><td>${l.name}</td><td style='font-size:10px;color:#5a8fc8;'>${TRADE_TYPES[l.typeId]?.name??'-'}</td><td>${l.tons}톤</td><td>${l.basePrice?`Cr ${Number(l.basePrice).toLocaleString()}`:'-'}</td><td>Cr ${Number(l.price).toLocaleString()}</td><td>Cr ${Number(l.total).toLocaleString()}</td><td>${l.world??'-'}</td><td>${l.buyer??'-'}</td>${l.commission?`<td>수수료 Cr ${Number(l.commission).toLocaleString()}</td>`:'<td>-</td>'}</tr>`,
           ['일시','품목','유형','수량','기본가','구매가','총액','구매지','구매 캐릭터','수수료'])}
      ${mk('sell',l=>`<tr><td class="tsp-tr-log-time">${this._fmtDate(l.ts)}</td><td>${l.name}</td><td style='font-size:10px;color:#5a8fc8;'>${TRADE_TYPES[l.typeId]?.name??'-'}</td><td>${l.tons}톤</td><td>${l.basePrice?`Cr ${Number(l.basePrice).toLocaleString()}`:'-'}</td><td>Cr ${Number(l.price).toLocaleString()}</td><td>Cr ${Number(l.total).toLocaleString()}</td><td>${l.world??'-'}</td><td style='color:#6ab4e8;'>${l.buyerCharName??l.buyer??'-'}</td><td><span class="${Number(l.profit)>=0?'tsp-profit':'tsp-loss'}">${Number(l.profit)>=0?'+':''}${l.profit}%</span></td>${l.commission?`<td>Cr ${Number(l.commission).toLocaleString()}</td>`:'<td>-</td>'}</tr>`,
           ['일시','품목','수량','단가','총액','판매지','판매자','손익','수수료'])}
    </div>`;
  }

  // ── 상품 도감 ─────────────────────────────────────────────
  _buildCatalogView() {
    const search=this._catalogSearch??'';
    const sel=this._catalogSel??null;
    const filtered=Object.entries(TRADE_TYPES).filter(([id,t])=>
      !search||(t.name.includes(search)||id.includes(search)));
    const selId=sel&&TRADE_TYPES[sel]?sel:(filtered[0]?.[0]??null);

    const listItems=filtered.map(([id,t])=>`
      <div class="tsp-tr-cat-item ${selId===id?'active':''}" data-d66="${id}">
        <span class="tsp-tr-spec-d66">${id}</span>
        <span class="tsp-tr-spec-name">${t.name}${!t.legal?'<span class="tsp-tr-illegal-tag">불법</span>':''}</span>
        <span style="font-size:10px;color:#4a7ab8;">Cr ${t.base.toLocaleString()}</span>
      </div>`).join('')||'<div class="tsp-tr-empty-row">검색 결과 없음</div>';

    const selType=selId?TRADE_TYPES[selId]:null;
    const selItems=selId?(ITEMS_BY_TYPE[selId]??[]):[];

    const detailHTML=selType?`
      <div class="tsp-tr-cat-detail">
        <div class="tsp-tr-cat-detail-title">${selType.name}${!selType.legal?'<span class="tsp-tr-illegal-tag">불법</span>':''}</div>
        <div class="tsp-tr-cat-detail-meta">
          <span>D66: ${selId}</span><span>기본가: Cr ${selType.base.toLocaleString()}</span>
          <span>물량: ${selType.tons.replace('d','D').replace('*','×')}</span>
        </div>
        <div class="tsp-tr-cat-mods">
          <div class="tsp-tr-cat-mod-col">
            <div class="tsp-tr-section-title">구매 수정치</div>
            ${Object.entries(selType.buyMod).map(([t,v])=>`<div class="tsp-tr-cat-mod-row"><span class="tsp-tr-trait">${t}</span><span class="tsp-tr-spec-dm buy">+${v}</span></div>`).join('')}
          </div>
          <div class="tsp-tr-cat-mod-col">
            <div class="tsp-tr-section-title">판매 수정치</div>
            ${Object.entries(selType.sellMod).map(([t,v])=>`<div class="tsp-tr-cat-mod-row"><span class="tsp-tr-trait">${t}</span><span class="tsp-tr-spec-dm sell">+${v}</span></div>`).join('')}
          </div>
        </div>
        <div class="tsp-tr-section-title" style="margin-top:8px;">품목 목록</div>
        <div class="tsp-tr-cat-items">${selItems.map(it=>`<span class="tsp-tr-trait">${it.name}</span>`).join('')}</div>
        <div class="tsp-tr-section-title" style="margin-top:8px;">가격 참조 (판정값 → 구매%)</div>
        <div class="tsp-tr-price-ref">
          ${[6,8,10,12,14,16,18].map(v=>{const r=getPriceRow(v);return `<div class="tsp-tr-price-ref-row"><span>${v}</span><span class="cheap">구매 ${r.buy}% = Cr ${Math.floor(selType.base*r.buy/100).toLocaleString()}</span><span class="tsp-tr-spec-dm sell">판매 ${r.sell}%</span></div>`;}).join('')}
        </div>
      </div>`:'<div class="tsp-tr-world-empty">상품을 선택하세요</div>';

    return `
      <div class="tsp-tr-catalog-wrap">
        <div class="tsp-tr-catalog-left">
          <input class="tsp-tr-search-input" id="tsp-tr-cat-search" type="text" placeholder="상품명/D66 검색..." />
          <div class="tsp-tr-cat-list">${listItems}</div>
        </div>
        <div class="tsp-tr-catalog-right">${detailHTML}</div>
      </div>`;
  }

  // ── 이벤트 바인딩 ─────────────────────────────────────────
  bindEvents(panel) {
    panel.querySelectorAll('.tsp-tr-subbtn').forEach(btn=>
      btn.addEventListener('click',()=>{ this._subView=btn.dataset.view; this._widget._renderPanel('trade'); }));
    if(this._subView==='world')       this._bindWorldEvents(panel);
    if(this._subView==='cargo')       this._bindCargoEvents(panel);
    if(this._subView==='catalog')     this._bindCatalogEvents(panel);
    if(this._subView==='speculative') this._bindSpecEvents(panel);
  }

  _bindSpecEvents(panel) {
    panel.querySelector('#tsp-tr-spec-reset')?.addEventListener('click', async () => {
      if (!game.user.isGM) return;
      const ok = await Dialog.confirm({
        title: '투기 무역 기록 초기화',
        content: '<p>구매/판매 기록을 모두 삭제합니다. 되돌릴 수 없습니다. 계속하시겠습니까?</p>',
      });
      if (!ok) return;
      await this._save({ tradeLogs: [] });
      this._widget._renderPanel('trade');
    });
  }

  _bindWorldEvents(panel) {
    panel.querySelectorAll('.tsp-tr-bs-tab').forEach(btn=>
      btn.addEventListener('click',()=>{ this._worldSubTab=btn.dataset.bstab; this._widget._renderPanel('trade'); }));
    this._bindSearch(panel,'tsp-tr-cur','currentWorld');

    // 공급자/구매자 찾기 버튼
    panel.querySelectorAll('.tsp-tr-find-btn').forEach(btn=>
      btn.addEventListener('click',()=>this._onFindClick(btn.dataset.findtype, btn.dataset.tier)));

    // 공급자/구매자 행 클릭 → 선택
    panel.querySelectorAll('.tsp-tr-npc-row').forEach(row=>
      row.addEventListener('click', async e => {
        if(e.target.closest('button')) return;
        const idx = Number(row.dataset.npcidx);
        const lt  = this._worldSubTab === 'buy' ? 'selectedSupplier' : 'selectedBuyer';
        await this._save({[lt]: idx});
        this._widget._renderPanel('trade');
      }));

    // NPC 삭제
    panel.querySelectorAll('.tsp-tr-npc-del').forEach(btn=>
      btn.addEventListener('click',async()=>{
        const idx=Number(btn.dataset.npcidx), lt=btn.dataset.listtype;
        const key=lt==='supplier'?'suppliers':'buyers';
        const arr=[...(this._data()[key]??[])];
        arr.splice(idx,1);
        await this._save({[key]:arr});
      }));

    // 품목 버튼 → 구매/판매 팝업 (tsp-tr-item-btn, tsp-tr-item-buy-btn 모두)
    panel.querySelectorAll('.tsp-tr-item-btn, .tsp-tr-item-buy-btn').forEach(btn=>
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const npcIdx = Number(btn.dataset.npcidx);
        const lt     = btn.dataset.listtype;
        const npc    = (lt==='supplier' ? this._data().suppliers : this._data().buyers)?.[npcIdx];
        if(!npc) return;
        const stock = btn.dataset.stock ? Number(btn.dataset.stock) : undefined;
        this._onBuyClick(btn.dataset.typeid, btn.dataset.itemid, btn.dataset.itemname, npc, stock);
      }));

    // 화물 판매 버튼
    panel.querySelectorAll('.tsp-tr-sell-confirm-btn').forEach(btn=>
      btn.addEventListener('click',()=>this._onSellClick(Number(btn.dataset.idx))));
  }

  _bindCargoEvents(panel) {
    panel.querySelectorAll('.tsp-tr-cargo-del').forEach(btn=>
      btn.addEventListener('click',async()=>{
        const i=Number(btn.dataset.idx), cargo=[...(this._data().cargo??[])];
        cargo.splice(i,1); await this._save({cargo});
      }));
  }

  _bindCatalogEvents(panel) {
    const inp=panel.querySelector('#tsp-tr-cat-search');
    if(inp){
      inp.value=this._catalogSearch;
      inp.addEventListener('input',e=>{
        this._catalogSearch=e.target.value;
        this._widget._renderPanel('trade');
        const ni=document.querySelector('#tsp-tr-cat-search');
        if(ni){ni.focus();ni.value=this._catalogSearch;}
      });
    }
    panel.querySelectorAll('.tsp-tr-cat-item').forEach(item=>
      item.addEventListener('click', () => {
        this._catalogSel = item.dataset.d66;

        // 선택 표시만 DOM에서 직접 변경 (스크롤 유지)
        panel.querySelectorAll('.tsp-tr-cat-item').forEach(el =>
          el.classList.toggle('active', el.dataset.d66 === this._catalogSel));

        // 오른쪽 상세만 교체
        const right = panel.querySelector('.tsp-tr-catalog-right');
        if (right) {
          const selType  = TRADE_TYPES[this._catalogSel];
          const selItems = ITEMS_BY_TYPE[this._catalogSel] ?? [];
          right.innerHTML = selType ? `
            <div class="tsp-tr-cat-detail">
              <div class="tsp-tr-cat-detail-title">${selType.name}${!selType.legal?'<span class="tsp-tr-illegal-tag">불법</span>':''}</div>
              <div class="tsp-tr-cat-detail-meta">
                <span>D66: ${this._catalogSel}</span>
                <span>기본가: Cr ${selType.base.toLocaleString()}</span>
                <span>물량: ${selType.tons.replace('d','D').replace('*','×')}</span>
              </div>
              <div class="tsp-tr-cat-mods">
                <div class="tsp-tr-cat-mod-col">
                  <div class="tsp-tr-section-title">구매 수정치</div>
                  ${Object.entries(selType.buyMod).map(([t,v])=>`<div class="tsp-tr-cat-mod-row"><span class="tsp-tr-trait">${t}</span><span class="tsp-tr-spec-dm buy">+${v}</span></div>`).join('')}
                </div>
                <div class="tsp-tr-cat-mod-col">
                  <div class="tsp-tr-section-title">판매 수정치</div>
                  ${Object.entries(selType.sellMod).map(([t,v])=>`<div class="tsp-tr-cat-mod-row"><span class="tsp-tr-trait">${t}</span><span class="tsp-tr-spec-dm sell">+${v}</span></div>`).join('')}
                </div>
              </div>
              <div class="tsp-tr-section-title" style="margin-top:8px;">품목 목록</div>
              <div class="tsp-tr-cat-items">${selItems.map(it=>`<span class="tsp-tr-trait">${it.name}</span>`).join('')}</div>
              <div class="tsp-tr-section-title" style="margin-top:8px;">가격 참조 (판정값 → 구매%)</div>
              <div class="tsp-tr-price-ref">
                ${[6,8,10,12,14,16,18].map(v=>{const r=getPriceRow(v);return `<div class="tsp-tr-price-ref-row"><span>${v}</span><span class="cheap">구매 ${r.buy}% = Cr ${Math.floor(selType.base*r.buy/100).toLocaleString()}</span><span class="tsp-tr-spec-dm sell">판매 ${r.sell}%</span></div>`;}).join('')}
              </div>
            </div>` : '<div class="tsp-tr-world-empty">상품을 선택하세요</div>';
        }
      }));
  }

  // ── NPC 찾기 팝업 ─────────────────────────────────────────
  async _onFindClick(findType, tier) {
    const d=this._data(), cur=d.currentWorld??{};
    const parsed=cur.uwp?parseUWP(cur.uwp):null;
    if(!parsed){ ui.notifications.warn('세계를 먼저 설정하세요'); return; }

    const allTypes  = getAvailableTypes(parsed.traits, this._showIllegal);
    const isIllegal    = (tier==='illegal1'||tier==='illegalBroker'||tier==='blackmarket');
    const isBroker     = (tier==='broker'||tier==='illegalBroker'||tier==='buyerBroker');
    const isBuyer      = (findType==='buyer');
    const isAny        = (tier==='any'); // 소/중/대 랜덤
    const isBlackmarket= (tier==='blackmarket');
    const attemptsKey = isBuyer?'buyerAttempts':'supplierAttempts';
    const attempts  = d[attemptsKey]??0;
    const skillLabel= isIllegal?'세상물정':'중개';
    const skillKey  = isIllegal?'세상물정':'중개';
    const portDM    = parsed.portDM??0;
    const tierLabel = {broker:'현지 중개인',illegal1:'불법 공급자',
                       illegalBroker:'불법 중개인',illegalBuyerBroker:'불법 중개인(판매)',
                       buyer:'구매자',buyerBroker:'현지 중개인(판매)',
                       any:'공급자',blackmarket:'불법 거래상'}[tier]??'공급자';

    const actors    = game.actors.filter(a=>a.isOwner&&a.type!=='npc');
    const actorOpts = actors.map(a=>{
      const skillLv = a.system?.skills?.['중개']?.level ?? a.system?.skills?.['세상물정']?.level ?? 0;
      return `<option value="${a.id}">${a.name} (${skillLabel} ${skillLv})</option>`;
    }).join('');

    // 팝업: 여행자 선택만, 수정치 표시, 판정 버튼 누르면 자동 굴림
    const actorId = await new Promise(resolve => {
      const dlgContent = `
        <div class="tsp-dialog-body">
          <p class="tsp-dialog-info">보통(8+) · ${skillLabel} 판정<br>우주항 ${portDM>=0?'+':''}${portDM}${attempts?` · 페널티 -${attempts}`:''}</p>
          <label class="tsp-dialog-label">판정할 여행자</label>
          <select id="fn-actor" class="tsp-dialog-select">
            ${actorOpts||'<option value="">캐릭터 없음</option>'}
          </select>
          <div id="fn-mod-display" class="tsp-dialog-mod"></div>
        </div>`;

      const dlg = new Dialog({
        title: `${tierLabel} 찾기`,
        content: dlgContent,
        buttons: {
          roll: { label:'🎲 판정', callback: html => resolve(html.find('#fn-actor').val()) },
          cancel: { label:'취소', callback: () => resolve(null) }
        },
        default:'roll',
        render: html => {
          const update = () => {
            const actor = game.actors.get(html.find('#fn-actor').val());
            const skillLv = actor?.system?.skills?.['중개']?.level ?? actor?.system?.skills?.['세상물정']?.level ?? 0;
            const modTotal = skillLv + portDM - attempts;
            html.find('#fn-mod-display').html(
              `수정치 합계: 기능 <b>${skillLv}</b> + 우주항 <b>${portDM>=0?'+':''}${portDM}</b>${attempts?` - 페널티 <b>${attempts}</b>`:''} = <b class="${modTotal>=0?'tsp-green':'tsp-red'}">${modTotal>=0?'+':''}${modTotal}</b>`
            );
          };
          html.find('#fn-actor').on('change', update);
          update();
        }
      });
      dlg.render(true);
    });

    if(!actorId) return;

    const actor  = game.actors.get(actorId);
    const skillLv= actor?.system?.skills?.['중개']?.level ?? actor?.system?.skills?.['세상물정']?.level ?? 0;

    // 자동 2D 굴림
    const roll2d = await new Roll('2d6').evaluate();
    const total  = roll2d.total + skillLv + portDM - attempts;
    const success= total >= 8;
    const newAttempts = attempts + 1;

    roll2d.toMessage({ flavor:`[교역] ${tierLabel} 찾기 — ${actor?.name} · 합계 ${total} (목표 8+) → ${success?'✅ 성공':'❌ 실패'}` });

    await this._save({[attemptsKey]: newAttempts});

    if(!success){
      ui.notifications.warn(`${tierLabel} 찾기 실패 (${total}). 다음 시도 -1 페널티.`);
      return;
    }

    // NPC 생성
    let npc;
    if(isBroker){
      npc = generateBroker(parsed.traits, allTypes, isIllegal, parsed.pop);
    } else if(isBlackmarket) {
      // 불법 거래상: 랜덤 이름, 직업 고정, 불법 품목 1개만
      // 2D 원점수 2면 배신자 이벤트 (룰북 p.210)
      const isBetrayer = roll2d.total === 2; // 원점수 확인
      const illegalTypes = ['61','62','63','64','65','66'];
      const typeId = rnd(illegalTypes);
      const item   = pickItem(typeId);
      const bmStock = rollStock(TRADE_TYPES[typeId]?.tons ?? '1d6', parsed.pop ?? 5);
      npc = {
        id:   Date.now().toString(36)+Math.random().toString(36).slice(2,6),
        name: rndName(),
        job:  isBetrayer ? '⚠️ 불법 거래상 (요주의)' : '불법 거래상',
        tier: 1, legal: false,
        skill: Math.floor((Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2)/3),
        commission: 0, brokerBonus: 0,
        isBetrayer,
        items: [{ typeId, typeName: TRADE_TYPES[typeId]?.name??typeId, ...item, stock: bmStock }],
      };
      if(isBetrayer) {
        ui.notifications.warn(`⚠️ ${npc.name}은 정보원, 요원, 또는 배신자일 수 있습니다! (원점수 2)`);
      }
    } else if(isAny) {
      const randomTier = rndInt(1,3);
      npc = generateSupplier(randomTier, parsed.traits, allTypes, false, parsed.pop);
    } else {
      const numTier = tier==='illegal1' ? 1 : Number(tier);
      npc = generateSupplier(numTier, parsed.traits, allTypes, isIllegal, parsed.pop);
    }

    const listKey = isBuyer?'buyers':'suppliers';
    const arr = [...(d[listKey]??[]), npc];
    // 새로 추가된 공급자 자동 선택
    const selKey = isBuyer?'selectedBuyer':'selectedSupplier';
    await this._save({[listKey]: arr, [selKey]: arr.length-1});
    ui.notifications.info(`${npc.name} (${npc.job}, ${['소규모','중규모','대규모'][npc.tier-1]??'중개인'}) 발견!`);
    this._widget._renderPanel('trade');
  }

  // ── 구매 팝업 (자동 주사위) ──────────────────────────────
  async _onBuyClick(typeId, itemId, itemName, npc, stockMax) {
    const d=this._data(), cur=d.currentWorld??{};
    const parsed=cur.uwp?parseUWP(cur.uwp):null;
    const type=TRADE_TYPES[typeId];
    if(!type) return;
    const buyDM=parsed?calcBuyDM(typeId,parsed.traits):0;
    const totalBrokerSkill=(npc.skill??0)+(npc.brokerBonus??0);
    const fund=this._getShipFund();
    const cap=this._getShipCargo(), used=this._getUsedCargo();
    const free=cap!==null?cap-used:9999;
    // 룰북 p.211: 구매판정 = 3D + 중개기능 + 구매DM - 판매DM - 공급자중개(2)
    const sellDM_for_buy = parsed ? calcSellDM(typeId, parsed.traits) : 0;
    const modTotal = totalBrokerSkill + buyDM - sellDM_for_buy - 2;
    const popDM=parsed?(parsed.pop<=3?-3:parsed.pop>=9?3:0):0;
    const maxTons=Math.min(stockMax??9999, free===9999?9999:free);

    // 구매 가능한 여행자 목록 (소유 캐릭터)
    const myActors  = game.actors.filter(a => a.isOwner && a.type !== 'npc');
    const actorOpts = myActors.map(a =>
      `<option value="${a.id}">${a.name}</option>`).join('');

    const result = await new Promise(resolve => {
      const dlg = new Dialog({
        title: `구매: ${itemName}`,
        content: `
          <div class="tsp-dialog-body">
            <div class="tsp-dialog-info-box">
              <div><b>${type.name}</b> → ${itemName}</div>
              <div>기본가 Cr ${type.base.toLocaleString()} · 구매DM ${buyDM>=0?'+':''}${buyDM}</div>
              <div>공급자 ${npc.name} (중개기능 ${npc.skill}${npc.brokerBonus?` + 협상+${npc.brokerBonus}`:''}) · 수수료 ${npc.commission??0}%</div>
              <div>공용자금 Cr ${Number(fund).toLocaleString()} · 여유 ${free===9999?'미확인':free+'톤'}</div>
            </div>
            <div class="tsp-dialog-mod">
              판정 수정치: 중개기능<b>${totalBrokerSkill}</b> + 구매DM<b>${buyDM>=0?'+':''}${buyDM}</b> - 공급자중개<b>2</b>
              = <b class="${modTotal>=0?'tsp-green':'tsp-red'}">${modTotal>=0?'+':''}${modTotal}</b>
            </div>
            ${actorOpts ? `
              <label class="tsp-dialog-label">구매하는 여행자</label>
              <select id="buy-actor" class="tsp-dialog-select">
                ${actorOpts}
              </select>` : ''}
            <label class="tsp-dialog-label">수량 (톤)</label>
            <input id="buy-tons" type="number" min="1" max="${free===9999?999:free}"
              placeholder="수량 입력" class="tsp-dialog-input" />
          </div>`,
        buttons: {
          roll: { label:'🎲 판정 후 구매', callback: html => resolve({
            tons:    Number(html.find('#buy-tons').val()),
            actorId: html.find('#buy-actor').val() || null,
          })},
          cancel: { label:'취소', callback: () => resolve(null) }
        },
        default:'roll'
      });
      dlg.render(true);
    });
    const tons = result?.tons ?? 0;

    if(!tons||tons<=0) return;
    if(cap!==null&&tons>free) return ui.notifications.warn(`화물칸 부족 (여유 ${free}톤)`);

    // 자동 3D6 굴림
    const roll3d = await new Roll('3d6').evaluate();
    const final  = roll3d.total + modTotal;
    const row    = getPriceRow(final);
    const unitPrice = Math.floor(type.base*row.buy/100);
    const total  = unitPrice*tons;
    const commission = npc.commission?Math.floor(total*npc.commission/100):0;
    const totalCost  = total+commission;

    if(totalCost>fund) return ui.notifications.warn(`공용자금 부족 (필요 Cr ${totalCost.toLocaleString()}, 보유 Cr ${fund.toLocaleString()})`);

    roll3d.toMessage({ flavor:`[교역] 구매 판정 — ${itemName}<br>3D6(${roll3d.total}) + 중개기능${totalBrokerSkill} + 구매DM${buyDM>=0?'+':''}${buyDM} - 판매DM${sellDM_for_buy} - 공급자중개2 = <b>${final}</b> → ${row.buy}% = Cr ${unitPrice.toLocaleString()}/톤` });

    const buyerActor = result?.actorId ? game.actors.get(result.actorId) : null;
    const buyerCharName = buyerActor?.name ?? game.user.name;

    await this._setShipFund(fund-totalCost);
    const cargo=[...(d.cargo??[]),{
      typeId, name:itemName, tons, buyPrice:unitPrice,
      origin:cur.name??'?', buyDM,
      buyerCharName,  // 구매한 캐릭터 이름
    }];
    const logs=[...(d.tradeLogs??[]),{
      type:'buy', ts:Date.now(), name:itemName, typeId, tons,
      basePrice:type.base, price:unitPrice, total, world:cur.name??'?',
      buyer:buyerCharName, commission,
    }];
    await this._save({cargo, tradeLogs:logs});
    ui.notifications.info(`${itemName} ${tons}톤 구매 완료 (Cr ${totalCost.toLocaleString()} 지출)`);
  }

  // ── 판매 팝업 (자동 주사위) ──────────────────────────────
  async _onSellClick(idx) {
    const d=this._data(), cargo=d.cargo??[];
    const item=cargo[idx]; if(!item) return;
    const cur=d.currentWorld??{};
    const parsed=cur.uwp?parseUWP(cur.uwp):null;
    const type=TRADE_TYPES[item.typeId];
    const sellDM=parsed&&item.typeId?calcSellDM(item.typeId,parsed.traits):0;
    const fund=this._getShipFund();
    const buyer=d.buyers?.[d.selectedBuyer??0]??null;
    // 룰북 p.211 판매 공식:
    // 판매판정 = 3D + 판매자중개기능 + 판매DM - 구매DM - 구매자중개기능(보통2)
    // - buyer가 중개인(brokerBonus>0)이면 우리편 → 중개인skill+2를 더함
    // - buyer가 일반 구매자면 그 중개기능(2)을 빼는 역할
    // 정리: 중개인 고용 시 our_broker_skill+2 더하고, 구매자 중개기능(2) 빼기
    const ourBrokerSkill = (buyer?.brokerBonus ?? 0) > 0
      ? (buyer.skill ?? 0) + (buyer.brokerBonus ?? 0)  // 중개인 고용: 중개인기능+협상보너스
      : 0;  // 직접 판매: 여행자 본인 중개기능 (팝업에서 입력 불가로 0 처리)
    const buyerMid = (buyer?.brokerBonus ?? 0) > 0
      ? 2   // 중개인을 통할 경우에도 구매자측 기본 중개(2) 차감
      : (buyer?.skill ?? 2);  // 직접 구매자의 중개기능 차감
    const buyDM_cur = parsed && item.typeId ? calcBuyDM(item.typeId, parsed.traits) : 0;
    const modTotal = ourBrokerSkill + sellDM - buyDM_cur - buyerMid;

    const confirmed = await new Promise(resolve => {
      const dlg = new Dialog({
        title: `판매: ${item.name}`,
        content: `
          <div class="tsp-dialog-body">
            <div class="tsp-dialog-info-box">
              <div><b>${item.name}</b> · ${item.tons}톤</div>
              <div>구매가 Cr ${Number(item.buyPrice).toLocaleString()}/톤 · 구매지 ${item.origin??'-'}</div>
              ${buyer
                ?`<div>구매자 ${buyer.name} (중개 ${buyer.skill}${buyer.brokerBonus?`+${buyer.brokerBonus}`:''}) · 수수료 ${buyer.commission??0}%</div>`
                :'<div class="tsp-red">구매자 없음 (기본 중개 2 적용)</div>'}
            </div>
            <div class="tsp-dialog-mod">
              판정 수정치: 판매DM<b>${sellDM>=0?'+':''}${sellDM}</b> - 구매DM<b>${item.buyDM??0}</b> - 구매자중개<b>${buyerMid}</b>
              = <b class="${modTotal>=0?'tsp-green':'tsp-red'}">${modTotal>=0?'+':''}${modTotal}</b>
            </div>
          </div>`,
        buttons: {
          roll: { label:'🎲 판정 후 판매', callback: () => resolve(true) },
          cancel: { label:'취소', callback: () => resolve(false) }
        },
        default:'roll'
      });
      dlg.render(true);
    });

    if(!confirmed) return;

    // 자동 3D6 굴림
    const roll3d = await new Roll('3d6').evaluate();
    const final  = roll3d.total + modTotal;
    const row    = getPriceRow(final);
    const basePrice = type?.base ?? item.buyPrice;
    const unitPrice = Math.floor(basePrice*row.sell/100);
    const total  = unitPrice*item.tons;
    const commission = buyer?.commission?Math.floor(total*buyer.commission/100):0;
    const net    = total-commission;
    const profit = ((unitPrice-item.buyPrice)/item.buyPrice*100).toFixed(1);

    roll3d.toMessage({ flavor:`[교역] 판매 판정 — ${item.name}<br>3D6(${roll3d.total})${ourBrokerSkill>0?` + 중개인+${ourBrokerSkill}`:''}  + 판매DM${sellDM>=0?'+':''}${sellDM} - 구매DM${buyDM_cur} - 구매자중개${buyerMid} = <b>${final}</b> → ${row.sell}% = Cr ${unitPrice.toLocaleString()}/톤  ${Number(profit)>=0?'+':''}${profit}%` });

    await this._setShipFund(fund+net);
    const newCargo=[...(d.cargo??[])]; newCargo.splice(idx,1);
    const logs=[...(d.tradeLogs??[]),{
      type:'sell', ts:Date.now(), name:item.name, typeId:item.typeId,
      basePrice:type?.base, tons:item.tons,
      price:unitPrice, total, world:cur.name??'?', seller:game.user.name,
      buyerName: buyer?.name ?? null,
      profit, commission,
    }];
    await this._save({cargo:newCargo, tradeLogs:logs});
    ui.notifications.info(`${item.name} 판매 완료 (${Number(profit)>=0?'+':''}${profit}%)`);
  }

  // ── 세계 검색 ─────────────────────────────────────────────
  _bindSearch(panel,id,key) {
    const input=panel.querySelector(`#${id}-input`);
    const btn=panel.querySelector(`#${id}-btn`);
    const results=panel.querySelector(`#${id}-results`);
    if(!input||!btn) return;
    const doSearch=async()=>{
      const q=input.value.trim(); if(!q) return;
      results.innerHTML=`<div class="tsp-tr-searching"><i class="fa-solid fa-spinner fa-spin"></i> 검색 중...</div>`;
      try {
        const res=await fetch(`https://travellermap.com/api/search?q=${encodeURIComponent(q)}&type=World`);
        const json=await res.json();
        const worlds=(json.Results?.Items??[]).filter(i=>i.World).slice(0,8);
        if(!worlds.length){results.innerHTML=`<div class="tsp-tr-no-results">결과 없음</div>`;return;}
        results.innerHTML=worlds.map(i=>{const w=i.World;return `
          <div class="tsp-tr-result-item" data-name="${w.Name}" data-uwp="${w.Uwp??''}" data-sector="${w.Sector??''}">
            <span class="tsp-tr-result-name">${w.Name}</span>
            <span class="tsp-tr-result-uwp">${w.Uwp??''}</span>
            <span class="tsp-tr-result-sector">${w.Sector??''}</span>
          </div>`;}).join('');
        results.querySelectorAll('.tsp-tr-result-item').forEach(item=>
          item.addEventListener('click',async()=>{
            const patch={};
            patch[key]={name:item.dataset.name,uwp:item.dataset.uwp,sector:item.dataset.sector};
            await this._save(patch);
            results.innerHTML='';
            // 공급자/구매자 목록 초기화
            await this._save({suppliers:[],buyers:[],supplierAttempts:0,buyerAttempts:0});
            this._widget._renderPanel('trade');
          }));
      } catch{results.innerHTML=`<div class="tsp-tr-no-results">검색 실패</div>`;}
    };
    btn.addEventListener('click',doSearch);
    input.addEventListener('keydown',e=>{if(e.key==='Enter') doSearch();});
  }

  _fmtDate(ts){const d=new Date(ts);return `${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;}
}
