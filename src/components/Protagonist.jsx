import { GetProtagonist } from "../stack/GetCharacterStack";
import { Card } from "./Card";
import { Navigate } from "react-router-dom";

export const Protagonist = () => {
  const { data, isPending, error } = GetProtagonist();

  if (error || (!isPending && !Array.isArray(data))) {
    return <Navigate to="/error" replace />;
  }

  return (
    <section aria-labelledby="protagonists-heading" className="border-t border-(--border) pt-8">
      <h2 id="protagonists-heading" className="mb-5 text-2xl font-semibold tracking-tight">
        Protagonistas
      </h2>
      {isPending ? (
        <p className="muted" role="status">Cargando protagonistas…</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {data.map(({ id, name, image }) => (
            <Card key={id} id={id} name={name} image={image} />
          ))}
        </div>
      )}
    </section>
  );
};
