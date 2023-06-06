import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

import { itemList2 } from "../helpers/ItemList";

function GridItem({ image, name, onClick }) {
  return (
    <Grid container spacing={3}>
      {itemList2.map((item, index) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
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

//maxWidth: 345
//width: 200, height: 210
