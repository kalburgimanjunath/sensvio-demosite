import React from "react";
import { Header, Footer, Sidebar, Widget } from "../components";
import Feeds from "./Dashboard/Feeds";

export default function Dashboard() {
  return (
    <div>
      <section>
        <Header />
        <div className="row">
          <div className="columns">
            <div className="column is-3">
              <Sidebar />
            </div>
            <div className="column is-6">
              <Feeds />
            </div>
            <div className="column is-3">
              <Widget />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
