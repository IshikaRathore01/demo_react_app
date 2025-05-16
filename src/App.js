import logo from './logo.svg';

import TodoWrappers from './components/Todo/todoWrappers';
import Info from './components/About/Info';
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import TodoList from './components/Todo/TodoList';
import UseState from './components/Hooks/useState';
import UseEffect from './components/Hooks/useEffect';
import UseRef from './components/Hooks/useRef';
import UseMemo from './components/Hooks/useMemo';
import UseReducer from './components/Hooks/useReducer';
import UseContext from './components/Hooks/useContext';
import Login from './components/Auth/Login';
import PrivateRoute from './components/Auth/PrivateRoute';

// const App = () => {
//     return (
//       <BrowserRouter>
//         <div id="App" className="App">
//           <Routes>
//             {/* Applying the Layout component as a parent */}
//             <Route path="/" element={<Layout />}>
//               <Route index element={<TodoList />} /> {/* Default route */}
//               <Route path="about" element={<Info />} />
//               <Route path="add" element={<TodoWrappers />} />
//               <Route path=":id" element={<TodoList />}/>
//               <Route path="useState" element={<UseState />} />
//               <Route path="useEffect" element={<UseEffect />} />
//               <Route path="useRef" element={<UseRef />} />
//               <Route path="useMemo" element={<UseMemo />} />
//               <Route path="useReducer" element={<UseReducer />} />
//             </Route>
//           </Routes>
//         </div>
//       </BrowserRouter>
//     );
//   };
//<Route path="dashboard" element={<ProtectedRoute allowedRoles={['user', 'admin']}><Dashboard /></ProtectedRoute>} />
//<Route path="admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminPage /></ProtectedRoute>} />
//<Route path="unauthorized" element={<Unauthorized />} />

const App = () => {
  return (
    <BrowserRouter>
      <div id="App" className="App">
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes with Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<PrivateRoute><TodoList /></PrivateRoute>} />
            <Route path="about" element={<PrivateRoute><Info /></PrivateRoute>} />
            <Route path="add" element={<PrivateRoute><TodoWrappers /></PrivateRoute>} />
            <Route path=":id" element={<PrivateRoute><TodoList /></PrivateRoute>}/>
            <Route path="useState" element={<PrivateRoute><UseState /></PrivateRoute>} />
            <Route path="useEffect" element={<PrivateRoute><UseEffect /></PrivateRoute>} />
            <Route path="useRef" element={<PrivateRoute><UseRef /></PrivateRoute>} />
            <Route path="useMemo" element={<PrivateRoute><UseMemo /></PrivateRoute>} />
            <Route path="useReducer" element={<PrivateRoute><UseReducer /></PrivateRoute>} />
            <Route path="useContext" element={<PrivateRoute><UseContext /></PrivateRoute>} />
          </Route>

          {/* Catch-All Route */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};


  const Layout = () => {
    return (
      <>
        <h1>My Website</h1> {/* This will be present on every page */}
        <Navbar Nav1="Home" Nav2="About" Nav3="Add" Nav4="Examples"/>
        <Outlet /> {/* This will render the nested routes */}
      </>
    );
  };

export default App;
