import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const orderData = await request.json();
    const { customerName, customerEmail, customerPhone, items, total, orderDate } = orderData;

    // Crear el contenido HTML del correo
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Nuevo Pedido - Cositas pa' Sumercé</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #3b82f6; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .order-details { background-color: white; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .item { border-bottom: 1px solid #eee; padding: 10px 0; }
            .item:last-child { border-bottom: none; }
            .total { font-size: 18px; font-weight: bold; color: #3b82f6; text-align: right; }
            .customer-info { background-color: white; padding: 20px; margin: 20px 0; border-radius: 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🛒 Nuevo Pedido - Cositas pa' Sumercé</h1>
              <p>Fecha: ${orderDate}</p>
            </div>
            
            <div class="content">
              <div class="customer-info">
                <h2>📋 Información del Cliente</h2>
                <p><strong>Nombre:</strong> ${customerName}</p>
                <p><strong>Email:</strong> ${customerEmail}</p>
                <p><strong>Teléfono:</strong> ${customerPhone}</p>
              </div>

              <div class="order-details">
                <h2>🛍️ Detalles del Pedido</h2>
                ${items.map(item => `
                  <div class="item">
                    <div style="display: flex; justify-content: space-between;">
                      <div>
                        <strong>${item.name}</strong><br>
                        <small>Precio unitario: ${new Intl.NumberFormat('es-CO', {
                          style: 'currency',
                          currency: 'COP'
                        }).format(item.price)}</small>
                      </div>
                      <div style="text-align: right;">
                        <div>Cantidad: ${item.quantity}</div>
                        <div><strong>${new Intl.NumberFormat('es-CO', {
                          style: 'currency',
                          currency: 'COP'
                        }).format(item.price * item.quantity)}</strong></div>
                      </div>
                    </div>
                  </div>
                `).join('')}
                
                <div class="total" style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #3b82f6;">
                  Total del Pedido: ${new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP'
                  }).format(total)}
                </div>
              </div>

              <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #e0f2fe; border-radius: 8px;">
                <p style="margin: 0;"><strong>¡Gracias por tu pedido!</strong></p>
                <p style="margin: 5px 0;">Nos pondremos en contacto contigo pronto.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Configuración del transportador de correo (usando Gmail como ejemplo)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'tu-email@gmail.com', // Configurar en variables de entorno
        pass: process.env.EMAIL_PASS || 'tu-app-password'     // Usar App Password de Gmail
      }
    });

    // Enviar correo al administrador
    await transporter.sendMail({
      from: `"Cositas pa' Sumercé" <${process.env.EMAIL_USER}>`,
      to: 'andreisotelo369@gmail.com',
      subject: `🛒 Nuevo Pedido de ${customerName}`,
      html: htmlContent
    });

    // Enviar correo de confirmación al cliente
    const customerConfirmationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Confirmación de Pedido - Cositas pa' Sumercé</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #10b981; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ ¡Pedido Confirmado!</h1>
              <p>Gracias por tu compra, ${customerName}</p>
            </div>
            <div class="content">
              <p>Hemos recibido tu pedido correctamente.</p>
              <p><strong>Total:</strong> ${new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP'
              }).format(total)}</p>
              <p>Nos pondremos en contacto contigo pronto para coordinar la entrega.</p>
              <p>¡Gracias por confiar en Cositas pa' Sumercé!</p>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Cositas pa' Sumercé" <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: '✅ Confirmación de Pedido - Cositas pa\' Sumercé',
      html: customerConfirmationHtml
    });

    console.log('📧 Correos enviados exitosamente');
    console.log('Cliente:', customerName, customerEmail, customerPhone);
    console.log('Items:', items);
    console.log('Total:', total);

    return NextResponse.json({ 
      success: true, 
      message: 'Pedido enviado correctamente',
      orderNumber: `ORD-${Date.now()}`
    });

  } catch (error) {
    console.error('Error procesando pedido:', error);
    return NextResponse.json(
      { success: false, message: 'Error al enviar el pedido. Inténtalo de nuevo.' },
      { status: 500 }
    );
  }
}
