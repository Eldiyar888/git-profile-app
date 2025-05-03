import { useState } from "react";
import { getUsers } from "../api/usersApi";

export const useUsers = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async (page = 1) => {
    setLoading(true);
    try {
      const res = await getUsers(query, page);
      setUsers(res.data.items);
      setTotalCount(res.data.total_count);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!query) {
      return;
    }
    setCurrentPage(1);
    fetchUsers(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchUsers(page);
  };

  return {
    query,
    setQuery,
    users,
    totalCount,
    currentPage,
    loading,
    error,
    handleSearch,
    handlePageChange,
  };
};
