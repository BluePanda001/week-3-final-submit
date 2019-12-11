import React,{Component} from '../../node_modules/@types/react'
// import axios from 'axios'
import {Link} from '../../node_modules/react-router-dom'
import Pokeball from '../pokeball.png'
import {connect} from '../../node_modules/react-redux/lib'

 class Home extends Component {
    // state was needed previously when getting dummy data from a website
    //  state={
    //      posts:[]
    //  }
    //  //method to get data from a website and store it to the state 
    //  componentDidMount(){
    //      axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res=>{
    //             this.setState({
    //                 posts:res.data.slice(0,10)
    //             })
    //         })
    //  }

    render(){
        console.log(this.props)
        // const {posts}=this.state;
        const {posts}=this.props;
        const postList=posts.length ?(
            posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="a panda"/>
                        <div className="card-content">
                            <Link to={'/'+post.id}>
                                <span className="card-title blue-text ">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="centre">No posts yet</div>
        )
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}    
            </div>
        )
    }
 }

 const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
 }

 export default connect(mapStateToProps)(Home)