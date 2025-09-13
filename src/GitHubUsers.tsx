import { Routes, Route } from "react-router";
import GitHubUserList from "./GitHubUserList";
import ShowGitHubUser from "./ShowGitHubUser";

export default function GitHubUsers() {
  return (
    <Routes>
      <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
      <Route path="" element={<GitHubUserList />} />
      <Route path=":username" element={<ShowGitHubUser />} />
    </Routes>
  );
}
