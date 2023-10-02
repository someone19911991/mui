import React from 'react'
import { StyledBox } from '../styled_components'
import Post from "./Post";

const Feed = () => {
    return (
        <StyledBox sx={{ flex: { xs: 1, sm: 6 } }}>
            <Post />
            <Post />
            <Post />
        </StyledBox>
    )
}

export default Feed
