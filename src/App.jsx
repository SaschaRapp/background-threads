import Threads from './Threads';
import './Threads.css';

function App() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
    </div>
  );
}

export default App;
