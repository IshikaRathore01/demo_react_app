import React from 'react';
import './Info.css';

// const Info = () => {
//     return (
//         <div>
//             <h2>Information</h2>
//             <p>This is a simple Todo application built with React.</p>
//         </div>
//     );
// };
const Info = () => {
    return (
        <div className='About-us'>
            <h2>About This Todo Application</h2>
            <p>Welcome to the <strong>Todo Application</strong>! This simple and intuitive app allows you to manage your daily tasks efficiently and with ease. Whether you're keeping track of work assignments, personal goals, or any to-do list, this app helps you stay organized.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Add Tasks:</strong> Easily add tasks to your to-do list by typing in the input field and clicking the "Add" button.</li>
                <li><strong>Mark Tasks as Completed:</strong> Once a task is finished, you can mark it as completed with a simple click. Completed tasks are visually distinct from pending ones.</li>
                <li><strong>Remove Tasks:</strong> If a task is no longer needed, you can remove it from your list with a single click.</li>
            </ul>

            <h3>How It Works</h3>
            <p>When you visit the Todo Application:</p>
            <ol>
                <li><strong>Initial Load:</strong> The app retrieves any saved tasks from <strong>localStorage</strong> and displays them in the todo list.</li>
                <li><strong>Add a Task:</strong> You can type in a task and add it by pressing the "Add" button. The app saves the task to <strong>localStorage</strong>.</li>
                <li><strong>Task Editing:</strong> Ability to edit existing tasks.</li>
                <li><strong>Complete or Delete Tasks:</strong> You can mark tasks as completed or remove them from your list as needed.</li>
            </ol>

            <h3>Technologies Used</h3>
            <ul>
                <li><strong>React.js</strong> for building the user interface.</li>
                <li><strong>CSS</strong> for styling the components.</li>
                <li><strong>localStorage</strong> for persistent data storage in the browser.</li>
            </ul>

            <h3>Future Enhancements</h3>
            <p>While this app is already functional, there are plans for adding more features such as:</p>
            <ul>
                <li><strong>Prioritization:</strong> Add a priority level to tasks and sort them accordingly.</li>
                <li><strong>Due Dates:</strong> Attach due dates to tasks and notify the user when they're approaching.</li>
            </ul>

            <h3>Feedback and Contributions</h3>
            <p>This app is open to improvements and contributions! If you have suggestions or want to add more features, feel free to fork the repository and submit a pull request.</p>

            <p>Thank you for using the Todo Application! Stay organized, and never forget your tasks again. 😊</p>
        </div>
    );
};
export default Info;