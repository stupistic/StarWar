import React, { Component } from 'react';
import axios from 'axios'
import './searchPlanet.css'
import Planet from './planetDetail'


class SearchPlanet extends Component {

  state = {
    term: '',
    Planet:'',
    Planetsdata: ''
    
  }


componentDidMount(){
  axios.get('https://swapi.co/api/planets/')
  .then(response => this.setState({ Planetsdata: response.data.results.map((res) => res.name )}))
  .catch(err => console.log(err))
}


OnInputChange = (e) => {
const SearchTerm = this.state.term
  console.log(SearchTerm)
   this.setState({ term : e.target.value })
}


 OnSubmitClick = async () => {
const SearchTerm = this.state.term

await axios.get(`https://swapi.co/api/planets/?search=${SearchTerm}`)
.then(response => this.setState({ Planet: response.data.results[0] }))
.catch(err => console.log(err))
  }



  render() {



    return <div className='container-fluid text-center  b3'>
        <div className='b7'>
          <span className='b6 '>Star Wars Planets </span>
          <div className='float-right  b1'><span className='b4'>{this.props.user[0]}</span><button className='b5'>Logout</button></div>
        </div>

          <form  onSubmit={ e => e.preventDefault()} className='text-center'>
                <input
                onChange={this.OnInputChange}
                value={this.state.term}
                className = 'text-center b2'
                placeholder ='Enter planet name'/>
                <button className='' onClick={this.OnSubmitClick}>Search</button>
          </form>

            <div className='container'>
            <Planet detail = {this.state.Planet}/>

            </div>
          </div>
  }

}
export default SearchPlanet
