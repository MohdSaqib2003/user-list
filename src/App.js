import './App.css';
import User1 from './User1';
import User2 from './User2';

import {NavLink, Route, Switch} from "react-router-dom";

function App() {
   function fun(){
    var btn = document.getElementsByClassName('button');
    for(let i=0;i<btn.length;i++){
          btn[i].addEventListener('click',()=>{
            btn[i].style.backgroundColor = 'green';
            btn[i].style.color = 'white';
            for(let j = 0;j<btn.length;j++){
              if(j!==i){
                btn[j].style.backgroundColor = 'white';
                btn[j].style.color = 'black';
                }
            }
          })

    }
  }
  return (
    <div className="main" onLoad={fun}>
      <h1>Task 2</h1>
      <h3>List of users</h3>
     

    <Switch>
          <Route path="/user-list" component={User1} exact/>
          <Route path="/user-list/user2" component={User2}/>
    </Switch>
         

    <NavLink to="/user-list" activeClassName="active" ><button className="button">1</button></NavLink>
    <NavLink to="/user-list/user2"  activeClassName="active" ><button className="button">2</button></NavLink>  <br /><br /><br /><br />
    <span> <b>Note : </b> I have used 3 persons per page because API returns only six person's details</span>
    </div>
  );
}

export default App;
