import './container.css';

interface Props {
  children: JSX.Element[],
}

export default function Container(p: Props){
  return(
    <div className="container-m">
      {p.children}
    </div>
  )
}