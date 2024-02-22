import React from "react"
import { Div, Select, Label} from './SelectStyles'
const SelectCom = ({ label, children,...rest }) => {
    return (
      <Div className="field">
        <Label>{label}*:</Label>
        <Select {...rest}>{children}</Select>
      </Div>
    )
}

export default SelectCom;