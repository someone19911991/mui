import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography
} from "@mui/material";
import {red} from "@mui/material/colors";
import {Favorite, FavoriteBorder, MoreVert, Share} from "@mui/icons-material";
import flowersImg from "../assets/imgs/flowers.jpg";
import React from "react";

const Post = () => {
    return (
        <Card sx={{mb: 2}}>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
                title="Post Title"
                subheader="September 14, 2023"
            />
            <CardMedia
                component="img"
                height="250px"
                image={flowersImg}
                alt="Some post"
            />
            <CardContent>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Alias aut dolor enim excepturi exercitationem
                    harum inventore ipsam, maxime quis repellat similique
                    voluptate. Asperiores facilis omnis possimus quod
                    reiciendis totam unde. Alias amet aperiam assumenda
                    autem beatae consectetur culpa cum delectus dicta
                    dignissimos dolore eius expedita facere illum impedit
                    in, magni maxime, minus odit perspiciatis quae quas
                    quasi quod reprehenderit sapiente sequi tempora veniam
                    veritatis voluptas voluptate. Alias aliquam, aperiam cum
                    cumque delectus deleniti, doloremque dolorum eos error
                    et eveniet excepturi explicabo fugit in incidunt iste
                    laborum magni neque officia optio porro quae quisquam
                    rem sit tempore totam unde voluptas voluptatibus?
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{color: red[500]}} />}
                    />
                </IconButton>
                <IconButton>
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}


export default Post