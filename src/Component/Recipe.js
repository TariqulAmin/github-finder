import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Recipe extends Component {
    render() {
        const {avatar_url,login,html_url,id } =this.props.recipe
        return (
            <React.Fragment>
                <div className="col-sm-4 mb-3">
                    <div className="card" style={{width:'300px'}}>
                       <img className="card-img-top" src={avatar_url} alt="user" style={{height:'250px'}} />
                       <div className="card-body">
                        <h6 className="card-title text-capitalize">{login}</h6>
                        <h6 className="card-text text-warning text-slanted">Some example text some example text. John Doe is an architect and engineer</h6>
                        </div>
                        <div className="card-footer">
                            <Link to={`/details/${login}`} className="btn btn-primary mr-2">Details</Link>
                            <a href={html_url} className="btn btn-success" target="_blank" rel="noopener noreferrer">User Url</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Recipe
