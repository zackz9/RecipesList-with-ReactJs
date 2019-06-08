import React, {Component} from 'react';

class RecipeSearch extends React.Component {
  render () {

    const {value, handleSubmit, handleChange} = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-slanted text-capitalize">Recherche de recettes avec <strong className="text-danger">Food2Fork</strong></h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label className="text-center" htmlFor="search">
                  Pour rechercher une recette par ingrédients, il suffit de les séparer avec une virgule.
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="Cake, Sandwish, Cheese, Apple..."
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                  />
                <div className="input-group-append">
                  <button className="input-group-text bg-primary text-dark" type="submit">
                    <i className="fas fa-search"/>
                  </button>
                </div>
              </div>
              </form>
          </div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default RecipeSearch;
