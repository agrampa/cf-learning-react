import React from 'react';

class Modal extends React.Component {
  render() {
    return(
      <div className="modal">
        <button onClick={this.props.close}>Close</button>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Modal;


// <Modal close={() => console.log('Hi!')}>
//   <p>Cool</p>
//   <strong>Beans</strong>
// </Modal>
