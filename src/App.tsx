import { Welcome } from "./Welcome";

export type WelcomeProps = {
  name?: string;
  age?: number;
};

export function App() {
  return (
    <div>
      <Welcome name="Aldo" age={23} />
    </div>
  );
}
