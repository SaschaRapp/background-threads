import Threads from './Threads';
import './Threads.css';

function App() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Threads amplitude={5} distance={1.1} enableMouseInteraction={true} />
    </div>
  );
}

export default App;
