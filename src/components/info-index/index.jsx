import './index.css';

function Infos({ src, texteH2 = '', texteP = '' }) {
    return (
        <div className="infos-bloc">
            <img src={src} alt="logo-infos" className="App-infos-logo" />
            <h1 className="App-infos-h2">{texteH2}</h1>
            <p className="App-infos-p">{texteP}</p>
        </div>
    );
}

export default Infos;
