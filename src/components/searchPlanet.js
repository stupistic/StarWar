import React, { Component } from 'react';
import axios from 'axios'
import './searchPlanet.css'
import Planet from './planetDetail'

class SearchPlanet extends Component {

  state = {
    term: '',
    Planet:''
  }

 OnSubmitClick = async () => {
const SearchTerm = this.state.term

await axios.get(`https://swapi.co/api/planets/?search=${SearchTerm}`)
.then(response => this.setState({ Planet: response.data.results[0] }))
.catch(err => console.log(err))

console.log(this.state.Planet)
  }



  render() {
console.log(this.state.term)
console.log(this.props)
    return <div className='container-fluid text-center  b3'>
        <div className='b7'>
          <span className='b6 '>Star Wars Planets </span>
          <div className='float-right  b1'><span className='b4'>{this.props.user[0]}</span><button className='b5'>Logout</button></div>
        </div>

          <form  onSubmit={ e => e.preventDefault()} className='text-center'>
                <input
                onChange={ e => this.setState({ term : e.target.value })}
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
