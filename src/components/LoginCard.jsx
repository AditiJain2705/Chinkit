"use client";

import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ModalBox = styled(Box)(({ theme }) => ({
  width: 550,
  backgroundColor: "#fff",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  textAlign: "center",
  position: "relative",
}));

const LoginCard = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({ mobileNo: "" });
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setFormData({ mobileNo: "" });
    setOpen(false);
  };

  const validateFields = () => {
    if (!formData.mobileNo.trim() || !/^\d{10}$/.test(formData.mobileNo)) {
      alert("A valid 10-digit contact number is required!");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;

    setLoading(true);
    try {
      const formattedFormData = { phonenumber: formData.mobileNo };
      console.log("Submitting: ", formattedFormData);

      handleClose();
    } catch (error) {
      console.error("Error while sending contact", error);
      alert("Failed to submit your information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalBox className=" flex flex-col justify-center items-center">
        <IconButton
          sx={{ position: "absolute", top: 10, right: 10 }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <div className="w-4/5">
        <Typography variant="h5" fontWeight="bold" color="black">
          India's last minute app
        </Typography>
        <Typography variant="subtitle1">Log in or Sign up</Typography>
        
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Enter your 10-digit mobile number"
          value={formData.mobileNo}
          className="rounded-xl"
          onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
          inputProps={{ maxLength: 10 }}
          sx={{ mt: 2 }}
        />
<br/>
        <Button
                  
          sx={{ mt: 2, height: 48,}}
          className="text-xs bg-gray-500/60 text-white py-2  rounded w-full"

          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Continue"}
        </Button>
        </div>
      
      </ModalBox>
    </StyledModal>
  );
};

export default LoginCard;
