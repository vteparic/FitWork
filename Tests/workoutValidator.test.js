import { describe, it, expect } from "vitest";
import validator from "../workoutValidator.js";

const { validateWorkout } = validator;

describe("Workout Validation", () => {
    it("accepts a workout with all required fields", () => {
        const workout = {
            date: "2026-11-23",
            exercise: "Bench Press",
            sets: "3",
            reps: "10",
            weight: "150"
        };

        expect(validateWorkout(workout)).toBe(true);
    });

    it("rejects a workout with an empty exercise", () => {
        const workout = {
            date: "2026-11-23",
            exercise: "",
            sets: "3",
            reps: "10",
            weight: "150"
        };

        expect(validateWorkout(workout)).toBe(false);
    });
});