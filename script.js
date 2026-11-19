const workoutForm = document.getElementById("workout-form");
const workoutHistory = document.getElementById("workout-history");

let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

function displayWorkouts() {
    workoutHistory.innerHTML = "";

    if (workouts.length === 0) {
        workoutHistory.innerHTML = "<p>No workouts saved yet.</p>";
        return;
    }

    workouts.forEach(function (workout) {
        const workoutCard = document.createElement("div");
        workoutCard.classList.add("workout-card");

        workoutCard.innerHTML = `
            <h3>${workout.exercise}</h3>
            <p><strong>Date:</strong> ${workout.date}</p>
            <p><strong>Sets:</strong> ${workout.sets}</p>
            <p><strong>Reps:</strong> ${workout.reps}</p>
            <p><strong>Weight:</strong> ${workout.weight} lbs</p>
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

workouts.push(workout);

    localStorage.setItem("workouts", JSON.stringify(workouts));

    displayWorkouts();

    workoutForm.reset();
});

displayWorkouts();