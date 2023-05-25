// components/LoginForm.js
import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                email: this.state.email, 
                password: this.state.password 
            })
        });

        const data = await response.json();
        console.log(data);
        if (response.ok) {
            // Redirect to the chat page
            console.log('login successful');
            this.props.history.push('/chat');
        } else {
            //Display error message
            console.log('login unsuccessful');
            console.error(data.error);
        }
    };

    render() {
        return (
            <div style={styles.container}>
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <h2 style={styles.title}>Login</h2>
                    <input
                        style={styles.input}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        style={styles.input}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button style={styles.button} type="submit">Log In</button>
                </form>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        padding: '30px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        background: '#fff', // white
        position: 'relative', // add this line
        top: '-10%', // adjust this value to shift the content up
    },
    title: {
        marginBottom: '20px',
        textAlign: 'center',
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    button: {
        padding: '10px',
        color: '#fff', // white
        background: '#228B22', // forest green
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default withRouter(LoginForm);