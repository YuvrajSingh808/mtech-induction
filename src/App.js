import EventCalender from './calender';
import Main from './main'
import Speakers from './Event'
import OurTeam from './team';
import Footer from './footer';
// import './App.css';

function App() {
  return(<div className="dark:bg-dark-bg bg-light-bg">
    <Main />
    <Speakers />
    <EventCalender />
    <OurTeam />
    <Footer />
  </div>)
}

export default App;