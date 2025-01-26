import {
    Avatar,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
    Dialog,
    DialogActions,
    Button,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';
import React, { useState } from 'react';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


function NewsCard({ newsItem }) {
    const [isFavorite, setIsFavorite] = useState(false); // State for FavoriteIcon
    const [isDialogOpen, setIsDialogOpen] = useState(false); // State for Share Dialog
    const [animateFavorite, setAnimateFavorite] = useState(false); // Animation trigger state
    const [linkCopied, setLinkCopied] = useState(false); // State for link copy feedback
    
    // Handle Favorite Icon toggle
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        setAnimateFavorite(true); // Trigger animation
        setTimeout(() => setAnimateFavorite(false), 500); // Reset animation after 500ms
    };

    // Handle dialog open/close
    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };
    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleShare = (platform) => {
        // Construct the specific URL for the news item
        const link = `${window.location.origin}/news`; // Assuming `id` is unique for the news

        switch (platform) {
            case 'whatsapp':
                window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(link)}`, '_blank');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`, '_blank');
                break;
            default:
                break;
        }
    };
    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${window.location.origin}/news`);
        setLinkCopied(true); // Provide feedback after copying
    };
    return (
        <div
            className="relative overflow-y-auto bg-gradient-to-r from-violet-300 to-lime-200 flex lg:flex-row flex-col justify-center items-center w-full lg:w-4/5 lg:ml-32 mx-auto rounded-2xl gap-10 min-h-[400px]"
            onDoubleClick={toggleFavorite} // Toggle favorite on double-click
        >
            {/* Content Section */}
            <div className="w-full lg:w-4/5 min-h-[400px] flex flex-col gap-4 p-4">
                <CardHeader
                    avatar={<Avatar alt="image" src={newsItem.avaterUrl} />}
                    title={<Typography variant="h6">{newsItem.userName}</Typography>}
                    subheader={newsItem.date}
                    className="text-black"
                />

                <div className="w-full h-[2px] bg-gray-400 my-2"></div>

                <CardContent className="w-full min-h-52 flex flex-col gap-1">
                    <p className="text-xl">{newsItem.title} :</p>
                    <p>{newsItem.description}</p>

                    {/* Image Section for small screens */}
                    <div className="lg:hidden flex justify-center items-center mt-4">
                        <img
                            src={newsItem.newsUrl}
                            alt="image"
                            className="w-[100%] max-w-[300px] h-auto rounded-xl"
                        />
                    </div>
                </CardContent>

                <div className="w-full h-[2px] bg-gray-400 my-2"></div>

                <CardActions
                    disableSpacing
                    sx={{
                        gap: 6,
                        position: 'relative',
                        bottom: 0,
                        left: '0',
                        justifyContent: 'center',
                    }}
                >
                    {/* Favorite Icon */}
                    <IconButton
                        aria-label="add to favorites"
                        onClick={toggleFavorite} // Single click handler
                        sx={{
                            color: isFavorite ? '#2E1065' : 'white',
                            transform: animateFavorite ? 'scale(1.3)' : 'scale(1)', // Scale animation
                            transition: 'transform 0.3s ease-in-out',
                        }}
                    >
                        <FavoriteIcon />
                    </IconButton>

                    {/* Share Icon */}
                    <IconButton aria-label="share" onClick={handleDialogOpen}>
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </div>

            {/* Image Section for large screens */}
            <div className="hidden lg:flex justify-center items-center">
                <img
                    src={newsItem.newsUrl}
                    alt="image"
                    className="mr-20 w-[400px] h-[400px] rounded-xl"
                />
            </div>

            {/* Share Dialog */}
            <Dialog
                open={isDialogOpen}
                onClose={handleDialogClose}
                sx={{
                    '& .MuiDialog-paper': {
                        padding: 3,
                        borderRadius: '16px',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                        maxWidth: '400px',
                        width: '70%',
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#1e3a8a',
                        borderBottom: '1px solid #d1d5db',
                        paddingBottom: 2,
                    }}
                >
                    Share the News
                </DialogTitle>
                <DialogContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        color: '#374151',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            border: '1px solid #d1d5db',
                            borderRadius: '8px',
                            padding: '5px 10px',
                            backgroundColor: '#f3f4f6',
                        }}
                    >
                        <TextField
                            fullWidth
                            value={`${window.location.origin}/news`}
                            InputProps={{
                                readOnly: true,
                                disableUnderline: true,
                                style: { fontSize: '0.9rem', color: '#6b7280' },
                            }}
                        />
                        <IconButton onClick={handleCopyLink}>
                            <ContentCopyIcon sx={{ color: '#6b7280' }} />
                        </IconButton>
                    </div>
                    {linkCopied && (
                        <Typography sx={{ fontSize: '0.8rem', color: 'green' }}>
                            Link copied to clipboard!
                        </Typography>
                    )}
                    <Typography sx={{ fontSize: '0.9rem', color: '#6b7280' }}>Or share directly on:</Typography>
                    <div className="flex gap-4 mt-2">
                        <IconButton onClick={() => handleShare('whatsapp')}>
                            <WhatsAppIcon sx={{ color: '#25D366', fontSize: '2rem' }} />
                        </IconButton>
                        <IconButton onClick={() => handleShare('linkedin')}>
                            <LinkedInIcon sx={{ color: '#0077b5', fontSize: '2rem' }} />
                        </IconButton>
                        <IconButton onClick={() => handleShare('facebook')}>
                            <FacebookIcon sx={{ color: '#1877F2', fontSize: '2rem' }} />
                        </IconButton>
                    </div>
                </DialogContent>
                <DialogActions
                    sx={{
                        justifyContent: 'center',
                        borderTop: '1px solid #d1d5db',
                        paddingTop: 2,
                    }}
                >
                    <Button
                        onClick={handleDialogClose}
                        sx={{
                            fontSize: '1rem',
                            fontWeight: '500',
                            color: '#1e40af',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#dbeafe',
                            },
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default NewsCard;
