//https://jsonplaceholder.typicode.com/posts

//List
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    // Handle the retrieved posts
    console.log(posts);
  })
  .catch(error => {
    // Handle error if any
    console.error(error);
  });



  //Post
const new_post = {
  title: 'New Post',
  content: 'This is the content of the new post.'
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(new_post)
})
  .then(response => response.json())
  .then(createdPost => {
    // Handle the newly created post
    console.log(createdPost);
  })
  .catch(error => {
    // Handle error if any
    console.error(error);
  });



//Update
const updatedPost = {
  title: 'Updated Post',
  content: 'This is the updated content of the post.'
};

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedPost)
})
  .then(response => response.json())
  .then(updatedPost => {
    // Handle the updated post
    console.log(updatedPost);
  })
  .catch(error => {
    // Handle error if any
    console.error(error);
  });


//Delete

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      // Post successfully deleted
      console.log('Post deleted');
    } else {
      // Handle error if any
      throw new Error('Unable to delete post');
    }
  })
  .catch(error => {
    console.error(error);
  });


//Filtering

// This will return all the posts that belong to the third user
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));































