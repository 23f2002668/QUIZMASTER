<i style="font-family: Times New Roman; font-size: 5rem; font-weight: bold; text-align: center; color: Maroon;">Quiz Master Web Application</i>
---

<br>

<i style="font-family: Times New Roman; font-size: 2rem; font-weight: bold; color: #191970;">Developer</i>
---
<p style="font-family: Courier New; font-size: 1.1rem;">
Shahzada Moon<br>
B.S. Data Science,<br>
Indian Institute Of Technology Madras,<br>
Chennai - 600036, Tamil Nadu, India<br>
Student Id : DS23f2002668<br>
Official Email Id : 23f2002668@ds.study.iitm.ac.in<br>
</p>


<br>

<i style="font-family: Times New Roman; font-size: 2rem; font-weight: bold; color: #191970;">Description</i>
---
<p style="font-family: Courier New; font-size: 1.1rem;">It is a multi-user app (one requires an administrator and other users) that acts as an exam preparation site for multiple courses.</p>

<br>

<i style="font-family: Times New Roman; font-size: 2rem; font-weight: bold; color: #191970;">Recommended IDE Setup</i>
---
<p style="font-family: Courier New; font-size: 1.1rem;">Recommended IDE Setup : WebStorm</p>

<br>

### <img src="public/vuejs.svg" style="vertical-align: -10px;" width="30" height="30"> &nbsp; 1. WebStorm for VueJS (Frontend)</i>


<b style="font-family: Courier New; font-size: 1.1rem;">◆ Enable Vue Support :</b>

* <p style="font-family: Courier New; font-size: 1.1rem;">WebStorm has built-in support for Vue.js.</p>

* <p style="font-family: Courier New; font-size: 1.1rem;">No need to install Volar or Vetur (they are VSCode-specific).</p>

* <p style="font-family: Courier New; font-size: 1.1rem;">It will automatically detect your package.json and Vue setup.</p>

<b style="font-family: Courier New; font-size: 1.1rem;">◆ Recommended Plugins (if not already enabled):</b>

* <p style="font-family: Courier New; font-size: 1.1rem;">Vue.js</p>

* <p style="font-family: Courier New; font-size: 1.1rem;">Node.js</p>

* <p style="font-family: Courier New; font-size: 1.1rem;">JavaScript Debugger</p>

* <p style="font-family: Courier New; font-size: 1.1rem;">Prettier (optional, for code formatting)</p>

<p style="font-family: Courier New; font-size: 1.1rem;"><b>Note :</b> WebStorm supports .vue files natively, with syntax highlighting, autocomplete, refactoring, and component navigation.</p>

<br>

### <img src="public/flask.svg" style="background-color: White; vertical-align: -8px;" width="30" height="30"> &nbsp; &nbsp; 2. WebStorm for Flask (Backend)


<b style="font-family: Courier New; font-size: 1.1rem;">◆ Enable Vue Support :</b>

* <p style="font-family: Courier New; font-size: 1.1rem;">WebStorm has built-in support for Vue.js.</p>

* <p style="font-family: Courier New; font-size: 1.1rem;">No need to install Volar or Vetur (they are VSCode-specific).</p>

* <p style="font-family: Courier New; font-size: 1.1rem;">It will automatically detect your package.json and Vue setup.</p>

<b style="font-family: Courier New; font-size: 1.1rem;">◆ Recommended Plugins (if not already enabled):</b>

* <p style="font-family: Courier New; font-size: 1.1rem;">Vue.js</p>

* <p style="font-family: Courier New; font-size: 1.1rem;">Node.js</p>

* <p style="font-family: Courier New; font-size: 1.1rem;">JavaScript Debugger</p>

* <p style="font-family: Courier New; font-size: 1.1rem;">Prettier (optional, for code formatting)</p>

<br>

### <img src="public/structure.png" style="vertical-align: -8px;" width="30" height="30"> &nbsp; &nbsp; 3. Project Structure Setup in WebStorm</i>

```

quiz_master/
│
├── backend/     ← Flask app here
│   │
│   └── app.py
│
├── frontend/    ← VueJS app here
│   │
│   └── src/
│        │
│        └── assets/
│        │
│        └── components/
│        │
│        └── router/
│        │     │
│        │     └── index.js
│        │
│        └── views/
│        │
│        └── main.js
│        │
│        └── shims-vued.d.js
│
├── .gitignore
│
├── README.md


```

<br>

<i style="font-family: Times New Roman; font-size: 2rem; font-weight: bold; color: #191970;">Customize Configuration</i>
---
<p style="font-family: Courier New; font-size: 1.1rem;">See [Vite Configuration Reference](https://vite.dev/config/).</p>

<br>

<i style="font-family: Times New Roman; font-size: 1.35rem; font-weight: bold;">Project Setup</i>

```sh
npm install
```

<i style="font-family: Times New Roman; font-size: 1.35rem; font-weight: bold;">Compile and Hot-Reload for Development</i>

```sh
npm run dev
```

<i style="font-family: Times New Roman; font-size: 1.35rem; font-weight: bold;">Compile and Minify for Production</i>

```sh
npm run build
```
