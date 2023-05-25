import React from 'react';
import { withRouter } from 'react-router-dom';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        // Register API request
        fetch('http://localhost:5000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the response here
            console.log(data);

            // If the API responds with a token, store it for later use
            // This assumes the response is an object with a 'token' field
            if (data.token) {
                localStorage.setItem('token', data.token);
            }

            // Redirect the user to the chat page
            this.props.history.push('/chat');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    render() {
        return (
            <div style={styles.container}>
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <h2 style={styles.title}>Register</h2>
                    <input
                        style={styles.input}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
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
                    <button style={styles.button} type="submit">Register</button>
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
        width: '400px', // increase form width
        padding: '40px', // increase padding
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

export default withRouter(RegisterForm);