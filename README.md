# Project Discription

This is a multiple choice quiz that askes a user some basic questions about JavaScript.  There is a time limit of thirty seconds to complete the test and a five second penalty is given for each wrong answer.  Once the test is complete, user answers all of the questions or the timer reaches zero, the user is shown the final score and given the oportunity to enter their initials and submit them to a highscore page.  I created this page by dynamically updating the HTML and CSS using JavaScript.  Questions for the quiz are generated in an array of objects, from which to pull from within functions of the JavaScript.  In this project, JavaScript was used to make the quiz interactive.  An unordered list of answers is created using DOM manipulation that responds if a users choice is a correct or an incorrect answer using the .addEventListner method.  Next I created and "event" function to compare the unordered lists' text content agains the answers listed in the questions array.  I crated a for loop to cycle through all of the questions and answers in the questions array, then stored the values in the variables "userQuestions" and "userAnswers."  After the loop has cycled through all of the questions and answers, or the timer is <= 0, I created a series of elements to store the users infomation into local storage, which is then added to a highscores page.  

## Links

[Github repository](https://github.com/Tarbo13/Quiz)

[Deployed quiz page](https://tarbo13.github.io/Quiz/.)

### Screen Shots

![Start Page](https://user-images.githubusercontent.com/68627417/94512397-cb442c00-01d0-11eb-8556-42b8e1e6115a.png)

<br>

![Questions List](https://user-images.githubusercontent.com/68627417/94512468-f595e980-01d0-11eb-9196-5415ac64eb9c.png)

<br>

![Final Initials Submit Page](https://user-images.githubusercontent.com/68627417/94512553-27a74b80-01d1-11eb-9287-5753db7f5e0d.png)

<br>

![Highscores Page](https://user-images.githubusercontent.com/68627417/94512592-41489300-01d1-11eb-81a0-60cac5013a15.png)




