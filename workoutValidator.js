
const workoutRules = [
    (workout) => Boolean(workout.date),
    (workout) => Boolean(workout.exercise?.trim()),
    (workout) => Boolean(workout.sets),
    (workout) => Boolean(workout.reps),
    (workout) => workout.weight !== ""
];

function validateWorkout(workout) {
    return workoutRules.every((rule) => rule(workout));
}

if (typeof module !== "undefined") {
    module.exports = { validateWorkout };
}
