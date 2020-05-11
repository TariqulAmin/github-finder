import React, { Component } from 'react'
import './App.css';
import RecipeList  from './Component/RecipeList'
import RecipeSearch  from './Component/RecipeSearch'
import {recipes} from './tempList' 
import axios from 'axios'

class App extends Component {
  state={
     recipes:[],
     alert:false
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
  clearUser = () => {
    this.setState({
      recipes:[]
    })
  }
  alertMessage =  () => {
      this.setState({
        alert:true
      })
      setTimeout(() => {
        this.setState({
          alert:false
        })
      }, 3000);
  }
  render(){
    const {recipes}  = this.state
    return (
      <React.Fragment>
            <RecipeSearch alert={this.state.alert} searchUser={this.searchUser} recipes={recipes} clearUser={this.clearUser} alertMessage={this.alertMessage} />
            <RecipeList recipes={recipes} />
      </React.Fragment>
    );
  }
  
}

export default App;
