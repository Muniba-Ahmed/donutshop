import React, { useState, useEffect } from "react";
import { TextField, Button, Stack, Box, Modal, Paper } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";

function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      orderInfo: "",
    },
  });
  const [dataFromServer, setDataFromServer] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:9007/api/data");

      setDataFromServer(response.data);
    } catch (error) {
      console.error("Error fetching data from the server", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data) => {
    const endpoint = "http://localhost:9007/send-email";
    try {
      const response = await axios.post(endpoint, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setIsModalOpen(true);
        reset();
      } else {
        console.error("error:", response.status);
      }
    } catch (error) {
      console.error("Error sending email.", error);
    }
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h1> Contact Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} width={400}>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First Name is required" }}
              render={({ field }) => (
                <TextField
                  label="First Name"
                  type="name"
                  error={!!errors.firstName}
                  helperText={errors.firstName && errors.firstName.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last Name is required" }}
              render={({ field }) => (
                <TextField
                  label="Last Name"
                  type="name"
                  error={!!errors.lastName}
                  helperText={errors.lastName && errors.lastName.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => (
                <TextField
                  label="Email"
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email && errors.email.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="orderInfo"
              control={control}
              rules={{ required: "Order Information is required" }}
              render={({ field }) => (
                <TextField
                  label="Order Information"
                  type="text"
                  error={!!errors.orderInfo}
                  helperText={errors.orderInfo && errors.orderInfo.message}
                  {...field}
                  rows={4}
                  multiline
                />
              )}
            />
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
        <DevTool control={control} />
      </div>
      <Box>
        <Modal
          open={isModalOpen}
          onClose={handleModalClose}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper
            sx={{
              width: 400,
              p: 3,
              textAlign: "center",
              outline: "none", // Remove the default outline style
            }}
          >
            <div>
              <h2>Submitted!</h2>
              <p> Your Contact Form has been successfully submitted!</p>
              <Button onClick={handleModalClose}>Close</Button>
            </div>
          </Paper>
        </Modal>
      </Box>
    </Box>
  );
}

export default Contact;
