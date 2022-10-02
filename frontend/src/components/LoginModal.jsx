import React, { useState } from "react";
import ReactModalLogin from "react-modal-login";

const LoginModal = () => {
  const [logInfo, setlogInfo] = useState({
    showModal: false,
    loggedIn: null,
    loading: false,
    error: null,
    initialTab: null,
    recoverPasswordSuccess: null,
  });

  const onLogin = async (e, a, c) => {

    console.log(e, a, c);
    console.log("onLogin()");
    console.log("email: " + document.querySelector("#email").value);
    console.log("password: " + document.querySelector("#password").value);

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (!email || !password) {
      setlogInfo({
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
      setlogInfo({
        error: true,
      });
    } else {
      onLoginSuccess("form");
    }
  };


  const openModal = (initialTab) => {
    console.log("openModal()");

    setlogInfo({
      ...logInfo,
      initialTab: initialTab,
      showModal: true,
    });
  };

  const onLoginSuccess = (method, response) => {
    console.log("onLoginSuccess()");

    setlogInfo({
      ...logInfo,
      showModal: false,
      error: null,
      loggedIn: method,
      loading: false,
    });
  };


  const startLoading = () => {
    console.log("startLoading()");
    setlogInfo({
      ...logInfo,
      loading: true,
    });
  };

  const finishLoading = () => {
    console.log("finishLoading()");
    setlogInfo({
      ...logInfo,
      loading: false,
    });
  };

  const afterTabsChange = () => {
    console.log("afterTabsChange()");

    setlogInfo({
      ...logInfo,
      error: null,
      recoverPasswordSuccess: false,
    });
  };

  const closeModal = () => {
    console.log('closeModal()');
    setlogInfo({
      ...logInfo,
      showModal: false,
      error: null,
      loading: false,
    });
  };

  const loggedIn = logInfo.loggedIn ? (
    <div>
      <p>You are signed in with: {logInfo.loggedIn}</p>
    </div>
  ) : (
    <div>
      <p>You are signed out</p>
    </div>
  );

  const isLoading = logInfo.loading;


  return (
    <div>
      <button className="RML-btn" onClick={() => openModal("login")}>
        Login
      </button>

      <button className="RML-btn" onClick={() => openModal("register")}>
        Register
      </button>

      <ReactModalLogin
        visible={logInfo.showModal}
        onCloseModal={closeModal}
        loading={isLoading}
        initialTab={logInfo.initialTab}
        error={logInfo.error}
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
              label: "Nickname",
              type: "text",
              inputClass: "RML-form-control",
              id: "login",
              name: "login",
              placeholder: "Nickname",
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
      {loggedIn}
    </div>
  );
};

export default LoginModal;
