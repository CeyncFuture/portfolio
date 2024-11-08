/**
 * author Thilina Pahalagedara
 * created on 05-11-2024-21h-25m
 * github: https://github.com/Pahalagedara
 * copyright 2024
 */

import emailjs from "emailjs-com";
import { toast } from 'react-toastify';

/**
 * Sends an email using EmailJS.
 * @param {Object} params - The parameters for the email.
 * @param {string} params.name - Name of the sender.
 * @param {string} params.email - Email of the sender.
 * @param {string} params.message - Message to send.
 * @returns {Promise} - A promise that resolves when the email is sent.
 */
export const sendEmail = async (formData) => {
  const serviceId = "service_syhoikh";
  const templateId = "template_v0i7lwb";
  const userId = "tdGu0T8VmlKN9ZZKL";

    return await emailjs.send(
        serviceId,
        templateId,
        formData,
        userId
    );
};

export const notifySuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000, // 3 seconds
  });
};

export const notifyError = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};