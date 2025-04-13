Simplified Duolingo Replica:
    Create a sign-in/sign-up page that allows users to enter their credentials and be redirected to the main/core of the application.
    Simplify the language selection process to either a default language or a simplified selection option.
    Focus on implementing the core functionality of language lessons, exercises, progress tracking, and gamification elements.
    This option allows you to streamline the sign-in process and focus more on the core language-learning experience, making it more achievable within the project scope.


│   ├── Learn (folder for learn page/route)
│   │   ├── learnerPage.js (parent component for learn page)
│   │       ├── navigation.js (navigation section)
|   |           ├── 
│   │       ├── main-content.js (main content section)
|   |           ├── Exercise.js
│   │           ├── Lesson.js
│   │       ├── progress (progress section)
│   │           ├──
│   │   └── ...
│   └── ...
└── ...

currently working on:
user registration and user authentication:

To start I will be creating a replica of the duolingo home/main page.
that page consists of a header and logo centered at the top of the page
an image/giff animation in the center of the page under right under that is
a subtext and centered at the bottom are two buttons
a button with the text "GET STARTED" and below that a button with the text 
"I ALREADY HAVE AN ACCOUNT"


After I have the home/main page
work on the pages that are to be shown after the user clicks a button from the main page.
The "GET STARTED" button will take the user to a registration page
The "I ALREADY HAVE AN ACCOUNT" button will take the user to a login page

work on styling the main page to look like duo's
and setting up the conditonal rendering of the login and registration page
based on button clicks

I think flex box will do for styling the main page's layout due to it's simplicity

might have to update my condtional rendering to use routing instead.


```jsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import LearnPage from './LearnPage';
import SignInPage from './SignInPage';

const App = () => {
  const isUserSignedIn = true; // Replace with your own logic to determine if the user is signed in

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isUserSignedIn ? <Redirect to="/learn" /> : <MainPage />}
        </Route>
        <Route path="/learn">
          {isUserSignedIn ? <LearnPage /> : <Redirect to="/" />}
        </Route>
        <Route path="/signin">
          {isUserSignedIn ? <Redirect to="/learn" /> : <SignInPage />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
```


```jsx
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useParams } from 'react-router-dom';
import MainPage from './components/main/MainPage';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/learn">Learn</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/practice">Practice</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path={['/learn', '/characters', '/practice']}>
          <ContentPage />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

const ContentPage = () => {
  const { slug } = useParams();

  // Conditionally render content based on the slug
  let content = null;
  if (slug === 'learn') {
    content = <h2>Learn Page Content</h2>;
  } else if (slug === 'characters') {
    content = <h2>Characters Page Content</h2>;
  } else if (slug === 'practice') {
    content = <h2>Practice Page Content</h2>;
  }

  return (
    <div>
      <h1>Content Page</h1>
      {content}
    </div>
  );
};

export default App;
```



``` jsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import LearnPage from './LearnPage';
import SignInPage from './SignInPage';

const App = () => {
  const isUserSignedIn = true; // Replace with your own logic to determine if the user is signed in

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isUserSignedIn ? <Redirect to="/learn" /> : <MainPage />}
        </Route>
        <Route path="/learn">
          {isUserSignedIn ? <LearnPage /> : <Redirect to="/" />}
        </Route>
        <Route path="/signin">
          {isUserSignedIn ? <Redirect to="/learn" /> : <SignInPage />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
```
   <Router>
      <Routes>
        <Route exact path="/">
          {isSignedIn ? <Navigate to="/learn" /> : <Route path="/" component={MainPage}/>}
        </Route>
        <Route path="/learn">
          {isSignedIn ? <SignedInPage/> : <Navigate to="/"/>}
        </Route>
      </Routes>
    </Router>