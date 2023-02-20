import React,{Component} from 'react';  

class Comment extends Component {

    render() {
        return (
          <div className='Comment'>
            <p>
              <span>{this.props.name}</span>
              <span>{this.props.date}</span>
              <span onClick={this.props.handleCommentDelete} className='deletebtn'>Delete</span>
            </p>
            <p>{this.props.children}</p>
          </div>
        )
    }
}
export { Comment as default }