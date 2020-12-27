import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return(
        <Button onClick={() => loginWithRedirect()} color="inherit" endIcon={<InputIcon />}>Login</Button>
    )
}

export default LoginButton;