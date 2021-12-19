import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
export default function InputText({placeholder,type,btnType}) {
  return (
      <>
      <InputBase
      type={type}
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        fullWidth="true"
      />
      <IconButton type={btnType} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

    </>
  );
}
