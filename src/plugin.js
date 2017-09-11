const plugin = (editor) => {
  editor.addButton('checkbox', {
    tooltip: 'Checkbox',
    icon: 'checkbox',
    onclick: () => {
      editor.insertContent('<input type="checkbox">&nbsp;');
    }
  });
};

export default plugin;
