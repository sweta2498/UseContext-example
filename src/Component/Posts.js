import { Avatar, Card, CardContent, CardMedia, Checkbox, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App';
import Navbar from './Navbar'
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Comment from './Comment';

const Posts = () => {
    let { post, setPost } = useContext(UserContext);
    let { comments, setComments } = useContext(UserContext);
    const [ldata, setldata] = useState()
    const userid = ldata?.id;

    useEffect(() => {
        let time1 = localStorage.getItem('token');
        const time = JSON.parse(time1);
        setldata(time)
    }, [])

    const likePost = (id) => {
        const likesPost = post.filter((post) => post.id === id);
        // console.log(likesPost);
        let likedata = likesPost[0].like;
        // console.log(likedata);
        let index = likedata.indexOf(userid);
        // console.log(index);
        let likedata1 = []
        if (index === -1) likedata1 = [...likedata, userid];
        else likedata1 = likedata.filter((data) => data !== userid);
        // console.log(likedata1);

        fetch(`https://62983daaf2decf5bb73ddb37.mockapi.io/post/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ like: likedata1 })
            }).then(res => res.json()).
            then((result) => {
                post = post.map(item => {
                    if (item.id === result.id) {
                        return result
                    } else {
                        return item
                    }
                })
                setPost(post)
            })
    }

    return (
        <div>
            <Navbar />
            <Stack direction="row" justifyContent="space-evenly" sx={{ flexWrap: "wrap", mt: 10 }}  >
                {
                    post?.map((item, i) => {
                        return (
                            <Card sx={{ width: "320px", my: 2, mx: 10 }} key={item.id} >
                                <CardContent>
                                    <Avatar sx={{ width: 24, height: 24 }} alt="User" src={item.userphoto} />
                                    <Typography mt={-3.8} ml={4.5} variant='h6' align='left'>{item.name}</Typography>
                                </CardContent>
                                <CardMedia component="img"
                                    height="250"
                                    image={item.photo}
                                    alt='green iguana' />

                                <CardContent>
                                    <Typography mt={-1} variant='subtitle1' align='left'>{item.caption}</Typography>
                                </CardContent>

                                <Checkbox sx={{ mr: 34, mt: -2 }}
                                    onClick={() => { likePost(item.id) }}
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />} />
                                <Typography ml={2} mt={-4.5} variant='h6' align='right'>{item.like?.length} likes</Typography>
                                {
                                    <Comment postid={item.id} />
                                }
                            </Card>)
                    })
                }

            </Stack>
        </div>
    )
}

export default Posts