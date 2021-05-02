const htmlParser = (props) => {
  const { children, ...rest } = props;

  return <div dangerouslySetInnerHTML={{ __html: children }} {...rest}></div>;
};

export default htmlParser;
