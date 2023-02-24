import "./styles.css";
import "./responsiv.css"
export default function FirstPage() {
  return (
    <section className="first-page" id="hello">
      <div className="page-body">
        <div className="card-foundation">
          <div className="card-content-left-side">
            <img
              className="my-profile-img"
              src="https://cdn.discordapp.com/attachments/1037641651574800434/1065338287629287504/J_vit_bakgrund1.png"
              width="220"
              height="220"
            />
            <div className="card-content-left-side-description">
              <h4>Jirawan Sangthong</h4>
              <hr />
              <p>JavaScript - Web Developer</p>
              <div className="social">
                <a
                  className="linkedinLogo"
                  href="https://www.linkedin.com/in/jirawan-sangthong-14808817a/%22%3E"
                >
                  <img
                    src="https://www.shareicon.net/data/512x512/2016/07/13/606786_linkedin_512x512.png"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content-right-side">
          <div>
            <h2>
              <strong>Hello</strong>{" "}
            </h2>
            <h3> Nice to see you here! </h3>
            <div class="div-contains-btn">
            <a href="#projects" id="btn-1">
                Projects
              </a>
              <a  href="#about-me" id="btn-2">
                About Me
              </a>
            </div>
            <div className="info">
              <span>You can call me Jiro.</span>
              <span className="greeting">
                I'm a JavaScript student at Nackademin.
              </span>
              <span>
                <strong>I'm currently looking for an internship between</strong>
              </span>
              <span className="greeting">
                <strong>October 30, 2023 -- April 11, 2024</strong>
              </span>
              <span>
                If you have a proposition or questions about my internship, feel free to contact me. </span>
              <span  className="greeting">My inbox is always open and I'll get back to you as soon as possible. </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
