import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import RepoList from './RepoList'

class RecipeDetail extends Component {
    state={
        recipe:{},
        repos:[]
    }
    componentDidMount(){
     
        axios.get(`https://api.github.com/users/${this.props.match.params.login}?client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
         .then(res=>{
            this.setState({
             recipe:res.data
           })
         })
         .catch(error=>{
           console.log(error)
   
         })

        axios.get(`https://api.github.com/users/${this.props.match.params.login}/repos?client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
         .then(res=>{
            this.setState({
             repos:res.data
           })
         })
         .catch(error=>{
           console.log(error)
   
         })
     }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    
                    <div className="mt-3">
                        <Link to="/" className="btn btn-success mb-3">Go back to Search</Link>
                        <div className="card">
                        <div className="row">
                            <div className="col-sm-6">
                                <img className="card-img-top rounded" src={this.state.recipe.avatar_url} alt="Card" style={{height:'150px',width:'150px'}} />
                                <div className="card-body">
                                <h2 className="card-title">{this.state.recipe.name}</h2>
                                <p className="card-text">Location:{this.state.recipe.location}</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h4>Bio:</h4>
                                <p>{this.state.recipe.bio}</p>
                                <a href={this.state.recipe.html_url} className="btn btn-dark">Github Profile</a><br/><br/>
                                <p>Username:{this.state.recipe.login}</p>
                                <p>Company:{this.state.recipe.company}</p>
                                <p>Website:{this.state.recipe.blog}</p>
                            </div>
                        </div>
                        </div> 

                        <RepoList repos={this.state.repos}/>
                    </div>

                </div>
                
            </React.Fragment>
        )
    }
}

export default RecipeDetail
