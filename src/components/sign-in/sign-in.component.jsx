import React from 'react'
import FormInput from 'components/form-input/form-input.component.jsx'
import CustomButton from 'components/custom-button/custom-button.component.jsx'
import './sign-in.styles.scss'
import {signInWithGoogle} from 'firebase/firebase.utils.js'
class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.setState({email: '', password: ''})
  }
  handleChange = e => {
    const {value, name} = e.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
