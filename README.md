# NestJS + MongoDB — Test App

تطبيق بسيط لتجربة Docker / Render / CI-CD.

## تشغيل محلي
```bash
cp .env.example .env
npm install
npm run start:dev
```
محتاج MongoDB شغال محلياً أو استخدم MongoDB Atlas وحط الرابط في `MONGODB_URI`.

## الـ Scripts
| الأمر | الوظيفة |
|---|---|
| `npm run build` | بناء المشروع إلى `dist/` |
| `npm start` | تشغيل النسخة المبنية |
| `npm test` | تشغيل الاختبارات |

## Environment Variables
| المتغير | الوصف |
|---|---|
| `PORT` | البورت (Render بيحطه تلقائياً) |
| `MONGODB_URI` | رابط الاتصال بـ MongoDB |

## Endpoints
- `GET /` — رسالة ترحيب
- `GET /health` — Health check
- `POST /tasks` — `{ "title": "..." }`
- `GET /tasks`
- `GET /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

## للـ Render
- Build command: `npm ci && npm run build`
- Start command: `npm run start:prod`
- Health check path: `/health`
- ضيف `MONGODB_URI` في الـ Environment (Atlas مثلاً)
