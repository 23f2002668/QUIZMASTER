<template>
  <form action = "{{url_for('prepration', subjects=subjects)}}" method = "POST">
      <div id="Background">
          <br>
          <div id="Header">
            <h1>Quiz Chapters</h1>
            <a class="HeaderLinks" href="/logout" @click.prevent="logout">Logout</a>
            <a class="HeaderLinks" href="/leaderBoard">Leaderboard</a>
            <a class="HeaderLinks" :href="`/remove/${email.value}`">Users</a>
            <a class="HeaderLinks" :href="`/newQuiz/${email.value}`">Quizzes</a>
            <a class="HeaderLinks" :href="`/adminDashboard/${email.value}`">Dashboard</a>
          </div>

          <div id="main">
              <table style="height: 30vh; margin-top: 7vh; margin-left: auto; margin-right: auto; width: 95%; color: black; font-size: 1.25em; border-collapse: collapse;">
                  <tbody>
                    <tr style="background-color: #F39C12; color: Black;">
                        <th style="background-color: transparent; width: 10%; font-weight: bold;  font-size: 1.35em; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center; color: Black;">Sr.No.</th>
                        <th style="background-color: transparent; width: 45%; font-weight: bold;  font-size: 1.35em; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center;">Quiz Chapters</th>
                        <th style="background-color: transparent; width: 15%; font-weight: bold;  font-size: 1.35em; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center;">View</th>
                        <th style="background-color: transparent; width: 30%; font-weight: bold;  font-size: 1.35em; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center;">Action</th>
                    </tr>

                    <tr v-for="(topic, index) in topics" :key="index">
                        <td style="background-color: transparent; width: 10%; text-decoration: none; padding: 0.1vh 2vh 0.1vh 2vh; text-align: center;">{{ index + 1 }}.</td>
                        <td style="background-color: transparent; width: 45%; padding: 0.1vh 2vh 0.1vh 2vh; text-align: justify; color: #1447E6;">{{ topic }}</td>
                        <td style="background-color: transparent; width: 15%; text-decoration: none; padding: 0.1vh 2vh 0.1vh 2vh; text-align: justify;">
                            <div id="ChapterBody" style="height: 5vh; display: flex; align-items: center; justify-content: center; margin-top: 0vh;">
                                <a :href="`/chapterQuiz/${subject}/${topic}/${email}`">View</a>
                            </div>
                        </td>
                      <td style="background-color: transparent; width: 30%; text-decoration: none; padding: 0.1vh 2vh 0.1vh 2vh; text-align: justify;">
                        <button id="edit" @click.prevent="edit(topic)"> Edit </button><button id="delete" @click.prevent="Delete(topic)"> Delete </button>
                      </td>
                    </tr>

                  </tbody>
              </table>
              <br><br><br>
          </div>

          <div id="newChapterButton">
            <button id="addChapterButton" v-show="addButtons.addChapterButton" @click.prevent="showAddChapterButton"> + Add Chapter </button>
          </div>

          <div id="addChapter" v-show="addButtons.addChapter">
            <input type="text" v-model="Chapter" id="Chapter" name="Chapter" placeholder="Enter Chapter Name"  autofocus required>
            <button id="addButton" @click.prevent="add"> + Add </button>
          </div>

          <br>
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

#main {
  z-index: 500;
  position: relative;
  overflow-y: auto;
  background-color: transparent;
  width: 100%;
  height: auto;
  margin-top: 7vh;
  margin-left: auto;
  margin-right: auto;
  background-color: #CCD1D1;
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


a {
  text-decoration: none;
  color: White;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}

#ChapterBody {
  width: 95%;
  height: 4vh;
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
  width: 40%;
  height: 5vh;
  margin-left: 5%;
  margin-right: 2.5%;
  border: 0.1rem solid white;
  border-radius: 0.35rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.25rem;
  color: white;
  box-shadow: 0.5rem 0.75rem 0.35rem rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to right, #193CB8, #1447E6, #155DFC, #2B7FFF);
}

#delete {
  width: 40%;
  height: 5vh;
  margin-left: 2.5%;
  margin-right: 5%;
  border: 0.1rem solid white;
  border-radius: 0.35rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.25rem;
  color: white;
  box-shadow: 0.5rem 0.75rem 0.35rem rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to right, #C11007, #E7180B);
}


#addChapterButton{
  margin-left: 40%;
  margin-right: auto;
  margin-top: 2vh;
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

#addChapter {
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

#addButton{
  margin-left: 40%;
  margin-right: auto;
  margin-top: 3vh;
  margin-bottom: 1vh;
  color: White;
  border:1px solid White;
  border-radius:0.5vh;
  height:5vh;
  width:20%;
  font-size:1em;
  background-image:linear-gradient(#6698FF, #1589FF, #157DEC, #306EFF, #2554C7);
  box-shadow: 0px 4px 6px rgba(0, 0, 0.7, 0.7);
}

</style>

<script setup lang="ts">
import itsQuizTime from "/frontend/src/assets/Its Quiz Time - 2.webp";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { Ref } from 'vue';
import { reactive } from 'vue'

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

const topics = ref([]);
const subjects = ref<{ name: string; image: string }[]>([]);
const subject = ref<string>('');
const email = ref<string>('');

onMounted(async () => {
  try {

    subject.value = route.params.subject as string;
    const userEmail = route.params.mail as string;
    email.value = userEmail;

    const response = await fetch(`http://localhost:8000/userDashboard/${ userEmail }`);
    if (!response.ok) throw new Error("Network response was not ok");
    data.value = await response.json();
    data.value = data.value[0]
    console.log('User data:', data.value);

    const response2 = await fetch(`http://localhost:8000/chapters/${subject.value}`);
    const rawData2 = await response2.json();

    // Ensure it's an array and convert it to objects
    if (Array.isArray(rawData2.topics)) {
      topics.value = rawData2.topics;
    }

    console.log("Topics:", topics.value); // Check formatted data

    const response3 = await fetch("http://localhost:8000/api/subjects");
    const rawData3 = await response3.json();

    // Ensure it's an array and convert it to objects
    if (Array.isArray(rawData3)) {
      subjects.value = rawData3.map((item: [string, string]) => ({
        name: item[0],
        image: item[1],
      }));
    }

    console.log("Formatted Subjects:", subjects.value); // Check formatted data


  } catch (error) {
    console.error("Error fetching data:", error);
  }
});


const getImagePath = (imageName: string): string => {
  return `/uploads/${imageName}`; // Loads images from /public/assets/
};


const Chapter = ref('');

async function edit(Chapter: String) {
  const newChapter = prompt("Enter new subject name:", Chapter);

  try {
    const response = await fetch(`http://localhost:8000/editChapter/${encodeURIComponent(subject.value)}/${encodeURIComponent(Chapter)}/${encodeURIComponent(newChapter)}/`, {
      method: 'PATCH',
    });

    if (response.ok) {
      const result = await response.json();
    } else {
      alert("Error in editing chapter. Please try again.");
    }
  }

  catch (error) {
    console.error("Error in editing chapter", error);
    alert("Error in editing chapter. Please try again.");
  }

  finally {
    location.reload();
  }

}

async function Delete(Chapter: String) {

  try {
    const response = await fetch(`http://localhost:8000/deleteChapter/${encodeURIComponent(subject.value)}/${encodeURIComponent(Chapter)}/`, {
      method: 'DELETE',
    });

    if (response.ok) {
      const result = await response.json();
    } else {
      alert("Error in deleting chapter. Please try again.");
    }
  }

  catch (error) {
    console.error("Error in deleting chapter", error);
    alert("Error in deleting chapter. Please try again.");
  }

  finally {
    location.reload();
  }

}

const addButtons = reactive({
  addChapterButton: true,
  addChapter: false
})

function showAddChapterButton() {
  addButtons.addChapterButton = !addButtons.addChapterButton ;
  addButtons.addChapter = !addButtons.addChapter ;

}

const submit = async () => {
    try {

        const formData = new FormData();
        formData.append('subject', subject.value);
        formData.append('chapter', Chapter.value);

        const response = await fetch("http://localhost:8000/addChapter/", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            const result = await response.json();
            alert(`Chapter added successfully!`);
        } else {
            alert("Error adding chapter. Please try again.");
        }

    }

    catch (error) {
        console.error("Error in adding chapter", error);
        alert("Error in adding chapter. Please try again.");
    }

    finally {
        location.reload();
    }
};

function add() {
  showAddChapterButton();
  submit();
}



// Use router instance from Vue Router
//const router = useRouter();

// Logout function
const logout = () => {
  // Clear auth token from localStorage
  localStorage.removeItem('auth_token');

  const response: Response = fetch(`http://localhost:8000/logout/${email.value}`);

  // Redirect to the login page using Vue Router
  router.push('/login');  // Redirect to the login route
};
</script>