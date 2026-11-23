function updateWorkout(workouts, index, updatedWorkout) {
    if (!Number.isInteger(index) || index < 0 || index >= workouts.length) {
        return false;
    }

    workouts[index] = updatedWorkout;
    return true;
}
function deleteWorkout(workouts, index) {
    if (!Number.isInteger(index) || index < 0 || index >= workouts.length) {
        return false;
    }

    workouts.splice(index, 1);
    return true;
}
if (typeof module !== "undefined") {
    module.exports = { updateWorkout, deleteWorkout };
}