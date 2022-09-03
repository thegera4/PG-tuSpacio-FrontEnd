import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ReceiptIcon from '@material-ui/icons/Receipt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {useDispatch, useSelector } from 'react-redux';
import { setAdminOption } from '../../actions'

const useStyles = makeStyles({
  root: {
    flexGrow: 1, 
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const adminOption = useSelector(state => state.adminOption)

  const handleChange = (event, newValue) => {
    dispatch(setAdminOption(newValue))
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={adminOption}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="secondary"
        aria-label="icon label tabs example">
        <Tab icon={<PeopleAltIcon />} label="Users" />
        <Tab icon={<ReceiptIcon />} label="Orders" />
        <Tab icon={<LocalMallIcon />} label="Products" />
        <Tab icon={<NotificationsIcon />} label="Notifications" />
        <Tab icon={<SettingsIcon />} label="Settings" />
      </Tabs>
    </Paper>
  );
}
