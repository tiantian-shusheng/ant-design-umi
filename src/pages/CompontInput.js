import { Button, Input } from "antd";
const MyInput = ({text,onChange,onClear}) => {
  return (
    <div>
      <Input value={text} onChange={onChange} style={{width: "200px",marginRight: "10px"}} />
      <Button type="primary" onClick={onClear}>清除</Button>
    </div>
  )
}

export {
  MyInput
}