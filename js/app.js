var my_news = [
  {
    author: 'Alex Barchuk',
    text: 'Hi, text bla bla, test'
  },
  {
    author: 'Dmitriy Barchuk',
    text: 'I just learn ReactJS'
  },
  {
    author: 'Гость',
    text: 'Reclama, tyta, translit aaaaaaa'
  },
  {
    author: 'Alex Barchuk',
    text: 'Hi, text bla bla, test'
  },
  {
    author: 'Dmitriy Barchuk',
    text: 'I just learn ReactJS'
  },
  {
    author: 'Гость',
    text: 'Reclama, tyta, translit aaaaaaa'
  }
];

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
    var data = this.props.data;
    var newsTemplate;

    if (data.length > 0) {
    newsTemplate = data.map(function(item, index) {
    return (
      <div key={index}>
        <p className="news_author">{item.author}:</p>
        <p className="news_text">{item.text}</p>
      </div>
    )
  })
} else {
  newsTemplate = <p>К сожалению новостей нет </p>
}

    return (
      <div className="news">
        {newsTemplate}
        <strong className={data.length > 0 ? '':'none'}>Всего новостей: {data.length}</strong>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Hi all, i am a React component!!!
        <News data={my_news} /> {/* Добавление свойства (data - название не имеет значния)*/}
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
