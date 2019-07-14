import React, { Component } from 'react';
import './login.css'
import axios from 'axios'
import SearchBar from './searchPlanet'


class Login extends Component {

  state = {

    UserNameFromClient: '',
    PasswordFromClient: '',

    UserNameFromBackend: '',
    PasswordFromBackend:'',
    LoginSUCCESS: false,
    LoginFAIL: false



  }


  OnSubmitClick = async () => {
const usernamefromclient = this.state.UserNameFromClient



 // console.log(UBackend)
 //  console.log(PBackend)
 //
 //  console.log(usernamefromclient)
 //  console.log(PClient)

  await axios.get(`https://swapi.co/api/people/?search=${usernamefromclient}`)
          .then(result => this.setState({
           UserNameFromBackend: result.data.results.map((people) => people.name),
           PasswordFromBackend: result.data.results.map((people) => people.birth_year) }))
          .catch( err => console.log(err))

  const CheckAuthentication = async () => {
    const usernamefromclient = await this.state.UserNameFromClient
    const UBackend = await this.state.UserNameFromBackend[0]
    const PBackend = await this.state.PasswordFromBackend[0]
    const PClient =  await this.state.PasswordFromClient

    if(PBackend === PClient && usernamefromclient === UBackend){
      console.log('Successfully Login')
      this.setState({ LoginSUCCESS: 'Successfully Login', LoginFAIL: false
    })
    }else{
      console.log('Invalid Username or Password')
      this.setState({ LoginFAIL: 'Invalid Username or Password' })
    }
    }
   CheckAuthentication()






  }


  render() {

if(this.state.LoginSUCCESS){

  return <div >
  <SearchBar user={this.state.UserNameFromBackend}/>
  </div>
}else{
  return <div className='container text-center shadow a5'>

          <h1 className='a1'>STAR WARS</h1>

                  <div className='container text-center'>
                    <form onSubmit={(e) => e.preventDefault()}>

                      <label className='a2'>User Name</label>
                      <input
                       onChange={ e => this.setState({ UserNameFromClient: e.target.value })}
                       value={this.state.UserName}
                       placeholder='Enter Username'
                       className='a3 text-center'/>

                         <br />

                      <label className='a2'>Password</label>
                      <input
                      onChange={(e) => this.setState({ PasswordFromClient: e.target.value })}
                      type='password'
                      value={this.state.Password}
                      placeholder='Enter Password'
                      className='a3 text-center'/>

                      <br />

                      <button className='a4' onClick={this.OnSubmitClick }>Submit</button>
                    </form>
                  </div>

       <div className='a6'>{this.state.LoginFAIL}</div>

        </div>
}


  }

}
export default Login;
