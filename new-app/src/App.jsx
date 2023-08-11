import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/ExpenseItem.jsx'
import ExpenseItem from './components/ExpenseItem.jsx'

function App() {
const expenses = [
  {
    id: 'e1',
    title:'Car Insurance',
    amount: 294.67, 
    date: new Date(28, 2, 2022)
  },

  {
    id: 'e2',
    title:'New Tv', 
    amount: 294.67, 
    date: new Date(28, 2, 2022)
  },

  {
    id: 'e3',
    title:'Toilet Paper', 
    amount: 294.67, 
    date: new Date(28, 2, 2022)
  },

  {
    id: 'e4',
    title:'Car Insurance', 
    amount: 294.67, 
    date: new Date(28, 2, 2022)
  },
]; 

  return (
      <div>
     <ExpenseItem 
     title={expenses[0].title} 
     amount={expenses[0].amount} 
     date ={expenses[0].date}
     />

     <ExpenseItem
     title={expenses[1].title} 
     amount={expenses[1].amount} 
     date ={expenses[1].date}
     />
  

     <ExpenseItem
     title={expenses[2].title} 
     amount={expenses[2].amount} 
     date ={expenses[2].date}
     />

    
     <ExpenseItem
     title={expenses[3].title} 
     amount={expenses[3].amount} 
     date ={expenses[3].date}
     />

     
      </div>
  );
}

    
  

export default App;
