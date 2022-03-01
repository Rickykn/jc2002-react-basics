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

const ContentCard = () => {
  const likePost = (amount) => {
    alert(`Liked Post! ${amount}`);
  };

  return (
    <Card className="my-3">
      <CardBody>
        <CardTitle tag="h5" className="fw-bold">
          {username}
        </CardTitle>
        <CardSubtitle tag="h6" className="text-muted mb-4">
          {location}
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
          {numberOfLikes.toLocaleString()} Likes
        </CardText>
        <CardText>
          <span className="fw-bold">{username}</span>{" "}
          {caption.length > 140 ? caption.slice(0, 141) + "..." : caption}
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
