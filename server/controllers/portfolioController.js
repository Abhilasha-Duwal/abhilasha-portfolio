import dotenv from "dotenv";
import AWS from "aws-sdk";

// Load environment variables
dotenv.config();

// Configure AWS SES
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

export const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields (name, email, message).",
      });
    }

    const params = {
      Source: process.env.EMAIL_FROM,
      Destination: {
        ToAddresses: [process.env.EMAIL_TO],
      },
      Message: {
        Subject: { Data: "Regarding MERN Portfolio App" },
        Body: {
          Html: {
            Data: `
              <h5>Detail Information</h5>
              <ul>
                <li><p><strong>Name:</strong> ${name}</p></li>
                <li><p><strong>Email:</strong> ${email}</p></li>
                <li><p><strong>Message:</strong> ${msg}</p></li>
              </ul>
            `,
          },
        },
      },
    };

    // Send email
    const result = await ses.sendEmail(params).promise();

    return res.status(200).json({
      success: true,
      message: "Your message was sent successfully!",
      messageId: result.MessageId,
    });
  } catch (error) {
    console.error("SES Send Email Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email.",
      error: error.message,
    });
  }
};

