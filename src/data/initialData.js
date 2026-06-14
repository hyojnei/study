export const DEFAULT_CATEGORIES = [
  { id: 'cat-horror',    name: '공포',  color: '#dc2626', emoji: '👻' },
  { id: 'cat-fantasy',   name: '판타지', color: '#7c3aed', emoji: '✨' },
  { id: 'cat-mystery',   name: '추리',  color: '#0284c7', emoji: '🔍' },
  { id: 'cat-adventure', name: '모험',  color: '#d97706', emoji: '🗺️' },
];

export const SAMPLE_THEMES = [
  {
    id: 'theme-1',
    name: '저주받은 병원',
    categoryId: 'cat-horror',
    cafe: '미스터리룸 홍대점',
    date: '2025-03-15',
    difficulty: 4,
    cleared: false,
    notes: '마지막 퍼즐이 너무 어려웠음. 다음엔 힌트 꼭 쓰자.',
    memberIds: ['member-1', 'member-2', 'member-3'],
  },
  {
    id: 'theme-2',
    name: '엘프의 숲',
    categoryId: 'cat-fantasy',
    cafe: '키이스케이프 강남점',
    date: '2025-04-20',
    difficulty: 3,
    cleared: true,
    notes: '배경 스토리가 인상적. 분위기 최고.',
    memberIds: ['member-1', 'member-2'],
  },
  {
    id: 'theme-3',
    name: '명탐정의 방',
    categoryId: 'cat-mystery',
    cafe: '넥스트에스케이프',
    date: '2025-05-10',
    difficulty: 5,
    cleared: true,
    notes: '',
    memberIds: ['member-1', 'member-3', 'member-4'],
  },
];

export const SAMPLE_MEMBERS = [
  { id: 'member-1', name: '김민준' },
  { id: 'member-2', name: '이서연' },
  { id: 'member-3', name: '박지훈' },
  { id: 'member-4', name: '최예린' },
];
