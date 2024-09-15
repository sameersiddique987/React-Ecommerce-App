

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


export default function MediaCard(props) {
  return ( <div>
    <Card sx={{ width: 300, height : 310  }}>
      
      <CardMedia 
      
        sx={{   width: 100 , height: 100 }} 
        
        image={props.image}
        title="erorr"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {props.description}
     
        </Typography>
        <h1 className='font-medium'>{props.price}</h1>
      </CardContent>
      <CardActions>

<button onClick={props.onClick} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</button>
      </CardActions>
    </Card>
    </div>
  );
}
