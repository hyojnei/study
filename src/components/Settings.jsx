import { useState } from 'react';
import { useApp } from '../context/AppContext';
import CategoryBadge from './CategoryBadge';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('location');

  return (
    <>
      <header className="page-header">
        <h1>설정</h1>
      </header>

      <div className="settings-tab-bar">
        <button
          className={`settings-tab ${activeTab === 'location' ? 'active' : ''}`}
          onClick={() => setActiveTab('location')}
        >
          위치 관리
        </button>
        <button
          className={`settings-tab ${activeTab === 'category' ? 'active' : ''}`}
          onClick={() => setActiveTab('category')}
        >
          장르 관리
        </button>
      </div>

      {activeTab === 'location' ? <LocationSection /> : <CategorySection />}
    </>
  );
}

function LocationSection() {
  const { state, dispatch } = useApp();
  const [confirmName, setConfirmName] = useState(null);

  return (
    <div className="option-list-wrap">
      <div className="option-list-header">
        <button
          className="btn-primary btn-small"
          onClick={() => dispatch({ type: 'NAVIGATE', view: 'addLocation' })}
        >
          + 위치 추가
        </button>
      </div>

      {state.locations.length === 0 ? (
        <div className="empty-state"><p>등록된 위치가 없어요.</p></div>
      ) : (
        <div className="card-list">
          {state.locations.map(loc => (
            <div key={loc} className="option-item">
              <span className="option-item-name">{loc}</span>
              <button className="btn-delete-icon" onClick={() => setConfirmName(loc)}>✕</button>
            </div>
          ))}
        </div>
      )}

      {confirmName && (
        <div className="confirm-overlay" onClick={() => setConfirmName(null)}>
          <div className="confirm-sheet" onClick={e => e.stopPropagation()}>
            <p className="confirm-title">위치를 삭제할까요?</p>
            <p className="confirm-body">
              "{confirmName}" 위치가 삭제됩니다. 기존 테마 기록의 지역 값은 유지됩니다.
            </p>
            <div className="confirm-actions">
              <button className="btn-cancel" onClick={() => setConfirmName(null)}>취소</button>
              <button
                className="btn-confirm-danger"
                onClick={() => {
                  dispatch({ type: 'DELETE_LOCATION', name: confirmName });
                  setConfirmName(null);
                }}
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CategorySection() {
  const { state, dispatch } = useApp();
  const [confirmId, setConfirmId] = useState(null);
  const toDelete      = state.categories.find(c => c.id === confirmId);
  const toDeleteCount = toDelete
    ? state.themes.filter(t => t.category === confirmId).length
    : 0;

  return (
    <div className="option-list-wrap">
      <div className="option-list-header">
        <button
          className="btn-primary btn-small"
          onClick={() => dispatch({ type: 'NAVIGATE', view: 'addCategory' })}
        >
          + 장르 추가
        </button>
      </div>

      {state.categories.length === 0 ? (
        <div className="empty-state"><p>등록된 장르가 없어요.</p></div>
      ) : (
        <div className="card-list">
          {state.categories.map(cat => {
            const count = state.themes.filter(t => t.category === cat.id).length;
            return (
              <div key={cat.id} className="option-item">
                <CategoryBadge categoryId={cat.id} />
                <span className="option-item-count">테마 {count}개</span>
                <button className="btn-delete-icon" onClick={() => setConfirmId(cat.id)}>✕</button>
              </div>
            );
          })}
        </div>
      )}

      {confirmId && toDelete && (
        <div className="confirm-overlay" onClick={() => setConfirmId(null)}>
          <div className="confirm-sheet" onClick={e => e.stopPropagation()}>
            <p className="confirm-title">장르를 삭제할까요?</p>
            <p className="confirm-body">
              "{toDelete.name}" 장르가 삭제됩니다.
              {toDeleteCount > 0 && (
                <> 연결된 테마 {toDeleteCount}개는 <strong>미분류</strong>로 변경됩니다.</>
              )}
            </p>
            <div className="confirm-actions">
              <button className="btn-cancel" onClick={() => setConfirmId(null)}>취소</button>
              <button
                className="btn-confirm-danger"
                onClick={() => {
                  dispatch({ type: 'DELETE_CATEGORY', id: confirmId });
                  setConfirmId(null);
                }}
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
