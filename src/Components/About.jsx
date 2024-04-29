const About = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="my-24 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <img
            className="rounded-2xl h-[40rem] w-[40rem] object-cover"
            src="https://images.pexels.com/photos/3544567/pexels-photo-3544567.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div>
          <div>
            <h2 className="text-4xl text-[#0A2D45] mb-6">Who We Are</h2>
          </div>
          <h3 className="text-2xl tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            dicta.
          </h3>
          <hr />
          <p className=" tracking-wider mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            natus unde iure quibusdam deleniti aperiam magni quis voluptatem
            repellat illum libero ut, incidunt, praesentium sint ea officia ipsa
            id officiis vitae aspernatur sequi cumque, est suscipit mollitia?
            Sunt placeat non maxime deserunt nobis, ratione eius fuga libero
            distinctio repellendus impedit.
          </p>

          <hr />
          <div>
            <h2 className="text-4xl text-[#0A2D45] mt-6 mb-6">
              Business Progress
            </h2>
          </div>
          <div className="space-y-2">
            <h3>Running Project:</h3>
            <progress
              className="progress progress-secondary w-full"
              value={35}
              max="100"
            ></progress>
            <h3>Complete Project:</h3>
            <progress
              className="progress progress-info w-full"
              value="90"
              max="100"
            ></progress>
            <h3>Negotiation Project:</h3>
            <progress
              className="progress progress-warning w-full"
              value="40"
              max="100"
            ></progress>
            <h3>Upcoming Project:</h3>
            <progress
              className="progress progress-info w-full"
              value="70"
              max="100"
            ></progress>
            <h3>Success Project:</h3>
            <progress
              className="progress progress-success w-full"
              value="95"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
