import React from 'react'
import { Button , TableRow , TableCell , Table , TableBody , TableHead ,makeStyles} from '@material-ui/core'
import { Link } from 'react-router-dom'
// import {   } from '@mui/styles'
import {categories} from '../../constant/categories'
const useStyle = makeStyles({
    button : {
        padding:5,
        background: '#6495ED',
        color:'#fff',
        width: '86%',
        
    },
    table: {
        textAlign: 'center',
        border: ' 1px solid rgba(224, 224, 224, 1)',
        margin: '10px 0 0 0'
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
})
const Categories = () =>{
    const classes = useStyle();
    return (
        <>
         <Link to='/create'> <Button variant = "contained" className= {classes.button}>Create Blog</Button></Link> 
          <Table className={classes.table}>
              <TableHead>
                  <TableCell>
                      All Categories
                  </TableCell>
              </TableHead>
              <TableBody>
                  {
                  categories.map(category =>(
                      <TableRow>
                          <TableCell>{category}</TableCell>
                      </TableRow>
                  ))
                    }
              </TableBody>
            </Table> 
        </>
    )
}

export default Categories
