import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_POSTS } from "../grapql/query";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const navigate = useNavigate();

  console.log(data);
  return (
    <div>
      {data?.getPosts?.map((item, index) => (
        <div onClick={()=>navigate(`post/${item.id}`)} key={index}>
          <strong>{item.title}</strong>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
