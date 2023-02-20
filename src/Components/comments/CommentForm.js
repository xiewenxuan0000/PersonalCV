import React, {Component} from 'react';  


class CommentForm extends Component {
  handleSubmit(e){
   e.preventDefault();
   let content = this.refs.content.value,
     name = this.refs.name.value,
     date = new Date().toLocaleString(),
     waring = this.refs.waring;
   if (!name){
     waring.innerHTML = "Please enter your name";
     return null
   }else if (!content){
     waring.innerHTML = "Comment cannot be empty";
     return null
   }else {
     waring.innerHTML = " ";
   }
   this.props.handleCommentSubmit({name,date,content})
  }

    render() {
        return (
            <form className="CommentForm" onSubmit={(e)=>this.handleSubmit(e)}>
              <p className='waring' ref='waring'></p>
              <p><input type="text" placeholder='name' ref='name' className='sname'/></p>
              <p>
                <textarea name="" id="" cols="33" rows="5" placeholder='comment' ref='content'></textarea>
              </p>
              <p className='btn'>
                <button>submmit</button>
              </p>
            </form>
        )
    }
}
export { CommentForm as default }