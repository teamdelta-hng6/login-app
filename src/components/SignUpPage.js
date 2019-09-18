import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SignupPage extends Component {
    constructor(props){
        super(props)
        this.state = {

            fullName: '',
            
            email: '',
            userName: '',
            password:''

        }
    }


    onSubmit = (e) => {
        e.preventDefault()
        console.log("Submitting");
        console.log(this.state);
    }
    // handleNewSignUp = (e) => {
    //     e.preventDefault()
    //     console.log("move to login page");
    //     console.log(this.state);
    //   };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            // <div>htmlFor = 'firstName'
            <div>
               <form onSubmit = {this.onSubmit}>
                   <label htmlFor = 'firstName' >FullName</label>
                   <input
                   
                   type = 'text'
                   placeholder = 'Enter your first name'
                   value = {this.state.fullName}
                   onChange= {this.handleChange}
                   />
                

                   <label htmlFor = 'email'>e-mail</label>
                   <input
                   name = 'email'
                   type = 'text'
                   placeholder = 'Enter your email name'
                   value = {this.state.email}
                   onChange= {this.handleChange}
                   />

                   <label htmlFor = 'username'>Username</label>
                   <input
                   type = 'text'
                   name = 'text'
                   placeholder = 'Enter a unique user name'
                   value = {this.state.userName}
                   onChange= {this.handleChange}
                   />

                   <label htmlFor = 'password'>Password</label>
                   <input
                   name = 'password'
                   type = 'password'
                   placeholder = 'Enter a seven digit password that included a number'
                   value = {this.state.password}
                   onChange= {this.handleChange}
                   />
                   <Link to = '/'>
                   <button>sign Up</button></Link>
                   </form> 
            </div>
        )
    }
}
// onClick={this.handleNewSignUp}
export default SignupPage