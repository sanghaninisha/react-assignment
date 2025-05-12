import React, { useEffect, useState } from 'react';

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  return (
    <div>
      <h2>UseEffect - Product List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td><img src={i.image} alt="product" height="50" width="50" /></td>
              <td>{i.title}</td>
              <td>{i.description.slice(0, 60)}...</td>
              <td>{i.category}</td>
              <td>${i.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Api;
