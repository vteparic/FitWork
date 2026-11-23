import { describe, it, expect } from "vitest";
import workoutManager from "../workoutManager.js";

const { updateWorkout } = workoutManager;

describe("Update Workout", () => {
    it("updates an existing workout", () => {
        const workouts = [{ exercise: "Bench Press", weight: "135" }];
        const updated = { exercise: "Bench Press", weight: "150" };

        const result = updateWorkout(workouts, 0, updated);

        expect(result).toBe(true);
        expect(workouts[0].weight).toBe("150");
        expect(workouts).toHaveLength(1);
    });

    it("rejects an invalid workout index", () => {
        const workouts = [{ exercise: "Bench Press", weight: "135" }];

        const result = updateWorkout(workouts, 5, {
            exercise: "Bench Press",
            weight: "150"
        });

        expect(result).toBe(false);
        expect(workouts[0].weight).toBe("135");
    });
});