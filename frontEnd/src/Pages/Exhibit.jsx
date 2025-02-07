import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const exhibitData = [
  {
    id: 1,
    title: "Exhibit 1",
    description:
      "Description for Exhibit 1. This is a placeholder description.",
    image: "/assets/exhibit1.jpg",
  },
  {
    id: 2,
    title: "Exhibit 2",
    description:
      "Description for Exhibit 2. This is a placeholder description.",
    image: "/assets/exhibit2.jpg",
  },
  {
    id: 3,
    title: "Exhibit 3",
    description:
      "Description for Exhibit 3. This is a placeholder description.",
    image: "/assets/exhibit3.jpg",
  },
  {
    id: 4,
    title: "Exhibit 4",
    description:
      "Description for Exhibit 4. This is a placeholder description.",
    image: "/assets/exhibit4.jpg",
  },
  {
    id: 5,
    title: "Exhibit 5",
    description:
      "Description for Exhibit 5. This is a placeholder description.",
    image: "/assets/exhibit5.jpg",
  },
  {
    id: 6,
    title: "Exhibit 6",
    description:
      "Description for Exhibit 6. This is a placeholder description.",
    image: "/assets/exhibit6.jpg",
  },
];

const Exhibit = () => {
  const navigate = useNavigate();

  const handleLearnMore = (id) => {
    navigate(`/exhibit/${id}`);
  };

  return (
    <div
      className="p-6 flex flex-wrap justify-evenly gap-4 mt-16  max-w-full"
      style={{ paddingTop: "4rem" }}
    >
      {exhibitData.map((exhibit) => (
        <Card
          key={exhibit.id}
          sx={{
            maxWidth: 330,
            backgroundColor: "rgb(220,225,230)",
            transition: "transform 0.3s, box-shadow 0.3s",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            },
          }}
          className="m-4"
        >
          <CardMedia
            sx={{
              height: 200,
              filter: "brightness(0.85)",
              transition: "filter 0.3s",
              "&:hover": {
                filter: "brightness(1)",
              },
            }}
            image={exhibit.image}
            title={exhibit.title}
          />
          <CardContent sx={{ padding: 3 }}>
            <Typography gutterBottom variant="h5" component="div">
              {exhibit.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {exhibit.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ padding: 3 }}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => handleLearnMore(exhibit.id)}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Exhibit;
