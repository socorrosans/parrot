import "./buttons.css";

interface PropsButton {
  name: string
  bgcolor?: string,
}

export function ButtonProfile(props : PropsButton){
  return (
    <button className="btnProfile">{props.name}</button>
  )
}

export function ButtonLogin(){
  return(
    <button className="btnLogin">entrar</button>
  )
}