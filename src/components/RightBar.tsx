import React from 'react'
import { StyledBox } from '../styled_components'
import {
    AvatarGroup,
    Avatar,
    Box,
    Typography,
    ImageList,
    ImageListItem, ListItemAvatar, List, ListItem, ListItemText, Divider,
} from '@mui/material'
import { itemData } from '../utils/consts'

const RightBar = () => {
    return (
        <StyledBox
            sx={{
                display: { xs: 'none', sm: 'block' },
                flex: { sm: 4 },
                ml: 2
            }}
        >
            <Typography variant="h6" fontWeight={100}>
                Online Friends
            </Typography>
            <AvatarGroup max={4}>
                <Avatar src={'semdn'} alt={'George'} />
                <Avatar alt={'Josh'} />
                <Avatar alt={'Ann'} />
                <Avatar alt={'Arnold'} />
                <Avatar alt={'Peter'} />
            </AvatarGroup>
            <Typography variant="h6" fontWeight={100}>
                Latest Photos
            </Typography>
            <ImageList sx={{height: 450, overflowY: "auto"}} gap={10}>
                {itemData.map((item) => (
                    <ImageListItem key={item.title}>
                        <img src={item.img} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Sandra Adams
                                </Typography>
                                {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </StyledBox>
    )
}

export default RightBar
