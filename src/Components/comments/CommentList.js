import React from 'react';  
import Comment from './Comment';

function CommentList (props){

      console.log(props.data)
      let CommentList = props.data.map((item,index)=>{
        let {name,date,content}=item;
        item.index = index
        return   <Comment
          key={index}
          name={name}
          date={date}
          editToggle={props.editToggle[index]}
          handleCommentDelete={() => props.handleCommentDelete(index)}>
          {content}
        </Comment>
      });
        return (
            <div className="CommentList">
              {CommentList}
            </div>
        )
}
export default CommentList;