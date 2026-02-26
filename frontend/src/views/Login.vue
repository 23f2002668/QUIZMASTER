<template>
  <form  @submit.prevent="login">
    <div id="Background">
      <br>
      <div id="Main">
        <div id="Header">
          <br>
          <h3>Login Into Your Account</h3>
        </div>

        <div class="DataHeading">
          <label for="UserName">Enter Username / Email<sup>*</sup></label><br>
          <input type="text"  v-model="mail" placeholder="Email" required>
        </div>

        <div class="DataHeading">
          <label for="Password">Enter Password<sup>*</sup></label><br>
          <input type="password"  v-model="password" placeholder="Password" required>
          <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
        </div>

        <div id="SubmitReset">
          <button type="submit" id="Submit">Submit</button>
        </div>

        <div class="ForgotPassword">
          <a href="/forgotPassword" class="ForgotPassword">Forgot Password ?</a>
        </div>

        <div class="Registeration">
          <a href="/registration" class="ForgotPassword">New User ? Register Here</a>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
#Background{
  background-color:#F5F5F5 ;
  height:100vh;
  align-content: center;
}

sup{
  color:red;
  font-size:1em;
}

#Header{
  margin-top:auto;
  margin-bottom:auto;
  text-align:center;
  font-size: 1.3em;
}

#Main{
  border:1px solid lightgray;
  border-radius:1.25vh;
  background-color:white;
  width:75%;
  height:68vh;
  margin-top:auto;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:auto;
  box-shadow: 0px 1em 1em rgba(0.4, 0.4, 0.4, 0.4);
}

.DataHeading{

  border-radius:0.25em;
  margin-top:2vh;
  margin-left:auto;
  margin-right:auto;
  font-size:1.15em;
  width:95%;
}

label{
  margin-top:0.1vh;
  margin-left:1%;
}

input, select{
  border:1px solid lightgray;
  border-radius:0.25em;
  background-image:linear-gradient(to top, white, #F8F8F8, #F5F5F5);
  font-size:1.10em;
  padding: 0.1vh 2vh 0.1vh 2vh;
  margin-top:1vh;
  margin-bottom:1vh;
  margin-left:1%;
  text-align:justify;
  height:5.5vh;
  width:98%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

#Submit{
  margin-left:3.5%;
  margin-top:5vh;
  margin-bottom:3vh;
  color:white;
  border:1px solid #0066FF;
  border-radius:0.5vh;
  height:5vh;
  width:15%;
  font-size:1.5em;
  background-image:linear-gradient(#6698FF, #1589FF, #157DEC, #306EFF, #2554C7);
  box-shadow: 0px 4px 6px rgba(0, 0, 0.7, 0.7);
}

.ForgotPassword{
  margin-left:1.75%;
  font-size:1.05em;
  text-decoration:none;
}

.Registeration{
  margin-left:1.75%;
  margin-top:1%;
  margin-bottom:auto;
  font-size:1.05em;
  text-decoration:none;
}

</style>

<script>
import router from "../router"; // Import Vue Router

export default {
  data() {
    return {
      mail: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ mail: this.mail, password: this.password, Type: 'password' })
        });

        const data = await response.json();

        if (response.ok) {

          if (data.type === 'Admin') {
            router.push(`/adminDashboard/${encodeURIComponent(this.mail)}`);
          } else {
            router.push(`/userDashboard/${encodeURIComponent(this.mail)}`);
          }
        } else {
          this.errorMessage = "Warning : " + data.message + " Relogin Again ! ....." || "Invalid email or password!";
          setTimeout(function() {
            window.location.reload();
          }, 3000);
        }
      } catch (error) {
        console.error("Error:", error);
        this.errorMessage = "Server error. Please try again.";
      }
    }
  }
};
</script>