<template>
  <div class="header">
    <h1 class="name">FlashWords.</h1>
  </div>

  <div class="body">
    <div class="left-session">
      <div class="img-container">
        <img src="../assets/imgs/flash-card.png" alt="Is logo" />
      </div>
    </div>
    <div class="right-session">
      <h1 class="hello-text">Hi There!</h1>
      <p class="welcome-text">
        Welcome to Flash Words. Learning english with flash-cards
      </p>

      <button id="btn-google-login">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="33"
          height="33"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>

        Log in with Google
      </button>

      <div class="login-divider">
        <hr />
        <span> OR </span>
        <hr />
      </div>

      <input type="text" id="btn-email-input" placeholder="Your email" />
      <input type="password" id="btn-password-input" placeholder="Password" />
      <div class="forgot-password-container">
        <a href="#!" id="btn-forgot-password">Forgot your password?</a>
      </div>
      <button type="button" id="btn-login" @click="goToHomePage">Login</button>

      <div class="form-footer">
        <span>
          Don't have an account?
          <a href="#!" id="btn-sign-up">Sign up</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToHomePage() {
      this.$router.push("home-page");
    },
  },
};
</script>

<style lang="css" scoped>
.header {
  height: 8vh;
  padding: 20px;
}

.name {
  font-size: 32px;
  font-weight: 600;
}

.body {
  width: 100%;
  height: 92vh;
  display: flex;
}

.left-session {
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.right-session {
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.right-session .hello-text {
  font-size: 80px;
  font-weight: bold;
  color: black;
}

.right-session .welcome-text {
  margin-top: 1rem;
  font-size: 1rem;
  color: black;
}

#btn-google-login {
  border: 1px solid #d9dde8;
  border-radius: 12px;
  background-color: white;
  color: #586380;
  cursor: pointer;
  font-weight: 600;
  width: 36%;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  margin: 17px;
}

#btn-google-login:hover {
  background-color: #edeff4;
}

.login-divider {
  display: flex;
  width: 36%;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
}

.login-divider hr:first-of-type {
  width: 40%;
  margin-inline-start: 0.25rem;
}

.login-divider hr:last-of-type {
  width: 40%;
  margin-inline-end: 0.25rem;
}

#btn-email-input,
#btn-password-input {
  width: calc(36% - 1rem);
  height: 48px;
  border-radius: 12px;
  border: 1px solid #d9dde8;
  outline-color: #5bc0de;
  padding-left: 1rem;
  font-size: 1rem;
  margin: 8px 0px;
}

.forgot-password-container {
  width: 36%;
  display: flex;
  justify-content: flex-end;
  margin: 8px 0px 26px 0px;
}

#btn-forgot-password {
  text-decoration: none;
  cursor: pointer;
  color: #0029ff;
  font-size: 1rem;
  font-weight: 500;
}
#btn-forgot-password:hover,
#btn-sign-up:hover {
  color: darkblue;
}

#btn-login {
  border: none;
  border-radius: 32px;
  background-color: #6a74cf;
  color: white;
  cursor: pointer;
  height: 60px;
  width: 36%;
  font-size: 28px;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
}

#btn-login:hover {
  background-color: #5d66c0;
}

.form-footer {
  margin: 24px;
}

#btn-sign-up {
  text-decoration: none;
  color: #0029ff;
  cursor: pointer;
  font-weight: 500;
}

.img-container {
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
}

.img-container img {
  max-height: 100%;
  max-width: 100%;
}
</style>
