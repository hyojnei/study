import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function MemberForm() {
  const { dispatch } = useApp();
  const [name,     setName]     = useState('');
  const [team,     setTeam]     = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [role,     setRole]     = useState('동호회원');
  const [status,   setStatus]   = useState('활동중');
  const [isScared, setIsScared] = useState('?');
  const [note,     setNote]     = useState('');

  const handleSubmit = () => {
    if (!name.trim()) return;
    dispatch({ type: 'ADD_MEMBER', name: name.trim(), team, joinDate, role, status, isScared, note });
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

        <div className="form-group">
          <label className="form-label">팀</label>
          <input
            className="form-input"
            placeholder="예: 디스커버리프로덕트팀"
            value={team}
            onChange={e => setTeam(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">가입시기</label>
          <input
            className="form-input"
            placeholder="예: 2025.03"
            value={joinDate}
            onChange={e => setJoinDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">역할</label>
          <input
            className="form-input"
            placeholder="예: 동호회원"
            value={role}
            onChange={e => setRole(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">상태</label>
          <select className="form-select" value={status} onChange={e => setStatus(e.target.value)}>
            <option value="활동중">활동중</option>
            <option value="퇴사">퇴사</option>
            <option value="탈퇴">탈퇴</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">쫄탱</label>
          <select className="form-select" value={isScared} onChange={e => setIsScared(e.target.value)}>
            <option value="쫄">쫄</option>
            <option value="탱">탱</option>
            <option value="쫄탱">쫄탱</option>
            <option value="?">모름 (?)</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">비고</label>
          <input
            className="form-input"
            placeholder="닉네임, 특이사항 등"
            value={note}
            onChange={e => setNote(e.target.value)}
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
