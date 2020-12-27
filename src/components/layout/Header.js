import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    headerTitle: {
        flexGrow: 1,
        textDecoration: "none",
    },
}));

function Header(props) {
    const classes = useStyles();
    const { isAuthenticated, user } = useAuth0();
    return(
        <AppBar postion="fixed" className={classes.appBar} >
            <Toolbar>
                <Typography variant="h6" noWrap component={Link} to="/" color="inherit" className={classes.headerTitle}>
                    {props.title}
                </Typography>
                {isAuthenticated ?
                    (
                        <p>
                            <span>ようこそ {user.name} さん</span>
                            <LogoutButton />
                        </p>
                    ) : 
                    (
                        <LoginButton />
                    )
                }
            </Toolbar>
        </AppBar>
    );
}

export default Header;