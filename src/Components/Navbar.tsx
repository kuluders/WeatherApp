import React from "react";

export default class Navbar extends React.Component<
  { parentCallback: any },
  { value: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: event.currentTarget.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.parentCallback(this.state.value);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            WeatherApp
          </a>
          <form className="d-flex" role="search" onSubmit={this.handleSubmit}>
            <input
              name="search"
              id="locSearch"
              className="form-control me-2"
              type="search"
              placeholder="Check different location"
              aria-label="Search"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
