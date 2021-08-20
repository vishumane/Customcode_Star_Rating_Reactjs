
import React, {useState} from 'react';

const OtpGeneration = () => {
    
  const [OTP, setOTP] = useState('');

  const generateOTP = (length) => {
    const characters =
      '0123456789';
    const characterCount = characters.length;
    let OTPvalue = '';
    for (let i = 0; i < length; i++) {
      OTPvalue += characters[Math.floor(Math.random() * characterCount)];
    }
    setOTP(OTPvalue);
    return OTPvalue;
  };

  return (
    <view style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <button
        onClick={() => generateOTP(6)}
      >generate otp</button>
      <text>{OTP}</text>
    </view>
  );
};

export default OtpGeneration;