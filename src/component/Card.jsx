import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { motion } from "framer-motion";

export default function MediaCard(props) {
  return (
    <motion.div
      className="mt-5 flex justify-center"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: false, amount: 0.2 }} 
      transition={{ duration: 1.2, ease: "easeOut", type: "spring", damping: 25 }} 
    >
      <Card
        sx={{
          width: 350, 
          height: 450, 
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 250, 
            objectFit: "cover", 
          }}
          image={props.image}
          title="Image Title"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <h1 className="font-medium">{props.price}</h1>
        </CardContent>
        <CardActions sx={{ padding: 1, justifyContent: "flex-start" }}>
          <button
            onClick={props.onClick}
            type="button"
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Learn more
          </button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
