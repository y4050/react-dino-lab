import './App.css';
import { Component } from "react";
import Comment from './Comment';

class App extends Component {
  state = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Checkout out this body property",
    comments: ['First!', 'Great post', 'Hire this author now!']
  }

  // method that will update "body" state
  changeBody = () => {
    const userInput = prompt("Give it a new body")
    // update body state
    this.setState({
      body: userInput
    })
  }
  
  addComment = () => {
    const userInput = prompt("Give it a new body")
    // update body state
    this.setState({
      comments: this.state.comments.concat(userInput)
    })
  }

  render() {
    // map returns an array 
    const comments = this.state.comments.map((comment, index)=> (<Comment text={comment} key={index}/>))
    // comments = [ <Comment text={post.comments[0]} />, <Comment text={post.comments[1]} />, <Comment text={post.comments[1]} />]
  
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <p>by {this.state.author}</p>
        <p>{this.state.body}</p>
        <h3>Comments:</h3>
        { comments }
        <button onClick={this.changeBody}>Change Body</button>
        <button onClick={this.addComment}>Add To Comment</button>
      </div>
    );
  }
}

export default App;