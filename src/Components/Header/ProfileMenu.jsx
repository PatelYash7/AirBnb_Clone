import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              
              >
        <MenuRoundedIcon/>
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{".MuiPaper-root":{borderRadius:"1rem",marginTop:"2.5rem",minWidth:"180px",boxShadow:"0px 1px 2px rgb(0 0 0/8%),0 4px 12px rgb(0 0 0/5%)"}}}
      >
        <MenuItem className="text-font-grey text-[0.8rem]" onClick={handleClose}>Signup</MenuItem>
        <MenuItem className="text-font-grey text-[0.8rem]" onClick={handleClose}>Login</MenuItem>
        <div className='h-[1px] bg-grey w-[100%]'></div>
        <MenuItem className="text-font-grey text-[0.8rem]" onClick={handleClose}>Airbnb your home</MenuItem>

        <MenuItem className="text-font-grey text-[0.8rem]" onClick={handleClose}>Host an experience</MenuItem>
        <MenuItem className="text-font-grey text-[0.8rem]" onClick={handleClose}>Helps</MenuItem>
      </Menu>
    </div>
  );
}