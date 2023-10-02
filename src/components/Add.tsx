import React, { useState } from 'react'
import {Add as AddIcon, EmojiEmotions, PersonAdd, VideoCameraBack, Image, DateRange} from '@mui/icons-material'
import {
    Avatar,
    Box,
    ButtonGroup,
    Button,
    Fab,
    Modal, Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material'

const StyledModalBox = styled(Box)(({theme}) => ({
    borderRadius: 5,
    width: 400,
    height: 280,
    // bgcolor: 'background.default',
    backgroundColor: theme.palette.background.default,
    // color: "text.primary",
    color: theme.palette.text.primary,
    padding: '20px',
}))

const StyledCreatePostTitleTypography = styled(Typography)(() => ({
    variant: 6,
    color: 'gray',
    textAlign: 'center',
}))

const ModalUserBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
}))

const Add = () => {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Tooltip
                onClick={() => setOpen(true)}
                title="Add Post"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: { xs: 'calc(50% - 25px)', sm: 30 },
                }}
            >
                <Fab color="primary">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledModalBox>
                    <StyledCreatePostTitleTypography>
                        Create Post
                    </StyledCreatePostTitleTypography>
                    <ModalUserBox>
                        <Avatar src={''} sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant={'subtitle1'}>
                            John Doe
                        </Typography>
                    </ModalUserBox>
                    <TextField
                        placeholder="What's on your mind?"
                        sx={{width: '100%' }}
                        multiline
                        rows={4}
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained">
                        <Button>Post</Button>
                        <Button sx={{width: '100px'}}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </StyledModalBox>
            </Modal>
        </>
    )
}

export default Add
