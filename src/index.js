import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/Card';
import calcImg from './images/icon-calculator.svg';
import karmaImg from './images/icon-karma.svg';
import supImg from './images/icon-supervisor.svg';
import tbImg from './images/icon-team-builder.svg';

const Page = () => {
  return (
    <section className="container">
      <div className="intro">
        <div id="page-header">
          <h2>Reliable, efficient delivery</h2>
        </div>
        <div id="page-sub">
          <h2>Powered by Technology</h2>
        </div>
        <div id="page-p">
          <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        </div>
      </div>
      <div className="card-holder">
        <Card colour="green" heading="Supervisor" sub="Monitors activity to identify project roadblocks" icon={supImg} />
        <div className="compound-holder">
          <Card colour="red" heading="Team Builder" sub="Scans our talent network to create the optimal team for your project" icon={tbImg} />
          <Card colour="yellow" heading="Karma" sub="Regularly evaluates our talent to ensure quality" icon={karmaImg} />
        </div>
        <Card colour="blue" heading="Calculator" sub="Uses data from past projects to provide better delivery estimates" icon={calcImg} />
      </div>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Page />
);


