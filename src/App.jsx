import "./App.css";

const socialMedia = [
  {
    icon: "fa-instagram",
    href: "https://www.instagram.com/wanderrerss/",
  },
  {
    icon: "fa-linkedin",
    href: "https://www.linkedin.com/in/guntur-alamsyah-putra-544a4928a/",
  },
  {
    icon: "fa-github",
    href: "https://github.com/Cramouchegit",
  },
];

function SocialButton({ icon, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <i className={`fa ${icon}`}></i>
    </button>
  );
}

function Header() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex);

  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((data, index) => (
          <SocialButton key={index} icon={data.icon} link={data.href} />
        ))}
      </div>
      <div className="social-buttons right">
        {socialRight.map((data, index) => (
          <SocialButton key={index} icon={data.icon} link={data.href} />
        ))}
      </div>
    </>
  );
}

function Identity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">Guntur Alamsyah</div>
      </div>
      <div className="title">IT Support</div>
    </div>
  );
}

function Biodata() {
  return (
    <div className="desc">
      <p>
        My Name is <b>Guntur Alamsyah Putra</b> and I am a{" "}
        <b>Network Engineer, IT Support, and Software Engineer</b>
      </p>
      <p>
        To say I love software is an understatement, I spend every waking moment
        learning and hours of work building something FUN with IT support Teams,
        React, NextJS & watching Tech Podcasts or attending Meetups &
        Conferences.
      </p>
    </div>
  );
}

function HighLight() {
  return (
    <div className="buttons">
      <Badge text="🎉HTML5" />
      <Badge text="🎀CSS3" />
      <Badge text="🚀JAVASCRIPT" />
      <Badge text="🔯REACTJS" />
    </div>
  );
}

function Badge({ text }) {
  return (
    <button className="buttons">
      <div className="height">{text}</div>
    </button>
  );
}

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <HighLight />
      </div>
    </div>
  );
}

export default App;
