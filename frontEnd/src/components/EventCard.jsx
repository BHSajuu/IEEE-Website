import React, { useState, useRef, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const EventCard = ({ title, date, description, image, link }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const descriptionElementRef = useRef(null);

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
      className="bg-gradient-to-t from-[#EEF5FF] to-[#B4D4FF]  p-6 w-100 rounded-3xl shadow-2xl hover:shadow-xl transition-shadow duration-300 flex justify-center items-center gap-2 cursor-pointer"
      onClick={handleOpen}
    >
      <div className="w-[300px]">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="text-gray-500">{date}</p>
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
        {link && (
          <a
            href={link}
            className="text-pretty text-blue-700"
            onClick={(e) => e.stopPropagation()}
          >
            Click to Register
          </a>
        )}
      </div>
      <div className="w-[300px]">
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
            color: '#0047AB',
            textAlign: 'center',
            borderBottom: '2px solid #0047AB',
            paddingBottom: '10px',
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            padding: '20px',
            color: '#333',
            fontSize: '1rem',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#F9FAFB',
          }}
        >
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
            borderTop: '2px solid #0047AB',
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: '#FF4F4F',
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#E03E3E',
              },
            }}
          >
            Cancel
          </Button>
          {link && (
            <Button
              onClick={() => window.open(link, '_blank')}
              sx={{
                backgroundColor: '#0047AB',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#003380',
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

export { EventCard };
