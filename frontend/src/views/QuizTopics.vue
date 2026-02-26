<template>
  <form action = "{{url_for('prepration', subjects=subjects)}}" method = "POST">
      <div id="Header">
        <h1>{{ name }}'s Dashboard</h1>
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
        <a class="HeaderLinks" :href="`/quiz/${email}`">Quiz</a>
        <a class="HeaderLinks" :href="`/userDashboard/${email}`">Dashboard</a>
      </div>

      <div id="background">
          <div id="main">
              <h2 style="text-align: center; margin-top: 5vh; color: #A93226; font-size: 2em;">Ongoing Quizzes For {{ subject }}</h2>
              <table style="height: 30vh; margin-top: 7vh; margin-left: auto; margin-right: auto; width: 95%; color: black; font-size: 1.25em; border-collapse: collapse;">
                  <tbody>
                      <tr style="background-color: #F39C12; color: Black;">
                          <th style="background-color: transparent; width: 7%; font-weight: bold;  font-size: 1.35em; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center; color: Black;">Sr.No.</th>
                          <th style="background-color: transparent; width: 35%; font-weight: bold;  font-size: 1.35em; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center;">Quiz Name</th>
                          <th style="background-color: transparent; width: 28%; font-weight: bold;  font-size: 1.35em; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center;">Quiz Topic</th>
                          <th style="background-color: transparent; width: 7%; font-weight: bold;  font-size: 1.35em; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center;">Total Questions</th>
                          <th style="background-color: transparent; width: 6%; font-weight: bold;  font-size: 1.35em; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center;">Duration</th>
                          <th style="background-color: transparent; width: 17%; font-weight: bold;  font-size: 1.35em; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center;">Action</th>
                      </tr>
                      <tr v-for="(topic, index) in topics" :key="index" v-if="topics.length">
                          <td style="background-color: transparent; width: 7%; height: 6vh; text-decoration: none; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center;">{{ index + 1 }}. </td>
                          <td style="background-color: transparent; width: 35%; height: 6vh; padding: 0.1vh 2vh 0.1vh 2vh; text-align: justify; color: #1447E6;"><a>{{ names[index] }}</a></td>
                          <td style="background-color: transparent; width: 28%; height: 6vh; text-decoration: none; padding: 0.1vh 2vh 0.1vh 2vh; text-align: justify; color: #1447E6;">{{ topic }}</td>
                          <td style="background-color: transparent; width: 7%; height: 6vh; text-decoration: none; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center; color: #1447E6;">{{ totalQuestions[index] }}</td>
                          <td style="background-color: transparent; width: 6%; height: 6vh; text-decoration: none; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center; color: #1447E6;">{{ time[index] }} sec</td>
                          <td v-if="scores[index] === ''" style="background-color: transparent; width: 17%; height: 6vh; text-decoration: none; padding: 0.1vh 2vh 0.1vh 2vh; text-align: justify;">
                            <a :href="`/timedQuiz/${ subject }/${ topic }/${ names[index] }/${ name }/${ username }/${ mail }`">
                              <button type="button" id="start"> <a :href="`/timedQuiz/${ subject }/${ topic }/${ names[index] }/${ name }/${ username }/${ mail }`" style="text-decoration: none; color: white;">Start</a></button>
                            </a>
                          </td>
                          <td v-else style="background-color: transparent; width: 17%; height: 6vh; text-decoration: none; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center; color: Maroon;">Score: {{scores[index]}}%</td>
                      </tr>
                  </tbody>
              </table>
              <br><br><br>
          </div>
      </div>
  </form>
</template>

<style scoped>
#background {
  background-color: #C88141;
  height: 100vh;
  width: 100%;
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

#main {
  z-index: 500;
  position: relative;
  overflow-y: auto;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 0.5em;
  border-collapse: collapse;
  width: 100%;
  height: 100vh;
  margin-top: 0vh;
  margin-left: auto;
  margin-right: auto;
  background-image: url("/frontend/src/assets/Image-01.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}

th {
  border: 2px solid black;
  text-align: left;
  width: 7%;
  font-family: Courier, monospace;
  font-size: 1.5em;
}

td {
  border: 2px solid black;
  text-align: justify;
  width: 90%;
  font-family: Courier, monospace;
  font-size: 1em;
}

tr:nth-child(even) {
  background-color: white;
  color: black;
}

tr:nth-child(odd) {
  background-color: #CCD1D1;
  color: black;
}

#start {
  width: 80%;
  height: 5vh;
  margin-left: 10%;
  border: 0.1rem solid white;
  border-radius: 0.35rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.25rem;
  color: white;
  box-shadow: 0.5rem 0.75rem 0.35rem rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to right, #339900, #339933);
}

</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {useRoute, useRouter} from 'vue-router'

interface QuizTopicsResponse {
  subject: string;
  topics: string[];
}

const router = useRouter();
const route = useRoute();
const subject = ref<string>('')
const topics = ref<string[]>([])
const names = ref<string[]>([])
const totalQuestions = ref<string[]>([])
const time = ref<string[]>([])
const scores = ref<string[]>([])
const mail = ref<string[]>([])
const email = ref<string>("")
const name = ref<string>("")
const username = ref<string>("")
const loading = ref<boolean>(true)
const error = ref<string | null>(null)

const fetchTopics = async () => {
  try {
    loading.value = true;
    error.value = null;

    email.value = route.params.mail as string;
    name.value = route.params.name;
    username.value = route.params.username;

    const response = await fetch(`http://localhost:8000/quizTopics/${route.params.subject}/${route.params.mail}/`);
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data: QuizTopicsResponse = await response.json();
    if (data && data.topics && data.names) {
      subject.value = data.subject || route.params.subject as string;
      topics.value = data.topics;
      names.value = data.names;
      totalQuestions.value = data.totalQuestions;
      time.value = data.time;
      scores.value = data.scores;
      mail.value = email.value;
    } else {
      throw new Error('Invalid data received');
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occurred';
    console.error('Fetch error:', err);
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

onMounted(() => {
  fetchTopics()
})

// Logout function
const logout = () => {
  // Clear auth token from localStorage
  localStorage.removeItem('auth_token');

  const response: Response = fetch(`http://localhost:8000/logout/${encodeURIComponent(email.value)}`);

  // Redirect to the login page using Vue Router
  router.push('/login');  // Redirect to the login route
};

</script>