import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

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
  // const id = open ? 'simple-popover' : undefined;

  return (
        <div> {" "}
        <i className={data.icon} onClick={handleClick}></i>
      {/* <Popover
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
      </Popover> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">   
          <Typography className={classes.typography}>
            <h3> { props.data.name } </h3>
          </Typography>
        </DialogTitle>
        <DialogContent>
        {props.data.img ?  <img alt="image1" src={props.data.img} /> : " "}
        {props.data.img2 ?  <img alt="image2" src={props.data.img2} /> : " "}
        {props.data.img3 ?  <img alt="image3" src={props.data.img3} /> : " "}
        {props.data.img4 ?  <img alt="image4" src={props.data.img4} /> : " "}
          {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <Typography className={classes.typography}><h4> Close </h4> </Typography>
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      
  );
}