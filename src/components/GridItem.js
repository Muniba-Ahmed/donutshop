import React, { useState } from "react";
import {
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
// import { itemDetailsList } from "../helpers/ItemList";

const modalStyle = {
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

const menuContainerStyle = {
  padding: 5,
  margin: 5,
};

function GridItem({ itemDetailsList }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const { name, description, image, price, inventory } = selectedItem || {};

  const handleModalOpen = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <Box sx={menuContainerStyle}>
      <Grid
        container
        spacing={3}
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 3, md: 2 }}
      >
        {itemDetailsList.map(
          ({ name, description, price, image, inventory }, index) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea
                  onClick={() => {
                    handleModalOpen({
                      name,
                      description,
                      price,
                      image,
                      inventory,
                    });
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="menu item"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {name}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                      {`$${price}.00`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        )}
        {selectedItem && (
          <Modal open={selectedItem !== null} onClose={handleCloseModal}>
            <Box sx={modalStyle}>
              <div>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {description}
                </Typography>
                <img src={image} alt={name} />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Inventory: {inventory}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {`$${price}.00`}
                </Typography>
                <Button variant="contained" onClick={handleCloseModal}>
                  Exit
                </Button>
              </div>
            </Box>
          </Modal>
        )}
      </Grid>
    </Box>
  );
}

export default GridItem;
