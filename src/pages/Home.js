import React from "react";
import '.././App.css';
import banner from './HomepageImg/banner.jpg';
import banner1 from './HomepageImg/banner1.jpg';
import capture from './HomepageImg/capture.jpg';

class Main extends React.Component{
	constructor(props){
	  super(props);
	  this.state={
		index:0
	  }
	}
	startLoop = 0;

     changeImg=()=>{
		let i = this.state.index;
		  if(i < 2){
		   i++;
		  } else {
			i = 0;
			}
		this.setState({index:i})
		}

	
	componentDidMount(){
	  this.startLoop= setInterval(this.changeImg, 3000);
	}

	componentWillUnmount(){
		//console.log(this.startLoop);
		clearInterval(this.startLoop);
	}
  
	render() {
		const images=[banner,banner1,capture];
	  return (
	  <main className="main-content">
		  <div className="main">
				<q>With wrong farming methods,we turn fartile land into desert
					.Unless we go back to organic farming and save the soil,there is no future</q>
			  <p><strong>Sadguru</strong></p>
		  </div>
		  <div className="main1">
			  <img src={images[this.state.index]} alt="banner" height={`400px`} width={`600px`} />
		  </div>
		  <div className="main2">
			  <q>Oraganic farming has been shown to provide major benfit's for wildlife and wider environment</q>
			  <p><strong>Prince Charles</strong></p> 
		   </div>
		  
	  </main> 
	);
  
	 }
  };
  
  export default Main;