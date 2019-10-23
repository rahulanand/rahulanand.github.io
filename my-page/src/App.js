import React from 'react';
import Header from './components/Header'
import Background from './media/background.jpg'

var sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${Background})`
};

function App() {
  return (
    <div>
      <section style={ sectionStyle }>
        <Header />
      </section>
    </div>
  );
}

export default App;
