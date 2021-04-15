import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

class Login extends React.Component {
    constructor(props)
    {
        super(props)
        
        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
          e.preventDefault()
          console.log(this.state)
          axios({
            method: 'get',
            url: 'http://localhost:3000/users',
            validateStatus: (status) => {
              return true; 
            },
          }).catch(error => {
                console.log(error)
          }).then(response => {
            var value = 0;
            for(var i = 0; i<response.data.length;i++)
            {
                if(response.data[i].username === this.state.username && response.data[i].password === this.state.password)
                    value++;
            }
            if(value === 1){
                this.props.handleSuccessfulLogin();
                this.props.history.push('/')
            }
            else
                document.getElementById("1").removeAttribute("hidden")   
    })
}

    render() {
        const{username, password} = this.state
        return (
            <div className="col-sm-12">
                 <p id = "1" hidden = {true} style = {{color:'red'}}>Wrong username or password</p>
            <Form onSubmit = {this.submitHandler}>
                <Form.Group controlId="formBasicText">
                    <Form.Label><i>Username</i></Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name = "username" value = {username} required onChange = {this.changeHandler}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label><i>Password</i></Form.Label>
                    <Form.Control type="password" placeholder="Password" name = "password" value = {password}  required minLength = "8" onChange = {this.changeHandler}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    <i>Login</i>
                </Button>
            </Form>
            </div>
        );
    }
}

export default Login;