import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { useHistory } from "react-router-dom";
import useRequestData from '../../hooks/useRequestData'
import PostCard from './PostCard';
import { goToPosts } from '../../routes/Coordinator';
import { FeedContainer, PostContainer } from './styled';
import AddPostForm from '../../components/AddPostForm/AddPostForm';

const FeedPage = () => {
    useProtectedPage()

    const history = useHistory()
    const [postsList, getPosts] = useRequestData([])
    const posts = postsList.posts
      
    const renderPosts = () => {
        return(
          posts.map((item) => {
            return (
              <PostCard
                key={item.post_id}
                onClick={() => goToPosts(history, item.post_id)}
                username={item.username}
                title={item.title}
                text={item.text}
                commentsCount={item.commentsCount}
                // createdAt={item.createdAt}
                // userVoteDirection={item.userVoteDirection}
                // votesCount={item.votesCount}
                
              />
            )
          })
        )
      }
      
        return (
          <>
            <PostContainer>
              <AddPostForm />
            </PostContainer>
            <FeedContainer>
              {posts && posts.length > 0 ? renderPosts() : <div>Carregando...</div>}
            </FeedContainer>
          </>
        )
      }
      
export default FeedPage


