import React, {
    Component
} from 'react'

import CommentImput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {

    //构造器，初始化state
    constructor(){
        super()
        this.state = {
            comments :[]
        }
    }

    componentWillMount(){
        this._loadComments()
    }

    _loadComments(){
        let comments = localStorage.getItem('comments')
        if(comments) {
            comments = JSON.parse(comments)
            this.setState({
                comments:comments
            })
        }
    }

    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
    }

    onSubmitComment(comment){
        if (!comment) return
        if (!comment.name) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState({
            comments : this.state.comments
        })
        this._saveComments(this.state.comments)
    }

    render(){
        return(
            <div className='wrapper'>
                <CommentImput onSubmit={this.onSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp