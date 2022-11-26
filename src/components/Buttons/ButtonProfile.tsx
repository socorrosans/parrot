import "./button-profile.css";

interface PropsButton {
  name: string
  bgcolor?: string,
}

export default function ButtonProfile(props : PropsButton){
  return (
    <button className="btnProfile">{props.name}</button>
  )
}