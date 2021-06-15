// import logo from './logo.svg';
// import './App.css';
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";
import { Component } from "react";

class App extends Component  {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  getTotal = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad;
  };

  getPositivePercentage = () => {
    const { good } = this.state;
    return good ? Math.ceil(good/this.getTotal()*100) +"%" : "0%"

  }

  handleChangeStats = (name) => {
    this.setState((prev) => ({
      [name]: prev[name] + 1,
    }));
  };


  render() {
    
    return (
    
    <>
      
      <div style={{ width: '300px', margin: '0 auto' }}>
      
       
     
      <Section title={'Please leave feedback'}>
            <FeedbackOptions onChangeStats={this.handleChangeStats} />
            </Section>
            <Section title={'Statistics'}>
            { !!this.getTotal() ? (<Statistics
              positive={this.getPositivePercentage()}
              stats={this.state}
              total={this.getTotal()} />
            ):(
          <Notification message= "No feedback given"/>)}
      </Section>
        
        
        </div>
        
      </>
    
 );
   }
}

export default App;
