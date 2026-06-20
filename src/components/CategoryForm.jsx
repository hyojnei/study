import { useState } from 'react';
import { useApp } from '../context/AppContext';

const PRESET_COLORS = [
  '#dc2626', '#d97706', '#16a34a', '#0284c7',
  '#7c3aed', '#db2777', '#0891b2', '#65a30d',
];

export default function CategoryForm() {
  const { dispatch } = useApp();
  const [name,  setName]  = useState('');
  const [color, setColor] = useState(PRESET_COLORS[0]);

  const canSubmit = name.trim().length > 0;

  return (
    <>
      <header className="page-header">
        <button className="btn-icon" onClick={() => dispatch({ type: 'NAVIGATE', view: 'settings' })}>
          ←
        </button>
        <h1>장르 추가</h1>
      </header>

      <div className="form-page">
        <div className="form-group">
          <label className="form-label">장르명 *</label>
          <input
            className="form-input"
            placeholder="예: 로맨스, 감성"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">색상</label>
          <div className="color-palette">
            {PRESET_COLORS.map(c => (
              <button
                key={c}
                type="button"
                className={`color-swatch ${color === c ? 'selected' : ''}`}
                style={{ background: c }}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
        </div>

        <button
          className="btn-primary"
          disabled={!canSubmit}
          onClick={() => {
            if (!canSubmit) return;
            dispatch({ type: 'ADD_CATEGORY', name: name.trim(), color });
          }}
        >
          저장
        </button>
      </div>
    </>
  );
}
