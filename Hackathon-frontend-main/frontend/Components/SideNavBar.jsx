// import SideNav, {
//   Toggle,
//   Nav,
//   NavItem,
//   NavIcon,
//   NavText,
// } from "@trendmicro/react-sidenav";

// // Be sure to include styles at some point, probably during your bootstraping
// import "@trendmicro/react-sidenav/dist/react-sidenav.css";
// import { useSide } from "../services/useSide";
// import styles from "../styles/SideNavBar.module.css";

// const SideNavbar = () => {
//   const { expanded, setExpanded } = useSide(false);
//   //console.log(expanded);

//   return (
//     <SideNav
//       onToggle={() => {
//         setExpanded(!expanded);
//       }}
//       className={styles.sideNav}
//     >
//       <Toggle />
//       <Nav>
//         <NavItem>
//           <NavIcon>
//             <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
//           </NavIcon>
//           <NavText>Home</NavText>
//         </NavItem>
//         <NavItem>
//           <NavIcon>
//             <i
//               className="fa fa-fw fa-line-chart"
//               style={{ fontSize: "1.75em" }}
//             />
//           </NavIcon>
//           <NavText>Charts</NavText>
//           <NavItem>
//             <NavText>Line Chart</NavText>
//           </NavItem>
//           <NavItem>
//             <NavText>Bar Chart</NavText>
//           </NavItem>
//         </NavItem>
//       </Nav>
//     </SideNav>
//   );
// };

// export default SideNavbar;
