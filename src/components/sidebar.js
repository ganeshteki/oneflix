
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
import FantasyIcon from "@mui/icons-material/Star"; // Fantasy icon
import HeartIcon from "@mui/icons-material/Favorite"; // Romance icon
import ThrillerIcon from "@mui/icons-material/Warning"; // Thriller icon
import ScienceIcon from "@mui/icons-material/Science"; // Science Fiction icon
import AnimationIcon from "@mui/icons-material/Animation"; // Animation icon
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary"; // Documentary icon

const drawerWidth = 220;
const categories = [
  {
    name: "Popular",
    icon: <WhatshotIcon />,
    path: "/",
    sx: { backgroundColor: "#2e2b2b", "&:hover": { backgroundColor: "#e0e0e0" }, color: "orange" },
  },
  {
    name: "Action",
    icon: <MovieIcon />,
    path: "/action",
    sx: { backgroundColor: "#2e2b2b", "&:hover": { backgroundColor: "#f0f0f0" }, color: "orange" },
  },
  {
    name: "Adventure",
    icon: <LocalMoviesIcon />,
    path: "/adventure",
    sx: { backgroundColor: "#2e2b2b", "&:hover": { backgroundColor: "#f0f0f0" }, color: "orange" },
  },
  {
    name: "Comedy",
    icon: <TheatersIcon />,
    path: "/comedy",
    sx: { backgroundColor: "#2e2b2b", "&:hover": { backgroundColor: "#f0f0f0" }, color: "orange" },
  },
  {
    name: "Drama",
    icon: <LocalMoviesIcon />,
    path: "/drama",
    sx: { backgroundColor: "#2e2b2b", "&:hover": { backgroundColor: "#f0f0f0" }, color: "orange" },
  },
  {
    name: "Horror",
    icon: <LocalMoviesIcon />,
    path: "/horror",
    sx: { backgroundColor: "#2e2b2b", "&:hover": { backgroundColor: "#f0f0f0" }, color: "orange" },
  },
  {
    name: "Fantasy",
    icon: <FantasyIcon />,
    path: "/fantasy",
    sx: { backgroundColor: "#2e2b2b", "&:hover": { backgroundColor: "#f0f0f0" }, color: "orange" },
  },
  {
    name: "Romance",
    icon: <HeartIcon />,
    path: "/romance",
    sx: { backgroundColor: "#2e2b2b", "&:hover": { backgroundColor: "#f0f0f0" }, color: "orange" },
  },
  {
    name: "Thriller",
    icon: <ThrillerIcon />,
    path: "/thriller",
    sx: { backgroundColor: "#2e2b2b", "&:hover": { backgroundColor: "#f0f0f0" }, color: "orange" },
  },
  {
    name: "Science Fiction",
    icon: <ScienceIcon />,
    path: "/science-fiction",
    sx: { backgroundColor: "#2e2b2b", "&:hover": { backgroundColor: "#f0f0f0" }, color: "orange" },
  },
  {
    name: "Animation",
    icon: <AnimationIcon />,
    path: "/animation",
    sx: { backgroundColor: "#2e2b2b", "&:hover": { backgroundColor: "#f0f0f0" }, color: "orange" },
  },
  {
    name: "Documentary",
    icon: <VideoLibraryIcon />,
    path: "/documentary",
    sx: { backgroundColor: "#2e2b2b", "&:hover": { backgroundColor: "#f0f0f0" }, color: "orange" },
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