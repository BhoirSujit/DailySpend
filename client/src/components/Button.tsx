

type ButtonVarients = "primary" | "Secondary";

interface ButtonProps {

  varient?: ButtonVarients;
  children? : React.ReactNode,
  onClick? : MouseEvent
}

const Button = (props : ButtonProps ) => {
  return (
    <div>
      <button onClick={props.onClick} className=" bg-indigo-600 px-4 py-1 rounded-md text-white">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
