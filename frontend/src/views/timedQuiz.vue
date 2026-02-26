<template>
  <form @submit.prevent="submit">
    <div id="background">
      <div id="Header">
        <div id="header">
          <br>
          <h2 style="color: white; text-align: center; margin-top: 2vh;"><u>{{ subject }} ({{ topic }}) - Quiz</u></h2>
        </div>

        <div id="info">

          <div id="marks">
            <button type="button" id="info_buuton" style="z-index: 1000; border-radius: 0.75rem; font-family: Palatina; font-weight: bold; font-size: 0.85rem; padding: 0.5rem 2rem 0.7rem 1rem;">
              <b style="font-size: 1rem;">Max. Marks : </b> &nbsp; <span style="font-size: 1.5rem; display: inline-block; margin-top: 0.1vh; color: Red;">20</span>
            </button>
          </div>


          <div id="time">
            <button type="button" id="info_buuton" style="z-index: 1000; border-radius: 0.75rem; font-family: Palatina; font-weight: bold; font-size: 0.85rem; padding: 0.5rem 2rem 0.7rem 1rem; margin-top: 0vh; ">
              <b style="font-size: 1rem;">⏳&nbsp; Time Left : &nbsp; &nbsp; </b><span style="font-size: 1.5rem; display: inline-block; margin-top: 0.1vh; color: Red;">{{timer}}&nbsp; sec</span>
            </button>
          </div>
        </div>
      </div>
      <br>
      <div id="main">
        <div id="mainQuiz" v-for="(content, questionIndex) in data" :key="questionIndex" class="data" style="text-align: center; font-size: 1.3em; color: black; text-align: left; margin-top: 5%; margin-left: 5%; margin-right: 5%;">
          <p>Q{{questionIndex+1}}. &nbsp; {{content.question}}</p>
          <div id="options" v-for="(option, optionIndex) in content.options" :key="optionIndex">
            <input type="radio" :name="'Q-' + (questionIndex+1)" :value=option v-model="answers[questionIndex]" style="background-color: black;"> &nbsp; &nbsp;
            <label :for="'Q-' + (questionIndex+1)">{{option}}</label><br><br>
          </div>
        </div>

        <br><br><br>

        <div id="SubmitReset">
          <button type="submit" id="Submit">Submit</button>
          <button type="reset" id="Reset">Reset</button>
        </div>
        <br><br>
      </div>
    </div>
  </form>
</template>

<style scoped>
  #background {
    z-index: 1000;
    position: fixed;
    background-color: transparent;
    height: 100vh;
    width: 100%;
  }

  #Header{
    z-index:1000;
    position:fixed;
    top:0;
    width:100%;
    height:18vh;
    background-color: black;
  }

  #main {
    z-index: 500;
    position: relative;
    overflow-y: auto;
    background-color: white;
    border: 1px solid white;
    border-radius: 0.5em;
    width: 100%;
    height: 100vh;
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
    background-image: url("/frontend/src/assets/Image-02.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
  }

  #info {
    display: flex;
    height: auto;
    width : 100%;
    color: white;
    margin-bottom: 5vh;
    font-size: 1.3em;
  }

  #marks, #time {
    flex: 1;
  }

  #marks {
    text-align: left;
    margin-left: 5%;
  }

  #time {
    text-align: right;
    margin-right: 2%;
    color: white;
  }

  #SubmitReset{
    margin-left:auto;
    margin-right:auto;

  }

  #Submit{
    margin-left:30%;
    margin-top:3vh;
    margin-bottom:15vh;
    color:white;
    border:1px solid white;
    border-radius:0.5vh;
    height:5vh;
    width:15%;
    font-size:1.5em;
    background-image:linear-gradient(#32de84, #50C878, #03C03C, #17B169, #29AB87, #00A86B, #00AB66, #228B22);
    box-shadow: 0px 5px 20px rgba(0.3, 0.3, 0.3, 0.3);
  }

  #Reset{
    margin-left:5%;
    margin-right:5%;
    margin-top:3vh;
    margin-bottom:15vh;
    color:white;
    border:1px solid white;
    border-radius:0.5vh;
    height:5vh;
    width:15%;
    font-size:1.5em;
    background-image:linear-gradient(#FF0000, #F62817, #F62217, #E41B17, #B80000 );
    box-shadow: 0px 5px 20px rgba(0.3, 0.3, 0.3, 0.3);
  }
</style>

<script setup lang="ts">
// Timer state
import { ref, onMounted } from "vue";
import {useRoute, useRouter} from 'vue-router'

const router = useRouter();
const route = useRoute();
const timer = ref("");
let timeRemaining = ref(0);                //parseInt(timer.value) * 60) - 1;  // 5 * 60 - 1 = 300 Sec (from 0 to 299)
let timerInterval: number | undefined;

const updateTimer = () => {
  if (timeRemaining.value < 0) {
    clearInterval(timerInterval);
    alert("⏳ Time's up! Submitting quiz...");
    timer.value = "00:00";
    submit();
  } else {
    const minutes = Math.floor(timeRemaining.value / 60);
    const seconds = timeRemaining.value % 60;
    timer.value =
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0");

    timeRemaining.value--;
  }
};

/*
const updateTimer = () => {
  if (timeRemaining.value < 0) {
    clearInterval(timerInterval);
    alert("⏳ Time's up! Submitting quiz...");
    timer.value = "00";
    submit();
  } else {
    timer.value = timeRemaining.value.toString().padStart(2, "0");
    timeRemaining.value--;
  }
};

*/


// Function to update the timer every second
//const updateTimer = () => {
  //let minutes = Math.floor(timeRemaining / 60);
  //let seconds = timeRemaining % 60;
  //timer.value = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  //let seconds = timeRemaining;
  //timer.value = `${seconds.toString().padStart(2, '0')}`;

//  if (timeRemaining <= 0) {
//    clearInterval(timerInterval);
//    alert("⏳ Time's up! Submitting quiz...");
//  } else {
//    timeRemaining--;
//  }
//};


const data = ref<{ question: string; options: string; correct: string }[]>([]);
const topic = ref(route.params.topic as string);
const quizname = ref(route.params.quizname as string);
const subject = ref(route.params.subject as string)
const mail = ref<string>('');
const name = ref(route.params.name as string);
const username = ref(route.params.username as string);

// Start the timer when the page loads
onMounted(() => {
  fetch(`http://localhost:8000/questions/${subject.value}/${topic.value}/${quizname.value}`)
      .then(response => response.json())
      .then((rawData) => {
        console.log("Raw API Data:", rawData); // Check API response

        const email = route.params.mail;
        mail.value = email;

        timer.value = rawData[1].toString();
        timeRemaining.value = parseInt(rawData[1]);

        timerInterval = setInterval(updateTimer, 1000);  // Starting countdown after seting time

        // Ensure it's an array and convert it to objects
        if (Array.isArray(rawData)) {
          data.value = rawData[0].map((item: [string, string, string, number]) => ({
            question: item[0],
            options: item[1],
            correct: item[2],
          }));

          answers.value = new Array(data.value.length).fill('');
          console.log(answers.value);
        }

        console.log("Formatted Subjects:", data.value);

      })
      .catch((error) => {
        console.error("Error fetching subjects:", error);
      });
});

const answers = ref<string[]>(new Array(data.value.length).fill(''));

const submit = async () => {
  clearInterval(timerInterval);  // Clearing time interval for preventing from submitting again on time finishing
  try {
    const submittedAnswers = answers.value.map((answer, index) => ({
      question: data.value[index].question,
      selectedAnswer: answer,
      correctAnswer: data.value[index].correct,
    }));

    console.log("Submitting Answers:", submittedAnswers);

    const response = await fetch("http://localhost:8000/submitQuiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answers: submittedAnswers,
        name: quizname.value,
        topic: topic.value,
        subject: subject.value,
        mail: mail.value,
      }),
    });

    console.log("Fetch response received:", response);

    if (response.ok) {
      const result = await response.json();
      alert("Congratulations ! Quiz submitted successfully. \n\n👉 The quiz with the solutions has been sent to your registered email id.");
      router.push(`/quizTopics/${ subject.value }/${ name.value }/${ username.value }/${mail.value}`);
    } else {
      alert("Error submitting quiz. Please try again.");
    }
  }

  catch (error) {
    console.error("Error during quiz submission:", error);
    alert("Error during quiz submission. Please try again.");
  }

};
</script>
