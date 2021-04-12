import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";

function Main() {
  return (
    <Fragment>
      <AddressLabel person={person} />
      <hr />
      <Envelope toPerson={toPerson} fromPerson={fromPerson} />
      <hr />
      <CreditCard cardInfo={cardInfo} />
      <hr />
      <Poster posterInfo={poster1} />
      <hr />
      <Poster posterInfo={poster2} />
      <hr />
      <Poster posterInfo={poster3} />
      <hr />
      <div className="exercise5">
        <EmailEntry email={email} />
      </div>
    </Fragment>
  );
}

// EXCERCISE 1

function AddressLabel({ person: { name, address, city, state, zipCode } }) {
  return (
    <div className="address-label">
      <p>{name}</p>
      <p>{address}</p>
      <p>
        {city}, {state} {zipCode}
      </p>
    </div>
  );
}
AddressLabel.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
  }).isRequired,
};

// EXCERCISE 2

function Envelope({ toPerson, fromPerson }) {
  return (
    <div className="envelope">
      <div className="row1">
        <AddressLabel person={fromPerson} />
        <Stamp />
      </div>
      <div className="row2">
        <AddressLabel person={toPerson} />
      </div>
    </div>
  );
}

function Stamp() {
  return (
    <div className="stamp">
      <p>STAMP</p>
    </div>
  );
}

// EXCERCISE 3

function CreditCard({ cardInfo }) {
  const { personName, expirationDate, creditCardNumber, bankName } = cardInfo;

  return (
    <div className="credit-card">
      <div className="bank-name">{bankName}</div>
      <div className="card-number">
        <CardNumber creditCardNumber={creditCardNumber} />
      </div>
      <div className="row3">
        <div className="cvv">1234</div>
        <div className="expiration-box">
          <div className="valid-text">VALID THRU</div>
          <div className="expiration">{expirationDate}</div>
        </div>
      </div>
      <div className="card-holder">{personName}</div>
    </div>
  );
}

function CardNumber({ creditCardNumber }) {
  let blockDigits = [];
  let parcialDigits;

  parcialDigits = extractSubString(creditCardNumber, 0, 4);
  blockDigits.push(parcialDigits);
  parcialDigits = extractSubString(creditCardNumber, 4, 4);
  blockDigits.push(parcialDigits);
  parcialDigits = extractSubString(creditCardNumber, 8, 4);
  blockDigits.push(parcialDigits);
  parcialDigits = extractSubString(creditCardNumber, 12, 4);
  blockDigits.push(parcialDigits);

  return (
    <Fragment>
      <div className="digits">{blockDigits[0]}</div>
      <div className="digits">{blockDigits[1]}</div>
      <div className="digits">{blockDigits[2]}</div>
      <div className="digits">{blockDigits[3]}</div>
    </Fragment>
  );
}

const extractSubString = (number, start, quantity) =>
  number.toString().substring(start, start + quantity);

CreditCard.propTypes = {
  cardInfo: PropTypes.shape({
    personName: PropTypes.string.isRequired,
    expirationDate: PropTypes.string.isRequired,
    creditCardNumber: PropTypes.number.isRequired,
    bankName: PropTypes.string.isRequired,
  }).isRequired,
};

// EXCERCISE 4

function Poster({ posterInfo: { image, title, text } }) {
  return (
    <div className="poster">
      <div className="image-container">
        <img src={image} alt="poster" />
      </div>
      <Title title={title} />
      <div className="poster-text">{text}</div>
    </div>
  );
}

Poster.propTypes = {
  posterInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

function Title({ title }) {
  const firstLetter = getFirstLetter(title);
  const lastLetter = getLastLetter(title);
  const middleText = getMiddleText(title);

  return (
    <div className="poster-title">
      <span className="bigger-letter">{firstLetter}</span>
      <span className="middle-text">{middleText}</span>
      <span className="bigger-letter">{lastLetter}</span>
    </div>
  );
}

const getFirstLetter = (str) => str.substring(0, 1);
const getLastLetter = (str) => str.substring(str.length - 1);
const getMiddleText = (str) => {
  let middle = str.substring(1);
  middle = middle.substring(0, middle.length - 1);
  return middle;
};

// EXCERCISE 5

function EmailEntry({ email: { sender, subject, message, date } }) {
  return (
    <div className="email-entry">
      <div className="actions-icon">
        <img src="./square.svg" alt="checkbox" />
        <img src="./pin.svg" alt="pin" />
      </div>
      <div className="info-container">
        <div className="row-1">
          <div className="info-item">{sender}</div>
          <div className="info-item fb-center">{subject}</div>
          <div className="info-item">{date}</div>
        </div>
        <div className="row-2">
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
}
EmailEntry.propTypes = {
  email: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
const person = {
  name: "Sebastian Arg",
  address: "Av Colon 123",
  city: "Cordoba",
  state: "COR",
  zipCode: "5000",
};

const toPerson = {
  name: "Sebastian Arg",
  address: "Av Colon 123",
  city: "Cordoba",
  state: "COR",
  zipCode: "5000",
};

const fromPerson = {
  name: "Douglas Smith",
  address: "123 Fake St",
  city: "Brooklyn",
  state: "NY",
  zipCode: "012345",
};

const cardInfo = {
  personName: "Sebastian Arg",
  expirationDate: "08/25",
  creditCardNumber: 1234567887654321,
  bankName: "Big Bank, Inc",
};

const poster1 = {
  image: "https://reactjs.org/logo-og.png",
  title: "React",
  text: "The best thing since jQuery, probably.",
};

const poster2 = {
  image:
    "https://americancoinop.com/sites/default/files/styles/horiz-800x453/public/images/articles/main/626268864_keys_web.jpg",
  title: "Motivation",
  text:
    "Dont get discouraged. It is often the last key in the bounch that opens the lock.",
};

const poster3 = {
  image:
    "https://misanimales.com/wp-content/uploads/2018/03/diferencias-entre-avestruz-y-n%CC%83andu.jpg",
  title: "Sky is the limit",
  text: "Too bad that you can't fly.",
};

const email = {
  sender: "React Newsletter",
  subject: "React Newsletter - Issue 36",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sem vitae mauris sollicitudin vestibulum. Suspendisse porttitor, lorem id iaculis.",
  date: "2021-05-03",
};

ReactDOM.render(<Main />, document.querySelector("#root"));
