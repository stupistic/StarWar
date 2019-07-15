import React, { Component } from 'react';
import axios from 'axios'
import './searchPlanet.css'
import Planet from './planetDetail'


class SearchPlanet extends Component {

  state = {
    term: '',
    Planet:'',

    SearchStatus: false

  }


    OnInputChange =  async (e) => {
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
}}

      refreshPage(){
      window.location.reload();
}


  render() {
      // console.log(this.state.Planetsdata)
      // console.log(this.state.Planet)
      const search = this.state.term
if(search.length===0){
  return <div className='container-fluid text-center  b3  '>
                  <div className='b7'>
                        <span className='b6 '>Star Wars Planets </span>
                        <div className='float-right  b1'>
                            <span className='b4'>{this.props.user[0]}</span>
                            <button className='b5 btn btn-sm' onClick={this.refreshPage}>Logout</button>
                        </div>
                  </div>

                  <form  onSubmit={ e => e.preventDefault()} className='text-center'>
                        <input
                        onChange={this.OnInputChange}
                        value={this.state.term}
                        className = 'text-center b2'
                        placeholder ='Enter planet name'/>
                        <button className='b8' onClick={this.OnSubmitClick}>Search</button>
                  </form>

                   <div className='b9'>
                     {this.state.SearchStatus}
                   </div>
         </div>
} return <div className='container-fluid text-center b3  '>
                        <div className='b7'>
                                <span className='b6 '>Star Wars Planets </span>
                                <div className='float-right  b1'>
                                <span className='b4'>{this.props.user[0]}</span>
                                <button className='b5 btn btn-sm' onClick={this.refreshPage}>Logout</button>
                                </div>
                         </div>

                        <form  onSubmit={ e => e.preventDefault()} className='text-center'>
                              <input
                              onChange={this.OnInputChange}
                              value={this.state.term}
                              className = 'text-center b2'
                              placeholder ='Enter planet name'/>
                              <button className='b8 ' onClick={this.OnSubmitClick}>Search</button>
                        </form>

                        <div className='b9'>
                          {this.state.SearchStatus}
                        </div>

                        <div className='container-fluid b10'>
                          <Planet detail = {this.state.Planet}/>
                        </div>
           </div>
  }

}
export default SearchPlanet
