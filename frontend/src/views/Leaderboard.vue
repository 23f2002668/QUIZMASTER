<template>
  <div id="background">

    <div id="Header">
      <h1>Top - 10 Performers</h1>
    </div>

    <br>

    <div id="toppers">
      <table align="center" style="z-index: 1000; position: fixed; width: 96%; text-align: center; margin-left:2%; margin-right:2%; border: 2px solid white;">
        <thead style=" border-collapse:collapse; width: 100%; font-size: 1.5em;">
        <tr>
          <th style=" border-collapse:collapse; width: 20%; height: 10vh; font-size: 1.15em; background-color: olive; color: white;">Rank</th>
          <th style=" border-collapse:collapse; width: 20%; height: 10vh; font-size: 1.15em; background-color: olive; color: white;">Performer Name</th>
          <th style=" border-collapse:collapse; width: 20%; height: 10vh; font-size: 1.15em; background-color: olive; color: white;">User Name</th>
          <th style=" border-collapse:collapse; width: 20%; height: 10vh; font-size: 1.15em; background-color: olive; color: white;">Quiz Name</th>
          <th style=" border-collapse:collapse; width: 20%; height: 10vh; font-size: 1.15em; background-color: olive; color: white;">Total Points</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(performer, index) in performers" :key="performer.rank">
          <td style="height: 6vh;">{{ performer.rank }}</td>
          <td style="height: 6vh;">{{ performer.name }}</td>
          <td style="height: 6vh;">{{ performer.username }}</td>
          <td style="height: 6vh;">{{ performer.quizname }}</td>
          <td style="height: 6vh;">{{ performer.userMarks }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  #background {
    width: 100%;
    height: 100vh;
    background-image: url("/frontend/src/assets/celebration-01.gif"), url("/frontend/src/assets/admin.jpeg");
    background-size: cover;
    background-color: #C88141;
    background-position: center;  /* Center the image in the div */
    background-repeat: no-repeat; /* Don't repeat the image */
    color: black;  /* Make text visible over background */
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
    text-align: center;
    color:white;
    text-decoration:None;
    border-bottom: 2px solid white;
    width: 20%;
    margin-left: 40%;
  }

  #toppers {
    z-index:500;
    position:relative;
    overflow-y:auto;
    width: 100%;
    height: 82vh;
    margin-top: 15vh;
    font-weight: bold;
    text-align: center;
  }

  table {
    width: 96%;
    border-collapse:collapse;
    background-color: transparent;
  }

  td, th {
    
    border-collapse:collapse;
    font-size: 1.25em;
    width: 10%;
    font-family: chalkboard;
  }

  tr:nth-child(odd) {
    color: white;
    border-left: 2px solid white;
    border-right: 2px solid white;
  }

  tr:nth-child(even) {
    color: white;
    border-left: 2px solid white;
    border-right: 2px solid white;
  }
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const performers = ref<any[]>([]); // This will store the leaderboard data.

onMounted(() => {
  fetchTopPerformers();
});

const fetchTopPerformers = async () => {
  try {
    const response = await fetch('http://localhost:8000/leaderBoard'); // Replace with your actual backend URL
    if (!response.ok) {
      throw new Error('Failed to fetch leaderboard data');
    }
    const data = await response.json();
    performers.value = data; // Assuming the data returned is an array of top performers.
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
  }
};
</script>