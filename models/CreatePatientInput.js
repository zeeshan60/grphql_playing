// {
//     "device": {
//     "locale": "en-US",
//         "deviceId": "285bad19db66cfb90737e457b97713ad",
//         "manufacturer": "samsung",
//         "os": "ANDROID",
//         "osVersion": "8.0.0",
//         "model": "SM-G955F",
//         "brand": "samsung"
// },
//     "marketingOptOut": false,
//     "password": "qwerty",
//     "patient": {
//     "email": "ti10112@gmail.com",
//         "hasMenstruation": null,
//         "clientId": null,
//         "firstName": null,
//         "birthDate": null,
//         "intenseMigrainePainThreshold": 5,
//         "lastName": null,
//         "marketingOptOut": false,
//         "phone": null,
//         "researchOptOut": false,
//         "signupDate": null,
//         "emailVerified": false,
//         "objective": null,
//         "syncState": "NEW",
//         "gdprConsent": false,
//         "hideProfile": true,
//         "female": null,
//         "lastModifiedTime": 1550038600958,
//         "serverId": 0
// },
//     "appId": "migraine-android",
//     "accessCode": null,
//     "accessToken": null
// }

class CreatePatientInput {
  device;
  marketingOptOut;
  password;
  patient;
  appId;
  accessCode;
  accessToken;

  constructor(device, password, patient, appId) {
    this.device = device;
    this.password = password;
    this.patient = patient;
    this.appId = appId;
  }
}

class Device {
  locale;
  deviceId;
  manufacturer;
  os;
  osVersion;
  model;
  brand;

  constructor(locale, deviceId, manufacturer, os, osVersion, model, brand) {
    this.locale = locale;
    this.deviceId = deviceId;
    this.manufacturer = manufacturer;
    this.os = os;
    this.osVersion = osVersion;
    this.model = model;
    this.brand = brand;
  }
}

class Patient {
  email;
  hasMenstruation;
  clientId;
  firstName;
  birthDate;
  intenseMigrainePainThreshold;
  lastName;
  marketingOptOut;
  phone;
  researchOptOut;
  signupDate;
  emailVerified;
  objective;
  syncState;
  gdprConsent;
  hideProfile;
  female;
  lastModifiedTime;
  serverId;

  constructor(
    email,
    hasMenstruation,
    clientId,
    firstName,
    birthDate,
    intenseMigrainePainThreshold,
    lastName,
    marketingOptOut,
    phone,
    researchOptOut,
    signupDate,
    emailVerified,
    objective,
    syncState,
    gdprConsent,
    hideProfile,
    female,
    lastModifiedTime,
    serverId
  ) {
    this.email = email;
    this.hasMenstruation = hasMenstruation;
    this.clientId = clientId;
    this.firstName = firstName;
    this.birthDate = birthDate;
    this.intenseMigrainePainThreshold = intenseMigrainePainThreshold;
    this.lastName = lastName;
    this.marketingOptOut = marketingOptOut;
    this.phone = phone;
    this.researchOptOut = researchOptOut;
    this.signupDate = signupDate;
    this.emailVerified = emailVerified;
    this.objective = objective;
    this.syncState = syncState;
    this.gdprConsent = gdprConsent;
    this.hideProfile = hideProfile;
    this.female = female;
    this.lastModifiedTime = lastModifiedTime;
    this.serverId = serverId;
  }
}

module.exports = {CreatePatientInput, Patient, Device}
