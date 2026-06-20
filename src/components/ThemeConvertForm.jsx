import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function ThemeConvertForm() {
  const { state, dispatch } = useApp();
  const notice = state.notices.find(n => n.id === state.selectedId);
  if (!notice) return null;

  const horrorCatId = state.categories.find(c => c.name === '공포')?.id ?? null;

  const [cafeName,     setCafeName]     = useState(notice.cafeName);
  const [location,     setLocation]     = useState(notice.location);
  const [participants, setParticipants] = useState(notice.participantIds);
  const [themeResults, setThemeResults] = useState(
    notice.plannedThemes.map(t => ({
      id:         t.id,
      themeName:  t.themeName,
      category:   state.categories[0]?.id ?? null,
      difficulty: 3,
      fearLevel:  0,
      isSuccess:  false,
      notes:      '',
    }))
  );

  const toggleMember = id =>
    setParticipants(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]);

  const updateResult = (id, field, value) =>
    setThemeResults(prev => prev.map(t => t.id === id ? { ...t, [field]: value } : t));

  const handleSubmit = () => {
    dispatch({
      type:         'COMPLETE_NOTICE',
      id:           notice.id,
      cafeName,
      location,
      date:         notice.date,
      participants,
      themes: themeResults.map(t => ({
        themeName:  t.themeName,
        category:   t.category,
        difficulty: t.difficulty,
        fearLevel:  t.category === horrorCatId ? t.fearLevel : null,
        isSuccess:  t.isSuccess,
        notes:      t.notes,
      })),
    });
  };

  return (
    <>
      <header className="page-header">
        <button
          className="btn-icon"
          onClick={() => dispatch({ type: 'NAVIGATE', view: 'noticeDetail', selectedId: notice.id })}
        >
          ←
        </button>
        <h1>기록 완료하기</h1>
      </header>

      <div className="form-page">
        <div className="section-heading" style={{ padding: '0 0 4px', fontSize: 11 }}>공통 정보 수정</div>

        <div className="form-group">
          <label className="form-label">카페명</label>
          <input className="form-input" value={cafeName} onChange={e => setCafeName(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">지역</label>
          <select className="form-select" value={location} onChange={e => setLocation(e.target.value)}>
            {state.locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">참여 멤버</label>
          <div className="member-checklist">
            {state.members.map(m => (
              <label key={m.id} className={`member-check-item ${participants.includes(m.id) ? 'checked' : ''}`}>
                <input type="checkbox" checked={participants.includes(m.id)} onChange={() => toggleMember(m.id)} />
                <span className="member-check-name">{m.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="section-heading" style={{ padding: '8px 0 4px', fontSize: 11 }}>테마별 결과 입력</div>

        {themeResults.map((t, idx) => {
          const isHorror = t.category === horrorCatId;
          return (
            <div key={t.id} className="convert-theme-card">
              <div className="convert-theme-title">{idx + 1}. {t.themeName}</div>

              <div className="form-group">
                <label className="form-label">장르</label>
                <select className="form-select" value={t.category ?? ''} onChange={e => updateResult(t.id, 'category', e.target.value)}>
                  {state.categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">난이도</label>
                <div className="star-row">
                  {[1,2,3,4,5].map(n => (
                    <button key={n} type="button" className="star-btn" onClick={() => updateResult(t.id, 'difficulty', n)}>
                      {n <= t.difficulty ? '★' : '☆'}
                    </button>
                  ))}
                </div>
              </div>

              {isHorror && (
                <div className="form-group">
                  <label className="form-label">공포도</label>
                  <div className="star-row">
                    {[1,2,3,4,5].map(n => (
                      <button key={n} type="button" className="star-btn" onClick={() => updateResult(t.id, 'fearLevel', n)}>
                        {n <= t.fearLevel ? '★' : '☆'}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="form-group">
                <label className="form-label">결과</label>
                <div className="toggle-row">
                  <span className="toggle-label">{t.isSuccess ? '탈출 성공!' : '탈출 실패'}</span>
                  <button type="button" className={`toggle ${t.isSuccess ? 'on' : ''}`} onClick={() => updateResult(t.id, 'isSuccess', !t.isSuccess)} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">메모</label>
                <textarea className="form-textarea" placeholder="느낀 점, 힌트 횟수 등..." value={t.notes} onChange={e => updateResult(t.id, 'notes', e.target.value)} />
              </div>
            </div>
          );
        })}

        <button className="btn-primary" onClick={handleSubmit}>
          테마 기록 저장
        </button>
      </div>
    </>
  );
}
