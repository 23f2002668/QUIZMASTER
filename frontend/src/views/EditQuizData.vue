<template>
  <form @submit.prevent="submit">
    <div id="Background">
      <div id="Header">
        <br>
        <h3>Edit Quiz Data</h3>
      </div>

      <div id="Main">
        <div class="DataHeading">
          <label>Quiz Name <sup>*</sup></label><br>
          <input type="text" v-model="QuizName" required>
        </div>

        <div class="DataHeading">
          <label>Quiz Topic<sup>*</sup></label><br>
          <input :value="chapter" readonly>
        </div>

        <div class="DataHeading">
          <label>Total Questions<sup>*</sup></label><br>
          <input type="number" v-model="TotalQuestions" required>
        </div>

        <div class="DataHeading">
          <label>Total Time<sup>*</sup></label><br>
          <input type="number" v-model="TotalTime" required>
        </div>

        <!-- Dynamic Question Inputs -->
        <div v-for="(q, index) in questions" :key="index" class="DataHeading">
          <label>Question {{ index + 1 }}</label><br>
          <input type="text" v-model="q.question" placeholder="Question" required>
          <input type="text" v-model="q.option1" placeholder="Option 1" required>
          <input type="text" v-model="q.option2" placeholder="Option 2" required>
          <input type="text" v-model="q.option3" placeholder="Option 3" required>
          <input type="text" v-model="q.option4" placeholder="Option 4" required>
          <input type="text" v-model="q.CorrectAnswer" placeholder="Correct Answer" required>
        </div>

        <br><br>
      </div>

      <div id="SubmitReset">
        <button type="button" id="Reset" @click="resetForm">Reset</button>
        <button @click="saveChanges" id="Submit">Save Changes</button>

      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const quiz = ref("");
const QuizName = ref("");
const TotalQuestions = ref(0);
const TotalTime = ref(0);
const chapter = ref("");

const questions = ref<Array<{
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  CorrectAnswer: string;
}>>([]);

onMounted(async () => {
  quiz.value = route.params.quiz as string;

  try {
    const response = await fetch(`http://localhost:8000/editFillQuizData/${quiz.value}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();

    QuizName.value = data.quiz_name;
    TotalQuestions.value = data.total_questions;
    TotalTime.value = data.total_time;

    // Transform Questions
    questions.value = data.Questions.map((q: any) => ({
      question: q[0],
      option1: q[1][0],
      option2: q[1][1],
      option3: q[1][2],
      option4: q[1][3],
      CorrectAnswer: q[2],
    }));

    console.log("Loaded Questions:", questions.value);
  } catch (error) {
    console.error("Error fetching quiz data:", error);
  }
});

const saveChanges = async () => {
  try {
    const payload = {
      Questions: questions.value.map(q => ({
        question: q.question,
        option1: q.option1,
        option2: q.option2,
        option3: q.option3,
        option4: q.option4,
        CorrectAnswer: q.CorrectAnswer
      }))
    };

    const response = await fetch(`http://localhost:8000/editSaveQuizData/${quiz.value}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error("Save failed");

    alert("Quiz updated successfully!");
  } catch (error) {
    console.error("Error saving quiz data:", error);
    alert("Failed to save changes.");
  }
};

</script>

<style scoped>
#Background {
  background-image: url("/assets/user.png");
  min-height: 100vh;
}
sup { color: red; font-size: 1em; }
#Header { text-align: center; color: white; font-size: 1.35em; }
#Main {
  overflow-y: auto;
  max-height: 77vh;
  background-color: white;
  border-radius: 0.5em;
  width: 95%;
  margin: auto;
}
.DataHeading {
  margin-top: 2vh;
  font-size: 1.15em;
  width: 98%;
  margin-left: auto;
  margin-right: auto;
}
label {
  margin-left: 1%;
  color: Black;
  font-size: 1.1em;
}
input {
  border-radius: 0.25em;
  font-size: 1.10em;
  margin: 1vh 0;
  margin-left: 1%;
  height: 5.5vh;
  width: 98%;
  color: #3F3F46;
  font-family: 'Courier New';
  padding: 0.5vh 1vh;
  background-color: #F2F3F4;
  border: 1px solid #CACFD2;
}
#SubmitReset {
  margin-left: auto;
  margin-right: auto;
}
#Reset, #Submit {
  margin-top: 3vh;
  margin-bottom: 4vh;
  height: 5vh;
  width: 15%;
  font-size: 1.5em;
  border-radius: 0.5vh;
}
#Reset {
  margin-left: 30%;
  background-color: #FF0033;
  border: 1px solid #FF0033;
  color: white;
}
#Submit {
  margin-left: 5%;
  background-color: #0066FF;
  border: 1px solid #0066FF;
  color: white;
}
</style>

