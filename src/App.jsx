import {useState} from "react"

import Message from "./components/Message"
import SignUp from "./components/SignUp"


function App() {
  const [email, setEmail] = useState('');

  return (
    <>
      {email ? <Message email={email} setEmail={setEmail} /> : <SignUp setEmail={setEmail} />}
    </>
  )
}

export default App
