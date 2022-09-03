import React from 'react'
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
import {ServiceJson, ProviderService} from './BeutyService'


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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function DetailService() {
  const classes = useStyles();
  const [service, setService] = useState('');
  const [provider, setProvider] = useState('');

  function handleService(e) {
    return setService(e.target.value);
  };

  function handleProvider(e) {
    return setProvider(e.target.value);
  };

  return (
    <div className='detail' key={item.id}>
        <div>
            <img src={item.image_link} className='detail-img'/>
        </div>
        <div className='box'>
            <div className='row'>
                <FormControl className={classes.formControl}>
                    <InputLabel>Service</InputLabel>
                    <Select
                        native
                        onChange={(e) => handleService(e)}
                    >
                        <option aria-label="None" value="" />
                        {
                            ServiceJson.map( s => <option value={`${s.name}`}>{`${s.name}`}</option> )    
                        }
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel>Provider</InputLabel>
                    <Select
                        native
                        onChange={(e) => handleProvider(e)}
                    >
                        <option aria-label="None" value="" />
                        {
                            ProviderService
                                .filter(p => p.service.includes(service))
                                .map( p => <option value={`${p.name}`}>{`${p.name}`}</option> )    
                        }
                    </Select>
                </FormControl>
                <h4>${ProviderService.filter(p => p.name === provider).price.service}</h4>
                <p>{ProviderService.filter(p => p.name === provider).price.service}</p>
                <div className='select'>
                    <p>{ServiceJson.filter(s => s.name === service).description}</p>
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