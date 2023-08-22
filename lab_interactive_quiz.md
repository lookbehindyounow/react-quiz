# Interactive Quiz Exercise

## Brief

Build an interactive quiz application using React that allows users to answer multiple-choice questions and display the user's final score.

## MVP

1. Display a question and it's options

2. Allow the user to select an option

3. Add 1 to the score if the selected option is correct and proceed to the next question

4. After completing all questions, render some congratulatory text and the user's final score

## Components/States

### Quiz Component

The `Quiz` component is the main component of the quiz application. It tracks the current question and the user's score. There is also a function to handle adjusting the score and increasing the current question when an answer is selected.

#### States:

- **currentQuestionIndex:** This state keeps track of the index of the current question being displayed. It starts at 0 and increments as the user moves to the next question.

- **score:** This state tracks the user's final score. It is initially set to 0 and is incremented whenever the user selects the correct answer for a question.

#### Function:

- **handleAnswerSelect:** This function is called when the user selects an answer for a question. It compares the selected answer with the correct answer for the current question. If the selected answer is correct, the score is incremented. It also advances the current question index to display the next question.

### Question Component

The `Question` component is responsible for displaying a single question and its corresponding options to the user.

#### Props:

- **question:** The text of the question to be displayed.

- **options:** An array of possible answer options for the question.

- **handleAnswerSelect:** A function passed from the `Quiz` component that handles the user's answer selection.

### Options Component

The `Options` component renders the multiple-choice options for a question and provides interaction for the user to select an answer and proceed to the next question.

#### Props:

- **options:** An array of possible answer options for the question.

- **handleAnswerSelect:** A function passed from the `Question` component that triggers when the user selects an answer.

## Bonus Challenges

1. Implement a way for the user to review their answers, showing the correct answer in the case that the user's choice was incorrect.

2. Allow users to restart the quiz after completing it.
