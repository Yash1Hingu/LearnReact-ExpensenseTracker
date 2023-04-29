import './ExpensenForm.css'

const ExpensenForm = () => {
    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text"/>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="0.01"/>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2024-01-01"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expensens</button>
            </div>
        </form>
    );
}

export default ExpensenForm