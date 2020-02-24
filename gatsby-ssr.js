export const onRenderBody = (
  { setBodyAttributes, setHtmlAttributes },
  pluginOptions
) => {
  setHtmlAttributes({ className: 'min-h-screen' });
  setBodyAttributes({ className: 'min-h-screen' });
};
