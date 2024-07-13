WebViewer.WebComponent({
  path: '..', // path to the Apryse 'lib' folder on your server
  licenseKey: 'YOUR_LICENSE_KEY', // sign up to get a key at https://dev.apryse.com
  initialDoc: '../../files/demo.pdf',
  // initialDoc: '/path/to/my/file.pdf', // You can also use documents on your server
}, document.getElementById('viewer'))
.then(instance => {
  const { documentViewer, annotationManager } = instance.Core;

  // call methods from instance, documentViewer and annotationManager as needed

  // you can also access major namespaces from the instance as follows:
  // const Tools = instance.Core.Tools;
  // const Annotations = instance.Core.Annotations;

  documentViewer.addEventListener('documentLoaded', () => {
    // call methods relating to the loaded document
  });
});