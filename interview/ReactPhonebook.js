// React Phone Book
// We provided some simple React template code.Your goal is to create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button.Once the submit button is pressed, the information should be displayed in a list below(automatically sorted by last name) along with all the previous information that was entered.This way the application can function as a simple phone book.

// Display all the information in a table with some basic CSS styling.

// Submit your code once it is complete and our system will validate your output.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
    table: {
        borderCollapse: 'collapse'
    },
    tableCell: {
        border: '1px solid gray',
        margin: 0,
        padding: '5px 10px',
        width: 'max-content',
        minWidth: '150px',
        background: '#71eeb8',
    },
    tableCellEntry: {
        border: '1px solid gray',
        margin: 0,
        padding: '5px 10px',
        width: 'max-content',
        minWidth: '150px',
        fontWeight: 'normal',
    },
    form: {
        container: {
            padding: '20px',
            border: '1px solid #F0F8FF',
            borderRadius: '15px',
            width: 'max-content',
            marginBottom: '40px'
        },
        label: {
            foneWeight: 'bold',
        },
        inputs: {
            marginBottom: '8px',
            padding: '5px 10px',
        },
        submitBtn: {
            marginTop: '10px',
            padding: '10px 15px',
            border: 'none',
            backgroundColor: '#71eeb8',
            fontSize: '14px',
            borderRadius: '5px'
        }
    }
}

function PhoneBookForm({ addEntryToPhoneBook }) {

    const [values, setValues] = useState({
        userFirstname: "",
        userLastname: "",
        userPhone: ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        addEntryToPhoneBook(values);
        setValues({
            userFirstname: "",
            userLastname: "",
            userPhone: ""
        })
    }

    return (
        <form onSubmit={handleSubmit} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userFirstname'
                name='userFirstname'
                type='text'
                value={values.userFirstname}
                onChange={handleChange}
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userLastname'
                name='userLastname'
                type='text'
                value={values.userLastname}
                onChange={handleChange}
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userPhone'
                name='userPhone'
                type='text'
                value={values.userPhone}
                onChange={handleChange}
            />
            <br />
            <input
                style={style.form.submitBtn}
                className='submitButton'
                type='submit'
                value='Add User'
            />
        </form>
    )
}

function Entry({ entry }) {
    return (
        <tr>
            <th style={style.tableCellEntry}>{entry.userFirstname}</th>
            <th style={style.tableCellEntry}>{entry.userLastname}</th>
            <th style={style.tableCellEntry}>{entry.userPhone}</th>
        </tr>
    )
}

function PhoneBookList({ entries }) {
    return (
        <thead>
            {entries.map((entry, idx) => (
                <Entry entry={entry} key={idx} />
            ))}
        </thead>
    )
}

function InformationTable({ phoneBook }) {
    return (
        <table style={style.table} className='informationTable'>
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
            </thead>
            <PhoneBookList entries={phoneBook} />
        </table>
    );
}

function Application() {

    const [phoneBook, setPhoneBook] = useState([]);

    const addEntryToPhoneBook = (entry) => {
        setPhoneBook([...phoneBook, entry].sort((a, b) => {
            return a.userLastname.localeCompare(b.userLastname)
        }))
    }


    return (
        <section>
            <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
            <InformationTable phoneBook={phoneBook} />
        </section>
    );
}

ReactDOM.render(
    <Application />,
    document.getElementById('root')
);