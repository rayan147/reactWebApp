import React, { Component } from "react";
import FormErrors from "./FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      username: "",
      password: "",
      modal: false,
      errors: {
        cognito: null,
        blankfield: false,
      },
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error },
      });
    }

    // AWS Cognito integration here
    const { username, password } = this.state;
    try {
      const user = await Auth.signIn(username, password);

      this.props.auth.setUserFunc(user);
      console.log("user", user);
      this.props.auth.setAuthStatus(true);
      this.props.history.push("/");
    } catch (error) {
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: !error.message ? "message" : error,
        },
      });
    }
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    const { buttonLabel } = this.props;
    return (
      <>
        <Modal
          isOpen={!this.state.modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle}
          className=""
        >
          {/* <Button color="danger" onClick={this.toggle}>
            {buttonLabel}
          </Button> */}
          <ModalHeader toggle={this.toggle}>Welcome Back </ModalHeader>
          <ModalBody>
            <section className="section auth">
              <div className="container">
                <FormErrors formerrors={this.state.errors} />

                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <p className="control">
                      <Input
                        className="input"
                        type="text"
                        id="username"
                        aria-describedby="usernameHelp"
                        placeholder="Enter username or email"
                        value={this.state.username}
                        onChange={this.onInputChange}
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control has-icons-left">
                      <Input
                        className="input"
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onInputChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <a href="/forgotpassword">Forgot password?</a>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <Button className="button is-success">Login</Button>
                    </p>
                  </div>
                </form>
              </div>
            </section>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default LoginModal;
