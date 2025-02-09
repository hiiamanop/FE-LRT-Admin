// hooks/useAccounts.ts
import { useState, useEffect } from "react";
import { Account } from "@/types/account";

interface AccountsParams {
  page_id: number;
  page_size: number;
}

export function useAccounts({ page_id, page_size }: AccountsParams) {
  const [data, setData] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setPage] = useState(page_id);

  useEffect(() => {
    const fetchAccounts = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("auth_token");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/accounts?page_id=${currentPage}&page_size=${page_size}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch accounts");
        }

        const accountsData = await response.json();
        setData(accountsData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch accounts"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [currentPage, page_size]);

  return { data, loading, error, currentPage, setPage };
}
