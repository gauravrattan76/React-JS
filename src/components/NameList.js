import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Gaurav',
            age: 28,
            skill: 'Angular'
        },
        {
            id: 2,
            name: 'Zaheer',
            age: 28,
            skill: 'React'
        },
        {
            id: 3,
            name: 'Moushin',
            age: 28,
            skill: 'vUE'
        }
    ]
    const personList = persons.map(person => (
        //key prop are not available in the child component
        <Person key={person.id} person={person}></Person>
    //    <Person person={person}></Person>
    ))
    return <div>{personList}</div>

    // const names = ["Bruce", "Clark", "Daiana"]
    // const namesList = names.map(name => <h2>{name}</h2>)
    // return <div>{namesList}</div>
    // return (
    //     <div>
    //         {

    //         }
    //         {/* <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2> */}

    //     </div>
    // )
}

export default NameList
