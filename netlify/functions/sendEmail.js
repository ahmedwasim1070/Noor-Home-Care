import nodemailer from "nodemailer";
import { parse } from "querystring";
import "dotenv/config";

// This function will handle the request to send the email
export const handler = async (event, context) => {
  // Only POST requests should be handled
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  console.log();

  // Parse the request body (assuming it's JSON)
  const { name, email, file } = JSON.parse(event.body);

  console.log("Sending email from"); // Ensure this is working

  // Convert the base64 file to a buffer
  const buffer = Buffer.from(file, "base64");

  // Create the transporter for Gmail SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.VITE_EMAIL_USER, // Use your environment variable
      pass: process.env.VITE_EMAIL_PASS, // Use your environment variable
    },
  });

  // Compose the email message
  const msg = {
    from: `${email}`,
    to: process.env.VITE_EMAIL_T0,
    subject: `Some Applied for Job`,
    html: `        <table
      width="100%"
      style="
        background-color: #f4f4f4;
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
      "
    >
      <tr>
        <td>
          <div
            style="
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            "
          >
            <div
              style="
                background: #0a4d68;
                color: #ffffff;
                text-align: center;
                padding: 10px;
              "
            >
              <h1 style="font-size: 30px">Noor Home Care</h1>
            </div>
            <div style="padding: 20px; line-height: 1.6; color: #333333">
              <p>${name},</p>
              <p>
                ${name} applied for job from
                <strong
                  ><a style="color: black" href="noorhomecare.co.uk"
                    >noorhomecare.co.uk</a
                  ></strong
                >
              </p>
              <ul style="list-style: none">
                <li>Applicat Name : <strong>${name}</strong></li>
                <li>Applicant Email: <strong>${email}</strong></li>
              </ul>
              <div style="margin: 2%; padding-top: 10px">
                <p><strong>User CV : </strong></p>
                <div style="width: 100%; height: 50px; text-align: center">
                  <a
                    href="cid:${name}-CV.pdf"
                    style="
                      display: inline-block;
                      padding: 10px 15px;
                      color: #ffffff;
                      background-color: #007bff;
                      text-decoration: none;
                      border-radius: 5px;
                      margin-top: 10px;
                    "
                    download
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div
              style="
                background: #05bfdb;
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #1e1e1e;
              "
            >
              <p>&copy; 2024 Noor Home Care. All rights reserved.</p>
              <p>
                <a style="color: #f3f3f3; text-decoration: none"
                  >Do Not Reply</a
                >
              </p>
            </div>
          </div>
        </td>
      </tr>
    </table>`,
    attachments: [
      {
        filename: `${name}-CV.pdf`,
        content: buffer,
        cid: `${name}-CV.pdf`,
      },
    ],
  };

  // Send the email
  try {
    const info = await transporter.sendMail(msg);
    console.log("Email Sent!", info.response);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email Sent Successfully" }),
    };
  } catch (err) {
    console.error("Error Sending the email:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to send message, please try again later",
      }),
    };
  }
};
