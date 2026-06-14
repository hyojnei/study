import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function CategoryList() {
  const { state, dispatch } = useApp();
  const [confirmId, setConfirmId] = useState(null);

  const toDelete = state.categories.find(c => c.id === confirmId);
  const toDeleteCount = toDelete
    ? state.themes.filter(t => t.categoryId === confirmId).length
    : 0;

  return (
    <>
      <header className="page-header">
        <h1>카테고리</h1>
        <button
          className="btn-icon"
          title="카테고리 추가"
          onClick={() => dispatch({ type: 'NAVIGATE', view: 'addCategory' })}
        >
          ＋
        </button>
      </header>

      <div className="section-heading">카테고리 목록</div>
      <div className="card-list">
        {state.categories.map(cat => {
          const count = state.themes.filter(t => t.categoryId === cat.id).length;
          return (
            <div key={cat.id} className="category-item">
              <span className="category-item-emoji">{cat.emoji}</span>
              <div
                className="category-item-dot"
                style={{ background: cat.color }}
              />
              <span className="category-item-name">{cat.name}</span>
              <span className="category-item-count">테마 {count}개</span>
              <button
                className="btn-delete-icon"
                title="삭제"
                onClick={() => setConfirmId(cat.id)}
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>

      <div className="add-btn-row">
        <button
          className="btn-primary"
          onClick={() => dispatch({ type: 'NAVIGATE', view: 'addCategory' })}
        >
          ＋ 카테고리 추가
        </button>
      </div>

      {confirmId && toDelete && (
        <div className="confirm-overlay" onClick={() => setConfirmId(null)}>
          <div className="confirm-sheet" onClick={e => e.stopPropagation()}>
            <p className="confirm-title">카테고리를 삭제할까요?</p>
            <p className="confirm-body">
              "{toDelete.name}" 카테고리가 삭제됩니다.
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
    </>
  );
}
