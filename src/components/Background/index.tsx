import './background.css';

type Props = {
  children: JSX.Element
}

export default function Background(p: Props){
  return (
    <div className="bg">
      {p.children}
    </div>
  )
}