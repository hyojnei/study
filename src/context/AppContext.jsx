import { createContext, useContext, useReducer, useEffect } from 'react';
import { DEFAULT_CATEGORIES, SAMPLE_THEMES, SAMPLE_MEMBERS } from '../data/initialData';

const AppContext = createContext(null);
const STORAGE_KEY = 'escaperoom_club_v1';

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
}

function getInitialState() {
  const saved = loadSaved();
  return {
    view: 'themes',
    selectedId: null,
    activeCategory: 'all',
    categories: saved?.categories ?? DEFAULT_CATEGORIES,
    themes:     saved?.themes     ?? SAMPLE_THEMES,
    members:    saved?.members    ?? SAMPLE_MEMBERS,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'NAVIGATE':
      return { ...state, view: action.view, selectedId: action.selectedId ?? null };

    case 'SET_CATEGORY_FILTER':
      return { ...state, activeCategory: action.categoryId };

    case 'ADD_CATEGORY': {
      const cat = {
        id: `cat-${Date.now()}`,
        name: action.name,
        color: action.color,
        emoji: action.emoji,
      };
      return { ...state, categories: [...state.categories, cat], view: 'settings' };
    }

    case 'DELETE_CATEGORY': {
      const themes = state.themes.map(t =>
        t.categoryId === action.id ? { ...t, categoryId: null } : t
      );
      return {
        ...state,
        categories: state.categories.filter(c => c.id !== action.id),
        themes,
      };
    }

    case 'ADD_THEME': {
      const theme = {
        id: `theme-${Date.now()}`,
        name: action.name,
        categoryId: action.categoryId || null,
        cafe: action.cafe,
        date: action.date,
        difficulty: action.difficulty,
        cleared: action.cleared,
        notes: action.notes,
        memberIds: action.memberIds,
      };
      return { ...state, themes: [theme, ...state.themes], view: 'themes' };
    }

    case 'DELETE_THEME':
      return {
        ...state,
        themes: state.themes.filter(t => t.id !== action.id),
        view: 'themes',
        selectedId: null,
      };

    case 'ADD_MEMBER': {
      const member = { id: `member-${Date.now()}`, name: action.name };
      return { ...state, members: [...state.members, member], view: 'members' };
    }

    case 'DELETE_MEMBER': {
      const themes = state.themes.map(t => ({
        ...t,
        memberIds: t.memberIds.filter(mid => mid !== action.id),
      }));
      return {
        ...state,
        members: state.members.filter(m => m.id !== action.id),
        themes,
        view: 'members',
        selectedId: null,
      };
    }

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null, getInitialState);

  useEffect(() => {
    const { categories, themes, members } = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ categories, themes, members }));
  }, [state.categories, state.themes, state.members]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
