import React, {Component} from 'react';  
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : this.props.data,
      editToggle:Array(this.props.data.length).fill(false)
    }
  };
  // Submit the form
  handleCommentSubmit(comment){
    this.setState({
      data:this.state.data.concat([comment])
    })
  }
  //Delete the comment
  handleCommentDelete(index){
    const data = this.state.data.slice(0),
      editToggle = this.state.editToggle.slice(0);
    console.log(data);
    console.log(editToggle);
    data.splice(index,1);
    editToggle.splice(index,1);
    this.setState({
      data:data,
      editToggle:editToggle
    })
  }

    render() {
        return (
            <div className='CommentBox' id='CommentBox'
                style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
              }}>
              <CommentList
                {...this.state}
                handleCommentDelete = {(index)=>this.handleCommentDelete(index)}
              />
              <CommentForm handleCommentSubmit={(comment)=> this.handleCommentSubmit(comment)}/>
            </div>
        )
    }
}
export {CommentBox as default}