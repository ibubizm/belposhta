
import './App.css';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar'
import { Main } from './components/main/main'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DeepList } from './components/main/listitem/deeplist'
import { Page } from './components/main/listitem/page/page'
import { Slider } from './components/slider/slider';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/list" component={DeepList} />
        <Route path='/list/:pageName' component={Page} />
        {/* <Redirect to="/" /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
