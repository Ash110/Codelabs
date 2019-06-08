import React from 'react';
import './Content.css';
import Aux from '../../Aux'

class Content extends React.Component {
    state = {
        value: null
    }
    handleChange(e) {
        this.setState({ value: e.target.value })
    }
    render() {
        let MainContent;
        if (Number(this.props.page) === 1) {
            MainContent = (
                <Aux>
                    <h1>Main Header</h1>
                    <p>Hello there, this is some sample text to be shown.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p>
                    <p>Ipsum fugiat enim consequat culpa quis. Ea magna minim dolore consequat ipsum esse minim duis anim do voluptate Lorem dolore ipsum. Sit eiusmod cupidatat consequat nulla. Sit amet non consectetur laborum mollit id id eu incididunt Lorem qui sit commodo quis. Do ut quis nisi nostrud exercitation qui voluptate ea quis culpa pariatur. Incididunt reprehenderit velit labore ex quis.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p>
                    <p>Ipsum fugiat enim consequat culpa quis. Ea magna minim dolore consequat ipsum esse minim duis anim do voluptate Lorem dolore ipsum. Sit eiusmod cupidatat consequat nulla. Sit amet non consectetur laborum mollit id id eu incididunt Lorem qui sit commodo quis. Do ut quis nisi nostrud exercitation qui voluptate ea quis culpa pariatur. Incididunt reprehenderit velit labore ex quis.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p><p>Ipsum fugiat enim consequat culpa quis. Ea magna minim dolore consequat ipsum esse minim duis anim do voluptate Lorem dolore ipsum. Sit eiusmod cupidatat consequat nulla. Sit amet non consectetur laborum mollit id id eu incididunt Lorem qui sit commodo quis. Do ut quis nisi nostrud exercitation qui voluptate ea quis culpa pariatur. Incididunt reprehenderit velit labore ex quis.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p><p>Ipsum fugiat enim consequat culpa quis. Ea magna minim dolore consequat ipsum esse minim duis anim do voluptate Lorem dolore ipsum. Sit eiusmod cupidatat consequat nulla. Sit amet non consectetur laborum mollit id id eu incididunt Lorem qui sit commodo quis. Do ut quis nisi nostrud exercitation qui voluptate ea quis culpa pariatur. Incididunt reprehenderit velit labore ex quis.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p><p>Ipsum fugiat enim consequat culpa quis. Ea magna minim dolore consequat ipsum esse minim duis anim do voluptate Lorem dolore ipsum. Sit eiusmod cupidatat consequat nulla. Sit amet non consectetur laborum mollit id id eu incididunt Lorem qui sit commodo quis. Do ut quis nisi nostrud exercitation qui voluptate ea quis culpa pariatur. Incididunt reprehenderit velit labore ex quis.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p><p>Ipsum fugiat enim consequat culpa quis. Ea magna minim dolore consequat ipsum esse minim duis anim do voluptate Lorem dolore ipsum. Sit eiusmod cupidatat consequat nulla. Sit amet non consectetur laborum mollit id id eu incididunt Lorem qui sit commodo quis. Do ut quis nisi nostrud exercitation qui voluptate ea quis culpa pariatur. Incididunt reprehenderit velit labore ex quis.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p><p>Ipsum fugiat enim consequat culpa quis. Ea magna minim dolore consequat ipsum esse minim duis anim do voluptate Lorem dolore ipsum. Sit eiusmod cupidatat consequat nulla. Sit amet non consectetur laborum mollit id id eu incididunt Lorem qui sit commodo quis. Do ut quis nisi nostrud exercitation qui voluptate ea quis culpa pariatur. Incididunt reprehenderit velit labore ex quis.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p><p>Ipsum fugiat enim consequat culpa quis. Ea magna minim dolore consequat ipsum esse minim duis anim do voluptate Lorem dolore ipsum. Sit eiusmod cupidatat consequat nulla. Sit amet non consectetur laborum mollit id id eu incididunt Lorem qui sit commodo quis. Do ut quis nisi nostrud exercitation qui voluptate ea quis culpa pariatur. Incididunt reprehenderit velit labore ex quis.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p><p>Ipsum fugiat enim consequat culpa quis. Ea magna minim dolore consequat ipsum esse minim duis anim do voluptate Lorem dolore ipsum. Sit eiusmod cupidatat consequat nulla. Sit amet non consectetur laborum mollit id id eu incididunt Lorem qui sit commodo quis. Do ut quis nisi nostrud exercitation qui voluptate ea quis culpa pariatur. Incididunt reprehenderit velit labore ex quis.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p><p>Ipsum fugiat enim consequat culpa quis. Ea magna minim dolore consequat ipsum esse minim duis anim do voluptate Lorem dolore ipsum. Sit eiusmod cupidatat consequat nulla. Sit amet non consectetur laborum mollit id id eu incididunt Lorem qui sit commodo quis. Do ut quis nisi nostrud exercitation qui voluptate ea quis culpa pariatur. Incididunt reprehenderit velit labore ex quis.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p>
                </Aux>
            )
            this.props.verification();
        } else if ((Number(this.props.page)) === 2) {
            MainContent = (
                <Aux>
                    <h2>Page 2</h2>
                    <p>Ipsum fugiat enim consequat culpa quis. Ea magna minim dolore consequat ipsum esse minim duis anim do voluptate Lorem dolore ipsum. Sit eiusmod cupidatat consequat nulla. Sit amet non consectetur laborum mollit id id eu incididunt Lorem qui sit commodo quis. Do ut quis nisi nostrud exercitation qui voluptate ea quis culpa pariatur. Incididunt reprehenderit velit labore ex quis.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p> <p>Ipsum fugiat enim consequat culpa quis. Ea magna minim dolore consequat ipsum esse minim duis anim do voluptate Lorem dolore ipsum. Sit eiusmod cupidatat consequat nulla. Sit amet non consectetur laborum mollit id id eu incididunt Lorem qui sit commodo quis. Do ut quis nisi nostrud exercitation qui voluptate ea quis culpa pariatur. Incididunt reprehenderit velit labore ex quis.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p> <p>Ipsum fugiat enim consequat culpa quis. Ea magna minim dolore consequat ipsum esse minim duis anim do voluptate Lorem dolore ipsum. Sit eiusmod cupidatat consequat nulla. Sit amet non consectetur laborum mollit id id eu incididunt Lorem qui sit commodo quis. Do ut quis nisi nostrud exercitation qui voluptate ea quis culpa pariatur. Incididunt reprehenderit velit labore ex quis.</p>
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p><br />
                    <img src="https://images.pexels.com/photos/2421610/pexels-photo-2421610.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="placeholder" style={{ width: "80%", marginLeft: "10%" }} />
                </Aux>
            )
            this.props.verification();
        }
        else if ((Number(this.props.page)) === 3) {
            const CheckAnswer = () => {
                if (document.getElementById("UserCode").value === "Hello") {
                    this.props.verification();
                }
            }
            MainContent = (
                <Aux>
                    <h2>Page 3</h2>
                    <p>This is an interactive page. Type "Hello" below to continue</p>
                    <div className="input-field">
                        <input value={this.state.value} onChange={this.handleChange.bind(this)} type="text" id="UserCode"></input><br /><br />
                        <label for="UserCode">Enter your code here</label>
                    </div>
                    <button class="SubmitBtn btn" style={{ borderStyle: "none", boxShadow: "0 2px 2px grey" }} onClick={CheckAnswer}>SUBMIT</button>
                </Aux>
            )
        }
        else if ((Number(this.props.page)) === 4) {
            MainContent = (
                <Aux>
                    <h2>Page 4</h2>
                    <h3>This is the last page. Go back.</h3>
                </Aux>
            )
        }
        return (
            <div className="ContentBody">
                {MainContent}
            </div>
        )
    }
}

export default Content;