import { createContext } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  //   const value = { name: 'Quiz de Programação' };
  return (
    <QuizContext.Provider
      value={{
        nameApp: 'Quiz de Programação'
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
