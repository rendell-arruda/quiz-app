import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonInitial = styled.button`
  cursor: pointer;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(
    90deg,
    rgba(132, 53, 222, 1) 0%,
    rgba(184, 84, 232, 1) 100%
  );
  border-radius: 5px;
  border: none;
  transition: ease-in-out 0.3s;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(184, 84, 232, 1) 0%,
      rgba(132, 53, 222, 1) 100%
    );
  }
`;

export const WelcomeContainer = styled.div`
  text-align: center;
  max-width: 500px;

  h2,
  p {
    margin-bottom: 1rem;
  }

  p {
    color: #8435de;
  }
  img {
    margin-top: 2rem;
  }
`;
