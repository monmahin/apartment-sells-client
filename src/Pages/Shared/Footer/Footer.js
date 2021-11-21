import {
   
    Grid,
    IconButton,
    List,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React from "react";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import InstagramIcon from "@mui/icons-material/Instagram";
  import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
  import { makeStyles } from "@mui/styles";
  
  const useStyle = makeStyles({
    footerStyle: {
      backgroundColor: "#1e272e",
  
      left: "0",
      bottom: "0",
      right: "0",
    },
    socialIcon: {
      color: "#fff !important",
      border: "1px solid #fff !important",
      margin: "20px 10px 30px 0 !important",
      "&:hover": {
        background: "crimson !important",
        color: "#fff !important",
      },
    },
  });
  const Footer = () => {
    const { socialIcon, footerStyle } = useStyle();
    return (
      <footer  className={footerStyle}>
       
          <Grid  container spacing={3} sx={{ color: "#fff" }}>
            
            <Grid item xs={12} sm={12} md={4} >
              <List>
                <ListItemText sx={{ mb: 1, fontWeight: "bold" }}>
                  Company
                </ListItemText>
                <ListItemText>About</ListItemText>
                <ListItemText>Project</ListItemText>
                <ListItemText>Our Team</ListItemText>
                <ListItemText>Terms & Conditions</ListItemText>
              </List>
            </Grid>
            <Grid item xs={12} sm={12} md={4} >
              <List>
                <ListItemText sx={{ mb: 1, fontWeight: "bold" }}>
                  Quick Links
                </ListItemText>
                <ListItemText>Rentals</ListItemText>
                <ListItemText>Sales</ListItemText>
                <ListItemText>Call center</ListItemText>
                <ListItemText>Our blog</ListItemText>
              </List>
            </Grid>
            <Grid item xs={12} sm={12} md={4} >
              <List>
                <ListItemText sx={{ mb: 1 }}>About us</ListItemText>
                <ListItemText>
                contacts
                </ListItemText>
                <ListItemText>
                Phone: 123-456-7890
                </ListItemText>
                <ListItemText>
                Email: info@sunshine.com
                </ListItemText>
              </List>
              <IconButton className={socialIcon}>
                <FacebookOutlinedIcon/>
              </IconButton>
              <IconButton className={socialIcon}>
                <TwitterIcon />
              </IconButton>
              <IconButton className={socialIcon}>
                <InstagramIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Typography
            sx={{ textAlign: "center", py: 4, color: "#fff" }}
            variant="subtitle2"
          >
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
          </Typography>
        
      </footer>
    );
  };
  
  export default Footer;
  