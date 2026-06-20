import { useApp } from '../context/AppContext';

function getMemberKPI(memberId, themes) {
  const participated = themes.filter(t => t.participants.includes(memberId));
  const total   = participated.length;
  const success = participated.filter(t => t.isSuccess).length;
  const rate    = total > 0 ? Math.round((success / total) * 100) : null;
  return { total, success, rate };
}

export default function MemberList() {
  const { state, dispatch } = useApp();

  return (
    <>
      <header className="page-header">
        <h1>멤버</h1>
        <button className="btn-icon" onClick={() => dispatch({ type: 'NAVIGATE', view: 'addMember' })}>
          ＋
        </button>
      </header>

      {state.members.length === 0 ? (
        <div className="empty-state">
          <p>멤버를 추가해보세요!<br />오른쪽 상단 ＋ 버튼을 눌러주세요.</p>
        </div>
      ) : (
        <div className="card-list">
          {state.members.map(member => {
            const kpi = getMemberKPI(member.id, state.themes);
            return (
              <div
                key={member.id}
                className="member-card"
                onClick={() => dispatch({ type: 'NAVIGATE', view: 'memberDetail', selectedId: member.id })}
              >
                <div className="member-avatar">{member.name[0]}</div>
                <div className="member-info">
                  <div className="member-name">{member.name}</div>
                  <div className="member-kpi-row">
                    <span className="kpi-chip">참여 {kpi.total}회</span>
                    <span className="kpi-chip">성공 {kpi.success}회</span>
                    <span className="kpi-chip">성공률 {kpi.rate !== null ? kpi.rate + '%' : '-'}</span>
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
