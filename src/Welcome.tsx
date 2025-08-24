import { Age } from "./Age";
import { type WelcomeProps } from "./App";

export function Welcome({ name = "Martina", age = 23 }: WelcomeProps) {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
      <Age age={age} />
    </div>
  );
}
