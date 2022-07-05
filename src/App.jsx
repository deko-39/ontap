import React, { createContext, useContext, useEffect, useState } from "react";

// const App = () => {
//   // Tạo App function - App component
//   const [name, setName] = useState("");
//   // 2-way binding

// function handleChange(event) {
//   setName(event.target.value);
// }

// return (
//   <>
//     <input type="text" onChange={(handleChange)}></input>
//     <h1>Name: {name}</h1>
//   </>
// );
// };

// const App = () => {
//   const [name, setName] = useState("");
//   const [name1, setName1] = useState("");
//   const [name2, setName2] = useState("");

//   // Use effect chạy hàm ở vị trí biến số 1 khi component App render hoặc re-render (khi 1 trong các state của component thay đổi)
//   // Điều kiện cần để hàm trong useEffect chạy là component render hoặc rerender
//   // Điều component render hoặc rerender là state của component thay đổi....

//   // Chạy function trong useEffect mỗi khi bất cứ state nào của component thay đổi => useEffect(function)
//   // Chạy function trong useEffect mỗi khi state nào trong biến thứ 2 của useEffect của component thay đổi => useEffect(function, [state, state2])
//   // Chạy function trong useEffect trong lần đầu tiên render => useEffect(function, [])

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <>
//       <input type="text" onChange={handleChange}></input>
//       <h1>Name: {name}</h1>
//     </>
//   );
// };

// Tạo context thì phải nằm ngoài tất cả component để tránh việc rerender của component sẽ ảnh hưởng đến context
const UserContext = createContext();

const Edit = (props) => {
  // Muốn dùng context thì dùng hook useContext
  const { user, setUser } = useContext(UserContext);

  function handleChange(event) {
    setUser({ ...user, userId: user.userId + 1 });
  }
  return (
    <>
      <input type="text" onChange={handleChange}></input>
      <h1>UserId: {user.userId}</h1>
    </>
  );
};

const App = (props) => {
  const [user, setUser] = useState({
    userId: "",
    id: "",
    title: "",
    completed: false,
  });

  useEffect(() => {
    setUser({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
  }, []);

  return (
    <div style={{ border: "#000 solid 1px" }}>
      {/* Muốn dùng context thì phải wrap toàn bộ các component muốn dùng vào trong context provider */}
      {/* Luôn phải truyền giá trị ban đầu của context vào trong prop value của context provider */}
      <UserContext.Provider value={{ user, setUser }}>
        <h1>Name: {user.name}</h1>
        <Edit setName={setUser} user={user} />
        <Edit setName={setUser} user={user} />
        <Edit setName={setUser} user={user} />
      </UserContext.Provider>
    </div>
  );
};

// Cần truyền 1 hàm để ......
// Vẽ diagram https://app.diagrams.net/
// Code

export default App;
