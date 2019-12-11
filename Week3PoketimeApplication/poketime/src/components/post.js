import React,{Component} from '../../node_modules/@types/react'
// import axios from 'axios'
import { connect } from '../../node_modules/react-redux/lib'
import detelePost from '../actions/postActions'

class post extends Component{
    //needed previously when getting dummy data from a website
    // state={
    //     post:null
    // }
    // componentDidMount(){
    //     let id=this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //         .then(res=>{
    //             this.setState({
    //                 post:res.data
    //             })
    //         })
        
    // }
    render(){
    //    handleClick = (e) => {
    //        e.preventDefault();
    //        this.props.deletePost(this.props.post.id);
    //    }
        //to change it back to get data from a website change props to state        
        const post=this.props.post ? (
            
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                {/* <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Detele Post
                    </button>
                </div> */}
                
            </div>
        ):(
            <div className="center">Loading post...</div>
            
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return{        
        post: state.posts.find(post => post.id == id )    
    }
}

// const mapDispatchToProps=(dispatch)=>{
//     return{
//         deletePost: (id) =>{dispatch(detelePost(id)) }
//     }
// }

export default connect(mapStateToProps)(post)