import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import { Header, RepositoryInfo, Issues } from './styled';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}
interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  open_issues_count: number;
  forks_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}
interface Issue {
  id: string;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [currentRepository, setCurrentRepository] = useState<Repository | null>(
    null,
  );
  const [issuesArray, setIssuesArray] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setCurrentRepository(response.data);
    });
    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssuesArray(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="logo" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {currentRepository && (
        <RepositoryInfo>
          <header>
            <img
              src={currentRepository.owner.avatar_url}
              alt={currentRepository.owner.login}
            />
            <div>
              <strong>{currentRepository.full_name}</strong>
              <p>{currentRepository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{currentRepository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{currentRepository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{currentRepository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issuesArray.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
