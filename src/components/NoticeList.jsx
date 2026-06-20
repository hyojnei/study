import { useApp } from '../context/AppContext';

function getDDay(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.round((new Date(dateStr) - today) / 86400000);
  if (diff === 0) return 'D-Day';
  return diff > 0 ? `D-${diff}` : `D+${Math.abs(diff)}`;
}

export default function NoticeList() {
  const { state, dispatch } = useApp();
  const today = new Date().toISOString().slice(0, 10);

  const upcoming  = state.notices
    .filter(n => !n.isCompleted && n.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const awaiting  = state.notices
    .filter(n => !n.isCompleted && n.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));
  const completed = state.notices
    .filter(n => n.isCompleted)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <header className="page-header">
        <h1>공지</h1>
        <button className="btn-icon" onClick={() => dispatch({ type: 'NAVIGATE', view: 'addNotice' })}>
          ＋
        </button>
      </header>

      {state.notices.length === 0 ? (
        <div className="empty-state">
          <p>예정된 활동이 없어요.<br />＋ 버튼으로 추가해보세요!</p>
        </div>
      ) : (
        <div style={{ paddingBottom: 32 }}>
          {upcoming.length > 0 && (
            <section>
              <div className="section-heading">예정 활동</div>
              <div className="card-list">
                {upcoming.map(n => <NoticeCard key={n.id} notice={n} dday={getDDay(n.date)} />)}
              </div>
            </section>
          )}
          {awaiting.length > 0 && (
            <section>
              <div className="section-heading">기록 대기</div>
              <div className="card-list">
                {awaiting.map(n => <NoticeCard key={n.id} notice={n} dday={getDDay(n.date)} isPast />)}
              </div>
            </section>
          )}
          {completed.length > 0 && (
            <section>
              <div className="section-heading">완료</div>
              <div className="card-list">
                {completed.map(n => <NoticeCard key={n.id} notice={n} dday={getDDay(n.date)} isCompleted />)}
              </div>
            </section>
          )}
        </div>
      )}
    </>
  );
}

function NoticeCard({ notice, dday, isPast, isCompleted }) {
  const { dispatch } = useApp();
  return (
    <div
      className={`notice-card ${isPast ? 'notice-past' : ''} ${isCompleted ? 'notice-completed' : ''}`}
      onClick={() => dispatch({ type: 'NAVIGATE', view: 'noticeDetail', selectedId: notice.id })}
    >
      <div className="notice-card-top">
        <span className="notice-dday">{dday}</span>
        <span className="notice-date">{notice.date}</span>
      </div>
      <div className="notice-cafe-line">{notice.cafeName} · {notice.location}</div>
      <div className="notice-themes-row">
        {notice.plannedThemes.map(t => (
          <span key={t.id} className="chip">{t.themeName}</span>
        ))}
      </div>
      {isPast && <div className="notice-alert">기록을 완료해주세요</div>}
    </div>
  );
}
