import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const colors = ["#cbe896", "#aac0aa", "#fcdfa6", "#a18276", "#f4b886"];

const Card_Material = ({ todo, updateHandle, deleteHandle }) => {
  const classes = useStyles();
  const [ranNum, setRanNum] = useState(0);
  useEffect(() => {
    const randomNum = Math.round(Math.random() * 10);
    setRanNum(randomNum);
  }, []);
  return (
    <Card className={classes.root} style={{ margin: "1rem" }}>
      <CardActionArea>
        <CardContent style={{ backgroundColor: `${colors[ranNum]}` }}>
          <Typography gutterBottom variant="h5" component="h2">
            {todo.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {todo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={updateHandle}>
          {" "}
          modify
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => deleteHandle(todo.created_date)}
        >
          delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default Card_Material;
