import { AppBar , Toolbar , Typography , Container , TypographyClassKey } from "@material-ui/core";
import { ImageScatterPlot } from "./imageScatterPlot";
const Dashboard = () => {
    return (
        <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Dashboard</Typography>
          </Toolbar>
        </AppBar>
        <Typography variant="h4" align="center" gutterBottom>Image Scatter Plot</Typography>
          <ImageScatterPlot />
      </div>
    );
  };
  
  export default Dashboard;