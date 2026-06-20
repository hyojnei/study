import { useState } from 'react';
import { useApp } from '../context/AppContext';
import CategoryBadge from './CategoryBadge';

export default function ThemeDetail() {
  const { state, dispatch } = useApp();
  const [confirm, setConfirm] = useState(false);

  const theme = state.themes.find(t => t.id === state.selectedId);
  if (!theme) return null;

  const isHorror     = state.categories.find(c => c.id === theme.category)?.name === '공포';
  const participants = state.members.filter(m => theme.participants.includes(m.id));

  return (
    <>
      <header className="page-header">
        <button className="btn-icon" onClick={() => dispatch({ type: 'NAVIGATE', view: 'themes' })}>
          ←
        </button>
        <h1>{theme.themeName}</h1>
      </header>

      <div style={{ padding: '14px 16px 0', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <CategoryBadge categoryId={theme.category} />
        <span className={`result-badge ${theme.isSuccess ? 'success' : 'fail'}`}>
          {theme.isSuccess ? '탈출 성공' : '탈출 실패'}
        </span>
      </div>

      <div className="section-heading">정보</div>
      <div className="detail-card">
        <div className="detail-row">
          <span className="detail-row-label">카페</span>
          <span className="detail-row-value">{theme.cafeName}</span>
        </div>
        <div className="detail-row">
          <span className="detail-row-label">지역</span>
          <span className="detail-row-value">{theme.location || '-'}</span>
        </div>
        <div className="detail-row">
          <span className="detail-row-label">날짜</span>
          <span className="detail-row-value">{theme.date}</span>
        </div>
        <div className="detail-row">
          <span className="detail-row-label">난이도</span>
          <span className="detail-row-value">
            {'★'.repeat(theme.difficulty)}{'☆'.repeat(5 - theme.difficulty)}
          </span>
        </div>
        {isHorror && theme.fearLevel != null && (
          <div className="detail-row">
            <span className="detail-row-label">공포도</span>
            <span className="detail-row-value">
              {'★'.repeat(theme.fearLevel)}{'☆'.repeat(5 - theme.fearLevel)}
            </span>
          </div>
        )}
      </div>

      {theme.notes ? (
        <>
          <div className="section-heading">메모</div>
          <div className="detail-card">
            <p className="notes-block">{theme.notes}</p>
          </div>
        </>
      ) : null}

      <div className="section-heading">참여 멤버 {participants.length}명</div>
      <div className="detail-card">
        {participants.length === 0 ? (
          <p className="notes-block" style={{ color: 'var(--text-tertiary)' }}>기록된 멤버 없음</p>
        ) : (
          <div className="chips-wrap">
            {participants.map(m => (
              <span key={m.id} className="chip">
                <span className="chip-avatar">{m.name[0]}</span>
                {m.name}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={{ padding: '8px 16px 32px' }}>
        <button className="btn-danger-outline" onClick={() => setConfirm(true)}>
          테마 기록 삭제
        </button>
      </div>

      {confirm && (
        <div className="confirm-overlay" onClick={() => setConfirm(false)}>
          <div className="confirm-sheet" onClick={e => e.stopPropagation()}>
            <p className="confirm-title">테마를 삭제할까요?</p>
            <p className="confirm-body">"{theme.themeName}" 기록이 영구적으로 삭제됩니다.</p>
            <div className="confirm-actions">
              <button className="btn-cancel" onClick={() => setConfirm(false)}>취소</button>
              <button className="btn-confirm-danger" onClick={() => dispatch({ type: 'DELETE_THEME', id: theme.id })}>
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
