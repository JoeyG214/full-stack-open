const Message = ({ message }) => {
  if (message === null) {
    return null
  }
  else if (message[0] === 'I') {
    return (
      <div className="error-message">
        <p>{message}</p>
      </div>
    )
  }


  return (
    <div className="message">
      <p>{message}</p>
    </div>
  )
}

export default Message