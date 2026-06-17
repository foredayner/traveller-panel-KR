# Traveller Panel

Foundry VTT용 Mongoose Traveller 2nd Edition (MGT2e) 한국어 보조 모듈.

> 이 모듈은 [Mongoose Publishing Fair Use Policy](https://www.mongoosepublishing.com/pages/traveller-licensing)에 따라 제작된 비영리 팬 콘텐츠입니다.  
> Traveller © Mongoose Publishing. All rights reserved.

## 기능

- **우주선 탭** — 함선 32종 카탈로그(한국어), 동력 출력/사용량/여분 동력 계산, 외부·내부 이미지, 공유 자금 관리
- **여행자 탭** — Actor 드래그 등록, 특성치·기능·체력·장갑·STR/DEX/END 피해 표시 및 편집
- **섹터 탭** — travellermap.com 포스터 연동, 서브섹터 Journal 드래그
- **의뢰 탭** — 미션 로그, 플레이어 진행 편집
- **교역 탭** — MGT2e 투기 무역(p.210~211 기반), UWP 파싱, 중개/공급자 판정, 채팅 출력, GM 전용 기록 초기화
- **규칙 탭** — 기본 개념·기능 설명·판정·전투·우주전투·초능력·세계법규·무역·캐릭터메이킹 요약
- **표 탭** — 24개 랜덤표 자동 굴림(D66/2D/1D/체이닝), 경력별 표 13개 직업군 아코디언

## 의존성

| | 이름 | 설명 |
|---|---|---|
| 필수 | `mgt2e` (0.21.0+) | Mongoose Traveller 2e 시스템 |
| 권장 | `traveller-toolkit` | 섹터 탭 서브섹터 지도 연동 |
| 선택 | `traveller-chargen-sheet` | 피해 폴백 연동 |          -> 아직 작업중 (미완성)

## 설치

1. Foundry VTT → 모듈 관리 → 모듈 설치
2. manifest URL 입력:
   ```
   https://raw.githubusercontent.com/foredayner/traveller-panel/main/module.json
   ```
3. `traveller-panel` 폴더를 FVTT `modules/` 디렉토리에 복사

## 버전

v3.0.0 — Foundry VTT v12~v14 지원

## 라이선스

The Traveller game in all forms is owned by Mongoose Publishing.  
Copyright 1977-2024 Mongoose Publishing. Traveller is a registered trademark of Mongoose Publishing.  
Mongoose Publishing permits web sites and fanzines for this game, provided it contains this notice,  
that Mongoose Publishing is notified, and subject to a withdrawal of permission on 90 days notice.  
The contents of this site are for personal, non-commercial use only.

이 모듈은 비상업적 팬 제작 콘텐츠입니다.  
제작: foredayner
