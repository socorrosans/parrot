import './button.css';

interface PropsButton {
  name: string,
  classname: string,
  type: "button" | "submit" | "reset" | undefined,
  onclick?: any,
}

export default function Button(p: PropsButton){
  if(p.onclick){
    return <button className={p.classname} type={p.type} onClick={p.onclick}>{p.name}</button>
  } else {
    return <button className={p.classname} type={p.type}>{p.name}</button>
  }
}