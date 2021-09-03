import React, {Fragment} from 'react'
import EditMessage from './EditMesage'


class SingleMessage extends React.Component {

    state = {
        edit: false
    }

    render() {
        const {edit} = this.state
        const {singleMessage, clearSingleMessage, deleteMessage, editMessage} = this.props

        const handleClearSingleMessage = () => {
            clearSingleMessage()
        }

        const handleDelete = (e) => {
            deleteMessage(e.target.id)
        }

        const handleEdit = () => {
            this.setState({edit: true})
        }

        return(
            <Fragment>
                <h1>{singleMessage.messageBody}</h1>
                <p>{singleMessage.user}</p>
                <button onClick={handleClearSingleMessage}>Back</button>
                <button onClick={handleDelete} id={singleMessage.id}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
                {edit && <EditMessage singleMessage={singleMessage} editMessage={editMessage}/>}
            </Fragment>
        )
    }
}


export default SingleMessage;