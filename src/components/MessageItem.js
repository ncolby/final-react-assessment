import React, {Fragment} from 'react'


class MessageItem extends React.Component {
    render() {
        
        const {message, selectSingleMessage} = this.props

        return(
            <Fragment className="container">
                <h2 className="user">{message.user}:</h2>
                <h2 onClick={() => selectSingleMessage(message)} className="messages">{message.messageBody}</h2>
            </Fragment>
        )
    }
}

export default MessageItem;