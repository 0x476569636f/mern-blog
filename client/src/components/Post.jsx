const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://i.pinimg.com/736x/77/b3/77/77b377edf6ec6f334928558aed4cf51d.jpg"
          alt="Nangid"
        />
      </div>
      <div className="texts">
        <h2>Lorem ipsum dolor sit.</h2>
        <p className="info">
          <a className="author">Irvan Pramana</a>
          <time className="time">2023-12-26 16:35</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam
          modi quisquam cum sed unde non voluptatibus culpa dolor ratione!
        </p>
      </div>
    </div>
  );
};

export default Post;
