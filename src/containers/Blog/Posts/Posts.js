import React,{Component} from "react";
import  axios  from "axios";
import Post from "../../../components/Post/Post";
import '../Posts/Posts.css'

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId : null
        
    };

    componentDidMount(){
        console.log(this.props);
        
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (response) => {
                const posts = response.data.slice(0,4);
                const updatePosts = posts.map((post) =>{
                    return{
                        ...post,
                        author : "Vamshi"
                    }
                })                
                this.setState({posts : updatePosts});
            })
        .catch(error => {
            console.log(error);
            this.setState({error : true})
        })
    }
     
    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id }); 
    };

    
    render(){
        const posts = this.state.posts.map((post) => {
            return <Post  
            key ={post.id} 
            title ={post.title}  
            author={post.author} 
            Clicked={() => this.postSelectedHandler(post.id)}/>
        }
    )
    return(
        <section className="Posts">
            {posts}
        </section>
    )}

}

export default Posts