<template>
  <form id="ForgotPassword" @submit.prevent="submitOTP">
    <div id="Background">
      <br />
      <div id="Main">
        <div id="Header">
          <br />
          <h3>Forgot Password</h3>
        </div>

        <div class="DataHeading">
          <label for="UserName">Enter Username / Email<sup>*</sup></label>
          <input type="text" id="UserName" v-model="email" required />
          <button id="SendOTP" :disabled="otpSent" @click.prevent="sendOTP"> Send OTP </button>
        </div>

        <br />

        <div class="DataHeading" v-if="otpSent">
          <label for="OTP">Enter OTP</label>
          <input type="text" id="OTP" v-model="otp" required />
          <button type="submit" id="Submit">Submit</button>
          <div id="time" style="margin-top: 1em; font-weight: bold;">
            {{ timerText }}
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "../router";

const email = ref("");
const correctOtp = ref("");
const otp = ref("");
const otpSent = ref(false);
const errorMessage = ref("");
const timer = ref(0);
const timerText = ref("");
let timerInterval: number | undefined;

async function sendOTP() {
  if (!email.value) {
    alert("Please enter your username or email.");
    return;
  }

  otpSent.value = true;

  try {
    const response = await fetch(`http://localhost:8000/forgot_password/${encodeURIComponent(email.value)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Email: email.value }),
    });

    if (response.status === 200) {
      const result = await response.json();
      if (result.OTP) {
        console.log("OTP sent successfully!");
      }

      startTimer(300); // 5 minutes
    } else {
      alert("Something went wrong, please try again.");
      otpSent.value = false;
    }
  } catch (error) {
    alert("An error occurred, please try again.");
    console.error(error);
    otpSent.value = false;
  }
}

function startTimer(seconds: number) {
  timer.value = seconds;
  updateTimerText();

  timerInterval = window.setInterval(() => {
    timer.value--;
    updateTimerText();

    if (timer.value <= 0) {
      clearInterval(timerInterval);
      timerText.value = "Time Expired";
      otpSent.value = false;
    }
  }, 1000);
}

function updateTimerText() {
  const minutes = Math.floor(timer.value / 60);
  const seconds = timer.value % 60;
  timerText.value = `Time Remaining: ${minutes}:${seconds
      .toString()
      .padStart(2, "0")} seconds`;
}

async function submitOTP() {
  if (!otp.value) {
    alert('Please enter the OTP.');
    return;
  }

  try {
    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mail: email.value,
        password: otp.value,
        Type: 'otp'
      }),
    });

    const data = await response.json();

    if (response.ok) {
      if (data.type === 'Admin') {
        router.push(`/adminDashboard/${encodeURIComponent(email.value)}`);
      } else {
        router.push(`/userDashboard/${encodeURIComponent(email.value)}`);
      }
    } else {
      errorMessage.value = `Warning: ${data.message || 'Invalid email or password!'} Relogin Again! .....`;
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  } catch (error) {
    console.error('Error:', error);
    errorMessage.value = 'Server error. Please try again.';
  }
}
</script>

<style scoped>
#Background {
  background-color: #f5f5f5;
  height: 100vh;
}

sup {
  color: red;
  font-size: 1em;
}

#Header {
  margin-bottom: 5vh;
  text-align: center;
  font-size: 1.35em;
  font-family: verdana;
}

#Main {
  border: 1px solid lightgray;
  border-radius: 1.25vh;
  background-color: white;
  width: 75%;
  height: 70vh;
  margin-top: 19vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  box-shadow: 0px 1em 1em rgba(0.4, 0.4, 0.4, 0.4);
}

.DataHeading {
  border-radius: 0.25em;
  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.15em;
  width: 95%;
}

label {
  margin-left: 1%;
}

input,
select {
  border: 1px solid lightgray;
  border-radius: 0.25em;
  background-color: #f8f8f8;
  font-size: 1.1em;
  margin-left: 1%;
  text-align: justify;
  height: 5.5vh;
  width: 98%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

#SendOTP {
  margin-left: 1%;
  margin-top: 2vh;
  margin-bottom: 3vh;
  color: white;
  border: 1px solid #0066ff;
  border-radius: 0.5vh;
  height: 5vh;
  width: 12%;
  font-size: 1.25em;
  background-color: #0066ff;
  cursor: pointer;
}

#SendOTP:disabled {
  background-color: #b0c7ff;
  cursor: not-allowed;
}

#Submit {
  margin-left: 1%;
  margin-top: 2vh;
  margin-bottom: 3vh;
  color: white;
  border: 1px solid #0066ff;
  border-radius: 0.5vh;
  height: 5vh;
  width: 12%;
  font-size: 1.25em;
  background-color: #0066ff;
  cursor: pointer;
}
</style>
