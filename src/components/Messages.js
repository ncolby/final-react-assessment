import React from 'react'
import MessageItem from './MessageItem'



class Messages extends React.Component {
    
    render() {

        const {messages, selectSingleMessage} = this.props
        
        return(
            <div>
                {messages.map(message => (
                    <MessageItem
                    selectSingleMessage={selectSingleMessage}
                    message={message}
                    key={message.id}
                    />
                ))}
            </div>
        )
    }

}

export default Messages;