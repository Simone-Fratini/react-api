import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from '../components/CardComponent';


function FoodPage() {
  const [posts, setPosts] = useState([]); 



  // dati da node backend
  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then((response) => {
        setPosts(response.data.data); 
      })
      .catch((error) => {
        console.error(`errore nell api: ${error}`);
      });
  }, []);

  // funxione per rimuovere card fe e be
  const handleDeleteDish = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id));
        console.log(`piatto ${id} eliminato`);
      })
      .catch((error) => {
        console.error(`errore nell eliminare questo id: ${id}:`, error);
      });
  };

  return (
    <div className="min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Dishes</h1>

      {/*Cards senza tag*/}
      <div className="flex flex-wrap justify-center gap-6">
        {posts.map((post) => (
          <CardComponent
            key={post.id}
            id={post.id}
            name={post.name}
            img={post.img}
            content={post.content}
            price={post.price}
            onDeleteDish={(e) => handleDeleteDish(e, post.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodPage;
