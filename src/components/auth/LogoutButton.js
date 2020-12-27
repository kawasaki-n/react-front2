import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button onClick={() => {logout({ returnTo: window.location.origin })}} color="inherit" endIcon={<ExitToAppIcon />}>Logout</Button>
    )
}

export default LogoutButton;