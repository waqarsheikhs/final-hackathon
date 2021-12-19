import * as React from 'react';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import "./css/style.css"
export default function MyInputText({ name, label, error, type, onBlur, onChange, fullWidth, helperText }) {

    // const CssTextField = styled(TextField)({
    //     '& label.Mui-focused': {
    //         color: '#a88a81',
    //     },
    //     '& .MuiInput-underline:after': {
    //         borderBottomColor: '#a88a81',
    //     },
    //     '& .MuiOutlinedInput-root': {
    //         '& fieldset': {
    //             borderColor: 'red',
    //         },
    //         '&:hover fieldset': {
    //             borderColor: 'yellow',
    //         },
    //         '&.Mui-focused fieldset': {
    //             borderColor: '#a88a81',
    //         },
    //     },
    // });


    return (
        <>
            {/* <CssTextField
                label={label}
                id={error ? "standard-error-helper-text": "outlined-helperText"}
                onBlur={onBlur}
                onChange={onChange}
                type={type}
                error={error}
                helperText={helperText}
                name={name}
                variant="standard"
                fullWidth={fullWidth}
            /> */}
            <TextField
                className="textField"
                onBlur={onBlur}
                onChange={onChange}
                type={type}
                error={error}
                id={error ? "standard-error-helper-text" : "outlined-helperText"}
                label={label}
                helperText={helperText}
                name={name}
                variant="standard"
                fullWidth={fullWidth}

            />
        </>
    );
}
