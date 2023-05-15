import styled from 'styled-components';

export const Btn = styled.button.attrs({ type: 'button' })`
  cursor: pointer;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(
    90deg,
    rgba(132, 53, 222, 1) 0%,
    rgba(184, 84, 232, 1) 100%
  );
  border-radius: 5px;
  border: 1px solid #fff;
  transition: ease-in-out 0.3s;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(184, 84, 232, 1) 0%,
      rgba(132, 53, 222, 1) 100%
    );
  }
`;

export const DesafioContainer = styled.div`
  text-align: center;
  max-width: 700px;
  background: #8435de;
  border-radius: 4px;
  padding: 2rem;
  h2 {
    margin-bottom: 3rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;
