import React,  {Component} from 'react';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

import './App.css';

class App extends Component {

  state={
    recipes:recipes,
    url:`https://www.food2fork.com/api/search?key=88ce4c889953deb4f2948943afad5946`,
    base_url:`https://www.food2fork.com/api/search?key=88ce4c889953deb4f2948943afad5946`,
    details_id:35383,
    pageIndex:1,
    search:'',
    query:'&q=',
    error:''
  };
  // Transformation des données en format json
  //
  async getRecipes()
  {
    try
    {

        const data = await fetch(this.state.url);
        const jsonData = await data.json();

        console.log(jsonData);

        if(jsonData.recipes.length ===0)
        {
          this.setState(()=>{
            return {error:"Aucune recette trouvée ! "}
          })
        }
        else
        {
            this.setState(()=>{
              return {recipes:jsonData.recipes}
            })
        }


    }
    catch(error)
    {
          console.log(error);
    }
  }

  componentDidMount(){
    this.getRecipes();
  }

//Controler l'affichage de la page (liste total des articles ou details d'un seul article)
  displayPage = index => {
      switch(index){
        default:
        case 1:
          return <RecipeList
                  recipes={this.state.recipes}
                  handleDetails={this.handleDetails}
                  value={this.state.search}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  error={this.state.error}
                  />;
        case 0:
          return <RecipeDetails
                  id={this.state.details_id}
                  handleIndex={this.handleIndex}
                  />;
      }
  };

  handleIndex = index => {
      this.setState({
        pageIndex:index
      });
  };

  handleDetails = (index,id) => {
      this.setState({
        pageIndex:index,
        details_id:id
      });
  };

  handleChange = e => {

    this.setState({search:e.target.value},
          () => {
            console.log(this.state.search);
          }
    );

  };

  handleSubmit = e => {
      e.preventDefault();
      const {base_url,query, search}= this.state;

      this.setState(
        ()=>{
              return {url:`${base_url}${query}${search}`, search:""};
            },
        ()=>{
              this.getRecipes();
        });
  };

    render(){
      // console.log(this.state.recipes);

      return (
        <React.Fragment>

          {this.displayPage(this.state.pageIndex)}

        </React.Fragment>
      );
    }
}

export default App;
