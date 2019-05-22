import React from "../../../node_modules/react";

import "../../Styles/app.css";
function LoginForm(props) {
  return (
    <div>
      <div className="card">
        <h2>Log in </h2>

        <form
          className="login"
          action="/api/users"
          class="col s12 z-depth-1"
          method="POST"
        >
          <div class="row ">
            <div class="input-field col s6">
              <label for="username">E-mail: </label>
              <input id="username" type="text" class="validate" />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <label for="password">Password: </label>
              <input id="password" type="text" class="validate" />
            </div>
          </div>
          <button
            type="submit"
            onClick={props.handleFormSubmit}
            className="btn btn-info"
          >
            Go
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
