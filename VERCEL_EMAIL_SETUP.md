# 📧 Configuración de Email para Vercel

## ⚠️ IMPORTANTE: Variables de Entorno Faltantes

Tu aplicación está configurada correctamente para enviar emails, pero **Vercel necesita las variables de entorno** para funcionar en producción.

## 🔧 Pasos para Configurar Vercel:

### 1. Acceder al Dashboard de Vercel
- Ve a: https://vercel.com/dashboard
- Selecciona tu proyecto `plataforma_ecommerce`

### 2. Configurar Variables de Entorno
- Ve a **Settings** → **Environment Variables**
- Agrega estas 2 variables:

```
EMAIL_USER = cositascomerce@gmail.com
EMAIL_PASS = jxwphrmkffwxnxat
```

### 3. Aplicar a Todos los Ambientes
- Marca todas las casillas: **Production**, **Preview**, **Development**
- Haz clic en **Save**

### 4. Redesplegar
- Ve a **Deployments**
- Haz clic en los **3 puntos** del deployment más reciente
- Selecciona **Redeploy**

## ✅ Verificación Local
- ✅ Email configurado correctamente
- ✅ Variables de entorno locales funcionando
- ✅ API de envío operativa

## 🚫 Problema Actual
- ❌ Variables de entorno **NO configuradas en Vercel**
- ❌ Por eso falla el envío en producción

## 📱 Variables Necesarias
```bash
EMAIL_USER=cositascomerce@gmail.com
EMAIL_PASS=jxwphrmkffwxnxat
```

Una vez configuradas estas variables en Vercel, el sistema de email funcionará perfectamente en producción.
