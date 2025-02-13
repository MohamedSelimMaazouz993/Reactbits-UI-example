import './App.css';
import LetterGlitch from './components/LetterGlitch';
import DecryptedText from './components/DecryptedText';
import SplashCursor from './components/SplashCursor';
function App() {
  return (
    <div className='App'>
      {/* Container for the glitch effect and decrypted text */}
      <div className='glitch-container'>
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
        {/* Decrypted text overlay */}
        <div className='decrypted-text-overlay'>
          <DecryptedText
            text='Sheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesh 🔥 '
            speed={40}
            maxIterations={20}
            characters='ABCD1234!?'
            className='revealed'
            parentClassName='all-letters'
            encryptedClassName='encrypted'
            animateOn='view'
          />
        </div>
      </div>
    <SplashCursor />
    </div>

  );
}

export default App;
