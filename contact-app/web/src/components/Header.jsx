const Header = () => {
    return (
        <div className="ui inverted  menu">
        <a href="#/" className="item active">
          Home
        </a>
        <a href="#/" className="item">
          Add Contact
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
          <a href="#/" className="ui item">
            Logout
          </a>
        </div>
      </div>
    )
}

export default Header
