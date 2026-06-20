import { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import CategoryBadge from './CategoryBadge';

const SORT_OPTIONS = [
  { value: 'date',       label: '최신순' },
  { value: 'difficulty', label: '난이도순' },
  { value: 'fearLevel',  label: '공포도순' },
];

export default function ThemeList() {
  const { state, dispatch } = useApp();
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');
  const [sort,           setSort]           = useState('date');

  const filtered = useMemo(() => {
    let list = state.themes;
    if (filterCategory !== 'all') list = list.filter(t => t.category === filterCategory);
    if (filterLocation !== 'all') list = list.filter(t => t.location === filterLocation);
    return [...list].sort((a, b) => {
      if (sort === 'date')       return b.date.localeCompare(a.date);
      if (sort === 'difficulty') return b.difficulty - a.difficulty;
      if (sort === 'fearLevel') {
        const av = a.fearLevel ?? -1;
        const bv = b.fearLevel ?? -1;
        return bv - av;
      }
      return 0;
    });
  }, [state.themes, filterCategory, filterLocation, sort]);

  return (
    <>
      <header className="page-header">
        <h1>테마기록</h1>
        <button className="btn-icon" onClick={() => dispatch({ type: 'NAVIGATE', view: 'addTheme' })}>
          ＋
        </button>
      </header>

      <div className="filter-bar">
        <select className="filter-select" value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
          <option value="all">전체 장르</option>
          {state.categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <select className="filter-select" value={filterLocation} onChange={e => setFilterLocation(e.target.value)}>
          <option value="all">전체 지역</option>
          {state.locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <select className="filter-select" value={sort} onChange={e => setSort(e.target.value)}>
          {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>조건에 맞는 테마가 없어요.<br />필터를 조정해보세요!</p>
        </div>
      ) : (
        <div className="card-list">
          {filtered.map(theme => (
            <ThemeCard
              key={theme.id}
              theme={theme}
              categories={state.categories}
              onClick={() => dispatch({ type: 'NAVIGATE', view: 'themeDetail', selectedId: theme.id })}
            />
          ))}
        </div>
      )}
    </>
  );
}

function ThemeCard({ theme, categories, onClick }) {
  const isHorror = categories.find(c => c.id === theme.category)?.name === '공포';
  return (
    <div className="theme-card" onClick={onClick}>
      <div className="theme-card-top">
        <span className="theme-card-name">{theme.themeName}</span>
        <span className={`result-badge ${theme.isSuccess ? 'success' : 'fail'}`}>
          {theme.isSuccess ? '성공' : '실패'}
        </span>
      </div>
      <div className="theme-card-meta">
        <CategoryBadge categoryId={theme.category} />
        {theme.location && <span className="location-badge">{theme.location}</span>}
        <span className="theme-card-cafe">{theme.cafeName}</span>
        <span className="theme-card-date">{theme.date}</span>
      </div>
      <div className="theme-card-stats">
        <span>난이도 {'★'.repeat(theme.difficulty)}{'☆'.repeat(5 - theme.difficulty)}</span>
        {isHorror && theme.fearLevel != null && (
          <span className="fear-stat">공포도 {'★'.repeat(theme.fearLevel)}{'☆'.repeat(5 - theme.fearLevel)}</span>
        )}
      </div>
    </div>
  );
}
