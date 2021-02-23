import './App.css';

function App() {
  // name and store variables before return statement
  const post = {
    title: "Dionaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property",
    comments: ["First!", "Great Post", "Hire this author now!"]
  }

  return (
    <div className="App">
      <h1>Dinosaurs are awesome</h1>
      {/* can use variables with curly brackets */}
      <p>by { post.author }</p>
      <p>{post.body}</p>
      <h3>Comments</h3>
      <p>{post.comments[0]}</p>
    </div>
  );
}

export default App;
