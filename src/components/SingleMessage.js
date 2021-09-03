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
                <h2 className="user">{singleMessage.user}:</h2>
                <h2 className="messages-edit">{singleMessage.messageBody}</h2>
                <button onClick={handleClearSingleMessage} className='btn'>Back</button>
                <button onClick={handleDelete} id={singleMessage.id} className='btn'>Delete</button>
                <button onClick={handleEdit} className='btn'>Edit</button>
                {edit && <EditMessage singleMessage={singleMessage} editMessage={editMessage}/>}
            </Fragment>
        )
    }
}


export default SingleMessage;