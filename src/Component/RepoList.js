import React, { Component } from 'react'
import RepoItem from './RepoItem'

class RepoList extends Component {
    render() {
        const {repos} = this.props
        return (
            <div>
                <h1 className="text-center mt-3">Repository List</h1>
                <ul className="list-group">
                    {
                        repos.map(repo=>{
                            return <RepoItem key={repo.id} repo={repo} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default RepoList
