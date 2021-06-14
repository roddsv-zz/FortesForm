import '../Header/Header.css';

function Header() {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <img src="./img/clipboard.svg" alt="FormsDev Logo" width="100" height="60"/>
            <h2 className="title">Preencha o formulário de cadastro</h2>
        </div>
      </nav>
    </div>
  );
}

export default Header;