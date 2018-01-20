import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore } from 'redux'
import Calculator from './components/Calculator'
import calculator from './reducers'

const store = createStore(calculator)
const rootElement = document.getElementById('root')

const render = () => ReactDOM.render(
  <Calculator
    total={store.getState()}
    onAdd={() => store.dispatch({ type: 'ADD' })}
    onSubtract={() => store.dispatch({ type: 'SUBTRACT' })}
  />,
  rootElement
)

render()
store.subscribe(render)
