function updateWorkout(workouts, index, updatedWorkout) {
    if (!Number.isInteger(index) || index < 0 || index >= workouts.length) {
        return false;
    }

    workouts[index] = updatedWorkout;
    return true;
}

if (typeof module !== "undefined") {
    module.exports = { updateWorkout };
}