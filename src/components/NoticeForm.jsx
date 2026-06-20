import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function NoticeForm() {
  const { state, dispatch } = useApp();

  const [date,           setDate]           = useState('');
  const [cafeName,       setCafeName]       = useState('');
  const [location,       setLocation]       = useState(state.locations[0] ?? '');
  const [participantIds, setParticipantIds] = useState([]);
  const [plannedThemes,  setPlannedThemes]  = useState([{ id: `pt-${Date.now()}`, themeName: '' }]);

  const toggleMember = id =>
    setParticipantIds(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]);

  const addThemeRow = () =>
    setPlannedThemes(prev => [...prev, { id: `pt-${Date.now()}`, themeName: '' }]);

  const updateThemeName = (id, value) =>
    setPlannedThemes(prev => prev.map(t => t.id === id ? { ...t, themeName: value } : t));

  const removeThemeRow = id =>
    setPlannedThemes(prev => prev.filter(t => t.id !== id));

  const canSubmit = date && cafeName.trim() && plannedThemes.every(t => t.themeName.trim());

  const handleSubmit = () => {
    if (!canSubmit) return;
    dispatch({
      type:           'ADD_NOTICE',
      date,
      cafeName:       cafeName.trim(),
      location,
      participantIds,
      plannedThemes:  plannedThemes.map(t => ({ id: t.id, themeName: t.themeName.trim() })),
    });
  };

  return (
    <>
      <header className="page-header">
        <button className="btn-icon" onClick={() => dispatch({ type: 'NAVIGATE', view: 'notices' })}>
          ←
        </button>
        <h1>활동 공지 추가</h1>
      </header>

      <div className="form-page">
        <div className="form-group">
          <label className="form-label">활동 날짜 *</label>
          <input className="form-input" type="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">카페명 *</label>
          <input className="form-input" placeholder="방탈출 카페명" value={cafeName} onChange={e => setCafeName(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">지역</label>
          <select className="form-select" value={location} onChange={e => setLocation(e.target.value)}>
            {state.locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">예정 테마 *</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {plannedThemes.map((t, idx) => (
              <div key={t.id} className="theme-input-row">
                <input
                  className="form-input"
                  placeholder={`테마 ${idx + 1} 이름`}
                  value={t.themeName}
                  onChange={e => updateThemeName(t.id, e.target.value)}
                />
                {plannedThemes.length > 1 && (
                  <button type="button" className="btn-remove-theme" onClick={() => removeThemeRow(t.id)}>
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button type="button" className="btn-add-theme" onClick={addThemeRow}>
              + 테마 추가
            </button>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">참여 멤버</label>
          {state.members.length === 0 ? (
            <p style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>멤버 탭에서 먼저 멤버를 추가해주세요.</p>
          ) : (
            <div className="member-checklist">
              {state.members.map(m => (
                <label key={m.id} className={`member-check-item ${participantIds.includes(m.id) ? 'checked' : ''}`}>
                  <input type="checkbox" checked={participantIds.includes(m.id)} onChange={() => toggleMember(m.id)} />
                  <span className="member-check-name">{m.name}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <button className="btn-primary" onClick={handleSubmit} disabled={!canSubmit}>
          공지 저장
        </button>
      </div>
    </>
  );
}
