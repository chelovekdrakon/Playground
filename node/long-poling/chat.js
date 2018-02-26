const clients = [];

exports.subscribe = (req, res) => {
  console.log('subscribed');

  clients.push(res);
};

exports.publish = (message) => {
  console.log('publish ', message);

  clients.forEach( res => {
    res.end(message);
  });

  clients = [];
};
