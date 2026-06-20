import { useState } from 'react';
import { useApp } from '../context/AppContext';
import CategoryBadge from './CategoryBadge';

function getMemberKPI(memberId, themes) {
  const participated = themes.filter(t => t.participants.includes(memberId));
  const total   = participated.length;
  const success = participated.filter(t => t.isSuccess).length;
  const rate    = total > 0 ? Math.round((success / total) * 100) : null;
  return { total, success, rate, themes: participated };
}

export default function MemberDetail() {
  const { state, dispatch } = useApp();
  const [confirm, setConfirm] = useState(false);

  const member = state.members.find(m => m.id === state.selectedId);
  if (!member) return null;

  const kpi    = getMemberKPI(member.id, state.themes);
  const sorted = [...kpi.themes].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <header className="page-header">
        <button className="btn-icon" onClick={() => dispatch({ type: 'NAVIGATE', view: 'members' })}>
          ←
        </button>
        <h1>{member.name}</h1>
      </header>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-value">{kpi.total}</div>
          <div className="stat-label">총 참여</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{kpi.success}</div>
          <div className="stat-label">탈출 성공</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{kpi.rate !== null ? kpi.rate + '%' : '-'}</div>
          <div className="stat-label">성공률</div>
        </div>
      </div>

      <div className="section-heading" style={{ marginTop: 14 }}>참여 기록</div>
      <div className="detail-card" style={{ marginBottom: 12 }}>
        {sorted.length === 0 ? (
          <p className="notes-block" style={{ color: 'var(--text-tertiary)' }}>
            참여한 테마가 없습니다.
          </p>
        ) : (
          sorted.map(theme => (
            <div
              key={theme.id}
              className="history-item"
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch({ type: 'NAVIGATE', view: 'themeDetail', selectedId: theme.id })}
            >
              <span className="history-date">{theme.date}</span>
              <span className="history-name">{theme.themeName}</span>
              <CategoryBadge categoryId={theme.category} />
              <span
                className={`result-badge ${theme.isSuccess ? 'success' : 'fail'}`}
                style={{ fontSize: 10, padding: '2px 6px', marginLeft: 4 }}
              >
                {theme.isSuccess ? '성공' : '실패'}
              </span>
            </div>
          ))
        )}
      </div>

      <div style={{ padding: '8px 16px 32px' }}>
        <button className="btn-danger-outline" onClick={() => setConfirm(true)}>
          멤버 삭제
        </button>
      </div>

      {confirm && (
        <div className="confirm-overlay" onClick={() => setConfirm(false)}>
          <div className="confirm-sheet" onClick={e => e.stopPropagation()}>
            <p className="confirm-title">멤버를 삭제할까요?</p>
            <p className="confirm-body">
              "{member.name}" 멤버가 삭제됩니다. 테마 참여 기록에서도 제거됩니다.
            </p>
            <div className="confirm-actions">
              <button className="btn-cancel" onClick={() => setConfirm(false)}>취소</button>
              <button
                className="btn-confirm-danger"
                onClick={() => dispatch({ type: 'DELETE_MEMBER', id: member.id })}
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
