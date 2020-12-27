import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, TextField, Button } from "@material-ui/core";

import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

function BookForm(props) {
    const classes = useStyles();
    const history = useHistory();
    const [values, setValues] = useState({
        name: '',
        author: '',
        url: ''
    });
    const handleChange = (event) => {
        event.preventDefault();
        setValues({...values, [event.target.id]: event.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(process.env.REACT_APP_BACKEND_ORIGIN+"/api/books", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        }).then(res => res.json())
        .then(res => {
            console.log(res);
            history.push('/bookList');
        }).catch(err => {
            console.log(err);
        })
    }
    return(
        <form className={classes.form} onSubmit={handleSubmit}>
            <div>
                <TextField id="name" label="Name" fullWidth value={values.name} onChange={handleChange} required />
            </div>
            <div>
                <TextField id="author" label="Author" fullWidth value={values.author} onChange={handleChange} />
            </div>
            <div>
                <TextField id="url" label="URL" fullWidth value={values.url} onChange={handleChange} />
            </div>
            <div>
                <Button type="submit" variant="contained" color="primary" fullWidth startIcon={<SaveIcon />}>Save</Button>
            </div>
        </form>
    );
}

export default BookForm;