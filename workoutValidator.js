function validateWorkout(workout) {
    return Boolean(
        workout.date &&
        workout.exercise.trim() &&
        workout.sets &&
        workout.reps &&
        workout.weight !== ""
    );
}

if (typeof module !== "undefined") {
    module.exports = { validateWorkout };
}