const workoutForm = document.getElementById("workout-form");
const workoutHistory = document.getElementById("workout-history");

let workouts = JSON.parse(localStorage.getItem("workouts")) || [];
let editingIndex = -1;

function editWorkout(index) {
    const workout = workouts[index];

    document.getElementById("workout-date").value = workout.date;
    document.getElementById("exercise").value = workout.exercise;
    document.getElementById("sets").value = workout.sets;
    document.getElementById("reps").value = workout.reps;
    document.getElementById("weight").value = workout.weight;

    editingIndex = index;

    workoutForm.querySelector("button[type='submit']").textContent = "Update Workout";

    workoutForm.scrollIntoView({ behavior: "smooth" });
}
function confirmDeleteWorkout(index) {
    const confirmed = confirm("Are you sure you want to delete this workout?");

    if (!confirmed) {
        return;
    }

    if (deleteWorkout(workouts, index)) {
        localStorage.setItem("workouts", JSON.stringify(workouts));
        displayWorkouts();
    }
}
function displayWorkouts() {
    workoutHistory.innerHTML = "";

    if (workouts.length === 0) {
        workoutHistory.innerHTML = "<p>No workouts saved yet.</p>";
        return;
    }

    workouts.forEach(function (workout, index) {
        const workoutCard = document.createElement("div");
        workoutCard.classList.add("workout-card");

        workoutCard.innerHTML = `
            <h3>${workout.exercise}</h3>
            <p><strong>Date:</strong> ${workout.date}</p>
            <p><strong>Sets:</strong> ${workout.sets}</p>
            <p><strong>Reps:</strong> ${workout.reps}</p>
            <p><strong>Weight:</strong> ${workout.weight} lbs</p>
            <button type="button" onclick="editWorkout(${index})">Edit</button>
            <button type="button" onclick="confirmDeleteWorkout(${index})">Delete</button>
        `;

        workoutHistory.appendChild(workoutCard);
    });
}

workoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const date = document.getElementById("workout-date").value;
    const exercise = document.getElementById("exercise").value.trim();
    const sets = document.getElementById("sets").value;
    const reps = document.getElementById("reps").value;
    const weight = document.getElementById("weight").value;

    const workout = {
        date: date,
        exercise: exercise,
        sets: sets,
        reps: reps,
        weight: weight
    };

    if (!validateWorkout(workout)) {
    alert("Please fill in all workout fields.");
    return;
}

if (editingIndex === -1) {
    workouts.push(workout);
} else {
    if (!updateWorkout(workouts, editingIndex, workout)) {
        alert("Unable to update workout.");
        return;
    }

    editingIndex = -1;

    workoutForm.querySelector("button[type='submit']").textContent = "Save Workout";
}

    localStorage.setItem("workouts", JSON.stringify(workouts));

    displayWorkouts();

    workoutForm.reset();
});

displayWorkouts();