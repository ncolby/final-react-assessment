import React from 'react'


class MessageInput extends React.Component {
    
    state = {
        text: '',
        user: ''
    }

    render() {
        
        const {text, user} = this.state
        const {addMessage} = this.props
        
        const handleChange = (e) => {
            this.setState({text: e.target.value})
        }

        const handleChangeUser = (e) => {
            this.setState({user: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            addMessage({messageBody: text, user: user})
            this.setState({text: '', user: ''})
        }
        
        return(
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Message..."
                name="text"
                value={text}
                onChange={handleChange}
                />
                <input type="text"
                placeholder="User..."
                name="user"
                value={user}
                onChange={handleChangeUser}
                />
                <input type="submit" />
            </form>
        )
    }
}


export default MessageInput;