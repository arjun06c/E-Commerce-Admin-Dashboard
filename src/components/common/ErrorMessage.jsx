function ErrorMessage({
  message = "Something went wrong.",
  onRetry
}) {

  return (
    <div className="error-container">

      <div className="error-icon">
        ⚠️
      </div>

      <h2>{message}</h2>

      <p>
        Please try again.
      </p>

      {onRetry && (
        <button onClick={onRetry}>
          Retry
        </button>
      )}

    </div>
  );
}

export default ErrorMessage;