import { makeStyles } from '@material-ui/core';
import { Drawer, Toolbar, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import BookIcon from '@material-ui/icons/Book';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
}));

function SideMenu() {
    const classes = useStyles();
    return(
        <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    <ListItem button key="book" component={Link} to={"/bookList"}>
                        <ListItemIcon>
                            <BookIcon />
                        </ListItemIcon>
                        <ListItemText primary="book" />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
}

export default SideMenu;