import "./Input.scss"
interface IInputProps {
  type?: "text" | "number"
  placeholder: string
  name: string
}
const Input = ({ type = 'text', placeholder, name }: IInputProps) => {
  return (
    <input type={type} placeholder={placeholder} name={name} />
  )
}

export default Input