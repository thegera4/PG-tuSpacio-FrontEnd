import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
// import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));


const itemData = [
  {
      img: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwa0a9cf48/ProductImages/2016/Face/Sweet_Cheeks_Blush_Palette/sweetcheeksblushpalette_main.jpg?sw=390&sh=390&sm=fit",
      title: "Sweet Cheeks Blush Palette"
  },
  {
      img: "https://www.clinique.com/media/export/cms/products/181x209/clq_K22102_181x209.png",
      title: "Luxury Blushing Powder Posh"
  },
  {
      img: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwb9e0511a/ProductImages/2016/Face/Cheek_Contour_Duo_Palette/800897012007_cheekcontourduopalette_doubledate_main.jpg?sw=390&sh=390&sm=fit",
      title: "Cheek Contour Duo Palette"
  },
  {
      img: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw587b93a7/ProductImages/Face/High_Definition_Pro_Blush_Refills/highdefinitionproblushrefills_main.jpg?sw=390&sh=390&sm=fit",
      title: "High Definition Blush Pro Refills"
  },
  {
      img: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwfdfb0cd6/ProductImages/Face/Baked_Blush/800897824181_bakedblush_fullonfemme_main.jpg?sw=390&sh=390&sm=fit",
      title: "Baked Blush"
  },
  {
      img: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwb08ab0fe/ProductImages/Face/Stick_Blush/stickblush_main.jpg?sw=390&sh=390&sm=fit",
      title: "Stick Blush"
  },
]


export default function LandingPage() {
const classes = useStyles();
    
    return(
        <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>

    )
};

