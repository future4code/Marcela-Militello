import styled from 'styled-components'

export const PostCardContainer = styled.div`
  width: 100%;
  margin: 10px;
  cursor: pointer;
`

export const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: lightgrey;
  height: 100%;
  border: none;
  border-radius: 7px;
  box-shadow: 2px 2px 3px 2px grey;

  :hover {
    background: grey;
    transition: 0.2s;
  }
`

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh;
`

// export const AddPostButton = styled.div`
//   position: fixed !important;
//   right: 20px;
//   bottom: 20px;
//   z-index: 3;
// `

export const CardActionArea = styled.div`

`

export const CardMedia = styled.div`

`