import { MouseEventHandler } from "react";

interface ButtonInterface{
  btnName: string, classStyles: string, handleClick?: any, btnType?: any
}

const Button = ({ btnName, classStyles, handleClick }: ButtonInterface) => (
  <button
    type="button"
    className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white transform transition duration-500 hover:scale-105 ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;