import './buttons.css';

interface PropsButton {
  name: string
  onclick?: any
}

export function ButtonProfile(p : PropsButton){
  return (
    <button className="btnProfile" type="submit" onClick={p.onclick}>{p.name}</button>
  )
}

export function ButtonLogin(){
  return(
    <button className="btnLogin" type="submit">entrar</button>
  )
}