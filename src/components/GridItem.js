import React from "react";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { itemList } from "../helpers/ItemList";
// import blueberryCake from "../assets/blueberryCake.png";

function GridItem({ image, name, onClick }) {
  return (
    <Grid container spacing={3}>
      {itemList.map((item) => {
        return (
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default GridItem;
