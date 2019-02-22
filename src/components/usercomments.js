import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';
import axios from 'axios';

const UserComments = (props) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(['a coment']);
  const onChange = event => {
    setComment(event.target.value);
  };

  const createComment = async comment => {
    const createCommentResult = await axios({
      method: 'post',
      url: `${API_BASE_URL}/comments`,
      data: { comment, eventId: props.eventId },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '.concat(localStorage.getItem('jwtToken'))
      }
    })
      .then(() => {
        return '';
      })
      .then(() => {
        fetchComments();
      })
      .catch(error => console.log(error));
  };

  const fetchComments = async () => {
    const fetchCommentsResult = await axios(`${API_BASE_URL}/comments/event/${props.eventId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '.concat(localStorage.getItem('jwtToken'))
      }
    });
    setComments(fetchCommentsResult.data);
  };
  useEffect(() => {
    fetchComments();
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    setComments([...comments, comment]);
    createComment(comment);
  };

  const mapComments = comments.map((item, index) => (
    <li key={index}>{item.comment}</li>
  ));

  return (
    <div className="user-comments">
      <form onSubmit={onSubmit}>
        <label>Comments</label>
        <textarea style={{ background: '#ccc' }} onChange={onChange} />
        <button type="submit">Add a public comment</button>
      </form>
      <ul>{mapComments}</ul>
    </div>
  );
};

export default UserComments;
