import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function LocationForm() {
  const { state, dispatch } = useApp();
  const [name, setName] = useState('');

  const canSubmit = name.trim().length > 0 && !state.locations.includes(name.trim());

  return (
    <>
      <header className="page-header">
        <button className="btn-icon" onClick={() => dispatch({ type: 'NAVIGATE', view: 'settings' })}>
          ←
        </button>
        <h1>위치 추가</h1>
      </header>

      <div className="form-page">
        <div className="form-group">
          <label className="form-label">지역명 *</label>
          <input
            className="form-input"
            placeholder="예: 건대, 신림, 합정"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <button
          className="btn-primary"
          disabled={!canSubmit}
          onClick={() => {
            if (!canSubmit) return;
            dispatch({ type: 'ADD_LOCATION', name: name.trim() });
            dispatch({ type: 'NAVIGATE', view: 'settings' });
          }}
        >
          저장
        </button>
      </div>
    </>
  );
}
