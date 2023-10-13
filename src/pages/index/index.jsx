import logo from '../../designs/img/bank-tree.jpeg';
import logoChat from '../../designs/img/icon-chat.png';
import logoMoney from '../../designs/img/icon-money.png';
import logoSecurity from '../../designs/img/icon-security.png';
import './index.css';
import Infos from '../../components/info-index';

function Home() {
    return (
        <main id="main">
            <div className="image-part">
                <img src={logo} className="App-logo-index" alt="logo-index" />
                <section className="section-index">
                    <h2>
                        No fees.
                        <br />
                        No minimum deposit.
                        <br />
                        High interest rates.
                    </h2>
                    <p>Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <div className="infos-part">
                <Infos
                    src={logoChat}
                    texteH2="You are our #1 priority"
                    texteP="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. "
                />
                <Infos
                    src={logoMoney}
                    texteH2="More savings means higher rates"
                    texteP="The more you save with us, the higher your interest rate will be! "
                />
                <Infos
                    src={logoSecurity}
                    texteH2="Security you can trust"
                    texteP="We use top of the line encryption to make sure your data and money is always safe. "
                />
            </div>
        </main>
    );
}

export default Home;
