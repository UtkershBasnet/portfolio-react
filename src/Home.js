import Typing from './Typing';
import './Home.css';

function Home() {
  return (
    <div className="home-section">
      <div className="background-overlay">
        <Typing
          text={[
            "Welcome to My Portfolio",
            "I am a Web Developer",
            "I love coding!"
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
