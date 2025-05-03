import { Input, Spin, Typography } from "antd";
import UserList from "../components/UserList";
import ErrorInfo from "../components/ErrorInfo";
import { useUsers } from "../hooks/useUsers";

const Users = () => {
  const { Title, Text } = Typography;

  const {
    query,
    setQuery,
    users,
    totalCount,
    currentPage,
    loading,
    error,
    handleSearch,
    handlePageChange,
  } = useUsers();

  return (
    <div>
      <Title level={2}>Поиск пользователей</Title>

      <Input.Search
        placeholder="Найти пользователя GitHub"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
        enterButton="Искать"
        style={{ marginBottom: 20 }}
      />

      {loading && <Spin />}

      {error && <ErrorInfo message={error} />}

      {!loading && totalCount > 0 && (
        <Text>Найдено пользователей: {totalCount}</Text>
      )}

      <UserList
        users={users}
        total={totalCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Users;
