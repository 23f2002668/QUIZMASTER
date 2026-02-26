<template>
  <div id="Background">
    <br>
    <div id="Header">
      <h1>Registered Users</h1>
      <a class="HeaderLinks" href="/logout" @click.prevent="logout">Logout</a>
      <a class="HeaderLinks" href="#" @click.prevent="search">Search</a>
      <a class="HeaderLinks" href="/leaderBoard">Leaderboard</a>
      <a class="HeaderLinks" :href="`/remove/${email}`">Users</a>
      <a class="HeaderLinks" :href="`/newQuiz/${email}`">Quizzes</a>
      <a class="HeaderLinks" :href="`/adminDashboard/${email}`">Dashboard</a>
    </div>

    <div class="main">
      <div id="search_quiz" v-show="showSearch" style="display: none;">
        <br>
        <input type="text" v-model="keyword" id="key" placeholder="Search Any Name, UserName, Mail, Mobile, Qualification, DOB, Gender, Country">
        <button type="button" id="edit" @click.prevent="search_keyword"> Search </button>
        <br><br><br><br>

        <table>
          <thead>
          <tr style="background-color: lightgray; text-align: center;">
            <th style="width: 9.09%; height: 7vh; text-align: center; font-size: 1.25em;">Sr. No.</th>
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
          <tr v-for="(user, index) in user_data" :key="index">
            <td style="width: 9.09%;">{{ index + 1 }}</td>
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
      </div>

      <div v-show="showMain">
        <table>
          <thead>
          <tr style="background-color: lightgray; text-align: center;">
            <th style="width: 20%; height: 7vh; text-align: center; font-size: 1.5em;">Sr. No.</th>
            <th style="width: 20%; height: 7vh; text-align: center; font-size: 1.5em;">Name</th>
            <th style="width: 20%; height: 7vh; text-align: center; font-size: 1.5em;">Username</th>
            <th style="width: 20%; height: 7vh; text-align: center; font-size: 1.5em;">Mail</th>
            <th style="width: 20%; height: 7vh; text-align: center; font-size: 1.5em;">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(user, index) in userData" :key="index">
            <td style="width: 20%;">{{ index + 1 }}</td>
            <td style="width: 20%;">{{ user.Name }}</td>
            <td style="width: 20%;">{{ user.UserName }}</td>
            <td style="width: 20%;">{{ user.Mail }}</td>
            <th style="width: 20%; height: 7vh; text-align: center; font-size: 1.25em;"><button type="button" style="background-color: #4682B4; color: white; width: 75%; height: 6vh; border: 2px solid white; border-radius: 7px; font-size: 1em; font-family: verdana;"><a :href="`/summary/${user.Name}/${encodeURIComponent(user.Mail)}`" style="text-decoration: none; color: White;">View Summary</a></button><button @click="removeUser(user.Mail)" style="background-color: red; color: white; width: 75%; height: 6vh; border: 2px solid white; border-radius: 7px; font-size: 1em; font-family: verdana;">Remove</button></th>
          </tr>
          </tbody>
        </table>
      </div>
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
  background-image: url("/assets/user.jpeg");
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
  margin-top: 8vh;
  margin-left: auto;
  margin-right: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
  font-size: 1em;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
}

th {
  border: 1px solid black;
  text-align: center;
  width: 60%;
  font-weight: bold;
  font-family: 'Palatino';
}

td {
  border: 1px solid black;
  text-align: center;
  width: 25%;
  height:5vh;
  font-size: 1.25rem;
  font-family: 'Palatino';
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}

tr:nth-child(even) {
  background-color: lightgray;
}

tr:nth-child(odd) {
  background-color: white;
}

#key {
  border: 2px solid black;
  border-radius: 0.5rem;
  font-family: 'Courier New';
  font-size: 1.2rem;
  width: 88%;
  height: 5vh;
  padding: 0rem 1rem 0rem 1rem;
}

#edit {
  width: 10%;
  height: 5vh;
  margin-left: 2%;
  border: 0.1rem solid white;
  border-radius: 0.35rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.25rem;
  color: Black;
  box-shadow: 0.5rem 0.75rem 0.35rem rgba(0, 0, 0, 0.2);
  background-color: Orange;
}

</style>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Leaderboard from "./Leaderboard.vue";

interface UserData {
  Name: string;
  UserName: string;
  Mail: string;
}

const route = useRoute();
const router = useRouter();
const userData = ref<UserData[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);
const email = ref<string>('');

const fetchData = async () => {
  try {
    email.value = Array.isArray(route.params.mail)
        ? route.params.mail[0]
        : route.params.mail;

    const response = await fetch("http://localhost:8000/remove");
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const responseData = await response.json();

    // Log the entire response to inspect the structure
    console.log("Response Data:", responseData);

    // Ensure userData is an array and not undefined or null
    if (Array.isArray(responseData.userData)) {
      userData.value = responseData.userData.map((user: any) => ({
        Name: user[0] || 'N/A',
        UserName: user[1] || 'N/A',
        Mail: user[2] || 'N/A',
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


const removeUser = async (email: string) => {
  try {
    const response = await fetch(`http://localhost:8000/removeUser/${email}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to remove user: ${response.statusText}`);
    }

    userData.value = userData.value.filter((user) => user.Mail !== email);

  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An unknown error occurred';
    console.error("Remove user error:", err);
  }
};



const showSearch = ref(false);
const showMain = ref(true);
const showaddbutton = ref(true);

function search() {
  showSearch.value = !showSearch.value;
  showMain.value = !showMain.value;
  showaddbutton.value = !showaddbutton.value;
}


import { ref } from "vue"

const user_data = ref<any[]>([])
const keyword = ref('');

const search_keyword = async () => {
  try {
    const response: Response = await fetch(`http://localhost:8000/search_user/${keyword.value}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    user_data.value = await response.json();

  } catch (error) {
    console.error("Failed to search:", error);
  }
};


// Logout function
const logout = () => {
  // Clear auth token from localStorage
  localStorage.removeItem('auth_token');

  const response: Response = fetch(`http://localhost:8000/logout/${email.value}`);

  // Redirect to the login page using Vue Router
  router.push('/login');  // Redirect to the login route
};
</script>