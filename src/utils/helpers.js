export const searchItems = (items, query) => {
  return items.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
};

export const sortItems = (items) => {
  return [...items].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
};