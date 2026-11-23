
# FitWork

FitWork is a simple workout tracking application that allows users to record workouts, view their workout history, and edit or delete saved workouts.

## Sprint 1 Features

- Enter a workout date
- Enter an exercise name
- Enter sets, reps, and weight
- Save workout information
- View saved workouts in workout history
- Keep saved workouts after refreshing the page

## Sprint 2 Features

- Edit an existing workout
- Update saved workout information
- Delete a saved workout
- Display a confirmation message before deleting
- Cancel a deletion without removing the workout
- Save workout changes using browser local storage
- Run automated tests for workout validation, editing, and deletion

## How to Run the Application

1. Download or clone the FitWork repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser or use Live Server.
4. Enter workout information in the New Workout form.
5. Select **Save Workout** to add the workout to Workout History.
6. Select **Edit** next to a saved workout to change its information.
7. Select **Update Workout** to save the changes.
8. Select **Delete** to remove a workout, or cancel the confirmation to keep it.

## How to Run Automated Tests

1. Install Node.js and npm if they are not already installed.
2. Open the FitWork project folder in VS Code.
3. Open the terminal.
4. Run `npm install` to install the project dependencies.
5. Run `npm test` to execute the automated tests.

The project uses Vitest for automated testing. There are currently six automated tests.

## Data Storage

FitWork uses browser local storage to save workout information. Saved workouts and changes remain available after refreshing the page. Data is stored only in the browser being used and is not stored in an online database.

## Project Files

- `index.html` - Contains the application structure and workout form.
- `styles.css` - Contains the application styling.
- `script.js` - Handles workout form interactions and displaying workouts.
- `workoutManager.js` - Contains functions for updating and deleting workouts.
- `workoutValidator.js` - Contains workout validation logic.
- `Tests/` - Contains automated tests.
- `package.json` - Contains project information and test dependencies.
- `package-lock.json` - Records installed dependency versions.
- `.gitignore` - Prevents unnecessary files from being tracked by Git.

## Known Limitations

- Workout data is stored only in the user's browser.
- There are no user accounts.
- Workouts cannot be shared between different devices.
- Search and filtering are not currently available.

## Technologies Used

- HTML
- CSS
- JavaScript
- Browser Local Storage
- Node.js and npm
- Vitest
