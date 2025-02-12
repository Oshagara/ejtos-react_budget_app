import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Code to import Budget.js
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';
import Currency from './components/Currency';


// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                                            // Budget component
                                    <div className='col-sm'>
                                        <Budget />
                                    </div>
                        }        

                        {
                            /* Add Remaining component here*/
                                             //Remaining component
                                <div className='col-sm'>
                                    <Remaining />
                                </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                                             //ExpenseTotal component
                                    <div className='col-sm'>
                                        <ExpenseTotal />
                                    </div>
                        }

                        {
                            /* Add Currency component here */
                                    <div className='col-sm'>
                                        <Currency />
                                    </div>
                        }     
                       
                        {
                            /* Add ExpenseList component here */
                            <div className='col-12'>
                             <ExpenseList />
                            </div>
                        }         

                        {
                            /* Add ExpenseItem component here */
                            
                        }        

                        {
                            /* Add AllocationForm component here under */
                            <div className='col-12'>
                                <AllocationForm/>
                            </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
