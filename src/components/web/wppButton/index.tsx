import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const WhatsAppButton: React.FC = () => {
  const openWhatsAppChat = () => {
    const phoneNumber = '5541992422449';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <Tooltip title="Chamar no whatsapp" placement="top-start">
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
        onClick={openWhatsAppChat}
      >
        <img
          src="/assets/wpp.png"
          alt="WhatsApp"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </Tooltip>
  );
};

export default WhatsAppButton;
