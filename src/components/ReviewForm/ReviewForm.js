import axios from 'axios';
import React from 'react';
import styles from './ReviewForm.module.css';

let URL_USER = '';
  if (process.env.NODE_ENV !== 'production') {
    URL_USER = 'http://localhost:3000/reviews/';
  } else {
    URL_USER = 'https://tymovie-server.herokuapp.com/reviews/';
  }

class ReviewForm extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      name: '',
      content:'',
      movieId: ''
    };

  }


  handleInput = event => {
    this.setState({ name: event.target.value });
  }

  handleTextarea = event => {
    this.setState({ content: event.target.value });
  }

  handleSubmit = (event) => {

    event.preventDefault();

    // this.props.handleSubmit(event)

    const token = localStorage.getItem('auth_token');
    console.log('token!', token)
    if (token !== null) {

    axios.post(URL_USER,
    // form data (becomes params in Rails)
    {
      name: this.state.name,
      content: this.state.content,
      movieId: this.props.movieId

    },
    // config:
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then( res => {
      console.log('response:', res.data);
      this.props.onReviewAdded(res.data);

    })
    .catch( err => {
      console.warn( err );
    });

  } else {

    window.location.href = '/login'
  }
}


  render(){
    return(
      <div>
        <h2>Add your review</h2>

        <form onSubmit={this.handleSubmit}>
        <input className={styles.title} placeholder="Title" type="text" onChange={this.handleInput}/>
        <br/>
        <br/>
        <textarea className={styles.text} type="text" placeholder="Review" onChange={this.handleTextarea}/>
        <br/>
        <br/>
        <input className={styles.button} type="submit" value="Add review" />
        <br/>
        </form>
      </div>
    );
  }
}





export default ReviewForm;
