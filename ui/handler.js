WebViewer.WebComponent({
  path: '..',
  licenseKey: '1720883351179:7f99ea2a03000000009b874fe28135afa60936dbb3ff27e1059c42ffca',
  initialDoc: '../../files/demo.pdf',
}, document.getElementById('viewer'))
.then(instance => {
  const { documentViewer } = instance.Core;
  documentViewer.addEventListener('documentLoaded', () => {
    console.log('Document Loaded')
  });
});