created a quiz application using react

routes, components and their usecases :

"/".

    LandingPage.jsx : single component which holds all the logic to collect user email.

"/test"

    Test.jsx : uses components like CountdownTimer, Navbar, Ques to collectively showcase a Test environment.
    
    CountdownTimer.jsx : separated the countdown logic to minimize rerendering.
    
    Navbar.jsx : navigation bar for user to navigate between questions.
    
    Ques.jsx : takes question data as prop from Test component and display the question with options

"/finish"

    Finish.jsx : finish page wrapped in a single component, this component shows the result and user marked options vs correct options


vanilla css is used throughout the project, inorder to keep in minimalistic.
