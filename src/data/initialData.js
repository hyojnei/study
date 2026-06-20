export const DEFAULT_CATEGORIES = [
  { id: 'cat01', name: '추리',         color: '#4A90E2' },
  { id: 'cat02', name: 'SF',           color: '#7B68EE' },
  { id: 'cat03', name: '판타지',       color: '#9C27B0' },
  { id: 'cat04', name: '공포',         color: '#E53935' },
  { id: 'cat05', name: '미스터리',     color: '#2E7D32' },
  { id: 'cat06', name: '어드벤처',     color: '#F57C00' },
  { id: 'cat07', name: '크라임씬',     color: '#00838F' },
  { id: 'cat08', name: '잠입',         color: '#37474F' },
  { id: 'cat09', name: '코믹',         color: '#F9A825' },
  { id: 'cat10', name: '스릴러',       color: '#D84315' },
  { id: 'cat11', name: '감성/드라마',  color: '#E91E63' },
  { id: 'cat12', name: '아케이드/미션', color: '#00ACC1' },
  { id: 'cat13', name: '액션',         color: '#FF5722' },
];

export const DEFAULT_LOCATIONS = ['강남', '홍대', '기타'];

export const SAMPLE_MEMBERS = [
  { id: 'm01', name: '이예지(데이터전략)', team: '데이터전략팀',           joinDate: '2024.09', role: '초대 회장',         status: '퇴사(2025.08)', isScared: '탱',   note: '동호회 창설자' },
  { id: 'm02', name: '최효진',           team: '서치프로덕트팀',           joinDate: '2024.09', role: '회장(2025.11~)',    status: '활동중',        isScared: '쫄',   note: '' },
  { id: 'm03', name: '정민희',           team: 'US프로덕트팀',             joinDate: '2024.09', role: '동호회원',          status: '활동중',        isScared: '쫄',   note: '' },
  { id: 'm04', name: '김좌상',           team: '데이터엔지니어링팀',       joinDate: '2024.09', role: '동호회원',          status: '탈퇴(2026.04)', isScared: '쫄',   note: '' },
  { id: 'm05', name: '황희정',           team: '크리에이티브서비스개발팀', joinDate: '2024.09', role: '동호회원',          status: '활동중',        isScared: '탱',   note: '' },
  { id: 'm06', name: '정지은',           team: '웰니스프로덕트팀',         joinDate: '2024.09', role: '동호회원',          status: '퇴사(2025.06)', isScared: '탱',   note: '' },
  { id: 'm07', name: '김예진',           team: '디스커버리프로덕트팀',     joinDate: '2024.09', role: '총무(2025.11~)',    status: '활동중',        isScared: '쫄',   note: 'Raina' },
  { id: 'm08', name: '안혜미',           team: '커머스플랫폼개발팀',       joinDate: '2024.09', role: '동호회원',          status: '탈퇴(2025.12)', isScared: '?',    note: '' },
  { id: 'm09', name: '노현호',           team: '커머스플랫폼개발팀',       joinDate: '2024.09', role: '동호회원',          status: '활동중',        isScared: '탱',   note: '공포 탱커' },
  { id: 'm10', name: '이한석',           team: '인벤토리플랫폼개발팀',     joinDate: '2024.09', role: '동호회원',          status: '활동중',        isScared: '탱',   note: '' },
  { id: 'm11', name: '김정욱',           team: '데이터엔지니어링팀',       joinDate: '2024.09', role: '동호회원',          status: '활동중',        isScared: '쫄',   note: '' },
  { id: 'm12', name: '이수지',           team: '디스커버리프로덕트팀',     joinDate: '2024.09', role: '동호회원',          status: '활동중',        isScared: '탱',   note: '' },
  { id: 'm13', name: '은종현',           team: '웰니스서비스개발팀',       joinDate: '2024.09', role: '동호회원',          status: '활동중',        isScared: '탱',   note: '' },
  { id: 'm14', name: '박성진',           team: '인벤토리플랫폼개발팀',     joinDate: '2024.11', role: '동호회원',          status: '활동중',        isScared: '탱',   note: '' },
  { id: 'm15', name: '양소현',           team: 'QA팀',                     joinDate: '2025.04', role: '부회장(2025.11~)', status: '활동중',        isScared: '쫄탱', note: '' },
  { id: 'm16', name: '이슬비',           team: '파트너서비스사업팀',       joinDate: '2025.06', role: '동호회원',          status: '탈퇴(2025.10)', isScared: '탱',   note: '탱커' },
  { id: 'm17', name: '이예지(코어프로덕트)', team: '코어프로덕트담당',     joinDate: '2025.06', role: '회장(2025.08~11)', status: '탈퇴(2025.10)', isScared: '탱',   note: '' },
  { id: 'm18', name: '설혜리',           team: 'PMO팀',                    joinDate: '2025.08', role: '동호회원',          status: '탈퇴(2025.12)', isScared: '쫄',   note: '' },
  { id: 'm19', name: '최유락',           team: '글로벌프로덕트디자인팀',   joinDate: '2025.09', role: '동호회원',          status: '탈퇴(2026.05)', isScared: '?',    note: '' },
  { id: 'm20', name: '임가영',           team: 'QA팀',                     joinDate: '2025.09', role: '동호회원',          status: '활동중',        isScared: '탱',   note: '' },
  { id: 'm21', name: '이선민',           team: '테크전략팀',               joinDate: '2025.10', role: '동호회원',          status: '활동중',        isScared: '탱',   note: '방탈출 50회+' },
  { id: 'm22', name: '이채린',           team: '디스커버리프로덕트팀',     joinDate: '2025.10', role: '동호회원',          status: '활동중',        isScared: '탱',   note: 'Linlin, 탱커' },
  { id: 'm23', name: '윤예린',           team: '디스커버리프로덕트팀',     joinDate: '2026.03', role: '동호회원',          status: '활동중',        isScared: '탱',   note: '' },
  { id: 'm24', name: '최주열',           team: 'QA팀',                     joinDate: '2026.03', role: '동호회원',          status: '활동중',        isScared: '탱',   note: '' },
  { id: 'm25', name: '김유진',           team: '디스커버리개발팀',         joinDate: '2026.04', role: '동호회원',          status: '활동중',        isScared: '탱',   note: '' },
  { id: 'm26', name: '허유라',           team: '경기북부리테일팀',         joinDate: '2026.05', role: '동호회원',          status: '활동중',        isScared: '쫄',   note: '' },
  { id: 'm27', name: '손다미',           team: '커스터머플랫폼개발팀',     joinDate: '2026.06', role: '동호회원',          status: '활동중',        isScared: '탱',   note: '' },
  { id: 'm28', name: '허소희',           team: '',                          joinDate: '2024.11', role: '동호회원',          status: '탈퇴',          isScared: '?',    note: '' },
  { id: 'm29', name: '유진',             team: '',                          joinDate: '2024.11', role: '동호회원',          status: '탈퇴',          isScared: '?',    note: '' },
];

export const SAMPLE_THEMES = [
  // 회차 2 — 2024-11-06 강남
  { id: 't001', themeName: '대호시장 살인사건',           cafeName: '비트포비아 강남던전',          location: '강남', category: 'cat01', date: '2024-11-06', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m04','m28','m05','m06'] },
  { id: 't002', themeName: '메이데이',                    cafeName: '비트포비아 강남던전',          location: '강남', category: 'cat02', date: '2024-11-06', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m07','m14','m08'] },
  { id: 't003', themeName: '마음을 그려드립니다(마그다)', cafeName: '비트포비아 강남던전2',         location: '강남', category: 'cat11', date: '2024-11-06', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m09','m10','m01'] },
  { id: 't004', themeName: '로스트킹덤:대탐험의시작',     cafeName: '비트포비아 강남던전2',         location: '강남', category: 'cat06', date: '2024-11-06', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m29','m11','m03','m02'] },

  // 회차 4 — 2025-01-09 홍대
  { id: 't005', themeName: '라스트코어',                  cafeName: '지구별방탈출 홍대라스트시티',  location: '홍대', category: 'cat02', date: '2025-01-09', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m09','m14','m03','m01'] },
  { id: 't006', themeName: '스텔라',                      cafeName: '지구별방탈출 홍대라스트시티',  location: '홍대', category: 'cat03', date: '2025-01-09', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m08','m13','m12','m05'] },
  { id: 't007', themeName: '섀도우',                      cafeName: '지구별방탈출 홍대라스트시티',  location: '홍대', category: 'cat05', date: '2025-01-09', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m01','m02','m07','m10','m11'] },

  // 회차 5 — 2025-02-13 강남
  { id: 't008', themeName: '태초의신부',                  cafeName: '판타스트릭 강남1점',           location: '강남', category: 'cat03', date: '2025-02-13', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m07','m11','m14','m01'] },
  { id: 't009', themeName: '데스티니앤드타로',            cafeName: '비트포비아 던전스텔라',        location: '강남', category: 'cat03', date: '2025-02-13', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m03','m02','m08','m09'] },
  { id: 't010', themeName: '귀문기담',                    cafeName: '에피소드 강남점',              location: '강남', category: 'cat04', date: '2025-02-13', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m10','m12','m06'] },

  // 회차 6 — 2025-03-13 홍대
  { id: 't011', themeName: '업사이드다운',                cafeName: '오아시스뮤지엄',               location: '홍대', category: 'cat06', date: '2025-03-13', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m11','m14','m03','m01'] },
  { id: 't012', themeName: '미씽삭스미스터리',            cafeName: '오아시스뮤지엄',               location: '홍대', category: 'cat03', date: '2025-03-13', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m07','m10','m02'] },
  { id: 't013', themeName: '배드타임',                    cafeName: '오아시스뮤지엄',               location: '홍대', category: 'cat04', date: '2025-03-13', difficulty: 4, fearLevel: 3,    isSuccess: true, notes: '', participants: ['m09','m13','m06'] },

  // 회차 7 — 2025-04-10 강남
  { id: 't014', themeName: '백투더씬',                    cafeName: '키이스케이프',                 location: '강남', category: 'cat01', date: '2025-04-10', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m07','m03','m02'] },
  { id: 't015', themeName: '아이엠',                      cafeName: '제로월드',                     location: '강남', category: 'cat04', date: '2025-04-10', difficulty: 3, fearLevel: 1,    isSuccess: true, notes: '', participants: ['m06','m09','m04','m05'] },
  { id: 't016', themeName: '악마와싸우는자',              cafeName: '겟어웨이',                     location: '강남', category: 'cat04', date: '2025-04-10', difficulty: 2, fearLevel: 1,    isSuccess: true, notes: '', participants: ['m01','m10','m14'] },

  // 회차 8 — 2025-05-08 홍대
  { id: 't017', themeName: '퀘스천마크',                  cafeName: '퀘스천마크 홍대',              location: '홍대', category: 'cat05', date: '2025-05-08', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m07','m03','m15','m10'] },
  { id: 't018', themeName: '즐거운나의집',                cafeName: '위욜',                         location: '홍대', category: 'cat04', date: '2025-05-08', difficulty: 4, fearLevel: 3,    isSuccess: true, notes: '', participants: ['m01','m09','m14','m16'] },

  // 회차 9 — 2025-06-12 강남
  { id: 't019', themeName: '링',                          cafeName: '제로월드 강남',                location: '강남', category: 'cat04', date: '2025-06-12', difficulty: 4, fearLevel: 4,    isSuccess: true, notes: '', participants: ['m01','m09','m16','m14'] },
  { id: 't020', themeName: '콜러',                        cafeName: '제로월드 강남',                location: '강남', category: 'cat04', date: '2025-06-12', difficulty: 4, fearLevel: 4,    isSuccess: true, notes: '', participants: ['m15','m10','m11'] },
  { id: 't021', themeName: '돈(DONE)',                    cafeName: '제로월드 강남',                location: '강남', category: 'cat08', date: '2025-06-12', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m02','m07','m03'] },

  // 회차 10 — 2025-07-10 홍대
  { id: 't022', themeName: '인형저택 살인사건',           cafeName: '퍼즐팩토리 홍대2호점',         location: '홍대', category: 'cat07', date: '2025-07-10', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m09','m16','m01','m02','m17'] },
  { id: 't023', themeName: '벚꽃축제 살인사건',           cafeName: '퍼즐팩토리 홍대3호점',         location: '홍대', category: 'cat07', date: '2025-07-10', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m07','m11','m15','m10','m03'] },

  // 회차 11 — 2025-08-14 홍대
  { id: 't024', themeName: '꼬레아우라 (18:40)',          cafeName: '코드케이 홍대점',              location: '홍대', category: 'cat01', date: '2025-08-14', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m07','m11','m12'] },
  { id: 't025', themeName: '꼬레아우라 (19:30)',          cafeName: '코드케이 홍대점',              location: '홍대', category: 'cat01', date: '2025-08-14', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m17','m15','m10'] },

  // 회차 12 — 2025-09-11 강남
  { id: 't026', themeName: 'LOST KINGDOM',               cafeName: '비트포비아 강남던전',          location: '강남', category: 'cat06', date: '2025-09-11', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m03','m09','m19'] },
  { id: 't027', themeName: '메아리',                      cafeName: '에피소드 강남점',              location: '강남', category: 'cat04', date: '2025-09-11', difficulty: 4, fearLevel: 4,    isSuccess: true, notes: '', participants: ['m17','m13','m14'] },
  { id: 't028', themeName: 'TIENTANG CITY',              cafeName: '비트포비아 던전스텔라',        location: '강남', category: 'cat13', date: '2025-09-11', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m02','m07','m15'] },

  // 회차 13 — 2025-10-16 홍대
  { id: 't029', themeName: '화생설화',                    cafeName: '던전101',                      location: '홍대', category: 'cat03', date: '2025-10-16', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m02','m22','m07','m03','m12'] },
  { id: 't030', themeName: '어비스',                      cafeName: '비밀의숲 홍대점',              location: '홍대', category: 'cat05', date: '2025-10-16', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m14','m16','m10'] },
  { id: 't031', themeName: '퀘스천마크',                  cafeName: '퀘스천마크 홍대점',            location: '홍대', category: 'cat05', date: '2025-10-16', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m21','m19','m11','m18'] },
  { id: 't032', themeName: '사일런트',                    cafeName: '포인트나인',                   location: '홍대', category: 'cat10', date: '2025-10-16', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m09','m20','m15'] },

  // 회차 14 — 2025-11-13 강남
  { id: 't033', themeName: '엔제리오',                    cafeName: '키이스케이프 강남 더오름',     location: '강남', category: 'cat03', date: '2025-11-13', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m11','m02'] },
  { id: 't034', themeName: '내 방',                       cafeName: '키이스케이프 강남 스테이션',   location: '강남', category: 'cat09', date: '2025-11-13', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m07','m18','m21'] },
  { id: 't035', themeName: 'NOSTALGIA VISTA',            cafeName: '키이스케이프 강남 스테이션',   location: '강남', category: 'cat05', date: '2025-11-13', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m10','m14'] },

  // 회차 15 — 2025-12-11 홍대
  { id: 't036', themeName: '멸종위기종탐사대',            cafeName: '지구별방탈출 홍대라스트시티',  location: '홍대', category: 'cat06', date: '2025-12-11', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m02','m14','m20','m10'] },
  { id: 't037', themeName: '카부트',                      cafeName: '지구별방탈출 홍대라스트시티',  location: '홍대', category: 'cat10', date: '2025-12-11', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m21','m16','m15','m05'] },
  { id: 't038', themeName: '료칸살인사건',                cafeName: '퍼즐팩토리 홍대본점',          location: '홍대', category: 'cat07', date: '2025-12-11', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m09','m22','m11','m08'] },

  // 회차 16 — 2026-01-08 강남
  { id: 't039', themeName: '클레임',                      cafeName: '키이스케이프',                 location: '강남', category: 'cat03', date: '2026-01-08', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m02','m07','m20','m11'] },
  { id: 't040', themeName: '위시',                        cafeName: '키이스케이프',                 location: '강남', category: 'cat03', date: '2026-01-08', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m09','m03','m21','m10'] },

  // 회차 17 — 2026-02-12 홍대
  { id: 't041', themeName: '삼일보육원',                  cafeName: '티켓투이스케이프',             location: '홍대', category: 'cat04', date: '2026-02-12', difficulty: 4, fearLevel: 3,    isSuccess: true, notes: '', participants: ['m14','m20','m09','m07'] },
  { id: 't042', themeName: '해줘!놈즈',                   cafeName: '티켓투이스케이프',             location: '홍대', category: 'cat09', date: '2026-02-12', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m03','m10','m02','m21','m11'] },

  // 회차 18 — 2026-03-12 강남
  { id: 't043', themeName: '악마와싸우는자',              cafeName: '겟어웨이',                     location: '강남', category: 'cat04', date: '2026-03-12', difficulty: 3, fearLevel: 1,    isSuccess: true, notes: '', participants: ['m09','m14','m20'] },
  { id: 't044', themeName: '메가게임(MEGA GAME)',         cafeName: '메가게임',                     location: '강남', category: 'cat12', date: '2026-03-12', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m07','m15','m22','m21'] },
  { id: 't045', themeName: '조선피자몰',                  cafeName: '플레이더월드 강남점',          location: '강남', category: 'cat09', date: '2026-03-12', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m11','m10','m02'] },

  // 회차 19 — 2026-04-09 홍대
  { id: 't046', themeName: '게임의 법칙',                 cafeName: '티켓투이스케이프',             location: '홍대', category: 'cat12', date: '2026-04-09', difficulty: 5, fearLevel: null, isSuccess: true, notes: '', participants: ['m11','m03','m10','m02'] },
  { id: 't047', themeName: '두껍아 두껍아 헌집줄게 새집다오', cafeName: '토끼굴',                  location: '홍대', category: 'cat05', date: '2026-04-09', difficulty: 2, fearLevel: null, isSuccess: true, notes: '', participants: ['m07','m24','m25','m14'] },
  { id: 't048', themeName: '한라아파트 4동 404호',        cafeName: '쇼룸 404',                     location: '홍대', category: 'cat04', date: '2026-04-09', difficulty: 2, fearLevel: 2,    isSuccess: true, notes: '', participants: ['m20','m09'] },

  // 회차 20 — 2026-05-14 강남
  { id: 't049', themeName: '마음을 그려드립니다',         cafeName: '비트포비아 강남던전',          location: '강남', category: 'cat11', date: '2026-05-14', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m21','m25','m20'] },
  { id: 't050', themeName: '대호시장 살인사건',           cafeName: '비트포비아 강남던전',          location: '강남', category: 'cat01', date: '2026-05-14', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m23','m07','m15','m09'] },
  { id: 't051', themeName: '3일',                         cafeName: '던전루나 강남',                location: '강남', category: 'cat01', date: '2026-05-14', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m02','m11','m26'] },

  // 회차 21 — 2026-06-11 홍대
  { id: 't052', themeName: '서울의 봄',                   cafeName: '크라임챔버',                   location: '홍대', category: 'cat07', date: '2026-06-11', difficulty: 3, fearLevel: null, isSuccess: true, notes: '', participants: ['m24','m21','m25','m11','m05'] },
  { id: 't053', themeName: '이미지 세탁소',               cafeName: '홍대던전3',                    location: '홍대', category: 'cat03', date: '2026-06-11', difficulty: 2, fearLevel: null, isSuccess: true, notes: '', participants: ['m10','m20','m03','m02'] },
  { id: 't054', themeName: '전래동 자살사건',             cafeName: '던전101',                      location: '홍대', category: 'cat01', date: '2026-06-11', difficulty: 4, fearLevel: null, isSuccess: true, notes: '', participants: ['m27','m15','m07','m22'] },
  { id: 't055', themeName: '문신',                        cafeName: '지구별방탈출 홍대라스트시티',  location: '홍대', category: 'cat04', date: '2026-06-11', difficulty: 2, fearLevel: 3,    isSuccess: true, notes: '', participants: ['m09','m26','m14','m23'] },
];
