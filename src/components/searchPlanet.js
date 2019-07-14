import React, { Component } from 'react';
import axios from 'axios'
import './searchPlanet.css'
import Planet from './planetDetail'


class SearchPlanet extends Component {

  state = {
    term: '',
    Planet:'',
    Planetsdata: '',
    SearchStatus: false

  }


componentDidMount(){
  axios.get('https://swapi.co/api/planets/')
  .then(response => this.setState({ Planetsdata: response.data.results.map((res) => res.name )}))
  .catch(err => console.log(err))
}


OnInputChange = async (e) => {
const SearchTerm = this.state.term
  console.log(SearchTerm)
   this.setState({ term : e.target.value })

   if(SearchTerm){
     await axios.get(`https://swapi.co/api/planets/?search=${SearchTerm}`)
     .then(response => this.setState({ Planet: response.data.results[0] }))
     .catch(err => console.log(err))
   this.setState({ SearchStatus: false})
   }else{
    this.setState({ SearchStatus: 'Please type something for search'})
   }
}


 OnSubmitClick = async () => {
const SearchTerm = this.state.term

if(SearchTerm){
  await axios.get(`https://swapi.co/api/planets/?search=${SearchTerm}`)
  .then(response => this.setState({ Planet: response.data.results[0] }))
  .catch(err => console.log(err))
this.setState({ SearchStatus: false})
}else{
 this.setState({ SearchStatus: 'Please type something for search'})
}

  }
 refreshPage(){
      window.location.reload();
  }


  render() {

 const search = this.state.term
if(search.length===0){
  return <div className='container-fluid text-center  b3'>
      <div className='b7'>
        <span className='b6 '>Star Wars Planets </span>
        <div className='float-right  b1'><span className='b4'>{this.props.user[0]}</span><button className='b5' onClick={this.refreshPage}>Logout</button></div>
      </div>

        <form  onSubmit={ e => e.preventDefault()} className='text-center'>
              <input
              onChange={this.OnInputChange}
              value={this.state.term}
              className = 'text-center b2'
              placeholder ='Enter planet name'/>
              <button className='b8' onClick={this.OnSubmitClick}>Search</button>
        </form>
         {this.state.SearchStatus}
         </div>
}else return <div className='container-fluid text-center  b3'>
        <div className='b7'>
          <span className='b6 '>Star Wars Planets </span>
          <div className='float-right  b1'><span className='b4'>{this.props.user[0]}</span><button className='b5' onClick={this.refreshPage}>Logout</button></div>
        </div>

          <form  onSubmit={ e => e.preventDefault()} className='text-center'>
                <input
                onChange={this.OnInputChange}
                value={this.state.term}
                className = 'text-center b2'
                placeholder ='Enter planet name'/>
                <button className='b8' onClick={this.OnSubmitClick}>Search</button>
          </form>
           {this.state.SearchStatus}
            <div className='container-fluid'>
            <Planet detail = {this.state.Planet}/>

            </div>
          </div>
  }

}
export default SearchPlanet
