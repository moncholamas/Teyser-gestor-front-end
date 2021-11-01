import { Close } from '@mui/icons-material';
import { IconButton, Snackbar } from '@mui/material';
import React from 'react';

export function SnackBar({status}){
    const [open, setOpen] = React.useState(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <Close fontSize="small" />
        </IconButton>
        </React.Fragment>
    );

  return(

            <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={status.msg}
            action={action}
        />

  );
}