import Account from './components/Account'
import logo from './ga.png'
import './styles/App.css'

const App = () => {

  return (
    <div id="content">
      <div id="nav">
        <div id="logo">
          <img src={logo} alt="General Assembly Logo" />
        </div>
        <div id="title">Bank of GA</div>
      </div>
      <Account name="Checking" />
      <div className="clear"></div>
    </div>
  )
}

export default App
