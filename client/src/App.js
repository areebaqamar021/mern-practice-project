import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./components/users/Add";
import Users from "./components/users/Users";
import Header from "./components/Header";
import SingleUser from "./components/users/SingleUser";
import Home from "./components/Home";
import Posts from "./components/posts/Posts";
import AddPost from "./components/posts/AddPost";
import SinglePost from "./components/posts/SinglePost";
import EditPost from "./components/posts/EditPost";
import Login from "./components/users/Login";

function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Add />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/single-user/:id">
            <SingleUser />
          </Route>
          
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/add-post">
            <AddPost />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/single-post/:id">
            <SinglePost />
          </Route>
          <Route path="/edit-post/:id">
            <EditPost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
