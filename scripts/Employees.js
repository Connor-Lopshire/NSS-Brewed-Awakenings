import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"
const orders = getOrders()



const topSeller = (employee, allOrders) => {
    let sales = 0
    for (const order of allOrders){
        if  (employee.id === order.employeeId){
        sales++
    }
} return sales
}








document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
            
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    let totalSales = topSeller(employee, orders)
                    window.alert(`${employee.name} ${totalSales}`)
                }
            }
        }
    }
)
const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

