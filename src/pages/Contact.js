import React from "react";
import { TextField, Button, Stack, Box } from "@mui/material";

function Contact() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <form noValidate>
          <Stack spacing={2} width={400}>
            <TextField label="First Name" type="name" />
            <TextField label="Last Name" type="name" />
            <TextField label="Email" type="email" />
            <TextField
              label="Order Information"
              type="text"
              rows={4}
              multiline
            />
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </div>
    </Box>
  );
}

export default Contact;

/*
Contact Form
-First Name 
-Last Name
-valid email address
-order information(comments?)

*/

/**
 * 
 * <label htmlFor="name">First Name</label>
        <input type="text" id="first name" name="first name" />

        <label htmlFor="name">Last Name</label>
        <input type="text" id="last name" name="last name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="orderInfo">Order Information</label>
        <input type="text" id="orderInfo" name="orderInfo" />

        <button>Submit</button>
 */
