import React from "react"

import { Link } from "gatsby"

const Footer = () => {
  return (
    <section className="followUsContainer" id="follow">
      <div className="blackDiv">
        <ul>
          <li>
            <Link to="/imprint">Imprint</Link>
            </li>
            <li>
            <Link to="/privacy">Privacy Policy </Link>
            </li>
            <li>
            <Link to="/disclaimer">Disclaimer</Link>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer
