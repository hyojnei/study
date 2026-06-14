import { useState } from 'react';
import { useApp } from '../context/AppContext';

const PRESET_COLORS = [
  '#dc2626', '#ea580c', '#d97706', '#65a30d',
  '#16a34a', '#0891b2', '#0284c7', '#4f46e5',
  '#7c3aed', '#db2777', '#6b7280', '#111827',
];

const PRESET_EMOJIS = [
  '👻','🧟','🩸','💀','🦇','🌙','⚰️','🔮',
  '✨','🌟','💫','🏰','🐉','⚔️','🗡️','🛡️',
  '🔍','🕵️','🧩','📜','🗝️','🔑','💎','🧪',
  '🗺️','🏔️','🌋','⛵','🏹','🌿','🔥','❄️',
  '🎭','🎪','🎯','🎮','🃏','🎲','🧲','⚡',
];

export default function CategoryForm() {
  const { dispatch } = useApp();

  const [name, setName]   = useState('');
  const [color, setColor] = useState(PRESET_COLORS[0]);
  const [emoji, setEmoji] = useState(PRESET_EMOJIS[0]);

  const handleSubmit = () => {
    if (!name.trim()) return;
    dispatch({ type: 'ADD_CATEGORY', name: name.trim(), color, emoji });
  };

  return (
    <>
      <header className="page-header">
        <button className="btn-icon" onClick={() => dispatch({ type: 'NAVIGATE', view: 'settings' })}>
          ←
        </button>
        <h1>카테고리 추가</h1>
      </header>

      <div className="form-page">
        {/* Preview */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
          <span
            className="category-badge"
            style={{
              background: `${color}22`,
              color,
              fontSize: 16,
              padding: '8px 20px',
              borderRadius: 24,
            }}
          >
            {emoji} {name || '미리보기'}
          </span>
        </div>

        <div className="form-group">
          <label className="form-label">카테고리 이름 *</label>
          <input
            className="form-input"
            placeholder="예: SF, 로맨스, 액션..."
            value={name}
            onChange={e => setName(e.target.value)}
            autoFocus
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

        <div className="form-group">
          <label className="form-label">아이콘</label>
          <div className="emoji-grid">
            {PRESET_EMOJIS.map(e => (
              <button
                key={e}
                type="button"
                className={`emoji-btn ${emoji === e ? 'selected' : ''}`}
                onClick={() => setEmoji(e)}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={!name.trim()}
        >
          카테고리 저장
        </button>
      </div>
    </>
  );
}
