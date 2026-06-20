import { AppProvider, useApp } from './context/AppContext';
import BottomNav from './components/BottomNav';
import ThemeList from './components/ThemeList';
import ThemeDetail from './components/ThemeDetail';
import ThemeForm from './components/ThemeForm';
import MemberList from './components/MemberList';
import MemberDetail from './components/MemberDetail';
import MemberForm from './components/MemberForm';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';

const MAIN_VIEWS = ['themes', 'notices', 'timeline', 'members', 'settings'];

function AppContent() {
  const { state } = useApp();
  const isMain = MAIN_VIEWS.includes(state.view);

  const renderView = () => {
    switch (state.view) {
      case 'themes':       return <ThemeList />;
      case 'themeDetail':  return <ThemeDetail />;
      case 'addTheme':     return <ThemeForm />;
      case 'members':      return <MemberList />;
      case 'memberDetail': return <MemberDetail />;
      case 'addMember':    return <MemberForm />;
      case 'settings':     return <CategoryList />;
      case 'addCategory':  return <CategoryForm />;
      default:             return <ThemeList />;
    }
  };

  return (
    <div className="app-shell">
      <div className="main-content">
        {renderView()}
      </div>
      {isMain && <BottomNav />}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
