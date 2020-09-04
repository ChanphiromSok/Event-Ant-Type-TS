import React,{useRef} from 'react';
import { render } from 'react-dom';

// Type is more constrain than interface
type MyInput ={
  type?: 'text' | 'number' | 'password' | 'submit'
}
function Input(props:  MyInput & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>){
  return <input {...props} type={props.type || 'text'}/>
}

type MyButton={
  // children?:string | JSX.Element
  children?:React.ReactChild[] | React.ReactText
  // children?:React.ReactChild
  // children?:(str: string)=> React.ReactNode; <Button>{str=>(<div>{str}</div>)}<Button>
}
function Button(props:  MyButton & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>){
  return <button {...props} type={props.type || 'text'}>{props.children}</button>
}

function App(){
  const myRef = useRef<HTMLInputElement>(null);
  return(
    <div>
      Hello From Typescript
      <Input ref={myRef}  /> default type Input is type='input'
      <Button>Hellss</Button>
     </div>
  )
}
export default App;

render(<App />, document.getElementById('root'));
