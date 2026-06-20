import { useApp } from '../context/AppContext';

const TABS = [
  { view: 'themes',   label: '테마기록' },
  { view: 'notices',  label: '공지' },
  { view: 'timeline', label: '타임라인' },
  { view: 'members',  label: '멤버' },
  { view: 'settings', label: '설정' },
];

export default function BottomNav() {
  const { state, dispatch } = useApp();
  return (
    <nav className="bottom-nav">
      {TABS.map(tab => (
        <button
          key={tab.view}
          className={`nav-tab ${state.view === tab.view ? 'active' : ''}`}
          onClick={() => dispatch({ type: 'NAVIGATE', view: tab.view })}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
