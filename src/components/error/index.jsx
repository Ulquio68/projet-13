import './index.css';

function Error({
    code = '404',
    message = "Oups! La page que vous demandez n'existe pas.",
}) {
    return (
        <div className="error">
            <h1 className="h1-Title">{code}</h1>
            <h2 className="h2-Title">{message}</h2>
        </div>
    );
}

export default Error;
