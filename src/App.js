import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getPosts, getDetails } from "./APIs/apiCallFunctions";
import PageContainer from "./components/mainPage/PageContainer";
import DetailContainer from "./components/cardDetail/DetailContainer";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    (async() => {
      const postsFromServer = await getPosts();
      const requests = postsFromServer.map(item => getDetails(item.id));
      const results = await Promise.all(requests);
      const parsedArr = results.map(item => ({
        data: [...item],
        id: item[0].product,
      }));

      setPosts(postsFromServer);
      setDetails(parsedArr);
    })();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        
          <Switch>
            <Route
              path="/"
              exact
              render={props => <PageContainer posts={posts} {...props} />}
            />
            <Route path="/:id" render={props => <DetailContainer posts={posts} {...props} />} />
          </Switch>
    
        <Footer />
      </div>
    </Router>
  );
};

export default App;
