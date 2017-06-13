import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

class Alert extends Component {
    render() {
        var type;
        switch (this.props.status) {
            case 'red':
                type = this.props.status
                break;
            case "amber":
                type = this.props.status 
                break;
            case "green":
                type = this.props.status
                break;
            default:
                break;
        }
        return (
            <div>
                <p className={type}></p>
                <p className="textAlert">{this.props.statusString}</p>    
            </div>
        );
    }
}

Alert.propTypes = {
    status: PropTypes.string,
    statusString: PropTypes.string
};

export default Alert;