import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './bot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const questions = [
    { id: 1, text: "Hi! What's your name?", type: "text", key: "name" },
    { id: 2, text: "What's your email address?", type: "email", key: "email" },
    {
      id: 3,
      text: "How can we help you?",
      type: "select",
      key: "service",
      options: [
        "Defence of Medical Negligence claims",
        "Labor Law Compliance",
        "Due Diligence and valuation",
        "Design and construction of healthcare facilities",
        "Intellectual property protection",
        "Compliance Management",
        "Licenses & Renewals",
        "Accounting Services",
        "Healthcare startup advisory"
      ]
    },
  ];

  useEffect(() => {
    if (Object.keys(answers).length === questions.length) sendEmail();
  }, [answers,questions.length, sendEmail]);

  const handleAnswer = (answer) => {
    const q = questions[currentQuestion];
    setAnswers({ ...answers, [q.key]: answer });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowWhatsApp(true);
    }
  };

  const sendEmail = () => {
    emailjs.send(
      'service_kranxad',
      'template_2gdcgwl',
      {
        name: answers.name,
        email: answers.email,
        service: answers.service
      },
      'am1VZPuktoi7yeO5J'
    );
  };

  const goBack = () => {
    if (showWhatsApp) {
      setShowWhatsApp(false);
      setCurrentQuestion(questions.length - 1);
      return;
    }
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleWhatsAppRedirect = () => {
    const msg = `Hi, here are my details:\nName: ${answers.name}\nEmail: ${answers.email}\nService: ${answers.service}`;
    window.open(`https://wa.me/+918595650338?text=${encodeURIComponent(msg)}`);
  };

  const resetChat = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowWhatsApp(false);
  };

  const renderQuestion = () => {
    const q = questions[currentQuestion];

    if (showWhatsApp) return (
      <div className="bot-whatsapp-screen">
        <h3 className="bot-title">✅ Thank you!</h3>
        <p className="bot-sub">Let’s discuss on WhatsApp</p>

        <button className="bot-btn-primary" onClick={handleWhatsAppRedirect}>💬 Open WhatsApp</button>
        <button className="bot-btn-secondary" onClick={goBack}>← Back</button>
        <button className="bot-btn-outline" onClick={resetChat}>🔄 Restart</button>
      </div>
    );

    return (
      <div className="bot-question-block">
        <div className="bot-question">{q.text}</div>
        <div className="bot-step">Question {currentQuestion + 1} of {questions.length}</div>

        {q.type !== "select" ? (
          <form onSubmit={(e) => {
            e.preventDefault();
            const input = e.target[0];
            if (input.value.trim()) handleAnswer(input.value.trim());
          }}>
            <input
              type={q.type}
              className="bot-input"
              placeholder={`Enter your ${q.key}`}
              defaultValue={answers[q.key] || ""}
              autoFocus
            />
          </form>
        ) : (
          <div className="bot-options">
            {q.options.map((o, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(o)}
                className={`bot-option-btn ${answers[q.key] === o ? "active" : ""}`}
              >
                {o}
              </button>
            ))}
          </div>
        )}

        {currentQuestion > 0 && <button className="bot-back" onClick={goBack}>← Back</button>}
      </div>
    );
  };

  return (
    <div className="chatbot-fixed">
      {isOpen && (
        <div className="bot-window">
          <div className="bot-header">
            <span>🩺 MediLaw Assistant</span>
            <button className="bot-close" onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="bot-body">{renderQuestion()}</div>
        </div>
      )}

      <button className="bot-toggle" onClick={() => setIsOpen(!isOpen)}>💬</button>
    </div>
  );
};

export default ChatBot;
