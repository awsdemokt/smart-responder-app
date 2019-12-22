import React, {Component } from 'react';
import { Link } from "react-router-dom";

export default class FourEyeCheckTableRecord extends Component {
    state = {
        ws: null
    }
    componentDidMount() {
        const reconnectWebSocket_flag = 'N';
        this.props.parentCallback(reconnectWebSocket_flag);
        this.setState({ws: this.props.websocket});
    }
    render() {
        return (
            <tr>
                <td className="is-size-7">{this.props.email.mail_from}</td>
                <td className="is-size-7">{this.props.email.subject}</td>
                <td className="is-size-7">{this.props.email.email_date}</td>
                <td className="is-size-7">{this.props.email.reply_drafted_date}</td>
                {this.props.email.sentiment_flag === 'Negative' ?
                    <td className="is-size-7 has-background-danger has-text-white has-text-centered has-text-weight-bold">{this.props.email.sentiment_flag}</td> :
                    this.props.email.sentiment_flag === 'Neutral' ? <td className=" is-size-7 has-background-primary has-text-white has-text-centered has-text-weight-bold">{this.props.email.sentiment_flag}</td> 
                    : this.props.email.sentiment_flag === 'Positive' ? <td className="is-size-7 has-background-success has-text-white has-text-centered has-text-weight-bold">{this.props.email.sentiment_flag}</td>
                    : <td className="is-size-7 has-background-info has-text-white has-text-centered has-text-weight-bold">{this.props.email.sentiment_flag}</td>
                }
                <td className="is-size-7 has-text-centered">
                   <Link
                        to={{
                            pathname: "/foureyecheckapproval",
                            state: { emailId: this.props.email.id }
                        }} 
                        onClick={() => this.state.ws.close()}>
                            Approve and Send Reply
                    </Link>
                </td>
            </tr>
        )
    }
}