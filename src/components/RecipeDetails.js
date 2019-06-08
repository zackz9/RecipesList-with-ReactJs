import React, {Component} from 'react';
import {recipe} from '../tempDetails';


class RecipeDetails extends React.Component {

  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     recipe: recipe,
  //     url:`https://www.food2fork.com/api/get?key=88ce4c889953deb4f2948943afad5946&rId=${this.props.id}`
  //   };
  // }
  //
  //
  // async componentDidMount(){
  //   try
  //   {
  //
  //       const data = await fetch(this.state.url);
  //       const jsonData = await data.json();
  //
  //       this.setState({
  //         recipe:jsonData.recipe
  //       });
  //   }
  //   catch(error)
  //   {
  //         console.log(error);
  //   }
  // }

//Deuxieme methode

state = {
  recipe:recipe
};
async componentDidMount(){
  const id = this.props.id;
  const url = `https://www.food2fork.com/api/get?key=88ce4c889953deb4f2948943afad5946&rId=${id}`;
    try
    {
        const data = await fetch(url);
        const jsonData = await data.json();

        this.setState(
            (state,props) => { return {recipe:jsonData.recipe} },
            ()  => {}
        );
    }
    catch(error)
    {
          console.log(error);
    }
}

  render () {
    const{
      publisher,
      image_url,
      publisher_url,
      source_url,
      ingredients,
      title
    } = this.state.recipe;

  const{handleIndex} = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
               <button
                  type="button"
                  className="btn btn-secondary mb-5 text-capitalize"
                  onClick={()=>{handleIndex(1)}}>
                Revenir à la liste
                </button>
               <img src={image_url} className="d-block w-100" alt="Recipe image"/>
            </div>
            {/* Details section*/}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-slanted text-capitalize text-warning"><span className="text-dark">Provided by</span> {publisher}</h6>
              <a
                href={publisher_url}
                className="btn btn-primary mt-2 text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                Page de l'auteur
              </a>
              <a
                href={source_url}
                className="btn btn-dark mt-2 mx-2 text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
              Lien de la recette
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingrédients</h2>
                {
                  ingredients.map((item,index)=>{
                    return(
                      <li key={index} className="list-group-item text-slanted ">{item}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default RecipeDetails;
