# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build
npm run preview   # preview production build
```

## Architecture

**Stack**: Vite + React (no TypeScript, no external state library)

**State**: `src/context/AppContext.jsx` — single `useReducer` store, persisted to `localStorage` under key `escaperoom_club_v1`. All navigation is via `state.view` — no React Router.

**Data shape**:
- `categories[]` — `{ id, name, color (hex), emoji }` — user-managed, dynamic
- `themes[]` — `{ id, name, categoryId, cafe, date, difficulty (1-5), cleared (bool), notes, memberIds[] }`
- `members[]` — `{ id, name }` — participation derived by filtering themes

**Views** (controlled by `state.view`):

| view | component | bottom nav? |
|---|---|---|
| `themes` | ThemeList | ✓ |
| `members` | MemberList | ✓ |
| `settings` | CategoryList | ✓ |
| `themeDetail` | ThemeDetail | — |
| `addTheme` | ThemeForm | — |
| `memberDetail` | MemberDetail | — |
| `addMember` | MemberForm | — |
| `addCategory` | CategoryForm | — |

**Actions**: `NAVIGATE`, `SET_CATEGORY_FILTER`, `ADD_THEME`, `DELETE_THEME`, `ADD_MEMBER`, `DELETE_MEMBER`, `ADD_CATEGORY`, `DELETE_CATEGORY`

**Styling**: single `src/index.css` with CSS custom properties. Mobile-first, max-width 430px. No CSS modules, no Tailwind.

## Key patterns

- `CategoryBadge` reads category color/emoji dynamically from state — never hardcode category colors
- Participation is stored on `theme.memberIds[]`, not on members — derive a member's history by filtering `state.themes`
- `DELETE_CATEGORY` sets affected `theme.categoryId` to `null` (shown as 미분류)
- Initial sample data in `src/data/initialData.js` only loads when localStorage is empty
