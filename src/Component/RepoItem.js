import React, { Component } from 'react'

class RepoItem extends Component {
    render() {
        const {repo}  = this.props
       
        return (
            
            <div>
                <li className="list-group-item mb-2">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'red'}}>{repo.name}</a>
                </li>
            </div>
        )
    }
}

export default RepoItem
