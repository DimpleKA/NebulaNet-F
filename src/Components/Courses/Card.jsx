import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Cards = (props) => {
    const navigate = useNavigate();
    const [cardDetails, setCardDetails] = useState({
        imageLink: "https://assets-prd.ignimgs.com/2023/03/23/keanu-best-stunts-oo-1679595095548.jpg",
        title: "John Wick",
        description: "This is why I killed his dog",
        videoLink: "/john/wick/kjh.mp4"
    });

    const gotoCourse = async (videoLink) => {
        navigate(videoLink);
    }

    return (
        <div className="Card">
            <Card
                sx={{
                    maxWidth: 480,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)', // Slightly enlarge the card on hover
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Add a shadow
                        border: '2px solid #6200ea', // Change border color on hover
                    },
                    border: '2px solid transparent', // Default border (no color)
                    borderRadius: '8px', // Rounded corners
                    overflow: 'hidden', // Ensure image doesn't overflow
                }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={cardDetails.imageLink}
                        alt="John Wick"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {cardDetails.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {cardDetails.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <button
                        type="button"
                        onClick={() => gotoCourse(cardDetails.videoLink)}
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                        Start Watching
                    </button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Cards;
