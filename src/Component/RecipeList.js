import React, { Component } from 'react'
import Recipe from './Recipe'

class RecipeList extends Component {
    render() {
        const {recipes}=this.props
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 text-center mb-3 mx-auto">
                            <h1 className="text-slanted">User List</h1>
                        </div>
                    </div>
                    <div className="row">
                        {
                            (recipes.length === 0) ? 
                            <h2 class="text-slanted text-danger text-center mx-auto">No Users Found</h2>:
                            recipes.map(recipe=>{
                                  return <Recipe key={recipe.id} recipe={recipe} />
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default RecipeList
