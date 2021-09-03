import React, {Fragment} from 'react'


class MessageItem extends React.Component {
    render() {
        
        const {message, selectSingleMessage} = this.props

        return(
            <Fragment>
                <h1 onClick={() => selectSingleMessage(message)}>{message.messageBody}</h1>
                <p>User: {message.user}</p>
            </Fragment>
        )
    }
}

export default MessageItem;