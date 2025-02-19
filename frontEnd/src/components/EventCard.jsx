import React, { useState, useRef, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const EventCard = ({ title, date, description, image, link }) => {
  const [open, setOpen] = useState(false);
   
  console.log(date);
  
  const formattedDate = new Date(date).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',  
    month: 'long',   
    year: 'numeric' 
  });
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const descriptionElementRef = useRef(null);
  
  const fixedLink = link.startsWith('http') ? link : `https://${link}`;

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div
    className="lg:w-[630px] lg:h-[212px] bg-gradient-to-t from-[#EEF5FF] to-[#B4D4FF] p-6 w-100 rounded-3xl shadow hover:shadow-[0_4px_15px_rgba(0,0,0,0.4)] transform transition-transform transition-shadow duration-300 hover:scale-105 flex justify-center items-center gap-2 cursor-pointer"
    onClick={handleOpen}
    >
      <div className="w-[300px] ">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="text-gray-500">{formattedDate}</p>
        <p
          className="mt-4 text-gray-700 overflow-hidden text-ellipsis line-clamp-2"
          title="Click for more details"
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {description}
        </p>
        <br />
        {fixedLink && (
          <a
            href={fixedLink}
            className="text-pretty text-blue-700"
            onClick={(e) => e.stopPropagation()}
          >
            Click to Register
          </a>
        )}
      </div>
      <div className="w-[300px] h-[170px]">
        <img
          src={image}
          alt="Not available"
          className="h-full object-cover rounded-2xl"
        />
      </div>

      {/* Dialog Box */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="event-dialog-title"
        aria-describedby="event-dialog-description"
        onClick={(e) => e.stopPropagation()}
        sx={{
          '& .MuiPaper-root': {
            width: '100vh',
            background: 'linear-gradient(135deg, #B4D4FF, #EEF5FF)',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <DialogTitle
          id="event-dialog-title"
          sx={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#000000',
            textAlign: 'center',
            paddingBottom: '10px',
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            padding: '20px',
            color: '#000000',
            fontSize: '1rem',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#F9FAFB',
          }}
        >
          {/* Image at the top */}
          <img
            src={image}
            alt="Not available"
            style={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '20px',
            }}
          />
          <DialogContentText
            id="event-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            sx={{
              lineHeight: '1.6',
              letterSpacing: '0.5px',
              fontWeight: '500',
            }}
          >
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            padding: '20px',
            backgroundColor: '#EEF5FF',
            display: 'flex',
            gap: '70px', // Adds space between the buttons
          }}
        >
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              backgroundColor: '#fffff',
              color: '#000000',
              fontWeight: 'bold',
              borderRadius: '8px', // Rounded corners
              padding: '10px 20px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                backgroundColor: '#FF4F4F',
                boxShadow: '0 4px 15px rgba(200, 100, 100, 0.4)',
                transform: 'scale(1.05)',
              },
            }}
          >
            Cancel
          </Button>
          {fixedLink && (
            <Button
              onClick={() => window.open(fixedLink, '_blank')}
              variant="outlined"
              sx={{
                backgroundColor: '#fffff',
                color: '#000000',
                fontWeight: 'bold',
                borderRadius: '8px', // Rounded corners
                padding: '10px 20px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  backgroundColor: '#1565C0',
                  boxShadow: '0 4px 15px rgba(25, 118, 210, 0.4)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Registration Link
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EventCard;
