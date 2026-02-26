<template>
  <form action = "{{url_for('prepration', subjects=subjects)}}" method = "POST">
    <div id="Background">
      <br>
      <div id="Header">
        <h1>Quiz Subjects</h1>
        <a class="HeaderLinks" href="/logout" @click.prevent="logout">Logout</a>
        <a class="HeaderLinks" href="#" @click.prevent="search">Search</a>
        <a class="HeaderLinks" href="/leaderBoard">Leaderboard</a>
        <a class="HeaderLinks" :href="`/remove/${email}`">Users</a>
        <a class="HeaderLinks" :href="`/newQuiz/${email}`">Quizzes</a>
        <a class="HeaderLinks" :href="`/adminDashboard/${email}`">Dashboard</a>
      </div>
      <div id="main" style="margin-top: 10vh; width: 100%;">
        <div id="search_quiz" v-show="showSearch" style="display: none;">
            <input type="text" v-model="keyword" placeholder="Search Any Subject, Chapter, Quiz Here" style="border: 2px solid black; margin-left: 2.5%; font-family: 'Courier New'; font-size: 1rem; width: 82%;">
            <button type="button" id="edit" @click.prevent="search_keyword" style="width: 10%; box-shadow: 0.5rem 0.75rem 0.35rem rgba(0, 0, 0, 0.2); background-image: linear-gradient(to right, #175E25, #016630, #178236, #2AA63E, #31C950);"> Search </button>
            <br>

            <table>
              <thead>
              <tr style="background-color: lightgray; text-align: center;">
                <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Sr. No.</th>
                <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Subject</th>
                <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Topic</th>
                <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Name</th>
                <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Total Questions</th>
                <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Duration</th>
                <th style="width: 14.29%; height: 7vh; text-align: center; font-size: 1.25em;">Created On</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(quiz, index) in quizData" :key="index">
                <td style="width: 14.29%;">{{ index + 1 }}</td>
                <td style="width: 14.29%;">{{ quiz.Subject }}</td>
                <td style="width: 14.29%;">{{ quiz.Chapter }}</td>
                <td style="width: 14.29%;">{{ quiz.Name }}</td>
                <td style="width: 14.29%;">{{ quiz.TotalQuestions }}</td>
                <td style="width: 14.29%;">{{ quiz.Duration }}</td>
                <td style="width: 14.29%;">{{ quiz.Time }}</td>
              </tr>
              </tbody>
            </table>
        </div>

        <br><br>

        <div id="main-1" v-show="showMain" align="center" v-if="subjects.length">
          <div v-for="(subject, index) in subjects" :key="index" class="Subject">
              <div>
                  <a :href="`/addChapter/${subject.name}/${email}`" style="text-decoration: None; color: white;">
                      <img class="SubjectImg" :src="getImagePath(subject.image)" width="100%" height="30vh" style="padding: 2vh 1.5vh 0vh 1.5vh;">
                  </a>
              </div>

              <div id="SubjectBody" style="height: 6vh; display: flex; align-items: center; justify-content: center; margin-top: 0vh;">
                  <a :href="`/addChapter/${subject.name}/${email}`">{{ subject.name }}</a>
              </div>

              <div class="action" style="height: 6vh; display: flex; align-items: center; justify-content: center; margin-top: 0vh;">
                  <button id="edit" @click.prevent="edit(subject.name)">Edit</button><button id="delete" @click.prevent="Delete(subject.name)">Delete</button>
              </div>
          </div>
        </div>

        <div id="newSubjectButton" v-show="showaddbutton">
            <button id="addSubjectButton" v-show="addButtons.addSubjectButton" @click.prevent="showAddSubjectButton"> + Add Subject </button>
        </div>

        <div id="addSubject" v-show="addButtons.addSubject">
          <input type="text" v-model="subject" id="subject" name="subject" placeholder="Enter Subject Name"  autofocus required>
          <input type="file" @change="handleImageUpload" accept="image/*" placeholder="Upload Image">
          <button id="addButton" @click.prevent="add"> + Add </button>
        </div>
        <br>

      </div>
    </div>
  </form>
</template>

<style scoped>
#Background{
  background-color: #CCD1D1;
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

#main-1 {
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  justify-content: space-evenly;
  height: auto;
  margin-left: 4%;
  margin-right: 5%;
}

.Subject {
  border: 1px solid black;
  text-align: justify;
  margin-left: 2%;
  margin-bottom: 7vh;
  width: 29.33%;
  height: 46vh;
  box-sizing: border-box;
  box-shadow: 0px 5px 20px rgba(0, 0, 0.6, 0.8);
  background-color: White;
}

.SubjectName {
  text-align: center;
  font-size: 1.25em;
  //border: 1px solid black;
}

.SubjectImg {
  height: 33vh;
  //border-bottom: 1px solid white;
}

a {
  text-decoration: none;
  color: White;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}

#SubjectBody {
  width: 95%;
  height: 5vh;
  margin-left: 1vh;
  margin-right: 0.5vh;
  border: 0.1rem solid white;
  border-radius: 0.35rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
  text-align: center;
  box-shadow: 0.5rem 0.75rem 0.35rem rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to right, #175E25, #016630, #178236, #2AA63E, #31C950);
}

#edit {
  width: 80%;
  height: 5vh;
  margin-left: 1vh;
  margin-right: 0.5vh;
  border: 0.1rem solid white;
  border-radius: 0.35rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.25rem;
  color: white;
  box-shadow: 0.5rem 0.75rem 0.35rem rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to right, #193CB8, #1447E6, #155DFC, #2B7FFF);
}

#delete {
  width: 80%;
  height: 5vh;
  margin-left: 0.5vh;
  margin-right: 1vh;
  border: 0.1rem solid white;
  border-radius: 0.35rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.25rem;
  color: white;
  box-shadow: 0.5rem 0.75rem 0.35rem rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to right, #C11007, #E7180B);
}


#addSubjectButton{
  margin-left: 40%;
  margin-right: auto;
  margin-top: 8vh;
  margin-bottom: 7vh;
  color:Black;
  border:1px solid #9F9FA9;
  border-radius:0.5vh;
  height:5vh;
  width:20%;
  font-size:1.5em;
  background-image:linear-gradient(#FAFAFA, #F4F4F5, #E4E4E7, #D4D4D8);
  box-shadow: 0px 4px 6px rgba(0, 0, 0.7, 0.7);
}

#addSubject {
  margin-left: 30%;
  margin-right: auto;
  margin-bottom: 8vh;
  color:Black;
  border:1px solid #9F9FA9;
  border-radius:0.5vh;
  height:20vh;
  width:40%;
  font-size:1.5em;
  background-image:linear-gradient(#FAFAFA, #F4F4F5, #E4E4E7, #D4D4D8);
  box-shadow: 0px 4px 6px rgba(0, 0, 0.7, 0.7);
}

input{
  border:1px solid lightgray;
  border-radius:0.25em;
  background-image:linear-gradient(to top, white, #F8F8F8, #F5F5F5);
  font-size:0.75em;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-top:3vh;
  margin-bottom:1vh;
  text-align:justify;
  height:5vh;
  width:95%;
  padding-left: 1%;
  padding-right: 1%;
  font-family: "Courier New", Courier, monospace;
  box-shadow: 0.5rem 0.75rem 0.35rem rgba(0, 0, 0, 0.2);
}

#addButton {
  margin-left: 40%;
  margin-right: auto;
  margin-top: 3vh;
  margin-bottom: 1vh;
  color: White;
  border: 1px solid White;
  border-radius: 0.5vh;
  height: 5vh;
  width: 20%;
  font-size: 1em;
  background-image: linear-gradient(#6698FF, #1589FF, #157DEC, #306EFF, #2554C7);
  box-shadow: 0px 4px 6px rgba(0, 0, 0.7, 0.7);
}

table {
  border: 2px solid black;
  border-collapse: collapse;
  width: 95%;
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
  height:5vh;
  font-size: 1.25rem;
}

tr:nth-child(even) {
  background-color: lightgray;
}

tr:nth-child(odd) {
  background-color: white;
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

const calculateSuccessRate = (): number => {
  if (!data.value || data.value.TotalQuestions === 0) return 0;
  return Math.round((data.value.userMarks / data.value.TotalQuestions) * 100);
};

const email = ref<string>('');

onMounted(async () => {
  try {
    email.value = Array.isArray(route.params.email)
        ? route.params.email[0]
        : route.params.email;

    const userEmail = route.params.mail as string;
    const response = await fetch(`http://localhost:8000/userDashboard/${ userEmail }`);
    if (!response.ok) throw new Error("Network response was not ok");
    data.value = await response.json();
    data.value = data.value[0]
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


async function edit(subject: String) {
    const newSubject = prompt("Enter new subject name:", subject);

    try {
        const response = await fetch(`http://localhost:8000/editSubject/${encodeURIComponent(subject)}/${encodeURIComponent(newSubject)}/`, {
            method: 'PATCH',
        });

        if (response.ok) {
            const result = await response.json();
        } else {
            alert("Error in editing subject. Please try again.");
        }
    }

    catch (error) {
        console.error("Error in editing subject", error);
        alert("Error in editing subject. Please try again.");
    }

    finally {
        location.reload();
    }

}

async function Delete(subject: String) {

    try {
      const response = await fetch(`http://localhost:8000/deleteSubject/${encodeURIComponent(subject)}/`, {
      method: 'DELETE',
    });

      if (response.ok) {
        const result = await response.json();
      } else {
        alert("Error in deleting subject. Please try again.");
      }
    }

    catch (error) {
      console.error("Error in deleting subject", error);
      alert("Error in deleting subject. Please try again.");
    }

    finally {
        location.reload();
    }

}







import { reactive } from 'vue'

const addButtons = reactive({
    addSubjectButton: true,
    addSubject: false
})

function showAddSubjectButton() {
  addButtons.addSubjectButton = !addButtons.addSubjectButton ;
  addButtons.addSubject = !addButtons.addSubject ;

}


const subject = ref('');
const imageFile = ref(null);

function handleImageUpload(event) {
  imageFile.value = event.target.files[0];
}

const submit = async () => {
  try {

    const formData = new FormData();
    formData.append('subject', subject.value);
    if (imageFile.value) {
      formData.append('image', imageFile.value);
    }

    const response = await fetch("http://localhost:8000/addSubject", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      alert(`Subject added successfully!`);
    } else {
      alert("Error adding subject. Please try again.");
    }
  }

  catch (error) {
    console.error("Error in adding subject", error);
    alert("Error in adding subject. Please try again.");
  }

  finally {
    location.reload();
  }
};

function add() {
  showAddSubjectButton();
  submit();
}


const showSearch = ref(false);
const showMain = ref(true);
const showaddbutton = ref(true);

function search() {
  showSearch.value = !showSearch.value;
  showMain.value = !showMain.value;
  showaddbutton.value = !showaddbutton.value;
}


import { ref } from "vue"

const quizData = ref<any[]>([])
const keyword = ref('');

const search_keyword = async () => {
  try {
    const response: Response = await fetch(`http://localhost:8000/search/${keyword.value}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    quizData.value = await response.json();

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