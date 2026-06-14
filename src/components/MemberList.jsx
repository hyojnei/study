import { useApp } from '../context/AppContext';

export default function MemberList() {
  const { state, dispatch } = useApp();

  const sorted = [...state.members].sort((a, b) => a.name.localeCompare(b.name, 'ko'));

  return (
    <>
      <header className="page-header">
        <h1>멤버</h1>
        <button
          className="btn-icon"
          title="멤버 추가"
          onClick={() => dispatch({ type: 'NAVIGATE', view: 'addMember' })}
        >
          ＋
        </button>
      </header>

      {sorted.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">👥</div>
          <p>아직 멤버가 없어요.<br />오른쪽 상단 ＋ 버튼으로 추가해보세요!</p>
        </div>
      ) : (
        <div className="card-list">
          {sorted.map(member => {
            const themes = state.themes.filter(t => t.memberIds.includes(member.id));
            const cleared = themes.filter(t => t.cleared).length;
            return (
              <div
                key={member.id}
                className="member-card"
                onClick={() => dispatch({ type: 'NAVIGATE', view: 'memberDetail', selectedId: member.id })}
              >
                <div className="member-avatar">{member.name[0]}</div>
                <div className="member-info">
                  <div className="member-name">{member.name}</div>
                  <div className="member-meta">
                    {themes.length}개 참여 · 성공 {cleared}개
                  </div>
                </div>
                <span className="member-arrow">›</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
