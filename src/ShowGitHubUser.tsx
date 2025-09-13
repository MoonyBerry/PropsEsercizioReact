import { useParams } from "react-router";
import GitHubUser from "./GitHubUser";

export default function ShowGitHubUser() {
  const { username } = useParams<{ username: string }>();

  return (
    <div>
      <GitHubUser username={username ?? null} />
    </div>
  );
}
