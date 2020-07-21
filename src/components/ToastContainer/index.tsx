import React from 'react';

import Toast from './Toast';

import { Container } from './styles';
import { ToastMessage, useToast } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} toast={message} />
      ))}
    </Container>
  )
};

export default ToastContainer;
