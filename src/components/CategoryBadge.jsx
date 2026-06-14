import { useApp } from '../context/AppContext';

export default function CategoryBadge({ categoryId }) {
  const { state } = useApp();
  const cat = state.categories.find(c => c.id === categoryId);

  if (!cat) {
    return (
      <span className="category-badge" style={{ background: '#f3f4f6', color: '#6b7280' }}>
        미분류
      </span>
    );
  }

  return (
    <span
      className="category-badge"
      style={{ background: `${cat.color}22`, color: cat.color }}
    >
      {cat.emoji} {cat.name}
    </span>
  );
}
