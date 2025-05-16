import React, { createContext, useContext, useState} from 'react';

// Create context
const Context  = createContext('light');

// const ThemedComponent = () => {
//   const theme = useContext(ThemeContext); // Access the context value
//   return <p>Current theme is: {theme}</p>;
// };

const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
      setTheme((prevTheme) =>
          (prevTheme === "light" ? "dark" : "light"));
  };

  return (
      <Context.Provider
          value={{ theme, toggleTheme }}>
          {children}
      </Context.Provider>
  );
};


const Button = () => {
  const { theme, toggleTheme } = useContext(Context);

  // Change the theme of the entire page
  document.body.style.backgroundColor = theme === "light" ? "#ffffff" : "#333333";
  document.body.style.color = theme === "light" ? "#333333" : "#ffffff";

  return (
    <>
      <button
          style={{
              backgroundColor: theme === "light" ? "#ffffff" : "#333333",
              color: theme === "light" ? "#333333" : "#ffffff",
          }}
          onClick={toggleTheme}
      >
          Toggle Theme
      </button>
    </>
  );
};

const UseContext= () => {
  return (
    <Provider>
        <div>
            <h1>Themed App</h1>
            <Button />
        </div>
    </Provider>
);
}

export default UseContext;