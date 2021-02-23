let firebase = require("./firebase");

exports.handler = async function (event) {
  let queryStringUserId = event.queryStringParameters.userId;
  let postsData = [];

  let db = firebase.firestore();

  let querySnapshot = await db
    .collection("posts")
    .where("userId", "==", queryStringUserId)
    .get();

  // let querySnapshot = await db.collection("posts").orderBy("created").get();
  let posts = querySnapshot.docs;
  for (let i = 0; i < posts.length; i++) {
    let postId = posts[i].id;
    let postData = posts[i].data();
    let postUsername = postData.username;
    let postImageUrl = postData.imageUrl;
    let querySnapshot = await db
      .collection("likes")
      .where("postId", "==", postId)
      .get();
    let postNumberOfLikes = querySnapshot.size;
    renderPost(postId, postUsername, postImageUrl, postNumberOfLikes);
  }
  // Retrieve posts from Firestore; for each post, construct
  // a new Object that contains the post's id, username, imageUrl,
  // and number of likes. Add the newly created Object to the
  // postsData Array.

  return {
    statusCode: 200,
    body: JSON.stringify(postsData),
  };
};
