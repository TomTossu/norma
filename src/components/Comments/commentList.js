import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import CommentItem from './commentItem';
import { View, ScrollView } from 'react-native';

const CommentList = ({
  posts,
  updateComment,
  deleteComment,
  title,
  logged,
  user
}) => {


  let comments;

  if (posts != null) {

    comments = (posts.map((comment, index) => (

      <CommentItem
        key={`key#${title}#${index}`}
        title={title}
        username={comment.username}
        text={comment.text}
        id={comment.id}
        updateComment={updateComment}
        deleteComment={deleteComment}
        logged={logged}
        currentUser={user}
      />

    ))
    )


  }


  console.log('this is comment list')
  return (
    <Fragment>
      {comments}
    </Fragment>
  )
}

export default CommentList
