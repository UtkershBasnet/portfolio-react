import Typing from './Typing';
import '../css/Home.css';

function Home() {
  return (
    <div className="home-section">
      <h1 className="name-title"> Hi there👋</h1>
      <h1 className="name-title"> I'M UTKERSH BASNET</h1>

      <div className="background-overlay">
        <Typing
          text={[
            "Software Developer",
            "MERN Stack Developer"
          ]}
          typingSpeed={100}
          deletingSpeed={50}
          duration={1000}
        />
      </div>
    </div>
  );
}

export default Home;
