import ErrorRafiki from "../assets/Errorrafiki.svg";

const NotFound = () => {
  return (
    <div className="min-h-[100vh] grid place-items-center">
     
      <img src={ErrorRafiki} alt="404 error" className="h-96"  />
    </div>
  );
};

export default NotFound;
