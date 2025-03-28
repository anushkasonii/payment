import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  Paper,
  Grid,
  useTheme,
  alpha,
  DialogContent,
  FormControlLabel,
  TextField,
  IconButton,
  Container,
} from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {
  Message as MessageIcon,
  Event as EventIcon,
  Badge as BadgeIcon,
  MobileFriendly as MobileFriendlyIcon,
  School as SchoolIcon,
  LiveHelp as LiveHelpIcon,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import logo from "./assets/coloredLogo-DzaWms3o.svg";


const App = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const [gstType, setGstType] = useState("with");
  const [selectedPlanDuration, setSelectedPlanDuration] = useState(1); // 1 for 1 year, 3 for 3 years
  const [additionalStudentCount, setAdditionalStudentCount] = useState(0);
  const [totalCost, setTotalCost] = useState(80000); // Default to ₹240000 for 1 year, 250 students
  const [discount, setDiscount] = useState(120000); // Default to ₹360000 discount for 1 year

  const baseCost = 200000; // Cost for 1 year, 200 students
  const perStudentCost = 1000; // Additional cost per student

  // Function to calculate the total cost and discount based on selected plan and additional students
  const calculateCosts = (additionalStudents) => {
    const planCost = baseCost * selectedPlanDuration; // Multiply base cost by selected plan duration (1 or 3 years)
    const currentCost = planCost + additionalStudents * perStudentCost;
    const discountAmount = currentCost * 0.6; // 60% discount
    setDiscount(discountAmount);
    setTotalCost(currentCost - discountAmount); // Total after discount
  };

  // Recalculate costs when selectedPlanDuration or additionalStudentCount changes
  useEffect(() => {
    calculateCosts(additionalStudentCount);
  }, [selectedPlanDuration, additionalStudentCount]);

  // Handle the increase in additional students
  const handleIncrease = () => {
    setAdditionalStudentCount((prev) => {
      const newCount = prev + 1;
      return newCount;
    });
  };

  // Handle the decrease in additional students
  const handleDecrease = () => {
    setAdditionalStudentCount((prev) => {
      if (prev > 0) {
        const newCount = prev - 1;
        return newCount;
      }
      return prev;
    });
  };

  // Handle plan selection (1 year or 3 years)
  const handlePlanSelection = (duration) => {
    setSelectedPlanDuration(duration); // Set the selected plan duration
  };
  

  const features = [
    {
      icon: <MessageIcon fontSize="large" />,
      text: "Message",
      color: "#FF6B6B",
    },
    {
      icon: <EventIcon fontSize="large" />,
      text: "Event Management",
      color: "#4ECDC4",
    },
    {
      icon: <BadgeIcon fontSize="large" />,
      text: "Admission Management",
      color: "#45B7D1",
    },
    {
      icon: <MobileFriendlyIcon fontSize="large" />,
      text: "Staff and Parent Mobile App",
      color: "#96CEB4",
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      text: "School Profiling",
      color: "#FFEEAD",
    },
    // { icon: <LiveHelpIcon fontSize="large" />, text: "Dedicated Support", color: "#D4A5A5" },
  ];

  const Logo = () => (
    <img src={logo} alt="Logo" style={{ width: 260, height: 60 }} />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    handleClose();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Outer box */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={8}
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
            width: "48%",
            height: "90%",
            padding: 3,
            backgroundColor: "white",
            borderRadius: 4,
            border: "1px solid",
            borderColor: theme.palette.divider,
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
                backgroundColor:
                  selectedPlanDuration === 1 ? "#d0c8d4" : "white",
                borderRadius: "0",
                boxShadow: "none",
                marginTop: "25px",
                "&:hover": {
                  backgroundColor: "#d0c8d4",
                  color: "black",
                  boxShadow: "none",
                },
              }}
              onClick={() => handlePlanSelection(1)} // Select 1 Year
            >
              1 Year
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "290px",
                color: "black",
                fontWeight: "bold",
                backgroundColor:
                  selectedPlanDuration === 3 ? "#d0c8d4" : "white",
                borderRadius: "0",
                marginTop: "25px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#d0c8d4",
                  color: "black",
                  boxShadow: "none",
                },
              }}
              onClick={() => handlePlanSelection(3)} // Select 3 Years
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
              KidzShala Lite Plan ({selectedPlanDuration * 200} Students
              Enrolled)
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "22px", fontWeight: "bold" }}
            >
              ₹{(baseCost * selectedPlanDuration).toFixed(2)}{" "}
              {/* Display the plan cost based on selected duration */}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "15px", color: "#958DA8" }}
            >
              For {selectedPlanDuration} Year
              {selectedPlanDuration > 1 ? "s" : ""}
            </Typography>
          </Box>

          {/* Additional Students Section */}
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
              Per Student ₹1000/Year
            </Typography>
          </Box>

          <Box sx={{ my: 5, borderTop: 1, borderColor: "divider" }} />

          {/* Discount Section */}
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

          {/* Total Section */}
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
              For 250 Students for {selectedPlanDuration} Year
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
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ mb: 2, textAlign: "center" }}>
            <Logo />
          </Box>

          <Paper
            elevation={0}
            sx={{
              width: "100%",
              height: "90%",
              padding: 0, // Ensure no padding inside the box
              margin: 0,
              backgroundColor: "white",
              borderRadius: 4,
              border: "1px solid",
              borderColor: theme.palette.divider,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Background Gradient */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "200px",

                opacity: 0.03,
              }}
            />

            <Box sx={{ p: 4, position: "relative" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: "#3f2189",
                  mb: 3,
                  textAlign: "center",
                  letterSpacing: "0.5px",
                  fontSize: "20px",
                }}
              >
                Smart Management to Grow Your School
              </Typography>

              <Box
                sx={{
                  width: "100vw",
                  position: "absolute",
                  left: 0,
                  marginBottom: 15,
                  borderTop: "2px solid",
                  borderColor: alpha("#3f2189", 0.1),
                }}
              />

              <Grid container spacing={1} sx={{ mt: 4 }}>
                {features.map((feature, index) => (
                  <Grid item xs={12} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.6,
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        transition: "all 0.3s ease",
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "transparent",
                        "&:hover": {
                          transform: "translateX(8px)",
                          backgroundColor: alpha(feature.color, 0.1),
                          borderColor: alpha(feature.color, 0.3),
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 16,
                          height: 16,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 2,
                          backgroundColor: alpha(feature.color, 0.15),
                          color: feature.color,
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: 500,
                          color: "#2D3748",
                          flex: 1,
                        }}
                      >
                        {feature.text}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* THE LINE */}
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#635881",
          marginTop: "-38px",
          marginLeft: "60px",
        }}
      >
        {" "}
        Our Promise 100% Safe 100% auto backup
      </Typography>

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
