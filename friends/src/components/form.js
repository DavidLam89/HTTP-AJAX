import React from 'react';

class Form extends React.Component {

    state = {
        friend: {
            name: '',
            age: '',
            email: '',
        },
        active: false
    };

    componentDidUpdate(prevProps) {
        if (
            this.props.activeFriend &&
            prevProps.activeFriend !== this.props.activeFriend
        ) {
            this.setState({
                friend: {...this.props.activeFriend}, 
                active: true
            });
        }
    }

    changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        if (ev.target.name === 'age') {
            value = parseInt(value, 10);
        }

        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [ev.target.name]: value
            }
        }));
    };

    handleSubmit = e => {
        console.log(this.state.friend);
        e.preventDefault();
        if (this.state.active) {
            this.props.updateFriend(e, this.state.friend);
        } else {
            this.props.addFriend(e, this.state.friend);
        }
        this.setState({
            friend: {
                name: '',
                age: '',
                email: '',
            },
            active: false
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        onChange={this.changeHandler}
                        placeholder="Name"
                        value={this.state.friend.name}
                    />
                    <div className="baseline" />

                    <input
                        name="age"
                        onChange={this.changeHandler}
                        placeholder="Age"
                        value={this.state.friend.age}
                    />
                    <div className="baseline" />

                    <input
                        name="email"
                        onChange={this.changeHandler}
                        placeholder="Email"
                        value={this.state.friend.email}
                    />
                    <div className="baseline" />

                    <button className="md-button form-button">{`${
            this.state.active ? 'Update' : 'Add New'} Friend`}</button>
                </form>
            </div>
        );
    }
}

export default Form;