import React from "react"
import { Div,InputText, Label} from './inputStyle'
const Input = ({ label,...rest }) => {
    return (
      <Div className="field">
        <Label>{label}*:</Label>            
        <InputText {...rest} />
      </Div>
    )
}

export default Input;