import React from "react";
import PDF from "react-pdf-js";
import resume from "../assets/resume.pdf";

class Resume extends React.Component {
  state = {};

  onDocumentComplete = pages => {
    this.setState({ page: 1, pages });
  };

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  };

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  };

  renderPagination = (page, pages) => {
    let previousButton = (
      <li className="previous" onClick={this.handlePrevious}>
        <a href="#">
          <i className="fa fa-arrow-left" /> Previous
        </a>
      </li>
    );
    if (page === 1) {
      previousButton = (
        <li className="previous disabled">
          <a href="#">
            <i className="fa fa-arrow-left" /> Previous
          </a>
        </li>
      );
    }
    let nextButton = (
      <li className="next" onClick={this.handleNext}>
        <a href="#">
          Next <i className="fa fa-arrow-right" />
        </a>
      </li>
    );
    if (page === pages) {
      nextButton = (
        <li className="next disabled">
          <a href="#">
            Next <i className="fa fa-arrow-right" />
          </a>
        </li>
      );
    }
    // return (
    //   <nav>
    //     <ul className="pager">
    //       {previousButton}
    //       {nextButton}
    //     </ul>
    //   </nav>
    // );
  };

  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div>
        <PDF
          file={resume}
          onDocumentComplete={this.onDocumentComplete}
          page={this.state.page}
        />
        {pagination}
      </div>
    );
  }
}

export default Resume;
