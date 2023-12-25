import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './pages/Counter/Counter'

function App() {

  return (
    <div className="App">
      <div style={{marginBottom: '20px'}}>
        <a href="profile" style={{ marginRight: '10px' }}>Profile</a>
        <a href="in-line-css" style={{ marginRight: '10px' }}>In Line Css</a>
        <a href="external-css" style={{ marginRight: '10px' }}>External Css</a>
        <a href="material-ui" style={{ marginRight: '10px' }}>Material UI</a>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter label="Total Konter" />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
