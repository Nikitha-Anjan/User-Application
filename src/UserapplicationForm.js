import React from 'react'
import axios from './config/axios'
import './style.css'

class UserapplicationForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email:'',
            phone:'',
            jobTitle:'',
            experience:'',
            skills:''
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            jobTitle: this.state.jobTitle,
            experience: this.state.experience,
            skills: this.state.skills
        }

        axios.post('/users/application-form', formData)
            .then((response) => {
                console.log('resolve',response.data)  
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    alert('Your application has been submitted')
                    this.setState({
                        name:'',
                        email:'',
                        phone:'',
                        jobTitle:'',
                        experience:'',
                        skills:''
                    })
                }
            })
            .catch((err) => {
                alert('reject',err)
            })

        
        }

    render() {
        return (
            <div className="page" >
                <h2>Apply for Job</h2>
                <form onSubmit  = {this.handleSubmit} className="form">
                    <label htmlFor="name">Full Name</label>
                    <input 
                        type="text" 
                        name="name"
                        id = "name"
                        className='input'
                        value={this.state.name} 
                        onChange={this.handleChange} 
                    /> <br />

                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="text" 
                        name="email"
                        id ="email"
                        className='input'
                        placeholder="example@email.com"
                        value={this.state.email} 
                        onChange={this.handleChange} 
                    /> <br />

                    <label htmlFor="phone">Contact Number</label>
                    <input 
                        type="number" 
                        name="phone"
                        id = "phone"
                        className='input'
                        placeholder="+91 9988554344"
                        value={this.state.phone} 
                        onChange={this.handleChange} 
                    /> <br />
                                        
                    <label htmlFor="jobTitle">Applying for Job</label>
                    <select value={this.state.jobTitle} className='input' name="jobTitle" id="jobTitle" onChange ={this.handleChange} >
                        <option value="">----Select----</option>
                        <option value="Front-End Developer">Front-End Developer</option>
                        <option value="Node.js Developer">Node.js Developer</option>
                        <option value="MEAN Stack Developer">MEAN Stack Developer</option>
                        <option value="FULL Stack Developer">FULL Stack Developer</option>
                    </select>
                    <br /> 
                    <label htmlFor="experience">Experience</label>
                    <input 
                        type="text" 
                        name="experience"
                        id="experience"
                        className='input' 
                        placeholder="Experience(2 years, 3 months)" 
                        value={this.state.experience} 
                        onChange = {this.handleChange} 
                    /> <br />

                    <label htmlFor="skills">Technical Skills</label>
                    <textarea
                        name="skills"
                        id="skills"
                        className='input'
                        placeholder="Technical Skills"
                        value={this.state.skills} 
                        onChange = {this.handleChange} 
                    /> <br />
                    <input type="submit" className="submit" value="Send Application"/>
                </form>
            </div>
        )
    }
}

export default UserapplicationForm 