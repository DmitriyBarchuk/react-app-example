var Same = React.createClass({
  render: function() {
    return (
      <div className="same">
        Same text
      </div>
    );
  }
});

var Comments = React.createClass({
  render: function() {
    return (
      <div className="comments">
        No news - nothing to comment.
      </div>
    );
  }
});

var News = React.createClass({
  render: function() {
    return (
      <div className="news">
        No News!
        <Comments />
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Hi all, i am a React component!!!
        <News />
        <Same />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
