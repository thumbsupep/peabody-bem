tinymce.init({
  selector: 'h2.editable',
  inline: true,
  fixed_toolbar_container: '#collapseFour',
  toolbar: 'undo redo',
  menubar: false
});

tinymce.init({
  selector: 'div.editable',
  inline: true,
  fixed_toolbar_container: '#collapseFour',
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table contextmenu paste'
  ],
  toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
});