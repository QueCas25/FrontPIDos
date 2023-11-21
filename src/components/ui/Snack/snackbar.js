import React, {useEffect} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {Slide} from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CustomizedSnackbars({ message ,level,vertical,horizontal}) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (message) {
            setOpen(true);
        }
    }, [message]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    function TransitionLeft(props) {
        return <Slide {...props} direction="right" />;
    }

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} TransitionComponent={TransitionLeft} anchorOrigin={{ vertical, horizontal }}>
            <Alert onClose={handleClose} severity={level} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default CustomizedSnackbars;