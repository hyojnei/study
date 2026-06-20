import { useState } from 'react';
import { useApp } from '../context/AppContext';

function getDDay(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.round((new Date(dateStr) - today) / 86400000);
  if (diff === 0) return 'D-Day';
  return diff > 0 ? `D-${diff}` : `D+${Math.abs(diff)}`;
}

export default function NoticeDetail() {
  const { state, dispatch } = useApp();
  const [confirm, setConfirm] = useState(false);

  const notice = state.notices.find(n => n.id === state.selectedId);
  if (!notice) return null;

  const today       = new Date().toISOString().slice(0, 10);
  const isPast      = notice.date < today;
  const memberNames = notice.participantIds
    .map(id => state.members.find(m => m.id === id)?.name)
    .filter(Boolean);

  return (
    <>
      <header className="page-header">
        <button className="btn-icon" onClick={() => dispatch({ type: 'NAVIGATE', view: 'notices' })}>
          ←
        </button>
        <h1>활동 공지</h1>
      </header>

      <div className="notice-detail-hero">
        <span className={`dday-hero ${isPast ? 'past' : ''}`}>{getDDay(notice.date)}</span>
        <span className="notice-detail-date">{notice.date}</span>
      </div>

      <div className="section-heading">장소</div>
      <div className="detail-card">
        <div className="detail-row">
          <span className="detail-row-label">카페</span>
          <span className="detail-row-value">{notice.cafeName}</span>
        </div>
        <div className="detail-row">
          <span className="detail-row-label">지역</span>
          <span className="detail-row-value">{notice.location}</span>
        </div>
      </div>

      <div className="section-heading">예정 테마 {notice.plannedThemes.length}개</div>
      <div className="detail-card">
        {notice.plannedThemes.map((t, idx) => (
          <div key={t.id} className="detail-row">
            <span className="detail-row-label">{idx + 1}</span>
            <span className="detail-row-value">{t.themeName}</span>
          </div>
        ))}
      </div>

      <div className="section-heading">참여 멤버</div>
      <div className="detail-card">
        {memberNames.length === 0 ? (
          <p className="notes-block" style={{ color: 'var(--text-tertiary)' }}>지정된 멤버 없음</p>
        ) : (
          <div className="chips-wrap">
            {memberNames.map(name => (
              <span key={name} className="chip">{name}</span>
            ))}
          </div>
        )}
      </div>

      <div style={{ padding: '12px 16px 32px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {notice.isCompleted && (
          <div className="completed-banner">기록 완료된 활동입니다.</div>
        )}

        {isPast && !notice.isCompleted && (
          <button
            className="btn-primary"
            onClick={() => dispatch({ type: 'NAVIGATE', view: 'convertNotice', selectedId: notice.id })}
          >
            기록 완료하기
          </button>
        )}

        {!notice.isCompleted && (
          <button className="btn-danger-outline" onClick={() => setConfirm(true)}>
            공지 삭제
          </button>
        )}
      </div>

      {confirm && (
        <div className="confirm-overlay" onClick={() => setConfirm(false)}>
          <div className="confirm-sheet" onClick={e => e.stopPropagation()}>
            <p className="confirm-title">공지를 삭제할까요?</p>
            <p className="confirm-body">이 활동 공지가 영구적으로 삭제됩니다.</p>
            <div className="confirm-actions">
              <button className="btn-cancel" onClick={() => setConfirm(false)}>취소</button>
              <button className="btn-confirm-danger" onClick={() => dispatch({ type: 'DELETE_NOTICE', id: notice.id })}>
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
