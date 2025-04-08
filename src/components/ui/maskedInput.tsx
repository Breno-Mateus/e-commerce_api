import { PatternFormat, PatternFormatProps } from "react-number-format";
import { Input } from "./input";

interface maskedInputProps extends PatternFormatProps{
  format: string;
  placeholder: string;
}

const MaskedInput = ({ format, placeholder, ...props } : maskedInputProps) => {
  return(
    <PatternFormat 
      {...props}
      format={format}
      autoComplete="tel-national"
      customInput={Input}
      placeholder={placeholder}
    />
  );
}

export default MaskedInput;