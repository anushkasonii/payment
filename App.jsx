import React, { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControlLabel,
  TextField,
  IconButton,
} from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TimelineIcon from "@mui/icons-material/Timeline";
import MessageIcon from "@mui/icons-material/Message";
import EventIcon from "@mui/icons-material/Event";
import BadgeIcon from "@mui/icons-material/Badge";
import PaymentIcon from "@mui/icons-material/Payment";
import InsightsIcon from "@mui/icons-material/Insights";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import SchoolIcon from "@mui/icons-material/School";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import CloseIcon from "@mui/icons-material/Close";

const App = () => {
  const [open, setOpen] = useState(false);
  const [gstType, setGstType] = useState("with");
  const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


  const [additionalStudentCount, setAdditionalStudentCount] = useState(0); // Added this line
  const [additionalStudentCost, setAdditionalStudentCost] = useState(0);
  const [totalCost, setTotalCost] = useState(80000); // Set initial total to ₹80000

  const baseCost = 200000; // Fixed cost for 200 students
  const perStudentCost = 1000; // Additional cost per student
  const [discount, setDiscount] = useState(0);

  const calculateCosts = (additionalStudents) => {
    const currentCost = baseCost + additionalStudents * perStudentCost;
    const discountAmount = currentCost * 0.60; // 60% discount
    setDiscount(discountAmount);
    setTotalCost(currentCost - discountAmount);
  };

  const handleIncrease = () => {
    setAdditionalStudentCount((prev) => {
      const newCount = prev + 1;
      calculateCosts(newCount);
      return newCount;
    });
  };

  const handleDecrease = () => {
    setAdditionalStudentCount((prev) => {
      if (prev > 0) {
        const newCount = prev - 1;
        calculateCosts(newCount);
        return newCount;
      }
      return prev;
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    handleClose();
  };

  return (
    <>
      {/* Outer box */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={10}
        alignItems="center"
        sx={{
          height: "75vh",
          padding: 5,
          m: 7,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* First Flexbox */}
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            width: "50%",
            height: "90%",
            backgroundColor: "white",
            padding: 3,
            borderRadius: 1,
            border: "1px solid #E6E5E5",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#3f2189" }}
          >
            Customize Your Subscription
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#817D87", fontSize: "15px" }}
          >
            Registered Phone Number: 9999XXXXXX
          </Typography>

          <Stack direction="row" spacing={0}>
            <Button
              variant="contained"
              sx={{
                width: "290px",
                color: "black",
                fontWeight: "bold",
                backgroundColor: "#d0c8d4",
                borderRadius: "0",
                boxShadow: "none",
                marginTop: "25px",
                "&:hover": {
                  backgroundColor: "#d0c8d4",
                  color: "black",
                  boxShadow: "none",
                },
              }}
            >
              1 Year
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "290px",
                color: "black",
                fontWeight: "bold",
                backgroundColor: "white",
                borderRadius: "0",
                marginTop: "25px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#d0c8d4",
                  color: "black",
                  boxShadow: "none",
                },
              }}
            >
              3 Years
            </Button>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
              KidzShala Lite Plan (200 Students Enrolled)
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "22px", fontWeight: "bold" }}
            >
              ₹200000
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "15px", color: "#958DA8" }}
            >
              For 1 Year
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
              Additional Students
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "5px 10px",
                width: "120px",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                onClick={handleDecrease}
                size="small"
                sx={{ padding: 0 }}
                aria-label="decrease student count"
              >
                -
              </IconButton>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "40px",
                }}
              >
                {additionalStudentCount}
              </Typography>
              <IconButton
                onClick={handleIncrease}
                size="small"
                sx={{ padding: 0 }}
                aria-label="increase staff count"
              >
                +
              </IconButton>
            </Box>
           
          </Box>
         
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: "15px", color: "#958DA8", fontWeight: "normal" }}
            >
              Per Student 1000/Year
            </Typography>
          </Box>

          <Box sx={{ my: 5, borderTop: 1, borderColor: "divider" }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
              Discount (60%)
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
            ₹{discount.toFixed(2)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: "22px", fontWeight: "bold" }}
            >
              Total
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "22px", fontWeight: "bold" }}
            >
               ₹{totalCost.toFixed(2)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: "14px", fontWeight: "bold" }}
            >
              For 250 Students for 1 Year
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "15px", color: "#958DA8" }}
            >
              Inclusive of All Taxes
            </Typography>
          </Box>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#1FB892",
              color: "white",
              fontSize: "17px",
              backgroundColor: "#1FB892",
              alignItems: "center",
              borderRadius: "9px",
              paddingX: 2.5,
              marginTop: "25px",
              "&:hover": {
                borderColor: "#1FB892",
                backgroundColor: "white",
                color: "#1FB892",
              },
            }}
            onClick={handleOpen}
          >
            Payment
          </Button>
        </Box>
        

        {/* Second Flexbox */}
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            width: "45%",
            height: "75%",
            marginBottom: "-90px",
            backgroundColor: "white",
            padding: 3,
            borderRadius: 1,
            border: "1px solid #E6E5E5",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              alignContent: "center",
              color: "#3f2189",
            }}
          >
            Smart Management to Grow Your School
          </Typography>

          <Box sx={{ my: 2.5, borderTop: 1, borderColor: "divider" }} />

          {[
            // { icon: <TimelineIcon />, text: "Activity Timeline" },
            { icon: <MessageIcon />, text: "Message" },
            { icon: <EventIcon />, text: "Event Management" },
            { icon: <BadgeIcon />, text: "Admission Management" },
            // { icon: <PaymentIcon />, text: "Fees Collections" },
            // { icon: <InsightsIcon />, text: "Analytics Dashboard" },
            {
              icon: <MobileFriendlyIcon />,
              text: "Staff and Parent Mobile App",
            },
            { icon: <SchoolIcon />, text: "School Profiling" },
            { icon: <LiveHelpIcon />, text: "Dedicated Support" },
          ].map((feature, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
              }}
            >
              {feature.icon}
              <Typography sx={{ fontSize: 21, ml: 12.5 }}>
                {feature.text}
              </Typography>
            </Box>
          ))}
        </Box>
       
      </Box>

      {/* THE LINE */}
      <Typography sx={{fontSize: '18px', fontWeight:'bold', color: '#635881', marginTop:'-38px', marginLeft:'60px'}}> Our Promise 100% Safe 100% auto backup</Typography>

      {/* Billing Details Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginLeft: "8px" }}
          >
            Enter Billing Details
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 3,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            
            {gstType === "with" && (
              <TextField
                required
                fullWidth
                label="GST Number"
                placeholder="Enter GST number"
                margin="normal"
              />
            )}

            <TextField
              required
              fullWidth
              label="Billing Name"
              placeholder="Enter Name"
              margin="normal"
            />

            <TextField
              required
              fullWidth
              label="School Name"
              placeholder="Enter School Name"
              margin="normal"
            />

            <TextField
              required
              fullWidth
              label="Billing Address"
              placeholder="Enter Billing Address"
              multiline
              rows={3}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="State"
              placeholder="Please select State"
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="City"
              placeholder="City"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Pincode (Optional)"
              placeholder="Postal code"
              margin="normal"
            />

            <Box
              sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Button
                fullWidth
                variant="outlined"
                onClick={handleClose}
                sx={{ color: "#1FB892", borderColor: "#1FB892" }}
              >
                Skip To Payment
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#1FB892",
                  color: "white",
                  fontSize: "17px",
                  backgroundColor: "#1FB892",
                  alignItems: "center",
                  borderRadius: "9px",
                  paddingX: 2.5,
                  marginTop: "25px",
                  "&:hover": {
                    borderColor: "#1FB892",
                    backgroundColor: "white",
                    color: "#1FB892",
                  },
                }}
              >
                Save And Proceed To Payment
              </Button>
              
            </Box>
            
          </form>
          
        </DialogContent>
       
      </Dialog>
    </>
  );
};

export default App;
