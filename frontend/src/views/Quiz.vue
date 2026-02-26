<template>
  <form action = "{{url_for('prepration', subjects=subjects)}}" method = "POST">
    <div id="Background">
      <div id="Header">
        <h1 style="float:left; color:white; padding:0.25% 2%; text-decoration:None;">Hey {{ data?.Name }}! It's Quiz Time</h1>
        <div id="profile" class="profile-dropdown">
          <a href="#" style="font-size:2em; border: 1px solid white; border-radius: 15%; height: 7vh; width: 7vh; padding: 1vh 2.75vh 1vh 1.35vh; display: inline-block;">👤</a>
          <ul class="dropdown-list">
            <li><a href="#" @click.prevent="downloadPDF">Export PDF Report</a></li>
            <li><a href="#" @click.prevent="downloadHTML">Export HTML Report</a></li>
            <li><a href="#" @click.prevent="downloadCSV">Export CSV Data</a></li>
            <li><a href="#" @click.prevent="logout">Logout</a></li>
          </ul>
        </div>
        <a class="HeaderLinks" href="/leaderBoard">Leaderboard</a>
        <a class="HeaderLinks" :href="`/quiz/${ data?.Mail }`">Quiz</a>
        <a class="HeaderLinks" :href="`/userDashboard/${ data?.Mail }`">Dashboard</a>
      </div>

      <div id="main">
        <div id="MainHeading" style="margin-top: 7vh; margin-bottom: 10vh; color: black; text-align: center;">
          <img :src="itsQuizTime" style="object-size: cover; width: 100%; height: auto;">
        </div>

        <div id="main-1" align="center" v-if="subjects.length">
          <div v-for="(subject, index) in subjects" :key="index" class="Subject">
            <a :href="`/quizTopics/${ subject.name }/${ data?.Name }/${ data?.UserName }/${ data?.Mail }`" style="text-decoration: None; color: white;">
              <img class="SubjectImg" :src="getImagePath(subject.image)" width="100%" height="200px">
              <hr>
              <div class="SubjectBody">
                <a :href="`/quizTopics/${ subject.name }/${ data?.Name }/${ data?.UserName }/${ data?.Mail }`" style="text-decoration: None; color: white;">{{ subject.name }}</a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
  #Background{
    background-color: #C88141;
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

  #main-1 {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    justify-content: space-evenly;
    width: 90%;
    height: auto;
    margin-left: 5%;
    margin-right: 5%;
  }

  .Subject {
    border: 1px solid white;
    text-align: justify;
    margin-left: 3%;
    margin-bottom: 7vh;
    width: 28%;
    height: 40vh;
    box-sizing: border-box;
    box-shadow: 0px 5px 20px rgba(0, 0, 0.6, 0.8);
  }

  .SubjectName {
    text-align: center;
    font-size: 1.25em;
    border: 1px solid black;
  }

  .SubjectImg {
    height: 33vh;
  }

  .SubjectBody {
    text-align: center;
    font-size: 1.1em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0vh;
    height: 6vh;
    width: 100%;
    text-decoration: None;
    color: white;
  }
  </style>

<script setup lang="ts">
import itsQuizTime from "/frontend/src/assets/Its Quiz Time - 2.webp";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { Ref } from 'vue';

// Define data as a single object or null initially
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
  Message: string;
  Time: string;
}

const router = useRouter();
const route = useRoute();
const data: Ref<UserData | null> = ref(null);
const name = ref('');
const username = ref('');
const userEmail = ref('');

const calculateSuccessRate = (): number => {
  if (!data.value || data.value.TotalQuestions === 0) return 0;
  return Math.round((data.value.userMarks / data.value.TotalQuestions) * 100);
};

onMounted(async () => {
  try {
    userEmail.value = route.params.mail as string;
    const response = await fetch(`http://localhost:8000/userDashboard/${ userEmail.value}`);
    if (!response.ok) throw new Error("Network response was not ok");
    data.value = await response.json();
    data.value = data.value[0]
    name.value = data.value.Name;
    username.value = data.value.UserName;
    console.log('User data:', data.value);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const subjects = ref<{ name: string; image: string }[]>([]);

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:8000/api/subjects");
    const rawData = await response.json();

    console.log("Raw API Data:", rawData); // Check API response

    // Ensure it's an array and convert it to objects
    if (Array.isArray(rawData)) {
      subjects.value = rawData.map((item: [string, string]) => ({
        name: item[0],
        image: item[1],
      }));
    }

    console.log("Formatted Subjects:", subjects.value); // Check formatted data
  } catch (error) {
    console.error("Error fetching subjects:", error);
  }
});


const getImagePath = (imageName: string): string => {
  return `/uploads/${imageName}`; // Loads images from /public/assets/
};


const downloadPDF = async (): Promise<void> => {
  try {
    const response: Response = await fetch(`http://localhost:8000/pdf_report/${encodeURIComponent(userEmail.value)}/${username.value}`);
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
    const response: Response = await fetch(`http://localhost:8000/html_report/${encodeURIComponent(userEmail.value)}/${username.value}`);
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
    const response: Response = await fetch(`http://localhost:8000/csv_data/${encodeURIComponent(userEmail.value)}/${username.value}`);
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


// Use router instance from Vue Router
//const router = useRouter();

// Logout function
// Logout function
const logout = () => {
  // Clear auth token from localStorage
  localStorage.removeItem('auth_token');

  const response: Response = fetch(`http://localhost:8000/logout/${encodeURIComponent(userEmail.value)}`);

  // Redirect to the login page using Vue Router
  router.push('/login');  // Redirect to the login route
};
</script>