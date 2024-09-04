import logo from './logo.svg';
import './App.css';

function App() {
  const element = <h1 className='title'>안녕하세요 h1입니다</h1>
  return (
    <div className="App">
      {element}

      <div>
        <h3>게시물제목</h3>
        <p>lorem ipsum 어쩌구저쩌구</p>
      </div>
    </div>
  );
}

export default App;
