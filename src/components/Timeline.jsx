import { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import CategoryBadge from './CategoryBadge';

export default function Timeline() {
  const { state, dispatch } = useApp();

  const grouped = useMemo(() => {
    const sorted = [...state.themes].sort((a, b) => b.date.localeCompare(a.date));
    const map = new Map();
    sorted.forEach(t => {
      if (!map.has(t.date)) map.set(t.date, []);
      map.get(t.date).push(t);
    });
    return Array.from(map.entries());
  }, [state.themes]);

  return (
    <>
      <header className="page-header">
        <h1>타임라인</h1>
      </header>

      {grouped.length === 0 ? (
        <div className="empty-state">
          <p>기록된 활동이 없어요.<br />테마기록 탭에서 기록을 추가해보세요.</p>
        </div>
      ) : (
        <div className="timeline-wrap">
          {grouped.map(([date, themes]) => (
            <div key={date} className="timeline-day">
              <div className="timeline-date-label">{date}</div>
              <div className="timeline-items">
                {themes.map(theme => (
                  <div
                    key={theme.id}
                    className="timeline-item"
                    onClick={() => dispatch({ type: 'NAVIGATE', view: 'themeDetail', selectedId: theme.id })}
                  >
                    <div className="timeline-item-top">
                      <span className="timeline-item-name">{theme.themeName}</span>
                      <span className={`result-badge ${theme.isSuccess ? 'success' : 'fail'}`}>
                        {theme.isSuccess ? '성공' : '실패'}
                      </span>
                    </div>
                    <div className="timeline-item-meta">
                      <CategoryBadge categoryId={theme.category} />
                      {theme.location && <span className="location-badge">{theme.location}</span>}
                      <span className="theme-card-cafe">{theme.cafeName}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
