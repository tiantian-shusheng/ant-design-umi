import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from "umi/link";
import { styles } from "./index.less";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Footer, Sider, Content } = Layout;

class Index extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256}>
          <Menu
            onClick={this.handleClick}
            style={{ width: 256, height: "100vh", }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <Menu.Item key="HelloWord">
              <Link to="/"><Icon type="mail" />HelloWord</Link>
            </Menu.Item>
            <Menu.Item key="List">
              <Link to="/list"><Icon type="mail" />List</Link>
            </Menu.Item>
            <Menu.Item key="Card">
              <Link to="/card"><Icon type="mail" />Card</Link>
            </Menu.Item>
            <Menu.Item key="Drag">
              <Link to="/drag"><Icon type="mail" />Drag</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Footer
          {/* <Link to="/">Footer</Link> */}
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Index
