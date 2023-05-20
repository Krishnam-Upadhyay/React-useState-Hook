const ErrorExample = () => {
  let count = 0;

  const handleOnClickEvent = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={handleOnClickEvent}>
        Increase
      </button>
    </>
  );
};

export default ErrorExample;
