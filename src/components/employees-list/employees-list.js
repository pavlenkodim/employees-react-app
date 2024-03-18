import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const elemenst = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <EmployeesListItem
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elemenst}
        </ul>
    )
}

export default EmployeesList;