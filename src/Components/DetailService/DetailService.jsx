import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from "react-router-dom"
import {getDetail} from '../../actions/index'
import { useEffect } from 'react'
import defaultImage from "../../assets/images/not_found.png"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/not_found.png'
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: 100
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const { id } = useParams()
 
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch()
  const item = useSelector((state) => state.productDetail)
    
  useEffect(() => {
    dispatch(getDetail(id))   
  }, [dispatch])

  return (
    <div className='detail' key={item.id}>
        <div>
            <img src={item.image_link} className='detail-img'/>
        </div>
        <div className='box'>
            <div className='row'>
                <h1>{item.name}</h1>
                <h4>${item.price}</h4>
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <p>{item.description}</p>
                <div className='colors'>
                    <h3>Colors : </h3>
                    { item.product_colors?.slice(0, 6).map((color, index) => (
                            <button key={index} style={{background: color.hex_value}}></button>
                        ))
                    }
                </div>
                <div className='select'>
                    <h3>Quantity : </h3>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                    </select>
                </div>
                <Link to='/cart' className='cart'>
                    Add to Cart
                </Link>
                <Link to='/cart' className='fav'>
                    Add to Favorites
                </Link>
            </div>
        </div>
    </div>
  );
}