import { NavLink } from "react-router-dom";
import { FaBuilding, FaBars } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { MdLeaderboard } from "react-icons/md";
import { SiCoveralls } from "react-icons/si";
import { BsFillTrophyFill, BsFillFileEarmarkRuledFill } from "react-icons/bs";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "../../src/sidebar.css";
const routes = [
  {
    path: "/",
    name: "Leaderboards",
    icon: <MdLeaderboard />,
  },
  {
    path: "/hostels",
    name: "Hostels",
    icon: <FaBuilding />,
  },
  {
    path: "/instuctions",
    name: "Rules",
    icon: <BsFillFileEarmarkRuledFill />,
  },

  {
    path: "/GC/Genre1",
    name: "GCs",
    icon: <BsFillTrophyFill />,
  },
  {
    path: "/s",
    name: "Discussion forum",
    icon: <MdMessage />,
  },
  // {
  //   path: "/s",
  //   name: "Logout",
  //   icon: <BiLogOut />,
  // },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar ${isOpen ? "sidebar_open" : ""}`}
        >
        {/* <div className="overall" style={{position: 'fixed'}}> */}
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Tech GC
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          {/* </div> */}
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
