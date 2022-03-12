const Registration = require('../models/registration');

exports.getRegistration = (req, res, next) => {
    Registration.findAll()
     .then(registrants => {
       /* no data in database */
       if(registrants.length === 0) {
         res.json({"check": "false"});
       }
       /* data in database */
       else {
         res.json({
           "check": "true",
           "registeredData": registrants
        });
       }
     })
     .catch(err => console.log(err));
};

exports.postRegistration = (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;

    Registration.create({
        username: username,
        email: email
    })
     .then(result => {
         console.log('create registration: CHECK');
         res.json({
           "check": "true",
           "newRegistrant": {"username": username, "email": email}
        });
     })
     .catch(err => console.log(err));
};

exports.deleteRegistration = (req, res, next) => {
  const id = req.body.id;
  console.log(id, req.body, 'cool!!!');
  Registration.findByPk(id)
  .then(registrant => registrant.destroy())
  .then(result => {
    console.log('registrant destroy: CHECK');
    res.json({
      "check": "true"
    });
  })
  .catch(err => console.log(err));
};
