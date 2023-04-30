import './ExpensenForm.css'
import React , {useState} from 'react'

const ExpensenForm = () => {
    // const [EnterTitle,setEnterTitle] = useState('');
    // const [EnterAmount,setEnterAmount] = useState('');
    // const [EnterDate,setEnterDate] = useState('');
    const [EnterInput,setEnterInput] = useState({
        EnterTitle: '',
        EnterAmount: '',
        EnterDate: ''
    })

    const titleChangeHandler = (event) =>{
        // setEnterTitle(event.target.value);
        setEnterInput({
            ...EnterInput,
            EnterTitle: event.target.value
        });
    }
    const amountChangeHandler = (event) =>{
        // setEnterAmount(event.target.value);
        setEnterInput({
            ...EnterInput,
            EnterAmount: event.target.value
        });
    }
    const dateChangeHandler = (event) =>{
        // setEnterDate(event.target.value);
        setEnterInput({
            ...EnterInput,
            EnterDate: event.target.value
        });
    }
    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2024-01-01" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expensens</button>
            </div>
        </form>
    );
}

export default ExpensenForm