import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css';

const EmployeesList = ({data}) => {

    const elemenst = data.map(item => {
        return (
            <EmployeesListItem {...item}/>
        )
    })

    console.log(elemenst)

    return (
        <ul className="app-list list-group">
            {elemenst}
        </ul>
    )
}

export default EmployeesList;