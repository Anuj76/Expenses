import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import './Expenses.css';

function Expenses(props) {

  const [filterdYear,setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  const filterExpense = props.items.filter(expense =>{ 
    return expense.date.getFullYear().toString()===filterdYear;
  });

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filterdYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filterExpense}/>
     <ExpensesList items={filterExpense}/>
    </Card>
    </div>
  );
}

export default Expenses;