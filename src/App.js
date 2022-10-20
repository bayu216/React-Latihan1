import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./layout_content.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";

//import Menu from "./component/Menu";
import { DatePicker } from "antd";

import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import UbahMember from "./pages/admin/UbahMember";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/register">Register</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              padding: "0 50px",
            }}
          >
            {/* <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-content">
              <br />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/about" component={About} />
                <Route path="/admin/member/ubah/:id" component={UbahMember} />
              </Switch>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Copyright &copy; Fauzi Bayu Saputra 2022
          </Footer>
        </Layout>
      </Router>
    </>
  );
}

export default App;
