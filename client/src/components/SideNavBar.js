import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PaymentIcon from '@mui/icons-material/Payment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import LogoutIcon from '@mui/icons-material/Logout';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <Fragment>
        <ListItemButton component={Link} to="/admin/application">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Application List" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ReceiptLongIcon />
            </ListItemIcon>
            <ListItemText primary="Record Track" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Booking Slots" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Schedule Events" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Videos" />
        </ListItemButton>
    </Fragment>
);

export const secondaryListItems = (
    <Fragment>

        <ListItemButton>
            <ListItemIcon>
                <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Payment" />
        </ListItemButton>
        <ListItemButton onClick={() => localStorage.removeItem('adminConfig')} component={Link} to="/admin/login" >
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItemButton>

    </Fragment>
);