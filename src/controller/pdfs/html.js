import puppeteer from 'puppeteer';
import { PdfCreator, PageCreator } from '@mbraun/plotr-core';

export default async function createPdfByHtml(ctx) {
    const pageCreator = new PageCreator(() => puppeteer.launch());
    const pdfCreator = new PdfCreator(pageCreator);
    await pdfCreator.setHtml(ctx.request.body.html);

    ctx.set('Content-Type', 'application/pdf');
    ctx.attachment(`${ctx.request.body.filename || 'download'}.pdf`);
    ctx.body = await pdfCreator.createPdf();
    ctx.status = 200;
}
