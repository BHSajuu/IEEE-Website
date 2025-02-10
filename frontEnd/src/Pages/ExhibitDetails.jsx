import React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


const exhibitData = {
  1: {
    title: "Exhibit 1",
    description: "This is the details of Exhibit 1.",
    image: "/assets/exhibit1.jpg",
  },
  2: {
    title: "Exhibit 2",
    description: "This is the details of Exhibit 2.",
    image: "/assets/exhibit2.jpg",
  },
  3: {
    title: "Exhibit 3",
    description: "This is the details of Exhibit 3.",
    image: "/assets/exhibit3.jpg",
  },
  4: {
    title: "Exhibit 4",
    description: "This is the details of Exhibit 4.",
    image: "/assets/exhibit4.jpg",
  },
  5: {
    title: "Exhibit 5",
    description: "This is the details of Exhibit 3.",
    image: "/assets/exhibit3.jpg",
  },
  6: {
    title: "Exhibit 6",
    description: "This is the details of Exhibit 4.",
    image: "/assets/exhibit4.jpg",
  },
};

const ExhibitDetails = () => {
  const { id } = useParams();
  const exhibit = exhibitData[id];

  if (!exhibit) {
    return <div>Exhibit not found</div>;
  }

  return (
    <div className="p-6 mt-20 bg-gradient-to-r from-[#ecf4ff] to-[#5f7cb7]">
      <Card
        sx={{
          maxWidth: 1000,
          margin: "auto",
          height: 500,
          boxShadow: 3,
          borderRadius: 2,
          backdropFilter: "blur(10px)",
          background: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: 200, width: "100%", objectFit: "cover" }}
          image={exhibit.image}
          alt={exhibit.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {exhibit.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {exhibit.description}
          </Typography>
        </CardContent>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
        ></Box>
      </Card>
    </div>
  );
};

export default ExhibitDetails;
