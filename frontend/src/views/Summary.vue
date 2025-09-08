<template>
  <div id="Background">
    <br>
    <h1 style="text-align: center; color: White;"><u> Summary For {{ name }} ({{ mail }}) </u></h1>

    <div id="MainBackground">
      <div id="MainBackground-1">
        <h2 style="text-align: center; margin-top: 18vh; font-family: Palatino; font-size: 2rem; color: white;">Overall Evaluation</h2>
        <table style="height: 30vh; margin-left: 7%; width: 90%;">
          <tbody>
          <tr>
            <th style="background-color: lightgray;">&nbsp; Total Quizzes</th>
            <td style="background-color: lightgray;">&nbsp; {{ data1?.TotalQuiz }}</td>
          </tr>
          <tr>
            <th style="background-color: white;">&nbsp; Total Questions</th>
            <td style="background-color: white;">&nbsp; {{ data1?.TotalQuestions }}</td>
          </tr>
          <tr>
            <th style="background-color: lightgray;">&nbsp; Max. Marks</th>
            <td style="background-color: lightgray;">&nbsp; {{ data1?.MaxMarks }}</td>
          </tr>
          <tr>
            <th style="background-color: white;">&nbsp; Obtained Marks</th>
            <td style="background-color: white;">&nbsp; {{ data1?.userMarks }}</td>
          </tr>
          <tr>
            <th style="background-color: lightgray;">&nbsp; Overall Success Rate</th>
            <td style="background-color: lightgray;">&nbsp; {{ (data1?.userMarks * 100 / data1?.MaxMarks).toFixed(2) }}%</td>
          </tr>
          </tbody>
        </table>


        <h2 style="text-align: center; margin-top: 30vh; font-family: Palatino; font-size: 2rem; color: white;">Last - 10 Quizzes Evaluation</h2>
        <table style="margin-left:7%; margin-top:3vh; height: 30vh; width: 90%;">
          <thead>
          <tr style="background-color: lightgray; text-align: center;">
            <th style="width:20%; text-align: center; padding: 1% 1% 1% 1%;">Date</th>
            <th style="width:12%; text-align: center; padding: 1% 1% 1% 1%;">Subject</th>
            <th style="width:12%; text-align: center; padding: 1% 1% 1% 1%;">Total Questions</th>
            <th style="width:12%; text-align: center; padding: 1% 1% 1% 1%;">Max. Marks</th>
            <th style="width:12%; text-align: center; padding: 1% 1% 1% 1%;">Obt. Marks</th>
            <th style="width:12%; text-align: center; padding: 1% 1% 1% 1%;">Success Rate</th>
          </tr>
          </thead>
          <tbody>
          <tr v-if="data2" v-for="(time, index) in data2.Time" :key="index" :style="{'background-color': index % 2 === 0 ? 'white' : 'lightgray'}">
            <td style="width:20%; text-align: center;">&nbsp; {{ time }}</td>
            <td style="width:15%; padding: 1% 1% 1% 1%;"> {{ data2.QuizSubject[index] }} </td>
            <td style="width:15%; text-align: center; padding: 1% 1% 1% 1%;"> {{ data2.TotalQuestions[index] }} </td>
            <td style="width:15%; text-align: center; padding: 1% 1% 1% 1%;"> {{ data2.MaxMarks[index] }} </td>
            <td style="width:15%; text-align: center; padding: 1% 1% 1% 1%;"> {{ data2.userMarks[index] }} </td>
            <td style="width:15%; text-align: center; padding: 1% 1% 1% 1%;"> {{ ((data2.userMarks[index] * 100) / data2.MaxMarks[index]).toFixed(2) }}% </td>
          </tr>
          </tbody>
        </table>
        <br><br><br>
      </div>

      <div id="MainBackground-2" height="500px" width="500px">
        <img id="overallEvaluation" :src="`/frontend/src/assets/${data1?.Mail}_overallEvaluation.png`" style="border: 2px solid white; margin-top:15%; margin-left: 5%; object-fit: cover;" height="50%" width="90%" />
        <img id="currentWeekEvaluation" :src="`/frontend/src/assets/${data1?.Mail}_10DaysEvaluation.png`" style="border: 2px solid white; margin-left: 5%; margin-top:16vh; object-fit: cover; padding: 0rem 1rem 0rem 0rem; height: 78vh;" width="90%" />
      </div>
    </div>

    <br><br><br><br><br><br>

    <hr>

    <div id="Footer">
      <p style = "color: white;"> Shahzada Moon | Copyright, 2025 </p>
      <br>
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
  background-image: url("/frontend/src/assets/user-03.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

.HeaderLinks {
  float:right;
  color:white;
  padding:2% 1.5%;
  font-size:1.3em;
  text-decoration:None;
}

.HeaderLinks:hover {
  color: white;
  border-bottom: 1px solid white;
  padding-bottom: 0.25em;
  text-decoration:None;
}

.profile-dropdown {
  position: relative;
  display: inline-block;
  float: right;
  margin: 1.65vh 1vh 0 0;
  cursor: pointer;
}

.profile-dropdown a {
  color: white;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  height: 5vh;
  width: 100%;
  background-color: black;
  padding: 1vh 1vh 1vh 1.3vh;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.5s ease;
}

.profile-dropdown:hover a {
  border: 2px solid white;
  border-color: white;
}

.dropdown-list {
  display: none;
  position: absolute;
  top: 100%; /* right below the profile icon */
  right: 0;
  background-color: transparent;
  min-width: 175px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  border-radius: 0.75rem;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 1001;
}

.profile-dropdown:hover .dropdown-list {
  display: block;
}



.dropdown-list li a {
  color: white;
  padding: 10px 15px;
  display: block;
  text-decoration: none;
  font-size: 0.9rem;
}

.dropdown-list li a:hover {
  background-color: black;
  font-size: 1rem;
}

/*
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

  */

#MainBackground {
  display: flex;
  min-height: 100vh;
  height: auto;
  width : 100%;
}

#MainBackground-1, #MainBackground-2 {
  flex: 1; /* Distribute space equally */
  height: 100%;
}

#MainBackground-1 {
}

#MainBackground-2 {
}

table {
  border-collapse: collapse;
  border-radius: 5px;
  width: 80%;
  font-size: 1em;
  margin-top: 3%;
  margin-left: auto;
  align-content: center;
  box-sizing: border-box;
  box-shadow: 0px 5px 20px rgba(0, 0, 0.6, 0.8);
}

th {
  border: 1px solid black;
  text-align: left;
  width: 60%;
  height: 5vh;
}

td {
  border: 1px solid black;
  text-align: left;
  width: 25%;
  height: 5vh;
}

#Footer{
  text-align:left;
  margin-left:1.5em;
  font-size:1em;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

interface UserData {
  Name: string;
  UserName: string;
  QuizName: string;
  QuizSubject: string;
  QuizTopic: string;
  TotalQuiz: number;
  TotalQuestions: number;
  userMarks: number;
  MaxMarks: number;
  Mail: string;
  Time: string;
}

interface QuizData {
  QuizSubject: string[];
  TotalQuestions: number[];
  userMarks: number[];
  MaxMarks: number[];
  SuccessRate: string[];
  Time: string[];
}

const route = useRoute();
const router = useRouter();
const data1 = ref<UserData | null>(null);
const data2 = ref<QuizData | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);
const mail = ref('');
const name = ref('');
const username = ref('');

const fetchData = async () => {
  try {
    loading.value = true;
    error.value = null;

    const email = Array.isArray(route.params.email)
        ? route.params.email[0]
        : route.params.email;

    if (!email || typeof email !== 'string') {
      throw new Error('Invalid email parameter');
    }

    name.value = route.params.name;

    mail.value = email;

    const response = await fetch(`http://localhost:8000/userDashboard/${encodeURIComponent(email)}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const responseData = await response.json();

    // Destructure data1 and data2 from the response
    data1.value = responseData[0]; // data1 is the first object
    data2.value = responseData[1]; // data2 is the second object

    name.value = data1.value.Name;
    username.value = data1.value.UserName;

    console.log("Data loaded:", data1.value, data2.value);

  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An unknown error occurred';
    console.error("Fetch error:", err);
  } finally {
    loading.value = false;
  }
};


const downloadPDF = async (): Promise<void> => {
  try {
    const response: Response = await fetch(`http://localhost:8000/pdf_report/${encodeURIComponent(mail.value)}/${username}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const pdf: Blob = await response.blob();
    const url: string = window.URL.createObjectURL(pdf);

    const a: HTMLAnchorElement = document.createElement("a");
    a.href = url;
    a.download = `${name.value} Report.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Failed to download HTML Report:", error);
  }
};


const downloadHTML = async (): Promise<void> => {
  try {
    const response: Response = await fetch(`http://localhost:8000/html_report/${encodeURIComponent(mail.value)}/${username}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const pdf: Blob = await response.blob();
    const url: string = window.URL.createObjectURL(pdf);

    const a: HTMLAnchorElement = document.createElement("a");
    a.href = url;
    a.download = `${name.value} Report.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Failed to download HTML Report:", error);
  }
};


const downloadCSV = async (): Promise<void> => {
  try {
    const response: Response = await fetch(`http://localhost:8000/csv_data/${encodeURIComponent(mail.value)}/${username}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const pdf: Blob = await response.blob();
    const url: string = window.URL.createObjectURL(pdf);

    const a: HTMLAnchorElement = document.createElement("a");
    a.href = url;
    a.download = `${name.value} Quiz Data.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Failed to download CSV Data:", error);
  }
};




onMounted(fetchData);





// Logout function
const logout = () => {
  // Clear auth token from localStorage
  localStorage.removeItem('auth_token');

  const response: Response = fetch(`http://localhost:8000/logout/${encodeURIComponent(mail.value)}`);

  // Redirect to the login page using Vue Router
  router.push('/login');  // Redirect to the login route
};
</script>