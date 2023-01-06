import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../../layout/Header";
import Dashboard from "../../views/Dashboard";
import Questions from "../../views/Questions";
import MyFeedback from "../../layout/Tabs/MyFeedback";
import Auth from "../../views/Auth";

function App() {
  const location = useLocation();

  const [value, setValue] = useState(
    location.pathname === "/" ? "/dashboard/share-feedback" : location.pathname // fix the hard coded bit?
  );
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="App">
      <Header
        selectedUser={selectedUser}
        setValue={setValue}
        tabValue={value}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Auth
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          }
        />
        <Route
          path="/dashboard/:tab"
          element={<Dashboard tabValue={value} />}
        />
        <Route
          path="/user/:userid/question/:questionid"
          element={<Questions />}
        />
        <Route path="/user/:userid/feedback" element={<MyFeedback />} />
      </Routes>
    </div>
  );
}

export default App;
