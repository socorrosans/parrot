import './container-main.css';

type Props = {
  children: JSX.Element[]
}

export default function ContainerMain(p: Props){
  return(
    <div className="container-m">
      {p.children}
    </div>
  )
}