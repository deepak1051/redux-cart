
import reactDOM from "react-dom/client"

import App from "./App"
import "./index.css"

//redux toolkit store
import { Provider } from "react-redux"
import { store } from './store'
const el = document.getElementById('root')

const root = reactDOM.createRoot(el)

root.render(<Provider store={store}><App /></Provider>)