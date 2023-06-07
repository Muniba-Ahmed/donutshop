import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Modal,
  Button,
  Box,
} from "@mui/material";
// import { itemList2 } from "../helpers/ItemList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function GridItem({ itemList2 }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleModalOpen = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {itemList2.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea
              onClick={() => {
                handleModalOpen(item);
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="menu item"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {item.name}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                  {`$${item.price}.00`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}

      <Modal open={selectedItem !== null} onClose={handleCloseModal}>
        <Box sx={style}>
          <div>
            <Typography variant="h5">{selectedItem?.name}</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {selectedItem?.description}
            </Typography>
            <img src={selectedItem?.image} alt={selectedItem?.name} />
            <Typography variant="body1" sx={{ mt: 2 }}>
              Inventory: {selectedItem?.inventory}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {`$${selectedItem?.price}.00`}
            </Typography>
            <Button variant="contained" onClick={handleCloseModal}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </Grid>
  );
}

export default GridItem;
