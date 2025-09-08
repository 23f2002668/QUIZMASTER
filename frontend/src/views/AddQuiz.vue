<template>
  <form @submit.prevent="submit">

    <div id="Background">
      <br>
      <div id="Header">
        <h1>Add Quiz Data</h1>
        <a class="HeaderLinks" href="/logout" @click.prevent="logout">Logout</a>
        <a class="HeaderLinks" href="/leaderBoard">Leaderboard</a>
        <a class="HeaderLinks" :href="`/remove/${email}`">Remove User</a>
        <a class="HeaderLinks" :href="`/newQuiz/${email}`">New Quiz</a>
      </div>

      <div id="Main">
        <div class="DataHeading">
          <label>Quiz Name <sup>*</sup></label><br>
          <input :value="quiz" placeholder="Quiz Name" style="background-color: #F2F3F4; border: 1px solid #CACFD2;" :readonly="true" required>
        </div>

        <div class="DataHeading">
          <label>Quiz Chapter<sup>*</sup></label><br>
          <input :value="chapter" style="background-color: #F2F3F4; border: 1px solid #CACFD2; color: #3F3F46; font-size: 1.10em; font-family: 'Courier New';" :readonly="true"></input>
        </div>

        <!--
        <div class="DataHeading">
          <label>Total Questions<sup>*</sup></label><br>
          <input type="number" v-model="TotalQuestions" placeholder="Total Questions" style="background-color: #F2F3F4; border: 1px solid #CACFD2;" required>
        </div>
        -->

        <div class="DataHeading">
          <label>Total Time<sup>*</sup></label><br>
          <input type="number" v-model="TotalTime" placeholder="Total Time" style="background-color: #F2F3F4; border: 1px solid #CACFD2;" required>
        </div>

        <div id="addQuestion" class="DataHeading" v-for="(question, index) in questions" :key="index">            <!--  v-for="(question, index) in questions" :key="index" -->
          <br>
          <label>Question No. - {{ index+1 }} <sup>*</sup></label> <button type="button" id="remove" @click="remove" style="float: right; margin-right: 1%; color: white; border: 1px solid #FF0033; border-radius: 0.5vh; height: 5vh; width: 10%; font-size: 1.2em; background-color: #FF0033;">Remove</button><br><br>
          <input type="text" v-model="question.question" placeholder="Question" style="background-color: #F2F3F4; border: 1px solid #CACFD2;" required>                        <!-- v-model="question.question" -->
          <input type="text" v-model="question.option1" placeholder="Option 1" style="background-color: #F2F3F4; border: 1px solid #CACFD2;" required>                  <!-- v-model="question.option1" -->
          <input type="text" v-model="question.option2" placeholder="Option 2" style="background-color: #F2F3F4; border: 1px solid #CACFD2;" required>                  <!-- v-model="question.question" -->
          <input type="text" v-model="question.option3" placeholder="Option 3" style="background-color: #F2F3F4; border: 1px solid #CACFD2;" required>                  <!-- v-model="question.option2" -->
          <input type="text" v-model="question.option4" placeholder="Option 4" style="background-color: #F2F3F4; border: 1px solid #CACFD2;" required>                  <!-- v-model="question.option3" -->
          <input type="text" v-model="question.CorrectAnswer" placeholder="CorrectAnswer" style="background-color: #F2F3F4; border: 1px solid #CACFD2;" required>       <!-- v-model="question.CorrectAnswer" -->
          <br><br>
        </div>
        <br>
      </div>

      <div id="newQuestionButton">
        <button type="submit" id="Submit" @click="submit">Submit</button>
        <button id="addQuestionButton" v-show="addButtons.addQuestionButton" @click.prevent="showAddQuestionButton"> + Add Question </button>
        <button type="button" id="Reset" @click="resetForm">Reset</button>
      </div>
    </div>
  </form>
</template>

<style>

#Background {
  background-image: url("/assets/user.png");
  height: 100vh;
}

sup {
  color: red;
  font-size: 1em;
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

#Main {
  z-index: 500;
  position: relative;
  overflow-y: auto;
  max-height: 75vh;
  background-color: white;
  border: 1px solid white;
  border-radius: 0.5em;
  width: 95%;
  margin-top: 8.5vh;
  margin-left: auto;
  margin-right: auto;
  //background-image: url("/frontend/src/assets/Image-01.jpeg");
  background-color: White;
  background-position: center;
  background-repeat: no-repeat;
}

.DataHeading {
  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.15em;
  width: 98%;
}

label {
  margin-top: 1vh;
  margin-left: 1%;
  color: Black;
  font-size: 1.1em;
}

input,
select {
  border: 1px solid white;
  border-radius: 0.25em;
  background-color: transparent;
  font-size: 1.10em;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 1%;
  text-align: justify;
  height: 5.5vh;
  width: 98%;
  color: #3F3F46;
  font-family: 'Courier New';
  padding: 0.5vh 1vh 0.5vh 1vh;
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

#addQuestionButton{
  margin-left: 5%;
  margin-right: auto;
  margin-top: 5vh;
  color:Black;
  border:1px solid #9F9FA9;
  border-radius:0.5vh;
  height:5vh;
  width:20%;
  font-size:1.5em;
  background-image:linear-gradient(#FAFAFA, #F4F4F5, #E4E4E7, #D4D4D8);
  box-shadow: 0px 4px 6px rgba(0, 0, 0.7, 0.7);
}

#addQuestion {
  margin-left: 2%;
  margin-right: auto;
  margin-bottom: 2vh;
  color:Black;
  border:2px solid #D4D4D8;
  border-radius:0.5vh;
  height:auto;
  width:96%;
  font-size:1.5em;
  background-image:White;
  box-shadow: 0px 4px 6px rgba(0, 0, 0.7, 0.7);
}

#SubmitReset {
  margin-left: auto;
  margin-right: auto;
}

#Reset {
  margin-left: 5%;
  margin-top: 5vh;
  color: white;
  border: 1px solid #FF0033;
  border-radius: 0.5vh;
  height: 5vh;
  width: 15%;
  font-size: 1.5em;
  background-color: #FF0033;
}

#Submit {
  margin-left: 21.5%;
  margin-top: 5vh;
  color: white;
  border: 1px solid #0066FF;
  border-radius: 0.5vh;
  height: 5vh;
  width: 15%;
  font-size: 1.5em;
  background-color: #0066FF;
}
</style>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import router from "../router";

const route = useRoute();
const subjectName = ref<string | null>(null);

const QuizSubject = ref('');
const QuizChapter = ref('');
const QuizName = ref('');
const TotalQuestions = ref(0);
const TotalTime = ref(0);
const errorMessage = ref("");
const chapter = ref('');
const quiz = ref('');

// Initialize the questions array dynamically
const questions = ref<{ question: string, option1: string, option2: string, option3: string, option4: string, CorrectAnswer: string }[]>([]);

onMounted(() => {
  subjectName.value = route.params.subject as string;
  chapter.value = route.params.chapter as string;
  quiz.value = route.params.quiz as string;
});

// Watch for changes in TotalQuestions to dynamically adjust the questions array
watch(TotalQuestions, (newVal) => {
  // Adjust the questions array length when TotalQuestions changes
  questions.value = Array.from({ length: newVal }, () => ({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    CorrectAnswer: ''
  }));
});

// Submit the quiz data
const submit = async () => {
  console.log("Submit button clicked!");
  try {
    const response = await fetch("http://localhost:8000/createQuiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        QuizSubject: subjectName.value,
        QuizChapter: chapter.value,
        QuizName: QuizName.value || quiz.value,
        TotalTime: TotalTime.value,
        Questions: questions.value,
      })
    });

    const data = await response.json();
    console.log("Response data:", data);
    alert("Quiz Created Successfully!");
  } catch (error) {
    console.error("Error:", error);
    errorMessage.value = "Server error. Please try again.";
  }
};


// Reset form handler
const resetForm = () => {
  QuizName.value = '';
  QuizTopic.value = '';
  TotalQuestions.value = 0;
  TotalTime.value = 0;
  questions.value = [];
};


import { reactive } from 'vue'

const subject = ref('');

const addButtons = reactive({
  addQuestionButton: true,
  addQuestion: false
})

function showAddQuestionButton() {
  questions.value.push({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    CorrectAnswer: ''
  });
}

function remove(index) {
  questions.value.splice(index, 1);
}


const submitt = async () => {
  try {

    const formData = new FormData();
    formData.append('subject', subject.value);

    const response = await fetch("http://localhost:8000/addQuestion", {
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
  showAddQuestionButton();
  submit();
}


</script>
<script setup lang="ts">
</script>
<script setup lang="ts">
</script>