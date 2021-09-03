import React, {Fragment} from 'react'

class EditMessage extends React.Component {

    state = {
        text: ''
    }


    render() {
        
        const {text} = this.state
        const {singleMessage, editMessage} = this.props

        const handleEditStateChange = (e) => {
            this.setState({text: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            const changedMessage = {
                messageBody: text,
                user: singleMessage.user,
                id: e.target.id
            }

            editMessage(changedMessage)
        }   

        return(
            <Fragment>
                <h1>Edit Message</h1>
                <form onSubmit={handleSubmit} id={singleMessage.id}>
                    <input type="text" value={text} onChange={handleEditStateChange} placeholder={singleMessage.messageBody}/>
                    <input type="submit"/>
                </form>
            </Fragment>
        )
    }
}

export default EditMessage;