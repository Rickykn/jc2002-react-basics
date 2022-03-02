import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  CardText,
  Button,
} from "reactstrap";

import { FaRegThumbsUp } from "react-icons/fa";
import newyork from "./newyork.jpeg";

const username = "Seto";
const location = "BSD";
const numberOfLikes = 1234;
const caption =
  " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, assumenda.";

const ContentCard = (props) => {
  const likePost = (amount) => {
    props.numberOfLikes += 1;
    alert(`Liked Post! ${props.numberOfLikes}`);
  };

  return (
    <Card className="my-3">
      <CardBody>
        <CardTitle tag="h5" className="fw-bold">
          {props.username}
        </CardTitle>
        <CardSubtitle tag="h6" className="text-muted mb-4">
          {props.location}
        </CardSubtitle>
        <img
          style={{
            width: "100%",
          }}
          className="rounded img-fluid"
          src={newyork}
          alt="user's content"
        />
        <CardText tag="h6" className="fw-bold mt-3">
          {props.numberOfLikes.toLocaleString()} Likes
        </CardText>
        <CardText>
          <span className="fw-bold">{props.username}</span>{" "}
          {props.caption.length > 140
            ? props.caption.slice(0, 141) + "..."
            : props.caption}
        </CardText>

        <Button
          onClick={() => likePost(14)}
          className="d-flex justify-content-center align-items-center"
        >
          Like <FaRegThumbsUp className="mx-1"></FaRegThumbsUp>
        </Button>
      </CardBody>
    </Card>
  );
};

export default ContentCard;
