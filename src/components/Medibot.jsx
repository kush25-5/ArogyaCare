import React, { useState, useEffect, useRef } from 'react';

const HealthAssistant = () => {
  const [chat, setChat] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chat]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = { 
      text: inputValue.trim(), 
      id: chat.length, 
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChat(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        text: "I understand your concern. Let me help you with that. Based on what you've described, I'd recommend consulting with a healthcare professional for proper diagnosis.",
        id: chat.length + 1,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChat(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleButtonClick = (action) => {
    setInputValue(action);
  };

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      marginLeft: '20%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      {chat.length === 0 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '2rem'
        }}>
          <div style={{
            backgroundColor: '#c7dbee',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#666">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V7H5V3H13V9H21Z"/>
            </svg>
          </div>
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#333',
            marginBottom: '1rem',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            Welcome to Your Health Assistant
          </h2>
          
          <p style={{
            fontSize: '0.95rem',
            color: '#666',
            maxWidth: '400px',
            lineHeight: '1.5',
            marginBottom: '3rem'
          }}>
            I'm here to help with your health questions, symptoms, and medical guidance. How can I assist you today?
          </p>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}>
            {[
              { icon: '🩺', text: 'Describe Symptoms', action: 'I have symptoms: ' },
              { icon: '💊', text: 'Ask About Dosage', action: 'What is the dosage for ' }
            ].map((btn, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(btn.action)}
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #e9ecef',
                  borderRadius: '12px',
                  padding: '1.25rem 2rem',
                  color: '#495057',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  minWidth: '200px',
                  display: 'flex',
                  gap: '0.75rem',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#4a90e2';
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e9ecef';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }}
              >
                <span style={{ fontSize: '1.4rem' }}>{btn.icon}</span>
                {btn.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {chat.length > 0 && (
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '2rem',
          marginBottom: '100px',
          maxWidth: '800px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
          }}>
            {chat.map(({ text, id, sender, timestamp }) => (
              <div 
                key={id} 
                style={{
                  display: 'flex',
                  justifyContent: sender === 'user' ? 'flex-end' : 'flex-start',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{
                  backgroundColor: sender === 'user' ? '#4a90e2' : '#f1f3f4',
                  color: sender === 'user' ? 'white' : '#2c3e50',
                  borderRadius: '18px',
                  padding: '0.75rem 1.25rem',
                  maxWidth: '75%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  fontSize: '0.95rem',
                  lineHeight: '1.4'
                }}>
                  <div>{text}</div>
                  <div style={{
                    fontSize: '0.7rem',
                    opacity: 0.7,
                    marginTop: '0.25rem',
                    textAlign: 'right'
                  }}>
                    {timestamp}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  backgroundColor: '#f1f3f4',
                  borderRadius: '18px',
                  padding: '0.75rem 1.25rem',
                  color: '#6c757d',
                  fontSize: '0.9rem'
                }}>
                  AI is thinking...
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>
        </div>
      )}

      <div style={{
        position: 'fixed',
        bottom: 0,
        left: '280px',
        right: 0,
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e9ecef',
        padding: '1.25rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        zIndex: 1000,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
      }}>
        <input
          type="text"
          placeholder="Type your health question..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          style={{
            flex: 1,
            maxWidth: '600px',
            padding: '0.875rem 1.25rem',
            borderRadius: '25px',
            border: '2px solid #e9ecef',
            fontSize: '1rem',
            outline: 'none',
            color: '#495057',
            backgroundColor: '#f8f9fa',
            transition: 'border-color 0.2s ease'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#4a90e2';
            e.target.style.backgroundColor = '#ffffff';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e9ecef';
            e.target.style.backgroundColor = '#f8f9fa';
          }}
        />
        <button
          onClick={handleSend}
          style={{
            backgroundColor: '#4a90e2',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.1rem',
            boxShadow: '0 3px 12px rgba(74, 144, 226, 0.3)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#357abd';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#4a90e2';
            e.target.style.transform = 'scale(1)';
          }}
          aria-label="Send"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HealthAssistant;
