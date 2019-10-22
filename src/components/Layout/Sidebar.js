import logo200Image from 'assets/img/logo/logo_200.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React , {Fragment} from 'react';

import {
  MdAccountCircle,
  MdArrowDropDownCircle,
  MdBorderAll,
  MdBrush,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRadioButtonChecked,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdWidgets,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};






const navComponents = [
  { to: '/buttons', name: 'buttons', exact: false, Icon: MdRadioButtonChecked },
  {
    to: '/button-groups',
    name: 'button groups',
    exact: false,
    Icon: MdGroupWork,
  },
  { to: '/forms', name: 'forms', exact: false, Icon: MdChromeReaderMode },
  { to: '/input-groups', name: 'input groups', exact: false, Icon: MdViewList },
  {
    to: '/dropdowns',
    name: 'dropdowns',
    exact: false,
    Icon: MdArrowDropDownCircle,
  },
  { to: '/badges', name: 'badges', exact: false, Icon: MdStar },
  { to: '/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive },
  { to: '/progress', name: 'progress', exact: false, Icon: MdBrush },
  { to: '/modals', name: 'modals', exact: false, Icon: MdViewDay },
];

const navContents = [
  { to: '/typography', name: 'typography', exact: false, Icon: MdTextFields },
  { to: '/tables', name: 'tables', exact: false, Icon: MdBorderAll },
];

const pageContents = [
  { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
  {
    to: '/login-modal',
    name: 'login modal',
    exact: false,
    Icon: MdViewCarousel,
  },
];

const navItems = [
  { to: '/', name: 'dashboard', exact: true, Icon: MdDashboard },
  { to: '/cards', name: 'cards', exact: false, Icon: MdWeb },
  { to: '/charts', name: 'charts', exact: false, Icon: MdInsertChart },
  { to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets },
];


const menuItems = [
  { to: '/', name: 'Dashboards', exact: true, Icon: MdDashboard, children: [  { to: '/', name: ' BI Visualizations', exact: true, Icon: MdDashboard },
  { to: '/sentiment', name: 'Sentiment Analysis', exact: true, Icon: MdDashboard },
  { to: '/cards', name: 'User Defined', exact: true, Icon: MdDashboard },
  { to: '/charts', name: 'Preset KPIS', exact: true, Icon: MdDashboard },
  { to: '/widgets', name: 'Product, Campaign, Geo, Customer, Competitor', exact: true, Icon: MdDashboard },
  { to: '/typography', name: 'Last Leg', exact: true, Icon: MdDashboard },
  { to: '/user-progress-table', name: 'Market Update', exact: true, Icon: MdDashboard },
  { to: '/forms', name: 'News Time Machine', exact: true, Icon: MdDashboard },
  { to: '/buttons', name: 'Social Media', exact: true, Icon: MdDashboard },
  { to: '/tables', name: 'Price Predictions', exact: true, Icon: MdDashboard },
  { to: '/modals', name: 'Key Drivers', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Volume Revenue Profit', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Cost Structures', exact: true, Icon: MdDashboard }] },
  { to: '/', name: 'Data', exact: true, Icon: MdDashboard, children: [

    { to: '/', name: 'Data Integration', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Data Extraction', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Outgoing & Apis', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Data Validations', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Automation', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Visualization', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Access Control', exact: true, Icon: MdDashboard }] ,
  //   1. Data Integration
  //   2. Data Extraction
  //   3. Outgoing & Apis
  //   4. Data Validations
  //   5. Automation
  //   6. Visualization
  // Access Control
 },
  { to: '/', name: 'Decisions', exact: true, Icon: MdDashboard, children: [
  //   • Automated Pricing Guidance
  //   • Price Now
  //   • Sensitivity Analysis
  //   • Grab Opportunity
  //   • Fix Margin Leakage
  //   • New Launch
  //   • Simulate
  //   • What is Next
  //   • Overriding Decisions
  // Promotion

  { to: '/', name: 'Automatic Pricing Guidance', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Price Now', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Sensitivity Analysis', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Grab Oppurtunity', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Fix Margin Leakage', exact: true, Icon: MdDashboard },
  { to: '/', name: 'New Launch', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Simulate', exact: true, Icon: MdDashboard } ,
  { to: '/', name: 'What is Next', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Overriding Decisions', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Promotion', exact: true, Icon: MdDashboard },

  ] },
  { to: '/', name: 'Reports', exact: true, Icon: MdDashboard, children: [


    { to: '/', name: 'Automated Reports', exact: true, Icon: MdDashboard },
    { to: '/', name: 'User Reports', exact: true, Icon: MdDashboard },
    { to: '/', name: 'IOCL Reports', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Commodity Analytics', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Price Analytics', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Cascading Effect', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Cross Location Profitability Update', exact: true, Icon: MdDashboard } ,
    { to: '/', name: 'Volume Revenue Profit Trends', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Margin Leakage Report', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Oppurtunity Finder', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Accuracy Reports', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Comparision & Deviation Reports', exact: true, Icon: MdDashboard },
  { to: '/', name: 'What If Analysis', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Potential Move Simulator', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Key Drivers B2B B2C', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Tender Win Loss Trends', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Campaign Effectiveness', exact: true, Icon: MdDashboard } ,
  { to: '/', name: 'Price Forecasting', exact: true, Icon: MdDashboard }

  //   1. Automated Reports
  //   2. User Reports
  //   3. IOCL Reports
  //   4. Commodity Analytics
  //   5. Price Analytics
  //   6. Cascading Effect
  //   7. Cross Location Profitability Update
  //   8. Volume Revenue Profit Trends
  //   9. Margin Leakage Report
  //   10. Oppurtunity Finder
  //   11. Accuracy Reports
  //   12. Comparision & Deviation Reports 
  //   13. What-if Analysis Reports
  //   14. Potential Move Simulator
  //   15. Key Drivers B2B B2C
  //   16. Tender Win Loss Trends
  //   17. Campaign Effectiveness
  // Price Forecasting



  ] },
  { to: '/', name: 'Alerts', exact: true, Icon: MdDashboard, children: [


  //   1. Alerts
  //   2. Margin Deltas
  //   3. Margin Leakage
  //   4. Overrriding
  //   5. Cascsading Effects
  //   6. IOCL Vs Market Vs Competitor Price
  //   7. Price Deltas
  //   8. Parity
  // Tender Win Loss
    { to: '/', name: 'Margin Deltas', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Margin Leakage', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Overriding', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Cascading Effects', exact: true, Icon: MdDashboard },
    { to: '/', name: 'IOCL Vs Market Vs Competitor Price', exact: true, Icon: MdDashboard },
    { to: '/', name: 'Price Deltas', exact: true, Icon: MdDashboard } ,
    { to: '/', name: 'Parity', exact: true, Icon: MdDashboard } ,
    { to: '/', name: 'Tender Win Loss', exact: true, Icon: MdDashboard } 
  ] },


]


const dashboardMenuItems= [
  { to: '/', name: ' BI Visualizations', exact: true, Icon: MdDashboard },
  { to: '/', name: 'User Defined', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Preset KPIS', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Product, Campaign, Geo, Customer, Competitor', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Last Leg', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Market Update', exact: true, Icon: MdDashboard },
  { to: '/', name: 'News Time Machine', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Social Media', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Price Predictions', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Key Drivers', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Volume Revenue Profit', exact: true, Icon: MdDashboard },
  { to: '/', name: 'Cost Structures', exact: true, Icon: MdDashboard },

  
// 	1. BI Visualizations
// 	2. User Defined
// 	3. Preset KPIS
// 	4. Product, Campaign, Geo, Customer, Competitor
// 	5. Commoditiy
// 	6. Last Leg
// 	7. Market Update
// 	8. News Time Machine
// 	9. Social Media
// 	10. Price Predictions
// 	11. Key Drivers
// 	12. Volume Revenue Profit
// Cost Structures

];


const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenDashboards: true,
    isOpenData: false,
    isOpenDecisions: false,
    isOpenAlerts: false,
    isOpenReports: false,
  };

  handleClick = name => () => {

    console.log(name);
    
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];
        console.log(isOpen);
        
      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <span className="text-white">
                POC For IOC 
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {menuItems.map(({ to, name, exact, Icon, children }, pindex) => (
              <Fragment key={pindex}>
              <NavItem className={bem.e('nav-item')}   onClick={this.handleClick(name)}  >
                <BSNavLink
                  id={`navItem-${name}-${pindex}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                  <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state[`isOpen${name}`]
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
                </BSNavLink>
              </NavItem>

<Collapse style={{fontSize: '80%', marginLeft: 20}} isOpen={this.state[`isOpen${name}`]}>
{children != null ?children.map(({ to, name, exact, Icon }, index) => (
  <NavItem key={index} className={bem.e('nav-item')}>
    <BSNavLink
      id={`navItem-${name}-${index}`}
      className="text-uppercase"
      tag={NavLink}
      to={to}
      activeClassName="active"
      exact={exact}
    >
      <Icon className={bem.e('nav-item-icon')} />
      <span className="">{name}</span>
    </BSNavLink>
  </NavItem>
)) : null }
</Collapse>
</Fragment>

            ))}
{/* 
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Components')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Components</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenComponents}>
              {navComponents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdSend className={bem.e('nav-item-icon')} />
                  <span className="">Contents</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">Pages</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse> */}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
