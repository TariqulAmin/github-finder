import React, { Component } from 'react'

class RecipeSearch extends Component {
    state={
        text:''
    }
    change = (e) =>  {
        this.setState({
          [e.target.name]:e.target.value
      })
    }
    submit = (e) => {
        e.preventDefault()
        this.props.searchUser(this.state.text)
        this.setState({
            text:''
        })
    }
    render() {
        return (
            <React.Fragment>
               <div className="container">
                   <div className="row">
                       <div className="col-sm-10 text-center mt-5 mx-auto">
                           <h1 className="text-slanted">
                               Search for users 
                           </h1>
                       </div>
                       <div className="col-sm-10 mx-auto mb-4">
                       <form onSubmit={this.submit}>
                           <div className="form-group mt-4">
                               <input type="text" className="form-control" name="text" value={this.state.text} onChange={this.change} placeholder="Search for user....."  />
                           </div>
                           <input type="submit" value="Search" className="btn btn-dark btn-block" />
                       </form>
                       </div>
                    </div>
               </div>
            </React.Fragment>
        )
    }
}

export default RecipeSearch
