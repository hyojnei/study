import { useApp } from '../context/AppContext';

const TABS = [
  { view: 'themes',  icon: '🎭', label: '테마' },
  { view: 'members', icon: '👥', label: '멤버' },
  { view: 'settings',icon: '🗂️', label: '카테고리' },
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
          <span className="tab-icon">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
