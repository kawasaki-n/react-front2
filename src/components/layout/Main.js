import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';
import { Toolbar } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import BookList from '../book/BookList'
import BookForm from '../book/BookForm'
import PrivateRoute from '../auth/PrivateRoute';

const useStyles = makeStyles((theme) => ({
    main: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function Main() {
    const classes = useStyles();
    const { isLoading } = useAuth0();
    if (isLoading) {
        return(
            <div>Loading...</div>
        )
    }
    return(
        <main className={classes.main}>
            <Toolbar />
            <Switch>
                <PrivateRoute path="/bookList" exact component={BookList} />
                <PrivateRoute path="/addBook" component={BookForm} />
            </Switch>
        </main>
    );
}

export default Main;