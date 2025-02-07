// hooks/useAccounts.ts
import { Account } from "@/types/account";
import { useState, useEffect } from "react";

type AccountsParams = {
  page_id: number;
  page_size: number;
};

export const useAccounts = (initialParams: AccountsParams) => {
  const [data, setData] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<AccountsParams>(initialParams);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setLoading(true);

        // Using Next.js API route instead of direct backend call
        const response = await fetch(
          `/api/accounts?page_id=${params.page_id}&page_size=${params.page_size}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(Array.isArray(result) ? result : []);
        setError(null);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [params]);

  const setPage = (newPage: number) => {
    setParams((prev) => ({ ...prev, page_id: newPage }));
  };

  return {
    data,
    loading,
    error,
    currentPage: params.page_id,
    pageSize: params.page_size,
    setPage,
  };
};
