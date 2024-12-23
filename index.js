import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import {ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js" 
import {push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://reel-app-45f6b-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)

const moviesInDB = ref(database, "movies")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")


addButtonEl.addEventListener("click", function() {
   let inputValue = inputFieldEl.value
   inputFieldEl.value = ""
   console.log(`${inputValue} added to database`)
   push(moviesInDB, inputValue)
})
