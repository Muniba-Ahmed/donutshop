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
        {itemDetailsList.map((menuItem, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea
                onClick={() => {
                  handleModalOpen(menuItem);
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={menuItem.image}
                  alt="menu item"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {menuItem.name}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    {`$${menuItem.price}.00`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        {selectedItem && (
          <Modal open={selectedItem !== null} onClose={handleCloseModal}>
            <Box sx={modalStyle}>
              <div>
                <Typography variant="h5">{selectedItem.name}</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {selectedItem.description}
                </Typography>
                <img src={selectedItem.image} alt={selectedItem.name} />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Inventory: {selectedItem.inventory}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {`$${selectedItem.price}.00`}
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
