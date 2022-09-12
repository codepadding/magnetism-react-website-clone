import React, { useEffect, useState } from "react";

const UserList = () => {
  const [posts, setPosts] = useState([]);i
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setLoading(false)
    setPosts(data);
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     response.json().then((data) => {
    //        setPosts(data)
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      {!loading ? (
        posts.map((post, index) => {
          return (
            <div>
              <div className="card shadow-lg box-border p-7">
                <img
                  src={`https://picsum.photos/id/${index}/700/200`}
                  alt={post.title}
                />
                <h2 className="text-xl">{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};

export default UserList;
