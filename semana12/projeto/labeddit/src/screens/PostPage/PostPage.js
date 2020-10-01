import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { goToFeed } from '../../routes/Coordinator'
import { useHistory } from "react-router-dom";

const PostPage = () => {
    useProtectedPage()

    return (
        <div>
            {/* <button onClick={() => goToFeed(history)}>
            VOLTAR
            </button> */}
            PostPage
        </div>
    )
}

export default PostPage