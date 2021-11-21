import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import ListIcon from '@mui/icons-material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import SupervisedUserCircleSharpIcon from '@mui/icons-material/SupervisedUserCircleSharp';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PaymentsIcon from '@mui/icons-material/Payments';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, List, ListItem} from '@mui/material';
import { Link,Switch,Route,useRouteMatch } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Pay from '../Pay/Pay';
import ManageOrders from '../ManageOrders/ManageOrders';

import Admin from '../Admin/Admin';
import AddReview from '../AddReview/AddReview';
import useAuth from '../../../Hook/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import AdminRoute from '../../LoginPage/AdminRoute/AdminRoute';
import MyOrders from '../MyOrders/MyOrders';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const {admin,logout}=useAuth()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {/* <Toolbar /> */}
            <Divider />
            <List>
            <ListItem sx={{color: 'text.primary'}} component={Link} to="/apartments">
             <HomeIcon sx={{mr:2 }} />Apartments    
            </ListItem>
            <ListItem sx={{color: 'text.primary'}} component={Link} to={`${url}`}>
            <DashboardCustomizeIcon sx={{mr:2 }} />My Orders</ListItem>
            
            <ListItem sx={{color: 'text.primary'}} component={Link} to={`${url}/pay`}>
            <PaymentsIcon sx={{mr:2 }} />Pay</ListItem>
            <ListItem sx={{color: 'text.primary'}} component={Link} to={`${url}/addReview`}>
            <ReviewsIcon sx={{mr:2 }} />Review</ListItem>
           { admin && 
           <Box>
           <ListItem sx={{color: 'text.primary'}} component={Link} to={`${url}/admin`}>
           <SupervisedUserCircleSharpIcon sx={{mr:2 }} />Admin</ListItem>
           <ListItem sx={{color: 'text.primary'}} component={Link} to={`${url}/addProduct`}>
           <AddBoxIcon sx={{mr:2}} />Add Product</ListItem>
           <ListItem sx={{color: 'text.primary'}} component={Link} to={`${url}/manageOrders`}>
           <ManageAccountsSharpIcon sx={{mr:2 }} />Manage Orders</ListItem>
           </Box>
           }
            
                <Button onClick={logout} style={{color:"crimson" ,margin:'2rem 0'}}>
                    <LogoutIcon sx={{mr:1}}/> Logout</Button>
           
            </List>
        
            
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor:'grey.800',
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <ListIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div">
                    <Link className='nav-home' to='/home'>Home</Link> 
                    </Typography>
                        
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
         <Switch>
        <Route exact path={path}>
        <MyOrders></MyOrders>
        </Route>
        <AdminRoute path={`${path}/manageOrders`}>
        <ManageOrders></ManageOrders>
        </AdminRoute>
        
        <AdminRoute path={`${path}/admin`}>
          <Admin></Admin>
        </AdminRoute>
        <Route path={`${path}/pay`}>
        <Pay></Pay>
        </Route>
        <Route path={`${path}/addReview`}>
        <AddReview></AddReview>
        </Route>
        <AdminRoute path={`${path}/addProduct`}>
        <AddProduct></AddProduct>
        </AdminRoute>
        
      </Switch>               
    </Box>
</Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;