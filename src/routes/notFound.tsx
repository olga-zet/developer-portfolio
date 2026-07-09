import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/notFound")({
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <main>
      <h1>404</h1>
      <p>Nie znaleziono strony.</p>
      <Link to="/">Wróć na stronę główną</Link>
    </main>
  );
}
