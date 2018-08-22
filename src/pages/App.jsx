import React, { Component } from 'react'
// import ReactDOM, {render} from 'react-dom'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
// 引入自定义组件
import Login from './Login/LoginPage'
import Register from './Login/Register'
import Home from './Home/Home'
import Personal from './Personal/Personal'
import GuessYouLike from './GuessYouLike/GuessYouLike'
import Footer from '../components/Footer'
class App extends Component {
  render() {
    return (
         <div>
           <div className='no-footer'>
               {this.props.children}
           </div>
           <div>
               <Footer/>
           </div>
         </div>
    )
  }
}
const router=(
    <Router  history={hashHistory}>
        <Route path="/" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/app" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/Personal" component={Personal}/>
            <Route path="/GuessYouLike" component={GuessYouLike}/>
        </Route>
    </Router>
)


export default App;
// render()
ReactDOM.render(
      router,
      document.querySelector('#root')
);
