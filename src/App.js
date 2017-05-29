import React, {Component} from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import $ from "jquery";
import Contact from "./components/Contact";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'bar',
            resumeData: {}
        }
    }

    getResumeData() {
        $.ajax({
            url: 'http://localhost:3000/resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({
                    resumeData: data
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err)
                alert(err);
            }
        })
    }

    componentDidMount() {
        this.getResumeData();
    }


    render() {
        console.log(this.state.resumeData);
        return (
            <div className="App">
                <Header data={this.state.resumeData.main}/>
                <About data={this.state.resumeData.main}/>
                <Resume data={this.state.resumeData.resume}/>
                <Portfolio data={this.state.resumeData.portfolio}/>
                <Testimonials data={this.state.resumeData.testimonials}/>
                <Contact data={this.state.resumeData.main}/>
                <Footer/>
            </div>
        );
    }


}

export default App;
