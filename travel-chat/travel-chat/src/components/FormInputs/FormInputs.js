export const usernameField = {
  name: "nickname",
  type: "text",
  placeholder: "Username",
  errorMessage:
    "Username should be 3-16 characters and shouldn't include any special character!",
  label: "Username",
  pattern: "^[A-Za-z0-9]{3,16}$",
  required: true,
};

export const first_nameField = {
  name: "first_name",
  type: "text",
  placeholder: "name",
  errorMessage:
    "First_name should be 3-16 characters and shouldn't include any special character!",
  label: "first_name",
  pattern: "^[A-Za-z0-9]{3,16}$",
  required: true,
};

export const surnameField = {
  name: "last_name",
  type: "text",
  placeholder: "Surname",
  errorMessage:
    "Username should be 3-16 characters and shouldn't include any special character!",
  label: "Username",
  pattern: "^[A-Za-z0-9]{3,16}$",
  required: true,
};

export const emailField = {
  name: "email",
  type: "email",
  placeholder: "Email",
  errorMessage: "It should be a valid email address!",
  label: "Email",
  pattern: "@[^\\s@]+",
  required: true,
};

export const passwordField = {
  name: "password",
  type: "password",
  placeholder: "Password",
  errorMessage:
    "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
  label: "Password",
  pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{8,20}$`,
  required: true,
};

export const birthdayField = {
  name: "birthday",
  type: "date",
  placeholder: "Birthday",
  label: "Birthday",
};

export const countryList = [
  {
    country: "Afghanistan",
    flag: "🇦🇫",
  },
  {
    country: "Albania",
    flag: "🇦🇱",
  },
  {
    country: "Algeria",
    flag: "🇩🇿",
  },
  {
    country: "American Samoa",
    flag: "🇦🇸",
  },
  {
    country: "Andorra",
    flag: "🇦🇩",
  },
  {
    country: "Angola",
    flag: "🇦🇴",
  },
  {
    country: "Anguilla",
    flag: "🇦🇮",
  },
  {
    country: "Antarctica",
    flag: "🇦🇶",
  },
  {
    country: "Antigua and Barbuda",
    flag: "🇦🇬",
  },
  {
    country: "Argentina",
    flag: "🇦🇷",
  },
  {
    country: "Armenia",
    flag: "🇦🇲",
  },
  {
    country: "Aruba",
    flag: "🇦🇼",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
  },
  {
    country: "Austria",
    flag: "🇦🇹",
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
  },
  {
    country: "Bahamas (the)",
    flag: "🇧🇸",
  },
  {
    country: "Bahrain",
    flag: "🇧🇭",
  },
  {
    country: "Bangladesh",
    flag: "🇧🇩",
  },
  {
    country: "Barbados",
    flag: "🇧🇧",
  },
  {
    country: "Belarus",
    flag: "🇧🇾",
  },
  {
    country: "Belgium",
    flag: "🇧🇪",
  },
  {
    country: "Belize",
    flag: "🇧🇿",
  },
  {
    country: "Benin",
    flag: "🇧🇯",
  },
  {
    country: "Bermuda",
    flag: "🇧🇲",
  },
  {
    country: "Bhutan",
    flag: "🇧🇹",
  },
  {
    country: "Bolivia (Plurinational State of)",
    flag: "🇧🇴",
  },
  {
    country: "Bonaire, Sint Eustatius and Saba",
    flag: "🇧🇶",
  },
  {
    country: "Bosnia and Herzegovina",
    flag: "🇧🇦",
  },
  {
    country: "Botswana",
    flag: "🇧🇼",
  },
  {
    country: "Bouvet Island",
    flag: "🇧🇻",
  },
  {
    country: "Brazil",
    flag: "🇧🇷",
  },
  {
    country: "British Indian Ocean Territory (the)",
    flag: "🇮🇴",
  },
  {
    country: "Brunei Darussalam",
    flag: "🇧🇳",
  },
  {
    country: "Bulgaria",
    flag: "🇧🇬",
  },
  {
    country: "Burkina Faso",
    flag: "🇧🇫",
  },
  {
    country: "Burundi",
    flag: "🇧🇮",
  },
  {
    country: "Cabo Verde",
    flag: "🇨🇻",
  },
  {
    country: "Cambodia",
    flag: "🇰🇭",
  },
  {
    country: "Cameroon",
    flag: "🇨🇲",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
  },
  {
    country: "Cayman Islands (the)",
    flag: "🇰🇾",
  },
  {
    country: "Central African Republic (the)",
    flag: "🇨🇫",
  },
  {
    country: "Chad",
    flag: "🇹🇩",
  },
  {
    country: "Chile",
    flag: "🇨🇱",
  },
  {
    country: "China",
    flag: "🇨🇳",
  },
  {
    country: "Christmas Island",
    flag: "🇨🇽",
  },
  {
    country: "Cocos (Keeling) Islands (the)",
    flag: "🇨🇨",
  },
  {
    country: "Colombia",
    flag: "🇨🇴",
  },
  {
    country: "Comoros (the)",
    flag: "🇰🇲",
  },
  {
    country: "Congo (the Democratic Republic of the)",
    flag: "🇨🇩",
  },
  {
    country: "Congo (the)",
    flag: "🇨🇬",
  },
  {
    country: "Cook Islands (the)",
    flag: "🇨🇰",
  },
  {
    country: "Costa Rica",
    flag: "🇨🇷",
  },
  {
    country: "Croatia",
    flag: "🇭🇷",
  },
  {
    country: "Cuba",
    flag: "🇨🇺",
  },
  {
    country: "Curaçao",
    flag: "🇨🇼",
  },
  {
    country: "Cyprus",
    flag: "🇨🇾",
  },
  {
    country: "Czechia",
    flag: "🇨🇿",
  },
  {
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
  },
  {
    country: "Denmark",
    flag: "🇩🇰",
  },
  {
    country: "Djibouti",
    flag: "🇩🇯",
  },
  {
    country: "Dominica",
    flag: "🇩🇲",
  },
  {
    country: "Dominican Republic (the)",
    flag: "🇩🇴",
  },
  {
    country: "Ecuador",
    flag: "🇪🇨",
  },
  {
    country: "Egypt",
    flag: "🇪🇬",
  },
  {
    country: "El Salvador",
    flag: "🇸🇻",
  },
  {
    country: "Equatorial Guinea",
    flag: "🇬🇶",
  },
  {
    country: "Eritrea",
    flag: "🇪🇷",
  },
  {
    country: "Estonia",
    flag: "🇪🇪",
  },
  {
    country: "Eswatini",
    flag: "🇸🇿",
  },
  {
    country: "Ethiopia",
    flag: "🇪🇹",
  },
  {
    country: "Falkland Islands (the) [Malvinas]",
    flag: "🇫🇰",
  },
  {
    country: "Faroe Islands (the)",
    flag: "🇫🇴",
  },
  {
    country: "Fiji",
    flag: "🇫🇯",
  },
  {
    country: "Finland",
    flag: "🇫🇮",
  },
  {
    country: "France",
    flag: "🇫🇷",
  },
  {
    country: "French Guiana",
    flag: "🇬🇫",
  },
  {
    country: "French Polynesia",
    flag: "🇵🇫",
  },
  {
    country: "French Southern Territories (the)",
    flag: "🇹🇫",
  },
  {
    country: "Gabon",
    flag: "🇬🇦",
  },
  {
    country: "Gambia (the)",
    flag: "🇬🇲",
  },
  {
    country: "Georgia",
    flag: "🇬🇪",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
  },
  {
    country: "Ghana",
    flag: "🇬🇭",
  },
  {
    country: "Gibraltar",
    flag: "🇬🇮",
  },
  {
    country: "Greece",
    flag: "🇬🇷",
  },
  {
    country: "Greenland",
    flag: "🇬🇱",
  },
  {
    country: "Grenada",
    flag: "🇬🇩",
  },
  {
    country: "Guadeloupe",
    flag: "🇬🇵",
  },
  {
    country: "Guam",
    flag: "🇬🇺",
  },
  {
    country: "Guatemala",
    flag: "🇬🇹",
  },
  {
    country: "Guernsey",
    flag: "🇬🇬",
  },
  {
    country: "Guinea",
    flag: "🇬🇳",
  },
  {
    country: "Guinea-Bissau",
    flag: "🇬🇼",
  },
  {
    country: "Guyana",
    flag: "🇬🇾",
  },
  {
    country: "Haiti",
    flag: "🇭🇹",
  },
  {
    country: "Heard Island and McDonald Islands",
    flag: "🇭🇲",
  },
  {
    country: "Holy See (the)",
    flag: "🇻🇦",
  },
  {
    country: "Honduras",
    flag: "🇭🇳",
  },
  {
    country: "Hong Kong",
    flag: "🇭🇰",
  },
  {
    country: "Hungary",
    flag: "🇭🇺",
  },
  {
    country: "Iceland",
    flag: "🇮🇸",
  },
  {
    country: "India",
    flag: "🇮🇳",
  },
  {
    country: "Indonesia",
    flag: "🇮🇩",
  },
  {
    country: "Iran (Islamic Republic of)",
    flag: "🇮🇷",
  },
  {
    country: "Iraq",
    flag: "🇮🇶",
  },
  {
    country: "Ireland",
    flag: "🇮🇪",
  },
  {
    country: "Isle of Man",
    flag: "🇮🇲",
  },
  {
    country: "Israel",
    flag: "🇮🇱",
  },
  {
    country: "Italy",
    flag: "🇮🇹",
  },
  {
    country: "Jamaica",
    flag: "🇯🇲",
  },
  {
    country: "Japan",
    flag: "🇯🇵",
  },
  {
    country: "Jersey",
    flag: "🇯🇪",
  },
  {
    country: "Jordan",
    flag: "🇯🇴",
  },
  {
    country: "Kazakhstan",
    flag: "🇰🇿",
  },
  {
    country: "Kenya",
    flag: "🇰🇪",
  },
  {
    country: "Kiribati",
    flag: "🇰🇮",
  },
  {
    country: "Korea (the Democratic People's Republic of)",
    flag: "🇰🇵",
  },
  {
    country: "Korea (the Republic of)",
    flag: "🇰🇷",
  },
  {
    country: "Kuwait",
    flag: "🇰🇼",
  },
  {
    country: "Kyrgyzstan",
    flag: "🇰🇬",
  },
  {
    country: "Lao People's Democratic Republic (the)",
    flag: "🇱🇦",
  },
  {
    country: "Latvia",
    flag: "🇱🇻",
  },
  {
    country: "Lebanon",
    flag: "🇱🇧",
  },
  {
    country: "Lesotho",
    flag: "🇱🇸",
  },
  {
    country: "Liberia",
    flag: "🇱🇷",
  },
  {
    country: "Libya",
    flag: "🇱🇾",
  },
  {
    country: "Liechtenstein",
    flag: "🇱🇮",
  },
  {
    country: "Lithuania",
    flag: "🇱🇹",
  },
  {
    country: "Luxembourg",
    flag: "🇱🇺",
  },
  {
    country: "Macao",
    flag: "🇲🇴",
  },
  {
    country: "Madagascar",
    flag: "🇲🇬",
  },
  {
    country: "Malawi",
    flag: "🇲🇼",
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
  },
  {
    country: "Maldives",
    flag: "🇲🇻",
  },
  {
    country: "Mali",
    flag: "🇲🇱",
  },
  {
    country: "Malta",
    flag: "🇲🇹",
  },
  {
    country: "Marshall Islands (the)",
    flag: "🇲🇭",
  },
  {
    country: "Martinique",
    flag: "🇲🇶",
  },
  {
    country: "Mauritania",
    flag: "🇲🇷",
  },
  {
    country: "Mauritius",
    flag: "🇲🇺",
  },
  {
    country: "Mayotte",
    flag: "🇾🇹",
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
  },
  {
    country: "Micronesia (Federated States of)",
    flag: "🇫🇲",
  },
  {
    country: "Moldova (the Republic of)",
    flag: "🇲🇩",
  },
  {
    country: "Monaco",
    flag: "🇲🇨",
  },
  {
    country: "Mongolia",
    flag: "🇲🇳",
  },
  {
    country: "Montenegro",
    flag: "🇲🇪",
  },
  {
    country: "Montserrat",
    flag: "🇲🇸",
  },
  {
    country: "Morocco",
    flag: "🇲🇦",
  },
  {
    country: "Mozambique",
    flag: "🇲🇿",
  },
  {
    country: "Myanmar",
    flag: "🇲🇲",
  },
  {
    country: "Namibia",
    flag: "🇳🇦",
  },
  {
    country: "Nauru",
    flag: "🇳🇷",
  },
  {
    country: "Nepal",
    flag: "🇳🇵",
  },
  {
    country: "Netherlands (the)",
    flag: "🇳🇱",
  },
  {
    country: "New Caledonia",
    flag: "🇳🇨",
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
  },
  {
    country: "Nicaragua",
    flag: "🇳🇮",
  },
  {
    country: "Niger (the)",
    flag: "🇳🇪",
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
  },
  {
    country: "Niue",
    flag: "🇳🇺",
  },
  {
    country: "Norfolk Island",
    flag: "🇳🇫",
  },
  {
    country: "Northern Mariana Islands (the)",
    flag: "🇲🇵",
  },
  {
    country: "Norway",
    flag: "🇳🇴",
  },
  {
    country: "Oman",
    flag: "🇴🇲",
  },
  {
    country: "Pakistan",
    flag: "🇵🇰",
  },
  {
    country: "Palau",
    flag: "🇵🇼",
  },
  {
    country: "Palestine, State of",
    flag: "🇵🇸",
  },
  {
    country: "Panama",
    flag: "🇵🇦",
  },
  {
    country: "Papua New Guinea",
    flag: "🇵🇬",
  },
  {
    country: "Paraguay",
    flag: "🇵🇾",
  },
  {
    country: "Peru",
    flag: "🇵🇪",
  },
  {
    country: "Philippines (the)",
    flag: "🇵🇭",
  },
  {
    country: "Pitcairn",
    flag: "🇵🇳",
  },
  {
    country: "Poland",
    flag: "🇵🇱",
  },
  {
    country: "Portugal",
    flag: "🇵🇹",
  },
  {
    country: "Puerto Rico",
    flag: "🇵🇷",
  },
  {
    country: "Qatar",
    flag: "🇶🇦",
  },
  {
    country: "Republic of North Macedonia",
    flag: "🇲🇰",
  },
  {
    country: "Romania",
    flag: "🇷🇴",
  },
  {
    country: "Russian Federation (the)",
    flag: "🇷🇺",
  },
  {
    country: "Rwanda",
    flag: "🇷🇼",
  },
  {
    country: "Réunion",
    flag: "🇷🇪",
  },
  {
    country: "Saint Barthélemy",
    flag: "🇧🇱",
  },
  {
    country: "Saint Helena, Ascension and Tristan da Cunha",
    flag: "🇸🇭",
  },
  {
    country: "Saint Kitts and Nevis",
    flag: "🇰🇳",
  },
  {
    country: "Saint Lucia",
    flag: "🇱🇨",
  },
  {
    country: "Saint Martin (French part)",
    flag: "🇲🇫",
  },
  {
    country: "Saint Pierre and Miquelon",
    flag: "🇵🇲",
  },
  {
    country: "Saint Vincent and the Grenadines",
    flag: "🇻🇨",
  },
  {
    country: "Samoa",
    flag: "🇼🇸",
  },
  {
    country: "San Marino",
    flag: "🇸🇲",
  },
  {
    country: "Sao Tome and Principe",
    flag: "🇸🇹",
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    country: "Senegal",
    flag: "🇸🇳",
  },
  {
    country: "Serbia",
    flag: "🇷🇸",
  },
  {
    country: "Seychelles",
    flag: "🇸🇨",
  },
  {
    country: "Sierra Leone",
    flag: "🇸🇱",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
  },
  {
    country: "Sint Maarten (Dutch part)",
    flag: "🇸🇽",
  },
  {
    country: "Slovakia",
    flag: "🇸🇰",
  },
  {
    country: "Slovenia",
    flag: "🇸🇮",
  },
  {
    country: "Solomon Islands",
    flag: "🇸🇧",
  },
  {
    country: "Somalia",
    flag: "🇸🇴",
  },
  {
    country: "South Africa",
    flag: "🇿🇦",
  },
  {
    country: "South Georgia and the South Sandwich Islands",
    flag: "🇬🇸",
  },
  {
    country: "South Sudan",
    flag: "🇸🇸",
  },
  {
    country: "Spain",
    flag: "🇪🇸",
  },
  {
    country: "Sri Lanka",
    flag: "🇱🇰",
  },
  {
    country: "Sudan (the)",
    flag: "🇸🇩",
  },
  {
    country: "Suriname",
    flag: "🇸🇷",
  },
  {
    country: "Svalbard and Jan Mayen",
    flag: "🇸🇯",
  },
  {
    country: "Sweden",
    flag: "🇸🇪",
  },
  {
    country: "Switzerland",
    flag: "🇨🇭",
  },
  {
    country: "Syrian Arab Republic",
    flag: "🇸🇾",
  },
  {
    country: "Taiwan",
    flag: "🇹🇼",
  },
  {
    country: "Tajikistan",
    flag: "🇹🇯",
  },
  {
    country: "Tanzania, United Republic of",
    flag: "🇹🇿",
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
  },
  {
    country: "Timor-Leste",
    flag: "🇹🇱",
  },
  {
    country: "Togo",
    flag: "🇹🇬",
  },
  {
    country: "Tokelau",
    flag: "🇹🇰",
  },
  {
    country: "Tonga",
    flag: "🇹🇴",
  },
  {
    country: "Trinidad and Tobago",
    flag: "🇹🇹",
  },
  {
    country: "Tunisia",
    flag: "🇹🇳",
  },
  {
    country: "Turkey",
    flag: "🇹🇷",
  },
  {
    country: "Turkmenistan",
    flag: "🇹🇲",
  },
  {
    country: "Turks and Caicos Islands (the)",
    flag: "🇹🇨",
  },
  {
    country: "Tuvalu",
    flag: "🇹🇻",
  },
  {
    country: "Uganda",
    flag: "🇺🇬",
  },
  {
    country: "Ukraine",
    flag: "🇺🇦",
  },
  {
    country: "United Arab Emirates (the)",
    flag: "🇦🇪",
  },
  {
    country: "United Kingdom of Great Britain and Northern Ireland (the)",
    flag: "🇬🇧",
  },
  {
    country: "United States Minor Outlying Islands (the)",
    flag: "🇺🇸",
  },
  {
    country: "United States of America (the)",
    flag: "🇺🇸",
  },
  {
    country: "Uruguay",
    flag: "🇺🇾",
  },
  {
    country: "Uzbekistan",
    flag: "🇺🇿",
  },
  {
    country: "Vanuatu",
    flag: "🇻🇺",
  },
  {
    country: "Venezuela (Bolivarian Republic of)",
    flag: "🇻🇪",
  },
  {
    country: "Viet Nam",
    flag: "🇻🇳",
  },
  {
    country: "Virgin Islands (British)",
    flag: "🇻🇬",
  },
  {
    country: "Virgin Islands (U.S.)",
    flag: "🇻🇮",
  },
  {
    country: "Wallis and Futuna",
    flag: "🇼🇫",
  },
  {
    country: "Western Sahara",
    flag: "🇪🇭",
  },
  {
    country: "Yemen",
    flag: "🇾🇪",
  },
  {
    country: "Zambia",
    flag: "🇿🇲",
  },
  {
    country: "Zimbabwe",
    flag: "🇿🇼",
  },
  {
    country: "Åland Islands",
    flag: "🇦🇽",
  },
];

export const genders = ["Male", "Female", "Don't want to answer"];
