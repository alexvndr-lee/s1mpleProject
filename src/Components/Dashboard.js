import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

//Components

import Main from "./Main";

//icons

import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

//styles

import "../Styles/_dashboard.scss";

const drawerWidth = 500;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: '#222629',
  },
}));

function Dashboard(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const data = [
    {
        title: "Intro",
        path: "#intro",
        icon: <HomeIcon/>
    },
    {
        title: "Portfolio",
        path: "#portfolio",
        icon: <AppsIcon/>
    },
    {
        title: "About",
        path: "#about",
        icon: <PersonIcon/>
    },
    {
        title: "Contact",
        path: "#contact",
        icon: <MailIcon/>
    },
      
  ]

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <ul className="list">
          <li className="list-item_title">
            <img src="https://pbs.twimg.com/profile_images/906908043782135811/M7GVVYHi_400x400.jpg" width="80px" height="80px"/>
            <ListItemText style={{textAlign: "center"}}>
                <div style={{display: "flex", flexFlow: "column"}}>
                    <h2>Oleksandr <span style={{color: "yellow"}}>"s1mple"</span> Kostyliev</h2>
                    <span>Natus Vincere</span>
                </div>
            </ListItemText>
          </li>
      </ul>
      <ul className="list">
        {data.map((item) => (
          <a href = {item.path} className="switcher">
              <ListItemIcon className="list-icon">{item.icon}</ListItemIcon>
              <h4>{item.title}</h4>
          </a>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className="main">
        <Main/>
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  container: PropTypes.any,
};

export default Dashboard;