import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function ThemeForm() {
  const { state, dispatch } = useApp();
  const today = new Date().toISOString().slice(0, 10);

  const [themeName,       setThemeName]       = useState('');
  const [cafeName,        setCafeName]        = useState('');
  const [location,        setLocation]        = useState(state.locations[0] ?? '');
  const [date,            setDate]            = useState(today);
  const [category,        setCategory]        = useState(state.categories[0]?.id ?? '');
  const [difficulty,      setDifficulty]      = useState(3);
  const [fearLevel,       setFearLevel]       = useState(0);
  const [isSuccess,       setIsSuccess]       = useState(false);
  const [notes,           setNotes]           = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);

  const isHorror = state.categories.find(c => c.id === category)?.name === '공포';
  const canSubmit = themeName.trim() && cafeName.trim() && date;

  const toggleMember = id =>
    setSelectedMembers(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );

  const handleSubmit = () => {
    if (!canSubmit) return;
    dispatch({
      type:         'ADD_THEME',
      themeName:    themeName.trim(),
      cafeName:     cafeName.trim(),
      location,
      category,
      date,
      difficulty,
      fearLevel:    isHorror ? fearLevel : null,
      isSuccess,
      notes:        notes.trim(),
      participants: selectedMembers,
    });
  };

  return (
    <>
      <header className="page-header">
        <button className="btn-icon" onClick={() => dispatch({ type: 'NAVIGATE', view: 'themes' })}>
          ←
        </button>
        <h1>테마 추가</h1>
      </header>

      <div className="form-page">
        <div className="form-group">
          <label className="form-label">테마명 *</label>
          <input className="form-input" placeholder="테마 이름" value={themeName} onChange={e => setThemeName(e.target.value)} />
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
          <label className="form-label">날짜 *</label>
          <input className="form-input" type="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">장르</label>
          <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
            {state.categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">난이도</label>
          <div className="star-row">
            {[1,2,3,4,5].map(n => (
              <button key={n} type="button" className="star-btn" onClick={() => setDifficulty(n)}>
                {n <= difficulty ? '★' : '☆'}
              </button>
            ))}
          </div>
        </div>

        {isHorror && (
          <div className="form-group">
            <label className="form-label">공포도</label>
            <div className="star-row">
              {[1,2,3,4,5].map(n => (
                <button key={n} type="button" className="star-btn" onClick={() => setFearLevel(n)}>
                  {n <= fearLevel ? '★' : '☆'}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="form-group">
          <label className="form-label">결과</label>
          <div className="toggle-row">
            <span className="toggle-label">{isSuccess ? '탈출 성공!' : '탈출 실패'}</span>
            <button type="button" className={`toggle ${isSuccess ? 'on' : ''}`} onClick={() => setIsSuccess(v => !v)} />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">참여 멤버</label>
          {state.members.length === 0 ? (
            <p style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>멤버 탭에서 먼저 멤버를 추가해주세요.</p>
          ) : (
            <div className="member-checklist">
              {state.members.map(m => (
                <label key={m.id} className={`member-check-item ${selectedMembers.includes(m.id) ? 'checked' : ''}`}>
                  <input type="checkbox" checked={selectedMembers.includes(m.id)} onChange={() => toggleMember(m.id)} />
                  <span className="member-check-name">{m.name}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">메모</label>
          <textarea className="form-textarea" placeholder="느낀 점, 힌트 횟수 등..." value={notes} onChange={e => setNotes(e.target.value)} />
        </div>

        <button className="btn-primary" onClick={handleSubmit} disabled={!canSubmit}>
          테마 저장
        </button>
      </div>
    </>
  );
}
