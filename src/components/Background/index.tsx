import './background.css';

type Props = {
  children: JSX.Element
}

export default function Background(props: Props){
  return (
    <div className="bg">
      {props.children}
    </div>
  )
}