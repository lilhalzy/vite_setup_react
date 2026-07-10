import { useInfiniteQuery } from "@tanstack/react-query"

const useInfiniteUsersQuery = () => {
  return useInfiniteQuery({
    queryKey: [
      'users',
      'infinite',
    ],

    queryFn: async () => [],
    enabled: false,
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 0 ? undefined : allPages.length + 1
    },
  })
}

export default useInfiniteUsersQuery