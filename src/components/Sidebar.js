import React from "react";
export default function Sidebar() {
  return (
    <aside className="menu">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <a className="is-active" href="./dashboard">
            Feeds
          </a>
          <ul>
            <li>
              <a>Custom Feeds</a>
            </li>
            <li>
              <a>Predefined Feeds</a>
            </li>
            <li>
              <a>For Pragnent Women</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="">Already have a Child</a>
          <ul>
            <li>
              <a>How to be</a>
            </li>
            <li>
              <a>How to Behave</a>
            </li>
            <li>
              <a>Future Concepts</a>
            </li>
            <li>
              <a>Subscriptions</a>
            </li>
            <li>
              <a>Education</a>
            </li>
          </ul>
        </li>
      </ul>
      <p className="menu-label">Administration</p>
      <ul className="menu-list">
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a className="">Manage Your Team</a>
          <ul>
            <li>
              <a>Members</a>
            </li>
            <li>
              <a>Create a Team</a>
            </li>
            <li>
              <a>Add a member</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Invitations</a>
        </li>
        <li>
          <a>Authentication</a>
        </li>
      </ul>
      <p className="menu-label">Transactions</p>
      <ul className="menu-list">
        <li>
          <a>Payments</a>
        </li>
        <li>
          <a>Transfers</a>
        </li>
        <li>
          <a>Balance</a>
        </li>
      </ul>
    </aside>
  );
  {
    /* <ul>
  <li>News</li>
  <li>Notifications</li>
  <li>Doctors</li>
  <li>Hospitals</li>
  <li>Courses</li>
  <li>Find Work</li>
  <li>Settings</li>
</ul> */
  }
}
