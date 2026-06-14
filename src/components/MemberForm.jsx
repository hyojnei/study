import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function MemberForm() {
  const { dispatch } = useApp();
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) return;
    dispatch({ type: 'ADD_MEMBER', name: name.trim() });
  };

  return (
    <>
      <header className="page-header">
        <button className="btn-icon" onClick={() => dispatch({ type: 'NAVIGATE', view: 'members' })}>
          ←
        </button>
        <h1>멤버 추가</h1>
      </header>

      <div className="form-page">
        <div className="form-group">
          <label className="form-label">이름 *</label>
          <input
            className="form-input"
            placeholder="멤버 이름"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            autoFocus
          />
        </div>

        <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={!name.trim()}
        >
          멤버 추가
        </button>
      </div>
    </>
  );
}
