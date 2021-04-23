import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import FaceArr from './Images'
const profiles = ['60010357 นายตะวัน แซ่เฮ้ง', '60010368 นายทศ  วรศรีวิศาล', "60010375 นายไทธนัช เธียรประดับโชค", "61010402 นายทัณฑธร  สุขสังวาลย์", "61015062 นายภาสุรี  ศรสูงเนิน"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title" >Developer Team</DialogTitle>
      <List>
        {profiles.map((profile,index) => (
          <ListItem >
            <ListItemAvatar>
              <img src={FaceArr[index]} alt="face" width="50" height="50" className="rounded-full"></img>
            </ListItemAvatar>
            <ListItemText primary={profile} className="select-none"/>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
export default SimpleDialog;

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
