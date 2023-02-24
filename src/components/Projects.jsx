import "./styles.css";
import "./responsiv.css"
import projects from "../data/Projects";

export default function SecondPage() {
  return (
    <section className="second-page">
      <div className="background-second-page">
        <div>
          <h2 id="projects">PROJECTS </h2>
        </div>
        <hr></hr>
        {projects &&
          projects.map((projects) => (
            <div className="pro">
              <div className="projects">
                <div className="project-info">
                  <h1>{projects.name}</h1>
                  <div className="description">{projects.description}</div>
                </div>
                <img
                  className="projects-img"
                  src={projects.img}
                  alt="My first project - Junies webshop"
                />
              </div>
              <p className="bottom-of-projects"></p>
            </div>
          ))}
      </div>
    </section>
  );
}
