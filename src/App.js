import './App.css'

const Box = props => {
  return <div className={props.className}>{props.Name}</div>
}

const App = () => {
  return (
    <div>
      <h1 className='heading'>Boxes</h1>
      <div className='box-container'>
        <Box className='box box1' Name='Small' />
        <Box className='box box2' Name='Medium' />
        <Box className='box box3' Name='Large' />
      </div>
    </div>
  )
}

export default App
