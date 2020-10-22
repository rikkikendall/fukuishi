import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimpleModal(props) {
  const data = props.data;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
        <div>
                    {" "}
        <i className={data.icon} onClick={handleClick}></i>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}> <h3> { props.data.name } </h3> </Typography>
        <img alt="image1" src={props.data.img} />
        <img alt="image2" src={props.data.img2} />
        <img alt="image3" src={props.data.img3} />
        <img alt="image4" src={props.data.img4} />
      </Popover>
      </div>
      
  );
}