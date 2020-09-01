import { FiChevronRight } from 'react-icons/fi';
import React from 'react';

import { Title, Form, Repositories } from './styled';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="github explorer logo" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img
            src="https://avatars0.githubusercontent.com/u/42722634?s=460&u=5c21b7044f1bd2e4718146c7c2f69a2578a18d51&v=4"
            alt="avatar"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="">
          <img
            src="https://avatars0.githubusercontent.com/u/42722634?s=460&u=5c21b7044f1bd2e4718146c7c2f69a2578a18d51&v=4"
            alt="avatar"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="">
          <img
            src="https://avatars0.githubusercontent.com/u/42722634?s=460&u=5c21b7044f1bd2e4718146c7c2f69a2578a18d51&v=4"
            alt="avatar"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
