# FitWork

FitWork is a simple workout tracking application that allows users to record workout information and view their saved workout history.

## Sprint 1 Features

- Enter a workout date
- Enter an exercise name
- Enter sets, reps, and weight
- Save workout information
- View saved workouts in workout history
- Keep saved workouts after refreshing the page

## How to Run the Application

1. Download or clone the FitWork repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser or use Live Server.
4. Enter workout information in the New Workout form.
5. Select **Save Workout** to add the workout to Workout History.

## Data Storage

FitWork uses the browser's local storage to save workout information. Saved workouts remain available after the page is refreshed. The workout data is stored only in the browser being used and is not stored in an online database.

## Project Files

- `index.html` - Contains the structure and workout entry form.
- `styles.css` - Contains the styling for the application.
- `script.js` - Handles saving and displaying workout information.
- `.gitignore` - Prevents unnecessary local files from being tracked by Git.

## Known Limitations

- Workout data is stored only in the user's browser.
- There are no user accounts.
- Saved workouts cannot currently be edited or deleted.
- Search and filtering are not included in Sprint 1.

## Technologies Used

- HTML
- CSS
- JavaScript
- Browser Local Storage