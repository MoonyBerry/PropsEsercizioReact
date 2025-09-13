import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type GitHubUserProps = {
  username: string | null;
};

type GitHubUserData = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
};

export default function GitHubUser({ username }: GitHubUserProps) {
  if (!username) return <p>Nessun utente selezionato</p>;

  const { data, isLoading, error } = useQuery({
    queryKey: ["user", username],
    queryFn: async () => {
      const response = await axios.get<GitHubUserData>(
        `https://api.github.com/users/${username}`
      );
      return response.data;
    },
    enabled: !!username,
  });

  if (isLoading) return <p>Loading user...</p>;
  if (error) return <p>Error loading user data!</p>;

  return (
    <div>
      <h2>{data?.name || data?.login}</h2>
      {data?.avatar_url && (
        <img src={data.avatar_url} alt={data.login} width={100} />
      )}
      <p>{data?.bio || "Nessuna bio disponibile"}</p>
    </div>
  );
}
