import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, toEmail } = body;

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Configuration pour l'envoi d'email avec Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      secure: true,
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || 'contact@miguelboka.dev',
      to: toEmail,
      subject: `Nouveau message de ${name} - Portfolio`,
      replyTo: email,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #0F1729; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">Nouveau message de votre portfolio</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">Ce message a été envoyé depuis le formulaire de contact de votre portfolio.</p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email envoyé avec succès à:', toEmail);
    } catch (emailError) {
      console.error('Erreur lors de l\'envoi de l\'email:', emailError);
      
      // En cas d'échec, on envoie quand même une réponse de succès à l'utilisateur
      // mais on enregistre l'erreur dans les logs pour le débogage
      return NextResponse.json(
        { success: false, message: 'Erreur lors de l\'envoi du message, mais votre demande a été enregistrée.' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors du traitement de la demande:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
