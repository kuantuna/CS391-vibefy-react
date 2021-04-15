import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

class Register extends React.Component {
    constructor(props)
    {
        super(props)
        
        this.state = {
            username: '',
            password: '',
            name: '',
            email: '',
            age: '',
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
                if(response.data[i].username === this.state.username)
                    value++;
            }
            if(value === 0)
            {
                axios({
                    method: 'post',
                    url: 'http://localhost:3000/users',
                    data: {
                      username: this.state.username,
                      password: this.state.password,
                      name: this.state.name,
                      email: this.state.email,
                      age: this.state.age
                    },
                    validateStatus: (status) => {
                      return true;
                    },
                  }).catch(error => {
                        console.log(error)
                  }).then(response => {
                        console.log(response)
                  });
                this.props.history.push('/login')
            }
            else
                 document.getElementById("1").removeAttribute("hidden")      
          })
    }

render() {
    const{username, password, name, email, age} = this.state
    return (
        <div className="col-sm-12">
            <p id = "1" hidden = "true" style = {{color:'red'}}>Username already exists</p>
        <Form onSubmit = {this.submitHandler}>
            <Form.Group controlId="formBasicText">
                <Form.Label><i>Username</i></Form.Label>
                <Form.Control type="text" placeholder="Enter username" name = "username" value = {username} required onChange = {this.changeHandler}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label><i>Password</i></Form.Label>
                <Form.Control type="password" placeholder="Password" name = "password" value = {password}  required minLength = "8" onChange = {this.changeHandler}/>
            </Form.Group>
            <Form.Group controlId="formBasicText">
                <Form.Label><i>Name</i></Form.Label>
                <Form.Control type="text" placeholder="Name" name = "name" value = {name}  required onChange = {this.changeHandler}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label><i>E-mail</i></Form.Label>
                <Form.Control type="email" placeholder="Email" name = "email" value = {email}  required onChange = {this.changeHandler}/>
            </Form.Group>
            <Form.Group controlId="formBasicNumber">
                <Form.Label><i>Age</i></Form.Label>
                <Form.Control type="number" placeholder="Age" name = "age" value = {age}  required min= {0} onChange = {this.changeHandler}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                <i>Register</i>
            </Button>
        </Form>
        </div>
    );
  }
}

export default Register;