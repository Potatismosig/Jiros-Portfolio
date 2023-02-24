import "./styles.css"
import "./responsiv.css"
import spareTime from "../data/SpareTime";

export default function ThirdPage() {
  return (
    <section className="third-page" id="about-me">
      <div className="all-content-third-page">
        <div>
          <h2> ABOUT ME </h2>
        </div>
        <div className="spare-time-cards">
          {spareTime &&
            spareTime.map((spareTime) => (
              <div className="spare-time">
                <div >
                  {" "}
                  <img
                    className="spare-time-img"
                    src={spareTime.img}
                    width="215"
                    height="215"
                  />
                  <hr></hr>
                  <div className="spare-time-info">
                    <h1>{spareTime.name}</h1>
                    <p className="spare-time-description">
                      {spareTime.description}
                    </p>
                  </div>
                </div>
                <p className="third-page-bottom-of-projects"></p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
