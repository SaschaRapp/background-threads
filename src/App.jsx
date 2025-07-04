import Threads from './Threads';
import './Threads.css';

function App() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'fixed' }}>
      <Threads amplitude={3} distance={2} enableMouseInteraction={true} />
    </div>
  );
}

export default App;
