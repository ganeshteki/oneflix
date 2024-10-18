// import React from 'react';
// import { Drawer, List, ListItem, Button, Typography,mobileOpen,handleDrawerToggle } from '@mui/material';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const SidebarWithButton = ({mobileOpen,handleDrawerToggle}) => {
//   return (
//     <Drawer variant="temporary"
//     open={mobileOpen}
//     onClose={handleDrawerToggle}
//     ModalProps={{keepMounted:true,}}
//     sx={{  '& .MuiDrawer-paper': {
//         width: 180,
//         backgroundColor: '#2e2f30',color:'white',marginTop:8}}}>
//       <List>
//         <ListItem>
//           <Button variant="contained" sx={{background:'orange',width:'85%'}}>Categories</Button>
//         </ListItem>
//         <ListItem>
//         <i className="fas fa-clapperboard" style={{ fontSize: '15px'}}></i>


//           <Button sx={{color:'white'}} >Popular</Button>
//         </ListItem>
//         <ListItem>
//         <i class="fa-solid fa-star"style={{fontSize:'15px'}}></i>

//         <Button  sx={{color:'white'}} >Top Rated</Button>

//         </ListItem>
//         <ListItem>
//         <i className="fas fa-sun" style={{ fontSize: '16px'}}></i>
//         <Button  sx={{color:'white'}}>Upcoming</Button>
//         </ListItem>
//         <ListItem>
//           <Button variant="contained" sx={{background:'orange',width:'85%'}}>Genres</Button>
//         </ListItem>
//         <ListItem>
//         <i className="fas fa-film" style={{ fontSize: '15px'}}></i>   
//                  <Button  sx={{color:'white'}}>Action</Button>
//         </ListItem>
//         <ListItem>
//         <i className="fas fa-film" style={{ fontSize: '15px' }}></i>   
//             <Button  sx={{color:'white'}}>Adventure</Button>
//         </ListItem>
//         <ListItem>
//         <i className="fas fa-bug" style={{ fontSize: '15px'}}></i>
//         <Button  sx={{color:'white'}}>Animation</Button>
//         </ListItem>
//         <ListItem>
//         <i className="fas fa-laugh" style={{ fontSize: '15px'}}></i>

//             <Button  sx={{color:'white'}}>Comedy</Button>
//         </ListItem>
//         </List>
//     </Drawer>
//   );
// };
// export default SidebarWithButton;
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TheatersIcon from "@mui/icons-material/Theaters";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import DangerousIcon from "@mui/icons-material/Dangerous";
const drawerWidth = 220;

const categories = [
  {
    name: "Popular",
    icon: <WhatshotIcon />,
    path: "/",
    sx: {
      backgroundColor: "#2e2b2b",
      "&:hover": {
        backgroundColor: "#e0e0e0",
      },
      color: "orange",
    },
  },
  {
    name: "Action",
    icon: <MovieIcon />,
    path: "/action",
    sx: {
      backgroundColor: "#2e2b2b",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
      color: "orange",
    },
  },
  {
    name: "Adventure",
    icon: <LocalMoviesIcon />,
    path: "/adventure",
    sx: {
      backgroundColor: "#2e2b2b",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
      color: "orange",
    },
  },
  {
    name: "Comedy",
    icon: <TheatersIcon />,
    path: "/comedy",
    sx: {
      backgroundColor: "#2e2b2b",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
      color: "orange",
    },
  },
  {
    name: "Thriller ",
    icon: <DangerousIcon />,
    path: "/",
    sx: {
      backgroundColor: "#2e2b2b",
      "&:hover": {
        backgroundColor: "#e0e0e0",
      },
      color: "orange",
    },
  },
];

function ResponsiveDrawer() {
  const navigate = useNavigate();

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {categories.map((category) => (
          <ListItem
            key={category.name}
            disablePadding
            sx={category.sx}
          >
            <ListItemButton
              onClick={() => navigate(category.path)}
              sx={{
                color: category.sx.color,
              }}
            >
              <ListItemIcon
                sx={{
                  color: category.sx.color,
                }}
              >
                {category.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      color: category.sx.color,
                    }}
                  >
                    {category.name}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          backgroundColor: "#2e2b2b", // Background color for the sidebar
        },
      }}
      open
    >
      {drawer}
    </Drawer>
  );
}

export default ResponsiveDrawer;