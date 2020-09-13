import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom' 
import UserapplicationForm from './UserapplicationForm.js'
import AdminDashboard from './AdminDashboard'

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>User Job Application</h1>
               <Route path="/" component={UserapplicationForm} exact={true} />
               <Route path="/admin" component ={AdminDashboard} />
            </div>
        </BrowserRouter>
    )
}

export default App