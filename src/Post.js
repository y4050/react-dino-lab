// functional Component

function Post(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>This is a {props.animal}</p>
        </div>
    )
}

export default Post;