import { createContext, useContext, useReducer, useEffect } from 'react';
import { DEFAULT_CATEGORIES, DEFAULT_LOCATIONS, SAMPLE_THEMES, SAMPLE_MEMBERS } from '../data/initialData';

const AppContext = createContext(null);
const STORAGE_KEY   = 'escaperoom_club_v4';
const LEGACY_KEY_V3 = 'escaperoom_club_v3';
const LEGACY_KEY_V2 = 'escaperoom_club_v2';
const LEGACY_KEY_V1 = 'escaperoom_club_v1';

function migrateV1(v1) {
  return {
    categories: (v1.categories ?? []).map(({ id, name, color }) => ({ id, name, color })),
    themes: (v1.themes ?? []).map(t => ({
      id:           t.id,
      date:         t.date,
      notes:        t.notes ?? '',
      difficulty:   t.difficulty,
      themeName:    t.name,
      cafeName:     t.cafe,
      isSuccess:    t.cleared,
      participants: t.memberIds ?? [],
      category:     t.categoryId ?? null,
      location:     '',
      fearLevel:    null,
    })),
    members:   v1.members ?? [],
    locations: DEFAULT_LOCATIONS,
    notices:   [],
  };
}

function migrateV2(v2) {
  return {
    ...v2,
    members: (v2.members ?? []).map(m => ({
      ...m,
      team:     m.team     ?? '',
      joinDate: m.joinDate ?? '',
      role:     m.role     ?? '',
      status:   m.status   ?? '활동중',
      isScared: m.isScared ?? '?',
      note:     m.note     ?? '',
    })),
  };
}

function loadSaved() {
  try {
    const v4raw = localStorage.getItem(STORAGE_KEY);
    if (v4raw) return JSON.parse(v4raw);

    const v3raw = localStorage.getItem(LEGACY_KEY_V3);
    if (v3raw) {
      const migrated = migrateV2(JSON.parse(v3raw));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      localStorage.removeItem(LEGACY_KEY_V3);
      return migrated;
    }

    const v2raw = localStorage.getItem(LEGACY_KEY_V2);
    if (v2raw) {
      const migrated = migrateV2(JSON.parse(v2raw));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      localStorage.removeItem(LEGACY_KEY_V2);
      return migrated;
    }

    const v1raw = localStorage.getItem(LEGACY_KEY_V1);
    if (v1raw) {
      const migrated = migrateV2(migrateV1(JSON.parse(v1raw)));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      localStorage.removeItem(LEGACY_KEY_V1);
      return migrated;
    }
  } catch {}
  return null;
}

function getInitialState() {
  const saved = loadSaved();
  return {
    view:       'themes',
    selectedId: null,
    categories: saved?.categories ?? DEFAULT_CATEGORIES,
    themes:     saved?.themes     ?? SAMPLE_THEMES,
    members:    saved?.members    ?? SAMPLE_MEMBERS,
    locations:  saved?.locations  ?? DEFAULT_LOCATIONS,
    notices:    saved?.notices    ?? [],
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'NAVIGATE':
      return { ...state, view: action.view, selectedId: action.selectedId ?? null };

    case 'ADD_CATEGORY': {
      const cat = { id: `cat-${Date.now()}`, name: action.name, color: action.color };
      return { ...state, categories: [...state.categories, cat], view: 'settings' };
    }

    case 'DELETE_CATEGORY': {
      const themes = state.themes.map(t =>
        t.category === action.id ? { ...t, category: null } : t
      );
      return { ...state, categories: state.categories.filter(c => c.id !== action.id), themes };
    }

    case 'ADD_LOCATION':
      return { ...state, locations: [...state.locations, action.name] };

    case 'DELETE_LOCATION':
      return { ...state, locations: state.locations.filter(l => l !== action.name) };

    case 'ADD_THEME': {
      const theme = {
        id:           `theme-${Date.now()}`,
        themeName:    action.themeName,
        cafeName:     action.cafeName,
        location:     action.location ?? '',
        category:     action.category ?? null,
        date:         action.date,
        difficulty:   action.difficulty,
        fearLevel:    action.fearLevel ?? null,
        isSuccess:    action.isSuccess,
        notes:        action.notes ?? '',
        participants: action.participants ?? [],
      };
      return { ...state, themes: [theme, ...state.themes], view: 'themes' };
    }

    case 'DELETE_THEME':
      return { ...state, themes: state.themes.filter(t => t.id !== action.id), view: 'themes', selectedId: null };

    case 'ADD_MEMBER': {
      const member = {
        id:       `member-${Date.now()}`,
        name:     action.name,
        team:     action.team     ?? '',
        joinDate: action.joinDate ?? '',
        role:     action.role     ?? '',
        status:   action.status   ?? '활동중',
        isScared: action.isScared ?? '?',
        note:     action.note     ?? '',
      };
      return { ...state, members: [...state.members, member], view: 'members' };
    }

    case 'DELETE_MEMBER': {
      const themes = state.themes.map(t => ({
        ...t,
        participants: t.participants.filter(mid => mid !== action.id),
      }));
      return { ...state, members: state.members.filter(m => m.id !== action.id), themes, view: 'members', selectedId: null };
    }

    case 'ADD_NOTICE': {
      const notice = {
        id:             `notice-${Date.now()}`,
        date:           action.date,
        cafeName:       action.cafeName,
        location:       action.location,
        plannedThemes:  action.plannedThemes,
        participantIds: action.participantIds,
        isCompleted:    false,
      };
      return { ...state, notices: [notice, ...state.notices], view: 'notices' };
    }

    case 'DELETE_NOTICE':
      return { ...state, notices: state.notices.filter(n => n.id !== action.id), view: 'notices', selectedId: null };

    case 'COMPLETE_NOTICE': {
      const newThemes = action.themes.map((t, i) => ({
        id:           `theme-${Date.now()}-${i}`,
        themeName:    t.themeName,
        cafeName:     action.cafeName,
        location:     action.location,
        category:     t.category ?? null,
        date:         action.date,
        difficulty:   t.difficulty,
        fearLevel:    t.fearLevel ?? null,
        isSuccess:    t.isSuccess,
        notes:        t.notes ?? '',
        participants: action.participants,
      }));
      const notices = state.notices.map(n =>
        n.id === action.id ? { ...n, isCompleted: true } : n
      );
      return { ...state, themes: [...newThemes, ...state.themes], notices, view: 'notices', selectedId: null };
    }

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null, getInitialState);

  useEffect(() => {
    const { categories, themes, members, locations, notices } = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ categories, themes, members, locations, notices }));
  }, [state.categories, state.themes, state.members, state.locations, state.notices]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
