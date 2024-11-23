const AlertMessage = ({ type, message }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
};

export default AlertMessage;

/* props = {
    type: val,
    message : val
} */
