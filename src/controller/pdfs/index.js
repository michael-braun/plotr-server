import createPdfByHtml from './html';

export default function registerPdfRoutes(router) {
    router.post('/pdfs/html', createPdfByHtml);
}
