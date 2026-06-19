import { ShipPanelWidget } from './ship-panel-app.mjs';

const SOCKET_NAME = 'module.traveller-panel-KR';
let widget = null;

Hooks.once('init', () => {
  console.log('Traveller Ship Panel | init');

  game.settings.register('traveller-panel-KR', 'shipData', {
    name: 'Ship Panel Data',
    scope: 'world',
    config: false,
    type: Object,
    default: {}
  });

  game.settings.register('traveller-panel-KR', 'savedShips', {
    name: 'Saved Ships',
    scope: 'world',
    config: false,
    type: Object,
    default: {}
  });

  // ── 권한 설정 ──────────────────────────────────────────────
  const perm = (name, label, def) => game.settings.register('traveller-panel-KR', name, {
    name: label,
    hint: '플레이어에게도 허용하려면 켜세요.',
    scope: 'world',
    config: true,
    type: Boolean,
    default: def,
  });

  perm('permSelectShip',        '함선 종류 선택 — 플레이어 허용',        false);
  perm('permEditStats',         '수치 편집 — 플레이어 허용',              false);
  perm('permUploadImage',       '이미지 업로드 — 플레이어 허용',          false);
  perm('permSwitchView',        '외부/내부 뷰 전환 — 플레이어 허용',      true);
  perm('permSaveLoad',          '불러오기 — 플레이어 허용',                true);
  perm('permDeleteShip',        '함선 삭제 — 플레이어 허용',              false);
  perm('permTravellerRegister', '여행자 등록/삭제 — 플레이어 허용',       true);

  game.settings.register('traveller-panel-KR', 'tradeShowIllegal', {
    name: '교역 — 불법 상품 표시 (GM만)',
    hint: '투기 무역 표에 불법 상품을 표시합니다. GM에게만 적용됩니다.',
    scope: 'world',
    config: true,
    type: Boolean,
    default: false,
  });
});

Hooks.once('ready', () => {
  game.socket.on(SOCKET_NAME, async (payload) => {
    if (payload.type === 'syncData') {
      // ── 플레이어 → GM: 저장 요청 ──────────────────────────
      // GM이 settings에 저장 후 전체에 재브로드캐스트
      if (payload.requestSave && game.user.isGM) {
        const all = game.settings.get('traveller-panel-KR', 'shipData') ?? {};
        if (!all[payload.sceneKey]) all[payload.sceneKey] = {};
        all[payload.sceneKey][payload.tab] = payload.data;
        await game.settings.set('traveller-panel-KR', 'shipData', all);

        // 저장 완료 후 전체 브로드캐스트 (GM 포함 모든 클라이언트 갱신)
        game.socket.emit(SOCKET_NAME, {
          type: 'broadcastData',
          sceneKey: payload.sceneKey,
          tab: payload.tab,
          data: payload.data,
        });
        // GM 본인도 갱신
        widget?.receiveSync(payload.sceneKey, payload.data, payload.tab);
        return;
      }

      // ── GM → 모든 플레이어: 직접 갱신 ───────────────────────
      // (GM은 settings에 직접 저장하고 emit하므로 여기서 수신)
      widget?.receiveSync(payload.sceneKey, payload.data, payload.tab);
    }

    if (payload.type === 'broadcastData') {
      // GM이 저장 완료 후 재브로드캐스트한 데이터 수신
      widget?.receiveSync(payload.sceneKey, payload.data, payload.tab);
    }
  });

  widget = new ShipPanelWidget({ socket: SOCKET_NAME });
  widget.mount();
});

// 씬 변경 시 패널 갱신
Hooks.on('canvasReady', () => {
  if (widget) widget.refreshScene();
});

// Actor 업데이트 시 여행자 탭 갱신
Hooks.on('updateActor', () => {
  if (widget?._activeTab === 'traveller') widget.refreshScene();
});

// 설정 변경 시 패널 즉시 갱신
Hooks.on('updateSetting', (setting) => {
  if (!setting.key?.startsWith('traveller-panel-KR.perm')) return;
  widget?.refreshScene();
});

window.TravellerShipPanel = { get widget() { return widget; } };
