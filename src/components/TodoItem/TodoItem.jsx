import { useState } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import moment from "moment";

const TodoItem = (props) => {
  //   const [status, setStatus] = useState(props.status);

  //   const changeStatus = () => {
  //     setStatus(!status);
  //   };

  return (
    <Card className="my-2">
      <CardBody>
        <div className="d-flex justify-content-between">
          <div>
            <CardTitle tag="h5" className="fw-bold">
              {moment(props.date).format("DD MMM YYYY")}
            </CardTitle>
            <CardText>{props.content}</CardText>
          </div>
          <div>
            {props.status ? (
              <Button onClick={props.edit} color="success">
                Done
              </Button>
            ) : (
              <Button onClick={props.edit} color="warning">
                On Going
              </Button>
            )}
            <Button className="mx-2" color="danger" onClick={props.item}>
              Delete
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TodoItem;
