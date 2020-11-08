import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);

        this.dish = props.dish;
    }

    renderDish(dish) {
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

    renderComments(comments) {

        if (comments != null) {
            const listComments = comments.map((comment) => {
                return (
                    <li className="list-unstyled" key={comment.id}>
                        {comment.comment}
                        <br />
                        {"-- " + comment.author + ", " + comment.date}
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

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.dish.comments)}
                </div>
            </div>
        );
    }

}

export default Dishdetail;