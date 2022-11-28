import "./container-main.css";

type Props = {
  children: JSX.Element
}

export default function ContainerMain(props: Props){
  return(
    <div className="container-m">
      {props.children}
    </div>
  )
}