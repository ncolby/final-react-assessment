import logo from './logo.svg';
import React from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css';
import Messages from './components/Messages'
import MessageInput from './components/MessageInput'
import Loading from './components/Loading'
import SingleMessage from './components/SingleMessage'

class App extends React.Component {
  
  state = {
    messages: [],
    loading: false,
    singleMessage: null
  }
  
  
  render() {

    const {messages, loading, singleMessage} = this.state

    const addMessage = (obj) => {
      const id = uuidv4()
      obj.id = id
      this.setState({messages: [...messages, obj]})
      console.log(this.state.messages)
    }

    const selectSingleMessage = (message) => {
      console.log('this is my message', message)
      this.setState({singleMessage: message})
    }

    const clearSingleMessage = () => {
      this.setState({singleMessage: null})
    }

    const deleteMessage = (id) => {
      console.log('delete button is working')
      console.log('this is the messages', messages)
      this.setState({messages: messages.filter(message => message.id !== id)})
      this.setState({singleMessage: null})
    }

    const editMessage = (obj) => {
      const changedMessage = messages.map(message => {
        if(obj.id === message.id) {
          message.messageBody = obj.messageBody
        }
        return message
      })
      this.setState({messages: changedMessage})
      this.setState({singleMessage: null})
    }


    if(loading) {
      return (
        <Loading />
      )
    }

    if(singleMessage) {
      return (
        <SingleMessage
        editMessage={editMessage}
        deleteMessage={deleteMessage}
        clearSingleMessage={clearSingleMessage}
        singleMessage={singleMessage}
        />
      )
    }

    return (
      <div className="App">
        <h1 className="pageHeader">My messaging system!</h1>
        <MessageInput addMessage={addMessage}/>
        <Messages 
        messages={messages}
        selectSingleMessage={selectSingleMessage}
        />
        {/* create functionality for following:

         Completed  - Ability to create new messages
         Complete  - Ability to click on a single message and view it with conditional rendering
         Completed   - Ability to edit single message
         Completed  - Ability to delete single message

         Completed    -- By default, the user should see the input field for creating a new message. Under the input field, all messages that have been created should appear. 

         Completed  -- Techniques used: conditional rendering, controlled components, passing state as props

         Completed  -- Each message should have a messageBody, a userName, and a unique ID.

         Completed  -- Packages to use: axios, uuid (for creating unique id for each message).
        */}
      </div>
    );
  } 
}

export default App;
