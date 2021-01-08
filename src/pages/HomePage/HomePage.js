import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { getPosts } from "../../WebAPI";

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  paddiing: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const PostTitle = styled(Link)`
  font-size: 24px;
  color: #333;
  text-decoration: none;
`;
const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
`;

function Post({ post }) {
  return (
    <PostContainer>
      <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>
      <PostDate>{new Date(post.createdAt).toLocaleDateString()}</PostDate>
    </PostContainer>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};
export default function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);
  return (
    <Root>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Root>
  );
}
