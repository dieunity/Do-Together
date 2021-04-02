


const App = props => {

const fetchFunc = () => {
  fetch('https://curriculum-api.codesmith.io/messages')
    .then(response => response.json())
    .then(data => dataHandling(data))
  }
  const dataHandling = (data) => {
    console.log(data);
  }
  return (
    <div>
      <div> SoloProject: todolist with Venmo API requests </div>
      {/* // add buttons for login page (called "Get Productive")
      // send get request to home login page */}
      {fetchFunc()}
    </div>
  )
}


export default App;