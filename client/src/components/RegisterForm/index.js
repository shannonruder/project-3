import React from "../../../node_modules/react";
import "../../Styles/app.css";

function RegisterForm(props) {
  return (
    <div>
      <div className="card">
        <div className="card-container">
          <h2>Sign up </h2>
          <h5>
            <p>Create an account to save your events</p>
          </h5>

          <form
            className="register"
            action="/api/users"
            class="col s12 z-depth-1"
            method="POST"
          >
            <div class="row ">
              <div class="input-field col s6">
                <label for="firstname">First Name: </label>
                <input id="firstname" type="text" class="validate" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <label for="lastname">Last Name: </label>
                <input id="lastname col 12" type="text" class="validate" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <label for="username">Username: </label>
                <input id="username" type="text" class="validate" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <label for="email">Email: </label>
                <input id="email" type="text" class="validate" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <label for="password">Password: </label>
                <input id="password" type="text" class="validate" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <label for="repassword">Re-Enter Password: </label>
                <input id="repassword" type="text" class="validate" />
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <label for="phone">Phone: </label>
                <input id="phone" type="text" class="validate" />
              </div>
            </div>
            <button
              type="submit"
              onClick={props.handleFormSubmit}
              className="btn btn-info"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
