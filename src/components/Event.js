import React from "react";
import { useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "300px",
    margin: "0 auto",
    cursor: "pointer"
  },
  media: {
    height: "150px"
  },
  content: {
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& p": {
      textAlign: "center"
    }
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

export default function Event(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const toggle = (e, event) => {
    e.stopPropagation();

    event.favorite ? dislike(event) : like(event);
  };

  const like = event => {
    dispatch({ type: "like", event });
  };

  const dislike = event => {
    dispatch({ type: "dislike", event });
  };

  const goToDetails = () => {
    props.goToDetails && props.goToDetails(props.event);
  };

  return (
    <Card className={classes.card} onClick={goToDetails}>
      <CardMedia
        className={classes.media}
        image={props.event.imgSrc}
        title="Paella dish"
      />

      <CardContent className={classes.content}>
        <Typography paragraph>{props.event.title}</Typography>
        <Typography paragraph>Тип: {props.event.type}</Typography>
        <Typography paragraph>Цена: {props.event.price}</Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.actions}>
        <IconButton
          onClick={e => toggle(e, props.event)}
          aria-label="add to favorites"
        >
          <FavoriteIcon color={props.event.favorite ? "error" : ""} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
