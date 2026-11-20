import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="page-shell py-20 text-center">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Página no encontrada</h1>
      <p className="muted mt-3">La página o el personaje no están disponibles.</p>
      <Link to="/" className="control control-primary mt-6">Volver al inicio</Link>
    </section>
  );
};
