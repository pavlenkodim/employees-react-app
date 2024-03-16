import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'

function App() {

    const data = [
        {name: 'Иван С.', salary: 800, increase: false, id:1},
        {name: 'Адександр М.', salary: 3000, increase: false, id:2},
        {name: 'Василий Г.', salary: 5000, increase: true, id:3},
        {name: 'Дмитрий П.', salary: 4000, increase: false, id:4}
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data} />
            <EmployeesAddForm/>
        </div>
    );
}

export default App;