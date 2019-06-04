import React from 'react';
import './Content.css';
import Aux from '../../Aux'

class Content extends React.Component {
    state = {
        value:null
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
                    <p>Occaecat culpa deserunt sint duis id aliquip aliqua ullamco laborum ea. Laborum labore ullamco irure sit enim exercitation Lorem veniam. Sint anim eiusmod nostrud sunt aliquip aliqua consequat eu. Sit esse minim proident eu ea deserunt cupidatat et sunt tempor commodo.</p>
                </Aux>
            )
            this.props.verification();
        }
        else if ((Number(this.props.page)) === 3) {
            const CheckAnswer = () => {
                if (document.getElementById("SubmitBtn").value === "Hello") {
                    this.props.verification();
                }
            }
            MainContent = (
                <Aux>
                    <h2>Page 3</h2>
                    <p>This is an interactive page. Type "Hello" below to continue</p>
                    <input value={this.state.value} onChange={this.handleChange.bind(this)} id="SubmitBtn"></input>
                    <button class="SubmitBtn" onClick={CheckAnswer}>SUBMIT</button>
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