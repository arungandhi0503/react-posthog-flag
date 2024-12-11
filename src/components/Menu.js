import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useFeatureFlagEnabled } from "posthog-js/react";

const Menu = () => {
  const flagEnabled = useFeatureFlagEnabled("router-menu");
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        {flagEnabled ? (
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
