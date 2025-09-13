import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";

export type GitHubUserListItem = {
  login: string;
  id: number;
  avatar_url: string;
};

export default function GitHubUserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get<GitHubUserListItem[]>(
        "https://api.github.com/users"
      );
      return response.data;
    },
  });

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users!</p>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          <Link to={user.login}>{user.login}</Link>
        </li>
      ))}
    </ul>
  );
}
