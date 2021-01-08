import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getPostById } from "../../WebAPI";
import Loading from "../../components/Loading";

const PostPageContainer = styled.div`
  width: 80%;
  max-width: 900px;
  min-height: 80vh;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 32px;
  margin: 1rem auto;
  box-sizing: border-box;
  position: relative;
  border-radius: 5px;
  // padding: 1.5rem;
`;

const PostHeader = styled.div`
  // // display: flex;
  // justify-content: space-between;
  // align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
`;

const PostTitle = styled.h1`
  overflow-wrap: break-word;
`;

const PostDate = styled.div`
  color: #333;
`;

const PostContent = styled.div`
  padding: 1rem 0;
  margin: 0 auto;
  overflow-wrap: break-word;
`;

const ErrorMessage = styled.div`
  margin-top: 16px;
  color: red;
`;

export default function PostPage() {
  let { id } = useParams();
  const [postApiError, setPostApiError] = useState(false);
  const [post, setPost] = useState(null);
  useEffect(() => {
    setPostApiError(false);
    setPost(null);
    getPostById(id)
      .then((res) => {
        if (!res[0]) {
          return setPostApiError("沒有這個 id");
        }
        setPost(res[0]);
      })
      .catch((err) => {
        setPostApiError(err.message);
      });
  }, [id]);

  return (
    <PostPageContainer>
      {!post && !postApiError && <Loading>Loading ...</Loading>}
      {!post && postApiError && (
        <ErrorMessage>
          Something went wrong. {postApiError.toString()}
        </ErrorMessage>
      )}
      {post && (
        <>
          <PostHeader>
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
          </PostHeader>
          <PostContent>{post.body}</PostContent>
        </>
      )}
    </PostPageContainer>
  );
}
