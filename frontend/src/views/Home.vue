<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="Background">
    <div id="Header">
      <h1>Sober Shah Quiz Application</h1>
      <a class="HeaderLinks" href="/login">Sign In / Register</a>
      <a class="HeaderLinks" href="#ContactUs">Contact Me</a>
      <a class="HeaderLinks" href="#AboutApplication">About Quiz Application</a>
      <a class="HeaderLinks" href="#AboutMe">About Me</a>
      <a class="HeaderLinks" href="/">Home</a>
    </div>

    <RouterView />

    <div id="HomeImage">
      <br>
      <p id="Welcome">SOBER SHAH QUIZ APPLICATION</p>
    </div>

    <br><br>

    <div id = "AboutMe">

      <br><br>

      <p class="Headings"><b>About Me</b></p><br>

      <p> &nbsp; &nbsp; &nbsp; Hello! My name is Shahzada Moon, and I’m a 21-year-old student with a deep passion for technology and data. Currently, I’m pursuing two challenging yet exciting academic paths. I am enrolled in the Bachelor of Science (B.S.) in Data Science program at IIT Madras, one of India’s premier institutions. I am currently at the Diploma level in this program, gaining foundational knowledge and skills in data analysis, machine learning, and statistics. Alongside, I am also pursuing a Bachelor of Technology (B.Tech) degree at R.D. Engineering College, Ghaziabad, where I am currently in my 2nd year. This combination of courses allows me to deepen my understanding of both theoretical and practical aspects of technology, particularly in the fields of data science and engineering. </p>
      <p class="AboutMeHeadings"><b><U> Academic Journey and Interests </U></b> </p>
      <p> &nbsp; &nbsp; &nbsp; My academic journey has always been driven by a natural curiosity about how data can be harnessed to solve real-world problems. Data Science, being one of the most dynamic and rapidly growing fields, offers endless possibilities to innovate and impact various industries. At IIT Madras, I’m learning how to extract meaningful insights from large datasets, develop predictive models, and apply machine learning techniques to solve complex problems. This program is shaping my understanding of core subjects like statistics, programming, and machine learning algorithms. </p>
      <p> &nbsp; &nbsp; &nbsp; At the same time, pursuing a B.Tech degree at R.D. Engineering College gives me a solid foundation in computer science and engineering. This allows me to bridge the gap between theoretical learning and practical application. By combining both degrees, I hope to be well-prepared for a career that blends the power of data science with cutting-edge technology, contributing to fields such as artificial intelligence, big data analytics, and automation. </p>
      <p class="AboutMeHeadings"><b><U> Skills and Achievements </U></b> </p>
      <p> &nbsp; &nbsp; &nbsp; I have always been keen on developing my skills outside of the classroom as well. Over the years, I’ve become proficient in programming languages such as Python, C and now learning Java, which are essential tools in both data science and engineering. I have also worked with a range of data analysis tools like Excel and SQL, and I’m actively learning more about cloud computing platforms and frameworks. My ability to solve problems, coupled with strong analytical thinking, has helped me perform well in various academic projects and competitions. </p>
      <p> &nbsp; &nbsp; &nbsp; Beyond academics, I am deeply interested in extracurricular activities that help me grow as an individual and contribute to society. Whether it’s participating in hackathons, data science competitions, or volunteering for tech-related events, I always seek opportunities to learn from others and share my knowledge. </p>
      <p class="AboutMeHeadings"><b><U> Personal Life and Future Goals </U></b> </p>
      <p> &nbsp; &nbsp; &nbsp; I live in Ghaziabad, Uttar Pradesh, a city just outside of the national capital, Delhi. Growing up here has taught me the importance of perseverance and hard work. I believe in setting ambitious goals and pushing myself to achieve them. In the future, I aim to specialize in Artificial Intelligence or Big Data Analytics, areas I am particularly passionate about. I envision working in a tech-driven organization or a startup where I can apply my skills to build data-driven solutions that make a tangible impact on businesses and society. </p>
      <p> &nbsp; &nbsp; &nbsp; As I continue my academic journey, I am excited about the endless opportunities that lie ahead, and I’m committed to using my knowledge and skills to drive innovation in the technology sector. </p>
      <p> &nbsp; &nbsp; &nbsp; Thank you for taking the time to learn more about me. </p>

    </div>

    <br><br><hr>

    <div id = "AboutApplication">

      <br><br>

      <p class="Headings"><b> About Quiz Application </b></p><br>

      <p> &nbsp; &nbsp; &nbsp; To create an interactive, educational, and entertaining platform that helps individuals make informed decisions about sobriety, while also fostering a sense of community and support. The application would serve as a fun, accessible tool to encourage awareness about the benefits of living a sober life, offering quizzes that engage users with relevant information, challenges, and resources.</p><br>

      <p class="VisionSubHeadings"><b><U> Importance </U></b></p>

      <p>&nbsp;&nbsp;&nbsp; <b class="VisionHeadings"> <U>Raising Awareness</U> : </b> It could educate users about the risks and consequences of substance abuse and the benefits of sobriety.</p>

      <p>&nbsp;&nbsp;&nbsp; <b class="VisionHeadings"> <U>Motivation for Sobriety</U> : </b> By gamifying learning, it makes the journey of staying sober more engaging and motivating. </p>

      <p>&nbsp;&nbsp;&nbsp; <b class="VisionHeadings"> <U>Supportive Environment</U> : </b> It can connect users with sober communities, providing tips, success stories, and shared experiences. </p>

      <p>&nbsp;&nbsp;&nbsp; <b class="VisionHeadings"> <U>Personal Growth</U> : </b> Helps users assess their knowledge and understanding of sobriety, while also offering tools for self-reflection. </p>

      <p>&nbsp;&nbsp;&nbsp; <b class="VisionHeadings"> <U>Preventive Tool</U> : </b> By making it accessible to a wide audience, it can serve as a preventive tool for those at risk of substance abuse. </p>
    </div>

    <br><br><hr>

    <div id = "ContactUs">

      <br><br>

      <p class="Headings"> <b>Contact Me</b></p>
      <p> <b class="ContactUsHeadings">Email Id : &nbsp; </b><a href = "mailto:23f2002668@ds.study.iitm.ac.in" style = "text-decoration : None; color : white;"> 23f2002668@ds.study.iitm.ac.in </a></p>
      <address> <b class="ContactUsHeadings">Address : &nbsp; </b> Muradnagar, Ghaziabad, Uttar Pradesh - 201206, India</address>
    </div>

    <br><br><hr>

    <div id="Footer">
      <p style = "color : white;"> Shahzada Moon | Copyright, 2025 </p>
    </div>
    <hr>
  </div>

</template>

<style>
#Background{
  background-color:Salmon;
}

#Header{
  z-index:1000;
  position:fixed;
  top:0;
  width:100%;
  height:10vh;
  background-color:Salmon;
}

h1 {
  float:left;
  color:white;
  padding:0.3% 1%;
  text-decoration:None;
  font-size:1.75em;
  font-family: verdana;
}

.HeaderLinks {
  height: 70%;
  float:right;
  color:white;
  padding:2% 1.5%;
  font-size:1.2em;
  font-family: verdana;
  text-decoration:None;
}

.HeaderLinks:hover {
  color: white;
  background-color: salmon;
  border-bottom: 2.5px solid white;
  padding-bottom: 0.25em;
  text-decoration:None;
  /*font-weight: bold;*/
  /*transform: scale(1.1); Zooms in by 10%
  transition: transform 0.5s ease-in-out; Smooth transition effect */
}

#HomeImage{
  background-image: url("/frontend/src/assets/Image-01.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  margin-top:10vh;
  height: 100vh;
  max-width : 100%;
}

#Welcome{
  width:35%;
  height:20vh;
  color:white;
  font-size:3em;
  margin-top:15%;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
  border:2px solid white;
}

#AboutMe, #AboutApplication, #ContactUs{
  width:90%;
  text-align:justify;
  color:white;
  font-size : 1.3em;
  font-family:fantasy;
  margin-left:auto;
  margin-right:auto;
}

.Headings{
  font-size:2em;
  color:white;
  font-family:chalkboard;
  text-align:center;
}

.AboutMeHeadings, .VisionSubHeadings{
  text-align : center;
  font-family : chalkboard;
  font-size : 1.3em;
}

.VisionHeadings, .ContactUsHeadings{
  font-size:1em;
  font-family:chalkboard;
  text-align:center;
}

#ContactUs{
  text-align:center;
  color:white;
  font-size : 1.3em;
  font-family:fantasy;
  margin-left:auto;
  margin-right:auto;
}

#Footer{
  text-align:left;
  margin-left:1.5em;
  font-size:1em;
}

</style>
