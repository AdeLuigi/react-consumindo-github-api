import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input type="text" placeholder="Pesquise aqui" />
      <button>Buscar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/31490653?s=400&u=c3a73feb418e9df1f201f55576f226ac2e5e71a9&v=4"
          alt="Sandobits"
        />
        <div>
          <strong>Servicin Api</strong>
          <p>Descrição do reposotório</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/31490653?s=400&u=c3a73feb418e9df1f201f55576f226ac2e5e71a9&v=4"
          alt="Sandobits"
        />
        <div>
          <strong>Servicin Api</strong>
          <p>Descrição do reposotório</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/31490653?s=400&u=c3a73feb418e9df1f201f55576f226ac2e5e71a9&v=4"
          alt="Sandobits"
        />
        <div>
          <strong>Servicin Api</strong>
          <p>Descrição do reposotório</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/31490653?s=400&u=c3a73feb418e9df1f201f55576f226ac2e5e71a9&v=4"
          alt="Sandobits"
        />
        <div>
          <strong>Servicin Api</strong>
          <p>Descrição do reposotório</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
