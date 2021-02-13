import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { FiLogIn, FiShoppingCart } from "react-icons/fi";

import { NavLink } from "./styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
    fontFamily: "Nunito, sans-serif",
    fontWeight: 600,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Kenzieshoes
        </Typography>
        <nav>
          <NavLink>
            <FiShoppingCart size={20} />
            Carrinho <span> (7) </span>
          </NavLink>
          <NavLink>
            <FiLogIn size={20} />
            Entrar
          </NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
