import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';
import axios from 'axios';

const UserComments = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const onChange = event => {
    setComment(event.target.value);
    console.log(event.target.value);
  };

  const createComment = async comment => {
    const createCommentResult = await axios({
      method: 'post',
      url: `${API_BASE_URL}/comments`,
      data: { comment, orgId: '5c6db84cca88852e5c895aeb' },
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

  // const fetchComments = async comment => {
  //   const fetchCommentsResult = await axios({
  //     method: 'get',
  //     url: `${API_BASE_URL}/comments`,
  //     // data: { comment, orgId: '5c6db84cca88852e5c895aeb' },
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer '.concat(localStorage.getItem('jwtToken'))
  //     }
  //   });
  //   setComments(fetchCommentsResult.data)
  // };
  /******************************************* */
  const fetchComments = async () => {
    const fetchCommentsResult = await axios(`${API_BASE_URL}/comments`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '.concat(localStorage.getItem('jwtToken'))
      }
    });
    setComments(fetchCommentsResult.data);
  };
  /****************************************************************************/
  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    createComment();
  };

  const onSubmit = event => {
    console.log('************', comment);
    event.preventDefault();
    setComments([...comments, comment]);
    createComment(comment);
  };

  const mapComments = comments.map((item, index) => <li key={index}>{item.comment}</li>);

  return (
    <div>
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
