import React, { Component } from 'react'
import './App.css';
import RecipeList  from './Component/RecipeList'
import RecipeSearch  from './Component/RecipeSearch'
import {recipes} from './tempList' 
import axios from 'axios'

class App extends Component {
  state={
     recipes:[]
  }
  componentDidMount(){
     
     axios.get(`https://api.github.com/users?client_id=$
     {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
     {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res=>{
        
        this.setState({
          recipes:res.data
        })
      })
      .catch(error=>{
        console.log(error)

      })
  }

  searchUser =  (text) =>{
     axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
     {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
     {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res=>{
         console.log(res.data.items)
         this.setState({
          recipes:res.data.items
        })
      })
      .catch(error=>{
        console.log(error)
      })
  }
  render(){
    const {recipes}  = this.state
    return (
      <React.Fragment>
            <RecipeSearch searchUser={this.searchUser}/>
            <RecipeList recipes={recipes} />
      </React.Fragment>
    );
  }
  
}

export default App;
