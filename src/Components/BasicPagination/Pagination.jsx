import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { setCurrentHomePage } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BasicPagination(
  {productsPerPage, totalProducts}) {

  const classes = useStyles();
  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.currentPageHome)
  const pages = [];

  for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
    pages.push(i);
  }

  const handlePageClick = (page)=>{
    dispatch(setCurrentHomePage(page))
  }

  console.log(currentPage)
  return (
    <div className={classes.root}>
      <Pagination 
        count={pages.length} 
        color="secondary"
        onChange = {(event,page)=>handlePageClick(page)}
        hideNextButton={true}
        hidePrevButton={true} />
    </div>
  );
}
