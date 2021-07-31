import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import  './Login.css'
import fondo from './fondo.jpeg';

import {NavLink} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}  >
            <img src={fondo} height="100%" width="100%" ></img>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>  
          <NavLink to="/inicio">             
              <img src='https://img2.freepng.es/20180626/yrt/kisspng-computer-icons-agriculture-farmer-crop-farmer-icon-5b32b7f7e3f531.1030307415300505519337.jpg' height="50" width="50" ></img>
          </NavLink>
          
          </Avatar>
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="boton-login"
            >
              
					<a href="http://localhost:3002/admin/dashboard" className="nav-link">Login </a> 
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink  to="/" className="nav-recover">
                  Forgot your password?
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}