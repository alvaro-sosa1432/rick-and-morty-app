import { Link } from "react-router-dom";
import { Protagonist } from "../components/Protagonist";

export const Home = () => {
  return (
    <div className="page-shell pb-14">
      <section className="mx-auto max-w-2xl py-14 text-center sm:py-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Rick and Morty
        </h1>
        <p className="muted mx-auto mt-4 max-w-md text-base leading-relaxed sm:text-lg">
          Conocé a los personajes que acompañan a Rick y Morty en sus aventuras por el multiverso.
        </p>
        <Link to="/characterlist" className="control control-primary mt-6 px-5">
          Explorar personajes
        </Link>
      </section>
      <Protagonist />
    </div>
  );
};
