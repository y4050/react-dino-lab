import './App.css';
import Comment from "./Comment"

function App() {
  // name and store variables before return statement
  const post = {
    title: "Dionaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property",
    comments: ["First!", "Great Post", "Hire this author now!"]
  }
  // second way
  // map returns an array
  const comments = post.comments.map((comment, index) => (<Comment text={comment} key={index}/>))
  // comments = [ <Comment test={post.comments[0]} />, <Comment test={post.comments[1]} />, <Comment test={post.comments[2]} />]

  return (
    <div className="App">
      <h1>Dinosaurs are awesome</h1>
      {/* can use variables with curly brackets */}
      <p>by { post.author }</p>
      <p>{post.body}</p>
      <h3>Comments</h3>
      {post.comments.map((comment) => <p>{comment}</p>)}
      {/* Second Way */}
      { comments }
    </div>
  );
}


export default App;
