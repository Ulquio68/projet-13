import './index.css';

function Account({ texteTitle = '', amount = '' }) {
    return (
        <section className="account-section">
            <div className="bloc-text-account">
                <p className="texteTitle">{texteTitle}</p>
                <p className="amount">{amount}</p>
                <p className="balance">Available Balance</p>
            </div>
            <button className="transaction-button">View transactions</button>
        </section>
    );
}

export default Account;
