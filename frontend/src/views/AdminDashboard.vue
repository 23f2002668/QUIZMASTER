<template>
  <div id="Background">
    <br>
    <div id="Header">
      <h1>Admin's Dashboard</h1>
      <a class="HeaderLinks" href="/logout" @click.prevent="logout">Logout</a>
      <a class="HeaderLinks" href="/leaderBoard">Leaderboard</a>
      <a class="HeaderLinks" :href="`/remove/${email}`">Users</a>
      <a class="HeaderLinks" :href="`/newQuiz/${email}`">Quizzes</a>
      <a class="HeaderLinks" :href="`/adminDashboard/${email}`">Dashboard</a>
    </div>

    <div class="main">
      <h2 style="text-align: center; margin-top: 10vh; color: white;">All Users</h2>
      <table>
        <thead>
        <tr style="background-color: lightgray; text-align: center;">
          <th style="width: 9.09%; height: 7vh; text-align: center; font-size: 1.25em;">Sr. No.</th>
          <th style="width: 9.09%; height: 7vh; text-align: center; font-size: 1.25em;">Type</th>
          <th style="width: 9.09%; height: 7vh; text-align: center; font-size: 1.25em;">Name</th>
          <th style="width: 9.09%; height: 7vh; text-align: center; font-size: 1.25em;">Username</th>
          <th style="width: 9.09%; height: 7vh; text-align: center; font-size: 1.25em;">Mail</th>
          <th style="width: 9.09%; height: 7vh; text-align: center; font-size: 1.25em;">Mobile</th>
          <th style="width: 9.09%; height: 7vh; text-align: center; font-size: 1.25em;">Qualification</th>
          <th style="width: 9.09%; height: 7vh; text-align: center; font-size: 1.25em;">DOB</th>
          <th style="width: 9.09%; height: 7vh; text-align: center; font-size: 1.25em;">Gender</th>
          <th style="width: 9.09%; height: 7vh; text-align: center; font-size: 1.25em;">Country</th>
          <th style="width: 9.09%; height: 7vh; text-align: center; font-size: 1.25em;">Time</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in userData" :key="index">
            <td style="width: 9.09%;">{{ index + 1 }}</td>
            <td style="width: 9.09%;">{{ user.Type }}</td>
            <td style="width: 9.09%;">{{ user.Name }}</td>
            <td style="width: 9.09%;">{{ user.UserName }}</td>
            <td style="width: 9.09%;">{{ user.Mail }}</td>
            <td style="width: 9.09%;">{{ user.Mobile }}</td>
            <td style="width: 9.09%;">{{ user.Qualification }}</td>
            <td style="width: 9.09%;">{{ user.DOB }}</td>
            <td style="width: 9.09%;">{{ user.Gender }}</td>
            <td style="width: 9.09%;">{{ user.Country }}</td>
            <td style="width: 9.09%;">{{ user.Time }}</td>
          </tr>
        </tbody>
      </table>
      <br><br><br><br><br>
    </div>

    <div class="main">
      <h2 style="text-align: center; margin-top: 10vh; color: white;">All Quizzes</h2>
      <table>
        <thead>
        <tr style="background-color: lightgray; text-align: center;">
          <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Sr. No.</th>
          <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Name</th>
          <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Subject</th>
          <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Topic</th>
          <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Total Questions</th>
          <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Max. Marks</th>
          <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Time</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(quiz, index) in quizData" :key="index">
          <td style="width: 14.29%;">{{ index + 1 }}</td>
          <td style="width: 14.29%;">{{ quiz.QuizName }}</td>
          <td style="width: 14.29%;">{{ quiz.Subject }}</td>
          <td style="width: 14.29%;">{{ quiz.Topic }}</td>
          <td style="width: 14.29%;">{{ quiz.TotalQuestions }}</td>
          <td style="width: 14.29%;">{{ quiz.TotalQuestions }}</td>
          <td style="width: 14.29%;">{{ quiz.Time }}</td>
        </tr>
        </tbody>
      </table>
      <br><br><br><br><br>
    </div>
  </div>
</template>

<style scoped>
:root {
  font-size: 16px; /* Reset root font */
}

body {
  zoom: 1; /* Prevent any browser zoom scaling */
}
#Background{
  background-image: url("/assets/admin.jpeg");
  min-height: 100vh;
}

#Header{
  z-index:1000;
  position:fixed;
  top:0;
  width:100%;
  height:10vh;
  background-color: black;
}

h1 {
  float:left;
  color:white;
  padding:0.25% 2%;
  text-decoration:None;
}

.HeaderLinks {
  float:right;
  color:white;
  padding:2% 1.5%;
  font-size:1.3em;
  text-decoration:None;
}

.HeaderLinks:hover {
  color: white;
  border-bottom: 3px solid white;
  padding-bottom: 0.25em;
  text-decoration:None;
}

/* Profile Dropdown */
#profile {
  position: relative;
}

#profile ul {
  display: none;
  position: absolute;
  right: 0;
  background-color: black;
  width: 200px;
  padding: 0% 0%;
  margin: 5% 0%;
}

#profile:hover ul {
  display: block;
}

#profile ul li {
  border-bottom: 1px solid #fff;
}

#profile ul li a {
  color: white;
  padding: 10px;
  text-decoration: none;
  display: block;
}

#profile ul li a:hover {
  background-color: gray;
}

.main {
  height: auto;
  width : 95%;
  text-align: center;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
  font-size: 1em;
  margin-top: 3%;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
}

th {
  border: 1px solid black;
  text-align: center;
  width: 60%;
}

td {
  border: 1px solid black;
  text-align: center;
  width: 25%;
}

tr:nth-child(even) {
  background-color: lightgray;
}

tr:nth-child(odd) {
  background-color: white;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Leaderboard from "./Leaderboard.vue";

interface UserData {
  Type: string;
  Name: string;
  UserName: string;
  Mail: string;
  Mobile: string;
  Qualification: string;
  DOB: string;
  Gender: string;
  Country: string;
  Time: string;
}

interface QuizData {
  QuizName: string;
  Subject: string;
  Topic: string;
  TotalQuestions: number;
  Time: string;
}

const route = useRoute();
const router = useRouter();
const userData = ref<UserData[]>([]);
const quizData = ref<QuizData[]>([]);
const admin = ref<string>('');
const loading = ref(true);
const error = ref<string | null>(null);
const email = ref<string>('');

const fetchData = async () => {
  try {
    email.value = Array.isArray(route.params.email)
        ? route.params.email[0]
        : route.params.email;

    if (!email.value || typeof email.value !== 'string') {
      throw new Error('Invalid email parameter');
    }

    const response = await fetch(`http://localhost:8000/adminDashboard/${encodeURIComponent(email.value)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const responseData = await response.json();

    // Log the entire response to inspect the structure
    console.log("Response Data:", responseData);

    // Ensure responseData and admin exist
    if (responseData.admin) {
      admin.value = responseData.admin;
    } else {
      console.error("Admin data is missing in the response.");
      admin.value = '';  // Fallback if admin is missing
    }

    // Ensure userData is an array and not undefined or null
    if (Array.isArray(responseData.userData)) {
      quizData.value = responseData.quizData.map((quiz: any) => ({
        QuizName: quiz[0] || 'N/A',
        Subject: quiz[1] || 'N/A',
        Topic: quiz[2] || 'N/A',
        TotalQuestions: quiz[3] || 'N/A',
        Time: quiz[4] || 'N/A',
      }));

      userData.value = responseData.userData.map((user: any) => ({
        Type: user[0] || 'N/A',
        Name: user[1] || 'N/A',
        UserName: user[2] || 'N/A',
        Mail: user[3] || 'N/A',
        Mobile: user[4] || 'N/A',
        Qualification: user[5] || 'N/A',
        DOB: user[6] || 'N/A',
        Gender: user[7] || 'N/A',
        Country: user[8] || 'N/A',
        Time: user[9] || 'N/A',
      }));

      console.log(quizData);

    } else {
      // If userData is not an array or is undefined, log an error and fallback
      console.error("userData is not an array or is undefined", responseData.userData);
      userData.value = [];  // Set an empty array to avoid further errors
    }

    console.log("User Data:", userData.value);

  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An unknown error occurred';
    console.error("Fetch error:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchData);

// Logout function
const logout = () => {
  // Clear auth token from localStorage
  localStorage.removeItem('auth_token');

  const response: Response = fetch(`http://localhost:8000/logout/${email.value}`);

  // Redirect to the login page using Vue Router
  router.push('/login');  // Redirect to the login route
};
</script>