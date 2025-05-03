export const getTabItems = (publicRepos, privateRepos) => {
  const tabItems = [
    { key: "public", label: "Публичные", repos: publicRepos },
    { key: "private", label: "Приватные", repos: privateRepos },
  ];
  return tabItems;
};
