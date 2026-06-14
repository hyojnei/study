import { useApp } from '../context/AppContext';
import CategoryBadge from './CategoryBadge';

export default function ThemeList() {
  const { state, dispatch } = useApp();

  const filtered = state.activeCategory === 'all'
    ? state.themes
    : state.themes.filter(t => t.categoryId === state.activeCategory);

  const sorted = [...filtered].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <header className="page-header">
        <h1>테마 기록</h1>
        <button
          className="btn-icon"
          title="테마 추가"
          onClick={() => dispatch({ type: 'NAVIGATE', view: 'addTheme' })}
        >
          ＋
        </button>
      </header>

      <div className="category-tabs">
        <button
          className={`category-tab ${state.activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => dispatch({ type: 'SET_CATEGORY_FILTER', categoryId: 'all' })}
        >
          전체 {state.themes.length}
        </button>
        {state.categories.map(cat => {
          const count = state.themes.filter(t => t.categoryId === cat.id).length;
          return (
            <button
              key={cat.id}
              className={`category-tab ${state.activeCategory === cat.id ? 'active' : ''}`}
              style={state.activeCategory === cat.id
                ? { background: cat.color, color: 'white' }
                : {}}
              onClick={() => dispatch({ type: 'SET_CATEGORY_FILTER', categoryId: cat.id })}
            >
              {cat.emoji} {cat.name} {count}
            </button>
          );
        })}
      </div>

      {sorted.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🎭</div>
          <p>아직 기록된 테마가 없어요.<br />오른쪽 상단 ＋ 버튼으로 추가해보세요!</p>
        </div>
      ) : (
        <div className="card-list">
          {sorted.map(theme => (
            <ThemeCard
              key={theme.id}
              theme={theme}
              onClick={() => dispatch({ type: 'NAVIGATE', view: 'themeDetail', selectedId: theme.id })}
            />
          ))}
        </div>
      )}
    </>
  );
}

function ThemeCard({ theme, onClick }) {
  return (
    <div className="theme-card" onClick={onClick}>
      <div className="theme-card-top">
        <span className="theme-card-name">{theme.name}</span>
        <span className={`result-badge ${theme.cleared ? 'success' : 'fail'}`}>
          {theme.cleared ? '성공' : '실패'}
        </span>
      </div>
      <div className="theme-card-meta">
        <CategoryBadge categoryId={theme.categoryId} />
        <span className="theme-card-cafe">{theme.cafe}</span>
        <span className="theme-card-date">{theme.date}</span>
      </div>
    </div>
  );
}
