import React, {Component} from 'react';

class Recipe extends React.Component {
  render () {
    // Declaration de l'objet en tant qu'une constante
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;

    const{handleDetails} = this.props;

    return (

      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={image_url}
              className="img-card-top"
              alt="Recipe image"
              style={{height:"14rem"}}/>
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-danger text-slanted"><span className="text-dark">Publié par </span>{publisher}</h6>
            </div>
            <div className="card-footer">
              <button
                type="button"
                className="btn btn-info text-capitalize"
                onClick={()=>handleDetails(0, recipe_id)}
              >Details
              </button>
              <a href={source_url} className="btn btn-success mx-2 " target="_blank" rel="noopener noreferrer">Lien de la source</a>
            </div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default Recipe;
