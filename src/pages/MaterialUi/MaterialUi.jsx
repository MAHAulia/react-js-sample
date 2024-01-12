import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import profile from '../../assets/profile.jpg'

import { Call, Mail } from "@mui/icons-material";

const MaterialUiPage = () => {
    const [profileData, setProfileData] = useState(null)

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                if (response.status != 200) {
                    return alert(`[${response.status}] - Server tidak 200 / tidak ok`)
                }
                const result = await response.json();
                setProfileData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getProfile()
    }, [])

    const call = (phone) => {
        window.open(`tel:${phone}`, '_blank');
    }

    const sendMail = (email) => {
        window.open(`mailto:${email}`, '_blank');
    }
    return <div className="profile-mui">
        <a href="/">Home</a>
        {profileData ? <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height:200 }}
                image={profile}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {profileData.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {`${profileData.address.street}, ${profileData.address.suite}, Kota. ${profileData.address.city} - Kodepos. ${profileData.address.zipcode}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button startIcon={<Call />} size="small" onClick={() => call(profileData.phone)}>Call</Button>
                <Button startIcon={<Mail/>} size="small" onClick={() => sendMail(profileData.email)}>Email</Button>
            </CardActions>
        </Card> : <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>}
    </div>
}

export default MaterialUiPage;