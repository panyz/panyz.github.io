import React,{Component} from 'react'

/**
 * 
 * @class CommentInput
 * @extends {Component}
 */
class CommentInput extends Component{

    constructor() {
        super()
        this.state = {
            name: '',
            content: ''
        }
    }

    onNameChange(event) {
        this.setState({
            name: event.target.value,
        })
    }

    onContentChange(event) {
        this.setState({
            content: event.target.value,
        })
    }

    onBtnSubmit() {
        if (this.props.onSubmit) {
            this.props.onSubmit({ 
                name : this.state.name,
                content : this.state.content,

             })
        }
        this.setState({
            content: ''
        })
    }

    handleNameBlur(event) {
        this._saveName(event.target.value)
    }

    _saveName(name) {
        localStorage.setItem("name", name)
    }

    componentDidMount() {
        this.textarea.focus()
    }

    componentWillMount() {
        this._loadName()
    }

    _loadName() {
        const userName = localStorage.getItem("name")
        if (userName) {
            this.setState({
                name: userName,
            })
        }
    }

    render(){
        return(
            <div className='comment-input'>

                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input
                        onBlur={this.handleNameBlur.bind(this)} 
                        value={this.state.name}
                        onChange={this.onNameChange.bind(this)}/>
                    </div>
                </div>

                <div className='comment-field'>                 
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea 
                        ref={(textarea) => this.textarea = textarea}
                        value={this.state.content}
                        onChange={this.onContentChange.bind(this)}/>
                    </div>
                </div>

                <div className='comment-field-button'>
                    <button onClick={this.onBtnSubmit.bind(this)}>发布</button>
                </div>

            </div>
        )
    }
}

export default CommentInput