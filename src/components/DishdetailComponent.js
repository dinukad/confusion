import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



    function RenderDish({dish}) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({comments}) {

        if (comments != null) {
            const listComments = comments.map((comment) => {
                return (
                    <li className="list-unstyled" key={comment.id}>
                        {comment.comment}
                        <br />
                        -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        <br /><br />
                    </li>
                );
            })

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-group">
                        {listComments}
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }

    const Dishdetail = (props) => {
        if (props.dish)
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.dish.comments} />
                        </div>
                    </div>
                </div>

            );
        else
            return (
                <div></div>
            )
    }



export default Dishdetail;