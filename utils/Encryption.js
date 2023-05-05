import CryptoJS from 'crypto-js';
import generateString from './generate';
// import AesUtil from 'aes-js'; 

function encryptPasswordField(passwordFieldId) {

  const iv = CryptoJS.lib.WordArray.random(
    document.querySelector("meta[name='_ks']").getAttribute('content') / 8
  ).toString(CryptoJS.enc.Hex);
  document.querySelector("meta[name='pwd_iv']").setAttribute('content',iv);

  const salt = CryptoJS.lib.WordArray.random(
    document.querySelector("meta[name='_ks']").getAttribute('content') / 8
  ).toString(CryptoJS.enc.Hex);
  document.querySelector("meta[name='pwd_salt']").setAttribute('content',salt);

  const ek = generateString();
  document.querySelector("meta[name='_ek']").setAttribute('content',ek);
  // const aesUtil = new AesUtil(
  //   document.querySelector("meta[name='_ks']").getAttribute('content'),
  //   document.querySelector("meta[name='_ic']").getAttribute('content')
  // );
  // document.querySelector(".salt").value = salt;
  // document.querySelector(".iv").value = iv;
  const userEncryptPassword = CryptoJS.AES.encrypt(
    salt,
    iv,
    ek
  );

  return userEncryptPassword.toString();
}

export default encryptPasswordField;
