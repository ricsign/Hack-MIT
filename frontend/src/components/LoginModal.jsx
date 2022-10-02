import React, { useState, useEffect } from "react";
import ReactModalLogin from "react-modal-login";


const LoginModal = (props) => {
  const [state, setState] = useState({
    showModal: false,
    loggedIn: null,
    loading: false,
    error: null,
    initialTab: null
  });

  const onLogin = async (e, a, c) => {

    console.log(e, a, c);
    console.log("onLogin()");
    console.log("email: " + document.querySelector("#email").value);
    console.log("password: " + document.querySelector("#password").value);

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (!email || !password) {
      setState({
        error: true,
      });
    } else {
      onLoginSuccess("form");
    }
  };

  const onRegister = () => {
    console.log("onRegister()");
    console.log("login: " + document.querySelector("#login").value);
    console.log("email: " + document.querySelector("#email").value);
    console.log("password: " + document.querySelector("#password").value);

    const login = document.querySelector("#login").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (!login || !email || !password) {
      setState({
        error: true,
      });
    } else {
      onLoginSuccess("form");
    }
  };


  const openModal = (initialTab) => {
    console.log("openModal()");
    setState({
      ...state,
      initialTab: initialTab,
      showModal: true,
    });
  };

  const onLoginSuccess = (method, response) => {
    console.log("onLoginSuccess()");
    setState({
      ...state,
      showModal: false,
      error: null,
      loggedIn: method,
      loading: false,
    });
  };


  const startLoading = () => {
    console.log("startLoading()");
    setState({
      ...state,
      loading: true,
    });
  };

  const finishLoading = () => {
    console.log("finishLoading()");
    setState({
      ...state,
      loading: false,
    });
  };

  const afterTabsChange = () => {
    console.log("afterTabsChange()");

    setState({
      ...state,
      error: null,
      recoverPasswordSuccess: false,
    });
  };

  const closeModal = () => {
    console.log('closeModal()');
    setState({
      ...state,
      showModal: false,
      error: null,
      loading: false,
    });
  };

  useEffect(() => {
    console.log("aslkfjhlkjhsdf")
    openModal("login")
  }, []);

  const isLoading = state.loading;


  return (
    <div>
      <ReactModalLogin
        visible={state.showModal}
        onCloseModal={closeModal}
        loading={isLoading}
        initialTab={state.initialTab}
        error={state.error}
        tabs={{
          afterChange: afterTabsChange,
        }}
        startLoading={startLoading}
        finishLoading={finishLoading}
        form={{
          onLogin: onLogin,
          onRegister: onRegister,
          loginBtn: {
            label: "Sign in",
          },
          registerBtn: {
            label: "Sign up",
          },
          loginInputs: [
            {
              containerClass: "RML-form-group",
              label: "Email",
              type: "email",
              inputClass: "RML-form-control",
              id: "email",
              name: "email",
              placeholder: "Email",
            },
            {
              containerClass: "RML-form-group",
              label: "Password",
              type: "password",
              inputClass: "RML-form-control",
              id: "password",
              name: "password",
              placeholder: "Password",
            },
          ],
          registerInputs: [
            {
              containerClass: "RML-form-group",
              label: "Username",
              type: "text",
              inputClass: "RML-form-control",
              id: "login",
              name: "login",
              placeholder: "Username",
            },
            {
              containerClass: "RML-form-group",
              label: "Email",
              type: "email",
              inputClass: "RML-form-control",
              id: "email",
              name: "email",
              placeholder: "Email",
            },
            {
              containerClass: "RML-form-group",
              label: "Password",
              type: "password",
              inputClass: "RML-form-control",
              id: "password",
              name: "password",
              placeholder: "Password",
            },
          ],
        }}
        separator={{
          label: "or",
        }}
      />
    </div>
  );
};

export default LoginModal;