import { Link, Routes, Route } from "react-router";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import GitHubUserList from "./GitHubUserList";
import ShowGitHubUser from "./ShowGitHubUser";

export type WelcomeProps = {
  name?: string;
  age?: number;
};

export function App() {
  return (
    <div>
      <nav>
        <Link to="/">Welcome</Link> | <Link to="/counter">Counter</Link> |{" "}
        <Link to="/users">GitHub Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Aldo" />} />
        <Route path="/counter" element={<Counter />} />

        <Route path="/users">
          <Route index element={<GitHubUserList />} />
          <Route path=":username" element={<ShowGitHubUser />} />
        </Route>

        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </div>
  );
}
