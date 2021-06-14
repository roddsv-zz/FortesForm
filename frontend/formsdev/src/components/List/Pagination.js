import React from 'react';

export default function Pagination() {
  return (
    <nav aria-label="Navegação de página exemplo">
      <ul className="pagination justify-content-center">
      <div className="col-ls-12" />
      <div className="col-ls-12" />
        <li className="page-item disabled">
          <a className="page-link" href="#" tabindex="-1">
            Anterior
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Próximo
          </a>
        </li>
      </ul>
    </nav>
  );
}